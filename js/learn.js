/**
 * LearnKey player – Python v2
 * Date: learn-data.js (playlist-uri), localStorage progres
 */
(function () {
  var STORAGE_KEY = "gmetrix-python-v2-progress";
  var PLAYLISTS = window.GMETRIX_VIDEO_PLAYLISTS || {};

  var DOMAINS = [
    { n: 1, label: "Domain 1: Operations Using Data Ty…", video: "Operations Using Data Types and Operators Videos", open: true },
    { n: 2, label: "Domain 2: Flow Control with Decisio…", video: "Flow Control with Decision Making Videos" },
    { n: 3, label: "Domain 3: Input and Output Operat…", video: "Input and Output Operations Videos" },
    { n: 4, label: "Domain 4: Code Documentation and…", video: "Code Documentation and Structure Videos" },
    { n: 5, label: "Domain 5: Troubleshooting and Erro…", video: "Troubleshooting and Error Handling Videos" },
    { n: 6, label: "Domain 6: Software Development To…", video: "Operations Using Modules and Tools Videos" },
  ];

  var state = {
    completed: {},
    watchedSegments: {},
    currentActivityId: "glossary",
    currentSegmentId: null,
  };

  var els = {};

  function activityId(domainNum, slug) {
    return "d" + domainNum + "-" + slug;
  }

  /** Tipuri: glossary | start-test | videos | placeholder */
  function activitiesForDomain(num, videoTitle) {
    var list = [
      { id: activityId(num, "pre-assessment"), icon: "bar_chart", text: "Domain " + num + " Pre-Assessment", type: "start-test" },
      { id: activityId(num, "videos"), icon: "play_circle", text: "Domain " + num + ": " + videoTitle, type: "videos" },
      { id: activityId(num, "fill-blanks"), icon: "bar_chart", text: "Domain " + num + " Fill in the Blanks", type: "start-test" },
      { id: activityId(num, "workbook"), icon: "edit", text: "Domain " + num + " Project Workbook", type: "placeholder" },
      { id: activityId(num, "project-files"), icon: "note_add", text: "Domain " + num + " Project Files", type: "placeholder" },
    ];
    if (num === 1) {
      list.push(
        { id: activityId(1, "practical-1"), icon: "bar_chart", text: "Domain 1 Practical Application Part 1", type: "start-test" },
        { id: activityId(1, "practical-2"), icon: "bar_chart", text: "Domain 1 Practical Application Part 2", type: "start-test" }
      );
    } else {
      list.push({
        id: activityId(num, "practical"),
        icon: "bar_chart",
        text: "Domain " + num + " Practical Application",
        type: "start-test",
      });
    }
    list.push({
      id: activityId(num, "post-assessment"),
      icon: "bar_chart",
      text: "Domain " + num + " Post-Assessment",
      type: "start-test",
    });
    return list;
  }

  function loadProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (data.completed) state.completed = data.completed;
      if (data.watchedSegments) state.watchedSegments = data.watchedSegments;
    } catch (e) {
      /* ignore */
    }
  }

  function saveProgress() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        completed: state.completed,
        watchedSegments: state.watchedSegments,
      })
    );
  }

  function isComplete(id) {
    return !!state.completed[id];
  }

  function setComplete(id, complete) {
    if (complete) state.completed[id] = true;
    else delete state.completed[id];
    saveProgress();
    updateDomainDots();
    updateProgressBar();
    var link = document.querySelector('[data-activity-id="' + id + '"]');
    if (link) applyLinkCompleteState(link, !!complete);
  }

  function allActivityIds() {
    var ids = ["glossary", "workbook", "support-files"];
    DOMAINS.forEach(function (d) {
      activitiesForDomain(d.n, d.video).forEach(function (a) {
        ids.push(a.id);
      });
    });
    return ids;
  }

  function domainActivityIds(domainNum) {
    return activitiesForDomain(domainNum, DOMAINS[domainNum - 1].video).map(function (a) {
      return a.id;
    });
  }

  function isDomainComplete(domainNum) {
    return domainActivityIds(domainNum).every(function (id) {
      return isComplete(id);
    });
  }

  function updateDomainDots() {
    document.querySelectorAll(".learn-domain").forEach(function (details) {
      var num = parseInt(details.getAttribute("data-domain"), 10);
      if (!num) return;
      details.classList.toggle("is-domain-complete", isDomainComplete(num));
    });
  }

  function updateProgressBar() {
    var ids = allActivityIds();
    var done = ids.filter(function (id) {
      return isComplete(id);
    }).length;
    var pct = ids.length ? Math.round((done / ids.length) * 100) : 0;
    var bar = document.querySelector(".learn-nav__progress-bar");
    var wrap = document.querySelector(".learn-nav__progress");
    if (bar) bar.style.width = pct + "%";
    if (wrap) wrap.setAttribute("aria-valuenow", String(pct));
  }

  function applyLinkCompleteState(link, complete) {
    link.classList.toggle("is-complete", !!complete);
  }

  function renderDomains() {
    var root = document.getElementById("domainNav");
    if (!root) return;

    var html = "";
    DOMAINS.forEach(function (domain) {
      var activities = activitiesForDomain(domain.n, domain.video);
      var openAttr = domain.open ? " open" : "";
      var domainComplete = isDomainComplete(domain.n);

      html +=
        '<details class="learn-domain' +
        (domainComplete ? " is-domain-complete" : "") +
        '" data-domain="' +
        domain.n +
        '"' +
        openAttr +
        ">" +
        '<summary class="learn-domain__summary">' +
        '<span class="learn-domain__dot" aria-hidden="true"></span>' +
        '<span class="learn-domain__label">' +
        domain.label +
        "</span>" +
        '<span class="material-icons-outlined learn-domain__chevron">expand_more</span>' +
        "</summary>" +
        '<ul class="learn-domain__children">';

      activities.forEach(function (item) {
        html +=
          '<li><a href="#" class="learn-nav__sub" data-activity-id="' +
          item.id +
          '" data-activity-type="' +
          item.type +
          '">' +
          '<span class="material-icons-outlined">' +
          item.icon +
          "</span>" +
          item.text +
          "</a></li>";
      });

      html += "</ul></details>";
    });

    root.innerHTML = html;
  }

  function clearSelection() {
    document
      .querySelectorAll(".learn-nav__item--active, .learn-nav__sub.is-selected")
      .forEach(function (el) {
        el.classList.remove("learn-nav__item--active", "is-selected");
      });
  }

  function selectLink(link) {
    clearSelection();
    if (!link) return;
    if (link.classList.contains("learn-nav__item")) {
      link.classList.add("learn-nav__item--active");
    } else {
      link.classList.add("is-selected");
    }
  }

  function hideAllViews() {
    document.querySelectorAll(".learn-view__panel").forEach(function (panel) {
      panel.classList.add("is-hidden");
    });
  }

  function showView(viewName) {
    hideAllViews();
    if (viewName === "glossary") els.viewGlossary.classList.remove("is-hidden");
    else if (viewName === "start-test") els.viewStartTest.classList.remove("is-hidden");
    else if (viewName === "videos") els.viewVideos.classList.remove("is-hidden");
    else els.viewPlaceholder.classList.remove("is-hidden");
  }

  function getActivityLabel(id) {
    var link = document.querySelector('[data-activity-id="' + id + '"]');
    if (link && link.textContent.trim()) return link.textContent.trim();
    return id;
  }

  function getPlaylist(activityId) {
    return PLAYLISTS[activityId] || null;
  }

  function renderVideoPlaylist(activityId) {
    var playlist = getPlaylist(activityId);
    var container = els.videoPlaylist;
    if (!playlist || !container) {
      container.innerHTML = "<p class=\"video-playlist-empty\">Playlist indisponibil.</p>";
      return;
    }

    var html = "";
    playlist.sections.forEach(function (section, sIdx) {
      // Open all sections by default (user requested every domain's tabs open)
      html +=
        '<details class="video-section" open>' +
        '<summary class="video-section__title">' +
        section.title +
        '<span class="material-icons-outlined video-section__chevron">expand_more</span>' +
        "</summary>" +
        '<ul class="video-section__list">';

      section.items.forEach(function (item) {
        html +=
          '<li><button type="button" class="video-segment" data-segment-id="' +
          item.segmentId +
          '" data-src="' +
          (item.src || "").replace(/"/g, "&quot;") +
          '">' +
          '<span class="video-segment__check material-icons-outlined" aria-hidden="true">check_circle</span>' +
          '<span class="video-segment__label">' +
          item.title +
          "</span></button></li>";
      });

      html += "</ul></details>";
    });

    container.innerHTML = html;

    container.querySelectorAll(".video-segment").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectVideoSegment(btn);
      });
      if (state.watchedSegments[btn.getAttribute("data-segment-id")]) {
        btn.classList.add("is-watched");
      }
    });

    var first = container.querySelector(".video-segment");
    if (first) selectVideoSegment(first);
  }

  function selectVideoSegment(btn) {
    if (!btn) return;
    var segmentId = btn.getAttribute("data-segment-id");
    var src = btn.getAttribute("data-src") || "";

    state.currentSegmentId = segmentId;

    document.querySelectorAll(".video-segment.is-active").forEach(function (b) {
      b.classList.remove("is-active");
    });
    btn.classList.add("is-active");

    var video = els.courseVideo;
    var empty = els.videoPlayerEmpty;
    var hint = els.videoNoLinkHint;

    if (src) {
      video.src = src;
      video.classList.remove("is-hidden");
      empty.classList.add("is-hidden");
      hint.classList.add("is-hidden");
      video.load();
    } else {
      video.pause();
      video.removeAttribute("src");
      video.classList.add("is-hidden");
      empty.classList.remove("is-hidden");
      hint.classList.remove("is-hidden");
    }
  }

  function openVideosActivity(activityId) {
    showView("videos");
    renderVideoPlaylist(activityId);
  }

  function openStartTest(activityId) {
    showView("start-test");
    els.btnStartTest.dataset.activityId = activityId;
  }

  function openActivity(id, type) {
    state.currentActivityId = id;
    els.mainTitle.textContent = getActivityLabel(id);
    selectLink(document.querySelector('[data-activity-id="' + id + '"]'));

    if (type === "glossary") showView("glossary");
    else if (type === "start-test") openStartTest(id);
    else if (type === "videos") openVideosActivity(id);
    else {
      showView("placeholder");
      els.placeholderMessage.textContent =
        "Conținutul pentru „" + getActivityLabel(id) + "” va fi adăugat în curând.";
    }
  }

  function bindNav() {
    document.querySelector(".learn-nav__menu").addEventListener("click", function (e) {
      var link = e.target.closest("[data-activity-id]");
      if (!link) return;
      e.preventDefault();
      openActivity(link.getAttribute("data-activity-id"), link.getAttribute("data-activity-type") || "placeholder");
    });
  }

  function bindCompleteStates() {
    document.querySelectorAll("[data-activity-id]").forEach(function (link) {
      applyLinkCompleteState(link, isComplete(link.getAttribute("data-activity-id")));
    });
  }

  function initCollapse() {
    var shell = document.querySelector(".learn-shell");
    var collapseBtn = document.getElementById("navCollapse");
    if (!collapseBtn || !shell) return;
    collapseBtn.addEventListener("click", function () {
      var collapsed = shell.classList.toggle("learn-shell--nav-collapsed");
      collapseBtn.setAttribute("aria-expanded", collapsed ? "false" : "true");
      collapseBtn.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
    });
  }

  function initStartTest() {
    els.btnStartTest.addEventListener("click", function () {
      var id = els.btnStartTest.dataset.activityId;
      console.info("Start test:", id);
      alert(
        "Testul pentru „" +
          getActivityLabel(id) +
          "” va fi conectat aici.\nactivity-id: " +
          id
      );
    });
  }

  function initVideoPlayer() {
    els.videoPlayFake.addEventListener("click", function () {
      if (els.courseVideo.src) els.courseVideo.play();
    });

    /* Viitor: la ended → markSegmentWatched(segmentId) + bifă verde */
    els.courseVideo.addEventListener("ended", function () {
      /* GmetrixLearn.markSegmentWatched(state.currentSegmentId); */
    });
  }

  function init() {
    els.mainTitle = document.getElementById("learnMainTitle");
    els.viewGlossary = document.getElementById("viewGlossary");
    els.viewStartTest = document.getElementById("viewStartTest");
    els.viewVideos = document.getElementById("viewVideos");
    els.viewPlaceholder = document.getElementById("viewPlaceholder");
    els.placeholderMessage = document.getElementById("placeholderMessage");
    els.btnStartTest = document.getElementById("btnStartTest");
    els.videoPlaylist = document.getElementById("videoPlaylist");
    els.courseVideo = document.getElementById("courseVideo");
    els.videoPlayerEmpty = document.getElementById("videoPlayerEmpty");
    els.videoNoLinkHint = document.getElementById("videoNoLinkHint");
    els.videoPlayFake = document.getElementById("videoPlayFake");

    loadProgress();
    renderDomains();
    bindCompleteStates();
    updateDomainDots();
    updateProgressBar();
    bindNav();
    initCollapse();
    initStartTest();
    initVideoPlayer();
    openActivity("glossary", "glossary");
  }

  window.GmetrixLearn = {
    markComplete: function (activityId) {
      setComplete(activityId, true);
    },
    markIncomplete: function (activityId) {
      setComplete(activityId, false);
    },
    isComplete: isComplete,
    openActivity: openActivity,
    activityId: activityId,
    STORAGE_KEY: STORAGE_KEY,
    /** Setează URL video: GmetrixLearn.setVideoSrc("d1-v-s0-i0", "https://...") */
    setVideoSrc: function (segmentId, url) {
      Object.keys(PLAYLISTS).forEach(function (key) {
        var pl = PLAYLISTS[key];
        pl.sections.forEach(function (sec) {
          sec.items.forEach(function (item) {
            if (item.segmentId === segmentId) item.src = url;
          });
        });
      });
      if (state.currentActivityId && state.currentActivityId.indexOf("-videos") !== -1) {
        renderVideoPlaylist(state.currentActivityId);
      }
    },
    /** Viitor: după vizionare completă */
    markSegmentWatched: function (segmentId) {
      state.watchedSegments[segmentId] = true;
      saveProgress();
      var btn = document.querySelector('[data-segment-id="' + segmentId + '"]');
      if (btn) btn.classList.add("is-watched");
    },
    getPlaylists: function () {
      return PLAYLISTS;
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
