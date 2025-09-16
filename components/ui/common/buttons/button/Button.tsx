
import styles from './Button.module.scss'


type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'small'
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  disabled?: boolean
  ariaLabel?: string
}


export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  type = 'button',
  onClick,
  className,
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${
        styles[`button--${variant}`]
      } ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
