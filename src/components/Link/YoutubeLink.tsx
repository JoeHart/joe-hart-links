import React from 'react'

import { WebsiteLinkItem } from '../../types'
import BaseLink from './BaseLink'

type Props = WebsiteLinkItem

export default function WebsiteLink({ link, label, emoji }: Props) {
  return <BaseLink link={link} label={label} icon={emoji} />
}
