const translations = {
  tr: {
    brandSub: "Yaparak yapay zeka öğrenimi",
    navRoadmap: "Yol Haritası",
    navStudio: "Ders Studio",
    navResearch: "Güncel Takip",
    heroEyebrow: "TR/ENG çift dilli ders platformu",
    heroTitle: "Yapay zekayı okuyarak değil, model kurarak öğren.",
    heroText:
      "Lisans ve lisansüstü düzey için tasarlanan bu platform, her hafta çalışan bir mini proje, deney defteri, paper okuma görevi ve portfolyo çıktısı üretir.",
    startButton: "12 haftalık derse başla",
    copyPrompt: "Başlangıç promptunu kopyala",
    copyPromptShort: "Promptu kopyala",
    courseIdentity: "Ders hüviyeti",
    weeksLabel: "hafta",
    projectsLabel: "mini proje",
    portfolioLabel: "portfolyo çıktısı",
    languageLabel: "dil desteği",
    progressLabel: "Tamamlanan görev",
    roadmapEyebrow: "Müfredat",
    roadmapTitle: "12 haftalık yaparak öğrenme yolu",
    studioEyebrow: "Ders studio",
    studioTitle: "Her hafta teori, kod, deney ve yansıtma üretir.",
    promptTitle: "Ders tasarım promptu",
    promptText: "Bu prompt ile bir haftayı daha derin modüle çevirebilir, proje görevlerini genişletebiliriz.",
    notebookTitle: "Öğrenci deney defteri",
    hypothesisLabel: "Hipotez / Hypothesis",
    observationLabel: "Gözlem / Observation",
    saveNotebook: "Defteri kaydet",
    localSave: "Yerel tarayıcıda saklanır",
    saved: "Kaydedildi",
    copied: "Kopyalandı",
    researchEyebrow: "Güncel gelişmeler",
    researchTitle: "Ders bitince araştırma takibi yapabilecek düzeye gel.",
    backPortal: "Ana portala dön",
    levelUndergrad: "Lisans",
    levelGrad: "Lisansüstü",
    goals: "Öğrenme hedefleri",
    concepts: "Temel kavramlar",
    miniProject: "Mini proje",
    codingTask: "Kodlama görevi",
    experimentTask: "Deney görevi",
    reflection: "Yansıtma sorusu",
    currentTask: "Güncel takip görevi",
    portfolio: "Portfolyo çıktısı",
    markDone: "Bu haftayı tamamlandı işaretle",
    done: "Tamamlandı",
    week: "Hafta",
  },
  en: {
    brandSub: "Learning AI by building",
    navRoadmap: "Roadmap",
    navStudio: "Course Studio",
    navResearch: "Research Radar",
    heroEyebrow: "TR/ENG bilingual course platform",
    heroTitle: "Learn AI by building models, not by only reading.",
    heroText:
      "Designed for undergraduate and graduate depth, this platform produces a working mini project, experiment notebook, paper reading task, and portfolio artifact every week.",
    startButton: "Start the 12-week course",
    copyPrompt: "Copy starter prompt",
    copyPromptShort: "Copy prompt",
    courseIdentity: "Course identity",
    weeksLabel: "weeks",
    projectsLabel: "mini projects",
    portfolioLabel: "portfolio artifacts",
    languageLabel: "language support",
    progressLabel: "Completed tasks",
    roadmapEyebrow: "Curriculum",
    roadmapTitle: "A 12-week learning-by-doing path",
    studioEyebrow: "Course studio",
    studioTitle: "Each week produces theory, code, experiments, and reflection.",
    promptTitle: "Course design prompt",
    promptText: "Use this prompt to expand a selected week into a deeper module and richer project task.",
    notebookTitle: "Student experiment notebook",
    hypothesisLabel: "Hypothesis",
    observationLabel: "Observation",
    saveNotebook: "Save notebook",
    localSave: "Stored in local browser",
    saved: "Saved",
    copied: "Copied",
    researchEyebrow: "Current AI tracking",
    researchTitle: "Finish the course ready to follow modern AI research.",
    backPortal: "Back to portal",
    levelUndergrad: "Undergraduate",
    levelGrad: "Graduate",
    goals: "Learning goals",
    concepts: "Key concepts",
    miniProject: "Mini project",
    codingTask: "Coding task",
    experimentTask: "Experiment task",
    reflection: "Reflection question",
    currentTask: "Current AI tracking task",
    portfolio: "Portfolio artifact",
    markDone: "Mark this week complete",
    done: "Completed",
    week: "Week",
  },
};

const weeks = [
  {
    tr: {
      title: "AI okuryazarlığı ve öğrenme kontratı",
      summary: "AI alanını tarih, matematik, kod ve ürün bakışıyla haritalandır.",
      goals: ["AI, ML, DL, LLM ve agent kavramlarını ayır", "Deney defteri ve portfolyo akışını kur"],
      concepts: ["AI taxonomy", "learning by doing", "experiment log", "reproducibility"],
      miniProject: "Kendi AI öğrenme panonu ve deney defteri şablonunu oluştur.",
      coding: "Basit bir JSON tabanlı öğrenme günlüğü kaydet ve tarayıcıda listele.",
      experiment: "Aynı soruyu üç farklı modele sor; cevapları doğruluk, açıklık ve kaynak ihtiyacı açısından karşılaştır.",
      reflection: "Bir AI çıktısını ne zaman güvenilir sayarsın?",
      current: "Bir AI haberini model, veri, benchmark ve risk başlıklarıyla analiz et.",
      portfolio: "TR/ENG AI learning contract",
    },
    en: {
      title: "AI literacy and learning contract",
      summary: "Map AI through history, mathematics, code, and product thinking.",
      goals: ["Distinguish AI, ML, DL, LLM, and agent systems", "Set up an experiment notebook and portfolio flow"],
      concepts: ["AI taxonomy", "learning by doing", "experiment log", "reproducibility"],
      miniProject: "Create your AI learning dashboard and experiment notebook template.",
      coding: "Save a simple JSON-based learning log and render it in the browser.",
      experiment: "Ask the same question to three models; compare accuracy, clarity, and source needs.",
      reflection: "When should an AI output be considered trustworthy?",
      current: "Analyze one AI news item through model, data, benchmark, and risk lenses.",
      portfolio: "TR/ENG AI learning contract",
    },
  },
  {
    tr: {
      title: "Sembolik AI ve kural tabanlı sistemler",
      summary: "Açıklanabilir ama kırılgan sistemlerin nasıl çalıştığını gör.",
      goals: ["Kural motoru mantığını kur", "Sembolik sistemlerin sınırlarını test et"],
      concepts: ["rules", "facts", "inference", "explainability"],
      miniProject: "Ders öneren küçük bir expert system geliştir.",
      coding: "If/else yerine veri tabanlı kurallar ve açıklama izi üret.",
      experiment: "Kurallara uyan ve uymayan 10 öğrenci profiliyle sistemi zorla.",
      reflection: "Açıklanabilirlik her zaman yüksek kalite anlamına gelir mi?",
      current: "AI regulation tartışmalarında açıklanabilirlik beklentisini özetle.",
      portfolio: "Explainable rule system demo",
    },
    en: {
      title: "Symbolic AI and rule-based systems",
      summary: "See how explainable but brittle systems work.",
      goals: ["Build rule engine logic", "Test the limits of symbolic systems"],
      concepts: ["rules", "facts", "inference", "explainability"],
      miniProject: "Build a small expert system that recommends a learning path.",
      coding: "Replace if/else chains with data-driven rules and an explanation trace.",
      experiment: "Stress-test the system with 10 matching and non-matching learner profiles.",
      reflection: "Does explainability always imply high quality?",
      current: "Summarize explainability expectations in AI regulation debates.",
      portfolio: "Explainable rule system demo",
    },
  },
  {
    tr: {
      title: "N-gram ve next-token prediction",
      summary: "LLM fikrinin en küçük istatistiksel benzerini kur.",
      goals: ["Bağlam penceresi ve olasılık dağılımını anla", "Temperature etkisini gözle"],
      concepts: ["n-gram", "context window", "probability", "temperature"],
      miniProject: "Tarayıcıda çalışan karakter seviyesi n-gram metin üretici.",
      coding: "Eğitim metnini düzenle, n değerini değiştir, olasılık tablosunu görselleştir.",
      experiment: "n=2, n=4, n=6 ve farklı temperature değerlerini karşılaştır.",
      reflection: "Bir model anlamadan nasıl ikna edici metin üretebilir?",
      current: "Modern LLM'lerde next-token prediction tartışmasını kısa notla açıkla.",
      portfolio: "N-gram web predictor",
    },
    en: {
      title: "N-grams and next-token prediction",
      summary: "Build the smallest statistical cousin of the LLM idea.",
      goals: ["Understand context windows and probability distributions", "Observe the impact of temperature"],
      concepts: ["n-gram", "context window", "probability", "temperature"],
      miniProject: "A browser-based character-level n-gram text generator.",
      coding: "Edit training text, vary n, and visualize the probability table.",
      experiment: "Compare n=2, n=4, n=6 with different temperature values.",
      reflection: "How can a model produce convincing text without understanding?",
      current: "Write a short note on next-token prediction in modern LLMs.",
      portfolio: "N-gram web predictor",
    },
  },
  {
    tr: {
      title: "Makine öğrenmesi temelleri",
      summary: "Veriden karar sınırı öğrenen modelleri kur ve değerlendir.",
      goals: ["Train/test ayrımını uygula", "Overfitting ve metrikleri yorumla"],
      concepts: ["features", "labels", "loss", "accuracy", "overfitting"],
      miniProject: "Küçük bir sınıflandırma modeli ve metrik paneli.",
      coding: "Veriyi böl, modeli eğit, accuracy ve confusion matrix üret.",
      experiment: "Özellik sayısı ve veri boyutu değişince performansı gözle.",
      reflection: "Yüksek accuracy hangi durumlarda yanıltıcıdır?",
      current: "Bir benchmark sonucunda veri seti ve metrik bilgisini bul.",
      portfolio: "ML classifier report",
    },
    en: {
      title: "Machine learning foundations",
      summary: "Build and evaluate models that learn decision boundaries from data.",
      goals: ["Apply train/test splits", "Interpret overfitting and metrics"],
      concepts: ["features", "labels", "loss", "accuracy", "overfitting"],
      miniProject: "A small classifier with a metrics panel.",
      coding: "Split data, train a model, and produce accuracy plus confusion matrix.",
      experiment: "Observe performance as feature count and dataset size change.",
      reflection: "When can high accuracy be misleading?",
      current: "Find dataset and metric details in one benchmark result.",
      portfolio: "ML classifier report",
    },
  },
  {
    tr: {
      title: "Neural network ve gradient descent",
      summary: "Ağırlıkların veriyle nasıl güncellendiğini deneyerek öğren.",
      goals: ["Forward pass ve loss hesapla", "Gradient descent döngüsünü açıkla"],
      concepts: ["weights", "activation", "gradient", "backpropagation"],
      miniProject: "Küçük neural network görselleştirici.",
      coding: "Basit MLP eğit, loss eğrisini çiz, öğrenme oranını değiştir.",
      experiment: "Learning rate çok düşük ve çok yüksek olduğunda ne olur?",
      reflection: "Model öğreniyor mu, ezberliyor mu nasıl anlarsın?",
      current: "Bir model kartında training setup bilgisini incele.",
      portfolio: "Neural training notebook",
    },
    en: {
      title: "Neural networks and gradient descent",
      summary: "Learn how weights are updated from data through experiments.",
      goals: ["Compute forward pass and loss", "Explain the gradient descent loop"],
      concepts: ["weights", "activation", "gradient", "backpropagation"],
      miniProject: "A small neural network visualizer.",
      coding: "Train a simple MLP, plot loss, and vary learning rate.",
      experiment: "What happens when learning rate is too low or too high?",
      reflection: "How do you tell learning from memorization?",
      current: "Inspect training setup details in one model card.",
      portfolio: "Neural training notebook",
    },
  },
  {
    tr: {
      title: "Dil modelleri ve embedding",
      summary: "Metni sayıya çevirme, temsil öğrenme ve benzerlik fikrini kur.",
      goals: ["Tokenization ve embedding'i ilişkilendir", "Cosine similarity ile arama yap"],
      concepts: ["token", "embedding", "semantic similarity", "vector space"],
      miniProject: "Küçük semantic search uygulaması.",
      coding: "Cümleleri vektörleştir, sorguya en yakın sonuçları sırala.",
      experiment: "Kelime seçimi değişince arama sonuçları nasıl değişiyor?",
      reflection: "Embedding anlamı tamamen yakalayabilir mi?",
      current: "Bir embedding modelinin boyut, veri ve kullanım alanını özetle.",
      portfolio: "Semantic search demo",
    },
    en: {
      title: "Language models and embeddings",
      summary: "Build the idea of turning text into numbers, representation learning, and similarity.",
      goals: ["Connect tokenization and embeddings", "Search with cosine similarity"],
      concepts: ["token", "embedding", "semantic similarity", "vector space"],
      miniProject: "A small semantic search application.",
      coding: "Vectorize sentences and rank nearest results for a query.",
      experiment: "How do results change when wording changes?",
      reflection: "Can embeddings fully capture meaning?",
      current: "Summarize one embedding model's dimension, data, and use case.",
      portfolio: "Semantic search demo",
    },
  },
  {
    tr: {
      title: "Transformer ve attention",
      summary: "Modern LLM mimarisinin temel mekanizmasını küçük ölçekte kur.",
      goals: ["Self-attention matrisini yorumla", "Causal mask fikrini açıkla"],
      concepts: ["query", "key", "value", "attention", "causal mask"],
      miniProject: "Attention heatmap gösteren minimal Transformer lab.",
      coding: "Tokenlar arası attention ağırlıklarını görselleştir.",
      experiment: "Prompt sırası değişince attention örüntüsü nasıl değişiyor?",
      reflection: "Attention açıklama mıdır, yoksa sadece bir sinyal midir?",
      current: "Yeni bir LLM duyurusunda context length ve benchmark bilgisini çıkar.",
      portfolio: "Transformer attention lab",
    },
    en: {
      title: "Transformers and attention",
      summary: "Build the core mechanism behind modern LLM architecture at small scale.",
      goals: ["Interpret self-attention matrices", "Explain causal masking"],
      concepts: ["query", "key", "value", "attention", "causal mask"],
      miniProject: "A minimal Transformer lab with an attention heatmap.",
      coding: "Visualize attention weights between tokens.",
      experiment: "How does attention change when prompt order changes?",
      reflection: "Is attention an explanation or only a signal?",
      current: "Extract context length and benchmark information from a new LLM release.",
      portfolio: "Transformer attention lab",
    },
  },
  {
    tr: {
      title: "Prompt engineering ve değerlendirme",
      summary: "Prompt'u tasarım nesnesi gibi ele al ve çıktıyı ölç.",
      goals: ["Prompt varyantları üret", "Rubrik tabanlı değerlendirme yap"],
      concepts: ["instruction", "few-shot", "chain-of-thought", "rubric", "eval"],
      miniProject: "Prompt karşılaştırma ve skor kartı aracı.",
      coding: "Aynı görev için 3 prompt varyantı ve rubrik puanı kaydet.",
      experiment: "Örnek eklemek cevabı hangi ölçütlerde iyileştiriyor?",
      reflection: "İyi prompt ile iyi sistem tasarımı arasındaki fark nedir?",
      current: "Bir eval benchmark'ının neyi ölçtüğünü incele.",
      portfolio: "Prompt evaluation scorecard",
    },
    en: {
      title: "Prompt engineering and evaluation",
      summary: "Treat prompts as design objects and measure outputs.",
      goals: ["Create prompt variants", "Evaluate with a rubric"],
      concepts: ["instruction", "few-shot", "chain-of-thought", "rubric", "eval"],
      miniProject: "A prompt comparison and scorecard tool.",
      coding: "Save 3 prompt variants and rubric scores for the same task.",
      experiment: "Which criteria improve when examples are added?",
      reflection: "What is the difference between a good prompt and good system design?",
      current: "Inspect what one eval benchmark actually measures.",
      portfolio: "Prompt evaluation scorecard",
    },
  },
  {
    tr: {
      title: "RAG ve bilgiyle desteklenen üretim",
      summary: "Model cevabını dış kaynaklarla temellendirmeyi öğren.",
      goals: ["Chunking ve retrieval akışını kur", "Kaynaklı cevap üret"],
      concepts: ["RAG", "chunking", "retriever", "citation", "grounding"],
      miniProject: "Kendi ders notların üzerinde çalışan mini RAG.",
      coding: "Belgeleri parçalara ayır, arama yap, kaynaklı cevap oluştur.",
      experiment: "Chunk boyutu cevabın doğruluğunu nasıl etkiliyor?",
      reflection: "RAG halüsinasyonu tamamen çözer mi?",
      current: "Bir RAG sisteminde kullanılan retrieval metriğini araştır.",
      portfolio: "Grounded Q&A demo",
    },
    en: {
      title: "RAG and grounded generation",
      summary: "Learn to ground model answers with external sources.",
      goals: ["Build chunking and retrieval flow", "Generate answers with sources"],
      concepts: ["RAG", "chunking", "retriever", "citation", "grounding"],
      miniProject: "A mini RAG system over your course notes.",
      coding: "Chunk documents, search them, and compose sourced answers.",
      experiment: "How does chunk size affect answer quality?",
      reflection: "Does RAG fully solve hallucination?",
      current: "Research one retrieval metric used in RAG systems.",
      portfolio: "Grounded Q&A demo",
    },
  },
  {
    tr: {
      title: "Agent mimarileri ve tool use",
      summary: "Modelin plan yapıp araç kullanmasını güvenli şekilde tasarla.",
      goals: ["Agent döngüsünü açıkla", "Tool call sınırlarını belirle"],
      concepts: ["agent loop", "tools", "memory", "planning", "guardrails"],
      miniProject: "Araç kullanan küçük araştırma asistanı simülatörü.",
      coding: "Planla, araç seç, sonucu değerlendir adımlarını kayıt altına al.",
      experiment: "Yanlış araç veya eksik bağlam verince davranış nasıl değişiyor?",
      reflection: "Bir agent'a hangi işleri vermemeliyiz?",
      current: "Yeni bir agent framework'ünün mimari diyagramını özetle.",
      portfolio: "Tool-using agent simulator",
    },
    en: {
      title: "Agent architectures and tool use",
      summary: "Design safe systems where models plan and use tools.",
      goals: ["Explain the agent loop", "Define tool-call boundaries"],
      concepts: ["agent loop", "tools", "memory", "planning", "guardrails"],
      miniProject: "A small research assistant simulator with tool use.",
      coding: "Log plan, tool choice, and result evaluation steps.",
      experiment: "How does behavior change with the wrong tool or missing context?",
      reflection: "What work should we not delegate to an agent?",
      current: "Summarize the architecture diagram of a new agent framework.",
      portfolio: "Tool-using agent simulator",
    },
  },
  {
    tr: {
      title: "AI güvenliği, etik ve ürünleştirme",
      summary: "Riskleri, veri gizliliğini ve insan denetimini ürün kararı olarak ele al.",
      goals: ["Risk matrisi oluştur", "Human-in-the-loop tasarla"],
      concepts: ["bias", "privacy", "safety", "red teaming", "human oversight"],
      miniProject: "AI özellik risk değerlendirme paneli.",
      coding: "Bir kullanım senaryosu için risk, etki ve önlem tablosu üret.",
      experiment: "Kötü niyetli ve belirsiz promptlarla sistemi test et.",
      reflection: "Bir AI ürününde kabul edilebilir hata oranı nasıl belirlenir?",
      current: "Bir AI güvenlik raporundan 3 uygulanabilir ders çıkar.",
      portfolio: "AI risk and safety brief",
    },
    en: {
      title: "AI safety, ethics, and productization",
      summary: "Treat risk, privacy, and human oversight as product decisions.",
      goals: ["Create a risk matrix", "Design human-in-the-loop controls"],
      concepts: ["bias", "privacy", "safety", "red teaming", "human oversight"],
      miniProject: "An AI feature risk assessment panel.",
      coding: "Produce a risk, impact, and mitigation table for one use case.",
      experiment: "Test the system with malicious and ambiguous prompts.",
      reflection: "How should acceptable error rates be set for AI products?",
      current: "Extract 3 actionable lessons from an AI safety report.",
      portfolio: "AI risk and safety brief",
    },
  },
  {
    tr: {
      title: "Final proje ve araştırma okuryazarlığı",
      summary: "Özgün bir AI ürününü teknik rapor, demo ve takip planıyla sun.",
      goals: ["Uçtan uca AI proje üret", "Paper, benchmark ve model kartı okuyarak güncelleme planı yaz"],
      concepts: ["capstone", "benchmark", "model card", "research literacy", "deployment"],
      miniProject: "Final AI projesi: demo, rapor, rubrik ve yol haritası.",
      coding: "Seçilen projeyi çalışan prototipe dönüştür ve README hazırla.",
      experiment: "Başarısız örnekleri topla, hata türlerini sınıflandır, iyileştirme planı çıkar.",
      reflection: "Bu projeyi 6 ay sonra güncel tutmak için hangi kaynakları takip edersin?",
      current: "Son 30 günde çıkan bir AI gelişmesini final projene etkisiyle değerlendir.",
      portfolio: "TR/ENG final AI project portfolio",
    },
    en: {
      title: "Final project and research literacy",
      summary: "Present an original AI product with a technical report, demo, and tracking plan.",
      goals: ["Build an end-to-end AI project", "Read papers, benchmarks, and model cards to write an update plan"],
      concepts: ["capstone", "benchmark", "model card", "research literacy", "deployment"],
      miniProject: "Final AI project: demo, report, rubric, and roadmap.",
      coding: "Turn the selected project into a working prototype and prepare a README.",
      experiment: "Collect failures, classify error types, and produce an improvement plan.",
      reflection: "Which sources would you follow to keep this project current in 6 months?",
      current: "Evaluate one AI development from the last 30 days and its effect on your final project.",
      portfolio: "TR/ENG final AI project portfolio",
    },
  },
];

const researchItems = [
  {
    tr: ["Papers", "Abstract, yöntem, veri, sonuç ve sınırlılık ayrımını yap."],
    en: ["Papers", "Separate abstract, method, data, results, and limitations."],
  },
  {
    tr: ["Benchmarks", "Skorun neyi ölçtüğünü ve neyi ölçmediğini sorgula."],
    en: ["Benchmarks", "Question what the score measures and what it misses."],
  },
  {
    tr: ["Model kartları", "Veri, lisans, risk ve kullanım sınırlarını oku."],
    en: ["Model cards", "Read data, license, risk, and usage constraints."],
  },
  {
    tr: ["Ürün takibi", "Yeni modelleri maliyet, latency, güvenlik ve kaliteyle karşılaştır."],
    en: ["Product tracking", "Compare new models by cost, latency, safety, and quality."],
  },
];

const starterPrompt = {
  tr: `AI Evolution Lab için TR/ENG çift dilli, proje tabanlı bir yapay zeka dersi tasarla. Her hafta kısa teori, çalışan mini proje, kodlama görevi, deney görevi, yansıtma sorusu, güncel AI takip görevi ve portfolyo çıktısı içersin. Lisans ve lisansüstü derinliklerini ayrı belirt.`,
  en: `Design a TR/ENG bilingual, project-based AI course for AI Evolution Lab. Each week should include short theory, a working mini project, coding task, experiment task, reflection question, current AI tracking task, and portfolio artifact. Separate undergraduate and graduate depth.`,
};

const state = {
  lang: localStorage.getItem("ai-evolution-lang") || "tr",
  level: localStorage.getItem("ai-evolution-level") || "undergrad",
  selectedWeek: Number(localStorage.getItem("ai-evolution-week") || 0),
  done: JSON.parse(localStorage.getItem("ai-evolution-done") || "[]"),
};

const els = {
  langToggle: document.querySelector("#langToggle"),
  levelToggle: document.querySelector("#levelToggle"),
  courseLevel: document.querySelector("#courseLevel"),
  weekList: document.querySelector("#weekList"),
  weekDetail: document.querySelector("#weekDetail"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  promptOutput: document.querySelector("#promptOutput"),
  copyPromptButton: document.querySelector("#copyPromptButton"),
  copyStudioPrompt: document.querySelector("#copyStudioPrompt"),
  hypothesisInput: document.querySelector("#hypothesisInput"),
  observationInput: document.querySelector("#observationInput"),
  saveNotebookButton: document.querySelector("#saveNotebookButton"),
  saveState: document.querySelector("#saveState"),
  researchGrid: document.querySelector("#researchGrid"),
  toast: document.querySelector("#toast"),
};

render();
restoreNotebook();

els.langToggle.addEventListener("click", () => {
  state.lang = state.lang === "tr" ? "en" : "tr";
  localStorage.setItem("ai-evolution-lang", state.lang);
  render();
});

els.levelToggle.addEventListener("click", () => {
  state.level = state.level === "undergrad" ? "grad" : "undergrad";
  localStorage.setItem("ai-evolution-level", state.level);
  render();
});

els.copyPromptButton.addEventListener("click", copyPrompt);
els.copyStudioPrompt.addEventListener("click", copyPrompt);
els.saveNotebookButton.addEventListener("click", saveNotebook);

function render() {
  document.documentElement.lang = state.lang;
  renderTranslations();
  renderWeeks();
  renderWeekDetail();
  renderResearch();
  renderProgress();
  updatePrompt();
}

function renderTranslations() {
  const dict = translations[state.lang];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = dict[node.dataset.i18n] || node.textContent;
  });
  els.langToggle.textContent = state.lang === "tr" ? "EN" : "TR";
  els.levelToggle.textContent = state.level === "undergrad" ? dict.levelUndergrad : dict.levelGrad;
  els.courseLevel.textContent = els.levelToggle.textContent;
  [els.hypothesisInput, els.observationInput].forEach((input) => {
    input.placeholder = input.dataset[`placeholder${state.lang === "tr" ? "Tr" : "En"}`];
  });
}

function renderWeeks() {
  const dict = translations[state.lang];
  els.weekList.innerHTML = weeks
    .map((week, index) => {
      const item = week[state.lang];
      const active = index === state.selectedWeek ? " is-active" : "";
      const done = state.done.includes(index) ? " is-done" : "";
      return `
        <button class="week-card${active}${done}" type="button" data-week="${index}">
          <span>${dict.week} ${index + 1}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(item.summary)}</small>
        </button>
      `;
    })
    .join("");

  els.weekList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedWeek = Number(button.dataset.week);
      localStorage.setItem("ai-evolution-week", String(state.selectedWeek));
      renderWeeks();
      renderWeekDetail();
      updatePrompt();
    });
  });
}

function renderWeekDetail() {
  const dict = translations[state.lang];
  const item = weeks[state.selectedWeek][state.lang];
  const depth =
    state.level === "undergrad"
      ? state.lang === "tr"
        ? "Odak: sezgi, çalışan demo, temel metrik ve kısa rapor."
        : "Focus: intuition, working demo, basic metrics, and short report."
      : state.lang === "tr"
        ? "Odak: matematiksel gerekçe, ablation, kaynak okuma ve teknik rapor."
        : "Focus: mathematical reasoning, ablation, source reading, and technical report.";

  els.weekDetail.innerHTML = `
    <div class="detail-head">
      <span>${dict.week} ${state.selectedWeek + 1}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
    </div>
    ${detailBlock(dict.goals, item.goals)}
    ${detailBlock(dict.concepts, item.concepts)}
    ${detailLine(dict.miniProject, item.miniProject)}
    ${detailLine(dict.codingTask, item.coding)}
    ${detailLine(dict.experimentTask, item.experiment)}
    ${detailLine(dict.reflection, item.reflection)}
    ${detailLine(dict.currentTask, item.current)}
    ${detailLine(dict.portfolio, item.portfolio)}
    <div class="level-note">${escapeHtml(depth)}</div>
    <button class="primary-button full-button" id="doneButton" type="button">
      ${state.done.includes(state.selectedWeek) ? dict.done : dict.markDone}
    </button>
  `;

  document.querySelector("#doneButton").addEventListener("click", toggleDone);
}

function detailBlock(title, rows) {
  return `
    <section class="detail-block">
      <h4>${title}</h4>
      <ul>${rows.map((row) => `<li>${escapeHtml(row)}</li>`).join("")}</ul>
    </section>
  `;
}

function detailLine(title, text) {
  return `
    <section class="detail-block">
      <h4>${title}</h4>
      <p>${escapeHtml(text)}</p>
    </section>
  `;
}

function renderResearch() {
  els.researchGrid.innerHTML = researchItems
    .map((item) => {
      const [title, text] = item[state.lang];
      return `
        <article class="research-card">
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(text)}</p>
        </article>
      `;
    })
    .join("");
}

function renderProgress() {
  const completed = state.done.length;
  els.progressText.textContent = `${completed}/12`;
  els.progressBar.style.width = `${Math.round((completed / weeks.length) * 100)}%`;
}

function updatePrompt() {
  const selected = weeks[state.selectedWeek][state.lang];
  els.promptOutput.value = `${starterPrompt[state.lang]}\n\nSelected week: ${state.selectedWeek + 1} - ${selected.title}\nMini project: ${selected.miniProject}\nLevel: ${state.level}`;
}

function toggleDone() {
  const set = new Set(state.done);
  if (set.has(state.selectedWeek)) {
    set.delete(state.selectedWeek);
  } else {
    set.add(state.selectedWeek);
  }
  state.done = Array.from(set).sort((a, b) => a - b);
  localStorage.setItem("ai-evolution-done", JSON.stringify(state.done));
  renderWeeks();
  renderWeekDetail();
  renderProgress();
}

async function copyPrompt() {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(els.promptOutput.value);
  } else {
    els.promptOutput.select();
    document.execCommand("copy");
  }
  showToast(translations[state.lang].copied);
}

function saveNotebook() {
  localStorage.setItem(
    "ai-evolution-notebook",
    JSON.stringify({
      hypothesis: els.hypothesisInput.value,
      observation: els.observationInput.value,
    }),
  );
  els.saveState.textContent = translations[state.lang].saved;
  showToast(translations[state.lang].saved);
  window.setTimeout(() => {
    els.saveState.textContent = translations[state.lang].localSave;
  }, 1600);
}

function restoreNotebook() {
  const saved = JSON.parse(localStorage.getItem("ai-evolution-notebook") || "{}");
  els.hypothesisInput.value = saved.hypothesis || "";
  els.observationInput.value = saved.observation || "";
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.setTimeout(() => els.toast.classList.remove("is-visible"), 1600);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[char];
  });
}
