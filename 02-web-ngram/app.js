const DEFAULT_TEXTS = [
  "bulut dosya yukle",
  "bulut dosya indir",
  "bulut klasor olustur",
  "dosya paylas",
  "dosya sil",
  "dosya ara",
  "depolama alani doldu",
  "kullanici giris yapti",
  "sifre ile kayit ol",
  "paylasim linki olustur",
  "klasor yeniden adlandir",
  "bos klasoru sil",
];

class CharNGramModel {
  constructor(n = 4) {
    if (n < 2) throw new Error("n en az 2 olmalidir.");
    this.n = n;
    this.table = new Map();
  }

  fit(texts) {
    this.table.clear();

    for (const rawText of texts) {
      const text = `${"~".repeat(this.n - 1)}${rawText.toLocaleLowerCase("tr-TR")}$`;

      for (let index = 0; index <= text.length - this.n; index += 1) {
        const context = text.slice(index, index + this.n - 1);
        const nextChar = text[index + this.n - 1];
        const counts = this.table.get(context) || new Map();
        counts.set(nextChar, (counts.get(nextChar) || 0) + 1);
        this.table.set(context, counts);
      }
    }
  }

  nextCharProbs(context) {
    const normalizedContext = context.toLocaleLowerCase("tr-TR").slice(-(this.n - 1));
    const counts = this.table.get(normalizedContext);
    if (!counts) return { context: normalizedContext, probabilities: [] };

    const total = Array.from(counts.values()).reduce((sum, count) => sum + count, 0);
    const probabilities = Array.from(counts.entries())
      .map(([char, count]) => ({ char, count, probability: count / total }))
      .sort((a, b) => b.probability - a.probability);

    return { context: normalizedContext, probabilities };
  }

  sampleNext(context, temperature = 1) {
    const { probabilities } = this.nextCharProbs(context);
    if (!probabilities.length) return "?";

    const weights = probabilities.map((item) => item.probability ** (1 / temperature));
    const total = weights.reduce((sum, weight) => sum + weight, 0);
    let threshold = Math.random();

    for (let index = 0; index < probabilities.length; index += 1) {
      threshold -= weights[index] / total;
      if (threshold <= 0) return probabilities[index].char;
    }

    return probabilities.at(-1).char;
  }

  generate(seed, maxLen = 80, temperature = 1) {
    let output = seed.toLocaleLowerCase("tr-TR");

    for (let index = 0; index < maxLen; index += 1) {
      const nextChar = this.sampleNext(output, temperature);
      if (nextChar === "$" || nextChar === "?") break;
      output += nextChar;
    }

    return output;
  }
}

const els = {
  trainingText: document.querySelector("#trainingText"),
  resetButton: document.querySelector("#resetButton"),
  trainButton: document.querySelector("#trainButton"),
  seedInput: document.querySelector("#seedInput"),
  nInput: document.querySelector("#nInput"),
  maxLenInput: document.querySelector("#maxLenInput"),
  temperatureInput: document.querySelector("#temperatureInput"),
  temperatureValue: document.querySelector("#temperatureValue"),
  generateButton: document.querySelector("#generateButton"),
  explainButton: document.querySelector("#explainButton"),
  generatedOutput: document.querySelector("#generatedOutput"),
  probabilityTable: document.querySelector("#probabilityTable"),
  contextLabel: document.querySelector("#contextLabel"),
  modelSummary: document.querySelector("#modelSummary"),
};

let model = new CharNGramModel(Number(els.nInput.value));

els.trainingText.value = DEFAULT_TEXTS.join("\n");
trainModel();

els.resetButton.addEventListener("click", () => {
  els.trainingText.value = DEFAULT_TEXTS.join("\n");
  trainModel();
});

els.trainButton.addEventListener("click", trainModel);
els.generateButton.addEventListener("click", generateText);
els.explainButton.addEventListener("click", explainContext);
els.temperatureInput.addEventListener("input", () => {
  els.temperatureValue.textContent = Number(els.temperatureInput.value).toFixed(1);
});

function trainModel() {
  const n = Number(els.nInput.value);
  const texts = getTrainingTexts();
  model = new CharNGramModel(n);
  model.fit(texts);
  els.modelSummary.textContent = `${texts.length} örnek, n=${n}`;
  explainContext();
}

function generateText() {
  const seed = els.seedInput.value.trim();
  if (!seed) {
    els.generatedOutput.textContent = "Önce başlangıç metni gir.";
    return;
  }

  const maxLen = Number(els.maxLenInput.value);
  const temperature = Number(els.temperatureInput.value);
  els.generatedOutput.textContent = model.generate(seed, maxLen, temperature);
  explainContext();
}

function explainContext() {
  const seed = els.seedInput.value.trim();
  const { context, probabilities } = model.nextCharProbs(seed);
  els.contextLabel.textContent = context ? `"${context}"` : "context yok";

  if (!probabilities.length) {
    els.probabilityTable.innerHTML = `<p class="hint">Bu context eğitim verisinde yok.</p>`;
    return;
  }

  els.probabilityTable.innerHTML = probabilities.map(probabilityRowTemplate).join("");
}

function probabilityRowTemplate(item) {
  const label = item.char === " " ? "space" : item.char === "$" ? "end" : item.char;
  const percent = Math.round(item.probability * 100);

  return `
    <div class="probability-row">
      <span class="char-cell">${escapeHtml(label)}</span>
      <span class="bar" aria-hidden="true"><span style="width: ${percent}%"></span></span>
      <span class="probability">${percent}%</span>
    </div>
  `;
}

function getTrainingTexts() {
  return els.trainingText.value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[char];
  });
}
