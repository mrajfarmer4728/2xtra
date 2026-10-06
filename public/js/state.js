// Reactive Client State Management
const State = {
  currentUser: null,
  activeTab: 'pools',
  profileSubTab: 'wallet', // 'wallet' | 'tickets' | 'kyc'
  allPools: [],
  selectedPoolPrice: 5,
  poolViewTab: 'available', // 'available' | 'ongoing'
  ongoingFilter: 'ALL', // 'ALL' | 'ACTIVE' | 'WON'
  currentPool: null,
  poolTickets: [],
  poolRounds: [],
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
