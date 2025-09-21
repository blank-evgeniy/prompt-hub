type BadgeProps = {
  children: React.ReactNode
}

export const Badge = ({ children }: BadgeProps) => (
  <span className="bg-primary-container text-on-primary-container rounded px-2 py-1 text-sm">
    {children}
  </span>
)
