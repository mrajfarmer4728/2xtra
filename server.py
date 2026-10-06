import http.server
import socketserver
import json
import sqlite3
import hashlib
import secrets
import os
import mimetypes
from urllib.parse import urlparse, parse_qs
from datetime import datetime, timezone

PORT = 5000
DB_FILE = os.path.join(os.path.dirname(__file__), "database.db")
PUBLIC_DIR = os.path.join(os.path.dirname(__file__), "public")

def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode("utf-8")).hexdigest()

def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    
    # Users table
    c.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        wallet_balance REAL DEFAULT 0.0,
        role TEXT DEFAULT 'USER',
        kyc_status TEXT DEFAULT 'PENDING',
        aadhaar_pan TEXT DEFAULT '',
        doc_type TEXT DEFAULT '',
        created_at TEXT NOT NULL
    )
    """)

    # Pools table
    c.execute("""
    CREATE TABLE IF NOT EXISTS pools (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        ticket_price REAL NOT NULL,
        max_participants INTEGER NOT NULL,
        frequency TEXT NOT NULL,
        winners_per_round INTEGER NOT NULL,
        current_round INTEGER DEFAULT 1,
        status TEXT DEFAULT 'ACTIVE',
        reward_config TEXT NOT NULL,
        created_at TEXT NOT NULL
    )
    """)

    # Tickets table
    c.execute("""
    CREATE TABLE IF NOT EXISTS tickets (
        id TEXT PRIMARY KEY,
        pool_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        ticket_number INTEGER NOT NULL,
        status TEXT DEFAULT 'ACTIVE',
        won_round INTEGER DEFAULT 0,
        prize_info TEXT DEFAULT '',
        created_at TEXT NOT NULL,
        FOREIGN KEY(pool_id) REFERENCES pools(id),
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    """)

    # Rounds table
    c.execute("""
    CREATE TABLE IF NOT EXISTS rounds (
        id TEXT PRIMARY KEY,
        pool_id TEXT NOT NULL,
        round_number INTEGER NOT NULL,
        executed_at TEXT NOT NULL,
        winners_json TEXT NOT NULL,
        remaining_count INTEGER NOT NULL,
        rng_hash TEXT NOT NULL,
        FOREIGN KEY(pool_id) REFERENCES pools(id)
    )
    """)

    # Transactions table
    c.execute("""
    CREATE TABLE IF NOT EXISTS transactions (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        type TEXT NOT NULL,
        amount REAL NOT NULL,
        status TEXT DEFAULT 'COMPLETED',
        reference_id TEXT,
        remarks TEXT,
        created_at TEXT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    """)

    # Seed Admin User if not exists
    c.execute("SELECT id FROM users WHERE email = 'admin@vip.com'")
    if not c.fetchone():
        admin_id = "user_admin_001"
        c.execute("""
        INSERT INTO users (id, name, phone, email, password_hash, wallet_balance, role, kyc_status, aadhaar_pan, doc_type, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            admin_id, "VIP Admin", "9999999999", "admin@vip.com", hash_password("admin123"),
            100000.0, "ADMIN", "APPROVED", "ADMIN-PAN-001", "PAN", datetime.now(timezone.utc).isoformat()
        ))

    # Seed Demo Player if not exists
    c.execute("SELECT id FROM users WHERE phone = '9876543210'")
    demo_user = c.fetchone()
    if not demo_user:
        demo_id = "user_demo_001"
        c.execute("""
        INSERT INTO users (id, name, phone, email, password_hash, wallet_balance, role, kyc_status, aadhaar_pan, doc_type, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            demo_id, "Demo Player", "9876543210", "demo@viplottery.com", hash_password("123456"),
            50.0, "USER", "APPROVED", "ABCD1234E", "PAN", datetime.now(timezone.utc).isoformat()
        ))
    else:
        demo_id = demo_user[0]

    # Seed 1 USDT Pool if not exists
    c.execute("SELECT id FROM pools WHERE id = 'pool_1'")
    if not c.fetchone():
        cfg_1 = json.dumps({"1": "25 USDT Cash Prize", "default": "25 USDT Cash Prize"})
        c.execute("""
        INSERT INTO pools (id, title, description, ticket_price, max_participants, frequency, winners_per_round, current_round, status, reward_config, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            "pool_1", "Starter Pool #01 (1 USDT)", "60-Seat 1 USDT Starter Pool", 1.0, 60, "Daily", 2, 1, "ACTIVE", cfg_1, datetime.now(timezone.utc).isoformat()
        ))
        for i in range(1, 51):
            is_won = (i in [4, 18])
            uid = f"user_1_{i:03d}"
            c.execute("INSERT OR IGNORE INTO users (id, name, phone, email, password_hash, wallet_balance, role, kyc_status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                      (uid, f"Player #{i}", f"980001{i:04d}", f"player1_{i}@viplottery.com", hash_password("pass123"), 50.0, "USER", "APPROVED", datetime.now(timezone.utc).isoformat()))
            c.execute("INSERT INTO tickets (id, pool_id, user_id, ticket_number, status, won_round, prize_info, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                      (f"tkt_1_{i:03d}", "pool_1", uid, i, "WON" if is_won else "ACTIVE", 1 if is_won else 0, "25 USDT" if is_won else "", datetime.now(timezone.utc).isoformat()))

    # Seed 5 USDT Pool if not exists
    c.execute("SELECT id FROM pools WHERE id = 'pool_5'")
    if not c.fetchone():
        cfg_5 = json.dumps({
            "1": "125 USDT Cash + VIP Gold Crown Badge",
            "2": "150 USDT Cash + Telegram VIP Pass",
            "default": "125 USDT Cash Prize"
        })
        c.execute("""
        INSERT INTO pools (id, title, description, ticket_price, max_participants, frequency, winners_per_round, current_round, status, reward_config, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            "pool_5", "VIP Pro Pool #01 (5 USDT)", "Exclusive 60-member 5 USDT pool.",
            5.0, 60, "Daily", 2, 1, "ACTIVE", cfg_5, datetime.now(timezone.utc).isoformat()
        ))
        for i in range(1, 46):
            is_won = (i in [5, 12])
            uid = f"user_5_{i:03d}"
            c.execute("INSERT OR IGNORE INTO users (id, name, phone, email, password_hash, wallet_balance, role, kyc_status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                      (uid, f"Player #{i}", f"980005{i:04d}", f"player5_{i}@viplottery.com", hash_password("pass123"), 50.0, "USER", "APPROVED", datetime.now(timezone.utc).isoformat()))
            c.execute("INSERT INTO tickets (id, pool_id, user_id, ticket_number, status, won_round, prize_info, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                      (f"tkt_5_{i:03d}", "pool_5", uid, i, "WON" if is_won else "ACTIVE", 1 if is_won else 0, "125 USDT" if is_won else "", datetime.now(timezone.utc).isoformat()))

    # Seed 10 USDT Pool if not exists
    c.execute("SELECT id FROM pools WHERE id = 'pool_10'")
    if not c.fetchone():
        cfg_10 = json.dumps({"1": "250 USDT Cash Prize", "default": "250 USDT Cash Prize"})
        c.execute("""
        INSERT INTO pools (id, title, description, ticket_price, max_participants, frequency, winners_per_round, current_round, status, reward_config, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            "pool_10", "Mega VIP Pool #01 (10 USDT)", "60-Seat 10 USDT Mega Pool", 10.0, 60, "Daily", 2, 1, "ACTIVE", cfg_10, datetime.now(timezone.utc).isoformat()
        ))
        for i in range(1, 49):
            is_won = (i in [2, 20])
            uid = f"user_10_{i:03d}"
            c.execute("INSERT OR IGNORE INTO users (id, name, phone, email, password_hash, wallet_balance, role, kyc_status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                      (uid, f"Player #{i}", f"980010{i:04d}", f"player10_{i}@viplottery.com", hash_password("pass123"), 50.0, "USER", "APPROVED", datetime.now(timezone.utc).isoformat()))
            c.execute("INSERT INTO tickets (id, pool_id, user_id, ticket_number, status, won_round, prize_info, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                      (f"tkt_10_{i:03d}", "pool_10", uid, i, "WON" if is_won else "ACTIVE", 1 if is_won else 0, "250 USDT" if is_won else "", datetime.now(timezone.utc).isoformat()))

    conn.commit()
    conn.close()

class LotteryAppHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def _send_json(self, status_code, data):
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()
        self.wfile.write(json.dumps(data).encode("utf-8"))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def _read_body_json(self):
        length = int(self.headers.get("Content-Length", 0))
        if length == 0:
            return {}
        raw = self.rfile.read(length).decode("utf-8")
        try:
            return json.loads(raw)
        except Exception:
            return {}

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)

        # API Routes
        if path.startswith("/api/"):
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            c = conn.cursor()

            if path == "/api/auth/me":
                user_id = query.get("user_id", [""])[0]
                if not user_id:
                    conn.close()
                    return self._send_json(401, {"error": "Missing user_id"})
                c.execute("SELECT id, name, phone, email, wallet_balance, role, kyc_status, aadhaar_pan, doc_type FROM users WHERE id = ?", (user_id,))
                user = c.fetchone()
                conn.close()
                if user:
                    return self._send_json(200, {"user": dict(user)})
                return self._send_json(404, {"error": "User not found"})

            elif path == "/api/pools":
                c.execute("SELECT * FROM pools ORDER BY created_at DESC")
                pools = [dict(row) for row in c.fetchall()]
                for p in pools:
                    p["reward_config"] = json.loads(p["reward_config"])
                    # Count total bought and remaining active
                    c.execute("SELECT COUNT(*) FROM tickets WHERE pool_id = ?", (p["id"],))
                    p["total_sold"] = c.fetchone()[0]
                    c.execute("SELECT COUNT(*) FROM tickets WHERE pool_id = ? AND status = 'ACTIVE'", (p["id"],))
                    p["active_remaining"] = c.fetchone()[0]
                    c.execute("SELECT COUNT(*) FROM tickets WHERE pool_id = ? AND status = 'WON'", (p["id"],))
                    p["total_won"] = c.fetchone()[0]
                conn.close()
                return self._send_json(200, {"pools": pools})

            elif path.startswith("/api/pools/"):
                pool_id = path.replace("/api/pools/", "")
                c.execute("SELECT * FROM pools WHERE id = ?", (pool_id,))
                pool = c.fetchone()
                if not pool:
                    conn.close()
                    return self._send_json(404, {"error": "Pool not found"})
                pool_data = dict(pool)
                pool_data["reward_config"] = json.loads(pool_data["reward_config"])
                
                # Fetch tickets with user details
                c.execute("""
                SELECT t.id, t.ticket_number, t.status, t.won_round, t.prize_info, t.created_at, u.name, u.phone, u.id as user_id
                FROM tickets t
                JOIN users u ON t.user_id = u.id
                WHERE t.pool_id = ?
                ORDER BY t.ticket_number ASC
                """, (pool_id,))
                tickets = [dict(t) for t in c.fetchall()]
                
                # Fetch round history
                c.execute("SELECT * FROM rounds WHERE pool_id = ? ORDER BY round_number DESC", (pool_id,))
                rounds = []
                for r in c.fetchall():
                    rd = dict(r)
                    rd["winners"] = json.loads(rd["winners_json"])
                    rounds.append(rd)
                
                conn.close()
                return self._send_json(200, {"pool": pool_data, "tickets": tickets, "rounds": rounds})

            elif path == "/api/my-tickets":
                user_id = query.get("user_id", [""])[0]
                c.execute("""
                SELECT t.*, p.title as pool_title, p.frequency, p.current_round, p.status as pool_status
                FROM tickets t
                JOIN pools p ON t.pool_id = p.id
                WHERE t.user_id = ?
                ORDER BY t.created_at DESC
                """, (user_id,))
                tickets = [dict(r) for r in c.fetchall()]
                conn.close()
                return self._send_json(200, {"tickets": tickets})

            elif path == "/api/wallet/history":
                user_id = query.get("user_id", [""])[0]
                c.execute("SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC", (user_id,))
                txs = [dict(r) for r in c.fetchall()]
                conn.close()
                return self._send_json(200, {"transactions": txs})

            elif path == "/api/admin/all-data":
                # Admin snapshot
                c.execute("SELECT id, name, phone, email, wallet_balance, role, kyc_status, aadhaar_pan, doc_type, created_at FROM users WHERE role != 'ADMIN' ORDER BY created_at DESC")
                users = [dict(u) for u in c.fetchall()]
                c.execute("SELECT t.*, u.name as user_name, u.phone as user_phone FROM transactions t JOIN users u ON t.user_id = u.id ORDER BY t.created_at DESC LIMIT 50")
                txs = [dict(t) for t in c.fetchall()]
                c.execute("SELECT * FROM rounds ORDER BY executed_at DESC LIMIT 20")
                rounds = []
                for r in c.fetchall():
                    rd = dict(r)
                    rd["winners"] = json.loads(rd["winners_json"])
                    rounds.append(rd)
                conn.close()
                return self._send_json(200, {"users": users, "transactions": txs, "rounds": rounds})

            conn.close()
            return self._send_json(404, {"error": "API endpoint not found"})

        # Static file fallback
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path
        body = self._read_body_json()

        conn = sqlite3.connect(DB_FILE)
        conn.row_factory = sqlite3.Row
        c = conn.cursor()

        try:
            # 1. AUTH: REGISTER
            if path == "/api/auth/register":
                name = body.get("name", "").strip()
                phone = body.get("phone", "").strip()
                email = body.get("email", "").strip().lower()
                password = body.get("password", "")

                if not name or not phone or not email or not password:
                    conn.close()
                    return self._send_json(400, {"error": "All fields are required"})

                c.execute("SELECT id FROM users WHERE phone = ? OR email = ?", (phone, email))
                if c.fetchone():
                    conn.close()
                    return self._send_json(400, {"error": "Phone number or email already registered"})

                user_id = f"user_{secrets.token_hex(6)}"
                c.execute("""
                INSERT INTO users (id, name, phone, email, password_hash, wallet_balance, role, kyc_status, aadhaar_pan, doc_type, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, (
                    user_id, name, phone, email, hash_password(password),
                    0.0, "USER", "PENDING", "", "", datetime.now(timezone.utc).isoformat()
                ))
                conn.commit()
                conn.close()
                return self._send_json(201, {"success": True, "user_id": user_id, "name": name, "kyc_status": "PENDING"})

            # 2. AUTH: LOGIN
            elif path == "/api/auth/login":
                login_id = body.get("login_id", "").strip().lower() # phone or email
                password = body.get("password", "")
                
                c.execute("SELECT * FROM users WHERE (phone = ? OR email = ?)", (login_id, login_id))
                user = c.fetchone()
                if not user or user["password_hash"] != hash_password(password):
                    conn.close()
                    return self._send_json(401, {"error": "Invalid phone/email or password"})

                user_data = dict(user)
                del user_data["password_hash"]
                conn.close()
                return self._send_json(200, {"success": True, "user": user_data})

            # 3. KYC SUBMISSION
            elif path == "/api/kyc/submit":
                user_id = body.get("user_id")
                aadhaar_pan = body.get("aadhaar_pan", "").strip().upper()
                doc_type = body.get("doc_type", "PAN")

                if not user_id or not aadhaar_pan:
                    conn.close()
                    return self._send_json(400, {"error": "Missing Document number"})

                # Auto verify or set status
                c.execute("""
                UPDATE users 
                SET aadhaar_pan = ?, doc_type = ?, kyc_status = 'APPROVED'
                WHERE id = ?
                """, (aadhaar_pan, doc_type, user_id))
                conn.commit()
                conn.close()
                return self._send_json(200, {"success": True, "message": "KYC Approved Successfully!", "kyc_status": "APPROVED"})

            # 4. WALLET: DEPOSIT (USDT)
            elif path == "/api/wallet/deposit":
                user_id = body.get("user_id")
                amount = float(body.get("amount", 0))
                ref_id = body.get("ref_id", f"USDT-{secrets.token_hex(6).upper()}")

                if amount <= 0:
                    conn.close()
                    return self._send_json(400, {"error": "Invalid deposit amount"})

                tx_id = f"tx_{secrets.token_hex(6)}"
                c.execute("UPDATE users SET wallet_balance = wallet_balance + ? WHERE id = ?", (amount, user_id))
                c.execute("""
                INSERT INTO transactions (id, user_id, type, amount, status, reference_id, remarks, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """, (tx_id, user_id, "DEPOSIT", amount, "COMPLETED", ref_id, "Instant USDT Deposit (TRC-20)", datetime.now(timezone.utc).isoformat()))
                conn.commit()

                c.execute("SELECT wallet_balance FROM users WHERE id = ?", (user_id,))
                new_bal = c.fetchone()[0]
                conn.close()
                return self._send_json(200, {"success": True, "new_balance": new_bal, "message": f"{amount} USDT credited to wallet!"})

            # 5. WALLET: WITHDRAW (USDT)
            elif path == "/api/wallet/withdraw":
                user_id = body.get("user_id")
                amount = float(body.get("amount", 0))
                address = (body.get("address") or body.get("upi_id") or "").strip()

                if amount <= 0 or not address:
                    conn.close()
                    return self._send_json(400, {"error": "Invalid amount or USDT Wallet Address"})

                c.execute("SELECT wallet_balance FROM users WHERE id = ?", (user_id,))
                row = c.fetchone()
                if not row or row[0] < amount:
                    conn.close()
                    return self._send_json(400, {"error": "Insufficient wallet balance"})

                tx_id = f"tx_{secrets.token_hex(6)}"
                c.execute("UPDATE users SET wallet_balance = wallet_balance - ? WHERE id = ?", (amount, user_id))
                c.execute("""
                INSERT INTO transactions (id, user_id, type, amount, status, reference_id, remarks, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """, (tx_id, user_id, "WITHDRAWAL", amount, "COMPLETED", address, f"USDT Payout to {address}", datetime.now(timezone.utc).isoformat()))
                conn.commit()

                c.execute("SELECT wallet_balance FROM users WHERE id = ?", (user_id,))
                new_bal = c.fetchone()[0]
                conn.close()
                return self._send_json(200, {"success": True, "new_balance": new_bal, "message": f"{amount} USDT withdrawal processed!"})

            # 6. BUY TICKET
            elif path == "/api/pools/buy-ticket":
                user_id = body.get("user_id")
                pool_id = body.get("pool_id")

                # Check KYC
                c.execute("SELECT wallet_balance, kyc_status FROM users WHERE id = ?", (user_id,))
                user = c.fetchone()
                if not user:
                    conn.close()
                    return self._send_json(404, {"error": "User not found"})
                if user["kyc_status"] != "APPROVED":
                    conn.close()
                    return self._send_json(403, {"error": "KYC Verification required before purchasing tickets."})

                # Check Pool
                c.execute("SELECT * FROM pools WHERE id = ?", (pool_id,))
                pool = c.fetchone()
                if not pool or pool["status"] != "ACTIVE":
                    conn.close()
                    return self._send_json(400, {"error": "Pool is not currently active"})

                ticket_price = pool["ticket_price"]
                if user["wallet_balance"] < ticket_price:
                    conn.close()
                    return self._send_json(400, {"error": f"Insufficient balance. Ticket costs {ticket_price} USDT."})

                # Check capacity
                c.execute("SELECT COUNT(*) FROM tickets WHERE pool_id = ?", (pool_id,))
                total_bought = c.fetchone()[0]
                if total_bought >= pool["max_participants"]:
                    conn.close()
                    return self._send_json(400, {"error": "Pool is full! Maximum participants reached."})

                next_ticket_num = total_bought + 1
                ticket_id = f"tkt_{pool_id}_{next_ticket_num:03d}"

                # Deduct balance & create ticket
                c.execute("UPDATE users SET wallet_balance = wallet_balance - ? WHERE id = ?", (ticket_price, user_id))
                c.execute("""
                INSERT INTO tickets (id, pool_id, user_id, ticket_number, status, won_round, prize_info, created_at)
                VALUES (?, ?, ?, ?, 'ACTIVE', 0, '', ?)
                """, (ticket_id, pool_id, user_id, next_ticket_num, datetime.now(timezone.utc).isoformat()))

                # Log Transaction
                tx_id = f"tx_{secrets.token_hex(6)}"
                c.execute("""
                INSERT INTO transactions (id, user_id, type, amount, status, reference_id, remarks, created_at)
                VALUES (?, ?, 'TICKET_PURCHASE', ?, 'COMPLETED', ?, ?, ?)
                """, (tx_id, user_id, ticket_price, ticket_id, f"Ticket #{next_ticket_num:03d} for {pool['title']}", datetime.now(timezone.utc).isoformat()))

                conn.commit()
                c.execute("SELECT wallet_balance FROM users WHERE id = ?", (user_id,))
                new_bal = c.fetchone()[0]
                conn.close()

                return self._send_json(200, {
                    "success": True,
                    "ticket_number": next_ticket_num,
                    "ticket_id": ticket_id,
                    "new_balance": new_bal,
                    "message": f"Ticket #{next_ticket_num:03d} Confirmed! Best of luck!"
                })

            # 7. EXECUTE ROUND DRAW (ADMIN)
            elif path == "/api/admin/draw/execute":
                pool_id = body.get("pool_id")
                
                c.execute("SELECT * FROM pools WHERE id = ?", (pool_id,))
                pool = c.fetchone()
                if not pool:
                    conn.close()
                    return self._send_json(404, {"error": "Pool not found"})

                current_round = pool["current_round"]
                winners_to_pick = pool["winners_per_round"]
                reward_config = json.loads(pool["reward_config"])

                # Prize description for this round
                current_reward = reward_config.get(str(current_round), reward_config.get("default", f"{float(pool['ticket_price']) * 25:.0f} USDT Cash Prize"))

                # Get all ACTIVE tickets in this pool
                c.execute("""
                SELECT t.id, t.ticket_number, t.user_id, u.name, u.phone
                FROM tickets t
                JOIN users u ON t.user_id = u.id
                WHERE t.pool_id = ? AND t.status = 'ACTIVE'
                ORDER BY t.ticket_number ASC
                """, (pool_id,))
                active_tickets = [dict(r) for r in c.fetchall()]

                if len(active_tickets) == 0:
                    conn.close()
                    return self._send_json(400, {"error": "No active participants remaining in this pool!"})

                actual_winners_count = min(winners_to_pick, len(active_tickets))
                
                # Cryptographically pick winners using secrets
                picked_indices = []
                pool_indices = list(range(len(active_tickets)))
                for _ in range(actual_winners_count):
                    selected_idx = secrets.choice(pool_indices)
                    picked_indices.append(selected_idx)
                    pool_indices.remove(selected_idx)

                winners = []
                now_str = datetime.now(timezone.utc).isoformat()
                for idx in picked_indices:
                    win_tkt = active_tickets[idx]
                    winners.append({
                        "ticket_number": win_tkt["ticket_number"],
                        "ticket_id": win_tkt["id"],
                        "user_id": win_tkt["user_id"],
                        "user_name": win_tkt["name"],
                        "prize": current_reward
                    })
                    # Mark ticket as WON & eliminated
                    c.execute("""
                    UPDATE tickets 
                    SET status = 'WON', won_round = ?, prize_info = ?
                    WHERE id = ?
                    """, (current_round, current_reward, win_tkt["id"]))

                    # Credit user wallet with USDT prize (25x pool ticket price)
                    prize_amount = float(pool["ticket_price"]) * 25.0
                    c.execute("UPDATE users SET wallet_balance = wallet_balance + ? WHERE id = ?", (prize_amount, win_tkt["user_id"]))
                    
                    tx_id = f"tx_{secrets.token_hex(6)}"
                    c.execute("""
                    INSERT INTO transactions (id, user_id, type, amount, status, reference_id, remarks, created_at)
                    VALUES (?, ?, 'PRIZE_WIN', ?, 'COMPLETED', ?, ?, ?)
                    """, (tx_id, win_tkt["user_id"], prize_amount, win_tkt["id"], f"Round {current_round} Winner: {current_reward}", now_str))

                # Remaining count
                remaining_count = len(active_tickets) - actual_winners_count

                # Cryptographic RNG seed audit hash
                rng_hash = hashlib.sha256(f"{pool_id}-{current_round}-{secrets.token_hex(16)}-{now_str}".encode()).hexdigest()

                # Record round history
                round_id = f"rnd_{pool_id}_r{current_round}"
                c.execute("""
                INSERT INTO rounds (id, pool_id, round_number, executed_at, winners_json, remaining_count, rng_hash)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """, (round_id, pool_id, current_round, now_str, json.dumps(winners), remaining_count, rng_hash))

                # Advance pool to next round (or mark completed if empty)
                next_round = current_round + 1
                new_status = "COMPLETED" if remaining_count == 0 else "ACTIVE"
                c.execute("UPDATE pools SET current_round = ?, status = ? WHERE id = ?", (next_round, new_status, pool_id))

                conn.commit()
                conn.close()

                return self._send_json(200, {
                    "success": True,
                    "round_executed": current_round,
                    "winners": winners,
                    "remaining_participants": remaining_count,
                    "next_round": next_round,
                    "rng_hash": rng_hash,
                    "message": f"Round {current_round} Draw Complete! {actual_winners_count} Winner(s) selected and eliminated. {remaining_count} participants rolled over to Round {next_round}!"
                })

            # 8. UPDATE REWARD CONFIG (ADMIN DYNAMIC PRIZES)
            elif path == "/api/admin/pools/update-reward":
                pool_id = body.get("pool_id")
                reward_config = body.get("reward_config") # dict or JSON
                if isinstance(reward_config, dict):
                    reward_config_str = json.dumps(reward_config)
                else:
                    reward_config_str = str(reward_config)

                c.execute("UPDATE pools SET reward_config = ? WHERE id = ?", (reward_config_str, pool_id))
                conn.commit()
                conn.close()
                return self._send_json(200, {"success": True, "message": "Reward configuration updated successfully!"})

            # 9. CREATE NEW POOL (ADMIN)
            elif path == "/api/admin/pools/create":
                title = body.get("title", "VIP Special Pool")
                description = body.get("description", "")
                ticket_price = float(body.get("ticket_price", 500))
                max_participants = int(body.get("max_participants", 60))
                frequency = body.get("frequency", "Daily")
                winners_per_round = int(body.get("winners_per_round", 2))
                reward_config = json.dumps(body.get("reward_config", {
                    "1": f"{ticket_price * 25:.0f} USDT Prize + VIP Pass",
                    "default": f"{ticket_price * 25:.0f} USDT Prize"
                }))
                new_pool_id = f"pool_{secrets.token_hex(4)}"

                c.execute("""
                INSERT INTO pools (id, title, description, ticket_price, max_participants, frequency, winners_per_round, current_round, status, reward_config, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, 1, 'ACTIVE', ?, ?)
                """, (new_pool_id, title, description, ticket_price, max_participants, frequency, winners_per_round, reward_config, datetime.now(timezone.utc).isoformat()))
                conn.commit()
                conn.close()
                return self._send_json(201, {"success": True, "pool_id": new_pool_id, "message": "New Pool created successfully!"})

            conn.close()
            return self._send_json(404, {"error": "API route not found"})

        except Exception as e:
            if conn:
                conn.close()
            return self._send_json(500, {"error": str(e)})

def run():
    init_db()
    print(f">> VIP Lottery Server running at http://localhost:{PORT}")
    with socketserver.TCPServer(("", PORT), LotteryAppHandler) as httpd:
        httpd.serve_forever()

if __name__ == "__main__":
    run()
