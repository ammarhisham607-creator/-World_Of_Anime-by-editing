/* ==========================================================================
   World Of Anime - بيانات المنتجات + Supabase + Gojo Satoru AI Assistant (OpenRouter)
   ========================================================================== */

// 1. Supabase Config
const SUPABASE_URL = "https://homgxvtpelcivbvygyai.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvbWd4dnRwZWxjaXZidnlneWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4OTYwMTgsImV4cCI6MjEwMDQ3MjAxOH0.oXB2Q1qCWgzuNgJzhqBs0ZpuN6hoFXH0gRuuIWGjghY";

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
const PRODUCTS = [];

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
  const query = userQuery.toLowerCase().trim();
  const currentLang = (typeof window.currentLang !== 'undefined') ? window.currentLang : 'ar';

  // 1. إجابات سريعة ومباشرة محلياً (تشتغل حتى لو السيرفر واقف) ⚡
  if (query.includes('شحن') || query.includes('توصيل') || query.includes('shipping')) {
    return "التوصيل عندنا في **World Of Anime** بياخد من 2 لـ 5 أيام عمل فقط لجميع المحافظات! 🚚💨";
  }
  if (query.includes('دفع') || query.includes('payment') || query.includes('كاش')) {
    return "الدفع عند الاستلام بعد ما تعاين حاجتك وتتأكد إنها تمام! 💵✅";
  }
  if (query.includes('تواصل') || query.includes('واتس') || query.includes('رقم') || query.includes('whatsapp')) {
    return "تقدر تتواصل معانا فوراً عبر الواتساب على الرقم ده: **01149243249** 📱✨";
  }
  if (query.includes('مين') || query.includes('من انت') || query.includes('اسمك')) {
    return "أنا المعلم **غوجو ساتورو (Gojo Satoru)** 😎.. أقوى ساحر ومساعدك الشخصي في متجر World Of Anime!";
  }

  // 2. البحث في المنتجات محلياً
  if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
    let currentProducts = PRODUCTS;
    try {
      const localProds = localStorage.getItem('anime-products');
      if (localProds) currentProducts = JSON.parse(localProds);
    } catch (e) {}

    const matched = currentProducts.find(p => {
      const tAr = p.title && p.title.ar ? p.title.ar.toLowerCase() : '';
      const tEn = p.title && p.title.en ? p.title.en.toLowerCase() : '';
      return tAr.includes(query) || tEn.includes(query);
    });

    if (matched) {
      const title = matched.title && matched.title[currentLang] ? matched.title[currentLang] : (matched.title.ar || matched.title);
      const curr = (typeof t === 'function') ? t('currency') : 'ج.م';
      return `بحثت لك بعيني السحرية (Six Eyes) ووجدت هذا المنتج! 👁️✨\n📌 الاسم: ${title}\n💰 السعر: ${matched.price} ${curr}\n📦 الحالة: ${matched.stock > 0 ? 'متوفر حالياً ✅' : 'نفذت الكمية ❌'}`;
    }
  }

  // 3. الاتصال بالذكاء الاصطناعي كخيار أخير مع حماية كاملة
  const apiKey = (typeof OPENROUTER_API_KEY !== 'undefined') ? OPENROUTER_API_KEY : "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";

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
          { 
            role: "system", 
            content: "أنت المعلم غوجو ساتورو (Gojo Satoru) من أنمي Jujutsu Kaisen، المساعد الذكي لمتجر World Of Anime. أسلوبك مرح ومصرّي وواثق من نفسك. أجب باختصار." 
          },
          { role: "user", content: userQuery }
        ]
      })
    });

    if (!response.ok) throw new Error("Server response not ok");

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      return data.choices[0].message.content;
    }
  } catch (err) {
    console.warn("AI Fallback active:", err);
  }

  // رد حمايتي أخير ولطيف في حال تعثر السيرفر بدلاً من إظهار رسالة خطأ
  return "أهلاً بك يا بطل! أنا المعلم غوجو 😎.. لو بتسأل عن الشحن فهو من 2-5 أيام، والدفع عند الاستلام. تقدر كمان تتواصل معانا على الواتس: 01149243249 ⚡";
}

// ==========================================================================
// 6. واجهة غوجو ساتورو (رسم SVG مباشر ومضمون 100%)
// ==========================================================================

const GOJO_AVATAR = `<img src="The%20Boot%20Logo.png" alt="Gojo" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;

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
    <button id="gojo-bot-toggle" title="${isEn ? 'Gojo Satoru AI' : 'المعلم غوجو ساتورو'}" style="position:fixed;bottom:25px;right:20px;z-index:9999;width:70px;height:70px;border-radius:50%;background:#0c1824;border:3px solid #06b6d4;box-shadow:0 0 20px rgba(6,182,212,0.6);cursor:pointer;padding:0;overflow:hidden;transition:transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
      ${GOJO_AVATAR}
    </button>
    <div id="gojo-bot-window" style="display:none;position:fixed;bottom:105px;right:20px;z-index:10000;width:330px;height:450px;background:#0a1620;border:1px solid #06b6d4;border-radius:20px;box-shadow:0 0 30px rgba(6,182,212,0.25);flex-direction:column;overflow:hidden;font-family:sans-serif;">
      <div style="background:linear-gradient(135deg, #0c2d3f, #081828);padding:14px;color:#fff;font-weight:bold;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(6,182,212,0.3);">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:40px;height:40px;border-radius:50%;border:2px solid #06b6d4;overflow:hidden;box-shadow:0 0 10px #06b6d4;flex-shrink:0;">
            ${GOJO_AVATAR}
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