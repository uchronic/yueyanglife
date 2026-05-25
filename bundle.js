const appData = {
  brand: {
    name: "震泰康养",
    subtitle: "多基地旅居与健康服务平台",
  },
  login: {
    title: "欢迎来到震泰康养",
    desc: "支持微信快捷登录、手机号验证码登录与会员信息同步。",
  },
  hero: {
    title: "一站式康养旅居与健康服务平台",
    desc: "为长者与家庭提供旅居预订、理疗预约、课程报名、康养商城与会员服务，页面更清晰，操作更安心。",
    notice:
      "当前展示已覆盖旅居套餐、理疗预约、课程报名与商城下单等核心场景，可用于业务方案演示与客户沟通。",
  },
  shortcuts: [
    { icon: "住", title: "旅居预订", desc: "看基地、选套餐、在线下单", route: "packages" },
    { icon: "疗", title: "理疗预约", desc: "按项目、理疗师、时段预约", route: "physio" },
    { icon: "课", title: "课程报名", desc: "日历查看每日课程安排", route: "courses" },
    { icon: "购", title: "精选商城", desc: "康养食品与适老好物", route: "shop" },
    { icon: "导", title: "基地导航", desc: "地图定位与路线引导", route: "bases" },
    { icon: "电", title: "一键拨号", desc: "总部与基地热线直达", route: "profile" },
    { icon: "会", title: "会员权益", desc: "积分、等级、专属优惠", route: "profile" },
    { icon: "单", title: "我的订单", desc: "套餐、理疗、课程、商城", route: "orders" },
  ],
  packageCategories: ["全部", "旅居养老套餐", "康养度假套餐", "亲子康养套餐"],
  courseCategories: ["全部", "养生运动", "知识课程"],
  productCategories: ["全部", "礼盒套装", "适老好物"],
  bases: [
    {
      id: "yunhewan",
      name: "运河湾半岛酒店",
      coverClass: "cover-base-1",
      tags: ["当前基地", "旅居养老", "康养度假"],
      desc: "面向长者的静养旅居基地，含景观客房、理疗空间、轻运动场地与日间课程活动。",
      meta: ["宿迁市湖滨片区", "支持月租/季度", "可导航到店"],
      facilities: ["景观客房", "理疗室", "养生餐厅", "多媒体教室", "庭院步道"],
      serviceHighlights: ["入住巡检", "长者客服", "课程联动", "定制旅居方案"],
      phone: "0527-88886666",
      address: "宿迁市湖滨新区康养大道 88 号",
    },
    {
      id: "senlin",
      name: "滨湖森林康养中心",
      coverClass: "cover-base-2",
      tags: ["森林疗愈", "康复护理", "亲子康养"],
      desc: "依托近郊林地环境打造的康养中心，适合家庭陪伴、康复调养与周末短住体验。",
      meta: ["近郊森林氧吧", "周末轻旅居", "可预约接驳"],
      facilities: ["康复训练区", "亲子活动区", "森林步道", "康养客房"],
      serviceHighlights: ["康复训练支持", "亲子共学活动", "轻疗愈休闲空间"],
      phone: "0527-88889999",
      address: "宿迁市湖滨新区森林路 18 号",
    },
  ],
  packages: [
    {
      id: "pkg-30days",
      baseId: "yunhewan",
      title: "30天静养旅居套餐",
      coverClass: "cover-base-1",
      tags: ["月租优选", "含晨练课程", "可定金支付"],
      text: "适合长期调养、陪伴式居住用户，含早餐、基础健康巡检与每周两次康养活动。",
      price: "¥8,980",
      note: "起 / 30天",
      meta: ["双人入住可选", "入住协议确认", "库存实时展示"],
      category: "旅居养老套餐",
      inventory: 12,
      agreement: "入住需确认康养旅居服务协议、入住须知与长者安全提示。",
      included: ["30天住宿", "每日早餐", "基础健康巡检", "每周 2 次课程体验"],
    },
    {
      id: "pkg-7days",
      baseId: "yunhewan",
      title: "7天康养度假套餐",
      coverClass: "cover-base-1",
      tags: ["短住体验", "节奏轻松"],
      text: "适合首次体验用户，覆盖住宿、欢迎检测、轻理疗体验与基地活动体验。",
      price: "¥2,680",
      note: "起 / 7天",
      meta: ["支持周租", "长者友好服务", "核销码入住"],
      category: "康养度假套餐",
      inventory: 20,
      agreement: "入住前确认预约时间、入住人信息与定金支付规则。",
      included: ["7天住宿", "欢迎检测", "轻理疗体验", "基地活动体验"],
    },
    {
      id: "pkg-qinzi",
      baseId: "senlin",
      title: "亲子康养周末营",
      coverClass: "cover-base-2",
      tags: ["亲子康养", "周末限定"],
      text: "面向子女陪伴式康养需求设计，适合双代同行体验轻疗愈与亲子互动课程。",
      price: "¥1,580",
      note: "起 / 2天1晚",
      meta: ["适合家庭同行", "课程组合包", "含亲子互动课程"],
      category: "亲子康养套餐",
      inventory: 8,
      agreement: "需确认同行人数、儿童信息和活动安全须知。",
      included: ["1晚住宿", "亲子活动", "家庭轻理疗", "特色早餐"],
    },
  ],
  physio: [
    {
      id: "phy-aijiu",
      baseId: "yunhewan",
      title: "中医艾灸调理",
      coverClass: "cover-service",
      tags: ["45分钟", "慢病调理", "可选理疗师"],
      text: "围绕日常疲劳、寒湿不适与慢养需求，支持按基地、日期、时段预约。",
      price: "¥168",
      note: "单次",
      meta: ["定金或全款", "短信/站内提醒", "完成后可评价"],
      therapists: ["李老师", "陈老师", "吴老师"],
      duration: "45 分钟",
      benefits: ["温养调理", "缓解疲劳", "改善循环"],
    },
    {
      id: "phy-tuina",
      baseId: "yunhewan",
      title: "肩颈舒缓推拿",
      coverClass: "cover-service",
      tags: ["60分钟", "热门项目"],
      text: "适合长时间久坐、肩颈僵硬人群，支持查看适用人群、功效与预约须知。",
      price: "¥238",
      note: "单次",
      meta: ["可选时段", "支持改期", "顾问协助安排"],
      therapists: ["王老师", "刘老师"],
      duration: "60 分钟",
      benefits: ["肩颈放松", "舒缓疲劳", "体态改善"],
    },
  ],
  courses: [
    {
      id: "course-baduanjin",
      baseId: "yunhewan",
      title: "晨间八段锦",
      coverClass: "cover-course",
      tags: ["养生运动", "每日固定班"],
      text: "适合入门长者，支持按基地查看课程日历与每日课程安排。",
      meta: ["09:00-09:40", "运河湾半岛酒店", "剩余 12 位"],
      teacher: "赵老师",
      schedule: "每日 09:00",
      location: "户外康养草坪",
      fee: "¥39",
      seatsLeft: 12,
    },
    {
      id: "course-smartphone",
      baseId: "yunhewan",
      title: "智能手机防诈骗课",
      coverClass: "cover-course",
      tags: ["知识课程", "高需求课程"],
      text: "围绕扫码、转账、防骗识别等高频场景，帮助长者安全使用智能手机。",
      meta: ["14:30-15:30", "多媒体教室", "报名中"],
      teacher: "孙老师",
      schedule: "周三 / 周五 14:30",
      location: "多媒体教室",
      fee: "¥59",
      seatsLeft: 20,
    },
  ],
  products: [
    {
      id: "product-grains",
      title: "五谷养生礼盒",
      coverClass: "cover-product",
      tags: ["礼盒套装", "可积分抵扣"],
      text: "适合作为节日伴手礼，支持加入购物车、地址选择、在线支付与物流跟踪。",
      price: "¥199",
      note: "包邮",
      meta: ["限时特惠", "会员价可见", "库存 86 件"],
      category: "礼盒套装",
      stock: 86,
      freight: "满 99 元包邮",
      specs: ["经典装", "节礼装"],
      pointsRule: "下单最高可使用 200 积分抵扣 20 元",
    },
    {
      id: "product-knee",
      title: "适老护膝保暖套",
      coverClass: "cover-product",
      tags: ["适老好物", "换季推荐"],
      text: "柔软透气，针对长者日常保暖场景设计，支持积分兑换与礼赠购买。",
      price: "¥89",
      note: "活动价",
      meta: ["库存充足", "支持团购扩展", "商城订单独立"],
      category: "适老好物",
      stock: 156,
      freight: "单件邮费 8 元",
      specs: ["均码", "加厚款"],
      pointsRule: "可直接积分兑换或现金 + 积分支付",
    },
  ],
  announcements: [
    "五月旅居月租优惠开启，部分套餐支持定金预订。",
    "本周新增太极与手工课，课程表已同步更新。",
    "商城上线长者节礼盒专区，可使用积分抵扣现金。",
  ],
  orderTypes: [
    { title: "旅居套餐订单", text: "查看待支付、待入住、已完成、退款中等状态。" },
    { title: "理疗预约订单", text: "支持查看时段信息、到店核验与服务评价。" },
    { title: "课程报名订单", text: "查看课程日期、报名状态与签到情况。" },
    { title: "商城订单", text: "查看发货、物流、签收、售后等流程。" },
  ],
  calendar: [
    { day: "一", date: "12", event: "八段锦" },
    { day: "二", date: "13", event: "书法课" },
    { day: "三", date: "14", event: "防诈骗课" },
    { day: "四", date: "15", event: "太极课" },
    { day: "五", date: "16", event: "声乐课" },
    { day: "六", date: "17", event: "手工课" },
    { day: "日", date: "18", event: "养生讲堂" },
  ],
  profile: {
    name: "王阿姨",
    level: "银龄会员",
    intro: "已绑定手机号，支持常用联系人、紧急联系人、积分记录与健康档案维护。",
    stats: [
      { value: "1,280", label: "会员积分" },
      { value: "6", label: "待使用权益" },
      { value: "12", label: "历史订单" },
    ],
  },
};

function mergeById(localItems, remoteItems, mapItem) {
  if (!Array.isArray(remoteItems) || !remoteItems.length) {
    return localItems;
  }

  return remoteItems.map((remoteItem, index) => {
    const localItem = localItems.find((item) => item.id === remoteItem.id) || localItems[index] || {};
    return mapItem(localItem, remoteItem, index);
  });
}

function formatPrice(value) {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  return typeof value === "number" ? `¥${value.toLocaleString("zh-CN")}` : value;
}

function applyRemoteHomeContent(home) {
  if (!home) {
    return;
  }

  if (Array.isArray(home.announcements) && home.announcements.length) {
    appData.announcements = home.announcements;
    appData.hero.notice = home.announcements[0];
  }

  appData.bases = mergeById(appData.bases, home.bases, (local, remote, index) => ({
    ...local,
    ...remote,
    coverClass: local.coverClass || (index % 2 === 0 ? "cover-base-1" : "cover-base-2"),
    desc:
      local.desc ||
      `${remote.name} 支持基地信息、旅居套餐、理疗服务和课程内容的统一展示。`,
    meta: local.meta || [remote.city, remote.address, "多基地联动展示"],
    facilities: local.facilities || ["基地客房", "康养空间", "活动区域"],
    serviceHighlights: local.serviceHighlights || ["多基地服务", "订单统一管理", "内容联动展示"],
    phone: local.phone || "服务热线待补充",
  }));

  appData.packages = mergeById(appData.packages, home.packages, (local, remote) => ({
    ...local,
    ...remote,
    coverClass: local.coverClass || "cover-base-1",
    price: formatPrice(remote.price),
    note: local.note || "起 / 套餐",
    text:
      local.text ||
      `${remote.title} 支持按基地、分类、库存和入住时间进行预订。`,
    meta: local.meta || [`库存 ${remote.inventory}`, remote.category, "支持在线预订"],
    included: local.included || ["住宿服务", "基础配套", "健康管家服务"],
    agreement: local.agreement || "需确认入住协议与安全须知。",
  }));

  appData.physio = mergeById(appData.physio, home.physio, (local, remote) => ({
    ...local,
    ...remote,
    coverClass: local.coverClass || "cover-service",
    price: formatPrice(remote.price),
    note: local.note || "单次",
    text:
      local.text ||
      `${remote.title} 支持按基地、理疗师、时段进行预约。`,
    meta: local.meta || [remote.category, "支持预约提醒", "服务后可评价"],
    therapists: local.therapists || ["待排班理疗师"],
    duration: local.duration || "60 分钟",
    benefits: local.benefits || ["调理养护", "舒缓疲劳"],
  }));

  appData.courses = mergeById(appData.courses, home.courses, (local, remote) => ({
    ...local,
    ...remote,
    coverClass: local.coverClass || "cover-course",
    fee: formatPrice(remote.fee),
    text:
      local.text ||
      `${remote.title} 支持在线报名、课程日历与状态查看。`,
    meta: local.meta || [remote.category, "支持报名", "课程状态同步"],
    teacher: local.teacher || "待配置讲师",
    schedule: local.schedule || "待配置时间",
    location: local.location || "待配置地点",
    seatsLeft: local.seatsLeft || 20,
  }));

  appData.products = mergeById(appData.products, home.products, (local, remote) => ({
    ...local,
    ...remote,
    coverClass: local.coverClass || "cover-product",
    price: formatPrice(remote.price),
    note: local.note || "商城在售",
    text:
      local.text ||
      `${remote.title} 支持购物车、下单、物流和积分抵扣。`,
    meta: local.meta || [remote.category, `库存 ${remote.stock}`, "支持在线下单"],
    freight: local.freight || "运费规则待配置",
    specs: local.specs || ["默认规格"],
    pointsRule: local.pointsRule || "积分规则待配置",
  }));
}

function mapRemoteUserToProfile(user) {
  if (!user) {
    return null;
  }

  return {
    name: user.name,
    mobile: user.mobile,
    level: user.level,
    points: user.points,
  };
}

function mapRemoteOrders(orders) {
  if (!Array.isArray(orders)) {
    return [];
  }

  return orders.map((item) => ({
    ...item,
    amount: formatPrice(item.amount),
    detail: item.detail || `${item.title} 当前状态：${item.status}`,
  }));
}

function createStore() {
  const state = {
    fontScaleIndex: 1,
    fontScaleValues: [16, 17, 19],
    route: { name: "home", params: {} },
    currentUser: null,
    cart: [],
    apiStatus: "idle",
    orders: [
      {
        id: "ORD-PKG-001",
        type: "旅居套餐",
        title: "30天静养旅居套餐",
        status: "待支付",
        amount: "¥8,980",
        detail: "已锁定运河湾半岛酒店 30 天静养旅居档期，等待支付定金。",
      },
      {
        id: "ORD-PHY-003",
        type: "理疗预约",
        title: "中医艾灸调理",
        status: "已预约",
        amount: "¥168",
        detail: "已预约 2026-05-20 15:00，理疗师：李老师。",
      },
    ],
    admin: {
      dashboard: null,
      resources: {
        bases: [],
        packages: [],
        courses: [],
        products: [],
        orders: [],
      },
    },
    searchResults: [],
    searchKeyword: "",
    submitting: {
      login: false,
      package: false,
      physio: false,
      course: false,
      checkout: false,
      search: false,
      adminLoad: false,
      adminBase: false,
      adminPackage: false,
      adminCourse: false,
      adminProduct: false,
      adminOrder: false,
    },
    drafts: {
      login: {
        mobile: "13800000000",
        captcha: "123456",
      },
      packageBooking: {
        name: "王阿姨",
        phone: "13800000000",
        stayDate: "2026-05-22",
      },
      physioBooking: {
        name: "王阿姨",
        phone: "13800000000",
        date: "2026-05-20",
        therapist: "李老师",
        slot: "15:00",
      },
      courseBooking: {
        name: "王阿姨",
        phone: "13800000000",
      },
      checkout: {
        name: "王阿姨",
        phone: "13800000000",
      },
      adminBase: {
        name: "苏州康养示范基地",
        city: "苏州",
        address: "苏州市吴中区康养大道 66 号",
        tags: "江南旅居, 康养度假",
      },
      adminPackage: {
        title: "14天深度康养套餐",
        baseId: "yunhewan",
        category: "康养度假套餐",
        price: "3680",
        inventory: "18",
      },
      adminCourse: {
        title: "午间养生拉伸课",
        baseId: "yunhewan",
        category: "养生运动",
        fee: "29",
      },
      adminProduct: {
        title: "低糖营养燕麦粉",
        category: "适老好物",
        price: "69",
        stock: "120",
      },
      adminOrder: {
        status: "已确认",
      },
    },
    filters: {
      packageCategory: "全部",
      courseCategory: "全部",
      productCategory: "全部",
      keyword: "",
    },
    flash: "",
  };

  const listeners = new Set();

  function notify() {
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function setRoute(name, params = {}) {
    state.route = { name, params };
    notify();
  }

  function cycleFontScale() {
    state.fontScaleIndex = (state.fontScaleIndex + 1) % state.fontScaleValues.length;
    notify();
  }

  function setApiStatus(status) {
    state.apiStatus = status;
    notify();
  }

  function setCurrentUser(user) {
    state.currentUser = user;
    notify();
  }

  function setOrders(orders) {
    state.orders = orders;
    notify();
  }

  function setAdminDashboard(dashboard) {
    state.admin.dashboard = dashboard;
    notify();
  }

  function setAdminResources(resources) {
    state.admin.resources = resources;
    notify();
  }

  function setSearchKeyword(keyword) {
    state.searchKeyword = keyword;
    notify();
  }

  function setSearchResults(results) {
    state.searchResults = results;
    notify();
  }

  function setSubmitting(key, value) {
    state.submitting[key] = value;
    notify();
  }

  function addToCart(productId) {
    const product = appData.products.find((item) => item.id === productId);
    if (!product) {
      return;
    }

    const existing = state.cart.find((item) => item.productId === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        productId,
        title: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    state.flash = `${product.title} 已加入购物车`;
    notify();
  }

  function clearCart() {
    state.cart = [];
    notify();
  }

  function updateCartQuantity(productId, delta) {
    const item = state.cart.find((entry) => entry.productId === productId);
    if (!item) {
      return;
    }

    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter((entry) => entry.productId !== productId);
    }
    notify();
  }

  function applyLoginSuccess(user) {
    state.currentUser = {
      name: user.name,
      mobile: user.mobile,
      level: user.level,
      points: user.points,
    };
    state.flash = "登录成功，欢迎回来";
    setRoute("profile");
  }

  function prependOrder(order) {
    state.orders = [order, ...state.orders.filter((item) => item.id !== order.id)];
    notify();
  }

  function applyCheckoutSuccess(order) {
    prependOrder(order);
    state.flash = "订单提交成功，等待发货";
    state.cart = [];
    setRoute("orders");
  }

  function applyOrderSuccess(order, message, routeName = "orders") {
    prependOrder(order);
    state.flash = message;
    setRoute(routeName);
  }

  function setFilter(key, value) {
    state.filters[key] = value;
    if (key === "keyword") {
      state.searchKeyword = value;
    }
    notify();
  }

  function clearFlash() {
    state.flash = "";
  }

  function setFlash(message) {
    state.flash = message;
    notify();
  }

  function updateDraft(section, values) {
    state.drafts[section] = {
      ...state.drafts[section],
      ...values,
    };
    notify();
  }

  return {
    state,
    subscribe,
    setRoute,
    cycleFontScale,
    setApiStatus,
    setCurrentUser,
    setOrders,
    setAdminDashboard,
    setAdminResources,
    setSearchKeyword,
    setSearchResults,
    setSubmitting,
    addToCart,
    clearCart,
    updateCartQuantity,
    applyLoginSuccess,
    applyCheckoutSuccess,
    applyOrderSuccess,
    setFilter,
    clearFlash,
    setFlash,
    updateDraft,
  };
}

function getAppVariant() {
  return globalThis.__APP_VARIANT__ || "default";
}

function isClientDemo() {
  return getAppVariant() === "client-demo";
}

function renderTopbar({ brand, fontScaleIndex, apiStatus }) {
  const demoMode = isClientDemo();
  const apiLabel =
    apiStatus === "connected"
      ? "接口已连接"
      : apiStatus === "offline"
        ? "本地演示"
        : "正在同步";

  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark" aria-hidden="true"></div>
        <div>
          <div class="brand-title">${brand.name}</div>
          <div class="brand-subtitle">${brand.subtitle}${demoMode ? "" : ` · ${apiLabel}`}</div>
        </div>
      </div>
      <div class="topbar-actions">
        <button class="search-pill" type="button" data-nav="search">搜索</button>
        <button class="font-toggle" type="button" data-action="cycle-font">A${fontScaleIndex + 1}</button>
      </div>
    </header>
  `;
}

function renderBottomNav(routeName, cartCount) {
  const activeMap = {
    "base-detail": "bases",
    "package-detail": "packages",
    "physio-detail": "physio",
    "course-detail": "courses",
    "product-detail": "shop",
    cart: "shop",
    checkout: "shop",
  };
  const activeRoute = activeMap[routeName] || routeName;
  const items = [
    { key: "home", icon: "⌂", label: "首页" },
    { key: "packages", icon: "♨", label: "旅居" },
    { key: "physio", icon: "✚", label: "理疗" },
    { key: "shop", icon: "◎", label: `商城${cartCount ? `(${cartCount})` : ""}` },
    { key: "profile", icon: "☺", label: "我的" },
  ];

  return `
    <nav class="floating-bar" aria-label="底部导航">
      ${items
        .map(
          (item) => `
            <button
              class="tab-item ${activeRoute === item.key ? "active" : ""}"
              type="button"
              data-nav="${item.key}"
            >
              <strong>${item.icon}</strong>${item.label}
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderShell({ topbar, content, bottomNav, flash }) {
  return `
    <main class="shell">
      ${topbar}
      ${flash ? `<div class="toast">${flash}</div>` : ""}
      ${content}
    </main>
    ${bottomNav}
  `;
}

function joinMeta(items = []) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function joinChips(items = []) {
  return items.map((item) => `<span class="chip">${item}</span>`).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderFeatureCard(item, options = {}) {
  const {
    detailAction = "查看详情",
    actionRoute,
    actionId,
    showPrice = true,
  } = options;

  return `
    <article class="card">
      <div class="card-cover ${item.coverClass}"></div>
      <div class="chip-row">${joinChips(item.tags)}</div>
      <h3 class="card-title">${item.title || item.name}</h3>
      <p class="card-text">${item.text || item.desc}</p>
      <div class="meta-row">${joinMeta(item.meta || [])}</div>
      <div class="price-row">
        ${
          showPrice
            ? `
          <div>
            <div class="price-main">${item.price || ""}</div>
            <div class="price-note">${item.note || "支持在线查看与提交"}</div>
          </div>
        `
            : `<div class="price-note">${item.note || "支持查看详情与在线报名"}</div>`
        }
        <button
          class="outline-btn"
          type="button"
          data-nav="${actionRoute}"
          ${actionId ? `data-id="${actionId}"` : ""}
        >${detailAction}</button>
      </div>
    </article>
  `;
}

function renderListBlock(items) {
  return `
    <div class="list">
      ${items
        .map(
          (item) => `
            <div class="list-item">
              <div class="list-item-title">${item.title}</div>
              <div class="list-item-text">${item.text}</div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderCalendar(items) {
  return `
    <div class="calendar">
      ${items
        .map(
          (item) => `
            <div class="calendar-day">
              <strong>${item.day} ${item.date}</strong>
              <span class="calendar-event">${item.event}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSection({ title, subtitle, linkLabel, linkRoute, content }) {
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">${title}</h2>
          ${subtitle ? `<div class="section-subtitle">${subtitle}</div>` : ""}
        </div>
        ${
          linkLabel
            ? `<button class="section-link button-link" type="button" data-nav="${linkRoute}">${linkLabel}</button>`
            : ""
        }
      </div>
      ${content}
    </section>
  `;
}

function renderHero(hero) {
  return `
    <section class="hero">
      <div class="hero-label">康养旅居 · 健康服务 · 长者友好</div>
      <h1 class="hero-title">${hero.title}</h1>
      <p class="hero-desc">${hero.desc}</p>
      <div class="hero-actions">
        <button class="btn btn-primary" type="button" data-nav="packages">立即预订旅居</button>
        <button class="btn btn-secondary" type="button" data-nav="courses">查看今日课程</button>
      </div>
    </section>
  `;
}

function renderNotice(text) {
  return `
    <div class="notice-strip">
      <div class="notice-title">平台公告</div>
      <div>${text}</div>
    </div>
  `;
}

function renderShortcut(item) {
  return `
    <button class="shortcut" type="button" data-nav="${item.route}">
      <div class="shortcut-icon">${item.icon}</div>
      <div class="shortcut-title">${item.title}</div>
      <div class="shortcut-desc">${item.desc}</div>
    </button>
  `;
}

function renderHomePage() {
  const demoMode = isClientDemo();

  return `
    ${renderHero(appData.hero)}
    ${renderNotice(appData.hero.notice)}
    ${renderSection({
      title: "快捷入口",
      subtitle: "把高频功能放在第一屏，降低长者操作成本",
      content: `<div class="grid-shortcuts">${appData.shortcuts.map(renderShortcut).join("")}</div>`,
    })}
    ${renderSection({
      title: "热门基地",
      subtitle: demoMode ? "覆盖旅居养老、康养度假与亲子康养等场景" : "支持后台持续新增基地，前端自动展示",
      linkLabel: "查看全部",
      linkRoute: "bases",
      content: `<div class="cards">${appData.bases
        .map((item) => renderFeatureCard(item, { actionRoute: "base-detail", actionId: item.id, showPrice: false }))
        .join("")}</div>`,
    })}
    ${renderSection({
      title: "旅居套餐",
      subtitle: demoMode ? "支持短住体验、长住静养和家庭同行等多类产品组合" : "按日租、周租、月租、季度与年套餐扩展",
      linkLabel: "更多套餐",
      linkRoute: "packages",
      content: `<div class="cards">${appData.packages
        .slice(0, 2)
        .map((item) => renderFeatureCard(item, { actionRoute: "package-detail", actionId: item.id }))
        .join("")}</div>`,
    })}
    ${renderSection({
      title: "理疗预约",
      subtitle: demoMode ? "覆盖艾灸、推拿等健康调理服务，支持灵活预约" : "项目、理疗师、日期与时段均可配置",
      linkLabel: "预约服务",
      linkRoute: "physio",
      content: `<div class="cards">${appData.physio
        .map((item) => renderFeatureCard(item, { actionRoute: "physio-detail", actionId: item.id }))
        .join("")}</div>`,
    })}
    ${renderSection({
      title: "精品课程",
      subtitle: demoMode ? "整合养生运动、兴趣课程与长者数字素养内容" : "文娱、养生、智能知识类课程统一报名",
      linkLabel: "课程日历",
      linkRoute: "courses",
      content: `<div class="cards">${appData.courses
        .map((item) =>
          renderFeatureCard(item, {
            actionRoute: "course-detail",
            actionId: item.id,
            showPrice: false,
          }),
        )
        .join("")}</div>`,
    })}
    ${renderSection({
      title: "一周课程安排",
      subtitle: demoMode ? "帮助长者和家属提前规划每日活动与课程参与节奏" : "后续可接真实课程日历接口",
      content: renderCalendar(appData.calendar),
    })}
    ${renderSection({
      title: "悦养精选商城",
      subtitle: demoMode ? "适老健康商品与节礼礼盒统一展示与购买" : "支持购物车、积分抵扣、秒杀与物流跟踪",
      linkLabel: "去选购",
      linkRoute: "shop",
      content: `<div class="cards">${appData.products
        .map((item) => renderFeatureCard(item, { actionRoute: "product-detail", actionId: item.id }))
        .join("")}</div>`,
    })}
    ${renderSection({
      title: "订单中心",
      subtitle: demoMode ? "统一查看旅居、理疗、课程与商城订单进度" : "多品类订单统一归档，便于查看与售后",
      linkLabel: "查看订单",
      linkRoute: "orders",
      content: renderListBlock(appData.orderTypes),
    })}
    ${renderSection({
      title: "平台公告",
      subtitle: demoMode ? "用于展示活动通知、课程更新与运营信息" : "后续由后台轮播、公告、素材管理统一维护",
      content: `
        <div class="list">
          ${appData.announcements
            .map(
              (text) => `
                <div class="list-item">
                  <div class="list-item-text">${text}</div>
                </div>
              `,
            )
            .join("")}
        </div>
      `,
    })}
    <div class="footer-note">
      ${
        demoMode
          ? "本演示版重点呈现康养旅居、理疗预约、课程报名、商城购买与会员服务的一体化体验。"
          : "当前已经进入可继续开发的正式前端骨架阶段。<br />下一步可继续接入 Vue3、真实接口、支付与后台管理系统。"
      }
    </div>
  `;
}

function renderBasesPage() {
  const demoMode = isClientDemo();

  return `
    ${renderSection({
      title: "康养基地",
      subtitle: demoMode ? "覆盖城市旅居、森林疗愈与亲子同行等康养场景" : "支持后台新增基地、修改基地资料和前台自动同步展示",
      content: `<div class="cards">${appData.bases
        .map((item) =>
          renderFeatureCard(item, {
            actionRoute: "base-detail",
            actionId: item.id,
            showPrice: false,
          }),
        )
        .join("")}</div>`,
    })}
  `;
}

function renderBaseDetailPage(baseId) {
  const demoMode = isClientDemo();
  const base = appData.bases.find((item) => item.id === baseId) || appData.bases[0];
  const relatedPackages = appData.packages.filter((item) => item.baseId === base.id);

  return `
    <section class="section">
      <button class="back-link" type="button" data-nav="bases">返回基地列表</button>
      <article class="card detail-card">
        <div class="card-cover ${base.coverClass}"></div>
        <div class="chip-row">${base.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        <h2 class="detail-title">${base.name}</h2>
        <p class="card-text">${base.desc}</p>
        <div class="meta-row">${base.meta.map((item) => `<span>${item}</span>`).join("")}</div>
        <div class="detail-grid">
          <div class="detail-block">
            <h3>配套设施</h3>
            <ul class="detail-list">${base.facilities.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div class="detail-block">
            <h3>服务亮点</h3>
            <ul class="detail-list">${base.serviceHighlights.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="info-panel">
          <div><strong>地址：</strong>${base.address}</div>
          <div><strong>电话：</strong>${base.phone}</div>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" data-nav="packages">查看旅居套餐</button>
          <button class="btn btn-secondary" type="button" data-nav="physio">查看理疗服务</button>
        </div>
      </article>
    </section>

    ${renderSection({
      title: "关联套餐",
      subtitle: demoMode ? "按基地查看适配的旅居产品与入住方案" : "后续按基地自动拉取可售套餐",
      content: `<div class="cards">${relatedPackages
        .map((item) =>
          renderFeatureCard(item, {
            actionRoute: "package-detail",
            actionId: item.id,
          }),
        )
        .join("")}</div>`,
    })}
  `;
}

function renderTextField({ label, name, value, placeholder }) {
  return `
    <label class="field">
      <span class="field-label">${label}</span>
      <input
        class="field-input"
        type="text"
        name="${name}"
        value="${escapeHtml(value || "")}"
        placeholder="${placeholder || ""}"
      />
    </label>
  `;
}

function renderDateField({ label, name, value }) {
  return `
    <label class="field">
      <span class="field-label">${label}</span>
      <input class="field-input" type="date" name="${name}" value="${escapeHtml(value || "")}" />
    </label>
  `;
}

function renderSelectField({ label, name, value, options }) {
  return `
    <label class="field">
      <span class="field-label">${label}</span>
      <select class="field-input" name="${name}">
        ${options
          .map(
            (option) => `
              <option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${option}</option>
            `,
          )
          .join("")}
      </select>
    </label>
  `;
}

function renderSubmitBar(buttonText, action, id) {
  return `
    <div class="submit-bar">
      <button class="btn btn-primary full-width" type="button" data-action="${action}" data-id="${id}">
        ${buttonText}
      </button>
    </div>
  `;
}

function renderPackageDetailPage(packageId, draft, isSubmitting) {
  const demoMode = isClientDemo();
  const pkg = appData.packages.find((item) => item.id === packageId) || appData.packages[0];
  const base = appData.bases.find((item) => item.id === pkg.baseId);

  return `
    <section class="section">
      <button class="back-link" type="button" data-nav="packages">返回套餐列表</button>
      <article class="card detail-card">
        <div class="card-cover ${pkg.coverClass}"></div>
        <div class="chip-row">${pkg.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        <h2 class="detail-title">${pkg.title}</h2>
        <p class="card-text">${pkg.text}</p>
        <div class="price-main">${pkg.price}</div>
        <div class="price-note">${pkg.note}</div>
        <div class="meta-row">${pkg.meta.map((item) => `<span>${item}</span>`).join("")}</div>
        <div class="detail-grid">
          <div class="detail-block">
            <h3>套餐内容</h3>
            <ul class="detail-list">${pkg.included.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div class="detail-block">
            <h3>预订信息</h3>
            <ul class="detail-list">
              <li>所属基地：${base?.name || "未配置"}</li>
              <li>套餐分类：${pkg.category}</li>
              <li>剩余库存：${pkg.inventory}</li>
            </ul>
          </div>
        </div>
        <div class="info-panel">
          <strong>入住协议：</strong>${pkg.agreement}
        </div>
      </article>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">填写预订信息</h2>
          <div class="section-subtitle">${demoMode ? "提交信息后将进入顾问确认与入住排期流程" : "当前版本已接入真实预约提交接口"}</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="package-booking">
          ${renderTextField({
            label: "入住人姓名",
            name: "name",
            value: draft.name,
            placeholder: "请输入姓名",
          })}
          ${renderTextField({
            label: "联系电话",
            name: "phone",
            value: draft.phone,
            placeholder: "请输入手机号",
          })}
          ${renderDateField({
            label: "计划入住日期",
            name: "stayDate",
            value: draft.stayDate,
          })}
        </div>
        ${renderSubmitBar(isSubmitting ? "正在提交预订..." : "提交旅居预订", "submit-package", pkg.id)}
      </div>
    </section>
  `;
}

function renderPhysioPage() {
  return renderSection({
    title: "健康理疗预约",
    subtitle: "支持按项目、理疗师、日期和时段预约",
    content: `<div class="cards">${appData.physio
      .map((item) =>
        renderFeatureCard(item, {
          actionRoute: "physio-detail",
          actionId: item.id,
        }),
      )
      .join("")}</div>`,
  });
}

function renderPhysioDetailPage(physioId, draft, isSubmitting) {
  const demoMode = isClientDemo();
  const item = appData.physio.find((entry) => entry.id === physioId) || appData.physio[0];

  return `
    <section class="section">
      <button class="back-link" type="button" data-nav="physio">返回理疗列表</button>
      <article class="card detail-card">
        <div class="card-cover ${item.coverClass}"></div>
        <div class="chip-row">${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        <h2 class="detail-title">${item.title}</h2>
        <p class="card-text">${item.text}</p>
        <div class="price-main">${item.price}</div>
        <div class="price-note">${item.note}</div>
        <div class="detail-grid">
          <div class="detail-block">
            <h3>项目功效</h3>
            <ul class="detail-list">${item.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}</ul>
          </div>
          <div class="detail-block">
            <h3>预约说明</h3>
            <ul class="detail-list">
              <li>时长：${item.duration}</li>
              <li>支持定金 / 全款</li>
              <li>理疗后可在线评价</li>
            </ul>
          </div>
        </div>
      </article>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">预约信息</h2>
          <div class="section-subtitle">${demoMode ? "填写预约信息后将由顾问确认服务时段" : "当前版本已接入真实预约提交流程"}</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="physio-booking">
          ${renderTextField({
            label: "预约人姓名",
            name: "name",
            value: draft.name,
            placeholder: "请输入姓名",
          })}
          ${renderTextField({
            label: "联系电话",
            name: "phone",
            value: draft.phone,
            placeholder: "请输入手机号",
          })}
          ${renderDateField({
            label: "预约日期",
            name: "date",
            value: draft.date,
          })}
          ${renderSelectField({
            label: "理疗师",
            name: "therapist",
            value: draft.therapist || item.therapists[0],
            options: item.therapists,
          })}
          ${renderSelectField({
            label: "预约时段",
            name: "slot",
            value: draft.slot,
            options: ["10:00", "15:00", "16:30", "18:00"],
          })}
        </div>
        ${renderSubmitBar(isSubmitting ? "正在预约..." : "确认预约理疗", "submit-physio", item.id)}
      </div>
    </section>
  `;
}

function renderCourseDetailPage(courseId, draft, isSubmitting) {
  const demoMode = isClientDemo();
  const course = appData.courses.find((entry) => entry.id === courseId) || appData.courses[0];

  return `
    <section class="section">
      <button class="back-link" type="button" data-nav="courses">返回课程列表</button>
      <article class="card detail-card">
        <div class="card-cover ${course.coverClass}"></div>
        <div class="chip-row">${course.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        <h2 class="detail-title">${course.title}</h2>
        <p class="card-text">${course.text}</p>
        <div class="detail-grid">
          <div class="detail-block">
            <h3>授课信息</h3>
            <ul class="detail-list">
              <li>老师：${course.teacher}</li>
              <li>时间：${course.schedule}</li>
              <li>地点：${course.location}</li>
            </ul>
          </div>
          <div class="detail-block">
            <h3>报名信息</h3>
            <ul class="detail-list">
              <li>课程费用：${course.fee}</li>
              <li>剩余名额：${course.seatsLeft}</li>
              <li>支持查看报名状态</li>
            </ul>
          </div>
        </div>
      </article>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">在线报名</h2>
          <div class="section-subtitle">${demoMode ? "填写信息后可完成课程报名与开课提醒登记" : "当前版本已接入真实报名接口"}</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="course-booking">
          ${renderTextField({
            label: "报名人姓名",
            name: "name",
            value: draft.name,
            placeholder: "请输入姓名",
          })}
          ${renderTextField({
            label: "联系电话",
            name: "phone",
            value: draft.phone,
            placeholder: "请输入手机号",
          })}
        </div>
        ${renderSubmitBar(isSubmitting ? "正在提交报名..." : "提交课程报名", "submit-course", course.id)}
      </div>
    </section>
  `;
}

function renderCategoryTabs(categories, activeCategory, filterKey) {
  return `
    <div class="filter-row">
      ${categories
        .map(
          (category) => `
            <button
              class="filter-chip ${category === activeCategory ? "active" : ""}"
              type="button"
              data-filter="${filterKey}"
              data-value="${category}"
            >${category}</button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderShopPage(cart, filters) {
  const demoMode = isClientDemo();
  const cartSummary = cart.length
    ? `当前购物车 ${cart.reduce((sum, item) => sum + item.quantity, 0)} 件商品`
    : "购物车为空，适合继续逛商城";
  const keyword = filters.keyword.trim();
  const products = appData.products.filter((item) => {
    const categoryMatch = filters.productCategory === "全部" || item.category === filters.productCategory;
    const keywordMatch =
      !keyword || [item.title, item.text, item.category, ...(item.tags || [])].join(" ").includes(keyword);
    return categoryMatch && keywordMatch;
  });

  return `
    ${renderSection({
      title: "悦养精选商城",
      subtitle: demoMode ? `${cartSummary}，支持商品浏览、加购与下单体验` : `${cartSummary}，已接入真实下单接口`,
      content: `
        ${renderCategoryTabs(appData.productCategories, filters.productCategory, "productCategory")}
        <div class="cards">${
          products.length
            ? products
                .map((item) =>
                  renderFeatureCard(item, {
                    actionRoute: "product-detail",
                    actionId: item.id,
                  }),
                )
                .join("")
            : `<div class="card"><div class="empty-state">当前筛选条件下暂无商品。</div></div>`
        }</div>
      `,
    })}
  `;
}

function renderProductDetailPage(productId) {
  const product = appData.products.find((item) => item.id === productId) || appData.products[0];

  return `
    <section class="section">
      <button class="back-link" type="button" data-nav="shop">返回商城</button>
      <article class="card detail-card">
        <div class="card-cover ${product.coverClass}"></div>
        <div class="chip-row">${product.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
        <h2 class="detail-title">${product.title}</h2>
        <p class="card-text">${product.text}</p>
        <div class="price-main">${product.price}</div>
        <div class="price-note">${product.note}</div>
        <div class="detail-grid">
          <div class="detail-block">
            <h3>商品规格</h3>
            <ul class="detail-list">${product.specs.map((spec) => `<li>${spec}</li>`).join("")}</ul>
          </div>
          <div class="detail-block">
            <h3>购买说明</h3>
            <ul class="detail-list">
              <li>库存：${product.stock}</li>
              <li>运费：${product.freight}</li>
              <li>积分规则：${product.pointsRule}</li>
            </ul>
          </div>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" data-action="add-cart" data-id="${product.id}">
            加入购物车
          </button>
          <button class="btn btn-secondary" type="button" data-nav="cart">查看购物车</button>
        </div>
      </article>
    </section>
  `;
}

function renderCartPage(cart) {
  const total = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^\d.]/g, "")) * item.quantity, 0);

  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">购物车</h2>
          <div class="section-subtitle">支持增减数量并进入结算</div>
        </div>
      </div>
      <div class="card">
        ${
          cart.length
            ? `
          <div class="cart-list">
            ${cart
              .map(
                (item) => `
                  <div class="cart-item">
                    <div>
                      <div class="list-item-title">${item.title}</div>
                      <div class="list-item-text">${item.price} x ${item.quantity}</div>
                    </div>
                    <div class="cart-actions">
                      <button class="mini-btn" type="button" data-action="cart-minus" data-id="${item.productId}">-</button>
                      <span>${item.quantity}</span>
                      <button class="mini-btn" type="button" data-action="cart-plus" data-id="${item.productId}">+</button>
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="cart-summary">
            <strong>合计：¥${total.toFixed(2)}</strong>
            <button class="mini-btn" type="button" data-nav="checkout">去结算</button>
          </div>
        `
            : `<div class="empty-state">购物车还是空的，可以先去商城挑选商品。</div>`
        }
      </div>
    </section>
  `;
}

function renderCheckoutPage(cart, draft, isSubmitting) {
  const demoMode = isClientDemo();
  const total = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^\d.]/g, "")) * item.quantity, 0);

  return `
    <section class="section">
      <button class="back-link" type="button" data-nav="cart">返回购物车</button>
      <article class="card detail-card">
        <h2 class="detail-title">确认结算</h2>
        <p class="card-text">${demoMode ? "确认收货信息后即可完成下单演示，后续可继续扩展在线支付与物流查询。" : "当前版本已接入真实下单接口，提交后会在订单中心生成商城订单。"}</p>
        <div class="cart-list">
          ${cart
            .map(
              (item) => `
                <div class="cart-item">
                  <div>
                    <div class="list-item-title">${item.title}</div>
                    <div class="list-item-text">${item.price} x ${item.quantity}</div>
                  </div>
                  <strong>${item.quantity}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="info-panel"><strong>订单合计：</strong>¥${total.toFixed(2)}</div>
      </article>
    </section>

    <section class="section">
      <div class="card">
        <div class="form-grid" data-form="checkout-form">
          ${renderTextField({
            label: "收货人姓名",
            name: "name",
            value: draft.name,
            placeholder: "请输入收货人姓名",
          })}
          ${renderTextField({
            label: "联系电话",
            name: "phone",
            value: draft.phone,
            placeholder: "请输入联系电话",
          })}
        </div>
        ${renderSubmitBar(isSubmitting ? "正在提交订单..." : "提交商城订单", "submit-checkout")}
      </div>
    </section>
  `;
}

function renderOrdersPage(orders) {
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">我的订单</h2>
          <div class="section-subtitle">统一汇总旅居、理疗、课程、商城订单</div>
        </div>
      </div>
      <div class="list">
        ${orders
          .map(
            (order) => `
              <div class="list-item">
                <div class="order-row">
                  <div>
                    <div class="list-item-title">${order.title}</div>
                    <div class="list-item-text">${order.type} · ${order.id}</div>
                  </div>
                  <span class="status-pill">${order.status}</span>
                </div>
                <div class="order-footer">
                  <span>金额：${order.amount}</span>
                  <button class="mini-btn" type="button" data-nav="order-detail" data-id="${order.id}">查看</button>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderOrderDetailPage(order) {
  return `
    <section class="section">
      <button class="back-link" type="button" data-nav="orders">返回订单列表</button>
      <article class="card detail-card">
        <div class="chip-row">
          <span class="chip">${order.type}</span>
          <span class="chip">${order.status}</span>
        </div>
        <h2 class="detail-title">${order.title}</h2>
        <div class="info-panel">
          <div><strong>订单号：</strong>${order.id}</div>
          <div><strong>金额：</strong>${order.amount}</div>
        </div>
        <div class="detail-block detail-block-alone">
          <h3>订单进度</h3>
          <p class="card-text">${order.detail || "订单详情待补充。"}</p>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" type="button" data-nav="profile">联系管家</button>
          <button class="btn btn-secondary" type="button" data-nav="home">返回首页</button>
        </div>
      </article>
    </section>
  `;
}

function renderProfilePage(currentUser) {
  const demoMode = isClientDemo();
  const profile = currentUser
    ? {
        name: currentUser.name,
        level: currentUser.level,
        intro: `已绑定手机号 ${currentUser.mobile}，会员积分 ${currentUser.points} 分，可继续维护联系人与健康档案。`,
        stats: [
          { value: String(currentUser.points), label: "会员积分" },
          { value: "6", label: "待使用权益" },
          { value: "12", label: "历史订单" },
        ],
      }
    : appData.profile;

  const loginEntry = `
    <div class="list-item">
      <div class="order-row">
        <div>
          <div class="list-item-title">账号与登录</div>
          <div class="list-item-text">支持微信快捷登录、手机号验证码登录与会员信息同步</div>
        </div>
        <button class="mini-btn" type="button" data-nav="login">进入</button>
      </div>
    </div>
  `;

  const adminEntry = demoMode
    ? ""
    : `
      <div class="list-item">
        <div class="order-row">
          <div>
            <div class="list-item-title">运营后台</div>
            <div class="list-item-text">进入后台概览，维护基地、套餐、课程、商品与订单</div>
          </div>
          <button class="mini-btn" type="button" data-nav="admin">进入</button>
        </div>
      </div>
    `;

  return `
    ${renderSection({
      title: "我的",
      subtitle: demoMode ? "会员信息、常用联系人与健康档案统一查看" : "会员、积分、联系人、健康档案集中管理",
      content: `
        <div class="card">
          <div class="profile-card">
            <div class="avatar">王</div>
            <div>
              <div class="profile-name">${profile.name}</div>
              <div class="profile-badges">
                <span class="chip">${profile.level}</span>
                <span class="chip">已绑定手机号</span>
                <span class="chip">健康档案可维护</span>
              </div>
            </div>
          </div>
          <p class="card-text">${profile.intro}</p>
          <div class="stats">
            ${profile.stats
              .map(
                (item) => `
                  <div class="stat">
                    <strong>${item.value}</strong>
                    <span>${item.label}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
        </div>
      `,
    })}

    ${renderSection({
      title: "个人功能",
      subtitle: demoMode ? "围绕会员服务、联系人管理与售后服务统一呈现" : "下一步优先接登录、地址、联系人、健康档案与客服模块",
      content: `
        <div class="list">
          ${loginEntry}
          ${adminEntry}
          <div class="list-item">
            <div class="list-item-title">常用联系人</div>
            <div class="list-item-text">支持入住人、紧急联系人、长期服务联系人维护</div>
          </div>
          <div class="list-item">
            <div class="list-item-title">收货地址</div>
            <div class="list-item-text">商城下单与礼盒配送使用</div>
          </div>
          <div class="list-item">
            <div class="list-item-title">健康档案</div>
            <div class="list-item-text">基础信息、慢病备注、体检记录上传</div>
          </div>
          <div class="list-item">
            <div class="list-item-title">在线客服与反馈</div>
            <div class="list-item-text">支持站内咨询、意见反馈和服务跟进</div>
          </div>
        </div>
      `,
    })}
  `;
}

function renderLoginPage(draft, isSubmitting) {
  return `
    <section class="section">
      <article class="card detail-card">
        <div class="login-hero">
          <div class="brand-mark" aria-hidden="true"></div>
          <div>
            <h2 class="detail-title">${appData.login.title}</h2>
            <p class="card-text">${appData.login.desc}</p>
          </div>
        </div>
        <div class="chip-row">
          <span class="chip">微信快捷登录</span>
          <span class="chip">手机号验证码</span>
          <span class="chip">会员权益同步</span>
        </div>
      </article>
    </section>

    <section class="section">
      <div class="card">
        <div class="form-grid" data-form="login-form">
          ${renderTextField({
            label: "手机号",
            name: "mobile",
            value: draft.mobile,
            placeholder: "请输入手机号",
          })}
          ${renderTextField({
            label: "验证码",
            name: "captcha",
            value: draft.captcha,
            placeholder: "请输入验证码",
          })}
        </div>
        <div class="hero-actions">
          <button class="btn btn-secondary" type="button">获取验证码</button>
          <button class="btn btn-secondary" type="button">微信快捷登录</button>
        </div>
        ${renderSubmitBar(isSubmitting ? "正在登录..." : "登录并进入会员中心", "submit-login")}
      </div>
    </section>
  `;
}

const routeMap = {
  base: "base-detail",
  package: "package-detail",
  physio: "physio-detail",
  course: "course-detail",
  product: "product-detail",
};

const groupMap = {
  base: "基地",
  package: "旅居套餐",
  physio: "理疗服务",
  course: "康养课程",
  product: "商城商品",
};

function renderSearchPage(keyword, results, isSearching) {
  return `
    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">全局搜索</h2>
          <div class="section-subtitle">可搜索基地、旅居套餐、理疗、课程和商城商品</div>
        </div>
      </div>
      <div class="card">
        <label class="field">
          <span class="field-label">关键词</span>
          <input
            class="field-input"
            type="text"
            data-search-input="keyword"
            value="${escapeHtml(keyword || "")}"
            placeholder="例如：旅居、艾灸、八段锦、礼盒"
          />
        </label>
        <div class="submit-bar">
          <button class="btn btn-primary full-width" type="button" data-action="submit-search">
            ${isSearching ? "正在搜索..." : "立即搜索"}
          </button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">搜索结果</h2>
          <div class="section-subtitle">${keyword ? `共找到 ${results.length} 条相关内容` : "请输入关键词开始搜索"}</div>
        </div>
      </div>
      <div class="list">
        ${
          results.length
            ? results
                .map(
                  (item) => `
                    <div class="list-item">
                      <div class="order-row">
                        <div>
                          <div class="list-item-title">${item.title}</div>
                          <div class="list-item-text">${groupMap[item.type]}${item.subtitle ? ` · ${item.subtitle}` : ""}</div>
                        </div>
                        <button class="mini-btn" type="button" data-nav="${routeMap[item.type]}" data-id="${item.id}">查看</button>
                      </div>
                    </div>
                  `,
                )
                .join("")
            : `<div class="empty-state">${keyword ? "没有找到匹配内容，可以换个关键词试试。" : "还没有输入搜索关键词。"}</div>`
        }
      </div>
    </section>
  `;
}

function renderFilterTabs(categories, activeCategory, filterKey) {
  return `
    <div class="filter-row">
      ${categories
        .map(
          (category) => `
            <button
              class="filter-chip ${category === activeCategory ? "active" : ""}"
              type="button"
              data-filter="${filterKey}"
              data-value="${category}"
            >${category}</button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderPackagesDiscovery(filters) {
  const keyword = filters.keyword.trim();
  const items = appData.packages.filter((item) => {
    const categoryMatch =
      filters.packageCategory === "全部" || item.category === filters.packageCategory;
    const keywordMatch =
      !keyword || [item.title, item.text, item.category, ...(item.tags || [])].join(" ").includes(keyword);
    return categoryMatch && keywordMatch;
  });

  return renderSection({
    title: "旅居套餐",
    subtitle: "按旅居养老、度假、康复护理、亲子康养等分类扩展",
    content: `
      ${renderFilterTabs(appData.packageCategories, filters.packageCategory, "packageCategory")}
      <div class="cards">${
        items.length
          ? items
              .map((item) =>
                renderFeatureCard(item, {
                  actionRoute: "package-detail",
                  actionId: item.id,
                }),
              )
              .join("")
          : `<div class="card"><div class="empty-state">当前筛选条件下暂无套餐。</div></div>`
      }</div>
    `,
  });
}

function renderCoursesDiscovery(filters) {
  const keyword = filters.keyword.trim();
  const items = appData.courses.filter((item) => {
    const categoryMatch =
      filters.courseCategory === "全部" ||
      item.tags.includes(filters.courseCategory) ||
      item.text.includes(filters.courseCategory);
    const keywordMatch =
      !keyword || [item.title, item.text, ...(item.tags || [])].join(" ").includes(keyword);
    return categoryMatch && keywordMatch;
  });

  return renderSection({
    title: "康养课程",
    subtitle: "支持按课程类别、基地与日程筛选",
    content: `
      ${renderFilterTabs(appData.courseCategories, filters.courseCategory, "courseCategory")}
      <div class="cards">${
        items.length
          ? items
              .map((item) =>
                renderFeatureCard(item, {
                  actionRoute: "course-detail",
                  actionId: item.id,
                  showPrice: false,
                }),
              )
              .join("")
          : `<div class="card"><div class="empty-state">当前筛选条件下暂无课程。</div></div>`
      }</div>
    `,
  });
}

function renderMetricCards(metrics = []) {
  return `
    <div class="stats admin-stats">
      ${metrics
        .map(
          (item) => `
            <div class="stat">
              <strong>${item.value}${item.unit || ""}</strong>
              <span>${item.label}</span>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderOrderStatusBlock(items = []) {
  return `
    <div class="list">
      ${items
        .map(
          (item) => `
            <div class="list-item">
              <div class="order-row">
                <div>
                  <div class="list-item-title">${item.status}</div>
                  <div class="list-item-text">当前共有 ${item.count} 单</div>
                </div>
                <span class="status-pill">${item.count}</span>
              </div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSimpleTable(title, rows, columns) {
  return renderSection({
    title,
    content: `
      <div class="list">
        ${rows.length
          ? rows
              .map(
                (row) => `
                  <div class="list-item">
                    ${columns
                      .map(
                        (column) => `
                          <div class="list-item-title">${column.label}</div>
                          <div class="list-item-text">${row[column.key] ?? "-"}</div>
                        `,
                      )
                      .join("")}
                  </div>
                `,
              )
              .join("")
          : `<div class="card"><div class="empty-state">当前还没有数据。</div></div>`}
      </div>
    `,
  });
}

function renderAdminPage(admin, drafts, submitting) {
  const dashboard = admin.dashboard || { metrics: [], orderStatus: [], latestOrders: [] };
  const resources = admin.resources || {
    bases: [],
    packages: [],
    courses: [],
    products: [],
    orders: [],
  };

  const orderOptions = ["待支付", "待确认", "已确认", "已预约", "报名成功", "待发货", "已完成"];
  const selectedOrderId = drafts.adminOrder.orderId || resources.orders[0]?.id || "";

  return `
    ${renderSection({
      title: "运营后台",
      subtitle: submitting.adminLoad ? "正在同步后台数据..." : "管理基地、套餐、课程、商品和订单状态",
      content: `
        <div class="card">
          <div class="profile-card">
            <div class="avatar">管</div>
            <div>
              <div class="profile-name">康养业务后台</div>
              <div class="profile-badges">
                <span class="chip">多基地配置</span>
                <span class="chip">订单统一管理</span>
                <span class="chip">当前为轻量版后台</span>
              </div>
            </div>
          </div>
          <p class="card-text">这一版先完成后台概览、内容新增与订单状态维护，后续可继续扩成完整管理系统。</p>
        </div>
        ${renderMetricCards(dashboard.metrics)}
      `,
    })}

    ${renderSection({
      title: "订单概览",
      subtitle: "查看当前订单状态分布与最近订单",
      content: `
        ${renderOrderStatusBlock(dashboard.orderStatus)}
        <div class="list admin-latest-orders">
          ${dashboard.latestOrders.length
            ? dashboard.latestOrders
                .map(
                  (item) => `
                    <div class="list-item">
                      <div class="order-row">
                        <div>
                          <div class="list-item-title">${item.title}</div>
                          <div class="list-item-text">${item.type} · ${item.id}</div>
                        </div>
                        <span class="status-pill">${item.status}</span>
                      </div>
                    </div>
                  `,
                )
                .join("")
            : `<div class="card"><div class="empty-state">暂无订单数据。</div></div>`}
        </div>
      `,
    })}

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">新增基地</h2>
          <div class="section-subtitle">新增后会立即进入后台与前台数据源</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="admin-base-form">
          ${renderTextField({ label: "基地名称", name: "name", value: drafts.adminBase.name, placeholder: "请输入基地名称" })}
          ${renderTextField({ label: "所在城市", name: "city", value: drafts.adminBase.city, placeholder: "请输入城市" })}
          ${renderTextField({ label: "基地地址", name: "address", value: drafts.adminBase.address, placeholder: "请输入基地地址" })}
          ${renderTextField({ label: "标签（逗号分隔）", name: "tags", value: drafts.adminBase.tags, placeholder: "例如：康养度假, 亲子康养" })}
        </div>
        ${renderSubmitBar(submitting.adminBase ? "正在创建基地..." : "创建基地", "submit-admin-base")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">新增套餐</h2>
          <div class="section-subtitle">支持为已有基地新增旅居套餐</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="admin-package-form">
          ${renderTextField({ label: "套餐标题", name: "title", value: drafts.adminPackage.title, placeholder: "请输入套餐标题" })}
          ${renderTextField({ label: "所属基地 ID", name: "baseId", value: drafts.adminPackage.baseId, placeholder: "例如：yunhewan" })}
          ${renderTextField({ label: "套餐分类", name: "category", value: drafts.adminPackage.category, placeholder: "请输入套餐分类" })}
          ${renderTextField({ label: "套餐价格", name: "price", value: drafts.adminPackage.price, placeholder: "请输入价格" })}
          ${renderTextField({ label: "库存", name: "inventory", value: drafts.adminPackage.inventory, placeholder: "请输入库存" })}
        </div>
        ${renderSubmitBar(submitting.adminPackage ? "正在创建套餐..." : "创建套餐", "submit-admin-package")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">新增课程</h2>
          <div class="section-subtitle">支持快速补充康养课程内容</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="admin-course-form">
          ${renderTextField({ label: "课程标题", name: "title", value: drafts.adminCourse.title, placeholder: "请输入课程标题" })}
          ${renderTextField({ label: "所属基地 ID", name: "baseId", value: drafts.adminCourse.baseId, placeholder: "例如：yunhewan" })}
          ${renderTextField({ label: "课程分类", name: "category", value: drafts.adminCourse.category, placeholder: "请输入课程分类" })}
          ${renderTextField({ label: "课程费用", name: "fee", value: drafts.adminCourse.fee, placeholder: "请输入费用" })}
        </div>
        ${renderSubmitBar(submitting.adminCourse ? "正在创建课程..." : "创建课程", "submit-admin-course")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">新增商品</h2>
          <div class="section-subtitle">支持快速补充商城商品</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="admin-product-form">
          ${renderTextField({ label: "商品标题", name: "title", value: drafts.adminProduct.title, placeholder: "请输入商品标题" })}
          ${renderTextField({ label: "商品分类", name: "category", value: drafts.adminProduct.category, placeholder: "请输入商品分类" })}
          ${renderTextField({ label: "商品价格", name: "price", value: drafts.adminProduct.price, placeholder: "请输入价格" })}
          ${renderTextField({ label: "库存", name: "stock", value: drafts.adminProduct.stock, placeholder: "请输入库存" })}
        </div>
        ${renderSubmitBar(submitting.adminProduct ? "正在创建商品..." : "创建商品", "submit-admin-product")}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2 class="section-title">订单状态维护</h2>
          <div class="section-subtitle">演示版支持快速更新一条订单状态</div>
        </div>
      </div>
      <div class="card">
        <div class="form-grid" data-form="admin-order-form">
          <label class="field">
            <span class="field-label">订单 ID</span>
            <select class="field-input" name="orderId">
              ${resources.orders.length
                ? resources.orders
                    .map(
                      (item) => `
                        <option value="${escapeHtml(item.id)}" ${item.id === selectedOrderId ? "selected" : ""}>${item.id} · ${item.title}</option>
                      `,
                    )
                    .join("")
                : `<option value="">暂无订单</option>`}
            </select>
          </label>
          <label class="field">
            <span class="field-label">目标状态</span>
            <select class="field-input" name="status">
              ${orderOptions
                .map(
                  (item) => `
                    <option value="${escapeHtml(item)}" ${item === drafts.adminOrder.status ? "selected" : ""}>${item}</option>
                  `,
                )
                .join("")}
            </select>
          </label>
        </div>
        ${renderSubmitBar(submitting.adminOrder ? "正在更新订单..." : "更新订单状态", "submit-admin-order", selectedOrderId)}
      </div>
    </section>

    ${renderSimpleTable("基地列表", resources.bases, [
      { label: "基地名称", key: "name" },
      { label: "所在城市", key: "city" },
      { label: "基地地址", key: "address" },
    ])}

    ${renderSimpleTable("套餐列表", resources.packages, [
      { label: "套餐标题", key: "title" },
      { label: "套餐分类", key: "category" },
      { label: "库存", key: "inventory" },
    ])}

    ${renderSimpleTable("课程列表", resources.courses, [
      { label: "课程标题", key: "title" },
      { label: "课程分类", key: "category" },
      { label: "费用", key: "fee" },
    ])}

    ${renderSimpleTable("商品列表", resources.products, [
      { label: "商品标题", key: "title" },
      { label: "商品分类", key: "category" },
      { label: "库存", key: "stock" },
    ])}
  `;
}

function renderRoute(route, store) {
  switch (route.name) {
    case "home":
      return renderHomePage();
    case "login":
      return renderLoginPage(store.state.drafts.login, store.state.submitting.login);
    case "search":
      return renderSearchPage(
        store.state.searchKeyword || store.state.filters.keyword,
        store.state.searchResults,
        store.state.submitting.search,
      );
    case "bases":
      return renderBasesPage();
    case "base-detail":
      return renderBaseDetailPage(route.params.id);
    case "packages":
      return renderPackagesDiscovery(store.state.filters);
    case "package-detail":
      return renderPackageDetailPage(
        route.params.id,
        store.state.drafts.packageBooking,
        store.state.submitting.package,
      );
    case "physio":
      return renderPhysioPage();
    case "physio-detail":
      return renderPhysioDetailPage(
        route.params.id,
        store.state.drafts.physioBooking,
        store.state.submitting.physio,
      );
    case "courses":
      return renderCoursesDiscovery(store.state.filters);
    case "course-detail":
      return renderCourseDetailPage(
        route.params.id,
        store.state.drafts.courseBooking,
        store.state.submitting.course,
      );
    case "shop":
      return renderShopPage(store.state.cart, store.state.filters);
    case "product-detail":
      return renderProductDetailPage(route.params.id);
    case "cart":
      return renderCartPage(store.state.cart);
    case "checkout":
      return renderCheckoutPage(
        store.state.cart,
        store.state.drafts.checkout,
        store.state.submitting.checkout,
      );
    case "orders":
      return renderOrdersPage(store.state.orders);
    case "order-detail": {
      const order = store.state.orders.find((item) => item.id === route.params.id) || store.state.orders[0];
      return renderOrderDetailPage(order);
    }
    case "profile":
      return renderProfilePage(store.state.currentUser);
    case "admin":
      return renderAdminPage(store.state.admin, store.state.drafts, store.state.submitting);
    default:
      return renderHomePage();
  }
}

const API_BASE_URL = "http://127.0.0.1:4300/api";

async function requestJson(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: options.method || "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || `Request failed: ${response.status}`);
  }

  return data;
}

async function fetchBootstrapData() {
  const [home, user, orders] = await Promise.all([
    requestJson("/content/home"),
    requestJson("/users/me"),
    requestJson("/orders"),
  ]);

  return { home, user, orders };
}

async function login(payload) {
  return requestJson("/users/login", {
    method: "POST",
    body: payload,
  });
}

async function searchContent(keyword) {
  const params = new URLSearchParams();
  params.set("keyword", keyword);
  return requestJson(`/content/search?${params.toString()}`);
}

async function submitPackageBooking(packageId, payload) {
  return requestJson(`/packages/${packageId}/bookings`, {
    method: "POST",
    body: payload,
  });
}

async function submitPhysioBooking(physioId, payload) {
  return requestJson(`/physio/services/${physioId}/bookings`, {
    method: "POST",
    body: payload,
  });
}

async function submitCourseEnrollment(courseId, payload) {
  return requestJson(`/courses/${courseId}/enrollments`, {
    method: "POST",
    body: payload,
  });
}

async function submitCheckout(payload) {
  return requestJson("/products/checkout", {
    method: "POST",
    body: payload,
  });
}

async function fetchOrders() {
  return requestJson("/orders");
}

async function fetchAdminDashboard() {
  return requestJson("/admin/dashboard");
}

async function fetchAdminResources() {
  const [bases, packages, courses, products, orders] = await Promise.all([
    requestJson("/admin/bases"),
    requestJson("/admin/packages"),
    requestJson("/admin/courses"),
    requestJson("/admin/products"),
    requestJson("/admin/orders"),
  ]);

  return { bases, packages, courses, products, orders };
}

async function createBase(payload) {
  return requestJson("/bases", {
    method: "POST",
    body: payload,
  });
}

async function createPackage(payload) {
  return requestJson("/packages", {
    method: "POST",
    body: payload,
  });
}

async function createCourse(payload) {
  return requestJson("/courses", {
    method: "POST",
    body: payload,
  });
}

async function createProduct(payload) {
  return requestJson("/products", {
    method: "POST",
    body: payload,
  });
}

async function updateOrderStatus(orderId, status) {
  return requestJson(`/orders/${orderId}/status`, {
    method: "PATCH",
    body: { status },
  });
}

function formatAmount(value) {
  return typeof value === "number" ? `¥${value.toLocaleString("zh-CN")}` : value;
}

function createLocalSearchResults(keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();
  if (!normalizedKeyword) {
    return [];
  }

  const baseNameMap = new Map(appData.bases.map((item) => [item.id, item.name]));
  const sections = [
    {
      type: "base",
      items: appData.bases,
      getTitle: (item) => item.name,
      getSubtitle: (item) => item.address || item.meta?.[0] || "",
      getKeywords: (item) => [
        item.name,
        item.desc,
        item.address,
        ...(item.tags || []),
        ...(item.meta || []),
        ...(item.facilities || []),
        ...(item.serviceHighlights || []),
      ],
    },
    {
      type: "package",
      items: appData.packages,
      getTitle: (item) => item.title,
      getSubtitle: (item) => [baseNameMap.get(item.baseId), item.category].filter(Boolean).join(" · "),
      getKeywords: (item) => [
        item.title,
        item.text,
        item.category,
        item.note,
        ...(item.tags || []),
        ...(item.meta || []),
        ...(item.included || []),
      ],
    },
    {
      type: "physio",
      items: appData.physio,
      getTitle: (item) => item.title,
      getSubtitle: (item) => [baseNameMap.get(item.baseId), item.duration].filter(Boolean).join(" · "),
      getKeywords: (item) => [
        item.title,
        item.text,
        item.duration,
        ...(item.tags || []),
        ...(item.meta || []),
        ...(item.therapists || []),
        ...(item.benefits || []),
      ],
    },
    {
      type: "course",
      items: appData.courses,
      getTitle: (item) => item.title,
      getSubtitle: (item) => [item.schedule, item.location].filter(Boolean).join(" · "),
      getKeywords: (item) => [
        item.title,
        item.text,
        item.schedule,
        item.location,
        item.teacher,
        ...(item.tags || []),
        ...(item.meta || []),
      ],
    },
    {
      type: "product",
      items: appData.products,
      getTitle: (item) => item.title,
      getSubtitle: (item) => [item.category, item.price].filter(Boolean).join(" · "),
      getKeywords: (item) => [
        item.title,
        item.text,
        item.category,
        item.pointsRule,
        ...(item.tags || []),
        ...(item.meta || []),
        ...(item.specs || []),
      ],
    },
  ];

  return sections
    .flatMap((section) =>
      section.items.map((item) => ({
        id: item.id,
        type: section.type,
        title: section.getTitle(item),
        subtitle: section.getSubtitle(item),
        keywords: section.getKeywords(item)
          .filter(Boolean)
          .join(" ")
          .toLowerCase(),
      })),
    )
    .filter((item) => item.keywords.includes(normalizedKeyword))
    .slice(0, 20)
    .map(({ keywords, ...item }) => item);
}

function createApp(root) {
  const store = createStore();
  const demoMode = isClientDemo();

  function applyFontScale() {
    document.documentElement.style.setProperty(
      "--font-size-base",
      `${store.state.fontScaleValues[store.state.fontScaleIndex]}px`,
    );
  }

  function render() {
    applyFontScale();
    root.innerHTML = renderShell({
      topbar: renderTopbar({
        brand: appData.brand,
        fontScaleIndex: store.state.fontScaleIndex,
        apiStatus: store.state.apiStatus,
      }),
      content: renderRoute(store.state.route, store),
      bottomNav: renderBottomNav(store.state.route.name, store.state.cart.length),
      flash: store.state.flash,
    });

    bindEvents();

    if (store.state.flash) {
      window.clearTimeout(render.flashTimer);
      render.flashTimer = window.setTimeout(() => {
        store.clearFlash();
        render();
      }, 2200);
    }
  }

  async function refreshOrders() {
    if (demoMode) {
      return;
    }

    const orders = await fetchOrders();
    store.setOrders(mapRemoteOrders(orders));
  }

  async function loadAdminData() {
    if (demoMode) {
      return;
    }

    store.setSubmitting("adminLoad", true);
    try {
      const [dashboard, resources] = await Promise.all([
        fetchAdminDashboard(),
        fetchAdminResources(),
      ]);
      store.setAdminDashboard(dashboard);
      store.setAdminResources(resources);
    } catch {
      store.setFlash("后台数据同步失败，请稍后重试");
    } finally {
      store.setSubmitting("adminLoad", false);
    }
  }

  async function syncRemoteData() {
    if (demoMode) {
      store.setApiStatus("offline");
      return;
    }

    store.setApiStatus("loading");

    try {
      const payload = await fetchBootstrapData();
      applyRemoteHomeContent(payload.home);
      store.setCurrentUser(mapRemoteUserToProfile(payload.user));
      store.setOrders(mapRemoteOrders(payload.orders));
      store.setApiStatus("connected");
    } catch {
      store.setApiStatus("offline");
    }
  }

  function bindFormDrafts() {
    root.querySelectorAll("[data-form]").forEach((form) => {
      form.addEventListener("change", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
          return;
        }

        const section = form.dataset.form;
        if (!section) {
          return;
        }

        const mapping = {
          "login-form": "login",
          "package-booking": "packageBooking",
          "physio-booking": "physioBooking",
          "course-booking": "courseBooking",
          "checkout-form": "checkout",
          "admin-base-form": "adminBase",
          "admin-package-form": "adminPackage",
          "admin-course-form": "adminCourse",
          "admin-product-form": "adminProduct",
          "admin-order-form": "adminOrder",
        };

        const key = mapping[section];
        if (!key) {
          return;
        }

        store.updateDraft(key, { [target.name]: target.value });
      });
    });
  }

  async function handleAsyncAction(key, task) {
    store.setSubmitting(key, true);
    try {
      await task();
    } catch (error) {
      store.setFlash(error instanceof Error ? error.message : "操作失败，请稍后重试");
    } finally {
      store.setSubmitting(key, false);
    }
  }

  async function handleSearch() {
    const keyword = (store.state.searchKeyword || store.state.filters.keyword || "").trim();
    if (!keyword) {
      store.setSearchResults([]);
      store.setFlash("请输入搜索关键词");
      return;
    }

    if (demoMode) {
      store.setSearchKeyword(keyword);
      store.setSearchResults(createLocalSearchResults(keyword));
      if (store.state.route.name !== "search") {
        store.setRoute("search");
      }
      return;
    }

    await handleAsyncAction("search", async () => {
      const result = await searchContent(keyword);
      store.setSearchKeyword(keyword);
      store.setSearchResults(result.items || []);
      if (store.state.route.name !== "search") {
        store.setRoute("search");
      }
    });
  }

  async function enterRoute(routeName, params = {}) {
    if (demoMode && routeName === "admin") {
      store.setFlash("客户演示版未开放后台管理入口");
      return;
    }

    store.setRoute(routeName, params);
    if (routeName === "admin") {
      await loadAdminData();
    }
  }

  function bindEvents() {
    root.querySelectorAll("[data-nav]").forEach((button) => {
      button.addEventListener("click", () => {
        const routeName = button.dataset.nav;
        const id = button.dataset.id;
        enterRoute(routeName, id ? { id } : {});
      });
    });

    root.querySelectorAll("[data-action='cycle-font']").forEach((button) => {
      button.addEventListener("click", () => {
        store.cycleFontScale();
      });
    });

    root.querySelectorAll("[data-action='submit-login']").forEach((button) => {
      button.addEventListener("click", () => {
        if (demoMode) {
          store.applyLoginSuccess({
            name: "王阿姨",
            mobile: store.state.drafts.login.mobile,
            level: "银龄会员",
            points: 1280,
          });
          return;
        }

        handleAsyncAction("login", async () => {
          const payload = await login(store.state.drafts.login);
          store.applyLoginSuccess(payload.user);
        });
      });
    });

    root.querySelectorAll("[data-action='submit-search']").forEach((button) => {
      button.addEventListener("click", () => {
        handleSearch();
      });
    });

    root.querySelectorAll("[data-action='add-cart']").forEach((button) => {
      button.addEventListener("click", () => {
        store.addToCart(button.dataset.id);
      });
    });

    root.querySelectorAll("[data-action='cart-plus']").forEach((button) => {
      button.addEventListener("click", () => {
        store.updateCartQuantity(button.dataset.id, 1);
      });
    });

    root.querySelectorAll("[data-action='cart-minus']").forEach((button) => {
      button.addEventListener("click", () => {
        store.updateCartQuantity(button.dataset.id, -1);
      });
    });

    root.querySelectorAll("[data-action='submit-package']").forEach((button) => {
      button.addEventListener("click", () => {
        if (demoMode) {
          const pkg = appData.packages.find((item) => item.id === button.dataset.id);
          store.applyOrderSuccess(
            {
              id: `ORD-PKG-${String(store.state.orders.length + 1).padStart(3, "0")}`,
              type: "旅居套餐",
              title: pkg?.title || "旅居套餐",
              status: "待确认",
              amount: pkg?.price || "¥0",
              detail: `${pkg?.title || "套餐"} 预约信息已提交，稍后会有专人回访确认。`,
            },
            "预约信息已提交，稍后将有顾问与您联系",
          );
          return;
        }

        handleAsyncAction("package", async () => {
          const payload = await submitPackageBooking(button.dataset.id, store.state.drafts.packageBooking);
          const order = {
            ...payload.order,
            amount: formatAmount(payload.order.amount),
          };
          store.applyOrderSuccess(order, payload.message);
          await refreshOrders();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-physio']").forEach((button) => {
      button.addEventListener("click", () => {
        if (demoMode) {
          const item = appData.physio.find((entry) => entry.id === button.dataset.id);
          store.applyOrderSuccess(
            {
              id: `ORD-PHY-${String(store.state.orders.length + 1).padStart(3, "0")}`,
              type: "理疗预约",
              title: item?.title || "理疗服务",
              status: "已预约",
              amount: item?.price || "¥0",
              detail: `${item?.title || "理疗服务"} 预约信息已提交，请按约定时间到店体验。`,
            },
            "预约已提交，服务时间将由顾问确认",
          );
          return;
        }

        handleAsyncAction("physio", async () => {
          const payload = await submitPhysioBooking(button.dataset.id, store.state.drafts.physioBooking);
          const order = {
            ...payload.order,
            amount: formatAmount(payload.order.amount),
          };
          store.applyOrderSuccess(order, payload.message);
          await refreshOrders();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-course']").forEach((button) => {
      button.addEventListener("click", () => {
        if (demoMode) {
          const item = appData.courses.find((entry) => entry.id === button.dataset.id);
          store.applyOrderSuccess(
            {
              id: `ORD-CRS-${String(store.state.orders.length + 1).padStart(3, "0")}`,
              type: "课程报名",
              title: item?.title || "康养课程",
              status: "报名成功",
              amount: item?.fee || "¥0",
              detail: `${item?.title || "课程"} 报名已提交，开课前会发送提醒。`,
            },
            "课程报名成功",
          );
          return;
        }

        handleAsyncAction("course", async () => {
          const payload = await submitCourseEnrollment(button.dataset.id, store.state.drafts.courseBooking);
          const order = {
            ...payload.order,
            amount: formatAmount(payload.order.amount),
          };
          store.applyOrderSuccess(order, payload.message);
          await refreshOrders();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-checkout']").forEach((button) => {
      button.addEventListener("click", () => {
        if (demoMode) {
          if (!store.state.cart.length) {
            store.setFlash("购物车为空，暂不能下单");
            return;
          }

          const total = store.state.cart.reduce(
            (sum, item) => sum + Number(String(item.price).replace(/[^\d.]/g, "")) * item.quantity,
            0,
          );
          store.applyCheckoutSuccess({
            id: `ORD-SHP-${String(store.state.orders.length + 1).padStart(3, "0")}`,
            type: "商城订单",
            title: `商城下单 ${store.state.cart.length} 件商品`,
            status: "待发货",
            amount: `¥${total.toFixed(2)}`,
            detail: "订单已生成，后续可继续扩展支付、发货与物流跟踪流程。",
          });
          return;
        }

        handleAsyncAction("checkout", async () => {
          if (!store.state.cart.length) {
            throw new Error("购物车为空，暂不能下单");
          }

          const payload = await submitCheckout({
            ...store.state.drafts.checkout,
            items: store.state.cart.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
            })),
          });
          const order = {
            ...payload.order,
            amount: formatAmount(payload.order.amount),
          };
          store.applyCheckoutSuccess(order);
          await syncRemoteData();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-admin-base']").forEach((button) => {
      button.addEventListener("click", () => {
        handleAsyncAction("adminBase", async () => {
          const payload = await createBase({
            ...store.state.drafts.adminBase,
            tags: store.state.drafts.adminBase.tags
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean),
          });
          store.setFlash(payload.message);
          await loadAdminData();
          await syncRemoteData();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-admin-package']").forEach((button) => {
      button.addEventListener("click", () => {
        handleAsyncAction("adminPackage", async () => {
          const payload = await createPackage({
            ...store.state.drafts.adminPackage,
            price: Number(store.state.drafts.adminPackage.price),
            inventory: Number(store.state.drafts.adminPackage.inventory),
          });
          store.setFlash(payload.message);
          await loadAdminData();
          await syncRemoteData();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-admin-course']").forEach((button) => {
      button.addEventListener("click", () => {
        handleAsyncAction("adminCourse", async () => {
          const payload = await createCourse({
            ...store.state.drafts.adminCourse,
            fee: Number(store.state.drafts.adminCourse.fee),
          });
          store.setFlash(payload.message);
          await loadAdminData();
          await syncRemoteData();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-admin-product']").forEach((button) => {
      button.addEventListener("click", () => {
        handleAsyncAction("adminProduct", async () => {
          const payload = await createProduct({
            ...store.state.drafts.adminProduct,
            price: Number(store.state.drafts.adminProduct.price),
            stock: Number(store.state.drafts.adminProduct.stock),
          });
          store.setFlash(payload.message);
          await loadAdminData();
          await syncRemoteData();
        });
      });
    });

    root.querySelectorAll("[data-action='submit-admin-order']").forEach((button) => {
      button.addEventListener("click", () => {
        handleAsyncAction("adminOrder", async () => {
          const orderId = store.state.drafts.adminOrder.orderId || button.dataset.id;
          const payload = await updateOrderStatus(orderId, store.state.drafts.adminOrder.status);
          store.setFlash(payload.message);
          await loadAdminData();
          await refreshOrders();
        });
      });
    });

    root.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        store.setFilter(button.dataset.filter, button.dataset.value);
      });
    });

    root.querySelectorAll("[data-search-input='keyword']").forEach((input) => {
      input.addEventListener("input", (event) => {
        const target = event.target;
        store.setFilter("keyword", target.value);
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          handleSearch();
        }
      });
    });

    bindFormDrafts();
  }

  store.subscribe(render);
  render();
  syncRemoteData();
}

createApp(document.querySelector("#app"));
