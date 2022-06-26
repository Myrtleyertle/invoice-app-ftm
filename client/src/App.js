import React, { useContext } from 'react';
import { Sidebar } from './components/Sidebar';
import { Invoices } from './pages/invoices/Invoices';
import classes from './App.module.css';
import { DataContext } from './data/state/DataContext';
import { Mobileinvoices } from './pages/mobile/Mobileinvoices';
import { MobileSidebar } from './pages/mobile/MobileSidebar';
function App() {
  const data = useContext(DataContext);
  const [width, setWidth] = React.useState(window.innerWidth);
  const { getInvoices } = data;
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    getInvoices();
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, [getInvoices]);
  return (
    <div className={classes.App}>
      {width > 450 ? <Sidebar /> : <MobileSidebar />}
      {width > 450 ? <Invoices /> : <Mobileinvoices />}
    </div>
  );
}

export default App;
