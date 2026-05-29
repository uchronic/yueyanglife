/**
 * 震泰康养 - 增强脚本
 * 注入真实图片、优化交互体验
 */
(function () {
  "use strict";

  // ============ 图片资源 ============
  const IMG_BASE = "./images/";
  const IMAGES = {
    // 基地封面 - 运河湾半岛酒店实景
    "cover-base-1": IMG_BASE + "base-exterior.jpg",
    "cover-base-2": IMG_BASE + "base-garden.jpg",
    // 理疗服务 - 大堂
    "cover-service": IMG_BASE + "lobby.jpg",
    // 课程活动 - 庭院
    "cover-course": IMG_BASE + "base-corridor.jpg",
    // 商城产品 - 客房
    "cover-product": IMG_BASE + "room-suite.jpg",
    // Hero 背景 - 酒店全景
    hero: IMG_BASE + "hero-view.jpg",
    // 太极/养生
    taichi: IMG_BASE + "base-garden.jpg",
    // 茶道
    tea: IMG_BASE + "lobby-2.jpg",
    // 森林疗愈
    forest: IMG_BASE + "base-corridor.jpg",
    // 温泉
    spa: IMG_BASE + "room-river.jpg",
    // 健康饮食
    healthy_food: IMG_BASE + "hero-view-2.jpg",
    // 瑜伽
    yoga: IMG_BASE + "base-garden.jpg",
    // 亲子活动
    family: IMG_BASE + "room-family.jpg",
    // 庭院/园林
    garden: IMG_BASE + "base-garden.jpg",
    // 登录页
    login_bg: IMG_BASE + "hero-view.jpg",
    // 客房
    "room-twin": IMG_BASE + "room-twin.jpg",
    "room-family": IMG_BASE + "room-family.jpg",
    "room-suite": IMG_BASE + "room-suite.jpg",
    "room-river": IMG_BASE + "room-river.jpg",
  };

  // 商品专属图片（按标题关键词匹配）
  const PRODUCT_IMAGES = {
    "五谷养生礼盒": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop",
    "适老护膝保暖套": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  };

  // ============ 注入图片到封面 ============
  function injectCoverImages() {
    const covers = document.querySelectorAll(".card-cover");
    covers.forEach((el) => {
      const classes = Array.from(el.classList);
      for (const cls of classes) {
        if (IMAGES[cls]) {
          el.style.backgroundImage = `url('${IMAGES[cls]}')`;
          el.style.backgroundSize = "cover";
          el.style.backgroundPosition = "center";
          el.style.transition = "transform 0.3s ease";
          break;
        }
      }
    });

    // 按商品标题匹配图片
    document.querySelectorAll(".card").forEach((card) => {
      const title = card.querySelector(".card-title, .detail-title");
      if (title) {
        const text = title.textContent.trim();
        for (const [keyword, imgUrl] of Object.entries(PRODUCT_IMAGES)) {
          if (text.includes(keyword)) {
            const cover = card.querySelector(".card-cover");
            if (cover) {
              cover.style.backgroundImage = `url('${imgUrl}')`;
              cover.style.backgroundSize = "cover";
              cover.style.backgroundPosition = "center";
            }
            break;
          }
        }
      }
    });
  }

  // ============ Hero 背景增强 ============
  function enhanceHero() {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.backgroundImage = `linear-gradient(135deg, rgba(110,139,116,0.88), rgba(79,103,85,0.82)), url('${IMAGES.hero}')`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
    }
  }

  // ============ 品牌标记增强 ============
  function enhanceBrandMark() {
    const mark = document.querySelector(".brand-mark");
    if (mark) {
      mark.innerHTML =
        '<svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%"><rect width="42" height="42" rx="14" fill="url(#g)"/><path d="M12 28c0-6 4-12 9-14 5 2 9 8 9 14" stroke="#fffaf0" stroke-width="2" fill="none"/><path d="M16 26c1-4 3-7 5-8 2 1 4 4 5 8" stroke="#fffaf0" stroke-width="1.5" fill="rgba(255,250,240,0.3)"/><circle cx="21" cy="16" r="2" fill="#fffaf0"/><defs><linearGradient id="g" x1="0" y1="0" x2="42" y2="42"><stop stop-color="#6e8b74"/><stop offset="1" stop-color="#bc9b6a"/></linearGradient></defs></svg>';
      mark.style.borderRadius = "14px";
      mark.style.overflow = "hidden";
    }
  }

  // ============ 快捷入口图标增强 ============
  function enhanceShortcutIcons() {
    const iconMap = {
      住: "🏨",
      疗: "💆",
      课: "🧘",
      购: "🛒",
      导: "🗺️",
      电: "📞",
      会: "👑",
      单: "📋",
    };
    document.querySelectorAll(".shortcut-icon").forEach((el) => {
      const text = el.textContent.trim();
      if (iconMap[text]) {
        el.textContent = iconMap[text];
        el.style.fontSize = "1.5rem";
        el.style.letterSpacing = "0";
      }
    });
  }

  // ============ 头像增强 ============
  function enhanceAvatar() {
    const avatar = document.querySelector(".avatar");
    if (avatar && !avatar.querySelector("img")) {
      const img = document.createElement("img");
      img.src =
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face";
      img.alt = "头像";
      img.style.cssText =
        "width:100%;height:100%;object-fit:cover;border-radius:22px";
      avatar.textContent = "";
      avatar.appendChild(img);
    }
  }

  // ============ 添加滚动动画 ============
  function addScrollAnimations() {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .card, .shortcut, .list-item, .stat {
        animation: fadeInUp 0.5s ease forwards;
      }
      .card:nth-child(1) { animation-delay: 0.05s; }
      .card:nth-child(2) { animation-delay: 0.1s; }
      .card:nth-child(3) { animation-delay: 0.15s; }
      .card:nth-child(4) { animation-delay: 0.2s; }
      .card-cover {
        transition: transform 0.3s ease;
      }
      .card:hover .card-cover {
        transform: scale(1.02);
      }
      .hero {
        transition: background-size 0.3s ease;
      }
      .shortcut:hover .shortcut-icon {
        transform: scale(1.08);
        transition: transform 0.2s ease;
      }
    `;
    document.head.appendChild(style);
  }

  // ============ 图片懒加载 ============
  function lazyLoadImages() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.dataset.bgImage) {
              el.style.backgroundImage = `url('${el.dataset.bgImage}')`;
              el.style.backgroundSize = "cover";
              el.style.backgroundPosition = "center";
              observer.unobserve(el);
            }
          }
        });
      },
      { rootMargin: "100px" }
    );

    document.querySelectorAll(".card-cover[data-bg-image]").forEach((el) => {
      observer.observe(el);
    });
  }

  // ============ 底部栏图标增强 ============
  function enhanceTabBar() {
    const tabIcons = ["🏠", "📦", "💆", "🛒", "👤"];
    document.querySelectorAll(".tab-item strong").forEach((el, i) => {
      if (tabIcons[i] && !el.textContent.match(/[\u{1F300}-\u{1FAFF}]/u)) {
        el.textContent = tabIcons[i];
      }
    });
  }

  // ============ 初始化 ============
  function init() {
    // 等待 DOM 渲染完成
    const observer = new MutationObserver(() => {
      const app = document.querySelector("#app");
      if (app && app.children.length > 0) {
        observer.disconnect();
        enhance();
      }
    });

    const app = document.querySelector("#app");
    if (app && app.children.length > 0) {
      enhance();
    } else {
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  function enhance() {
    injectCoverImages();
    enhanceHero();
    enhanceBrandMark();
    enhanceShortcutIcons();
    enhanceAvatar();
    addScrollAnimations();
    enhanceTabBar();

    // 路由切换时重新注入
    const pushState = history.pushState;
    history.pushState = function () {
      pushState.apply(this, arguments);
      setTimeout(() => {
        injectCoverImages();
        enhanceShortcutIcons();
        enhanceAvatar();
        enhanceTabBar();
      }, 100);
    };

    window.addEventListener("popstate", () => {
      setTimeout(() => {
        injectCoverImages();
        enhanceShortcutIcons();
        enhanceAvatar();
        enhanceTabBar();
      }, 100);
    });
  }

  // 启动
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
