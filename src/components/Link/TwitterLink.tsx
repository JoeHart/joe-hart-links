import React from 'react'

import { TwitterLinkItem } from '../../types'
import BaseLink from './BaseLink'
import TwitterLogo from './Icons/Twitter'

type Props = TwitterLinkItem

export default function TwitterLink({ username, label }: Props) {
  return (
    <>
      <BaseLink
        link={`https://twitter.com/${username}`}
        label={label != null ? label : `@${username}`}
        icon={<TwitterLogo />}
      />
    </>
  )
}
