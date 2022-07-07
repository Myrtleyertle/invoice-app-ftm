import { useContext, Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Form } from "react-bootstrap";
import classes from "./EditInvoiceModal.module.css";
import { DataContext } from "../data/state/DataContext";

export const ModalOverlay = (props, e) => {
  const dataContext = useContext(DataContext);
  const { editInvoice } = dataContext;
  const { index, show, setShow } = props;
  const [formValid, setFormValid] = useState(false);
  const data = new FormData(e.target);
  const clientEmail = data.get('clientEmail');
  const clientName = data.get('clientName');
  const senderAddress = data.get('senderAddress');
  const street = data.get('street');
  const paymentTerms = data.get('paymentTerms');
  const paymentDue = data.get('paymentDue');
  const description = data.get('description');
  const total = data.get('total');
  const country = data.get('country');
  const city = data.get('city');
  const postCode = data.get('postCode');
  const billCity = data.get('billCity');
  const billCountry = data.get('billCountry');
  const billPostCode = data.get('billPostCode');
  const listName = data.get('listName');
  const quantity = data.get('quantity');
  const price = data.get('price');
  const status = data.get('status');
  const createdAt = data.get('createdAt');
  const items = data.getAll('items');
  return (
    <div className={classes.modaloverlay}>
        <div className={classes.btnheader}>
          <h1>Edit #{props.activeInvoice.id}</h1>
        </div>
        <h5 className={classes.billfrom}>Bill From</h5>
        <div className={classes.form}>
          <Form
            id="new-invoice"
            method="post"
            onSubmit={(e) => {
               if(clientName === "" || clientEmail === "" || senderAddress === "" || street === "" || paymentTerms === "" || paymentDue === "" || description === "" || total === "" || country === "" || city === "" || postCode === "" || billCity === "" || billCountry === "" || billPostCode === "" || listName === "" || quantity === "" || price === "" || status === "" || createdAt === "" || items === ""){
                return;
              } else {
                editInvoice(e, props.activeInvoice.id)
                setFormValid(true)
            }}}
          >
            <label htmlFor="senderAddress">Street Address</label>
            <input
              placeholder={props.activeInvoice.senderAddress.street}
              id="street"
              type="text"
              name="senderAddress"
              className={classes.forminput}
            />
            <div className={classes.senderAddress}>
              <div>
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  placeholder={props.activeInvoice.senderAddress.city}
                  name="city"
                  type="text"
                  className={classes.forminput}
                />
              </div>
              <div>
                <label htmlFor="postCode">Post Code</label>
                <input
                  id="postCode"
                  type="text"
                  placeholder={props.activeInvoice.senderAddress.postCode}
                  name="postCode"
                  className={classes.forminput}
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  placeholder={props.activeInvoice.senderAddress.country}
                  className={classes.forminput}
                  type="text"
                />
              </div>
            </div>
            <h5 className={classes.billto}>Bill To</h5>
            <label htmlFor="clientName">Client Name</label>
            <input
              id="clientName"
              type="text"
              placeholder={props.activeInvoice.clientName}
              name="clientName"
              className={classes.forminput}
            />
            <label htmlFor="clientEmail">Client's Email</label>
            <input
              id="clientEmail"
              type="text"
              name="clientEmail"
              placeholder={props.activeInvoice.clientEmail}
              className={classes.forminput}
            />
            <label htmlFor="clientAddress">Client's Address</label>
            <input
              id="clientAddress"
              type="text"
              placeholder={props.activeInvoice.clientAddress.street}
              className={classes.forminput}
            />
            <div className={classes.clientAddress}>
              <div>
                <label htmlFor="clientCity">City</label>
                <input
                  id="clientCity"
                  name="clientCity"
                  placeholder={props.activeInvoice.clientAddress.city}
                  className={classes.forminput}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="clientPostcode">Postal Code</label>
                <input
                  id="clientPostCode"
                  type="text"
                  placeholder={props.activeInvoice.clientAddress.postCode}
                  className={classes.forminput}
                  name="billPostCode"
                />
              </div>
              <div>
                <label htmlFor="clientCountry">Country</label>
                <input
                  id="clientCountry"
                  className={classes.forminput}
                  type="text"
                  placeholder={props.activeInvoice.clientAddress.country}
                  name="clientCountry"
                />
              </div>
            </div>
            <div className={classes.datepayment}>
              <label htmlFor="invoiceDate">Invoice Date</label>
              <input
                id="invoiceDate"
                className={classes.forminput}
                type="date"
                placeholder={props.activeInvoice.invoiceDate}
                name="invoiceDate"
              />
              <label htmlFor="paymentTerms">Payment Terms</label>
              <select
                id="paymentTerms"
                name="paymentTerms"
                palceholder={props.activeInvoice.paymentTerms}
                className="form-control"
                title="Invoice Terms"
              >
                <option value="1">Net 1 Day</option>
                <option value="7">Net 7 Days</option>
                <option value="14">Net 14 Days</option>
                <option value="30">Net 30 Days</option>
              </select>
            </div>
            <label htmlFor="description">Project Description</label>
            <input
              type="text"
              id="description"
              placeholder={props.activeInvoice.description}
              className={classes.forminput}
              name="description"
            />
            <div className={classes.list}>
              <div>
                <label htmlFor="listName">Name</label>
                <input
                  id="listName"
                  type="text"
                  placeholder={props.activeInvoice.items.name}
                  className={classes.forminput}
                  name="listName"
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity</label>
                <input
                  id="quantity"
                  type="text"
                  placeholder={props.activeInvoice.items.quantity}
                  className={classes.forminput}
                  name="quantity"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  placeholder={props.activeInvoice.items.price}
                  name="price"
                  id="price"
                  className={classes.forminput}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="total">Total</label>
                <input
                  id="total"
                  palceholder={props.activeInvoice.items.total}
                  name="total"
                  type="text"
                  className={classes.forminput}
                />
              </div>
            </div>
            <Button variant="light">+ Add New Item</Button>
            <div className={classes.btns}>
              <Button
                onClick={() => props.setShow(!props.show)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "grey",
                }}
              >
                cancel
              </Button>
              <div>
                <Button type="submit" variant="light">
                  Save Changes
                </Button>
              </div>
            </div>
            <>{formValid ?  null : <div>All fields must be added</div>}</>
          </Form>
        </div>
    </div>
  );
};
const Backdrop = (props) => {
  return (
    <div
      onClick={() => props.setShow(!props.show)}
      className={classes.backdrop}
    ></div>
  );
};
const EditInvoiceModal = ({ activeInvoice, show, setShow, index }) => {
  return (
    <Fragment>
      {show
        ? 
            <Backdrop show={show} setShow={setShow} />
        : null}
      {show ?
            <ModalOverlay
              activeInvoice={activeInvoice}
              index={index}
              show={show}
              setShow={setShow}
            />
        : null}
    </Fragment>
  );
};

export default EditInvoiceModal;
