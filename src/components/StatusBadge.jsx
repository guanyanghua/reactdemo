const statusMap = {
  normal: "正常",
  warning: "关注",
  danger: "异常",
  success: "完成",
};

export function StatusBadge({ status }) {
  return (
    <span className={`status-badge status-${status}`}>
      {statusMap[status] ?? status}
    </span>
  );
}
