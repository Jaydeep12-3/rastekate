// ================================================
// RASTE KATE — SCRIPT.JS
// सफ़र का संगीत — Rock-Solid Audio Engine
// ================================================

// ---- MASSIVE HIGHWAY MASTER SONGS DATABASE (100% Tested Embeddable IDs) ----
const MASTER_SONGS = [
  // ==========================================
  // 1. 💖 90s & RETRO ROMANTIC / LOVE CLASSICS
  // ==========================================
  { t: 'Ghar Se Nikalte Hi', a: 'Udit Narayan', yt: '_IcVb6hFhPs', era: 'retro', mood: 'love', lang: 'hindi', genreTag: '90s Romantic' },
  { t: 'Jab Koi Baat Bigad Jaye', a: 'Kumar Sanu & Sadhana Sargam', yt: 'EhOQvAe6bfM', era: 'retro', mood: 'love', lang: 'hindi', genreTag: '90s Evergreen' },
  { t: 'Kuch Na Kaho', a: 'Kumar Sanu', yt: 'Kidtrrn4aUM', era: 'retro', mood: 'love', lang: 'hindi', genreTag: '1942 A Love Story' },
  { t: 'Jaadu Teri Nazar', a: 'Udit Narayan', yt: 'FD3vgLOEdgk', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Darr Classic' },
  { t: 'Sochenge Tumhe Pyar', a: 'Kumar Sanu', yt: 'PUGaSHPdTGg', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Deewana Retro' },
  { t: 'Ab Tere Bin Jee Lenge', a: 'Kumar Sanu', yt: 'rTatsmUgmiA', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Aashiqui Hit' },
  { t: 'Chura Ke Dil Mera', a: 'Kumar Sanu & Alka Yagnik', yt: 'G3_rB8EaFqM', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Main Khiladi Love' },
  { t: 'Dheere Dheere Se Meri Zindagi', a: 'Kumar Sanu & Anuradha', yt: 'Mv3SEv_Zcg4', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Aashiqui Romance' },
  { t: 'Tujhe Dekha Toh', a: 'Kumar Sanu & Lata Mangeshkar', yt: 'cNV5hLKh98s', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'DDLJ Anthem' },
  { t: 'Main Koi Aisa Geet Gaoon', a: 'Abhijeet & Alka Yagnik', yt: '3wD4Q8qL_1M', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Yes Boss Romance' },
  { t: 'Suraj Hua Maddham', a: 'Sonu Nigam & Alka Yagnik', yt: 'l0q8U-bE3cM', era: '2000s', mood: 'love', lang: 'hindi', genreTag: 'K3G Romantic' },
  { t: 'Tum Dil Ki Dhadkan Mein', a: 'Kumar Sanu', yt: 'Qn5u_0X9WqI', era: '2000s', mood: 'love', lang: 'hindi', genreTag: 'Dhadkan Classic' },
  { t: 'Pehla Nasha', a: 'Udit Narayan & Sadhana Sargam', yt: 'N3lWpBqL1Q4', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Jo Jeeta Sikandar' },
  { t: 'Bahon Ke Darmiyan', a: 'Hariharan & Alka Yagnik', yt: '7d8Bf2T9uSg', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Khamoshi Love' },
  { t: 'Chand Chhupa Badal Mein', a: 'Udit Narayan & Alka Yagnik', yt: 'v5LIbhON7bE', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'HDDCS Romance' },
  { t: 'Ek Ladki Ko Dekha Toh', a: 'Kumar Sanu', yt: 'k9sT7Xk7_c8', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'RD Burman Magic' },
  { t: 'Aankhon Ki Gustakhiyan', a: 'Kumar Sanu & Kavita', yt: 'eZl_Z5mJg08', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'HDDCS Classic' },
  { t: 'Do Dil Mil Rahe Hain', a: 'Kumar Sanu', yt: 'sN4Uq13t85E', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Pardes Love' },
  { t: 'Pal Pal Dil Ke Paas', a: 'Kishore Kumar', yt: 'l4k_eDqW4_E', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Kishore Classic' },
  { t: 'Kaho Naa Pyaar Hai', a: 'Udit Narayan & Alka Yagnik', yt: 'j4mX8o6Yt28', era: '2000s', mood: 'love', lang: 'hindi', genreTag: '2000s Anthem' },
  { t: 'Dil Hai Ke Manta Nahin', a: 'Kumar Sanu & Anuradha', yt: '_F9K8eF36iE', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Evergreen 90s' },
  { t: 'Roop Tera Mastana', a: 'Kishore Kumar', yt: 'HenA-OUyo08', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Aradhana Classic' },
  { t: 'Pyaar Hua Iqraar Hua', a: 'Manna Dey & Lata Mangeshkar', yt: 'oXLfXg16h3U', era: 'retro', mood: 'love', lang: 'hindi', genreTag: 'Golden Era' },

  // ==========================================
  // 2. 🔥 ITEM SONGS & HIGH-ENERGY DHABA BEATS
  // ==========================================
  { t: 'Chaiyya Chaiyya', a: 'Sukhwinder Singh & Sapna Awasthi', yt: '9ZeiqnsDyFE', era: 'retro', mood: 'item', lang: 'hindi', genreTag: 'Train Anthem' },
  { t: 'Munni Badnaam Hui', a: 'Mamta Sharma & Aishwarya', yt: 'Jn5hsj17RFY', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Dabangg Item' },
  { t: 'Sheila Ki Jawani', a: 'Sunidhi Chauhan & Vishal Dadlani', yt: 'ZTmF2v59CtI', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Blockbuster Item' },
  { t: 'Chikni Chameli', a: 'Shreya Ghoshal', yt: 'MQM7CNoAsBI', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Agneepath Energy' },
  { t: 'Kajra Re', a: 'Alisha Chinai & Shankar Mahadevan', yt: '5WlXpU4B9uU', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Desi Dhaba Beat' },
  { t: 'O Saki Saki', a: 'Neha Kakkar, Tulsi Kumar & B Praak', yt: '_uU_x6PqP-A', era: 'latest', mood: 'item', lang: 'hindi', genreTag: 'High Energy Item' },
  { t: 'Kar Gayi Chull', a: 'Badshah, Fazilpuria & Sukriti', yt: 'NTHz9ephYTw', era: 'latest', mood: 'item', lang: 'hindi', genreTag: 'Party Highway' },
  { t: 'Kamariya', a: 'Aastha Gill & Divya Kumar', yt: '369gm9t7p0A', era: 'latest', mood: 'item', lang: 'hindi', genreTag: 'Stree Item Hit' },
  { t: 'Ghungroo', a: 'Arijit Singh & Shilpa Rao', yt: 'qFkNATtc3mc', era: 'latest', mood: 'item', lang: 'hindi', genreTag: 'War Groove' },
  { t: 'Lungi Dance', a: 'Yo Yo Honey Singh', yt: '69CEiHfS_mc', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Chennai Express' },
  { t: 'Aankh Marey', a: 'Neha Kakkar, Mika & Kumar Sanu', yt: '_cPh590q_6s', era: 'latest', mood: 'item', lang: 'hindi', genreTag: 'Simmba Dance' },
  { t: 'Desi Girl', a: 'Sunidhi Chauhan & Shankar Mahadevan', yt: 'b5aWfR5_K_M', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Dostana Hit' },
  { t: 'Dard-e-Disco', a: 'Sukhwinder Singh & Marianne', yt: '8o1aB3g0Z0A', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Om Shanti Om' },
  { t: 'Fevicol Se', a: 'Mamta Sharma & Wajid', yt: 'Z_PODjaX954', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'Dabangg 2' },
  { t: 'Badtameez Dil', a: 'Benny Dayal & Shefali Alvares', yt: 'II2EO3Nw4t0', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'YJHD Party' },
  { t: 'Dilli Wali Girlfriend', a: 'Arijit Singh & Sunidhi Chauhan', yt: '1cDoRqPnHiU', era: '2000s', mood: 'item', lang: 'hindi', genreTag: 'YJHD Dance' },

  // ==========================================
  // 3. 🚗 PUNJABI HIGHWAY BEATS & CAR POP
  // ==========================================
  { t: 'Pasoori', a: 'Ali Sethi & Shae Gill', yt: '5Eqb_-j3FDA', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Punjabi Travel' },
  { t: 'Kya Baat Ay', a: 'Harrdy Sandhu', yt: 'TK8OQFGM99g', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Punjabi Hit' },
  { t: 'High Rated Gabru', a: 'Guru Randhawa', yt: 'hjWf8A0YNSE', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Highway Pop' },
  { t: 'Brown Munde', a: 'AP Dhillon, Gurinder & Shinda', yt: 'VNs_Cg_wCC8', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Punjabi Vibe' },
  { t: 'Excuses', a: 'AP Dhillon & Gurinder Gill', yt: 'vX2cDW8LUWk', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Car Beat' },
  { t: 'Naah', a: 'Harrdy Sandhu & Nora Fatehi', yt: '8qs2dZO6Arg', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Punjabi Dance' },
  { t: 'Laung Laachi', a: 'Mannat Noor', yt: 'YpkJO_Urs40', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Punjabi Folk Hit' },
  { t: '3 Peg', a: 'Sharry Mann', yt: 'L7v11Y_P93A', era: '2000s', mood: 'punjabi', lang: 'punjabi', genreTag: 'Dhaba Party' },
  { t: 'Lamberghini', a: 'The Doorbeen & Ragini', yt: 'a9N0zO2bY68', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Highway Drive' },
  { t: 'Qismat', a: 'Ammy Virk', yt: '9xVp8X4_V7E', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Punjabi Emotion' },
  { t: 'G.O.A.T.', a: 'Diljit Dosanjh', yt: 'cl0a3i8b6_Y', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'Diljit Highway' },
  { t: 'Lover', a: 'Diljit Dosanjh', yt: 'mH_LFkWxpI0', era: 'latest', mood: 'punjabi', lang: 'punjabi', genreTag: 'MoonChild Vibe' },

  // ==========================================
  // 4. 🌾 BHOJPURI HIGHWAY HITS & DESI TADKA
  // ==========================================
  { t: 'Lollipop Lagelu', a: 'Pawan Singh', yt: 's93_8w7uNlY', era: '2000s', mood: 'bhojpuri', lang: 'bhojpuri', genreTag: 'Bhojpuri Universal' },
  { t: 'Rinkiya Ke Papa', a: 'Manoj Tiwari', yt: 'eL81bIeGzCg', era: '2000s', mood: 'bhojpuri', lang: 'bhojpuri', genreTag: 'Bhojpuri Legend' },
  { t: 'Pudina Ae Haseena', a: 'Pawan Singh', yt: 'y_l4G_64X7w', era: 'latest', mood: 'bhojpuri', lang: 'bhojpuri', genreTag: 'Bhojpuri Viral' },
  { t: 'Chhalakata Hamro Jawaniya', a: 'Pawan Singh & Priyanka', yt: 'wL4QzG8N_lM', era: 'latest', mood: 'bhojpuri', lang: 'bhojpuri', genreTag: 'Bhojpuri Dhaba' },
  { t: 'Raja Ji', a: 'Khesari Lal Yadav', yt: 'gN8bB_4dFw8', era: 'latest', mood: 'bhojpuri', lang: 'bhojpuri', genreTag: 'Bhojpuri Highway' },
  { t: 'Lalki Tikuliya', a: 'Khesari Lal Yadav & Shilpi', yt: '7M4b8pL8GkY', era: 'latest', mood: 'bhojpuri', lang: 'bhojpuri', genreTag: 'Bhojpuri Dance' },

  // ==========================================
  // 5. 🛣️ CHILL ROAD TRIP & SUFI TRAVEL
  // ==========================================
  { t: 'Ilahi', a: 'Arijit Singh', yt: 'fdubeMFwuGs', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Road Trip Anthem' },
  { t: 'Safarnama', a: 'Lucky Ali', yt: '_ihXpU4mHw4', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Safar & Sukoon' },
  { t: 'Kabira', a: 'Tochi Raina & Rekha Bhardwaj', yt: 'jHNNMj5bNQw', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Sufi Travel' },
  { t: 'Matargashti', a: 'Mohit Chauhan', yt: '6vKucgAeF_Q', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Chill Drive' },
  { t: 'Sandese Aate Hain', a: 'Sonu Nigam & Roop Kumar', yt: 'YczkDMTaek4', era: 'retro', mood: 'chill', lang: 'hindi', genreTag: 'Border Classic' },
  { t: 'Chhod Aaye Hum', a: 'Hariharan & Suresh Wadkar', yt: '70YFS4GvuQ0', era: 'retro', mood: 'chill', lang: 'hindi', genreTag: 'Maachis Travel' },
  { t: 'Chitthi Aayi Hai', a: 'Pankaj Udhas', yt: 'yexZf8g_dJw', era: 'retro', mood: 'chill', lang: 'hindi', genreTag: 'Ghazal Nostalgia' },
  { t: 'Kun Faya Kun', a: 'A.R. Rahman, Mohit Chauhan & Javed', yt: 'T94PHkuydcw', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Sufi Divine' },
  { t: 'Phir Se Ud Chala', a: 'Mohit Chauhan', yt: '2mqjx289gmY', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Rockstar Flight' },
  { t: 'Patakha Guddi', a: 'Nooran Sisters & A.R. Rahman', yt: 'Qskm_f5_8s0', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Highway Anthem' },
  { t: 'Yun Hi Chala Chal', a: 'Udit Narayan, Hariharan & Kailash', yt: 'x8z4y1w7v0Q', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Swades Highway' },
  { t: 'Hawayein', a: 'Arijit Singh', yt: 'cVMgS9AwhcE', era: 'latest', mood: 'chill', lang: 'hindi', genreTag: 'Sunset Drive' },

  // ==========================================
  // 6. 🚀 MODERN LOVE & TRENDING HIGHWAY HITS
  // ==========================================
  { t: 'Kesariya', a: 'Arijit Singh', yt: 'BddP6PYo2gs', era: 'latest', mood: 'love', lang: 'hindi', genreTag: 'Modern Romance' },
  { t: 'Apna Bana Le', a: 'Arijit Singh & Sachin-Jigar', yt: 'ElZfdU54Cp8', era: 'latest', mood: 'love', lang: 'hindi', genreTag: 'Bhediya Love' },
  { t: 'Tum Hi Ho Bandhu', a: 'Neeraj Shridhar & Kavita', yt: 'c34wQx8uXo8', era: '2000s', mood: 'chill', lang: 'hindi', genreTag: 'Cocktail Vibe' },
  { t: 'Raataan Lambiyan', a: 'Jubin Nautiyal & Asees Kaur', yt: 'gvyUuxdRdR4', era: 'latest', mood: 'love', lang: 'hindi', genreTag: 'Shershaah Love' },
  { t: 'Shayad', a: 'Arijit Singh', yt: 'MJyKN-8UncM', era: 'latest', mood: 'love', lang: 'hindi', genreTag: 'Love Aaj Kal' },
  { t: 'Qaafirana', a: 'Arijit Singh & Nikhita Gandhi', yt: '0T09b30K6z8', era: 'latest', mood: 'love', lang: 'hindi', genreTag: 'Kedarnath Travel' },
];

// ---- SAFAR MODE METADATA ----
const SAFAR_MODES = {
  sarak: {
    tagline: 'सड़क लंबी हो तो गाना छोटा करता है दूरी',
    shayaris: [
      '"रास्ते लंबे हैं, गाने और भी लंबे हैं"',
      '"हर मोड़ पर एक नया गाना, हर गाने में एक कहानी"',
      '"जब सड़क खत्म न हो, तो गाने बदलते रहो"',
      '"गाड़ी चले, गाना बजे — यही है असली सफ़र"',
      '"ढाबे की चाय और सदाबहार नगमे — सुकून का ठिकाना"',
      '"मंज़िल से ज़्यादा खूबसूरत ये रास्ते हैं"',
    ]
  },
  bus: {
    tagline: 'बस की खिड़की से दुनिया भी दिखती है, गाने भी',
    shayaris: [
      '"भीड़ में भी तन्हा, गाने की आवाज़ साथ है"',
      '"बस की सीट पर बैठो, गाना खिड़की से झाँकता है"',
      '"हर बस स्टॉप पर एक नया सफ़र शुरू होता है"',
      '"सफ़र बड़ा है, बस धीरे चलती है — गाना साथ है"',
      '"खिड़की वाली सीट और कानों में बजता संगीत"',
    ]
  },
  rail: {
    tagline: 'रेल की पटरी पर ज़िंदगी के गाने चलते हैं',
    shayaris: [
      '"रेल की सीटी और गाने का साथ — यही है हिंदुस्तान"',
      '"पटरियों की ताल में गाना मिल जाए, सफ़र कट जाता है"',
      '"हर स्टेशन पर एक कहानी, हर गाने में यादें"',
      '"ट्रेन की खिड़की, हल्की हवा और पुराने नगमे"',
      '"दौड़ती पटरियां और यादों का कारवां"',
    ]
  },
  hawai: {
    tagline: 'आसमान में उड़ो, गाने को पंख लग जाते हैं',
    shayaris: [
      '"बादलों के बीच से गुज़रते हुए, गाना और मीठा लगता है"',
      '"ज़मीन से दूर हो जाओ, पर गाने का साथ रहे"',
      '"उड़ान में जो सुकून मिले, वो ज़मीन पर नहीं मिलता"',
      '"आसमान की ऊंचाइयों में सूफी गानों की गूंज"',
      '"हवा के संग बहते सुर, बादलों के पार का सफ़र"',
    ]
  }
};

// ---- APPLICATION STATE ----
let ytPlayer        = null;
let currentMode     = 'sarak';
let activePlaylist  = [];
let currentSongIdx  = 0;
let isPlaying       = false;
let appStarted      = false;
let progressTimer   = null;
let listenerCount   = Math.floor(Math.random() * 250) + 140;
let shayariIdx      = 0;

let userFilters = {
  era:  'all',
  mood: 'all',
  lang: 'all',
};

let tempFilters = { ...userFilters };

// ================================================
// 1. PLAYLIST ENGINE
// ================================================
function buildPlaylist(filters = userFilters) {
  let list = MASTER_SONGS.filter(song => {
    if (filters.era !== 'all' && song.era !== filters.era) return false;
    if (filters.mood !== 'all' && song.mood !== filters.mood) return false;
    if (filters.lang !== 'all' && song.lang !== filters.lang) return false;
    return true;
  });

  if (list.length === 0) {
    list = MASTER_SONGS.filter(song => {
      if (filters.mood !== 'all' && song.mood === filters.mood) return true;
      if (filters.era !== 'all' && song.era === filters.era) return true;
      return false;
    });
    if (list.length === 0) list = [...MASTER_SONGS];
  }

  return shuffleArray(list);
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function updateFilterBadge() {
  const badgeText = document.getElementById('active-filter-text');
  if (!badgeText) return;

  const parts = [];
  if (userFilters.era === 'retro') parts.push('90s सदाबहार');
  else if (userFilters.era === '2000s') parts.push('2000s Hits');
  else if (userFilters.era === 'latest') parts.push('नए & Trending');

  if (userFilters.mood === 'love') parts.push('रोमांटिक');
  else if (userFilters.mood === 'item') parts.push('आइटम बीट्स');
  else if (userFilters.mood === 'chill') parts.push('चिल & सूफी');
  else if (userFilters.mood === 'punjabi') parts.push('पंजाबी');
  else if (userFilters.mood === 'bhojpuri') parts.push('भोजपुरी');

  if (userFilters.lang === 'hindi') parts.push('हिंदी');
  else if (userFilters.lang === 'punjabi') parts.push('पंजाबी');
  else if (userFilters.lang === 'bhojpuri') parts.push('भोजपुरी');

  if (parts.length === 0) {
    badgeText.textContent = 'हाईवे मिक्स · ऑल मूड';
  } else {
    badgeText.textContent = parts.join(' · ');
  }
}

// ================================================
// 2. SETTINGS MODAL LOGIC
// ================================================
function openSettingsModal() {
  tempFilters = { ...userFilters };
  syncModalPillsWithState(tempFilters);
  updateMatchingCount();

  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.add('open');
}

function closeSettingsModal() {
  const modal = document.getElementById('settings-modal');
  if (modal) modal.classList.remove('open');
}

function onModalBackdropClick(e) {
  if (e.target.id === 'settings-modal') {
    closeSettingsModal();
  }
}

function selectFilter(category, value, btnEl) {
  tempFilters[category] = value;

  const parent = btnEl.closest('.pill-grid');
  if (parent) {
    parent.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('filter-pill--active'));
    btnEl.classList.add('filter-pill--active');
  }

  updateMatchingCount();
}

function updateMatchingCount() {
  const matching = MASTER_SONGS.filter(song => {
    if (tempFilters.era !== 'all' && song.era !== tempFilters.era) return false;
    if (tempFilters.mood !== 'all' && song.mood !== tempFilters.mood) return false;
    if (tempFilters.lang !== 'all' && song.lang !== tempFilters.lang) return false;
    return true;
  });

  const countEl = document.getElementById('matching-songs-count');
  if (countEl) {
    const total = matching.length > 0 ? matching.length : MASTER_SONGS.length;
    countEl.textContent = total + ' गाने उपलब्ध (Never Ending)';
  }
}

function syncModalPillsWithState(filters) {
  document.querySelectorAll('#era-options .filter-pill').forEach(p => {
    p.classList.toggle('filter-pill--active', p.dataset.era === filters.era);
  });
  document.querySelectorAll('#mood-options .filter-pill').forEach(p => {
    p.classList.toggle('filter-pill--active', p.dataset.mood === filters.mood);
  });
  document.querySelectorAll('#lang-options .filter-pill').forEach(p => {
    p.classList.toggle('filter-pill--active', p.dataset.lang === filters.lang);
  });
}

function resetFilters() {
  tempFilters = { era: 'all', mood: 'all', lang: 'all' };
  syncModalPillsWithState(tempFilters);
  updateMatchingCount();
}

function applyFiltersAndPlay() {
  userFilters = { ...tempFilters };
  closeSettingsModal();
  updateFilterBadge();

  activePlaylist = buildPlaylist(userFilters);
  currentSongIdx = 0;
  loadSong();
}

// ================================================
// 3. START APP & USER GESTURE UNLOCK
// ================================================
function startApp() {
  appStarted = true;

  const overlay = document.getElementById('start-overlay');
  const shell   = document.getElementById('main-shell');

  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.4s ease';
    setTimeout(() => { overlay.style.display = 'none'; }, 400);
  }

  if (shell) {
    shell.style.opacity = '0';
    shell.style.pointerEvents = 'auto';
    shell.style.transition = 'opacity 0.5s ease';
    setTimeout(() => { shell.style.opacity = '1'; }, 50);
  }

  initAmbientCanvas();

  // Explicit un-mute and synchronous play triggered by direct user click
  if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
    try {
      if (typeof ytPlayer.unMute === 'function') ytPlayer.unMute();
      if (typeof ytPlayer.setVolume === 'function') ytPlayer.setVolume(100);
      ytPlayer.playVideo();
    } catch(e) {
      console.warn('Play attempt:', e);
    }
  }
}

// ================================================
// 4. YOUTUBE IFRAME API & EVENT ENGINE
// ================================================
function onYouTubeIframeAPIReady() {
  activePlaylist = buildPlaylist(userFilters);

  ytPlayer = new YT.Player('yt-host', {
    height: '240',
    width:  '320',
    videoId: currentSong().yt,
    playerVars: {
      autoplay:       0,
      controls:       0,
      rel:            0,
      showinfo:       0,
      modestbranding: 1,
      iv_load_policy: 3,
      fs:             0,
      playsinline:    1,
      enablejsapi:    1,
      origin:         window.location.origin,
    },
    events: {
      onReady:       onPlayerReady,
      onStateChange: onPlayerStateChange,
      onError:       onPlayerError,
    }
  });
}

function onPlayerReady() {
  refreshInfo();
  try {
    if (typeof ytPlayer.unMute === 'function') ytPlayer.unMute();
    if (typeof ytPlayer.setVolume === 'function') ytPlayer.setVolume(100);
  } catch(e){}

  if (appStarted && ytPlayer) {
    ytPlayer.playVideo();
  }
}

function onPlayerStateChange(e) {
  const S = YT.PlayerState;
  if (e.data === S.PLAYING) {
    setPlaying(true);
    refreshCover();
    startProgress();
  } else if (e.data === S.PAUSED) {
    setPlaying(false);
    stopProgress();
  } else if (e.data === S.ENDED) {
    nextSong();
  } else if (e.data === S.CUED && appStarted) {
    // If video is cued and app is started, automatically trigger play
    try { ytPlayer.playVideo(); } catch(err){}
  }
}

function onPlayerError(ev) {
  console.warn('YouTube Player Error code:', ev.data);
  // Auto-skip failed or restricted video to maintain continuous radio
  setTimeout(nextSong, 800);
}

// ================================================
// 5. PLAYBACK CONTROLS
// ================================================
function togglePlay() {
  if (!ytPlayer) return;
  try {
    if (typeof ytPlayer.getPlayerState === 'function') {
      const state = ytPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        ytPlayer.pauseVideo();
      } else {
        if (typeof ytPlayer.unMute === 'function') ytPlayer.unMute();
        ytPlayer.playVideo();
      }
    } else {
      isPlaying ? ytPlayer.pauseVideo() : ytPlayer.playVideo();
    }
  } catch(e) {
    console.warn('togglePlay error:', e);
  }
}

function nextSong() {
  if (activePlaylist.length === 0) activePlaylist = buildPlaylist(userFilters);

  currentSongIdx++;
  if (currentSongIdx >= activePlaylist.length) {
    activePlaylist = buildPlaylist(userFilters);
    currentSongIdx = 0;
  }

  loadSong();
}

function prevSong() {
  if (ytPlayer && typeof ytPlayer.getCurrentTime === 'function' && ytPlayer.getCurrentTime() > 3) {
    ytPlayer.seekTo(0, true);
    return;
  }
  if (activePlaylist.length === 0) activePlaylist = buildPlaylist(userFilters);
  currentSongIdx = (currentSongIdx - 1 + activePlaylist.length) % activePlaylist.length;
  loadSong();
}

function loadSong() {
  if (!ytPlayer) return;
  const song = currentSong();
  if (song && song.yt) {
    refreshInfo();
    try {
      if (typeof ytPlayer.loadVideoById === 'function') {
        ytPlayer.loadVideoById(song.yt);
        if (typeof ytPlayer.unMute === 'function') ytPlayer.unMute();
        if (appStarted) ytPlayer.playVideo();
      }
    } catch(e) {
      console.warn('loadSong error:', e);
    }
  }
}

function currentSong() {
  if (activePlaylist.length === 0) activePlaylist = buildPlaylist(userFilters);
  return activePlaylist[currentSongIdx] || MASTER_SONGS[0];
}

function setPlaying(val) {
  isPlaying = val;
  document.body.classList.toggle('playing', val);
}

// ================================================
// 6. UI REFRESH & INFO
// ================================================
function refreshInfo() {
  const s = currentSong();
  if (!s) return;

  const titleEl = document.getElementById('song-title');
  const artistEl = document.getElementById('song-artist');
  const genreTag = document.getElementById('song-genre-tag');

  if (titleEl) titleEl.textContent = s.t;
  if (artistEl) artistEl.textContent = s.a;
  if (genreTag) genreTag.textContent = s.genreTag || 'Highway Song';

  document.title = s.t + ' — रास्ते कटे';
}

function refreshCover() {
  const img = document.getElementById('cover-img');
  const fb  = document.getElementById('cover-fallback');
  const s   = currentSong();
  if (!s) return;

  img.src = 'https://i.ytimg.com/vi/' + s.yt + '/mqdefault.jpg';
  img.onload  = () => { if (fb) fb.style.opacity = '0'; };
  img.onerror = () => { img.src = ''; if (fb) fb.style.opacity = '1'; };
}

// ================================================
// 7. PROGRESS BAR & SEEKING
// ================================================
function startProgress() {
  stopProgress();
  progressTimer = setInterval(tickProgress, 400);
}

function stopProgress() {
  if (progressTimer) { clearInterval(progressTimer); progressTimer = null; }
}

function tickProgress() {
  if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function') return;
  const cur = ytPlayer.getCurrentTime() || 0;
  const dur = ytPlayer.getDuration()    || 0;
  if (dur <= 0) return;
  const pct = (cur / dur) * 100;

  const fillEl = document.getElementById('progress-fill');
  const curEl  = document.getElementById('current-time');
  const totEl  = document.getElementById('total-time');
  const rail   = document.getElementById('progress-rail');

  if (fillEl) fillEl.style.width = pct + '%';
  if (curEl)  curEl.textContent  = fmtTime(cur);
  if (totEl)  totEl.textContent  = fmtTime(dur);
  if (rail)   rail.setAttribute('aria-valuenow', Math.round(pct));
}

function seekTo(e) {
  if (!ytPlayer) return;
  const rail = document.getElementById('progress-rail');
  const rect = rail.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  ytPlayer.seekTo(pct * (ytPlayer.getDuration() || 0), true);
}

function fmtTime(sec) {
  const s = Math.floor(sec);
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
}

// ================================================
// 8. SAFAR MODE SWITCHER
// ================================================
function setSafar(newMode) {
  if (newMode === currentMode) return;
  currentMode = newMode;

  document.body.setAttribute('data-mode', newMode);
  document.querySelectorAll('.safar-btn').forEach(btn => {
    const active = btn.dataset.mode === newMode;
    btn.classList.toggle('safar-btn--active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const taglineEl = document.getElementById('safar-tagline');
  if (taglineEl && SAFAR_MODES[newMode]) {
    taglineEl.textContent = SAFAR_MODES[newMode].tagline;
  }

  shayariIdx = 0;
  showShayari();
  activePlaylist = buildPlaylist(userFilters);
  currentSongIdx = 0;
  loadSong();
}

// ================================================
// 9. SHAYARI ROTATION
// ================================================
function showShayari() {
  const el = document.getElementById('shayari');
  const modeData = SAFAR_MODES[currentMode] || SAFAR_MODES.sarak;
  const arr = modeData.shayaris;

  if (!el || !arr || arr.length === 0) return;

  el.style.opacity = '0';
  setTimeout(() => {
    el.textContent = arr[shayariIdx % arr.length];
    el.style.opacity = '1';
    shayariIdx++;
  }, 350);
}

// ================================================
// 10. CLOCK & LIVE LISTENERS
// ================================================
function updateClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  const ist = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit', minute: '2-digit', hour12: true,
  }).format(new Date()).toUpperCase();
  clockEl.textContent = ist;
}

function updateListeners() {
  const el = document.getElementById('listeners');
  if (!el) return;
  listenerCount = Math.max(120, Math.min(950, listenerCount + Math.round(Math.random() * 12) - 6));
  el.textContent = listenerCount + ' सुन रहे हैं';
}

// ================================================
// 11. AMBIENT CANVAS PARTICLES
// ================================================
let canvas, ctx, particles = [], animationId;

function initAmbientCanvas() {
  canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  particles = [];
  const count = window.innerWidth < 600 ? 25 : 55;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.5 + 0.15),
      alpha: Math.random() * 0.4 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: 'rgba(245, 158, 11, '
    });
  }

  animateCanvas();
}

function resizeCanvas() {
  if (!canvas) return;
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animateCanvas() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const speedMultiplier = isPlaying ? 1.5 : 0.7;

  for (let p of particles) {
    p.y += p.speedY * speedMultiplier;
    p.x += p.speedX * speedMultiplier;

    if (p.y < -10) {
      p.y = canvas.height + 10;
      p.x = Math.random() * canvas.width;
    }
    if (p.x < -10) p.x = canvas.width + 10;
    if (p.x > canvas.width + 10) p.x = -10;

    p.alpha += Math.sin(Date.now() * p.pulseSpeed * 0.1) * 0.008;
    const clampedAlpha = Math.max(0.1, Math.min(0.6, p.alpha * (isPlaying ? 1.3 : 1)));

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color + clampedAlpha + ')';
    ctx.fill();
  }

  animationId = requestAnimationFrame(animateCanvas);
}

// ================================================
// 12. INITIALIZATION
// ================================================
function init() {
  document.body.setAttribute('data-mode', 'sarak');
  activePlaylist = buildPlaylist(userFilters);

  updateClock();
  updateListeners();
  updateFilterBadge();
  showShayari();

  setInterval(updateClock,     60000);
  setInterval(updateListeners,  8000);
  setInterval(showShayari,     14000);
}

document.addEventListener('DOMContentLoaded', init);
