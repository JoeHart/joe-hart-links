import * as React from 'react'
import LinkList from '../components/LinkList'
import Profile from '../components/Profile'

import links from '../content/links'
import profile from '../content/profile'

import styles from './MainPage.module.scss'

export default function Homepage() {
  return (
    <div className={styles.root}>
      <Profile {...profile} />
      <LinkList links={links} />
    </div>
  )
}
