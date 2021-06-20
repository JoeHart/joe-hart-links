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
      {links.map((link) => (
        <Link key={Object.values(link).join()} link={link} />
      ))}
    </ul>
  )
}
