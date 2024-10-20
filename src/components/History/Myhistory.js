import React from "react";
/*import ReactDOM from 'react-dom/client';*/
import './Myhistory.css';
import Header from "./Header";
import Footer from "./Footer";
import HistoryTable from "./HistoryTable";

const Myhistory = () => {
    return (

        <div className="myhis_div">
            <Header />
            <HistoryTable />
            <Footer />
        </div>
    );
};
export default Myhistory;