import styles from './TechnicalSupport.module.css'

export default function TechnicalSupport() {
    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>
                <h2>Chat</h2>
            </div>
            <div className={styles.chatMessages}>
                <div className={styles.message}>
                    <div className={styles.sender}>User</div>
                    <div className={styles.text}>Hello! Can You help me with...?</div>
                </div>
                <div className={styles.message}>
                    <div className={styles.sender}>Support</div>
                    <div className={styles.text}>Hi! Feel free to ask any questions.</div>
                </div>
            </div>
            <div className={styles.chatInput}>
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </div>
        </div>
    );
}