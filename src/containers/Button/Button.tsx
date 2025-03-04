import styles from './Button.module.scss'

interface ButtonProps {
  children: string
  className?: string
  onClick?: () => void
}

const Button = ({
  children,
  className,
  onClick
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      // className={cx(styles.button, className)}
    >
      {children}
    </button>
  )
}

export default Button
