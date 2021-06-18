export type TwitterLinkItem = {
  linkType: 'Twitter'
  username: string
  label?: string
}

export type WebsiteLinkItem = {
  linkType: 'Website'
  emoji?: string
  link: string
  label: string
}

export type LinkItem = TwitterLinkItem | WebsiteLinkItem

export type Profile = {
  name: string
}
