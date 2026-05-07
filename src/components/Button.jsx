import { Link } from 'react-router-dom'

export default function Button({ to, href, onClick, variant = 'primary', children, className = '' }) {
  const cls = `${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`

  if (to) return <Link to={to} className={cls}>{children}</Link>
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}
