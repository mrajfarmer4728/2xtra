// Application Logic & Telegram Controller with Hindi Voice Guide & Festive Confetti
const App = {
  authMode: 'login',
  audioCtx: null,

  // Confetti particles generator (Zero external dependencies)
  launchConfetti() {
    try {
      const colors = ['#ffd700', '#00a8ff', '#10b981', '#ff4757', '#ffffff', '#e056fd'];
      for (let i = 0; i < 60; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti-particle';
        conf.style.cssText = `
          position: fixed;
          top: -10px;
          left: ${Math.random() * 100}vw;
          width: ${Math.random() * 8 + 6}px;
          height: ${Math.random() * 12 + 6}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          z-index: 99999;
          pointer-events: none;
          border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
          transform: rotate(${Math.random() * 360}deg);
          animation: confetti-fall ${Math.random() * 2 + 1.8}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `;
        document.body.appendChild(conf);
        setTimeout(() => conf.remove(), 4000);
      }
    } catch (e) {}
  },

  // Audio Voice Assistant (Web Speech API) - Strict Language Output
  toggleSpeechGuide() {
    this.playClick();
    if (!('speechSynthesis' in window)) {
      this.showToast(State.language === 'en' ? '⚠️ Audio guide not supported on this browser.' : '⚠️ आपके ब्राउज़र में ऑडियो सुविधा उपलब्ध नहीं है।');
      return;
    }

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      State.isSpeaking = false;
      this.render();
      return;
    }

    const lang = State.language === 'en' ? 'en' : 'hi';
    const textToSpeak = I18N[lang].voiceSpeech;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = lang === 'en' ? 'en-US' : 'hi-IN';
    utterance.rate = 0.92; // Clear pacing for easy listening

    utterance.onstart = () => {
      State.isSpeaking = true;
      this.render();
    };

    utterance.onend = () => {
      State.isSpeaking = false;
      this.render();
    };

    utterance.onerror = () => {
      State.isSpeaking = false;
      this.render();
    };

    window.speechSynthesis.speak(utterance);
  },

  toggleLanguage() {
    this.playClick();
    const newLang = State.language === 'en' ? 'hi' : 'en';
    State.setLanguage(newLang);
    this.showToast(newLang === 'en' ? '🌐 Language: English' : '🇮🇳 भाषा: हिंदी');
  },

  setLanguage(lang) {
    this.playClick();
    State.setLanguage(lang);
    this.showToast(lang === 'en' ? '🌐 Language: English' : '🇮🇳 भाषा: हिंदी');
  },

  setTheme(theme) {
    this.playClick();
    State.setTheme(theme);
    this.showToast(theme === 'dark' 
      ? (State.language === 'en' ? '🌙 Dark Mode Activated' : '🌙 डार्क मोड चालू किया गया') 
      : (State.language === 'en' ? '☀️ Bright Mode Activated' : '☀️ ब्राइट मोड चालू किया गया')
    );
  },

  toggleTheme() {
    this.setTheme(State.theme === 'dark' ? 'light' : 'dark');
  },

  openWhatsAppHelp() {
    this.playClick();
    const isEn = State.language === 'en';
    const msg = encodeURIComponent(isEn ? "Hello! I need help with 2XTRA 60-Seat Lottery." : "नमस्ते! मुझे 2XTRA 60-सीट लॉटरी के बारे में सहायता चाहिए।");
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  },

  playClick() {
    try {
      if (!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch (e) {}
  },

  playWinFanfare() {
    try {
      if (!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + idx * 0.12);
        gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + idx * 0.12 + 0.4);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(this.audioCtx.currentTime + idx * 0.12);
        osc.stop(this.audioCtx.currentTime + idx * 0.12 + 0.4);
      });
    } catch (e) {}
  },

  showToast(msg, duration = 3500) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  async init() {
    State.init();
    State.subscribe(() => this.render());

    await this.refreshData();
    this.render();
  },

  async refreshData() {
    try {
      const poolsRes = await API.getPools();
      if (poolsRes.pools && poolsRes.pools.length > 0) {
        State.allPools = poolsRes.pools;
        const targetPrice = Number(State.selectedPoolPrice) || 5;
        const activePool = poolsRes.pools.find(p => Number(p.ticket_price) === targetPrice) || poolsRes.pools[0];
        const details = await API.getPoolDetails(activePool.id);
        State.currentPool = details.pool;
        State.poolTickets = details.tickets;
        State.poolRounds = details.rounds;
      }

      if (State.currentUser) {
        const me = await API.getMe(State.currentUser.id);
        if (me.user) State.setUser(me.user);

        const myTkts = await API.getMyTickets(State.currentUser.id);
        State.myTickets = myTkts.tickets || [];

        const txs = await API.getWalletHistory(State.currentUser.id);
        State.walletHistory = txs.transactions || [];

        if (State.currentUser.role === 'ADMIN') {
          const adm = await API.getAdminData();
          State.adminData = adm;
        }
      }
    } catch (err) {
      console.error('Refresh data error:', err);
    }
  },

  async selectPoolPrice(price) {
    const num = Number(price);
    this.playClick();
    if (num === 10) {
      const isEn = State.language === 'en';
      this.showToast(isEn ? '⏳ 10 USDT Mega Pool is Coming Soon!' : '⏳ 10 USDT मेगा पूल जल्द आ रहा है (Coming Soon)!');
      return;
    }
    State.setPoolPrice(num);

    const container = document.getElementById('poolDynamicContainer');
    if (container) {
      container.style.opacity = '0.4';
      container.style.transform = 'translateY(6px)';
    }

    await this.refreshData();
    this.render();

    requestAnimationFrame(() => {
      const newContainer = document.getElementById('poolDynamicContainer');
      if (newContainer) {
        newContainer.classList.remove('slide-tier-enter');
        void newContainer.offsetWidth;
        newContainer.classList.add('slide-tier-enter');
      }
    });
  },

  setPoolViewTab(tab) {
    this.playClick();
    State.setPoolViewTab(tab);
    requestAnimationFrame(() => {
      const newContainer = document.getElementById('poolDynamicContainer');
      if (newContainer) {
        newContainer.classList.remove('slide-tier-enter');
        void newContainer.offsetWidth;
        newContainer.classList.add('slide-tier-enter');
      }
    });
  },

  setOngoingFilter(filter) {
    this.playClick();
    State.setOngoingFilter(filter);
  },

  navigateTo(tab) {
    this.playClick();
    State.setTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  navigateToProfile(subTab = 'wallet') {
    this.playClick();
    State.setProfileSubTab(subTab);
    State.setTab('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  switchProfileSubTab(subTab) {
    this.playClick();
    State.setProfileSubTab(subTab);
  },

  render() {
    const root = document.getElementById('appRoot');
    if (!root) return;

    let contentHtml = '';
    if (State.activeTab === 'pools') {
      contentHtml = Components.renderLotteryTab(State);
    } else if (State.activeTab === 'draw') {
      contentHtml = Components.renderLiveDrawTab(State);
    } else if (State.activeTab === 'profile') {
      contentHtml = Components.renderProfileHub(State);
    } else if (State.activeTab === 'admin') {
      contentHtml = Components.renderAdminTab(State);
    }

    root.innerHTML = `
      ${Components.renderHeader(State)}
      <main class="main-content" style="padding-bottom: 90px;">
        ${contentHtml}
      </main>
      ${Components.renderBottomNav(State)}
      ${Components.renderModals(State)}
      <div class="toast-container" id="toastContainer"></div>
    `;

    // Populate profile modal details if open
    const profileBox = document.getElementById('profileDetailsContainer');
    if (profileBox && State.currentUser) {
      const u = State.currentUser;
      profileBox.innerHTML = `
        <div style="background: var(--bg-card-subtle); border: 1px solid var(--border-glass); padding: 14px; border-radius: var(--radius-md); font-size: 14px; line-height: 1.8; color: var(--text-primary);">
          <div>${State.language === 'en' ? 'Name' : 'नाम'}: <strong>${u.name}</strong></div>
          <div>${State.language === 'en' ? 'Mobile' : 'मोबाइल'}: <strong>${u.phone}</strong></div>
          <div>${State.language === 'en' ? 'KYC Status' : 'पहचान पत्र (KYC)'}: <span class="status-badge ${u.kyc_status === 'APPROVED' ? 'live' : 'gold'}" style="font-size: 11px;">${u.kyc_status === 'APPROVED' ? (State.language === 'en' ? '✓ Verified' : '✓ वेरिफाइड') : (State.language === 'en' ? 'Pending' : 'बाकी है')}</span></div>
          <div>${State.language === 'en' ? 'Wallet Balance' : 'बटुआ बैलेंस'}: <strong style="color: var(--accent-gold); font-size: 16px;">${Number(u.wallet_balance).toLocaleString('en-US', { minimumFractionDigits: 2 })} USDT</strong></div>
        </div>
      `;
    }
  },

  openModal(name) {
    this.playClick();
    const modal = document.getElementById(`modal-${name}`);
    if (modal) modal.classList.add('open');
  },

  closeModal(name) {
    this.playClick();
    const modal = document.getElementById(`modal-${name}`);
    if (modal) modal.classList.remove('open');
  },

  openRegisterModal() {
    this.playClick();
    this.openModal('auth');
    this.switchAuthMode('register');
  },

  openLoginModal() {
    this.playClick();
    this.openModal('auth');
    this.switchAuthMode('login');
  },

  handleGuestSeatClick(seatNum) {
    this.playClick();
    const isEn = State.language === 'en';
    this.showToast(isEn ? `🔑 Please sign in to book Seat #${seatNum}!` : `🔑 सीट #${seatNum} बुक करने के लिए कृपया लॉगिन करें!`);
    this.openModal('auth');
  },

  async handleQuickDemoLogin(type = 'demo') {
    this.playClick();
    const loginId = type === 'admin' ? 'admin@vip.com' : '9876543210';
    const password = type === 'admin' ? 'admin123' : '123456';
    try {
      const res = await API.login(loginId, password);
      State.setUser(res.user);
      this.closeModal('auth');
      const isEn = State.language === 'en';
      this.showToast(isEn ? `👋 Welcome back, ${res.user.name}!` : `👋 नमस्ते ${res.user.name}! आपका स्वागत है।`);
      await this.refreshData();
      this.render();
    } catch (err) {
      this.showToast(`❌ ${err.message}`);
    }
  },

  handleBackdropClick(event, name) {
    if (event.target.id === `modal-${name}`) {
      this.closeModal(name);
    }
  },

  switchAuthMode(mode) {
    this.authMode = mode;
    this.playClick();
    const isReg = mode === 'register';
    const regFields = document.getElementById('registerFields');
    if (regFields) regFields.style.display = isReg ? 'block' : 'none';
    const tabLogin = document.getElementById('tabAuthLogin');
    const tabReg = document.getElementById('tabAuthRegister');
    if (tabLogin) tabLogin.className = isReg ? 'btn-vip outline' : 'btn-vip primary';
    if (tabReg) tabReg.className = isReg ? 'btn-vip primary' : 'btn-vip outline';
    const title = document.getElementById('authModalTitle');
    const isEn = State.language === 'en';
    if (title) title.innerText = isReg ? (isEn ? 'Create New Account' : '📝 नया खाता बनाएं') : (isEn ? 'Sign In to Your Account' : '🔑 अपना मोबाइल नंबर डालकर जुड़ें');
    const submitBtn = document.getElementById('authSubmitBtn');
    if (submitBtn) submitBtn.innerText = isReg ? (isEn ? 'Create Account' : 'खाता बनाएं') : (isEn ? 'Sign In' : 'लॉगिन करें');
  },

  fillDemo(type) {
    this.playClick();
    this.switchAuthMode('login');
    if (type === 'admin') {
      document.getElementById('authLoginId').value = 'admin@vip.com';
      document.getElementById('authPassword').value = 'admin123';
    } else {
      document.getElementById('authLoginId').value = '9876543210';
      document.getElementById('authPassword').value = '123456';
    }
  },

  async handleAuthSubmit(e) {
    e.preventDefault();
    this.playClick();
    const loginId = document.getElementById('authLoginId').value;
    const password = document.getElementById('authPassword').value;

    try {
      if (this.authMode === 'register') {
        const name = document.getElementById('authName').value || (State.language === 'en' ? 'Player' : 'खिलाड़ी');
        const email = document.getElementById('authEmail').value || `${loginId}@demo.com`;
        await API.register(name, loginId, email, password);
        const isEn = State.language === 'en';
        this.showToast(isEn ? '🎉 Account created! Please sign in.' : '🎉 खाता खुल गया! अब लॉगिन करें।');
        this.switchAuthMode('login');
      } else {
        const res = await API.login(loginId, password);
        State.setUser(res.user);
        this.closeModal('auth');
        const isEn = State.language === 'en';
        this.showToast(isEn ? `👋 Welcome back, ${res.user.name}!` : `👋 नमस्ते ${res.user.name}! आपका स्वागत है।`);
        await this.refreshData();
        this.render();
      }
    } catch (err) {
      this.showToast(`❌ ${err.message}`);
    }
  },

  logout() {
    this.playClick();
    State.setUser(null);
    this.closeModal('user-profile');
    const isEn = State.language === 'en';
    this.showToast(isEn ? 'Logged out successfully.' : 'सफलतापूर्वक लॉगआउट हुए।');
    this.navigateTo('pools');
  },

  async handleKYCSubmit(e) {
    e.preventDefault();
    this.playClick();
    if (!State.currentUser) return;

    const docType = document.getElementById('kycDocType').value;
    const docNum = document.getElementById('kycDocNum').value;

    try {
      await API.submitKYC(State.currentUser.id, docNum, docType);
      State.setKYCStatus('APPROVED', docNum);
      this.closeModal('kyc');
      this.launchConfetti();
      this.showToast('🛡️ आपकी पहचान वेरिफाई हो गई! अब आप टिकट ले सकते हैं।');
      await this.refreshData();
      this.render();
    } catch (err) {
      this.showToast(`❌ ${err.message}`);
    }
  },

  setDepositAmt(amt) {
    this.playClick();
    const input = document.getElementById('depositAmount');
    if (input) input.value = amt;
  },

  async handleDepositSubmit(e) {
    e.preventDefault();
    this.playClick();
    if (!State.currentUser) return;

    const amt = parseFloat(document.getElementById('depositAmount').value);
    const txidInput = document.getElementById('depositTxid');
    const ref = (txidInput && txidInput.value.trim()) || `USDT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

    try {
      const res = await API.deposit(State.currentUser.id, amt, ref);
      State.updateBalance(res.new_balance);
      this.closeModal('deposit');
      this.playWinFanfare();
      this.launchConfetti();
      const isEn = State.language === 'en';
      this.showToast(isEn ? `💰 ${amt} USDT credited to your wallet!` : `💰 ${amt} USDT आपके बटुए में जुड़ गए!`);
      await this.refreshData();
      this.render();
    } catch (err) {
      this.showToast(`❌ ${err.message}`);
    }
  },

  copyUsdtAddress() {
    this.playClick();
    const addr = "TXtra98LotteryPool79qXm3Kp29LwBe82Yk";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(addr);
    }
    const isEn = State.language === 'en';
    this.showToast(isEn ? '📋 USDT TRC-20 Address Copied!' : '📋 USDT (TRC-20) पता कॉपी हो गया!');
  },

  async handleWithdrawSubmit(e) {
    e.preventDefault();
    this.playClick();
    if (!State.currentUser) return;

    const amt = parseFloat(document.getElementById('withdrawAmount').value);
    const addrInput = document.getElementById('withdrawUsdtAddress');
    const address = (addrInput && addrInput.value.trim()) || '';

    try {
      const res = await API.withdraw(State.currentUser.id, amt, address);
      State.updateBalance(res.new_balance);
      this.closeModal('withdraw');
      const isEn = State.language === 'en';
      const shortAddr = address.length > 12 ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : address;
      this.showToast(isEn ? `💸 ${amt} USDT payout sent to wallet (${shortAddr})!` : `💸 ${amt} USDT आपके वॉलेट (${shortAddr}) पर भेज दिए गए हैं!`);
      await this.refreshData();
      this.render();
    } catch (err) {
      this.showToast(`❌ ${err.message}`);
    }
  },

  async buyTicket(poolId) {
    this.playClick();
    if (!State.currentUser) {
      this.openModal('auth');
      return;
    }

    if (State.currentUser.kyc_status !== 'APPROVED') {
      this.showToast('⚠️ पहले आधार या पैन कार्ड जोड़ें (सिर्फ 10 सेकंड लगेंगे)।');
      this.openModal('kyc');
      return;
    }

    try {
      const res = await API.buyTicket(State.currentUser.id, poolId);
      State.updateBalance(res.new_balance);
      this.playWinFanfare();
      this.launchConfetti();
      this.showToast(`🎉 बधाई हो! आपकी टिकट #${String(res.ticket_number).padStart(3, '0')} बुक हो गई! शुभकामनाएं!`);
      await this.refreshData();
      this.render();
    } catch (err) {
      if (err.message.includes('Insufficient balance') || err.message.includes('बैलेंस') || err.message.includes('कम')) {
        this.showToast(State.language === 'en' ? `❌ Insufficient balance. Please deposit USDT.` : `❌ बटुए में बैलेंस कम है। कृपया पहले USDT जमा करें।`);
        this.openModal('deposit');
      } else {
        this.showToast(`❌ ${err.message}`);
      }
    }
  },

  async triggerLiveDraw(poolId) {
    if (!poolId && State.currentPool) poolId = State.currentPool.id;
    if (!poolId) return;

    this.playClick();
    const btn = document.getElementById('drawTriggerBtn');
    if (btn) btn.disabled = true;

    const b1 = document.getElementById('drawBall1');
    const b2 = document.getElementById('drawBall2');
    const num1 = document.getElementById('ballNum1');
    const num2 = document.getElementById('ballNum2');

    if (b1) b1.classList.add('tumbling-active');
    if (b2) b2.classList.add('tumbling-active');

    let rollInterval = setInterval(() => {
      if (num1) num1.innerText = Math.floor(Math.random() * 60) + 1;
      if (num2) num2.innerText = Math.floor(Math.random() * 60) + 1;
      this.playClick();
    }, 70);

    try {
      const res = await API.executeDraw(poolId);

      setTimeout(() => {
        clearInterval(rollInterval);
        if (b1) b1.classList.remove('tumbling-active');
        if (b2) b2.classList.remove('tumbling-active');

        if (res.winners && res.winners.length > 0) {
          if (num1) num1.innerText = '#' + res.winners[0].ticket_number;
          if (num2) num2.innerText = res.winners[1] ? '#' + res.winners[1].ticket_number : 'END';
        }

        this.playWinFanfare();
        this.launchConfetti();
        this.showToast(`👑 ${res.message}`, 6000);
        this.refreshData().then(() => this.render());
      }, 2500);

    } catch (err) {
      clearInterval(rollInterval);
      if (b1) b1.classList.remove('tumbling-active');
      if (b2) b2.classList.remove('tumbling-active');
      if (btn) btn.disabled = false;
      this.showToast(`❌ ${err.message}`);
    }
  },

  async handleUpdateRewards(e) {
    e.preventDefault();
    this.playClick();
    if (!State.currentPool) return;

    const config = {
      "1": document.getElementById('cfg_r1').value,
      "2": document.getElementById('cfg_r2').value,
      "3": document.getElementById('cfg_r3').value,
      "default": document.getElementById('cfg_default').value,
    };

    try {
      await API.updateRewardConfig(State.currentPool.id, config);
      this.showToast('🎁 नए इनाम की सूची सुरक्षित कर ली गई है!');
      await this.refreshData();
      this.render();
    } catch (err) {
      this.showToast(`❌ ${err.message}`);
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  App.init();
});
