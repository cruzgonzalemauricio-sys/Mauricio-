/* Casa Elena — carta digital. Vanilla JS, no dependencies.
   Every init is wrapped in safe() so one failure never breaks the rest. */
(function () {
  "use strict";

  function safe(fn, name) {
    try { fn(); } catch (err) {
      console.warn("[carta] " + name + " failed:", err);
    }
  }

  var LANG_KEY_ATTR = "data-active";
  var state = { lang: "es" };

  /* ---------- Language toggle (ES/EN), no persistence by design ---------- */
  function initLangToggle() {
    var btn = document.getElementById("langToggle");
    if (!btn) return;
    btn.setAttribute(LANG_KEY_ATTR, "es");

    btn.addEventListener("click", function () {
      state.lang = state.lang === "es" ? "en" : "es";
      applyLang(state.lang);
      btn.setAttribute(LANG_KEY_ATTR, state.lang);
    });
  }

  function applyLang(lang) {
    var nodes = document.querySelectorAll("[data-es][data-en]");
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var text = lang === "en" ? n.getAttribute("data-en") : n.getAttribute("data-es");
      if (text != null) n.textContent = text;
    }
    var badge = document.getElementById("statusBadge");
    if (badge) updateStatusBadgeText(badge, lang);
  }

  /* ---------- Open/closed badge based on local device time ----------
     Hours are also hardcoded in the HTML text, so nothing depends on JS. */
  function initStatusBadge() {
    var badge = document.getElementById("statusBadge");
    if (!badge) return;
    var isOpen = computeIsOpenNow();
    badge.classList.add(isOpen ? "is-open" : "is-closed");
    updateStatusBadgeText(badge, state.lang, isOpen);
  }

  function computeIsOpenNow() {
    var now = new Date();
    var mins = now.getHours() * 60 + now.getMinutes();
    var lunch = mins >= 13 * 60 && mins < 16 * 60;
    var dinner = mins >= 20 * 60 && mins < 23 * 60 + 30;
    return lunch || dinner;
  }

  function updateStatusBadgeText(badge, lang, isOpenArg) {
    var isOpen = typeof isOpenArg === "boolean" ? isOpenArg : badge.classList.contains("is-open");
    var textEl = badge.querySelector("[data-status-text]");
    if (!textEl) return;
    var key = isOpen ? (lang === "en" ? "data-en-open" : "data-es-open")
                      : (lang === "en" ? "data-en-closed" : "data-es-closed");
    var val = badge.getAttribute(key);
    if (val) textEl.textContent = val;
  }

  /* ---------- Sticky category nav: active link + smooth anchor scroll ---------- */
  function initCatNav() {
    var links = document.querySelectorAll(".cat-link");
    var sections = document.querySelectorAll(".menu-section");
    if (!links.length || !sections.length) return;

    if ("IntersectionObserver" in window) {
      var byId = {};
      links.forEach(function (l) { byId[l.getAttribute("href").slice(1)] = l; });

      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove("is-active"); });
            var link = byId[entry.target.id];
            if (link) link.classList.add("is-active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });

      sections.forEach(function (s) { obs.observe(s); });
    }
  }

  /* ---------- Reveal-on-scroll, defensive (never hides content permanently) ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) return; // CSS default keeps them visible

    items.forEach(function (el) { el.classList.add("js-armed"); });

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    items.forEach(function (el) { obs.observe(el); });

    // Safety net: force-reveal anything still hidden after 6s
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add("is-visible"); });
    }, 6000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    safe(initLangToggle, "initLangToggle");
    safe(initStatusBadge, "initStatusBadge");
    safe(initCatNav, "initCatNav");
    safe(initReveal, "initReveal");
  });
})();
