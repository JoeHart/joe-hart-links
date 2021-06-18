import React from 'react'
import Image from 'next/image'
import me from './me.jpeg'
import { Profile as ProfileType } from '../../types'
import styles from './Profile.module.scss'
type Props = ProfileType

export default function Profile({ name }: Props) {
  return (
    <div className={styles.root}>
      <Image className={styles.image} src={me} alt={name} width="128" height="128" />
      <h1 className={styles.name}>{name}</h1>
    </div>
  )
}
