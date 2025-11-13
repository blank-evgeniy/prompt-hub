type BadgeProps = {
  children: React.ReactNode
}

export const Badge = ({ children }: BadgeProps) => (
  <span className="border-primary bg-primary/20 rounded-selector border px-2 py-1 text-sm">
    {children}
  </span>
)
