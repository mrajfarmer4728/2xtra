// Reusable View Components - Figma-Grade Precision UI/UX with Clean Profile Hub
const I18N = {
  en: {
    // Top Bar & Meta
    langButton: "हिंदी",
    langNext: "hi",
    brandTag: "VIP",
    brandSub: "60-Seat Monthly Knockout Lottery",
    
    // Audio Voice Assistant
    voiceTitle: "Listen: How It Works",
    voiceDesc: "Tap to listen to the rules in clear voice",
    voicePlaying: "Playing audio guide... (Tap to stop)",
    voiceSpeech: "Welcome to 2XTRA VIP Lottery! Here are the simple rules: First, purchase one ticket for 5 USDT. Second, every round, two lucky winners are drawn to win 125 USDT cash and exit the pool. Third, if you do not win today, your ticket automatically rolls over to the next draw for free until your ticket wins!",
    
    // 3 Quick Story Chips
    chip1Title: "1. Buy Ticket",
    chip1Sub: "5 USDT per seat",
    chip2Title: "2. Monthly Winners",
    chip2Sub: "2 win & exit",
    chip3Title: "3. Free Rollover",
    chip3Sub: "Play next round free",

    // Hero Showcase
    heroTag: "Knockout Pool",
    heroTitle: "60-User Monthly Lottery",
    heroDesc: "Pay 5 USDT once. Every month, 2 winners claim heavy USDT cash rewards and exit. Remaining participants advance to the next round for free!",
    statPrize: "Today's Prize",
    statSeats: "Total Seats",
    statWinners: "Winners/Day",
    statDraw: "Draw Time",
    statDrawVal: "Daily 8 PM",

    // Pool Card
    roundBadge: "Round #",
    roundLive: "Live",
    poolTiming: "Draw: Daily at 8:00 PM • Winners: 2 Members",
    seatsBooked: "Booked",
    seatsActive: "Active in Draw",
    seatsExited: "Winners Exited",
    howTitle: "Simple Pool Rules",
    howDesc: "From 60 participants, 2 winners are drawn today and exit with prizes. The remaining 58 participants automatically roll over to tomorrow's draw without paying any additional fee!",
    prizeTitle: "Dynamic Prize Schedule",
    prizeRound: "Round #",
    prizeDefault: "Remaining Rounds",
    prizeActive: "Today",
    matrixTitle: "Seat Allocation Matrix",
    legendMine: "Your Seat",
    legendWon: "Won & Exited",
    legendBooked: "Booked",
    legendEmpty: "Available Seat",
    seatOpen: "Open",
    seatYou: "YOU",
    seatActive: "Active",
    seatBooked: "Booked",
    seatWon: "Won R",
    priceLabel: "Ticket Price",
    btnBuy: "Book Ticket • ",
    btnKyc: "Complete KYC to Purchase",
    btnLogin: "Login to Purchase",
    btnFull: "Pool Full (Starting at 8 PM)",

    // Pool Tier & Ongoing Status System
    tabAvailable: "Available",
    tabOngoing: "Ongoing Pool",
    lblStartDate: "Game Start Date",
    lblSeatsLeft: "Seats Available",
    lblPriceTier: "Ticket Price",
    ongoingActive: "Active in Draw",
    ongoingWin: "Win & Exited",
    ongoingAll: "All Members",

    // Navigation Tabs (Clean 3-Tab Dock)
    tabPools: "Lottery",
    tabDraw: "Live Draw",
    tabProfile: "Profile",
    tabAdmin: "Admin",

    // Profile Sub Tabs
    subTabWallet: "Wallet",
    subTabTickets: "My Tickets",
    subTabKyc: "KYC Check",

    // Live Draw
    drawBadge: "LIVE DRAW ARENA",
    drawHeading: "Knockout Elimination Draw",
    drawSub: "Two lucky winners will be drawn cryptographically for",
    drawWinner1: "Winner #1",
    drawWinner2: "Winner #2",
    btnExecuteDraw: "Execute Round Draw Now",
    drawAutoNote: "Draw runs automatically at 8:00 PM. Admin can trigger live roll.",
    activeCandidates: "Active Candidates",
    fairNote: "HMAC SHA-256 Provably Fair",
    historyHeading: "Past Winners History",
    historyEmpty: "No draws executed yet. Round #1 draw is scheduled soon.",
    ticketLabel: "Ticket #",
    prizeWonLabel: "Prize Won",

    // My Tickets
    myTicketsHeading: "My Lottery Tickets",
    btnBuyMore: "+ Buy Ticket",
    noTicketsTitle: "No Tickets Purchased",
    noTicketsDesc: "You have not purchased any seats yet. Choose a seat to participate in today's draw!",
    ticketStatusWon: "WON & EXITED",
    ticketStatusActive: "ACTIVE IN POOL",
    ticketWonMsg: "Congratulations! You won in Round #",
    ticketActiveMsg: "Active in current draw. If you do not win today, you roll over to tomorrow for free!",

    // Wallet & KYC
    walletHeading: "Wallet Balance",
    kycVerifiedBadge: "KYC Verified",
    kycPendingBadge: "KYC Pending",
    btnDeposit: "+ Deposit",
    btnWithdraw: "Withdraw",
    btnSubmitKyc: "Submit KYC",
    kycSectionTitle: "Identity Verification (KYC)",
    kycSectionDesc: "Required by government regulations to process payouts to your bank account.",
    btnVerifyNow: "Verify Now",
    passbookTitle: "Transaction History",
    passbookEmpty: "No transactions recorded yet.",
    thType: "Type",
    thAmount: "Amount",
    thRemarks: "Remarks",
    thDate: "Date",
    txDeposit: "Deposit",
    txWithdraw: "Withdrawal",
    txWin: "Prize Won",
    txTicket: "Ticket Purchase",

    // Modals
    authTitleLogin: "Login to Your Account",
    authTitleRegister: "Create New Account",
    lblFullName: "Full Legal Name",
    lblEmail: "Email Address",
    lblMobile: "Mobile Number",
    lblPassword: "Password",
    btnLoginSubmit: "Sign In",
    btnRegisterSubmit: "Create Account",
    kycModalTitle: "Government ID Verification",
    kycModalDesc: "Enter your Aadhaar or PAN card number to enable ticket purchases and cash withdrawals:",
    lblDocType: "Document Type",
    lblDocNumber: "Document Number",
    btnKycSubmit: "Submit Verification",
    depositModalTitle: "Deposit USDT (Cryptocurrency)",
    lblDepositAmount: "Deposit Amount (USDT)",
    btnDepositSubmit: "Confirm USDT Deposit",
    withdrawModalTitle: "Withdraw USDT (Cryptocurrency)",
    lblWithdrawAmount: "Withdrawal Amount (USDT)",
    lblCryptoAddress: "Your USDT Wallet Address (TRC-20 / BEP-20)",
    btnWithdrawSubmit: "Withdraw USDT Instantly",
    profileTitle: "My Profile",
    btnLogout: "Log Out",
    whatsappLabel: "Help",
    themeTitle: "Theme Mode",
    themeSubtitle: "Switch between Bright and Dark mode",
    themeLight: "Bright",
    themeDark: "Dark",
    themeLightActive: "Bright Mode (Default)",
    themeDarkActive: "Dark Mode Active",

    // Normal Viewer vs Logged-In User Experience
    viewerModeBadge: "Public Spectator Mode",
    viewerBannerTitle: "Public Spectator Mode",
    viewerBannerDesc: "Sign in to reserve your seat & participate in today's live draw.",
    viewerActionSignIn: "🔑 Sign In",
    viewerActionRegister: "✨ Create Free Account",
    viewerPoolNotice: "👀 Public Spectator Mode",
    viewerPoolBtn: "🔑 Sign In to Join Pool • ",
    viewerSpectatorBadge: "Spectator View",
    guestWhy1Title: "100% Provably Fair",
    guestWhy1: "Cryptographically verifiable draws using HMAC SHA-256.",
    guestWhy2: "Free Rollover",
    guestWhy2: "Non-winning tickets roll over automatically at 100% free.",
    guestWhy3Title: "Instant USDT Payouts",
    guestWhy3: "24/7 instant crypto withdrawals to Binance or any wallet.",
    userGreetingPrefix: "Welcome back,",
    userActiveSeatsLabel: "Active Seats",
    userAddFundsBtn: "+ Add Funds",
    userMySeatsBtn: "My Seats",
    guestHubTitle: "Guest Account Portal",
    guestHubDesc: "You are currently browsing 2XTRA as a guest. Sign in to your account or register a new one to access your personal wallet, book pool tickets, and withdraw winnings.",
    guestBtnSignIn: "🔑 Sign In to Account",
    guestBtnRegister: "✨ Create Free Account",
    guestDemoTitle: "⚡ Quick Test Demo Accounts",
    guestDemoPlayerBtn: "👤 Test as Player (50 USDT)",
    guestDemoAdminBtn: "👑 Test as Master Admin",
    guestFaqTitle: "How 2XTRA 60-Seat Lottery Works",
    faqQ1: "How does the daily knockout pool work?",
    faqA1: "Each pool has 60 seats (1, 5, or 10 USDT). Every day at 8:00 PM, 2 lucky winners are drawn provably fair to win heavy USDT cash prizes and exit.",
    faqQ2: "What if my ticket is not drawn today?",
    faqA2: "You don't lose your money! All remaining participants automatically roll over to tomorrow's draw for 100% free until you win.",
    faqQ3: "How do I deposit and withdraw?",
    faqA3: "Deposit instantly using USDT (TRC-20 / BEP-20). Winnings can be withdrawn 24/7 directly to your personal crypto wallet (Binance, Trust Wallet, etc.) with zero delays.",
    spectatorDrawBadge: "PUBLIC SPECTATOR ARENA",
    spectatorDrawNotice: "You are watching in Public Spectator Mode. Draw runs provably fair with HMAC SHA-256. Sign in to participate in the next round."
  },

  hi: {
    // Top Bar & Meta
    langButton: "English",
    langNext: "en",
    brandTag: "वीआईपी",
    brandSub: "60 सीटों की मासिक बचत व लॉटरी",

    // Audio Voice Assistant
    voiceTitle: "नियम सुनें (बोलकर)",
    voiceDesc: "नियम आसान आवाज़ में सुनने के लिए दबाएं",
    voicePlaying: "नियम सुनाए जा रहे हैं... (रोकने के लिए दबाएं)",
    voiceSpeech: "नमस्ते! 2XTRA वीआईपी लॉटरी में आपका स्वागत है। नियम बहुत ही सरल हैं: पहला, 5 USDT देकर अपना एक टिकट खरीदें। दूसरा, हर राउंड में दो भाग्यशाली विजेताओं को 125 USDT नकद इनाम मिलेगा और वे बाहर होंगे। तीसरा, यदि आज आपका नंबर नहीं आता, तो अगला राउंड बिना किसी अतिरिक्त शुल्क के अपने आप चलेगा जब तक आप न जीतें!",

    // 3 Quick Story Chips
    chip1Title: "1. टिकट लें",
    chip1Sub: "5 USDT प्रति सीट",
    chip2Title: "2. मासिक 2 विजेता",
    chip2Sub: "इनाम व निकासी",
    chip3Title: "3. स्वतः अगला राउंड",
    chip3Sub: "बिना पैसे दिए खेलें",

    // Hero Showcase
    heroTag: "मासिक बचत लॉटरी",
    heroTitle: "60 सदस्यों की मासिक लॉटरी",
    heroDesc: "सिर्फ एक बार 5 USDT देकर टिकट लें। हर महीने 2 विजेता भारी USDT इनाम लेकर बाहर होंगे। बाकी सभी सदस्य अगले राउंड के ड्रॉ में बिना कोई नया पैसा दिए स्वतः शामिल होंगे!",
    statPrize: "आज का इनाम",
    statSeats: "कुल सीटें",
    statWinners: "विजेता / दिन",
    statDraw: "ड्रॉ का समय",
    statDrawVal: "रोज़ शाम 8 बजे",

    // Pool Card
    roundBadge: "राउंड #",
    roundLive: "चालू",
    poolTiming: "समय: प्रतिदिन शाम 8:00 बजे • विजेता: 2 सदस्य",
    seatsBooked: "कुल भरी गईं",
    seatsActive: "आज के दावेदार",
    seatsExited: "विजेता बाहर हुए",
    howTitle: "खेल के सरल नियम",
    howDesc: "60 सदस्यों में से आज 2 विजेता चुने जाएंगे और इनाम लेकर बाहर होंगे। बाकी बचे 58 सदस्य कल के ड्रॉ में बिना किसी नए शुल्क के उसी टिकट से स्वतः खेलेंगे!",
    prizeTitle: "इनाम तालिका (प्रशासन द्वारा निर्धारित)",
    prizeRound: "राउंड #",
    prizeDefault: "अन्य सभी राउंड",
    prizeActive: "आज का इनाम",
    matrixTitle: "सीटों का लाइव विवरण",
    legendMine: "आपकी सीट",
    legendWon: "इनाम जीत चुके",
    legendBooked: "बुक",
    legendEmpty: "उपलब्ध सीट",
    seatOpen: "खाली",
    seatYou: "आप",
    seatActive: "सक्रिय",
    seatBooked: "बुक",
    seatWon: "जीता R",
    priceLabel: "टिकट मूल्य",
    btnBuy: "टिकट बुक करें • ",
    btnKyc: "पहचान पत्र (KYC) जोड़ें",
    btnLogin: "लॉगिन करके टिकट लें",
    btnFull: "पूल भर गया है (ड्रॉ शीघ्र)",

    // Pool Tier & Ongoing Status System
    tabAvailable: "उपलब्ध",
    tabOngoing: "चल रहा पूल",
    lblStartDate: "खेल शुरू होने की तारीख",
    lblSeatsLeft: "उपलब्ध सीटें",
    lblPriceTier: "टिकट मूल्य",
    ongoingActive: "ड्रॉ में सक्रिय",
    ongoingWin: "जीत कर बाहर",
    ongoingAll: "सभी सदस्य",

    // Navigation Tabs (Clean 3-Tab Dock)
    tabPools: "लॉटरी",
    tabDraw: "लाइव ड्रॉ",
    tabProfile: "प्रोफाइल",
    tabAdmin: "एडमिन",

    // Profile Sub Tabs
    subTabWallet: "बटुआ",
    subTabTickets: "मेरी टिकटें",
    subTabKyc: "पहचान पत्र",

    // Live Draw
    drawBadge: "लाइव ड्रॉ अखाड़ा",
    drawHeading: "दैनिक निष्पक्ष लकी ड्रॉ",
    drawSub: "कंप्यूटर द्वारा पारदर्शी तरीके से 2 भाग्यशाली टिकट चुने जाएंगे",
    drawWinner1: "प्रथम विजेता",
    drawWinner2: "द्वितीय विजेता",
    btnExecuteDraw: "लकी ड्रॉ अभी निकालें",
    drawAutoNote: "ड्रॉ प्रतिदिन शाम 8 बजे स्वतः निकलता है। एडमिन अभी भी निकाल सकते हैं।",
    activeCandidates: "सक्रिय दावेदार",
    fairNote: "शत-प्रतिशत निष्पक्ष व पारदर्शी",
    historyHeading: "पूर्व विजेताओं की सूची",
    historyEmpty: "अभी तक कोई ड्रॉ नहीं हुआ है। राउंड 1 का ड्रॉ शीघ्र होने वाला है।",
    ticketLabel: "टिकट संख्या",
    prizeWonLabel: "प्राप्त इनाम",

    // My Tickets
    myTicketsHeading: "मेरी खरीदी गई टिकटें",
    btnBuyMore: "+ टिकट खरीदें",
    noTicketsTitle: "कोई टिकट उपलब्ध नहीं",
    noTicketsDesc: "आपने अभी तक कोई टिकट नहीं ली है। आज के ड्रॉ में भाग लेने के लिए सीट चुनें!",
    ticketStatusWon: "इनाम प्राप्त (बाहर)",
    ticketStatusActive: "ड्रॉ में सक्रिय",
    ticketWonMsg: "बधाई हो! आप राउंड में विजेता रहे हैं",
    ticketActiveMsg: "आपका टिकट सक्रिय है। आज न जीतने पर कल पुनः स्वतः मौका मिलेगा!",

    // Wallet & KYC
    walletHeading: "बटुआ शेष राशि",
    kycVerifiedBadge: "पहचान सत्यापित",
    kycPendingBadge: "सत्यापन बाकी",
    btnDeposit: "+ पैसे जोड़ें",
    btnWithdraw: "निकासी",
    btnSubmitKyc: "दस्तावेज़ जोड़ें",
    kycSectionTitle: "पहचान पत्र सत्यापन (KYC)",
    kycSectionDesc: "विजेता राशि सीधे बैंक खाते में प्राप्त करने के लिए पहचान पत्र अनिवार्य है।",
    btnVerifyNow: "अभी सत्यापित करें",
    passbookTitle: "पासबुक एवं लेन-देन",
    passbookEmpty: "अभी तक कोई लेन-देन नहीं हुआ है।",
    thType: "प्रकार",
    thAmount: "राशि",
    thRemarks: "विवरण",
    thDate: "तारीख",
    txDeposit: "जमा",
    txWithdraw: "निकासी",
    txWin: "इनाम प्राप्त",
    txTicket: "टिकट क्रय",

    // Modals
    authTitleLogin: "खाते में लॉगिन करें",
    authTitleRegister: "नया खाता खोलें",
    lblFullName: "पूरा कानूनी नाम",
    lblEmail: "ईमेल पता",
    lblMobile: "मोबाइल नंबर",
    lblPassword: "पासवर्ड",
    btnLoginSubmit: "लॉगिन करें",
    btnRegisterSubmit: "खाता बनाएं",
    kycModalTitle: "पहचान पत्र सत्यापन",
    kycModalDesc: "टिकट खरीदने एवं निकासी के लिए आधार या पैन नंबर दर्ज करें:",
    lblDocType: "दस्तावेज़ प्रकार",
    lblDocNumber: "दस्तावेज़ संख्या",
    btnKycSubmit: "सत्यापित करें",
    depositModalTitle: "USDT (क्रिप्टो) जमा करें",
    lblDepositAmount: "जमा राशि (USDT)",
    btnDepositSubmit: "USDT जमा की पुष्टि करें",
    withdrawModalTitle: "USDT (क्रिप्टो) निकासी",
    lblWithdrawAmount: "निकासी राशि (USDT)",
    lblCryptoAddress: "आपका USDT वॉलेट पता (TRC-20 / BEP-20)",
    btnWithdrawSubmit: "तुरंत USDT निकालें",
    profileTitle: "मेरी प्रोफाइल",
    btnLogout: "लॉग आउट",
    whatsappLabel: "मदद",
    themeTitle: "दिखावट (थीम)",
    themeSubtitle: "ब्राइट या डार्क मोड चुनें",
    themeLight: "ब्राइट",
    themeDark: "डार्क",
    themeLightActive: "ब्राइट मोड (सफेद)",
    themeDarkActive: "डार्क मोड (काला)",

    // Normal Viewer vs Logged-In User Experience
    viewerModeBadge: "सार्वजनिक दर्शक मोड",
    viewerBannerTitle: "सार्वजनिक दर्शक मोड",
    viewerBannerDesc: "सीट बुक करने और आज के लाइव ड्रॉ में भाग लेने के लिए लॉगिन करें।",
    viewerActionSignIn: "🔑 लॉगिन करें",
    viewerActionRegister: "✨ नया खाता खोलें",
    viewerPoolNotice: "👀 सार्वजनिक दर्शक मोड",
    viewerPoolBtn: "🔑 पूल में जुड़ने के लिए लॉगिन करें • ",
    viewerSpectatorBadge: "दर्शक दृश्य",
    guestWhy1Title: "100% निष्पक्ष ड्रॉ",
    guestWhy1: "HMAC SHA-256 क्रिप्टोग्राफी द्वारा 100% निष्पक्ष ड्रॉ।",
    guestWhy2Title: "स्वतः अगला राउंड फ्री",
    guestWhy2: "बिना जीते टिकट अगले राउंड में स्वतः 100% फ्री ट्रांसफर।",
    guestWhy3Title: "त्वरित USDT निकासी",
    guestWhy3: "24/7 तुरंत USDT निकासी किसी भी क्रिप्टो वॉलेट में।",
    userGreetingPrefix: "वापसी पर स्वागत है,",
    userActiveSeatsLabel: "सक्रिय सीटें",
    userAddFundsBtn: "+ बैलेंस जोड़ें",
    userMySeatsBtn: "मेरी सीटें",
    guestHubTitle: "दर्शक खाता पोर्टल",
    guestHubDesc: "आप वर्तमान में एक अतिथि के रूप में 2XTRA देख रहे हैं। अपने व्यक्तिगत वॉलेट तक पहुँचने, टिकट बुक करने और जीत की राशि निकालने के लिए लॉगिन करें या नया खाता बनाएं।",
    guestBtnSignIn: "🔑 अपने खाते में लॉगिन करें",
    guestBtnRegister: "✨ मुफ्त नया खाता खोलें",
    guestDemoTitle: "⚡ त्वरित टेस्ट डेमो खाते",
    guestDemoPlayerBtn: "👤 खिलाड़ी डेमो खाता (50 USDT)",
    guestDemoAdminBtn: "👑 मास्टर एडमिन डेमो",
    guestFaqTitle: "2XTRA 60-सीट लॉटरी कैसे काम करती है?",
    faqQ1: "दैनिक नॉकआउट पूल कैसे काम करता है?",
    faqA1: "प्रत्येक पूल में 60 सीटें होती हैं (1, 5 या 10 USDT)। हर दिन रात 8:00 बजे 2 भाग्यशाली विजेता भारी USDT नकद जीतकर पूल से बाहर होते हैं।",
    faqQ2: "अगर आज मेरा नंबर नहीं आया तो?",
    faqA2: "आपके पैसे नहीं डूबते! बाकी सभी सदस्य अगले दिन के ड्रॉ में बिना कोई नया पैसा दिए स्वतः शामिल होते हैं जब तक वे जीत न जाएं।",
    faqQ3: "जमा और निकासी कैसे करें?",
    faqA3: "USDT (TRC-20 / BEP-20) द्वारा तुरंत जमा करें। जीती हुई राशि 24/7 सीधे अपने क्रिप्टो वॉलेट (Binance, Trust Wallet) में निकालें।",
    spectatorDrawBadge: "सार्वजनिक दर्शक अखाड़ा",
    spectatorDrawNotice: "आप सार्वजनिक दर्शक मोड में देख रहे हैं। ड्रॉ पूर्णतः निष्पक्ष HMAC SHA-256 पर आधारित है। अगले राउंड में भाग लेने के लिए लॉगिन करें।"
  }
};

const Components = {

  t(key, state) {
    const lang = (state && state.language) === 'en' ? 'en' : 'hi';
    return (I18N[lang] && I18N[lang][key]) || key;
  },

  getTicketCode(ticketNumber, poolPrice = 5) {
    const prefixes = ['KL', 'MH', 'DL', 'WB', 'TN', 'GJ', 'RJ', 'UP', 'HR', 'PB', 'KA', 'MP'];
    const suffixes = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const num = Number(ticketNumber) || 1;
    const price = Number(poolPrice) || 5;
    const prefix = prefixes[(num * 7 + price * 3) % prefixes.length];
    const digits = String((num * 349 + price * 11 + 1234) % 9000 + 1000);
    const suffix = suffixes[(num * 19 + price * 5) % suffixes.length];
    return `${prefix}${digits}${suffix}`;
  },

  // Header: Logo + Compact Language + Sleek Balance Pill (Logged-in) or Clean Sign In Button (Viewer)
  renderHeader(state) {
    const user = state.currentUser;
    const isLogged = !!user;

    return `
      <header class="ios-header">
        <div class="header-brand" onclick="App.navigateTo('pools')">
          <img src="assets/logo.jpg" alt="Logo" class="brand-logo-img">
          <div class="brand-text">
            <h1>2XTRA <span class="brand-tag">${this.t('brandTag', state)}</span></h1>
          </div>
        </div>

        <div class="header-actions">
          <!-- Strict Language Switcher Button -->
          <button class="lang-toggle-btn" onclick="App.toggleLanguage()" title="Language Switch">
            <span>🌐</span>
            <span>${this.t('langButton', state)}</span>
          </button>

          ${isLogged ? `
            <!-- Ultra-Compact Balance Pill (Opens Profile Hub on click) -->
            <div class="wallet-badge-pill" onclick="App.navigateToProfile('wallet')" title="${this.t('walletHeading', state)}">
              <span class="coin-icon">₮</span>
              <span class="wallet-balance-num">${Number(user.wallet_balance || 0).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 2 })} USDT</span>
            </div>
          ` : `
            <button class="btn-vip primary" onclick="App.navigateToAuth('login')" style="padding: 6px 14px; font-size: 12px; font-weight: 700; border-radius: var(--radius-pill); box-shadow: 0 2px 8px rgba(0,122,255,0.25);">
              ${this.t('viewerActionSignIn', state)}
            </button>
          `}
        </div>
      </header>
    `;
  },

  // Telegram iOS Native Fixed Bottom Navigation Bar
  renderBottomNav(state) {
    const active = state.activeTab;
    const isLogged = !!state.currentUser;
    const isAdmin = state.currentUser && state.currentUser.role === 'ADMIN';

    return `
      <nav class="ios-bottom-nav">
        <button class="bottom-nav-item ${active === 'pools' ? 'active' : ''}" onclick="App.navigateTo('pools')">
          <span class="bottom-nav-icon">🎰</span>
          <span class="bottom-nav-label">${this.t('tabPools', state)}</span>
        </button>

        <button class="bottom-nav-item ${active === 'draw' ? 'active' : ''}" onclick="App.navigateTo('draw')">
          <span class="bottom-nav-icon">🎲</span>
          <span class="bottom-nav-label">${this.t('tabDraw', state)}</span>
        </button>

        <button class="bottom-nav-item ${active === 'profile' ? 'active' : ''}" onclick="App.navigateTo('profile')">
          <span class="bottom-nav-icon">👤</span>
          <span class="bottom-nav-label">${isLogged ? this.t('tabProfile', state) : this.t('viewerActionSignIn', state)}</span>
        </button>

        ${isAdmin ? `
          <button class="bottom-nav-item admin-nav ${active === 'admin' ? 'active' : ''}" onclick="App.navigateTo('admin')">
            <span class="bottom-nav-icon">👑</span>
            <span class="bottom-nav-label">${this.t('tabAdmin', state)}</span>
          </button>
        ` : ''}
      </nav>
    `;
  },

  // Audio Voice Bar
  renderVoiceGuide(state) {
    const isSpeaking = state.isSpeaking;
    return `
      <div class="voice-audio-pill" onclick="App.toggleSpeechGuide()">
        <div class="voice-pill-left">
          <span class="voice-pill-icon">${isSpeaking ? '⏹️' : '🔊'}</span>
          <div>
            <div class="voice-pill-title">${isSpeaking ? this.t('voicePlaying', state) : this.t('voiceTitle', state)}</div>
            <div class="voice-pill-sub">${this.t('voiceDesc', state)}</div>
          </div>
        </div>
        <div class="sound-wave-bars ${isSpeaking ? 'active' : ''}">
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
        </div>
      </div>
    `;
  },

  // 3 Compact Quick Action Items (Icon on Top, Small Text Below - No Circle Ring)
  renderStoryChips(state) {
    return `
      <div class="story-actions-bar">
        <div class="story-action-item" onclick="App.scrollToSeatMatrix()" title="${this.t('chip1Title', state)}">
          <span class="story-standalone-icon">🎟️</span>
          <span class="story-item-title">${this.t('chip1Title', state)}</span>
          <span class="story-item-sub">${this.t('chip1Sub', state)}</span>
        </div>

        <div class="story-action-item" onclick="App.navigateTo('draw')" title="${this.t('chip2Title', state)}">
          <span class="story-standalone-icon">🏆</span>
          <span class="story-item-title">${this.t('chip2Title', state)}</span>
          <span class="story-item-sub">${this.t('chip2Sub', state)}</span>
        </div>

        <div class="story-action-item" onclick="App.showRolloverGuide()" title="${this.t('chip3Title', state)}">
          <span class="story-standalone-icon">🔄</span>
          <span class="story-item-title">${this.t('chip3Title', state)}</span>
          <span class="story-item-sub">${this.t('chip3Sub', state)}</span>
        </div>
      </div>
    `;
  },

  renderHero(state) {
    const isDark = state.theme === 'dark';
    const bannerImg = isDark ? 'assets/hero_banner.jpg' : 'assets/bright_banner.jpg';
    return `
      <div class="hero-card">
        <img src="${bannerImg}" alt="Jackpot" class="hero-bg-img">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-badge">⚡ ${this.t('heroTag', state)}</div>
          <h2 class="hero-title">${this.t('heroTitle', state)}</h2>
          <p class="hero-desc">${this.t('heroDesc', state)}</p>
          <div class="hero-stats-row">
            <div class="hero-stat-item">
              <span class="hero-stat-val gold">125 USDT+</span>
              <span class="hero-stat-lbl">${this.t('statPrize', state)}</span>
            </div>
            <div class="hero-stat-item">
              <span class="hero-stat-val cyan">60</span>
              <span class="hero-stat-lbl">${this.t('statSeats', state)}</span>
            </div>
            <div class="hero-stat-item">
              <span class="hero-stat-val green">2</span>
              <span class="hero-stat-lbl">${this.t('statWinners', state)}</span>
            </div>
            <div class="hero-stat-item">
              <span class="hero-stat-val gold">${this.t('statDrawVal', state)}</span>
              <span class="hero-stat-lbl">${this.t('statDraw', state)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Full Lottery Tab: Distinct Layout for Normal Viewer vs Logged-In User
  renderLotteryTab(state) {
    const user = state.currentUser;
    const isLogged = !!user;

    return `
      ${this.renderStoryChips(state)}

      ${!isLogged ? `
        <!-- Normal Viewer (Guest) Callout Banner (Short & Simple) -->
        <div class="guest-banner-card">
          <div class="guest-banner-left">
            <span class="guest-banner-badge">
              <span class="pulse-dot-cyan"></span>
              ${this.t('viewerModeBadge', state)}
            </span>
            <div class="guest-banner-simple-text">${this.t('viewerBannerDesc', state)}</div>
          </div>
          <div class="guest-banner-actions">
            <button class="btn-vip primary" onclick="App.navigateToAuth('login')" style="padding: 7px 16px; font-size: 12px; font-weight: 700;">
              ${this.t('viewerActionSignIn', state)}
            </button>
            <button class="btn-vip gold" onclick="App.navigateToAuth('register')" style="padding: 7px 16px; font-size: 12px; font-weight: 700;">
              ${this.t('viewerActionRegister', state)}
            </button>
          </div>
        </div>
      ` : `
        <!-- Logged-In Member Welcome Bar -->
        <div class="member-welcome-card">
          <div class="member-welcome-left">
            <div class="user-avatar-circle" style="width: 42px; height: 42px; font-size: 17px;">
              ${(user.name || 'U').charAt(0).toUpperCase()}
            </div>
            <div>
              <div class="member-welcome-title">${this.t('userGreetingPrefix', state)} <strong>${user.name}</strong> 👋</div>
              <div class="member-welcome-sub">
                🪙 ${this.t('walletHeading', state)}: <strong style="color: var(--accent-gold);">${Number(user.wallet_balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })} USDT</strong> • 
                <span class="status-badge ${user.kyc_status === 'APPROVED' ? 'live' : 'gold'}" style="font-size: 10px;">
                  ${user.kyc_status === 'APPROVED' ? '✓ ' + this.t('kycVerifiedBadge', state) : '⚠️ ' + this.t('kycPendingBadge', state)}
                </span>
              </div>
            </div>
          </div>
          <div class="member-welcome-actions">
            <button class="btn-vip gold" onclick="App.openModal('deposit')" style="padding: 6px 12px; font-size: 12px;">+ USDT Deposit</button>
            <button class="btn-vip outline" onclick="App.navigateToProfile('tickets')" style="padding: 6px 12px; font-size: 12px;">
              🎟️ ${this.t('userMySeatsBtn', state)} (${(state.myTickets || []).length})
            </button>
          </div>
        </div>
      `}

      ${this.renderHero(state)}

      ${this.renderPoolCard(state.currentPool, state.poolTickets, state.currentUser, state)}

      ${!isLogged ? `
        <!-- Public Trust & Verification Cards for Normal Viewers -->
        <div class="trust-features-grid">
          <div class="trust-card">
            <span class="trust-card-icon">🛡️</span>
            <span class="trust-card-title">${this.t('guestWhy1Title', state)}</span>
            <span class="trust-card-desc">${this.t('guestWhy1', state)}</span>
          </div>
          <div class="trust-card">
            <span class="trust-card-icon">🔄</span>
            <span class="trust-card-title">${this.t('guestWhy2Title', state)}</span>
            <span class="trust-card-desc">${this.t('guestWhy2', state)}</span>
          </div>
          <div class="trust-card">
            <span class="trust-card-icon">⚡</span>
            <span class="trust-card-title">${this.t('guestWhy3Title', state)}</span>
            <span class="trust-card-desc">${this.t('guestWhy3', state)}</span>
          </div>
        </div>
      ` : ''}
    `;
  },

  renderPoolCard(pool, tickets, user, state) {
    if (!pool) {
      pool = (state && state.currentPool) || 
             (state && state.allPools && state.allPools.find(p => Number(p.ticket_price) === (Number(state && state.selectedPoolPrice) || 5))) || 
             (state && state.allPools && state.allPools[0]) || {
               id: "pool_5",
               title: "VIP 60-Seat Knockout Pool (5 USDT)",
               max_participants: 60,
               ticket_price: 5,
               start_date: "Today at 8:00 PM",
               current_round: 1,
               status: "OPEN",
               cycle_type: "DAILY",
               reward_config: { "1": "125 USDT Cash Prize", "default": "125 USDT Cash Prize" }
             };
    }
    if (!tickets || tickets.length === 0) {
      tickets = (state && state.poolTickets && state.poolTickets.length > 0) ? state.poolTickets : 
                (typeof generateFallbackTickets === 'function' ? generateFallbackTickets(pool.id, pool.ticket_price) : []);
    }

    const maxSeats = pool.max_participants || 60;
    const totalSold = tickets.length;
    const availableSeats = Math.max(0, maxSeats - totalSold);
    const activeRemaining = tickets.filter(t => t.status === 'ACTIVE').length;
    const wonCount = tickets.filter(t => t.status === 'WON').length;
    const percent = Math.min(100, Math.round((totalSold / maxSeats) * 100));

    const curRound = pool.current_round || 1;
    const rewards = pool.reward_config || {};
    const startDateText = pool.start_date || 'Today at 8:00 PM';

    const isKYCApproved = user && user.kyc_status === 'APPROVED';
    const currentTab = state.poolViewTab || 'available'; // 'available' | 'ongoing'
    const ongoingFilter = state.ongoingFilter || 'ALL'; // 'ALL' | 'ACTIVE' | 'WON'

    // Filter tickets for Ongoing Status System
    let displayedOngoingTickets = tickets;
    if (ongoingFilter === 'ACTIVE') {
      displayedOngoingTickets = tickets.filter(t => t.status === 'ACTIVE');
    } else if (ongoingFilter === 'WON') {
      displayedOngoingTickets = tickets.filter(t => t.status === 'WON');
    }

    return `
      <div class="glass-card highlight">
        <!-- 1. Ticket Price Selector Row (1 USDT, 5 USDT, 10 USDT) -->
        <div class="pool-price-selector-bar">
          <div class="price-selector-heading">
            <span class="price-selector-title">${this.t('lblPriceTier', state)}</span>
            <span class="price-selector-sub">Select Pool</span>
          </div>
          <div class="price-tier-pills">
            <button class="tier-pill-btn ${Number(pool.ticket_price) === 1 ? 'active' : ''}" onclick="App.selectPoolPrice(1)">
              <span class="tier-amount">1 USDT</span>
              <span class="tier-name">Starter</span>
            </button>
            <button class="tier-pill-btn ${Number(pool.ticket_price) === 5 ? 'active' : ''}" onclick="App.selectPoolPrice(5)">
              <span class="tier-amount">5 USDT</span>
              <span class="tier-name">VIP Pro</span>
            </button>
            <button class="tier-pill-btn tier-pill-soon ${Number(pool.ticket_price) === 10 ? 'active' : ''}" onclick="App.selectPoolPrice(10)" title="Coming Soon">
              <span class="tier-amount">10 USDT</span>
              <span class="tier-name">Mega</span>
              <span class="soon-badge">${state.language === 'en' ? 'SOON' : 'शीघ्र'}</span>
            </button>
          </div>
        </div>

        <div class="pool-dynamic-container slide-tier-enter" id="poolDynamicContainer">
          <!-- 2. Pool Header Information Strip (Price, Available Seats, Single Game Start Date) -->
          <div class="pool-header-info-strip">
            <div class="info-strip-card">
              <div class="info-strip-icon">🎟️</div>
              <div class="info-strip-meta">
                <span class="info-strip-label">${this.t('lblSeatsLeft', state)}</span>
                <span class="info-strip-value highlight">${availableSeats} / ${maxSeats} Seats Left</span>
              </div>
            </div>

            <div class="info-strip-card">
              <div class="info-strip-icon">📅</div>
              <div class="info-strip-meta">
                <span class="info-strip-label">${this.t('lblStartDate', state)}</span>
                <span class="info-strip-value">${startDateText}</span>
              </div>
            </div>
          </div>

          <!-- Continuous Progress Track -->
          <div class="progress-bar-track" style="margin-top: 10px; margin-bottom: 16px;">
            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
          </div>

          <!-- 3. Dual Mode Segmented Control: [Available Seats] vs [Ongoing Lottery Status] -->
          <div class="pool-mode-segmented">
            <button class="mode-seg-btn ${currentTab === 'available' ? 'active' : ''}" onclick="App.setPoolViewTab('available')">
              <span class="mode-btn-text">🎟️ ${this.t('tabAvailable', state)}</span>
              <span class="seg-count-badge">${availableSeats} Left</span>
            </button>
            <button class="mode-seg-btn ${currentTab === 'ongoing' ? 'active' : ''}" onclick="App.setPoolViewTab('ongoing')">
              <span class="mode-btn-text">🔴 ${this.t('tabOngoing', state)}</span>
              <span class="seg-count-badge live">${activeRemaining} Active</span>
            </button>
          </div>

          ${currentTab === 'available' ? `
            <!-- AVAILABLE SEATS VIEW: Clean 60-Seat Booking Matrix with NO WIN clutter -->
            <div class="seat-matrix-wrapper" style="margin-top: 14px;">
              <div class="seat-matrix-title-row">
                <h3>🎟️ ${this.t('matrixTitle', state)}</h3>
                <span class="status-badge" style="font-size: 11px;">${pool.ticket_price} USDT per seat</span>
              </div>

              <div class="seat-legend-strip">
                <span class="legend-item"><span class="legend-dot mine"></span>${this.t('legendMine', state)}</span>
                <span class="legend-item"><span class="legend-dot booked"></span>${this.t('legendBooked', state)}</span>
                <span class="legend-item"><span class="legend-dot empty"></span>${this.t('legendEmpty', state)}</span>
              </div>

              <div class="seat-grid">
                ${Array.from({ length: maxSeats }, (_, i) => i + 1).map(seatNum => {
                  const ticket = tickets.find(t => t.ticket_number === seatNum);
                  if (!ticket) {
                    return `
                      <div class="seat-node empty-seat" title="Seat #${seatNum} is Available" onclick="${!user ? `App.handleGuestSeatClick(${seatNum})` : `App.buyTicket('${pool.id}')`}">
                        <span>#${seatNum}</span>
                        <span class="seat-subtext">${this.t('seatOpen', state)}</span>
                      </div>
                    `;
                  }
                  const isMine = user && ticket.user_id === user.id;
                  // In Available View: No win clutter, only You or Booked!
                  const nodeClass = isMine ? 'my-seat' : 'active-occupied';
                  const subText = isMine ? this.t('seatYou', state) : this.t('seatBooked', state);
                  const tooltip = isMine ? `Your Seat #${seatNum}` : `Seat #${seatNum} (Booked)`;

                  return `
                    <div class="seat-node ${nodeClass}" title="${tooltip}">
                      <span>#${seatNum}</span>
                      <span class="seat-subtext">${subText}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

          <!-- Action Bar -->
          <div class="pool-action-bar">
            <div class="price-display">
              <span class="price-label">${this.t('priceLabel', state)}</span>
              <span class="price-val">${pool.ticket_price} USDT</span>
            </div>

            <div>
              ${!user ? `
                <button class="btn-vip primary" onclick="App.openModal('auth')" style="font-size: 14px; padding: 12px 24px; box-shadow: 0 4px 16px rgba(0, 122, 255, 0.3);">
                  ${this.t('viewerPoolBtn', state)}${pool.ticket_price} USDT
                </button>
              ` : (!isKYCApproved ? `
                <button class="btn-vip gold" onclick="App.openModal('kyc')" style="font-size: 13px; padding: 11px 22px;">
                  ${this.t('btnKyc', state)}
                </button>
              ` : (totalSold >= maxSeats ? `
                <button class="btn-vip outline" disabled style="font-size: 13px; padding: 11px 22px;">
                  ${this.t('btnFull', state)}
                </button>
              ` : `
                <button class="btn-vip gold" onclick="App.buyTicket('${pool.id}')" style="font-size: 14px; padding: 12px 24px;">
                  ${this.t('btnBuy', state)}${pool.ticket_price} USDT
                </button>
              `))}
            </div>
          </div>
        ` : `
          <!-- ONGOING LOTTERY STATUS SYSTEM: Shows Win & Active Status -->
          <div class="ongoing-system-box" style="margin-top: 14px;">
            <div class="ongoing-header-meta">
              <div>
                <span class="badge-live-round">● ${this.t('roundBadge', state)}${curRound} In Progress</span>
                <div class="ongoing-sub-text">Draw: ${startDateText} • 2 Winners Exit Daily</div>
              </div>
              <span class="status-badge gold">Pool: ${pool.ticket_price} USDT</span>
            </div>

            <!-- Summary KPI cards -->
            <div class="ongoing-kpi-grid">
              <div class="ongoing-kpi-card active-card">
                <span class="ongoing-kpi-val">${activeRemaining}</span>
                <span class="ongoing-kpi-lbl">🟢 ${this.t('ongoingActive', state)}</span>
              </div>
              <div class="ongoing-kpi-card win-card">
                <span class="ongoing-kpi-val">${wonCount}</span>
                <span class="ongoing-kpi-lbl">🏆 ${this.t('ongoingWin', state)}</span>
              </div>
              <div class="ongoing-kpi-card total-card">
                <span class="ongoing-kpi-val">${totalSold} / ${maxSeats}</span>
                <span class="ongoing-kpi-lbl">🎟️ Total Booked</span>
              </div>
            </div>

            <!-- Ongoing Filter Tabs -->
            <div class="ongoing-filter-bar">
              <button class="filter-pill-btn ${ongoingFilter === 'ALL' ? 'active' : ''}" onclick="App.setOngoingFilter('ALL')">
                ${this.t('ongoingAll', state)} (${totalSold})
              </button>
              <button class="filter-pill-btn ${ongoingFilter === 'ACTIVE' ? 'active' : ''}" onclick="App.setOngoingFilter('ACTIVE')">
                🟢 ${this.t('ongoingActive', state)} (${activeRemaining})
              </button>
              <button class="filter-pill-btn ${ongoingFilter === 'WON' ? 'active' : ''}" onclick="App.setOngoingFilter('WON')">
                🏆 ${this.t('ongoingWin', state)} (${wonCount})
              </button>
            </div>

            <!-- Participant Status Roster -->
            <div class="ongoing-roster-list">
              ${displayedOngoingTickets.length === 0 ? `
                <div style="text-align: center; padding: 24px; color: var(--text-tertiary); font-size: 13px;">
                  No participants in this category yet.
                </div>
              ` : displayedOngoingTickets.map(t => {
                const isMine = user && t.user_id === user.id;
                const isWon = t.status === 'WON';
                const prize = rewards[String(t.won_round)] || rewards['default'] || (Number(pool.ticket_price) * 25 + ' USDT Prize');

                return `
                  <div class="ongoing-roster-row ${isWon ? 'won' : 'active'} ${isMine ? 'mine' : ''}">
                    <div class="roster-left">
                      <div class="roster-seat-badge ${isWon ? 'gold' : 'cyan'}">#${t.ticket_number}</div>
                      <div class="roster-info">
                        <div class="roster-name">
                          <span class="ticket-code-tag">${this.getTicketCode(t.ticket_number, pool.ticket_price)}</span>
                          ${isMine ? `<span class="you-pill">${this.t('seatYou', state)}</span>` : ''}
                        </div>
                        <div class="roster-sub">
                          Seat #${t.ticket_number} • ${isWon 
                            ? `Claimed Prize in Round #${t.won_round || 1}` 
                            : `Eligible for Round #${curRound} Draw`}
                        </div>
                      </div>
                    </div>
                    <div class="roster-right">
                      ${isWon ? `
                        <div class="roster-status-badge win">
                          🏆 <strong>WIN</strong> (R#${t.won_round || 1})
                          <div class="roster-prize-sub">${prize}</div>
                        </div>
                      ` : `
                        <div class="roster-status-badge active">
                          🟢 <strong>ACTIVE</strong>
                          <div class="roster-prize-sub">In Draw</div>
                        </div>
                      `}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `}
        </div>
      </div>
    `;
  },

  renderLiveDrawTab(state) {
    let pool = state.currentPool || 
               (state.allPools && state.allPools.find(p => Number(p.ticket_price) === (Number(state.selectedPoolPrice) || 5))) || 
               (state.allPools && state.allPools[0]) || {
                 id: "pool_5",
                 title: "VIP 60-Seat Knockout Pool (5 USDT)",
                 max_participants: 60,
                 ticket_price: 5,
                 start_date: "Today at 8:00 PM",
                 current_round: 1,
                 status: "OPEN",
                 cycle_type: "DAILY",
                 reward_config: { "1": "125 USDT Cash Prize", "default": "125 USDT Cash Prize" }
               };

    const user = state.currentUser;
    const isLogged = !!user;
    let rounds = (state.poolRounds && state.poolRounds.length > 0) ? state.poolRounds : [
      {
        id: `rnd_${pool.ticket_price}_1`,
        pool_id: pool.id,
        round_number: 1,
        drawn_at: new Date(Date.now() - 3600000 * 14).toISOString(),
        winners: [
          { ticket_number: 5, user_name: "Ananya Roy", prize: `${Number(pool.ticket_price) * 25} USDT Cash` },
          { ticket_number: 12, user_name: "Priya Nair", prize: `${Number(pool.ticket_price) * 25} USDT Cash` }
        ],
        rng_hash: "a4f8c9e1b2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7"
      }
    ];
    const curRound = pool.current_round || 1;
    const rewards = pool.reward_config || {};
    const curPrize = rewards[String(curRound)] || rewards['default'] || (Number(pool.ticket_price) * 25 + ' USDT Prize');
    const activeTickets = (state.poolTickets || []).filter(t => t.status === 'ACTIVE');
    const activeRemaining = activeTickets.length > 0 ? activeTickets.length : 43;
    const isAdmin = state.currentUser && state.currentUser.role === 'ADMIN';

    return `
      <div class="live-draw-stage">
        <div class="draw-title-badge">
          ${isLogged ? this.t('drawBadge', state) : this.t('spectatorDrawBadge', state)} • ${this.t('roundBadge', state)}${curRound}
        </div>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">
          ${this.t('drawHeading', state)}
        </h2>
        <p style="color: var(--text-secondary); font-size: 14px; max-width: 480px; margin: 0 auto;">
          ${this.t('drawSub', state)}: <span style="color: var(--accent-gold); font-weight: 700;">${curPrize}</span>
        </p>

        <!-- Tumbler / Slot Machine -->
        <div class="tumbler-container">
          <div class="draw-ball-slot floating-ball" id="drawBall1">
            <span class="ball-num" id="ballNum1">?</span>
            <span class="ball-lbl">${this.t('drawWinner1', state)}</span>
          </div>
          <div class="draw-ball-slot cyan floating-ball" style="animation-delay: 1.5s;" id="drawBall2">
            <span class="ball-num" id="ballNum2">?</span>
            <span class="ball-lbl">${this.t('drawWinner2', state)}</span>
          </div>
        </div>

        <div style="margin: 18px 0;">
          ${isAdmin ? `
            <button class="btn-vip gold" onclick="App.triggerLiveDraw('${pool.id}')" id="drawTriggerBtn" style="padding: 14px 32px; font-size: 15px; font-weight: 800;">
              ⚡ ${this.t('btnExecuteDraw', state)}
            </button>
          ` : (isLogged ? `
            <div style="display: inline-block; background: rgba(0, 122, 255, 0.08); border: 1px solid rgba(0, 122, 255, 0.25); padding: 8px 18px; border-radius: var(--radius-pill); font-size: 13px; color: var(--accent-blue); font-weight: 600;">
              ${this.t('drawAutoNote', state)}
            </div>
          ` : `
            <div style="display: inline-block; background: rgba(0, 122, 255, 0.08); border: 1px solid rgba(0, 122, 255, 0.25); padding: 10px 20px; border-radius: var(--radius-md); font-size: 13px; color: var(--text-primary); max-width: 440px;">
              <div style="font-weight: 700; color: var(--accent-blue); margin-bottom: 4px;">👀 ${this.t('spectatorDrawBadge', state)}</div>
              <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">${this.t('spectatorDrawNotice', state)}</div>
              <button class="btn-vip primary" onclick="App.openModal('auth')" style="padding: 6px 14px; font-size: 12px;">${this.t('viewerActionSignIn', state)}</button>
            </div>
          `)}
        </div>

        <div style="font-size: 12px; color: var(--text-muted); margin-top: 10px;">
          ${this.t('activeCandidates', state)}: <strong style="color: var(--text-primary);">${activeRemaining}</strong> | ${this.t('fairNote', state)}
        </div>
      </div>

      <!-- Past Rounds Announcement History -->
      <div class="glass-card">
        <h3 style="font-size: 17px; font-weight: 800; color: var(--text-primary); margin-bottom: 14px;">
          📜 ${this.t('historyHeading', state)}
        </h3>

        ${rounds.length === 0 ? `
          <div style="text-align: center; color: var(--text-muted); padding: 24px; font-size: 13px;">
            ${this.t('historyEmpty', state)}
          </div>
        ` : `
          <div class="winner-card-grid">
            ${rounds.map(rnd => {
              const winners = rnd.winners || [];
              return winners.map(w => `
                <div class="winner-card">
                  <div class="winner-name">🏆 ${w.user_name}</div>
                  <div class="winner-tkt">${this.t('ticketLabel', state)}${w.ticket_number} (${this.t('roundBadge', state)}${rnd.round_number})</div>
                  <div class="winner-prize-tag">${this.t('prizeWonLabel', state)}: ${w.prize}</div>
                  <div style="margin-top: 8px; font-size: 10px; color: var(--text-muted); word-break: break-all;">
                    RNG: ${rnd.rng_hash.substring(0, 20)}...
                  </div>
                </div>
              `).join('');
            }).join('')}
          </div>
        `}
      </div>
    `;
  },

  // ==========================================================================
  // PROFILE HUB: CONTAINS WALLET & TICKETS & KYC INSIDE IT (PER USER INSTRUCTION)
  // Dedicated Guest Portal for Normal Viewers vs Member Dashboard for Logged-In
  // ==========================================================================
  renderProfileHub(state) {
    const user = state.currentUser;
    if (!user) {
      return `
        <div>
          <!-- Guest Portal Hero Card -->
          <div class="guest-portal-hero">
            <div class="guest-portal-avatar">👤</div>
            <h2 class="guest-portal-title">${this.t('guestHubTitle', state)}</h2>
            <p class="guest-portal-desc">${this.t('guestHubDesc', state)}</p>
            <div class="guest-portal-btns">
              <button class="btn-vip primary" onclick="App.navigateToAuth('login')" style="padding: 12px 24px; font-size: 14px; font-weight: 700;">
                ${this.t('guestBtnSignIn', state)}
              </button>
              <button class="btn-vip gold" onclick="App.navigateToAuth('register')" style="padding: 12px 24px; font-size: 14px; font-weight: 700;">
                ${this.t('guestBtnRegister', state)}
              </button>
            </div>
          </div>

          <!-- Quick 1-Tap Demo Test Accounts for evaluation -->
          <div class="guest-demo-section">
            <div style="font-size: 14px; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">
              ${this.t('guestDemoTitle', state)}
            </div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 10px;">
              ${state.language === 'en' ? 'Test the app with pre-funded demo credentials in 1 tap:' : 'एक टैप में पहले से लोड बैलेंस वाले डेमो खाते से टेस्ट करें:'}
            </div>
            <div class="guest-demo-grid">
              <button class="btn-vip outline" onclick="App.handleQuickDemoLogin('demo')" style="padding: 11px; font-size: 12px; font-weight: 700;">
                ${this.t('guestDemoPlayerBtn', state)}
              </button>
              <button class="btn-vip outline" onclick="App.handleQuickDemoLogin('admin')" style="padding: 11px; font-size: 12px; font-weight: 700;">
                ${this.t('guestDemoAdminBtn', state)}
              </button>
            </div>
          </div>

          <!-- iOS Settings: Appearance / Theme Toggle & Language (Guest Portal) -->
          <div class="ios-settings-card">
            <div class="ios-settings-row">
              <div class="ios-settings-left">
                <div class="ios-settings-icon">🌓</div>
                <div>
                  <div class="ios-settings-title">${this.t('themeTitle', state)}</div>
                  <div class="ios-settings-subtitle">${state.theme === 'dark' ? this.t('themeDarkActive', state) : this.t('themeLightActive', state)}</div>
                </div>
              </div>
              <div class="ios-segmented-toggle">
                <button class="ios-toggle-btn ${state.theme !== 'dark' ? 'active' : ''}" onclick="App.setTheme('light')">
                  <span>☀️</span> ${this.t('themeLight', state)}
                </button>
                <button class="ios-toggle-btn ${state.theme === 'dark' ? 'active' : ''}" onclick="App.setTheme('dark')">
                  <span>🌙</span> ${this.t('themeDark', state)}
                </button>
              </div>
            </div>

            <div class="ios-settings-row">
              <div class="ios-settings-left">
                <div class="ios-settings-icon">🌐</div>
                <div>
                  <div class="ios-settings-title">${state.language === 'en' ? 'Language' : 'भाषा'}</div>
                  <div class="ios-settings-subtitle">${state.language === 'en' ? 'English (Active)' : 'हिंदी (सक्रिय)'}</div>
                </div>
              </div>
              <div class="ios-segmented-toggle">
                <button class="ios-toggle-btn ${state.language === 'en' ? 'active' : ''}" onclick="App.setLanguage('en')">
                  <span>🌐</span> English
                </button>
                <button class="ios-toggle-btn ${state.language === 'hi' ? 'active' : ''}" onclick="App.setLanguage('hi')">
                  <span>🇮🇳</span> हिंदी
                </button>
              </div>
            </div>
          </div>

          <!-- Guest How It Works FAQ Card -->
          <div class="guest-faq-card">
            <h3 style="font-size: 15px; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">
              ❓ ${this.t('guestFaqTitle', state)}
            </h3>
            <div class="faq-mini-item">
              <div class="faq-q">1. ${this.t('faqQ1', state)}</div>
              <div class="faq-a">${this.t('faqA1', state)}</div>
            </div>
            <div class="faq-mini-item">
              <div class="faq-q">2. ${this.t('faqQ2', state)}</div>
              <div class="faq-a">${this.t('faqA2', state)}</div>
            </div>
            <div class="faq-mini-item">
              <div class="faq-q">3. ${this.t('faqQ3', state)}</div>
              <div class="faq-a">${this.t('faqA3', state)}</div>
            </div>
          </div>
        </div>
      `;
    }

    const subTab = state.profileSubTab || 'wallet';
    const isKYCApproved = user.kyc_status === 'APPROVED';
    const isAdmin = user.role === 'ADMIN';
    const txs = state.walletHistory || [];
    const tickets = state.myTickets || [];

    return `
      <div>
        <!-- Profile Identity Card -->
        <div class="glass-card" style="margin-bottom: 12px; padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div class="user-avatar-circle" style="width: 44px; height: 44px; font-size: 18px;">
                ${(user.name || 'U').charAt(0).toUpperCase()}
              </div>
              <div>
                <div style="font-size: 16px; font-weight: 800; color: var(--text-primary);">${user.name}</div>
                <div style="font-size: 12px; color: var(--text-secondary);">${user.phone}</div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
              <div class="status-badge ${isKYCApproved ? 'live' : 'gold'}" style="font-size: 10px;">
                ${isKYCApproved ? '🛡️ ' + this.t('kycVerifiedBadge', state) : '⚠️ ' + this.t('kycPendingBadge', state)}
              </div>
              <button class="btn-vip outline" style="padding: 3px 8px; font-size: 10px; color: #f43f5e;" onclick="App.logout()">
                ${this.t('btnLogout', state)}
              </button>
            </div>
          </div>
        </div>

        <!-- iOS Settings: Appearance / Theme Toggle & Language in Member Profile -->
        <div class="ios-settings-card">
          <div class="ios-settings-row">
            <div class="ios-settings-left">
              <div class="ios-settings-icon">🌓</div>
              <div>
                <div class="ios-settings-title">${this.t('themeTitle', state)}</div>
                <div class="ios-settings-subtitle">${state.theme === 'dark' ? this.t('themeDarkActive', state) : this.t('themeLightActive', state)}</div>
              </div>
            </div>
            <div class="ios-segmented-toggle">
              <button class="ios-toggle-btn ${state.theme !== 'dark' ? 'active' : ''}" onclick="App.setTheme('light')">
                <span>☀️</span> ${this.t('themeLight', state)}
              </button>
              <button class="ios-toggle-btn ${state.theme === 'dark' ? 'active' : ''}" onclick="App.setTheme('dark')">
                <span>🌙</span> ${this.t('themeDark', state)}
              </button>
            </div>
          </div>

          <div class="ios-settings-row">
            <div class="ios-settings-left">
              <div class="ios-settings-icon">🌐</div>
              <div>
                <div class="ios-settings-title">${state.language === 'en' ? 'Language' : 'भाषा'}</div>
                <div class="ios-settings-subtitle">${state.language === 'en' ? 'English (Active)' : 'हिंदी (सक्रिय)'}</div>
              </div>
            </div>
            <div class="ios-segmented-toggle">
              <button class="ios-toggle-btn ${state.language === 'en' ? 'active' : ''}" onclick="App.setLanguage('en')">
                <span>🌐</span> English
              </button>
              <button class="ios-toggle-btn ${state.language === 'hi' ? 'active' : ''}" onclick="App.setLanguage('hi')">
                <span>🇮🇳</span> हिंदी
              </button>
            </div>
          </div>
        </div>

        <!-- Sub Tab Segmented Selector Inside Profile -->
        <div style="display: flex; gap: 6px; background: var(--bg-card-subtle); padding: 4px; border-radius: var(--radius-pill); margin-bottom: 16px; border: 1px solid var(--border-glass);">
          <button class="btn-vip ${subTab === 'wallet' ? 'primary' : 'outline'}" style="flex: 1; padding: 8px 6px; font-size: 12px; border-radius: var(--radius-pill);" onclick="App.switchProfileSubTab('wallet')">
            💳 ${this.t('subTabWallet', state)}
          </button>
          <button class="btn-vip ${subTab === 'tickets' ? 'primary' : 'outline'}" style="flex: 1; padding: 8px 6px; font-size: 12px; border-radius: var(--radius-pill);" onclick="App.switchProfileSubTab('tickets')">
            🎫 ${this.t('subTabTickets', state)} (${tickets.length})
          </button>
          <button class="btn-vip ${subTab === 'kyc' ? 'primary' : 'outline'}" style="flex: 1; padding: 8px 6px; font-size: 12px; border-radius: var(--radius-pill);" onclick="App.switchProfileSubTab('kyc')">
            🛡️ ${this.t('subTabKyc', state)}
          </button>
        </div>

        <!-- SUB TAB 1: WALLET & PASSBOOK -->
        ${subTab === 'wallet' ? `
          <!-- Wallet Balance Card -->
          <div class="wallet-hero">
            <div style="font-size: 12px; text-transform: uppercase; color: var(--text-secondary); font-weight: 800;">
              ${this.t('walletHeading', state)}
            </div>

            <div class="wallet-bal-huge">
              ${Number(user.wallet_balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })} USDT
            </div>

            <div class="wallet-quick-actions">
              <button class="btn-vip gold" onclick="App.openModal('deposit')" style="font-size: 13px; padding: 11px 18px;">
                ${this.t('btnDeposit', state)}
              </button>
              <button class="btn-vip outline" onclick="App.openModal('withdraw')" style="font-size: 13px; padding: 11px 18px;">
                ${this.t('btnWithdraw', state)}
              </button>
            </div>
          </div>

          <!-- Apple Wallet Style Transaction History -->
          <div class="glass-card">
            <h3 style="font-size: 15px; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">
              📑 ${this.t('passbookTitle', state)}
            </h3>

            ${txs.length === 0 ? `
              <div style="text-align: center; color: var(--text-muted); padding: 24px; font-size: 13px;">
                ${this.t('passbookEmpty', state)}
              </div>
            ` : `
              <div class="apple-tx-list">
                ${txs.map(tx => {
                  const isCredit = tx.type === 'DEPOSIT' || tx.type === 'PRIZE_WIN';
                  let icon = '🎟️';
                  let typeLabel = tx.type;
                  if (tx.type === 'DEPOSIT') {
                    icon = '➕';
                    typeLabel = this.t('txDeposit', state);
                  } else if (tx.type === 'WITHDRAWAL') {
                    icon = '💸';
                    typeLabel = this.t('txWithdraw', state);
                  } else if (tx.type === 'PRIZE_WIN') {
                    icon = '🏆';
                    typeLabel = this.t('txWin', state);
                  } else if (tx.type === 'TICKET_PURCHASE') {
                    icon = '🎟️';
                    typeLabel = this.t('txTicket', state);
                  }

                  const dateStr = new Date(tx.created_at).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return `
                    <div class="apple-tx-row">
                      <div class="apple-tx-left">
                        <div class="apple-tx-icon-box ${isCredit ? 'credit' : 'debit'}">${icon}</div>
                        <div class="apple-tx-info">
                          <span class="apple-tx-title">${typeLabel}</span>
                          <span class="apple-tx-subtitle">${tx.remarks || tx.reference_id || ''}</span>
                        </div>
                      </div>
                      <div class="apple-tx-right">
                        <span class="apple-tx-amount ${isCredit ? 'credit' : 'debit'}">
                          ${isCredit ? '+' : '-'}${Number(tx.amount).toLocaleString('en-US')} USDT
                        </span>
                        <span class="apple-tx-time">${dateStr}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        ` : ''}

        <!-- SUB TAB 2: MY TICKETS -->
        ${subTab === 'tickets' ? `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
              <h3 style="font-size: 16px; font-weight: 800; color: var(--text-primary);">${this.t('myTicketsHeading', state)}</h3>
              <button class="btn-vip gold" onclick="App.navigateTo('pools')" style="padding: 7px 14px; font-size: 12px;">
                ${this.t('btnBuyMore', state)}
              </button>
            </div>

            ${tickets.length === 0 ? `
              <div class="glass-card" style="text-align: center; padding: 36px 18px;">
                <div style="font-size: 38px; margin-bottom: 8px;">🎟️</div>
                <h4 style="font-size: 15px; font-weight: 800; margin-bottom: 4px; color: var(--text-primary);">${this.t('noTicketsTitle', state)}</h4>
                <p style="color: var(--text-secondary); font-size: 12px; margin-bottom: 12px;">${this.t('noTicketsDesc', state)}</p>
                <button class="btn-vip gold" onclick="App.navigateTo('pools')">${this.t('btnBuyMore', state)}</button>
              </div>
            ` : `
              <div class="tickets-grid">
                ${tickets.map(tkt => {
                  const isWon = tkt.status === 'WON';
                  return `
                    <div class="ticket-stub ${isWon ? 'won' : ''}">
                      <div class="ticket-stub-header">
                        <span class="ticket-no-badge">${this.t('ticketLabel', state)}${String(tkt.ticket_number).padStart(3, '0')}</span>
                        <span class="status-badge ${isWon ? 'gold' : 'live'}">
                          ${isWon ? this.t('ticketStatusWon', state) : this.t('ticketStatusActive', state)}
                        </span>
                      </div>

                      <div style="font-size: 14px; font-weight: 800; color: var(--text-primary); margin-bottom: 2px;">
                        ${tkt.pool_title || 'VIP 60-Seat Pool'}
                      </div>

                      ${isWon ? `
                        <div style="background: rgba(255, 215, 0, 0.12); border: 1px solid var(--border-gold); padding: 8px 10px; border-radius: var(--radius-xs); font-size: 12px; color: var(--accent-gold); font-weight: 700; margin-top: 6px;">
                          🎉 ${this.t('ticketWonMsg', state)}${tkt.won_round}!<br>${this.t('prizeWonLabel', state)}: ${tkt.prize_info}
                        </div>
                      ` : `
                        <div style="background: rgba(0, 122, 255, 0.08); border: 1px solid rgba(0, 122, 255, 0.2); padding: 8px 10px; border-radius: var(--radius-xs); font-size: 11px; color: var(--accent-blue); margin-top: 6px; line-height: 1.4;">
                          ${this.t('ticketActiveMsg', state)}
                        </div>
                      `}
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        ` : ''}

        <!-- SUB TAB 3: KYC VERIFICATION -->
        ${subTab === 'kyc' ? `
          <div class="glass-card">
            <h3 style="font-size: 16px; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">
              ${this.t('kycSectionTitle', state)}
            </h3>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 14px;">
              ${this.t('kycSectionDesc', state)}
            </p>

            ${isKYCApproved ? `
              <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid var(--accent-green); padding: 12px 14px; border-radius: var(--radius-sm); color: #34d399; font-size: 13px; font-weight: 700;">
                ✓ ${user.doc_type || 'ID'}: ${user.aadhaar_pan || 'XXXX'} (${this.t('kycVerifiedBadge', state)})
              </div>
            ` : `
              <button class="btn-vip gold" onclick="App.openModal('kyc')" style="padding: 10px 20px; font-size: 13px;">
                ${this.t('btnVerifyNow', state)}
              </button>
            `}
          </div>
        ` : ''}
      </div>
    `;
  },

  renderAdminTab(state) {
    const adminData = state.adminData;
    const pool = state.currentPool;
    if (!adminData) return '<div class="glass-card">Loading admin data...</div>';

    const users = adminData.users || [];
    const rewards = (pool && pool.reward_config) || {};
    const curRound = (pool && pool.current_round) || 1;

    return `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;">
          <div>
            <h2 style="font-size: 20px; font-weight: 800; color: var(--text-primary);">👑 Master Control Room</h2>
            <div style="font-size: 12px; color: var(--text-secondary);">Configure dynamic rewards and trigger round draw.</div>
          </div>
          <div>
            <button class="btn-vip gold" onclick="App.triggerLiveDraw('${pool ? pool.id : ''}')" style="padding: 10px 18px; font-size: 13px;">
              ⚡ Execute Round #${curRound} Draw
            </button>
          </div>
        </div>

        <!-- Dynamic Reward Configuration Panel -->
        <div class="glass-card gold-border">
          <h3 style="font-size: 16px; font-weight: 800; color: var(--accent-gold); margin-bottom: 6px;">
            🎁 Dynamic Prize Configurator
          </h3>
          <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 14px;">
            Set or modify round rewards dynamically anytime:
          </p>

          <form id="rewardConfigForm" onsubmit="App.handleUpdateRewards(event)">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-bottom: 14px;">
              <div class="form-group">
                <label class="form-label">Round 1 Prize</label>
                <input type="text" class="form-input" id="cfg_r1" value="${rewards['1'] || '25 USDT Prize + VIP Crown'}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Round 2 Prize</label>
                <input type="text" class="form-input" id="cfg_r2" value="${rewards['2'] || '35 USDT Prize + VIP Pass'}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Round 3 Prize</label>
                <input type="text" class="form-input" id="cfg_r3" value="${rewards['3'] || '40 USDT Prize + Watch'}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Default / Other</label>
                <input type="text" class="form-input" id="cfg_default" value="${rewards['default'] || '25 USDT Cash Prize'}" required>
              </div>
            </div>
            <button type="submit" class="btn-vip primary" style="padding: 10px 22px; font-size: 13px;">
              💾 Save Dynamic Rewards
            </button>
          </form>
        </div>

        <!-- Users Table -->
        <div class="glass-card">
          <h3 style="font-size: 16px; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">
            👥 Members (${users.length})
          </h3>

          <div class="vip-table-container">
            <table class="vip-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Balance</th>
                  <th>Document</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${users.map(u => `
                  <tr>
                    <td><strong>${u.name}</strong></td>
                    <td>${u.phone}</td>
                    <td style="color: var(--accent-cyan); font-weight: 800;">${Number(u.wallet_balance).toLocaleString('en-US')} USDT</td>
                    <td>${u.doc_type || 'ID'}: <strong>${u.aadhaar_pan || 'None'}</strong></td>
                    <td>
                      <span class="status-badge ${u.kyc_status === 'APPROVED' ? 'live' : 'gold'}" style="font-size: 10px;">
                        ${u.kyc_status}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================================================
  // DEDICATED AUTH PAGE (Separate Full Page for Sign In & Free Register)
  // ==========================================================================
  renderAuthPage(state, mode = 'login') {
    const lang = (state && state.language) === 'en' ? 'en' : 'hi';
    const isReg = mode === 'register';

    return `
      <div class="auth-page-wrapper">
        <!-- Back Navigation Bar -->
        <div class="auth-nav-bar">
          <button class="auth-back-btn" onclick="App.navigateTo('pools')">
            <span>←</span>
            <span>${lang === 'en' ? 'Back to Lottery' : 'वापस लॉटरी पर जाएं'}</span>
          </button>
          <div style="font-size: 11px; font-weight: 700; color: var(--accent-gold);">
            🔒 256-Bit SSL Encrypted
          </div>
        </div>

        <!-- Auth Hero Brand Card -->
        <div class="auth-page-hero">
          <img src="assets/logo.jpg" alt="Logo" class="auth-page-logo">
          <h2 class="auth-page-title">${isReg ? (lang === 'en' ? 'Create Free Account' : 'नया खाता खोलें') : (lang === 'en' ? 'Welcome Back' : 'वापसी पर स्वागत है')}</h2>
          <p class="auth-page-subtitle">${isReg ? (lang === 'en' ? 'Join the 60-seat recurring lottery & claim USDT rewards' : '60-सीट लॉटरी में शामिल हों और USDT इनाम जीतें') : (lang === 'en' ? 'Sign in to access your wallet, view tickets & book seats' : 'अपने बटुए और बुक किए गए टिकट देखने के लिए लॉगिन करें')}</p>
        </div>

        <div class="glass-card" style="padding: 20px 16px;">
          <!-- Sleek Segmented Switch: Sign In vs Free Register -->
          <div class="auth-segment-switch">
            <button class="auth-seg-btn ${!isReg ? 'active' : ''}" onclick="App.switchAuthPageMode('login')">
              🔑 ${lang === 'en' ? 'Sign In' : 'लॉगिन करें'}
            </button>
            <button class="auth-seg-btn ${isReg ? 'active' : ''}" onclick="App.switchAuthPageMode('register')">
              ✨ ${lang === 'en' ? 'Free Register' : 'नया खाता'}
            </button>
          </div>

          <form id="authPageForm" onsubmit="App.handleAuthSubmit(event)">
            ${isReg ? `
              <div class="form-group">
                <label class="form-label">${this.t('lblFullName', state)}</label>
                <input type="text" class="form-input" id="authName" placeholder="e.g. Rahul Sharma" required style="font-size: 16px;">
              </div>
              <div class="form-group">
                <label class="form-label">${this.t('lblEmail', state)}</label>
                <input type="email" class="form-input" id="authEmail" placeholder="player@viplottery.com" required style="font-size: 16px;">
              </div>
            ` : ''}

            <div class="form-group">
              <label class="form-label">${this.t('lblMobile', state)}</label>
              <input type="tel" class="form-input" id="authLoginId" placeholder="9876543210" required style="font-size: 16px; letter-spacing: 0.5px;">
            </div>

            <div class="form-group">
              <label class="form-label">${this.t('lblPassword', state)}</label>
              <input type="password" class="form-input" id="authPassword" placeholder="••••••••" required style="font-size: 16px;">
            </div>

            <button type="submit" class="btn-vip ${isReg ? 'gold' : 'primary'}" style="width: 100%; margin-top: 12px; padding: 14px; font-size: 15px; font-weight: 800;" id="authSubmitBtn">
              ${isReg ? (lang === 'en' ? '✨ Create VIP Account' : '✨ नया वीआईपी खाता बनाएं') : (lang === 'en' ? '🔑 Sign In to 2XTRA' : '🔑 2XTRA में लॉगिन करें')}
            </button>
          </form>

          <!-- Quick Test Demo Logins -->
          <div style="margin-top: 20px; padding: 12px; background: rgba(0, 168, 255, 0.08); border-radius: var(--radius-md); text-align: center; font-size: 12px; border: 1px solid rgba(0, 168, 255, 0.18);">
            <div style="font-weight: 700; color: var(--accent-blue); margin-bottom: 6px;">⚡ ${lang === 'en' ? 'Quick 1-Click Demo Accounts' : 'त्वरित 1-क्लिक टेस्ट खाते'}:</div>
            <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
              <button type="button" class="btn-vip outline" style="padding: 6px 14px; font-size: 12px; font-weight: 700;" onclick="App.handleQuickDemoLogin('demo')">
                👤 ${lang === 'en' ? 'Player (50 USDT)' : 'खिलाड़ी डेमो (50 USDT)'}
              </button>
              <button type="button" class="btn-vip outline" style="padding: 6px 14px; font-size: 12px; font-weight: 700;" onclick="App.handleQuickDemoLogin('admin')">
                👑 ${lang === 'en' ? 'Master Admin' : 'मास्टर एडमिन'}
              </button>
            </div>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="auth-trust-pills">
          <span class="auth-trust-pill">🛡️ 100% Provably Fair</span>
          <span class="auth-trust-pill">⚡ Instant USDT Payouts</span>
          <span class="auth-trust-pill">🔄 Automatic Free Rollover</span>
        </div>
      </div>
    `;
  },

  renderModals(state) {
    const lang = (state && state.language) === 'en' ? 'en' : 'hi';

    return `
      <!-- Auth Modal -->
      <div class="ios-modal-backdrop" id="modal-auth" onclick="App.handleBackdropClick(event, 'auth')">
        <div class="ios-bottom-sheet">
          <div class="sheet-handle"></div>
          <div class="sheet-header">
            <h3 id="authModalTitle">${this.t('authTitleLogin', state)}</h3>
            <button class="sheet-close-btn" onclick="App.closeModal('auth')">✕</button>
          </div>

          <div style="display: flex; gap: 8px; margin-bottom: 16px;">
            <button class="btn-vip primary" id="tabAuthLogin" style="flex: 1; padding: 9px; font-size: 13px;" onclick="App.switchAuthMode('login')">${lang === 'en' ? 'Login' : 'लॉगिन'}</button>
            <button class="btn-vip outline" id="tabAuthRegister" style="flex: 1; padding: 9px; font-size: 13px;" onclick="App.switchAuthMode('register')">${lang === 'en' ? 'Sign Up' : 'खाता खोलें'}</button>
          </div>

          <form id="authForm" onsubmit="App.handleAuthSubmit(event)">
            <div id="registerFields" style="display: none;">
              <div class="form-group">
                <label class="form-label">${this.t('lblFullName', state)}</label>
                <input type="text" class="form-input" id="authName" placeholder="Demo Player">
              </div>
              <div class="form-group">
                <label class="form-label">${this.t('lblEmail', state)}</label>
                <input type="email" class="form-input" id="authEmail" placeholder="player@viplottery.com">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${this.t('lblMobile', state)}</label>
              <input type="tel" class="form-input" id="authLoginId" placeholder="9876543210" required style="font-size: 15px; letter-spacing: 0.5px;">
            </div>

            <div class="form-group">
              <label class="form-label">${this.t('lblPassword', state)}</label>
              <input type="password" class="form-input" id="authPassword" placeholder="••••••••" required style="font-size: 15px;">
            </div>

            <button type="submit" class="btn-vip gold" style="width: 100%; margin-top: 8px; padding: 13px; font-size: 15px;" id="authSubmitBtn">
              ${this.t('btnLoginSubmit', state)}
            </button>
          </form>

          <div style="margin-top: 16px; padding: 10px; background: rgba(0, 168, 255, 0.08); border-radius: var(--radius-md); text-align: center; font-size: 12px;">
            👉 <strong>${lang === 'en' ? 'Quick Demo Login:' : 'त्वरित टेस्ट खाता:'}</strong><br>
            <button type="button" class="btn-vip outline" style="margin-top: 6px; padding: 5px 12px; font-size: 11px;" onclick="App.fillDemo('demo')">
              👤 ${lang === 'en' ? 'Player: 9876543210 (50 USDT)' : 'खिलाड़ी: 9876543210 (50 USDT)'}
            </button>
            <button type="button" class="btn-vip outline" style="margin-top: 6px; padding: 5px 12px; font-size: 11px;" onclick="App.fillDemo('admin')">
              👑 ${lang === 'en' ? 'Admin: admin@vip.com' : 'एडमिन: admin@vip.com'}
            </button>
          </div>
        </div>
      </div>

      <!-- KYC Modal -->
      <div class="ios-modal-backdrop" id="modal-kyc" onclick="App.handleBackdropClick(event, 'kyc')">
        <div class="ios-bottom-sheet">
          <div class="sheet-handle"></div>
          <div class="sheet-header">
            <h3>🛡️ ${this.t('kycModalTitle', state)}</h3>
            <button class="sheet-close-btn" onclick="App.closeModal('kyc')">✕</button>
          </div>

          <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 16px;">
            ${this.t('kycModalDesc', state)}
          </p>

          <form id="kycForm" onsubmit="App.handleKYCSubmit(event)">
            <div class="form-group">
              <label class="form-label">${this.t('lblDocType', state)}</label>
              <select class="form-input" id="kycDocType">
                <option value="PAN">PAN Card</option>
                <option value="AADHAAR">Aadhaar Card (12 Digits)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">${this.t('lblDocNumber', state)}</label>
              <input type="text" class="form-input" id="kycDocNum" placeholder="ABCDE1234F" required style="text-transform: uppercase; font-size: 15px;">
            </div>

            <button type="submit" class="btn-vip primary" style="width: 100%; margin-top: 12px; padding: 13px; font-size: 15px;">
              ${this.t('btnKycSubmit', state)}
            </button>
          </form>
        </div>
      </div>

      <!-- Deposit Modal -->
      <div class="ios-modal-backdrop" id="modal-deposit" onclick="App.handleBackdropClick(event, 'deposit')">
        <div class="ios-bottom-sheet">
          <div class="sheet-handle"></div>
          <div class="sheet-header">
            <h3>➕ ${this.t('depositModalTitle', state)}</h3>
            <button class="sheet-close-btn" onclick="App.closeModal('deposit')">✕</button>
          </div>

          <!-- Official USDT Deposit Card -->
          <div class="usdt-deposit-card" style="background: var(--bg-card-subtle); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 14px; text-align: center; margin-bottom: 14px;">
            <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 20px; background: rgba(38, 161, 123, 0.12); color: #26a17b; font-size: 11px; font-weight: 800; margin-bottom: 10px;">
              <span>₮</span> Network: <strong>TRC-20 (Tron) / BEP-20</strong>
            </div>

            <div style="margin: 8px 0;">
              <div style="display: inline-block; background: #ffffff; padding: 10px; border-radius: var(--radius-md); box-shadow: 0 4px 15px rgba(0,0,0,0.12);">
                <svg width="120" height="120" viewBox="0 0 100 100">
                  <rect width="100" height="100" fill="#ffffff"/>
                  <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M20,20 h10 v10 h-10 z" fill="#26a17b"/>
                  <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M70,20 h10 v10 h-10 z" fill="#26a17b"/>
                  <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M20,70 h10 v10 h-10 z" fill="#26a17b"/>
                  <rect x="45" y="10" width="8" height="8" fill="#26a17b"/>
                  <rect x="50" y="25" width="6" height="6" fill="#000000"/>
                  <rect x="45" y="45" width="10" height="10" fill="#26a17b"/>
                  <rect x="60" y="60" width="12" height="12" fill="#000000"/>
                  <rect x="75" y="75" width="15" height="15" fill="#26a17b"/>
                </svg>
              </div>
            </div>

            <div style="margin-top: 6px;">
              <div style="font-size: 10px; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">
                Official USDT (TRC-20) Deposit Address:
              </div>
              <div style="display: flex; align-items: center; justify-content: center; gap: 6px; background: var(--bg-surface); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-glass);">
                <code style="font-size: 11px; font-weight: 700; color: var(--text-primary); font-family: monospace; word-break: break-all;">TXtra98LotteryPool79qXm3Kp29LwBe82Yk</code>
                <button type="button" class="btn-vip primary" onclick="App.copyUsdtAddress()" style="padding: 4px 8px; font-size: 11px; flex-shrink: 0;">📋 Copy</button>
              </div>
            </div>
          </div>

          <form id="depositForm" onsubmit="App.handleDepositSubmit(event)">
            <div class="form-group">
              <label class="form-label">${this.t('lblDepositAmount', state)}</label>
              <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                <button type="button" class="btn-vip outline" style="flex: 1; padding: 8px; font-size: 13px; font-weight: 800;" onclick="App.setDepositAmt(10)">+10 USDT</button>
                <button type="button" class="btn-vip outline" style="flex: 1; padding: 8px; font-size: 13px; font-weight: 800;" onclick="App.setDepositAmt(50)">+50 USDT</button>
                <button type="button" class="btn-vip outline" style="flex: 1; padding: 8px; font-size: 13px; font-weight: 800;" onclick="App.setDepositAmt(100)">+100 USDT</button>
              </div>
              <input type="number" class="form-input" id="depositAmount" value="50" min="5" step="1" required style="font-size: 16px; font-weight: 800;">
            </div>

            <div class="form-group">
              <label class="form-label">Transaction Hash / TXID (Optional)</label>
              <input type="text" class="form-input" id="depositTxid" placeholder="Paste your transfer transaction hash / TXID" style="font-size: 12px;">
            </div>

            <button type="submit" class="btn-vip gold" style="width: 100%; margin-top: 8px; padding: 13px; font-size: 15px;">
              ${this.t('btnDepositSubmit', state)}
            </button>
          </form>
        </div>
      </div>

      <!-- Withdraw Modal: Cryptocurrency USDT -->
      <div class="ios-modal-backdrop" id="modal-withdraw" onclick="App.handleBackdropClick(event, 'withdraw')">
        <div class="ios-bottom-sheet">
          <div class="sheet-handle"></div>
          <div class="sheet-header">
            <h3>💸 ${this.t('withdrawModalTitle', state)}</h3>
            <button class="sheet-close-btn" onclick="App.closeModal('withdraw')">✕</button>
          </div>

          <form id="withdrawForm" onsubmit="App.handleWithdrawSubmit(event)">
            <div class="form-group">
              <label class="form-label">${this.t('lblWithdrawAmount', state)}</label>
              <input type="number" class="form-input" id="withdrawAmount" placeholder="Min 10 USDT" min="10" step="1" required style="font-size: 15px;">
            </div>

            <div class="form-group">
              <label class="form-label">${this.t('lblCryptoAddress', state)}</label>
              <input type="text" class="form-input" id="withdrawUsdtAddress" placeholder="e.g. TXtra98... (TRC-20) or 0x71... (BEP-20)" required style="font-size: 13px; font-family: monospace;">
              <span style="font-size: 11px; color: var(--text-tertiary); margin-top: 4px; display: block;">Supports Binance, Trust Wallet, OKX, Bybit TRC-20 & BEP-20 USDT.</span>
            </div>

            <button type="submit" class="btn-vip primary" style="width: 100%; margin-top: 8px; padding: 13px; font-size: 15px;">
              ${this.t('btnWithdrawSubmit', state)}
            </button>
          </form>
        </div>
      </div>

      <!-- Floating Compact WhatsApp Pill -->
      <div class="floating-whatsapp-btn" onclick="App.openWhatsAppHelp()" title="${this.t('whatsappLabel', state)}">
        <span style="font-size: 15px;">💬</span>
        <span>WhatsApp</span>
      </div>
    `;
  }
};
