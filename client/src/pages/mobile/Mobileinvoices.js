import classes from "./MobileInvoices.module.css";
import { useContext } from "react";
import { DataContext } from "../../data/state/DataContext";

export const Mobileinvoices: React.FC = () => {
  const data = useContext(DataContext);
  const { invoices, client } = data;

  return (
    <div className={classes.background}>
      <div className={classes.invoicesheader}>
        <div>
          <div className={classes.headertitle}>Invoices</div>
          <div className={classes.subtitle}>
          {invoices.length} invoices
          </div>
        </div>
        <div className={classes.selectbtngroup}>
          <select title="filter" name="filter">
            <option typeof="checkbox" value="">All</option>
            <option value="">Paid</option>
            <option value="">Unpaid</option>
          </select>
          <button className={classes.invbtn}>+ New Invoice </button>
        </div>
      </div>
      <div className={classes.invoiceslist}>
        {invoices.map((invoice: any, index: number) => {
          return (
            <div className={classes.invoice} key={index}>
              <div className={classes.header}>
                <div>{invoice.id}</div>
                <div>{invoice.clientName}</div>
              </div>
              <div className={classes.body}>
                <div className={classes.total}>
                  <div>{invoice.createdAt}</div>
                  <div>${invoice.total}</div>                                                   
                </div>
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
