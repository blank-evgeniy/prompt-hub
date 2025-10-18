'use client'

import Link from 'next/link'

import { Typography } from '@/shared/ui/typography'

interface StatCardProps {
  href: string
  count: number
  label: string
  icon: React.ReactNode
}

export const StatCard = ({ href, count, label, icon }: StatCardProps) => (
  <Link
    href={href}
    className="group hover:bg-base-200 space-y-1 rounded-lg p-2 transition-colors"
  >
    <Typography
      variant="h2"
      className="text-primary group-hover:text-primary/80"
    >
      {count}
    </Typography>
    <Typography
      variant="description"
      className="flex items-center justify-center gap-1"
    >
      {icon}
      {label}
    </Typography>
  </Link>
)
