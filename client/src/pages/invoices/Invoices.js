import classes from "./Invoices.module.css";
import { useContext, useState } from "react";
import { DataContext } from "../../data/state/DataContext";
import NewInvoiceModal from "../../modals/NewInvoiceModal"
import { Link } from "react-router-dom";
import { Invoice } from "./Invoice"
export const Invoices= () => {
  const data = useContext(DataContext);
  const { invoices, client, setActiveInvoice } = data;
  const [showModal, setShowModal] = useState(false);
  const Invoices = invoices.map((invoice, index) => {
    return (
      <div className={classes.invoice} key={index}>
        <div>#{invoice.id}</div>
        <div className={classes.clientName}>{invoice.clientName}</div>
        <div className={classes.createdAt}>{invoice.createdAt}</div>
        <div>${invoice.total}</div>
        <div className={classes.status}>
          {invoice.status === "paid" ? (
            <div className={classes.paid}>
              <div className={classes.greencircle}></div>Paid
            </div>
          ) : invoice.status === "pending" ? (
            <div className={classes.pending}>
              <div className={classes.orangecircle}></div>Pending
            </div>
          ) : (
            <div className={classes.draft}>
              <div className={classes.darkcircle}></div>Draft
            </div>
          )}
          <Link to='/Invoice' onClick={() => setActiveInvoice(index)}>
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
           </Link>
        
        </div>
      </div>
    );
  })
  return (
    <div className={classes.background}>
      <div className={classes.invoicesheader}>
        <div>
          <div className={classes.headertitle}>Invoices</div>
          <div className={classes.subtitle}>
          There are {invoices.length} total invoices
          </div>
        </div>
        <div className={classes.selectbtngroup}>
          <span>Filter by:</span>
          <select className={classes.select} title="filter"  name="filter">
           
            <option typeof="checkbox" value="">All</option>
            <option value="">Paid</option>
            <option value="">Pending</option>
          </select>
         <NewInvoiceModal />
        </div>
      </div>
      <div className={classes.invoiceslist}>
        {Invoices}
      </div>
    </div>
  );
};
