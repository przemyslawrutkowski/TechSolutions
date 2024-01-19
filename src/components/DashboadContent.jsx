import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Orders from './Orders';
import Account from './Account';
import Opinions from './Opinions';
import TechnicalSupport from './TechnicalSupport';
import OrderDetails from './OrderDetails';

import styles from './DashboardContent.module.css'

const DashboardContent = () => {
    return (
        <div className={`${styles.mainContent} overflow-hidden`}>
            <Routes>
                <Route path="orders" element={<Orders />} />
                <Route path="orders/order-details/:orderNumber" element={<OrderDetails />} />
                <Route path="details" element={<Account />} />
                <Route path="opinions" element={<Opinions />} />
                <Route path="support" element={<TechnicalSupport />} />
            </Routes>
        </div>
    );
};

export default DashboardContent;
