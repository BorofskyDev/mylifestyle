import styles from './GenericPage.module.scss'

interface GenericPageProps {
  children: React.ReactNode
  className?: string
}

export function GenericPage({ children, className }: GenericPageProps) {
  return (
    <main className={`${styles.genericPage} ${className ?? ''}`}>
      {children}
    </main>
  )
}
