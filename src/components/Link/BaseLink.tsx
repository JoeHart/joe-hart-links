import React from 'react'
import ExternalLink from '../ExternalLink'
import styles from './Link.module.scss'

type Props = {
  label: string
  icon?: React.ReactElement | string
  link: string
}

export default function BaseLink({ link, label, icon }: Props) {
  return (
    <li className={styles.root}>
      <ExternalLink href={link} className={styles.link}>
        {icon != null ? <span className={styles.icon}>{icon}</span> : null}{' '}
        {label}
      </ExternalLink>
    </li>
  )
}
