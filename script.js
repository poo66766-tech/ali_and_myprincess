/* ================================================================
   صندوق الذكريات — كل الأسماء والتفاصيل والمواد الشخصية في الأسفل.
   غيّري هذه القيم والأمثلة فقط؛ لا حاجة لتعديل HTML.
   استبدلي كل ما بين الأقواس بمعلوماتكما الحقيقية قبل مشاركة الموقع.
   ================================================================ */
const relationshipData = {
  names: {
    ali: "علي",
    amira: "أميرة",
    aliNickname: "لولي",
    amiraNickname: "أميرتي"
  },
  music: {
    // اختياري: ضعي ملفاً محلياً مثل "./assets/music/our-song.mp3".
    // لا يبدأ الصوت إلا بعد ضغط الزر.
    src: "./assets/music/Bahaa_Sultan.mp3"
  },
  opening: {
    lines: [
      "مش كل الحكايات بتبدأ بحكاية...",
      "بعض الحكايات بتبدأ بشخص.",
      "وأنا حكايتي بدأت بأميرة.",
      "من لولي ❤️"
    ]
  },
  intro: {
    lines: [
      "أهلاً بأميرتي...",
      "يمكن الموقع ده مجرد شوية صور وكلام بالنسبة لأي حد...",
      "بس بالنسبالي...",
      "ده جزء صغير من حكاية كبيرة.",
      "حكاية اسمها أميرة.",
      "ومن هنا بدأت حكايتنا."
    ]
  },
  storyStart: {
    title: "قبل ما نحكي",
    openingLine: "في حكايات بتبدأ من لحظة كبيرة… وحكايتنا ممكن تكون بدأت من تفصيلة صغيرة.",
    startDate: "[ضيفي التاريخ أو امسحيه]",
    firstMemory: "[اكتبي هنا أول ذكرى حقيقية تحبي تفتكريها]",
    prompt: "دي مساحتكم: اكتبي بداية الحكاية بطريقتكم."
  },
  timeline: [
    {
      date: "4/9/2026",
      title: "يوم شارع  اسكنددرية",
      description: "يوم الي خطفتي في قلبي اليوم الي عيني جت في عينك",
      note: "اليوم ده أنا بجد مش عارف إيه اللي حصل. كنت متضايق منك جدًا وأنا بزعق ليكي، وفجأة عيني جت في عينك، وحسيت إني روحت لعالم تاني… عالم كله ملاين ورد وفراشات. بجد حسيت إني شوفت طفلة بريئة قدامي، وكل الزعل اللي كان جوايا اختفى في لحظة. ❤️"
    },
    {
      date: "4/9/2026",
      title: "[يوم مختلف]",
      description: "مثال قابل للاستبدال — بدّليه بلحظة حقيقية تخصّكم.",
      note: "اكتبي هنا إيه اللي خلّى اليوم ده يفضل قريب من قلبكم."
    },
    {
      date: "[تاريخ تضيفوه]",
      title: "[حاجة صغيرة بتضحككم]",
      description: "مكان لذكرى حقيقية أو موقف بينكم.",
      note: "ممكن تكون جملة، مشوار، أو حتى سكوت مريح."
    },
    {
      date: "[تاريخ تضيفوه]",
      title: "[ذكرى لسه جاية]",
      description: "هنا مساحة للحاجة الحلوة اللي لسه مستنياكم.",
      note: "المهم إن الحكاية لسه بتتكتب."
    }
  ],
  messages: [
    { from: "ali", text: "اي اكتر ذكره جميلة تتذكرها في علاقتنا" },
    { from: "amira", text: "مش عارفة حاجة معينه بس حرفيا كل حاجة حلوه" },
    { from: "ali", text: "قولي حاجة عمرك ما هتنسيها كا ذكرة" },
    { from: "amira", text: `"لما كنت زعلان مني ولقيتك جيبلي حاجات حلوه 
سعتها انا اتفاجئت اوي 
ونفس الوقت حسيت احساس طفله باباها جيب ليها حاجات حلوه 
ممكن علشان محصلتش قابل كدا معرفش"` }
  ],
  photos: [
    { title: "هنا كانت اول صورة لينا مع بعض", date: "19/9/2026", caption: "اليوم دا كان مميز جدا لينا مع بعض لان اليوم دا هوا اليوم الي قولتلك في انا هتقدملك", symbol: "١", image: "./assets/images/first-day.jpg" },
    { title: "هنا كان اول مرة نسافر سوا", date: "3/10/2026", caption: "كان يوم جميل جدا تعبنا شوي الصبح بس كل يهون لاجل بنتي بس بجد كان يوم جميل ", symbol: "٢", image: "./assets/images/a_and__a.jpg" },
    { title: "هنا اكلنا مع بعض", date: "5/10/2026", caption: "هيا مش ول مرة ناكل مع بعض بس اول مرة نصور بس كان يوم جميل لانك كنتي معايا في", symbol: "٣", image: "./assets/images/a_and__a2.jpg" },
    { title: "هنا المكان بتعنا", date: "4/10/2026", caption: "المكان دا لينا ذكريات في كتيرة جدا وانتي معايا في واكيد المكان دا وانا قدام القمر دا لزم يكون معانا اتنين اندومي", symbol: "٤", image: "./assets/images/a_and__a3.jpg" }
  ],
  reasons: [
    "عشان طريقتك في إنك تخلي اليوم العادي أحنّ.",
    "عشان ضحكتك ليها مكانها الخاص في قلبي.",
    "علشان  بحبك وانتي طفلتي وخيلتي حياتي كلها ورد",
    "علشان انتي رخمة بس فيكي حنيت الدنيا بقلب ابيض",
    "عشان ببساطة… إنتِ أميرتي."
  ],
  milestones: [
    { date: "[تاريخ تضيفوه]", title: "[أول مرة]", detail: "مثال قابل للاستبدال — اكتبي هنا معنى اللحظة دي بالنسبة لكم." },
    { date: "[تاريخ تضيفوه]", title: "[حاجة عدّيتوها سوا]", detail: "مساحة لموقف حقيقي يعبّر عن قربكم." },
    { date: "[تاريخ تضيفوه]", title: "[حلم صغير]", detail: "اكتبي حاجة لسه نفسكم تعملوها مع بعض." }
  ],
  letter: {
    greeting: "يا أميرتي،",
    paragraphs: [
      "يمكن أنا مش دايمًا بعرف أقول كل اللي جوايا بالطريقة الصح...",
      "بس في حاجة أنا متأكد منها...",
      "إن وجودك في حياتي فرق معايا أكتر مما تتخيلي.",
      "ومهما حاولت أكتب، هفضل حاسس إن الكلام قليل عليكي."
    ],
    signature: "لولي"
  },
  secrets: {
    hint: "في نجمة صغيرة مستخبية هنا… اضغطي عليها تلات مرات.",
    message: "أميرتي لسه بتدوري؟ 😂 طيب بما إنك وصلتي هنا... لولي بيحبك ❤️",
    secondMessage: "في حاجات كتير ممكن تتكتب... بس وجودك لوحده كفاية."
  },
  final: {
    beats: [
      { type: "text", text: "وصلتي لآخر الحكاية..." },
      { type: "text", text: "بس الحقيقة؟" },
      { type: "text", text: "أنا مش شايف دي النهاية." },
      { type: "text", text: "أنا شايف إن دي مجرد بداية." },
      { type: "text", text: "لأن أجمل حاجة في حكايتنا..." },
      { type: "photo", photoIndex: 0 },
      { type: "text", text: "إن لسه في حاجات كتير مستنيين نعيشها سوا." },
      { type: "text", text: "بحبك يا أميرتي ❤️" },
      { type: "text", text: "من لولي." }
    ],
    signature: "وهفضل دايمًا ممتن إن حكايتي كان فيها أميرة زيك."
  }
};

const chapters = [
  {
    title: "من هنا تبدأ الحكاية",
    kicker: "١٠ فصول صغيرة، على مهل",
    lead: "مش لازم نعرف البداية بالظبط. كفاية إن كل طريق، مهما لفّ، وصلني ليكي.",
    type: "intro"
  },
  {
    title: relationshipData.storyStart.title,
    kicker: "الفصل الأول · البداية",
    lead: relationshipData.storyStart.openingLine,
    type: "start"
  },
  {
    title: "خيط من الذكريات",
    kicker: "الفصل التاني · على الطريق",
    lead: "مش بنفتكر كل الأيام… بنفتكر اللي ساب جوانا حاجة.",
    type: "timeline"
  },
  {
    title: "بين رسالة ورسالة",
    kicker: "الفصل التالت · كلامنا",
    lead: "مش كل الكلام بيتقال بصوت عالي. في كلام بيعيش في شاشة صغيرة… ويفضل كبير جوانا.",
    type: "chat"
  },
  {
    title: "صور لسه بتدفّي القلب",
    kicker: "الفصل الرابع · لحظات",
    lead: "دي مش صوركم لسه — دي أماكن فاضية مستنياكي تحطي فيها لحظاتكم الحقيقية.",
    type: "photos"
  },
  {
    title: "حاجات بحبها فيكي",
    kicker: "الفصل الخامس · واحدة واحدة",
    lead: "مش هقولهم كلهم مرة واحدة… الحلو يتاخد على مهل.",
    type: "reasons"
  },
  {
    title: "محطات لسه منوّرة",
    kicker: "الفصل السادس · علامات الطريق",
    lead: "كل علامة هنا مكان لشيء عديتوا بيه، أو شيء نفسكوا تعيشوه.",
    type: "milestones"
  },
  {
    title: "جوّه الظرف",
    kicker: "الفصل السابع · رسالة",
    lead: "في ورقة مستنياكي. افتحي الظرف لما تبقي جاهزة.",
    type: "letter"
  },
  {
    title: "حاجة صغيرة مستخبية",
    kicker: "الفصل التامن · سرّنا",
    lead: "مش كل حاجة في الحكاية بتطلب الانتباه… في حاجات بتحبّ تتلاقى.",
    type: "secret"
  },
  {
    title: "لسه في حكاية",
    kicker: "الفصل الأخير · مش النهاية",
    lead: "",
    type: "final"
  }
];

const story = document.getElementById("story");
const chapterRoot = document.getElementById("chapter");
const openButton = document.getElementById("openStory");
const opening = document.getElementById("opening");
const openingNarrative = document.getElementById("opening-title");
const openingBar = document.getElementById("openingBar");
const openingProgress = document.querySelector(".opening-progress");
const progressFill = document.getElementById("progressFill");
const progressTrack = document.querySelector(".progress-track");
const progressText = document.getElementById("progressText");
const photoDialog = document.getElementById("photoDialog");
const toast = document.getElementById("toast");
const audio = document.getElementById("optionalMusic");
let currentChapter = 0;
let typingTimer = null;
let toastTimer = null;
let chatIndex = 0;
let chatTyping = false;
let chatSecretRevealed = false;
let reasonIndex = 0;
let finalIndex = 0;
let lastFocusedElement = null;
let secretStarClicks = 0;
let hiddenHeartClicks = 0;
let musicSlowTimer = null;

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function persistPersonalization() {
  try {
    localStorage.setItem("loli-amira-story-data", JSON.stringify({
      storyStart: relationshipData.storyStart,
      timeline: relationshipData.timeline,
      messages: relationshipData.messages,
      photos: relationshipData.photos,
      reasons: relationshipData.reasons,
      milestones: relationshipData.milestones,
      letter: relationshipData.letter
    }));
  } catch (_) {
    // The story remains usable when browser storage is disabled.
  }
}

function restorePersonalization() {
  try {
    const saved = JSON.parse(localStorage.getItem("loli-amira-story-data") || "null");
    if (!saved) return;
    ["storyStart", "timeline", "messages", "photos", "reasons", "milestones", "letter"].forEach(key => {
      if (saved[key]) relationshipData[key] = saved[key];
    });
    chapters[1].title = relationshipData.storyStart.title;
    chapters[1].lead = relationshipData.storyStart.openingLine;
  } catch (_) {
    // Ignore stale or unavailable local storage.
  }
}

restorePersonalization();
document.title = `${relationshipData.names.aliNickname} و${relationshipData.names.amiraNickname} — حكاية خاصة`;
openingNarrative.textContent = relationshipData.opening.lines[0];
document.getElementById("headerAli").textContent = relationshipData.names.aliNickname;
document.getElementById("headerAmira").textContent = relationshipData.names.amiraNickname;
document.getElementById("wordmark").setAttribute("aria-label", `${relationshipData.names.aliNickname} و${relationshipData.names.amiraNickname}، بداية الحكاية`);
document.getElementById("footerNames").textContent = `${relationshipData.names.aliNickname} ♥ ${relationshipData.names.amiraNickname}`;

function localPhotoPath(path) {
  const value = String(path || "");
  return /^(?:\.\/)?assets\/images\/[\w -]+\.(?:png|jpe?g|webp|gif)$/i.test(value) ? value : "";
}

function arabicNumber(value) {
  return new Intl.NumberFormat("ar-EG", { useGrouping: false }).format(value);
}

function startCountdown() {
  const duration = 8;
  const startedAt = Date.now();
  let shownLine = 0;
  const tick = () => {
    const elapsed = (Date.now() - startedAt) / 1000;
    const remaining = Math.max(0, duration - elapsed);
    const lineIndex = Math.min(
      relationshipData.opening.lines.length - 1,
      Math.floor(elapsed / (duration / relationshipData.opening.lines.length))
    );
    if (lineIndex !== shownLine) {
      shownLine = lineIndex;
      openingNarrative.classList.add("is-changing");
      window.setTimeout(() => {
        openingNarrative.textContent = relationshipData.opening.lines[lineIndex];
        openingNarrative.classList.remove("is-changing");
      }, 180);
    }
    openingBar.style.width = `${Math.min(100, (elapsed / duration) * 100)}%`;
    openingProgress.setAttribute("aria-valuenow", String(Math.min(duration, Math.floor(elapsed))));
    if (remaining <= 0) {
      openButton.disabled = false;
      openButton.textContent = "ادخلي حكايتنا";
      document.getElementById("waitLabel").textContent = "خدي وقتك… الحكاية جاهزة";
      openButton.focus({ preventScroll: true });
      return;
    }
    window.setTimeout(tick, 100);
  };
  tick();
}

function controlsMarkup(canContinue = true, nextLabel = "كمّلي الحكاية") {
  if (currentChapter === chapters.length - 1) {
    return `<nav class="story-controls" aria-label="التنقل بين فصول الحكاية">
      <button class="back-button" type="button" data-action="back">رجوع للفصل اللي فات</button>
    </nav>`;
  }
  return `<nav class="story-controls" aria-label="التنقل بين فصول الحكاية">
    <button class="back-button" type="button" data-action="back" ${currentChapter === 0 ? "disabled" : ""}>رجوع</button>
    ${currentChapter < chapters.length - 1
      ? `<button class="primary-button" type="button" data-action="next" ${canContinue ? "" : "disabled"}>${escapeHTML(nextLabel)}</button>`
      : `<button class="quiet-button" type="button" data-action="restart">ارجعي لأول الحكاية</button>`}
  </nav>`;
}

function renderChapter() {
  window.clearTimeout(typingTimer);
  const config = chapters[currentChapter];
  window.clearInterval(musicSlowTimer);
  document.body.classList.toggle("final-mode", config.type === "final");
  if (config.type !== "final") audio.playbackRate = 1;
  if (config.type === "final" && !audio.paused) {
    musicSlowTimer = window.setInterval(() => {
      if (audio.playbackRate > 0.72) audio.playbackRate = Math.max(0.72, audio.playbackRate - 0.035);
      else window.clearInterval(musicSlowTimer);
    }, 450);
  }
  progressFill.style.width = `${((currentChapter + 1) / chapters.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentChapter + 1));
  progressText.textContent = `الفصل ${arabicNumber(currentChapter + 1)} من ${arabicNumber(chapters.length)}`;
  let body = "";

  if (config.type === "intro") {
    body = `<div class="intro-words" aria-live="polite">${relationshipData.intro.lines.map(line => `<p class="intro-line">${escapeHTML(line)}</p>`).join("")}</div>
      <div class="divider" aria-hidden="true">♥</div>
      <p class="soft-note">الفصول بتتفتح واحدة واحدة. كل زرار هياخدك لحتة جديدة، وإنتِ اللي بتختاري إمتى تكمّلي.</p>`;
  } else if (config.type === "start") {
    body = `<p class="story-copy">${escapeHTML(relationshipData.storyStart.prompt)}</p>
      <form class="inline-editor" id="startEditor">
        <label>عنوان البداية<input name="title" value="${escapeHTML(relationshipData.storyStart.title)}" maxlength="70"></label>
        <label>التاريخ — اكتبيه أو امسحيه<input name="startDate" value="${escapeHTML(relationshipData.storyStart.startDate)}" maxlength="50"></label>
        <label>أول ذكرى<textarea name="firstMemory" maxlength="450">${escapeHTML(relationshipData.storyStart.firstMemory)}</textarea></label>
        <button class="quiet-button" type="submit">احفظي بداية حكايتكم</button>
      </form>
      <p class="soft-note">التغييرات بتتحفظ على الجهاز ده بس. عدّلي البيانات في أول script.js لو حبيتي تغيّري النسخة الأصلية.</p>`;
  } else if (config.type === "timeline") {
    body = `<div class="timeline" aria-label="خط زمني تفاعلي">${relationshipData.timeline.map((memory, index) => `
      <section class="memory">
        <button type="button" aria-expanded="false" data-memory="${index}">
          <time>${escapeHTML(memory.date)}</time><h3>${escapeHTML(memory.title)}</h3><p>${escapeHTML(memory.description)}</p>
        </button><div class="memory-note">${escapeHTML(memory.note)}</div>
      </section>`).join("")}</div><p class="soft-note">اضغطي على أي ذكرى عشان تفتحي السطر اللي مستخبي تحتها.</p>`;
  } else if (config.type === "chat") {
    chatIndex = 0;
    chatTyping = true;
    chatSecretRevealed = false;
    const firstMessage = relationshipData.messages[0];
    const firstTypingLabel = firstMessage?.from === "amira" ? "أميرتي بتكتب..." : "لولي بيكتب...";
    body = `<div class="chat-window" aria-label="مساحة رسائل قابلة للتعديل">
        <div class="chat-top"><span>مساحة رسائل — أمثلة قابلة للاستبدال</span><span>خصوصي</span></div>
        <div class="chat-log" id="chatLog" aria-live="polite">
          <div class="typing" id="typingIndicator" aria-label="بيكتب"><i></i><i></i><i></i><span id="typingLabel">${firstTypingLabel}</span></div>
        </div>
      </div>
      <p class="soft-note">دي مش صور، دي قصص كل يوم بنعيشها، ولسه هنعيش أكتر طول ما إحنا مع بعض. ❤️</p>
      <button class="quiet-button" type="button" id="chatContinue" disabled>لحظة…</button>`;
    typingTimer = window.setTimeout(() => showChatMessage(firstMessage, 0), 850);
  } else if (config.type === "photos") {
    body = `<div class="photo-grid">${relationshipData.photos.map((photo, index) => `
      <button class="polaroid" type="button" data-photo="${index}" aria-label="افتحي ${escapeHTML(photo.title)}">
        <span class="photo-art" aria-hidden="true">${localPhotoPath(photo.image) ? `<img src="${escapeHTML(localPhotoPath(photo.image))}" alt="">` : escapeHTML(photo.symbol || arabicNumber(index + 1))}</span>
        <span>${escapeHTML(photo.title)}</span>
      </button>`).join("")}</div>
     `;
  } else if (config.type === "reasons") {
    reasonIndex = 0;
    body = `<div class="reason-card" aria-live="polite"><p id="reasonText">${escapeHTML(relationshipData.reasons[0])}</p></div>
      <p class="reason-count" id="reasonCount">سبب ${arabicNumber(1)} من ${arabicNumber(relationshipData.reasons.length)}</p>
      <button class="quiet-button" id="reasonNext" type="button">${relationshipData.reasons.length > 1 ? "قوليلي كمان حاجة" : "سبب من قلبي"}</button>`;
  } else if (config.type === "milestones") {
    body = `<div class="milestones">${relationshipData.milestones.map((milestone, index) => `
      <section class="milestone"><button type="button" data-milestone="${index}" aria-expanded="false">
        <span><span class="milestone-title">${escapeHTML(milestone.title)}</span><br><span class="milestone-date">${escapeHTML(milestone.date)}</span></span><span aria-hidden="true">＋</span>
      </button><div class="milestone-body">${escapeHTML(milestone.detail)}</div></section>`).join("")}</div>`;
  } else if (config.type === "letter") {
    body = `<div class="envelope-wrap"><button class="envelope" id="envelope" type="button" aria-expanded="false" aria-label="افتحي الظرف">
      <span class="envelope-flap" aria-hidden="true"></span><span class="envelope-seal" aria-hidden="true">♥</span>
      <span class="envelope-label">إلى ${escapeHTML(relationshipData.names.amiraNickname)}</span>
    </button></div>
    <div class="letter" id="letter" aria-live="polite"></div><p class="soft-note" id="letterHint">اضغطي على الظرف عشان تفتحي الرسالة.</p>`;
  } else if (config.type === "secret") {
    body = `<p class="story-copy">${escapeHTML(relationshipData.secrets.hint)}</p>
      <button class="secret-star" id="secretStar" type="button" aria-label="اكشفي السرّ المخفي — اللمسة الأولى من ثلاث" aria-pressed="false">✦</button>
      <p class="secret-message" id="secretMessage" aria-live="polite"></p>`;
  } else if (config.type === "final") {
    finalIndex = 0;
    const firstBeat = relationshipData.final.beats[0];
    body = `<div class="final-scene"><div class="final-content">
      <p class="final-line visible" id="finalLine">${escapeHTML(firstBeat?.text || "")}</p>
      <figure class="final-memory" id="finalMemory" hidden>
        <div class="photo-art" id="finalPhotoArt"></div>
        <figcaption id="finalPhotoCaption"></figcaption>
      </figure>
      <p class="final-signature" id="finalSignature">${escapeHTML(relationshipData.final.signature)}</p>
    </div></div>
    <button class="quiet-button" id="finalNext" type="button">كمّلي للآخر</button>`;
  }

  const progressLock = config.type === "chat" || config.type === "reasons" || config.type === "letter" || config.type === "secret";
  chapterRoot.innerHTML = `<p class="chapter-kicker">${escapeHTML(config.kicker)}</p>
    <h2>${escapeHTML(config.title)}</h2>
    ${config.lead ? `<p class="chapter-lead">${escapeHTML(config.lead)}</p>` : ""}
    ${body}
    ${controlsMarkup(!progressLock)}`;
  bindChapter(config.type);
  if (config.type === "intro") revealIntroLine(0);
  story.focus({ preventScroll: true });
}

function revealIntroLine(index) {
  const lines = chapterRoot.querySelectorAll(".intro-line");
  if (index >= lines.length) return;
  lines[index].classList.add("visible");
  if (index + 1 < lines.length) typingTimer = window.setTimeout(() => revealIntroLine(index + 1), 900);
}

function showChatMessage(message, index) {
  if (!message) return;
  const log = document.getElementById("chatLog");
  if (!log) return;
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
  const fromHer = message.from === "amira";
  const blurred = index === relationshipData.messages.length - 1;
  const bubble = document.createElement("div");
  bubble.className = `bubble${fromHer ? " from-her" : ""}${blurred ? " blurred" : ""}`;
  bubble.textContent = message.text;
  bubble.setAttribute("dir", "auto");
  if (blurred) {
    bubble.setAttribute("role", "button");
    bubble.setAttribute("tabindex", "0");
    bubble.setAttribute("aria-label", "رسالة سرّية، اضغطي لكشف المثال القابل للاستبدال");
    bubble.dataset.action = "reveal-chat";
  }
  log.appendChild(bubble);
  chatIndex = index + 1;
  chatTyping = false;
  const continueButton = document.getElementById("chatContinue");
  if (continueButton) {
    continueButton.disabled = false;
    continueButton.textContent = chatIndex < relationshipData.messages.length ? "كمّلي الرسائل" : "اضغطي على الرسالة السرّية";
  }
}

function advanceChat() {
  if (chatTyping || chatIndex >= relationshipData.messages.length) return;
  chatTyping = true;
  const continueButton = document.getElementById("chatContinue");
  if (continueButton) {
    continueButton.disabled = true;
    continueButton.textContent = "بيكتب…";
  }
  const log = document.getElementById("chatLog");
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.id = "typingIndicator";
  typing.setAttribute("aria-label", "بيكتب");
  const nextIndex = chatIndex;
  typing.innerHTML = `<i></i><i></i><i></i><span>${relationshipData.messages[nextIndex]?.from === "amira" ? "أميرتي بتكتب..." : "لولي بيكتب..."}</span>`;
  log.appendChild(typing);
  typingTimer = window.setTimeout(() => showChatMessage(relationshipData.messages[nextIndex], nextIndex), 780);
}

function bindChapter(type) {
  chapterRoot.querySelector('[data-action="next"]')?.addEventListener("click", () => {
    if (type === "final") return;
    currentChapter = Math.min(currentChapter + 1, chapters.length - 1);
    renderChapter();
  });
  chapterRoot.querySelector('[data-action="back"]')?.addEventListener("click", () => {
    currentChapter = Math.max(currentChapter - 1, 0);
    renderChapter();
  });
  chapterRoot.querySelector('[data-action="restart"]')?.addEventListener("click", () => {
    currentChapter = 0;
    renderChapter();
    story.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if (type === "start") {
    const form = document.getElementById("startEditor");
    form.addEventListener("submit", event => {
      event.preventDefault();
      const fields = new FormData(form);
      relationshipData.storyStart.title = fields.get("title").trim() || "قبل ما نحكي";
      relationshipData.storyStart.startDate = fields.get("startDate").trim() || "[ضيفي التاريخ أو امسحيه]";
      relationshipData.storyStart.firstMemory = fields.get("firstMemory").trim() || "[اكتبي هنا أول ذكرى حقيقية تحبي تفتكريها]";
      chapters[1].title = relationshipData.storyStart.title;
      persistPersonalization();
      showToast("اتحفظت بداية حكايتكم على الجهاز ده.");
    });
    form.querySelector('input[name="title"]').addEventListener("change", event => {
      relationshipData.storyStart.title = event.target.value.trim() || "قبل ما نحكي";
      chapters[1].title = relationshipData.storyStart.title;
      persistPersonalization();
    });
    form.querySelector('textarea[name="firstMemory"]').addEventListener("change", event => {
      relationshipData.storyStart.firstMemory = event.target.value.trim();
      persistPersonalization();
    });
    form.querySelector('input[name="startDate"]').addEventListener("change", event => {
      relationshipData.storyStart.startDate = event.target.value.trim();
      persistPersonalization();
    });
  }

  if (type === "timeline") {
    chapterRoot.querySelectorAll("[data-memory]").forEach(button => button.addEventListener("click", () => {
      const card = button.closest(".memory");
      card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(card.classList.contains("open")));
    }));
  }

  if (type === "chat") {
    document.getElementById("chatContinue").addEventListener("click", advanceChat);
    const chatLog = document.getElementById("chatLog");
    const reveal = target => {
      if (target.matches(".blurred")) {
        target.classList.add("revealed");
        target.setAttribute("aria-label", "انكشفت الرسالة — مثال قابل للاستبدال");
        chatSecretRevealed = true;
        const next = chapterRoot.querySelector('[data-action="next"]');
        if (next) next.disabled = false;
        const continueButton = document.getElementById("chatContinue");
        if (continueButton) continueButton.textContent = "اتكشفت الرسالة… كمّلي الحكاية";
      }
    };
    chatLog.addEventListener("click", event => reveal(event.target));
    chatLog.addEventListener("keydown", event => {
      if ((event.key === "Enter" || event.key === " ") && event.target.matches(".blurred")) {
        event.preventDefault();
        reveal(event.target);
      }
    });
    const next = chapterRoot.querySelector('[data-action="next"]');
    if (next) next.disabled = true;
    const refreshGate = window.setInterval(() => {
      if (currentChapter !== 3 || !chapterRoot.contains(chatLog)) {
        window.clearInterval(refreshGate);
        return;
      }
      if (chatIndex === relationshipData.messages.length && chatSecretRevealed && next) {
        next.disabled = false;
        window.clearInterval(refreshGate);
      }
    }, 100);
  }

  if (type === "photos") {
    chapterRoot.querySelectorAll("[data-photo]").forEach(button => button.addEventListener("click", () => {
      const photo = relationshipData.photos[Number(button.dataset.photo)];
      lastFocusedElement = button;
      const art = document.getElementById("photoArt");
      const photoPath = localPhotoPath(photo.image);
      art.style.background = "";
      art.innerHTML = photoPath ? `<img src="${escapeHTML(photoPath)}" alt="${escapeHTML(photo.title)}">` : escapeHTML(photo.symbol || "");
      document.getElementById("photoTitle").textContent = photo.title;
      document.getElementById("photoDate").textContent = photo.date || "";
      document.getElementById("photoCaption").textContent = photo.caption;
      photoDialog.classList.add("open");
      photoDialog.setAttribute("aria-hidden", "false");
      document.getElementById("closePhoto").focus();
    }));
  }

  if (type === "reasons") {
    const reasonNext = document.getElementById("reasonNext");
    const nextChapter = chapterRoot.querySelector('[data-action="next"]');
    if (nextChapter) nextChapter.disabled = relationshipData.reasons.length > 1;
    reasonNext.addEventListener("click", () => {
      if (reasonIndex < relationshipData.reasons.length - 1) {
        reasonIndex += 1;
        document.getElementById("reasonText").textContent = relationshipData.reasons[reasonIndex];
        document.getElementById("reasonCount").textContent = `سبب ${arabicNumber(reasonIndex + 1)} من ${arabicNumber(relationshipData.reasons.length)}`;
      }
      if (reasonIndex === relationshipData.reasons.length - 1) {
        reasonNext.textContent = "كلهم من قلبي";
        if (nextChapter) nextChapter.disabled = false;
      }
    });
  }

  if (type === "milestones") {
    chapterRoot.querySelectorAll("[data-milestone]").forEach(button => button.addEventListener("click", () => {
      const card = button.closest(".milestone");
      card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(card.classList.contains("open")));
      button.querySelector("span[aria-hidden]")?.replaceChildren(document.createTextNode(card.classList.contains("open") ? "−" : "＋"));
    }));
  }

  if (type === "letter") {
    const envelope = document.getElementById("envelope");
    const next = chapterRoot.querySelector('[data-action="next"]');
    if (next) next.disabled = true;
    envelope.addEventListener("click", () => {
      const isOpen = envelope.classList.toggle("open");
      envelope.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        const letter = document.getElementById("letter");
        const { greeting, paragraphs, signature } = relationshipData.letter;
        letter.textContent = `${greeting}\n\n${paragraphs.join("\n\n")}\n\n${signature}`;
        letter.classList.add("show");
        document.getElementById("letterHint").textContent = "رسالة قابلة للتعديل من relationshipData في script.js.";
        if (next) next.disabled = false;
      } else {
        document.getElementById("letter").classList.remove("show");
        if (next) next.disabled = true;
      }
    });
  }

  if (type === "secret") {
    secretStarClicks = 0;
    const next = chapterRoot.querySelector('[data-action="next"]');
    if (next) next.disabled = true;
    document.getElementById("secretStar").addEventListener("click", event => {
      secretStarClicks += 1;
      const star = event.currentTarget;
      if (secretStarClicks < 3) {
        star.setAttribute("aria-label", `اكشفي السرّ المخفي — اللمسة ${arabicNumber(secretStarClicks + 1)} من ثلاث`);
        star.classList.add("twinkle");
        window.setTimeout(() => star.classList.remove("twinkle"), 360);
        return;
      }
      document.getElementById("secretMessage").textContent = relationshipData.secrets.message;
      star.setAttribute("aria-pressed", "true");
      star.setAttribute("aria-label", "انكشف السرّ المخفي");
      if (next) next.disabled = false;
      showToast("لقيتي حاجة لولي كان مخبيها لأميرته ❤️");
    });
  }

  if (type === "final") {
    const next = document.getElementById("finalNext");
    const line = document.getElementById("finalLine");
    const finalMemory = document.getElementById("finalMemory");
    const signature = document.getElementById("finalSignature");
    next.addEventListener("click", () => {
      if (finalIndex < relationshipData.final.beats.length - 1) {
        finalIndex += 1;
        const beat = relationshipData.final.beats[finalIndex];
        line.classList.remove("visible");
        window.setTimeout(() => {
          if (beat.type === "photo") {
            line.textContent = "";
            finalMemory.hidden = false;
            const photo = relationshipData.photos[beat.photoIndex];
            if (photo) {
              const imagePath = localPhotoPath(photo.image);
              document.getElementById("finalPhotoArt").innerHTML = imagePath
                ? `<img src="${escapeHTML(imagePath)}" alt="${escapeHTML(photo.title)}">`
                : escapeHTML(photo.symbol || "");
              document.getElementById("finalPhotoCaption").textContent = photo.title;
            }
          } else {
            finalMemory.hidden = true;
            line.textContent = beat.text;
            line.classList.add("visible");
          }
          if (finalIndex === relationshipData.final.beats.length - 1) {
            signature.classList.add("visible");
            next.textContent = "ارجعي لأول الحكاية";
          }
        }, 160);
      } else {
        currentChapter = 0;
        renderChapter();
        story.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
}

function closePhotoDialog() {
  photoDialog.classList.remove("open");
  photoDialog.setAttribute("aria-hidden", "true");
  lastFocusedElement?.focus();
}

document.getElementById("closePhoto").addEventListener("click", closePhotoDialog);
photoDialog.addEventListener("click", event => {
  if (event.target === photoDialog) closePhotoDialog();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && photoDialog.classList.contains("open")) closePhotoDialog();
  if (event.key === "Tab" && photoDialog.classList.contains("open")) {
    event.preventDefault();
    document.getElementById("closePhoto").focus();
  }
});

opening.focus({ preventScroll: true });
openButton.addEventListener("click", () => {
  if (openButton.disabled) return;
  document.body.classList.add("story-entering");
  opening.classList.add("is-gone");
  opening.setAttribute("aria-hidden", "true");
  opening.removeAttribute("aria-modal");
  document.querySelector(".site-header").inert = false;
  document.getElementById("skipLink").tabIndex = 0;
  story.hidden = false;
  currentChapter = 0;
  renderChapter();
  window.setTimeout(() => document.body.classList.remove("story-entering"), 1400);
  window.setTimeout(() => story.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
});

const musicButton = document.getElementById("musicButton");
const musicMute = document.getElementById("musicMute");
const musicStatus = document.getElementById("musicStatus");
let musicMessageTimer;
musicMute.disabled = !relationshipData.music.src;
musicButton.addEventListener("click", async () => {
  if (!relationshipData.music.src) {
    musicStatus.textContent = "الموسيقى اختيارية — ضيفي ملفاً في relationshipData.music.src.";
    musicStatus.classList.add("show");
    window.clearTimeout(musicMessageTimer);
    musicMessageTimer = window.setTimeout(() => musicStatus.classList.remove("show"), 3200);
    return;
  }
  if (audio.paused) {
    audio.src = relationshipData.music.src;
    try {
      await audio.play();
      musicButton.setAttribute("aria-pressed", "true");
      musicButton.textContent = "♫ إيقاف الموسيقى";
      musicMute.disabled = false;
      if (document.body.classList.contains("final-mode")) audio.playbackRate = 0.72;
    } catch (_) {
      showToast("تعذّر تشغيل الملف. تأكدي من مساره داخل الموقع.");
    }
  } else {
    audio.pause();
    musicButton.setAttribute("aria-pressed", "false");
    musicButton.textContent = "♫ الموسيقى";
  }
});

musicMute.addEventListener("click", () => {
  audio.muted = !audio.muted;
  musicMute.setAttribute("aria-pressed", String(audio.muted));
  musicMute.textContent = audio.muted ? "إلغاء الكتم" : "كتم الصوت";
});

let secretHeartTimer;
const hiddenHeart = document.getElementById("hiddenHeart");
hiddenHeart.addEventListener("click", () => {
  hiddenHeartClicks += 1;
  window.clearTimeout(secretHeartTimer);
  if (hiddenHeartClicks >= 5) {
    showToast(relationshipData.secrets.secondMessage);
    hiddenHeartClicks = 0;
    hiddenHeart.setAttribute("aria-label", "رسالة سرّية صغيرة");
    return;
  }
  hiddenHeart.setAttribute("aria-label", `رسالة سرّية صغيرة — ${arabicNumber(5 - hiddenHeartClicks)} ضغطات وتظهر`);
  secretHeartTimer = window.setTimeout(() => {
    hiddenHeartClicks = 0;
    hiddenHeart.setAttribute("aria-label", "رسالة سرّية صغيرة");
  }, 3500);
});

const cursorGlow = document.getElementById("cursorGlow");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (finePointer.matches && !reduceMotion.matches) {
  document.addEventListener("pointermove", event => {
    cursorGlow.style.transform = `translate3d(${event.clientX - 120}px, ${event.clientY - 120}px, 0)`;
    cursorGlow.classList.add("visible");
    const card = event.target.closest?.(".polaroid");
    if (card) {
      const bounds = card.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6;
      card.style.setProperty("--shift-x", `${x}px`);
      card.style.setProperty("--shift-y", `${y}px`);
    }
  }, { passive: true });
  document.addEventListener("pointerleave", () => {
    cursorGlow.classList.remove("visible");
    document.querySelectorAll(".polaroid").forEach(card => {
      card.style.removeProperty("--shift-x");
      card.style.removeProperty("--shift-y");
    });
  });
}

startCountdown();
