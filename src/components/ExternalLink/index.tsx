import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  href: string
}

export default function ExternalLink({ children, href, className }: Props) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
