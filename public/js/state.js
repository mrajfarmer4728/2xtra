// Reactive Client State Management with Rich Fallback Dummy Data
const DUMMY_POOLS = [
  {
    id: "pool_1",
    title: "Starter 60-Seat Pool (1 USDT)",
    max_participants: 60,
    ticket_price: 1,
    start_date: "Today at 8:00 PM",
    current_round: 1,
    status: "OPEN",
    cycle_type: "DAILY",
    reward_config: { "1": "25 USDT Cash Prize", "default": "25 USDT Cash Prize" },
    total_sold: 50,
    active_remaining: 48,
    total_won: 2
  },
  {
    id: "pool_5",
    title: "VIP 60-Seat Knockout Pool (5 USDT)",
    max_participants: 60,
    ticket_price: 5,
    start_date: "Today at 8:00 PM",
    current_round: 1,
    status: "OPEN",
    cycle_type: "DAILY",
    reward_config: { "1": "125 USDT Cash Prize", "2": "150 USDT Cash + VIP Pass", "default": "125 USDT Cash Prize" },
    total_sold: 45,
    active_remaining: 43,
    total_won: 2
  },
  {
    id: "pool_10",
    title: "Mega 60-Seat Pool (10 USDT)",
    max_participants: 60,
    ticket_price: 10,
    start_date: "Today at 8:00 PM",
    current_round: 1,
    status: "OPEN",
    cycle_type: "DAILY",
    reward_config: { "1": "250 USDT Cash Prize", "default": "250 USDT Cash Prize" },
    total_sold: 48,
    active_remaining: 46,
    total_won: 2
  }
];

const DUMMY_NAMES = [
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

function generateFallbackTickets(poolId, price, count = 45) {
  const tkts = [];
  for (let i = 1; i <= count; i++) {
    const isWon = (i === 5 || i === 12);
    tkts.push({
      id: `tkt_${price}_${i}`,
      pool_id: poolId,
      user_id: `demo_user_${price}_${i}`,
      ticket_number: i,
      name: DUMMY_NAMES[(i - 1) % DUMMY_NAMES.length] || `Player #${i}`,
      status: isWon ? "WON" : "ACTIVE",
      won_round: isWon ? 1 : null,
      prize_info: isWon ? `${price * 25} USDT Cash` : null
    });
  }
  return tkts;
}

const DUMMY_ROUNDS = [
  {
    id: "rnd_5_1",
    pool_id: "pool_5",
    round_number: 1,
    drawn_at: new Date(Date.now() - 3600000 * 14).toISOString(),
    winners: [
      { ticket_number: 5, user_name: "Ananya Roy", prize: "125 USDT Cash" },
      { ticket_number: 12, user_name: "Priya Nair", prize: "125 USDT Cash" }
    ],
    rng_hash: "a4f8c9e1b2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7"
  },
  {
    id: "rnd_1_1",
    pool_id: "pool_1",
    round_number: 1,
    drawn_at: new Date(Date.now() - 3600000 * 14).toISOString(),
    winners: [
      { ticket_number: 4, user_name: "Amit Joshi", prize: "25 USDT Cash" },
      { ticket_number: 18, user_name: "Rajesh Khanna", prize: "25 USDT Cash" }
    ],
    rng_hash: "e9b2c3d4a1f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4"
  }
];

const State = {
  currentUser: null,
  activeTab: 'pools',
  profileSubTab: 'wallet', // 'wallet' | 'tickets' | 'kyc'
  allPools: DUMMY_POOLS,
  selectedPoolPrice: 5,
  poolViewTab: 'available', // 'available' | 'ongoing'
  ongoingFilter: 'ALL', // 'ALL' | 'ACTIVE' | 'WON'
  currentPool: DUMMY_POOLS[1],
  poolTickets: generateFallbackTickets("pool_5", 5, 45),
  poolRounds: DUMMY_ROUNDS,
  myTickets: [],
  walletHistory: [],
  adminData: null,
  isDrawing: false,
  language: 'en',
  isSpeaking: false,
  theme: 'light',

  setProfileSubTab(subTab) {
    this.profileSubTab = subTab;
    this.notify();
  },

  setPoolViewTab(tab) {
    this.poolViewTab = tab;
    this.notify();
  },

  setOngoingFilter(filter) {
    this.ongoingFilter = filter;
    this.notify();
  },

  setPoolPrice(price) {
    const num = Number(price);
    this.selectedPoolPrice = num;
    if (this.allPools && this.allPools.length > 0) {
      const match = this.allPools.find(p => Number(p.ticket_price) === num);
      if (match) {
        this.currentPool = match;
        this.poolTickets = generateFallbackTickets(match.id, num, num === 1 ? 50 : 45);
      }
    }
    this.notify();
  },

  init() {
    const savedLang = localStorage.getItem('vip_lottery_lang') || 'en';
    this.language = savedLang;

    const savedTheme = localStorage.getItem('vip_lottery_theme') || 'light';
    this.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', this.theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', this.theme === 'dark' ? '#0a0e17' : '#ffffff');
    }

    // By default, NO ONE is logged in (Normal Viewer / Guest mode)
    // Only restore user if explicitly logged in via 'vip_lottery_user_active'
    const isExplicitLogin = localStorage.getItem('vip_lottery_user_active');
    if (isExplicitLogin === 'true') {
      const saved = localStorage.getItem('vip_lottery_user');
      if (saved) {
        try {
          this.currentUser = JSON.parse(saved);
        } catch (e) {
          this.currentUser = null;
        }
      }
    } else {
      this.currentUser = null;
      localStorage.removeItem('vip_lottery_user');
    }
  },

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('vip_lottery_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#0a0e17' : '#ffffff');
    }
    this.notify();
  },

  setLanguage(lang) {
    this.language = lang;
    localStorage.setItem('vip_lottery_lang', lang);
    this.notify();
  },

  setUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('vip_lottery_user_active', 'true');
      localStorage.setItem('vip_lottery_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('vip_lottery_user_active');
      localStorage.removeItem('vip_lottery_user');
    }
    this.notify();
  },

  updateBalance(newBalance) {
    if (this.currentUser) {
      this.currentUser.wallet_balance = newBalance;
      this.setUser(this.currentUser);
    }
  },

  setKYCStatus(status, docNumber) {
    if (this.currentUser) {
      this.currentUser.kyc_status = status;
      if (docNumber) this.currentUser.aadhaar_pan = docNumber;
      this.setUser(this.currentUser);
    }
  },

  setTab(tab) {
    this.activeTab = tab;
    this.notify();
  },

  listeners: [],
  subscribe(fn) {
    this.listeners.push(fn);
  },

  notify() {
    this.listeners.forEach(fn => fn(this));
  }
};
