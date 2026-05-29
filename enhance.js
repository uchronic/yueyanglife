/**
 * 震泰康养 - 增强脚本
 * 注入真实图片、优化交互体验
 * 使用 MutationObserver 持续监听 DOM 变化，确保每次重渲染后图片都会重新注入
 */
(function () {
  "use strict";

  // ============ 图片资源 ============
  const IMG_BASE = "./images/";
  const IMAGES = {
    "cover-base-1": IMG_BASE + "base-exterior.jpg",
    "cover-base-2": IMG_BASE + "base-garden.jpg",
    "cover-service": IMG_BASE + "lobby.jpg",
    "cover-course": IMG_BASE + "base-corridor.jpg",
    "cover-product": IMG_BASE + "room-suite.jpg",
    hero: IMG_BASE + "hero-view.jpg",
    taichi: IMG_BASE + "base-garden.jpg",
    tea: IMG_BASE + "lobby-2.jpg",
    forest: IMG_BASE + "base-corridor.jpg",
    spa: IMG_BASE + "room-river.jpg",
    healthy_food: IMG_BASE + "hero-view-2.jpg",
    yoga: IMG_BASE + "base-garden.jpg",
    family: IMG_BASE + "room-family.jpg",
    garden: IMG_BASE + "base-garden.jpg",
    login_bg: IMG_BASE + "hero-view.jpg",
    "room-twin": IMG_BASE + "room-twin.jpg",
    "room-family": IMG_BASE + "room-family.jpg",
    "room-suite": IMG_BASE + "room-suite.jpg",
    "room-river": IMG_BASE + "room-river.jpg",
  };

  // 商品专属图片
  const PRODUCT_IMAGES = {
    "五谷养生礼盒":
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop",
    "适老护膝保暖套":
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  };

  const applied = new WeakSet();

  // ============ 注入所有增强 ============
  function applyEnhancements() {
    // 1. 封面图片（按 CSS class）
    document.querySelectorAll(".card-cover").forEach((el) => {
      if (applied.has(el)) return;
      const classes = Array.from(el.classList);
      for (const cls of classes) {
        if (IMAGES[cls]) {
          el.style.backgroundImage = "url('" + IMAGES[cls] + "')";
          el.style.backgroundSize = "cover";
          el.style.backgroundPosition = "center";
          applied.add(el);
          break;
        }
      }
    });

    // 2. 商品图片（按标题文字匹配）
    document.querySelectorAll(".card").forEach((card) => {
      const title = card.querySelector(".card-title, .detail-title");
      if (!title) return;
      const text = title.textContent.trim();
      for (const keyword in PRODUCT_IMAGES) {
        if (text.includes(keyword)) {
          const cover = card.querySelector(".card-cover");
          if (cover && !applied.has(cover)) {
            cover.style.backgroundImage = "url('" + PRODUCT_IMAGES[keyword] + "')";
            cover.style.backgroundSize = "cover";
            cover.style.backgroundPosition = "center";
            applied.add(cover);
          }
          break;
        }
      }
    });

    // 3. Hero 背景
    var hero = document.querySelector(".hero");
    if (hero && !applied.has(hero)) {
      hero.style.backgroundImage =
        "linear-gradient(135deg, rgba(110,139,116,0.88), rgba(79,103,85,0.82)), url('" +
        IMAGES.hero +
        "')";
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
      applied.add(hero);
    }

    // 4. 品牌图标
    var mark = document.querySelector(".brand-mark");
    if (mark && !applied.has(mark)) {
      mark.innerHTML =
        '<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="42" height="42" rx="14" fill="url(#g)"/><path d="M12 28c0-6 4-12 9-14 5 2 9 8 9 14" stroke="#fffaf0" stroke-width="2" fill="none"/><path d="M16 26c1-4 3-7 5-8 2 1 4 4 5 8" stroke="#fffaf0" stroke-width="1.5" fill="rgba(255,250,240,0.3)"/><circle cx="21" cy="16" r="2" fill="#fffaf0"/><defs><linearGradient id="g" x1="0" y1="0" x2="42" y2="42"><stop stop-color="#6e8b74"/><stop offset="1" stop-color="#bc9b6a"/></linearGradient></defs></svg>';
      mark.style.borderRadius = "14px";
      mark.style.overflow = "hidden";
      applied.add(mark);
    }

    // 5. 快捷入口图标
    var iconMap = {
      住: "\u{1F3E8}",
      疗: "\u{1F486}",
      课: "\u{1F9D8}",
      购: "\u{1F6D2}",
      导: "\u{1F5FA}",
      电: "\u{1F4DE}",
      会: "\u{1F451}",
      单: "\u{1F4CB}",
    };
    document.querySelectorAll(".shortcut-icon").forEach(function (el) {
      if (applied.has(el)) return;
      var text = el.textContent.trim();
      if (iconMap[text]) {
        el.textContent = iconMap[text];
        el.style.fontSize = "1.5rem";
        applied.add(el);
      }
    });

    // 6. 底部栏图标
    var tabIcons = ["\u{1F3E0}", "\u{1F4E6}", "\u{1F486}", "\u{1F6D2}", "\u{1F464}"];
    document.querySelectorAll(".tab-item strong").forEach(function (el, i) {
      if (applied.has(el)) return;
      if (tabIcons[i] && !el.textContent.match(/[\u{1F300}-\u{1FAFF}]/u)) {
        el.textContent = tabIcons[i];
        applied.add(el);
      }
    });

    // 7. 头像
    var avatar = document.querySelector(".avatar");
    if (avatar && !applied.has(avatar)) {
      var img = document.createElement("img");
      img.src =
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face";
      img.alt = "头像";
      img.style.cssText =
        "width:100%;height:100%;object-fit:cover;border-radius:22px";
      avatar.textContent = "";
      avatar.appendChild(img);
      applied.add(avatar);
    }
  }

  // ============ 注入动画样式（只执行一次）============
  function injectStyles() {
    if (document.getElementById("enhance-styles")) return;
    var style = document.createElement("style");
    style.id = "enhance-styles";
    style.textContent = [
      "@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}",
      ".card,.shortcut,.list-item,.stat{animation:fadeInUp .5s ease forwards}",
      ".card:nth-child(1){animation-delay:.05s}",
      ".card:nth-child(2){animation-delay:.1s}",
      ".card:nth-child(3){animation-delay:.15s}",
      ".card:nth-child(4){animation-delay:.2s}",
      ".card-cover{transition:transform .3s ease}",
      ".card:hover .card-cover{transform:scale(1.02)}",
      ".shortcut:hover .shortcut-icon{transform:scale(1.08);transition:transform .2s ease}",
    ].join("");
    document.head.appendChild(style);
  }

  // ============ MutationObserver 持续监听 ============
  function startObserver() {
    var app = document.querySelector("#app");
    if (!app) return;

    var timer = null;
    var observer = new MutationObserver(function () {
      // 防抖：DOM 变化后 50ms 执行
      clearTimeout(timer);
      timer = setTimeout(applyEnhancements, 50);
    });

    observer.observe(app, { childList: true, subtree: true });

    // 首次执行
    applyEnhancements();
    injectStyles();
  }

  // ============ 启动 ============
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObserver);
  } else {
    startObserver();
  }
})();
