import * as React from 'react'
import Link from '../Link'
import styles from './LinkList.module.scss'

import { LinkItem } from '../../types'

type Props = {
  links: Array<LinkItem>
}

export default function LinkList({ links }: Props) {
  return (
    <ul className={styles.root}>
      {links.map((link, index) => (
        <Link key={index} link={link} />
      ))}
    </ul>
  )
}
