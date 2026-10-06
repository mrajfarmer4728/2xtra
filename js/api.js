// API Client for VIP Lottery System (Hybrid: Python Server Backend + GitHub Pages Offline DB)
const MockDB = {
  getStorage() {
    let data = localStorage.getItem('vip_lottery_mock_db');
    if (!data) {
      data = this.initDefault();
      this.saveStorage(data);
    } else {
      try {
        data = JSON.parse(data);
        if (!data.pools || data.pools.length < 3) {
          data = this.initDefault();
          this.saveStorage(data);
        }
      } catch(e) { data = this.initDefault(); }
    }
    return data;
  },
  saveStorage(data) {
    localStorage.setItem('vip_lottery_mock_db', JSON.stringify(data));
  },
  initDefault() {
    const pool1 = {
      id: "pool_1",
      title: "Starter 60-Seat Pool (1 USDT)",
      max_participants: 60,
      ticket_price: 1,
      start_date: "Today at 8:00 PM",
      current_round: 1,
      status: "OPEN",
      cycle_type: "DAILY",
      reward_config: { "1": "25 USDT Cash", "default": "25 USDT Cash" }
    };
    const pool5 = {
      id: "pool_5",
      title: "VIP 60-Seat Knockout Pool (5 USDT)",
      max_participants: 60,
      ticket_price: 5,
      start_date: "Today at 8:00 PM",
      current_round: 1,
      status: "OPEN",
      cycle_type: "DAILY",
      reward_config: { "1": "125 USDT Cash", "default": "125 USDT Cash" }
    };
    const pool10 = {
      id: "pool_10",
      title: "Mega 60-Seat Pool (10 USDT)",
      max_participants: 60,
      ticket_price: 10,
      start_date: "Today at 8:00 PM",
      current_round: 1,
      status: "OPEN",
      cycle_type: "DAILY",
      reward_config: { "1": "250 USDT Cash", "default": "250 USDT Cash" }
    };

    const users = [
      { id: "usr_demo", name: "Demo Player", phone: "9876543210", email: "demo@viplottery.com", role: "USER", wallet_balance: 50, kyc_status: "APPROVED", aadhaar_pan: "ABCDE1234F", doc_type: "PAN" },
      { id: "usr_admin", name: "Master Admin", phone: "9999999999", email: "admin@vip.com", role: "ADMIN", wallet_balance: 10000, kyc_status: "APPROVED", aadhaar_pan: "ADMIN9999Z", doc_type: "PAN" }
    ];

    const demoNames = [
      "Aarav Patel", "Rohan Mehta", "Vikram Singh", "Pooja Verma", "Ananya Roy", 
      "Rahul Sharma", "Karan Johar", "Deepak Kumar", "Amit Joshi", "Neha Sharma", 
      "Suresh Raina", "Priya Nair", "Manish Malhotra", "Sunil Gavaskar", "Kavita Rao", 
      "Rajesh Khanna", "Sanjay Dutt", "Alok Nath", "Manoj Bajpayee", "Dev Anand", 
      "Abhishek Bachchan", "Ajay Devgn", "Varun Dhawan", "Sidharth Malhotra", "Ranbir Kapoor", 
      "Kartik Aaryan", "Vicky Kaushal", "Ayushmann Khurrana", "Rajkummar Rao", "Pankaj Tripathi", 
      "Nawazuddin Siddiqui", "Divyenndu Sharma", "Jaideep Ahlawat", "Vijay Varma", "Pratik Gandhi", 
      "Adarsh Gourav", "Jitendra Kumar", "Bhuvan Bam", "Ashish Chanchlani", "Carry Minati", 
      "Tanmay Bhat", "Zakir Khan", "Anubhav Bassi", "Abhishek Upmanyu", "Munawar Faruqui",
      "Kishore Kumar", "Mohammed Rafi", "Lata Mangeshkar", "Asha Bhosle", "RD Burman", "Mukesh"
    ];

    const tickets = [];

    // Seed tickets for pool_5: 45 sold (15 available). In ongoing view: 43 Active, 2 Won & Exited.
    for (let i = 1; i <= 45; i++) {
      const isWon = (i === 5 || i === 12);
      tickets.push({
        id: `tkt_5_${i}`,
        pool_id: pool5.id,
        user_id: `demo_user_${i}`,
        ticket_number: i,
        name: demoNames[i - 1] || `Player #${i}`,
        status: isWon ? "WON" : "ACTIVE",
        won_round: isWon ? 1 : null,
        prize_info: isWon ? "125 USDT Cash" : null
      });
    }

    // Seed tickets for pool_1: 50 sold (10 available). In ongoing view: 48 Active, 2 Won & Exited.
    for (let i = 1; i <= 50; i++) {
      const isWon = (i === 4 || i === 18);
      tickets.push({
        id: `tkt_1_${i}`,
        pool_id: pool1.id,
        user_id: `demo_user_1_${i}`,
        ticket_number: i,
        name: demoNames[(i + 5) % demoNames.length] || `Player #${i}`,
        status: isWon ? "WON" : "ACTIVE",
        won_round: isWon ? 1 : null,
        prize_info: isWon ? "25 USDT Cash" : null
      });
    }

    // Seed tickets for pool_10: 48 sold (12 available). In ongoing view: 46 Active, 2 Won & Exited.
    for (let i = 1; i <= 48; i++) {
      const isWon = (i === 2 || i === 20);
      tickets.push({
        id: `tkt_10_${i}`,
        pool_id: pool10.id,
        user_id: `demo_user_10_${i}`,
        ticket_number: i,
        name: demoNames[(i + 10) % demoNames.length] || `Player #${i}`,
        status: isWon ? "WON" : "ACTIVE",
        won_round: isWon ? 1 : null,
        prize_info: isWon ? "250 USDT Cash" : null
      });
    }

    return {
      pools: [pool1, pool5, pool10],
      users: users,
      tickets: tickets,
      rounds: [
        {
          id: "rnd_500_1",
          pool_id: pool500.id,
          round_number: 1,
          drawn_at: new Date(Date.now() - 86400000).toISOString(),
          winners: [
            { ticket_number: 5, user_name: demoNames[4], prize: "125 USDT Prize" },
            { ticket_number: 12, user_name: demoNames[11], prize: "125 USDT Prize" }
          ],
          rng_hash: "a4f8c9e1b2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7"
        }
      ],
      transactions: [
        { id: "tx_1", user_id: "usr_demo", type: "DEPOSIT", amount: 50, remarks: "USDT Deposit (TRC-20)", created_at: new Date(Date.now() - 3600000).toISOString() },
        { id: "tx_2", user_id: "usr_demo", type: "TICKET_PURCHASE", amount: 5, remarks: "Seat Booked", created_at: new Date().toISOString() }
      ]
    };
  }
};

const API = {
  baseUrl: '',
  isStaticHost: window.location.hostname.includes('github.io') || window.location.protocol === 'file:',

  async request(endpoint, options = {}) {
    if (this.isStaticHost) {
      throw new Error('Static host: fallback to offline engine');
    }
    const defaultHeaders = { 'Content-Type': 'application/json' };
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: { ...defaultHeaders, ...options.headers },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Server error');
    return data;
  },

  // Auth
  async login(login_id, password) {
    try {
      return await this.request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ login_id, password }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      let user = db.users.find(u => (u.phone === login_id || u.email === login_id));
      if (!user) {
        user = {
          id: 'usr_' + Date.now(),
          name: 'Player ' + login_id.substring(login_id.length - 4),
          phone: login_id,
          email: login_id.includes('@') ? login_id : `${login_id}@vip.com`,
          role: login_id.includes('admin') ? 'ADMIN' : 'USER',
          wallet_balance: login_id.includes('admin') ? 100000 : 2500,
          kyc_status: 'APPROVED',
          aadhaar_pan: 'ABCD1234X',
          doc_type: 'PAN'
        };
        db.users.push(user);
        MockDB.saveStorage(db);
      }
      return { message: 'Login successful', user };
    }
  },

  async register(name, phone, email, password) {
    try {
      return await this.request('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, phone, email, password }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      const user = {
        id: 'usr_' + Date.now(),
        name,
        phone,
        email,
        role: 'USER',
        wallet_balance: 1000,
        kyc_status: 'PENDING',
        aadhaar_pan: '',
        doc_type: ''
      };
      db.users.push(user);
      MockDB.saveStorage(db);
      return { message: 'Registration successful', user };
    }
  },

  async getMe(user_id) {
    try {
      return await this.request(`/api/auth/me?user_id=${encodeURIComponent(user_id)}`);
    } catch (e) {
      const db = MockDB.getStorage();
      const user = db.users.find(u => u.id === user_id) || db.users[0];
      return { user };
    }
  },

  // KYC
  async submitKYC(user_id, aadhaar_pan, doc_type) {
    try {
      return await this.request('/api/kyc/submit', {
        method: 'POST',
        body: JSON.stringify({ user_id, aadhaar_pan, doc_type }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      const u = db.users.find(user => user.id === user_id);
      if (u) {
        u.kyc_status = 'APPROVED';
        u.aadhaar_pan = aadhaar_pan;
        u.doc_type = doc_type;
        MockDB.saveStorage(db);
      }
      return { message: 'KYC verified successfully', kyc_status: 'APPROVED' };
    }
  },

  // Wallet
  async deposit(user_id, amount, ref_id) {
    try {
      return await this.request('/api/wallet/deposit', {
        method: 'POST',
        body: JSON.stringify({ user_id, amount, ref_id }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      const u = db.users.find(user => user.id === user_id);
      const amt = Number(amount);
      if (u) u.wallet_balance += amt;
      db.transactions.unshift({
        id: 'tx_' + Date.now(),
        user_id,
        type: 'DEPOSIT',
        amount: amt,
        remarks: 'Instant USDT Deposit (TRC-20)',
        created_at: new Date().toISOString()
      });
      MockDB.saveStorage(db);
      return { message: 'Deposit successful', new_balance: u ? u.wallet_balance : amt };
    }
  },

  async withdraw(user_id, amount, address) {
    try {
      return await this.request('/api/wallet/withdraw', {
        method: 'POST',
        body: JSON.stringify({ user_id, amount, address, upi_id: address }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      const u = db.users.find(user => user.id === user_id);
      const amt = Number(amount);
      if (u) {
        if (u.wallet_balance < amt) throw new Error('Insufficient wallet balance');
        u.wallet_balance -= amt;
      }
      db.transactions.unshift({
        id: 'tx_' + Date.now(),
        user_id,
        type: 'WITHDRAWAL',
        amount: amt,
        remarks: `USDT Payout to ${address}`,
        created_at: new Date().toISOString()
      });
      MockDB.saveStorage(db);
      return { message: 'Withdrawal processed', new_balance: u ? u.wallet_balance : 0 };
    }
  },

  async getWalletHistory(user_id) {
    try {
      return await this.request(`/api/wallet/history?user_id=${encodeURIComponent(user_id)}`);
    } catch (e) {
      const db = MockDB.getStorage();
      const txs = db.transactions.filter(t => t.user_id === user_id);
      return { transactions: txs };
    }
  },

  // Pools & Tickets
  async getPools() {
    try {
      return await this.request('/api/pools');
    } catch (e) {
      const db = MockDB.getStorage();
      return { pools: db.pools };
    }
  },

  async getPoolDetails(pool_id) {
    try {
      return await this.request(`/api/pools/${encodeURIComponent(pool_id)}`);
    } catch (e) {
      const db = MockDB.getStorage();
      const pool = db.pools.find(p => p.id === pool_id) || db.pools[0];
      const tickets = db.tickets.filter(t => t.pool_id === pool.id);
      const rounds = db.rounds.filter(r => r.pool_id === pool.id);
      return { pool, tickets, rounds };
    }
  },

  async buyTicket(user_id, pool_id) {
    try {
      return await this.request('/api/pools/buy-ticket', {
        method: 'POST',
        body: JSON.stringify({ user_id, pool_id }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      const pool = db.pools.find(p => p.id === pool_id) || db.pools[0];
      const u = db.users.find(user => user.id === user_id);
      if (!u) throw new Error('User not found');
      if (u.wallet_balance < pool.ticket_price) throw new Error('Insufficient wallet balance! Please deposit funds.');
      
      const currentTkts = db.tickets.filter(t => t.pool_id === pool.id);
      if (currentTkts.length >= pool.max_participants) throw new Error('Pool is already full!');

      const nextSeat = currentTkts.length + 1;
      u.wallet_balance -= pool.ticket_price;
      const newTkt = {
        id: 'tkt_' + Date.now(),
        pool_id: pool.id,
        user_id: u.id,
        ticket_number: nextSeat,
        name: u.name,
        status: 'ACTIVE',
        won_round: null,
        prize_info: null
      };
      db.tickets.push(newTkt);
      db.transactions.unshift({
        id: 'tx_' + Date.now(),
        user_id: u.id,
        type: 'TICKET_PURCHASE',
        amount: pool.ticket_price,
        remarks: `Seat #${nextSeat} Booked (${pool.title})`,
        created_at: new Date().toISOString()
      });
      MockDB.saveStorage(db);
      return { message: `Ticket #${nextSeat} successfully booked!`, ticket: newTkt, new_balance: u.wallet_balance };
    }
  },

  async getMyTickets(user_id) {
    try {
      return await this.request(`/api/my-tickets?user_id=${encodeURIComponent(user_id)}`);
    } catch (e) {
      const db = MockDB.getStorage();
      const tkts = db.tickets.filter(t => t.user_id === user_id);
      return { tickets: tkts };
    }
  },

  // Admin Actions
  async executeDraw(pool_id) {
    try {
      return await this.request('/api/admin/draw/execute', {
        method: 'POST',
        body: JSON.stringify({ pool_id }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      const pool = db.pools.find(p => p.id === pool_id) || db.pools[0];
      const activeTickets = db.tickets.filter(t => t.pool_id === pool.id && t.status === 'ACTIVE');
      if (activeTickets.length < 2) throw new Error('Not enough active candidates remaining to draw 2 winners!');

      // Shuffle & pick 2 distinct winners
      const shuffled = [...activeTickets].sort(() => 0.5 - Math.random());
      const w1 = shuffled[0];
      const w2 = shuffled[1];

      const curRnd = pool.current_round;
      const rewards = pool.reward_config || {};
      const curPrize = rewards[String(curRnd)] || rewards['default'] || (Number(pool.ticket_price) * 25 + ' USDT Prize');

      w1.status = 'WON';
      w1.won_round = curRnd;
      w1.prize_info = curPrize;

      w2.status = 'WON';
      w2.won_round = curRnd;
      w2.prize_info = curPrize;

      // Credit winnings
      const u1 = db.users.find(u => u.id === w1.user_id);
      const u2 = db.users.find(u => u.id === w2.user_id);
      if (u1) u1.wallet_balance += 5000;
      if (u2) u2.wallet_balance += 5000;

      const newRound = {
        round_number: curRnd,
        pool_id: pool.id,
        winners: [
          { ticket_number: w1.ticket_number, user_name: w1.name, prize: curPrize },
          { ticket_number: w2.ticket_number, user_name: w2.name, prize: curPrize }
        ],
        rng_hash: Array.from({length: 32}, () => Math.floor(Math.random()*16).toString(16)).join('')
      };
      db.rounds.unshift(newRound);
      pool.current_round += 1;
      MockDB.saveStorage(db);

      return {
        message: `Round #${curRnd} Draw Completed! Winners: #${w1.ticket_number} (${w1.name}) & #${w2.ticket_number} (${w2.name})!`,
        winners: [
          { ticket_number: w1.ticket_number, user_name: w1.name, prize: curPrize },
          { ticket_number: w2.ticket_number, user_name: w2.name, prize: curPrize }
        ],
        next_round: pool.current_round
      };
    }
  },

  async updateRewardConfig(pool_id, reward_config) {
    try {
      return await this.request('/api/admin/pools/update-reward', {
        method: 'POST',
        body: JSON.stringify({ pool_id, reward_config }),
      });
    } catch (e) {
      const db = MockDB.getStorage();
      const pool = db.pools.find(p => p.id === pool_id) || db.pools[0];
      pool.reward_config = reward_config;
      MockDB.saveStorage(db);
      return { message: 'Dynamic rewards updated', reward_config };
    }
  },

  async getAdminData() {
    try {
      return await this.request('/api/admin/all-data');
    } catch (e) {
      const db = MockDB.getStorage();
      return { users: db.users, pools: db.pools, tickets: db.tickets, rounds: db.rounds };
    }
  }
};
