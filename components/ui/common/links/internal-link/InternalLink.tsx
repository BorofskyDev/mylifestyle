import { AnchorHTMLAttributes } from 'react'
import { Icon, icons } from '@/components/ui/'
import Link from 'next/link'
import styles from './InternalLink.module.scss'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

interface InternalLinkProps extends AnchorProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

const isClearlyExternal = (url: string) => /^(https?:\/\/|mailto:)/i.test(url)

export function InternalLink({
  href,
  external,
  children,
  className = '',
  ...rest
}: InternalLinkProps) {
  const isExternal = external ?? isClearlyExternal(href)

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${styles.internalLink} ${className}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={
          rest['aria-label'] ??
          (typeof children === 'string'
            ? `${children} (opens in a new tab)`
            : undefined)
        }
        {...rest}
      >
        {children}
        <Icon
          path={icons.external}
          aria-hidden='true'
          className={styles.externalIcon}
        />
      </a>
    )
  }

  return (
    <Link href={href} className={`${styles.internalLink} ${className}`} {...rest}>
      {children}
    </Link>
  )
}
