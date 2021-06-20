import React from 'react'

import TwitterLink from './TwitterLink'
import WebsiteLink from './WebsiteLink'

import { LinkItem } from '../../types'

type Props = {
  link: LinkItem
}

export default function Link({ link }: Props) {
  switch (link.linkType) {
    case `Twitter`:
      return <TwitterLink {...link} />
    case `Website`:
      return <WebsiteLink {...link} />
    default:
      return <p>Error unsupported link type</p>
  }
}
