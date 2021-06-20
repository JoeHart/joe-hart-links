import { LinkItem } from '../types'

const links: Array<LinkItem> = [
  {
    linkType: `Twitter`,
    username: `joehart`,
  },
  {
    linkType: `Website`,
    label: `My Homepage`,
    emoji: `🏡`,
    link: `https://www.joehart.co.uk`,
  },
  {
    linkType: `Website`,
    label: `My Video Games`,
    emoji: `👾`,
    link: `https://www.joehart.fun`,
  },
  {
    linkType: `Website`,
    emoji: `🏳️‍🌈`,
    label: `Pride Flag API`,
    link: `https://www.pride.dev`,
  },
  {
    linkType: `Website`,
    emoji: `😃`,
    label: `This is a really long label for this link to test what the text is like when its longer than that`,
    link: `https://www.pride.dev`,
  },
]

export default links
