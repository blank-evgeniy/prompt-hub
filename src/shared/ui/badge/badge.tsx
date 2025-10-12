type BadgeProps = {
  children: React.ReactNode
}

export const Badge = ({ children }: BadgeProps) => (
  <span className="bg-primary text-primary-content rounded-selector px-2 py-1 text-sm">
    {children}
  </span>
)
