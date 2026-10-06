# 🎰 2XTRA VIP Lottery Web App
> **Chit-Fund / Recurring Knockout Elimination Lottery System** with Telegram iOS VIP Fluid UI.

---

## 🌟 Core Features & Business Logic

1. **Knockout Elimination Pool (60 Participants)**:
   - Total Pool Size: **60 Players**.
   - Entry Price: **₹500 / Ticket**.
   - Interval: **Daily** (or Monthly).
   - Winners per Round: **2 Winners**.
   - **Elimination Rule**: Round 1 me 60 participants me se 2 winners select hote hain, unhe unka dynamic reward milta hai aur wo pool se exit ho jate hain. Bache huye 58 participants automatically Round 2 me roll over hote hain bina dubara ticket khareede!

2. **Admin Dynamic Reward Engine**:
   - Round rewards are **never hardcoded**.
   - Admin can set or alter prizes anytime before a draw:
     - Round 1: *₹5,000 Cash + VIP Crown*
     - Round 2: *₹6,500 Cash + Telegram VIP Pass*
     - Round 3: *₹8,000 Cash + Luxury Watch*
     - Default / Other: Custom reward

3. **Telegram iOS VIP Fluid Design**:
   - Ultra-smooth 60fps spring transitions.
   - Glassmorphism & Obsidian Dark Theme (`#090d16`).
   - Interactive 60-seat matrix grid with live status indicators.
   - Live Draw Stage with animated 3D Tumbler ball rollers & Web Audio API haptic sound effects.
   - Cryptographic Provably Fair HMAC SHA-256 seed hashing.

4. **KYC Gatekeeper & Wallet**:
   - KYC Verification required before ticket purchase (Aadhaar / PAN card submission).
   - Digital Wallet with instant UPI QR simulation & withdrawal request queue.
   - Complete immutable financial ledger for all transactions.

---

## 🚀 How to Run Locally

Run the zero-dependency Python backend server:

```powershell
py server.py
```

Then open your browser and navigate to:
👉 **`http://localhost:5000`**

---

## 🔑 Demo Accounts & Credentials

| Role | Login Identifier | Password | Default Balance | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Admin** | `admin@vip.com` | `admin123` | ₹100,000 | Can trigger draws, edit rewards, view all users |
| **Player (Verified)** | `9876543210` | `123456` | ₹5,000 | KYC Approved, has wallet balance to buy tickets |
