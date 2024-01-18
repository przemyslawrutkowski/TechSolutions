import React from 'react';
import DashboardContent from './DashboadContent';
import SideNavbar from './SideNavbar';

import styles from './DashboardPage.module.css';

export default function DashboardPage() {
    return (
        <div className={styles.dashboardContainer}>
            <SideNavbar />
            <DashboardContent />
        </div>
    );
}
