import { DataTable } from "../components/DataTable.jsx";
import { paymentOrders, refundTasks } from "../services/adminData.js";

export function OrdersPage() {
  return (
    <>
      <section className="page-toolbar">
        <div>
          <p className="panel-kicker">Payment</p>
          <h2>充值订单</h2>
        </div>
        <div className="toolbar-actions">
          <button className="secondary-button" type="button">筛选异常</button>
          <button className="primary-button" type="button">手动补单</button>
        </div>
      </section>

      <DataTable
        title="订单流水"
        kicker="Orders"
        columns={["订单号", "商品", "金额", "渠道", "状态"]}
        rows={paymentOrders}
      />

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="panel-kicker">Refund</p>
            <h2>退款与补单</h2>
          </div>
        </div>
        <div className="task-list">
          {refundTasks.map((task) => (
            <article className="task-item" key={task.title}>
              <div>
                <strong>{task.title}</strong>
                <span>{task.detail}</span>
              </div>
              <button className="text-button" type="button">处理</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
