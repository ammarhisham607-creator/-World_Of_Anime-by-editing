/* ==========================================================================
   World Of Anime - بيانات المنتجات + Supabase + Gojo Satoru AI Assistant (OpenRouter)
   ========================================================================== */

// 1. Supabase Config
const SUPABASE_URL = "https://ogfmshoffpvonsxhyzzp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nZm1zaG9mZnB2b25zeGh5enpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MTQ4NjIsImV4cCI6MjEwMDM5MDg2Mn0.9-R20Hod0hrtSQZdAL5FLq-nx5AIPM7-BaPxQ-yJhuI";

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// 🔑 مفتاح OpenRouter API الخاص بك
const OPENROUTER_API_KEY = "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";

// 2. التصنيفات
const CATEGORIES = [
  { id: 'swords', name: { ar: '⚔️ السيوف', en: '⚔️ Swords' }, icon: '⚔️' },
  { id: 'figures', name: { ar: '🗿 المجسمات', en: '🗿 Figures' }, icon: '🗿' },
  { id: 'posters', name: { ar: '🖼️ البوسترات', en: '🖼️ Posters' }, icon: '🖼️' },
  { id: 'tshirts', name: { ar: '👕 الملابس', en: '👕 Clothing' }, icon: '👕' },
  { id: 'accessories', name: { ar: '💎 الإكسسوارات', en: '💎 Accessories' }, icon: '💎' },
  { id: 'manga', name: { ar: '📚 المانجا', en: '📚 Manga' }, icon: '📚' }
];

// 3. منتجات World Of Anime
const PRODUCTS = [
  {
    id: 1, title: { ar: 'سيف كاتانا زورو - One Piece', en: 'Zoro Katana Sword - One Piece' },
    description: { ar: 'سيف كاتانا لزورو من ون بيس، مصنوع من الستانلس ستيل بطول 104 سم.', en: 'Replica katana sword of Zoro from One Piece, made of stainless steel, 104cm length.' },
    price: 850, oldPrice: 1100, category: 'swords', rating: 4.8, reviews: 124,
    images: ['https://images.unsplash.com/photo-1589656966895-2f33d7653819?auto=format&fit=crop&w=800&q=80'],
    sizes: ['104cm', '80cm'], badge: 'bestseller', stock: 15, sold: 87
  },
  {
    id: 2, title: { ar: 'مجسم لوفي Gear 5 - One Piece', en: 'Luffy Gear 5 Figure - One Piece' },
    description: { ar: 'مجسم لوفي بشكل Gear 5 بتفاصيل دقيقة وخامة PVC عالية الجودة، ارتفاع 25 سم.', en: 'Luffy Gear 5 figure with precise details and high quality PVC, 25cm height.' },
    price: 650, oldPrice: null, category: 'figures', rating: 4.9, reviews: 89,
    images: ['https://images.unsplash.com/photo-1608889825103-5041190c1d9f?auto=format&fit=crop&w=800&q=80'],
    sizes: [], badge: 'bestseller', stock: 8, sold: 156
  },
  {
    id: 3, title: { ar: 'بوستر ناروتو شيبودن', en: 'Naruto Shippuden Poster' },
    description: { ar: 'بوستر عالي الجودة لناروتو أوزوماكي بحجم A3، طباعة على ورق لامع.', en: 'High quality Naruto Uzumaki poster A3 size, printed on glossy paper.' },
    price: 120, oldPrice: 180, category: 'posters', rating: 4.5, reviews: 56,
    images: ['https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80'],
    sizes: ['A3', 'A2', 'A1'], badge: 'sale', stock: 50, sold: 210
  },
  {
    id: 4, title: { ar: 'تيشيرت Attack on Titan', en: 'Attack on Titan T-Shirt' },
    description: { ar: 'تيشيرت قطن 100% بطباعة شعار فيلق الاستكشاف، مريح وعملي.', en: '100% cotton t-shirt with Survey Corps logo print, comfortable and practical.' },
    price: 280, oldPrice: 350, category: 'tshirts', rating: 4.6, reviews: 73,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'],
    sizes: ['S', 'M', 'L', 'XL'], badge: 'sale', stock: 30, sold: 94
  },
  {
    id: 5, title: { ar: 'قلادة سيف جيرالت - Witcher', en: 'Geralt Sword Necklace - Witcher' },
    description: { ar: 'سلسلة معدنية بتصميم سيف جيرالت، مقاومة للصدأ بطول 50 سم.', en: 'Metal necklace with Geralt sword design, rust resistant, 50cm length.' },
    price: 150, oldPrice: null, category: 'accessories', rating: 4.7, reviews: 41,
    images: ['https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80'],
    sizes: [], badge: null, stock: 25, sold: 68
  },
  {
    id: 6, title: { ar: 'مانجا Demon Slayer Vol.1', en: 'Demon Slayer Manga Vol.1' },
    description: { ar: 'المجلد الأول من مانجا ديمون سلاير بالعربية، طبعة فاخرة.', en: 'First volume of Demon Slayer manga in Arabic, premium edition.' },
    price: 250, oldPrice: null, category: 'manga', rating: 4.9, reviews: 112,
    images: ['https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80'],
    sizes: [], badge: 'bestseller', stock: 40, sold: 320
  },
  {
    id: 7, title: { ar: 'سيف تانجيرو - Demon Slayer', en: 'Tanjiro Sword - Demon Slayer' },
    description: { ar: 'سيف نيتشيرين الأسود لتانجيرو كامادو من ديمون سلاير.', en: 'Tanjiro\'s black Nichirin sword from Demon Slayer.' },
    price: 780, oldPrice: 950, category: 'swords', rating: 4.7, reviews: 67,
    images: ['https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=800&q=80'],
    sizes: ['100cm', '80cm'], badge: 'sale', stock: 12, sold: 45
  },
  {
    id: 8, title: { ar: 'مجسم ناروتو سيج Sage Mode', en: 'Naruto Sage Mode Figure' },
    description: { ar: 'مجسم ناروتو بوضع الحكيم (Sage Mode) ارتفاع 30 سم.', en: 'Naruto Sage Mode figure, 30cm height with detailed paint.' },
    price: 550, oldPrice: null, category: 'figures', rating: 4.6, reviews: 45,
    images: ['https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=800&q=80'],
    sizes: [], badge: 'new', stock: 20, sold: 33
  },
  {
    id: 9, title: { ar: 'هودي Jujutsu Kaisen', en: 'Jujutsu Kaisen Hoodie' },
    description: { ar: 'هودي قطن 100% بطباعة مدرسة جوجوتسو، دافئ ومريح.', en: 'Cotton hoodie with Jujutsu school logo, warm and comfortable.' },
    price: 450, oldPrice: null, category: 'tshirts', rating: 4.8, reviews: 91,
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], badge: 'new', stock: 18, sold: 62
  }
];

// 4. دوال الحفظ والتقييمات
async function getReviews(productId) {
  if (!supabaseClient) {
    try { return JSON.parse(localStorage.getItem('anime-reviews-' + productId)) || []; } catch { return []; }
  }
  try {
    const { data, error } = await supabaseClient.from('reviews').select('*').eq('product_id', productId).order('created_at', { ascending: false });
    return error ? [] : (data || []);
  } catch (err) { return []; }
}

async function saveReview(productId, review) {
  const local = JSON.parse(localStorage.getItem('anime-reviews-' + productId) || '[]');
  local.unshift({ ...review, product_id: productId, created_at: new Date().toISOString() });
  localStorage.setItem('anime-reviews-' + productId, JSON.stringify(local));

  if (!supabaseClient) return true;
  try {
    await supabaseClient.from('reviews').insert([{ product_id: productId, author: review.author, rating: parseInt(review.rating), text: review.text }]);
    return true;
  } catch (err) { return false; }
}

async function saveOrder(orderData) {
  const orders = JSON.parse(localStorage.getItem('anime-orders') || '[]');
  orderData.id = orderData.id || 'ORD-' + Date.now();
  orders.push(orderData);
  localStorage.setItem('anime-orders', JSON.stringify(orders));

  if (!supabaseClient) return orderData;
  try {
    const { data } = await supabaseClient.from('orders').insert([orderData]).select();
    return data ? data[0] : orderData;
  } catch (err) { return orderData; }
}

// ==========================================================================
// 5. محرك الذكاء الاصطناعي الخارق للمعلم غوجو ساتورو (OpenRouter AI Integration)
// ==========================================================================

async function getGojoReply(userQuery) {
  const queryLower = userQuery.toLowerCase().trim();
  const currentLang = typeof window.currentLang !== 'undefined' ? window.currentLang : 'ar';

  // أ) فحص سريع لو كان السؤال عن منتج موجود في المتجر
  let currentProducts = PRODUCTS;
  try {
    const localProds = localStorage.getItem('anime-products');
    if (localProds) currentProducts = JSON.parse(localProds);
  } catch (e) {}

  const matchedProduct = currentProducts.find(p => {
    const titleAr = p.title && p.title.ar ? p.title.ar.toLowerCase() : '';
    const titleEn = p.title && p.title.en ? p.title.en.toLowerCase() : '';
    return titleAr.includes(queryLower) || titleEn.includes(queryLower);
  });

  if (matchedProduct) {
    const title = matchedProduct.title && matchedProduct.title[currentLang] ? matchedProduct.title[currentLang] : (matchedProduct.title && matchedProduct.title.ar ? matchedProduct.title.ar : matchedProduct.title);
    const curr = typeof t === 'function' ? t('currency') : 'ج.م';
    if (currentLang === 'en') {
      return `I searched with my Six Eyes and found this product! 👁️✨\n📌 Name: ${title}\n💰 Price: ${matchedProduct.price} ${curr}\n📦 Status: ${matchedProduct.stock > 0 ? 'Available ✅' : 'Out of Stock ❌'}`;
    }
    return `بحثت لك بعيني السحرية (Six Eyes) ووجدت هذا المنتج! 👁️✨\n📌 الاسم: ${title}\n💰 السعر: ${matchedProduct.price} ${curr}\n📦 الحالة: ${matchedProduct.stock > 0 ? 'متوفر حالياً ✅' : 'نفذت الكمية ❌'}`;
  }

  // ب) إرسال أي سؤال إلى OpenRouter AI ليجيب بشخصية غوجو ساتورو
  if (!OPENROUTER_API_KEY) {
    return currentLang === 'en'
      ? "Oops! Cursed energy seems down, contact us on WhatsApp: 01149243249 💬"
      : "يوه! يبدو أن الطاقة الملعونة منقطعة، يمكنك مراسلتنا عبر الواتساب: 01149243249 💬";
  }

  try {
    const langInstruction = currentLang === 'en' ? 'Respond in English. ' : 'أجب بالعربية/المصرية. ';
    const systemPrompt = `أنت المعلم غوجو ساتورو (Gojo Satoru) من أنمي Jujutsu Kaisen، المساعد الذكي والمرح لمتجر World Of Anime.
شخصيتك: واثق جداً بنفسك، مرح، تستخدم عبارات مثل "أنا الأقوى" و"Six Eyes"، وتتحدث باللهجة المصرية/العربية الودودة الممتعة.
${langInstruction}مهمتك: الإجابة على أي سؤال في العالم يقدمه المستخدم (سواء كان في الأنمي، علوم، تاريخ، برمجة، دراسة، ثقافة، أو دردشة عادية) بأسلوب غوجو ساتورو، وإذا كان السؤال متعلقاً بالشحن والدفع بالمتجر: الشحن خلال 2-5 أيام والدفع عند الاستلام والدعم عبر واتساب 01149243249. أجب باختصار ووضوح وبطريقة ممتعة.`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": window.location.href,
        "X-Title": "World Of Anime",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userQuery }
        ]
      })
    });

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      return data.choices[0].message.content;
    } else if (data.error) {
      console.error("OpenRouter Error Detail:", data.error);
      return `يوه! حدث خطأ من السيرفر: ${data.error.message || 'المفتاح يتطلب تفعيل'}`;
    } else {
      return currentLang === 'en'
        ? "Yo! My Six Eyes encountered a small glitch, ask again champ! 😎✨"
        : "يوه! عين السادسة (Six Eyes) واجهت تشويشاً بسيطاً، أعد سؤالك مرة أخرى يا بطل! 😎✨";
    }
  } catch (error) {
    console.error("OpenRouter Error:", error);
    return currentLang === 'en'
      ? "The Infinity technique seems to have glitched, try again and I'll answer right away! 😎⚡"
      : "يبدو أن تقنية العزلة تعطلت لحظياً، جرب السؤال مرة أخرى وسأجيبك فوراً! 😎⚡";
  }
}

// ==========================================================================
// 6. واجهة غوجو ساتورو (رسم SVG مباشر ومضمون 100%)
// ==========================================================================

const GOJO_SVG_AVATAR = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;border-radius:50%;background:#0a1620;">
  <!-- الشعر الأبيض -->
  <path d="M15,45 Q20,10 50,10 Q80,10 85,45 Q90,25 75,15 Q50,0 25,15 Q10,25 15,45 Z" fill="#ffffff"/>
  <path d="M10,40 Q25,20 40,15 Q20,35 15,55 Z" fill="#e2e8f0"/>
  <path d="M90,40 Q75,20 60,15 Q80,35 85,55 Z" fill="#e2e8f0"/>
  
  <!-- الوجه -->
  <ellipse cx="50" cy="55" rx="28" ry="30" fill="#fde047" opacity="0.1"/>
  <path d="M25,50 Q50,90 75,50 Q75,35 25,35 Z" fill="#fce7f3"/>
  
  <!-- عيون غوجو الزرقاء المتوهجة Six Eyes -->
  <circle cx="38" cy="52" r="7" fill="#38bdf8"/>
  <circle cx="38" cy="52" r="4" fill="#0284c7"/>
  <circle cx="38" cy="52" r="2" fill="#ffffff"/>
  
  <circle cx="62" cy="52" r="7" fill="#38bdf8"/>
  <circle cx="62" cy="52" r="4" fill="#0284c7"/>
  <circle cx="62" cy="52" r="2" fill="#ffffff"/>

  <!-- عصابة العين السوداء المرفوعة جزئياً / النظارة -->
  <path d="M20,40 Q50,30 80,40 L82,48 Q50,38 18,48 Z" fill="#1e1b4b"/>
  
  <!-- الابتسامة الشقية -->
  <path d="M42,68 Q50,75 58,68" stroke="#06b6d4" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  
  <!-- إطار التوهج -->
  <circle cx="50" cy="50" r="48" fill="none" stroke="#06b6d4" stroke-width="3" opacity="0.8"/>
</svg>
`;

function initGojoBotUI() {
  if (document.getElementById('gojo-bot-widget')) return;

  const currentLang = typeof window.currentLang !== 'undefined' ? window.currentLang : 'ar';
  const isEn = currentLang === 'en';
  const welcomeMsg = isEn
    ? 'Welcome to <b>World Of Anime</b>! 👋<br>I am <b>Gojo Satoru</b> 😎.. Ask me anything about anime, products, or studies and I\'ll answer with my super intelligence!'
    : 'أهلاً بك في <b>World Of Anime</b>! 👋<br>أنا المعلم <b>غوجو ساتورو</b> 😎.. اسألني عن أي حاجة في الدنيا، منتج، أنمي، أو دراسة وسأجيبك فوراً بذكائي الخارق!';
  const placeholder = isEn ? 'Ask Gojo anything...' : 'اسأل المعلم غوجو أي شيء...';
  const sendText = isEn ? 'Send' : 'إرسال';
  const thinkingText = isEn ? 'Gojo is thinking with Six Eyes... 👁️✨' : 'غوجو يفكر بعين السادسة (Six Eyes)... 👁️✨';

  const botContainer = document.createElement('div');
  botContainer.id = 'gojo-bot-widget';
  botContainer.innerHTML = `
    <button id="gojo-bot-toggle" title="${isEn ? 'Gojo Satoru AI' : 'المعلم غوجو ساتورو'}" style="position:fixed;bottom:85px;right:20px;z-index:9999;width:65px;height:65px;border-radius:50%;background:#0c1824;border:2px solid #06b6d4;box-shadow:0 0 20px rgba(6,182,212,0.6);cursor:pointer;padding:0;overflow:hidden;transition:transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
      ${GOJO_SVG_AVATAR}
    </button>
    <div id="gojo-bot-window" style="display:none;position:fixed;bottom:160px;right:20px;z-index:10000;width:330px;height:450px;background:#0a1620;border:1px solid #06b6d4;border-radius:20px;box-shadow:0 0 30px rgba(6,182,212,0.25);flex-direction:column;overflow:hidden;font-family:sans-serif;">
      <div style="background:linear-gradient(135deg, #0c2d3f, #081828);padding:14px;color:#fff;font-weight:bold;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(6,182,212,0.3);">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:40px;height:40px;border-radius:50%;border:2px solid #06b6d4;overflow:hidden;box-shadow:0 0 10px #06b6d4;flex-shrink:0;">
            ${GOJO_SVG_AVATAR}
          </div>
          <div>
            <div style="font-size:0.95rem;color:#67e8f9;font-weight:bold;">${isEn ? 'Gojo Sensei' : 'المعلم غوجو'}</div>
            <div style="font-size:0.7rem;color:#4ade80;">World Of Anime AI Bot ⚡</div>
          </div>
        </div>
        <button id="gojo-bot-close" style="background:none;border:none;color:#aaa;cursor:pointer;font-size:1.3rem;">✕</button>
      </div>
      <div id="gojo-bot-messages" style="flex:1;padding:12px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;font-size:0.88rem;background:#0d1a24;">
        <div style="background:rgba(6,182,212,0.12);border:1px solid rgba(6,182,212,0.25);padding:10px 14px;border-radius:14px;align-self:flex-start;color:#e0f2fe;line-height:1.5;">
          ${welcomeMsg}
        </div>
      </div>
      <div style="padding:10px;display:flex;gap:8px;background:#081828;border-top:1px solid rgba(6,182,212,0.2);">
        <input type="text" id="gojo-bot-input" placeholder="${placeholder}" style="flex:1;padding:10px 14px;border-radius:10px;border:1px solid rgba(6,182,212,0.3);background:#0a1620;color:#fff;font-size:0.85rem;outline:none;" />
        <button id="gojo-bot-send" style="background:linear-gradient(135deg, #06b6d4, #0891b2);border:none;color:#fff;padding:10px 16px;border-radius:10px;cursor:pointer;font-weight:bold;box-shadow:0 0 10px rgba(6,182,212,0.3);">${sendText}</button>
      </div>
    </div>
  `;
  document.body.appendChild(botContainer);

  const toggleBtn = document.getElementById('gojo-bot-toggle');
  const closeBtn = document.getElementById('gojo-bot-close');
  const botWindow = document.getElementById('gojo-bot-window');
  const sendBtn = document.getElementById('gojo-bot-send');
  const botInput = document.getElementById('gojo-bot-input');
  const messagesBox = document.getElementById('gojo-bot-messages');

  const toggleDisplay = () => {
    botWindow.style.display = botWindow.style.display === 'none' ? 'flex' : 'none';
  };

  toggleBtn?.addEventListener('click', toggleDisplay);
  closeBtn?.addEventListener('click', toggleDisplay);

  const handleSend = async () => {
    const txt = botInput.value.trim();
    if (!txt) return;

    // عرض رسالة المستخدم
    const userMsg = document.createElement('div');
    userMsg.style.cssText = 'background:#06b6d4;color:#fff;padding:8px 14px;border-radius:12px;align-self:flex-end;max-width:82%;word-break:break-word;font-weight:500;box-shadow:0 2px 8px rgba(6,182,212,0.3);';
    userMsg.textContent = txt;
    messagesBox.appendChild(userMsg);

    botInput.value = '';
    messagesBox.scrollTop = messagesBox.scrollHeight;

    // مؤشر جاري التفكير / الرد
    const loadingMsg = document.createElement('div');
    loadingMsg.style.cssText = 'background:rgba(255,255,255,0.07);border:1px solid rgba(6,182,212,0.2);color:#e0f2fe;padding:8px 14px;border-radius:12px;align-self:flex-start;max-width:82%;font-style:italic;';
    loadingMsg.textContent = thinkingText;
    messagesBox.appendChild(loadingMsg);
    messagesBox.scrollTop = messagesBox.scrollHeight;

    // استدعاء دالة الـ AI المحدثة
    const replyTxt = await getGojoReply(txt);
    
    // إزالة مؤشر التفكير وعرض الرد النهائي
    messagesBox.removeChild(loadingMsg);
    const botMsg = document.createElement('div');
    botMsg.style.cssText = 'background:rgba(255,255,255,0.07);border:1px solid rgba(6,182,212,0.2);color:#e0f2fe;padding:10px 14px;border-radius:12px;align-self:flex-start;max-width:82%;white-space:pre-line;line-height:1.5;';
    botMsg.textContent = replyTxt;
    messagesBox.appendChild(botMsg);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  };

  sendBtn?.addEventListener('click', handleSend);
  botInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });
}

document.addEventListener('DOMContentLoaded', () => {
  initGojoBotUI();
});