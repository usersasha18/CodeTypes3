import React from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner_footer}>
        <p className={styles.footer_title}>CodeTypes</p>
        <div className={styles.footer_social}>
          <ul>
            <li>YouTube</li>
            <li>GitHub</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
