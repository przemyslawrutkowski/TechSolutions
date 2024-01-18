import React from 'react';
import DashboardContent from './DashboadContent';
import SideNavbar from './SideNavbar';

import styles from './DashboardPage.module.css';

export default function DashboardPage() {
    return (
        <div className={`mt-5 mb-5 ${styles.pageContainer} overflow-hidden`}>
            <div className={styles.dashboardContainer}>
                <SideNavbar />
                <DashboardContent />
            </div>
        </div>
    );
}
