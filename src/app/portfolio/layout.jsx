import React from 'react'
import styles from './page.module.scss'

const Layout = ({ children }) => {
	return (
		<div>
			<h1 className={styles.mainTitle}>我的作品</h1>
			{children}
		</div>
	)
}

export default Layout