import { supportTickets } from "../services/adminData.js";

export function SupportPage() {
  return (
    <>
      <section className="page-toolbar">
        <div>
          <p className="panel-kicker">Support</p>
          <h2>客服工单</h2>
        </div>
        <div className="toolbar-actions">
          <button className="secondary-button" type="button">分配客服</button>
          <button className="primary-button" type="button">创建工单</button>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="panel-kicker">Tickets</p>
            <h2>待回复工单</h2>
          </div>
        </div>
        <div className="ticket-list">
          {supportTickets.map((ticket) => (
            <article className="ticket-item" key={ticket.id}>
              <div>
                <strong>{ticket.title}</strong>
                <span>{ticket.player} · {ticket.server}</span>
              </div>
              <p>{ticket.message}</p>
              <button className="text-button" type="button">回复</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
