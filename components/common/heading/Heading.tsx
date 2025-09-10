import clsx from 'clsx'
import styles from './Heading.module.scss'

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingVariant =
  | 'page'
  | 'section'
  | 'subsection'
  | 'container-large'
  | 'card'

interface HeadingProps {
  element: HeadingElement
  variant: HeadingVariant
  className?: string
  children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({
  element: Element,
  variant,
  className,
  children,
}) => {
  return (
    <Element className={clsx(styles.heading, styles[variant], className)}>
      {children}
    </Element>
  )
}
