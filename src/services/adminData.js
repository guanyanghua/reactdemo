export const adminSections = [
  { id: "overview", label: "运营总览", icon: "01" },
  { id: "players", label: "玩家管理", icon: "02" },
  { id: "games", label: "游戏配置", icon: "03" },
  { id: "orders", label: "充值订单", icon: "04" },
  { id: "events", label: "活动公告", icon: "05" },
  { id: "support", label: "客服工单", icon: "06" },
];

export const metrics = [
  { label: "今日活跃", value: "128,430", change: "+12.6%", positive: true },
  { label: "新增玩家", value: "8,942", change: "+4.8%", positive: true },
  { label: "今日流水", value: "¥ 736,520", change: "+18.2%", positive: true },
  { label: "异常订单", value: "27", change: "-6.4%", positive: false },
];

export const revenueTrend = [
  { day: "周一", rate: 48 },
  { day: "周二", rate: 62 },
  { day: "周三", rate: 54 },
  { day: "周四", rate: 76 },
  { day: "周五", rate: 71 },
  { day: "周六", rate: 92 },
  { day: "周日", rate: 86 },
];

export const gameServers = [
  { name: "一区 星火平原", online: "18,204", status: "normal" },
  { name: "二区 雾海边境", online: "14,982", status: "normal" },
  { name: "三区 黑曜王城", online: "9,441", status: "warning" },
  { name: "跨服竞技场", online: "3,805", status: "danger" },
];

export const playerRows = [
  {
    id: "p1",
    cells: ["YH_9042", "Lv.86", "一区", "¥ 4,280"],
    status: "normal",
  },
  {
    id: "p2",
    cells: ["MoonBlade", "Lv.72", "二区", "¥ 960"],
    status: "warning",
  },
  {
    id: "p3",
    cells: ["北境旅人", "Lv.91", "三区", "¥ 8,650"],
    status: "normal",
  },
  {
    id: "p4",
    cells: ["ZeroFox", "Lv.48", "一区", "¥ 120"],
    status: "danger",
  },
];

export const paymentOrders = [
  {
    id: "o1",
    cells: ["GM20260628001", "月卡礼包", "¥ 30", "微信"],
    status: "success",
  },
  {
    id: "o2",
    cells: ["GM20260628002", "648 钻石", "¥ 648", "支付宝"],
    status: "success",
  },
  {
    id: "o3",
    cells: ["GM20260628003", "通行证", "¥ 68", "App Store"],
    status: "warning",
  },
  {
    id: "o4",
    cells: ["GM20260628004", "首充礼包", "¥ 6", "微信"],
    status: "danger",
  },
];

export const reviewTasks = [
  {
    title: "异常登录审核",
    detail: "12 个账号触发异地登录风控，需要人工复核。",
  },
  {
    title: "充值补单",
    detail: "4 笔支付成功但道具未到账订单等待处理。",
  },
  {
    title: "公会举报",
    detail: "三区黑曜王城有 7 条聊天违规举报待确认。",
  },
];

export const announcements = [
  { type: "维护", title: "跨服竞技场赛季结算维护", time: "今晚 23:30" },
  { type: "活动", title: "夏日累计充值活动上线", time: "明日 10:00" },
  { type: "补偿", title: "二区网络波动补偿邮件", time: "已定时" },
];

export const playerSegments = [
  { title: "高价值玩家", value: "1,284", description: "近 30 日充值超过 ¥1,000" },
  { title: "回流玩家", value: "6,902", description: "本周重新登录并完成任务" },
  { title: "风险账号", value: "43", description: "触发交易、登录或聊天风控" },
];

export const gameConfigs = [
  { label: "每日体力上限", value: "240" },
  { label: "竞技场结算时间", value: "22:00" },
  { label: "首充双倍开关", value: "开启" },
  { label: "世界 Boss 血量倍率", value: "1.25" },
  { label: "新手保护天数", value: "7" },
];

export const refundTasks = [
  { title: "GM20260628003 订单待确认", detail: "App Store 回调延迟，玩家已提交截图。" },
  { title: "GM20260628004 首充礼包未到账", detail: "支付成功，道具发放任务失败。" },
  { title: "渠道对账差异", detail: "微信渠道 2 笔订单金额需要人工核对。" },
];

export const eventPlans = [
  { title: "夏日累计充值", detail: "6 月 30 日 10:00 开启，持续 7 天。" },
  { title: "跨服公会战", detail: "报名阶段进行中，需确认奖励池配置。" },
  { title: "老玩家回流", detail: "定向邮件和登录礼包等待审核。" },
];

export const supportTickets = [
  {
    id: "t1",
    title: "充值后未收到月卡",
    player: "YH_9042",
    server: "一区 星火平原",
    message: "玩家反馈支付成功后未收到月卡权益，需要核对订单。",
  },
  {
    id: "t2",
    title: "账号异地登录提醒",
    player: "MoonBlade",
    server: "二区 雾海边境",
    message: "玩家申请解除登录保护，需要人工确认身份信息。",
  },
  {
    id: "t3",
    title: "活动奖励数量异常",
    player: "北境旅人",
    server: "三区 黑曜王城",
    message: "累计充值奖励显示已领取，但背包未增加对应道具。",
  },
];
