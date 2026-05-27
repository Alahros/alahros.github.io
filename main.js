/*
 *  main.js — Carousel logic + page boot.
 *  Depends on: projects.js (window.PROJECTS) and i18n.js (window.I18N).
 */

(function () {
  const projects = window.PROJECTS || [];
  let currentIndex = 0;

  // Cache nodes once DOM is ready.
  const $ = (sel) => document.querySelector(sel);
  const refs = {};

  function buildThumbs() {
    const strip = refs.strip;
    strip.innerHTML = "";
    projects.forEach((p, i) => {
      const btn = document.createElement("button");
      btn.className = "thumb";
      btn.type = "button";
      btn.setAttribute("aria-label", p.title.en);
      btn.dataset.index = i;
      const img = document.createElement("img");
      img.src = p.thumb || p.media;
      img.alt = p.title.en;
      img.loading = "lazy";
      btn.appendChild(img);
      btn.addEventListener("click", () => setProject(i));
      strip.appendChild(btn);
    });
  }

  function renderProject() {
    if (!projects.length) return;
    const p = projects[currentIndex];
    const lang = window.currentLang || "en";

    // Media (image or video).
    const isVideo = p.mediaType === "video" || /\.(mp4|webm|mov)$/i.test(p.media);
    if (isVideo) {
      refs.media.innerHTML = `<video src="${p.media}" autoplay loop muted playsinline></video>`;
    } else {
      refs.media.innerHTML = `<img src="${p.media}" alt="${p.title[lang]}">`;
    }

    refs.title.textContent = p.title[lang] || p.title.en;
    refs.year.textContent = p.year || "";

    // Role label + value.
    const roleLabel = (window.I18N[lang] && window.I18N[lang]["projects.role"]) || "Role";
    refs.role.innerHTML = p.role
      ? `<span class="muted">${roleLabel}:</span> ${p.role[lang] || p.role.en}`
      : "";

    // Tags.
    refs.tags.innerHTML = (p.tags || [])
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");

    // Bullets.
    const bullets = (p.bullets && (p.bullets[lang] || p.bullets.en)) || [];
    refs.bullets.innerHTML = bullets.map((b) => `<li>${b}</li>`).join("");

    // Description.
    refs.desc.textContent = (p.description && (p.description[lang] || p.description.en)) || "";

    // Links.
    const linkLabels = {
      play: window.I18N[lang]["projects.links.play"],
      download: window.I18N[lang]["projects.links.download"],
      trailer: window.I18N[lang]["projects.links.trailer"],
      source: window.I18N[lang]["projects.links.source"]
    };
    const links = p.links || {};
    refs.links.innerHTML = Object.keys(links)
      .filter((k) => links[k])
      .map(
        (k) =>
          `<a class="project-link" href="${links[k]}" target="_blank" rel="noopener">${linkLabels[k] || k}</a>`
      )
      .join("");

    // Update active thumb.
    refs.strip.querySelectorAll(".thumb").forEach((el, i) => {
      el.classList.toggle("active", i === currentIndex);
    });

    // Scroll active thumb into view.
    const activeEl = refs.strip.querySelector(".thumb.active");
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  function setProject(i) {
    if (!projects.length) return;
    const n = projects.length;
    currentIndex = ((i % n) + n) % n;
    renderProject();
  }

  // Expose so i18n.setLang can trigger a re-render on language change.
  window.renderProject = renderProject;
  window.setProject = setProject;

  function onKey(e) {
    if (e.key === "ArrowLeft") setProject(currentIndex - 1);
    if (e.key === "ArrowRight") setProject(currentIndex + 1);
  }

  // Touch swipe on the media area.
  function attachSwipe(el) {
    let startX = null;
    el.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (startX == null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) setProject(currentIndex + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  function fillStats() {
    // Auto-compute some stats from PROJECTS so they stay in sync.
    const jams = projects.filter((p) => (p.tags || []).some((t) => /jam/i.test(t))).length;
    const projCount = projects.length;
    const years = new Set(projects.map((p) => p.year)).size || 1;
    document.querySelectorAll("[data-stat]").forEach((el) => {
      const key = el.dataset.stat;
      if (key === "years") el.textContent = years + "+";
      if (key === "jams") el.textContent = jams;
      if (key === "projects") el.textContent = projCount;
      if (key === "roles") el.textContent = "2";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    refs.media = $("#projectMedia");
    refs.title = $("#projectTitle");
    refs.year = $("#projectYear");
    refs.role = $("#projectRole");
    refs.tags = $("#projectTags");
    refs.bullets = $("#projectBullets");
    refs.desc = $("#projectDesc");
    refs.links = $("#projectLinks");
    refs.strip = $("#thumbStrip");

    buildThumbs();
    fillStats();

    $("#prevProject").addEventListener("click", () => setProject(currentIndex - 1));
    $("#nextProject").addEventListener("click", () => setProject(currentIndex + 1));
    document.addEventListener("keydown", onKey);
    attachSwipe(refs.media);

    // Smooth scroll for nav links.
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Boot with English; user can switch via .lang-switch buttons.
    window.setLang("en");
    renderProject();
  });
})();
