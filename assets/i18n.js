/**
 * 공통 언어 토글 (한국어 / English)
 * ─────────────────────────────────────────────────────────────
 * 각 페이지에 아래 한 줄만 추가하면 우측 상단에 언어 토글 바가 삽입됩니다.
 *   <script src="assets/i18n.js"></script>            (허브)
 *   <script src="../../assets/i18n.js"></script>      (가이드)
 *
 * 사용 규칙
 *  - 한국어 콘텐츠는 요소에 class="lang-ko", 영어 콘텐츠는 class="lang-en"
 *  - <body>에 기본값 data-lang="ko"를 넣어두면 깜빡임이 줄어듭니다.
 *  - 언어 상태는 localStorage("fabricGuideLang") + URL ?lang= 로 유지되어
 *    페이지를 이동해도 선택한 언어가 이어집니다.
 *  - 언어 변경 시 window로 "langchange" CustomEvent(detail:{lang})가 발생하므로
 *    허브처럼 동적으로 카드를 그리는 페이지는 이 이벤트로 다시 렌더링하면 됩니다.
 */
(function () {
  if (window.__fabricI18nLoaded) return;
  window.__fabricI18nLoaded = true;

  var KEY = "fabricGuideLang";

  var css = [
    ".langbar{position:fixed;top:14px;right:16px;z-index:9999;display:flex;gap:0;",
    "  border:1px solid var(--cp-border,#dedede);border-radius:999px;overflow:hidden;",
    "  background:var(--cp-surface,#fff);box-shadow:0 1px 3px rgba(0,0,0,.14);}",
    ".langbar button{appearance:none;border:0;cursor:pointer;font:inherit;font-size:12.5px;font-weight:600;",
    "  padding:6px 13px;background:transparent;color:var(--cp-text-soft,#6f6f6f);",
    "  font-family:'Segoe UI',Aptos,Calibri,-apple-system,BlinkMacSystemFont,sans-serif;}",
    ".langbar button:hover{color:var(--cp-text,#242424)}",
    ".langbar button[aria-pressed=\"true\"]{background:var(--cp-accent,#b11f4b);color:var(--cp-accent-fg,#fff)}",
    "body[data-lang=\"ko\"] .lang-en{display:none !important}",
    "body[data-lang=\"en\"] .lang-ko{display:none !important}",
    "@media print{.langbar{display:none}}",
    "@media (max-width:640px){.langbar{top:8px;right:8px}}"
  ].join("");

  function injectStyle() {
    if (document.getElementById("fabric-i18n-style")) return;
    var s = document.createElement("style");
    s.id = "fabric-i18n-style";
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  function injectBar() {
    if (document.getElementById("fabric-langbar")) return;
    var bar = document.createElement("div");
    bar.className = "langbar";
    bar.id = "fabric-langbar";
    bar.setAttribute("role", "group");
    bar.setAttribute("aria-label", "Language");
    bar.innerHTML =
      '<button type="button" data-lang-btn="ko" aria-pressed="true">한국어</button>' +
      '<button type="button" data-lang-btn="en" aria-pressed="false">English</button>';
    document.body.appendChild(bar);
    bar.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.langBtn, true); });
    });
  }

  function apply(lang, persist) {
    lang = lang === "en" ? "en" : "ko";
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    var btns = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-pressed", String(btns[i].dataset.langBtn === lang));
    }
    if (persist) {
      try { localStorage.setItem(KEY, lang); } catch (e) {}
      try {
        var u = new URL(window.location.href);
        u.searchParams.set("lang", lang);
        history.replaceState(null, "", u);
      } catch (e) {}
    }
    try {
      window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
    } catch (e) {}
  }

  function initialLang() {
    var v = null;
    try { v = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (!v) { try { v = localStorage.getItem(KEY); } catch (e) {} }
    if (!v) v = (navigator.language || "").toLowerCase().indexOf("ko") === 0 ? "ko" : "en";
    return v === "en" ? "en" : "ko";
  }

  function boot() {
    injectStyle();
    injectBar();
    apply(initialLang(), false);
  }

  if (document.body) boot();
  else document.addEventListener("DOMContentLoaded", boot);

  // 다른 페이지/탭에서 언어를 바꾸면 동기화
  window.addEventListener("storage", function (e) {
    if (e.key === KEY && e.newValue) apply(e.newValue, false);
  });

  window.FabricI18n = { apply: apply, get: function () { return document.body ? document.body.dataset.lang : "ko"; } };
})();
