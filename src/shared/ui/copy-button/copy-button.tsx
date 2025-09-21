import { useEffect, useState } from 'react'
import { Button } from '../button'
import { CheckIcon, CopyIcon } from 'lucide-react'

type CopyButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'text' | 'onClick'
> &
  React.ComponentProps<'button'> & {
    text: string
  }

export const CopyButton = ({
  text,
  size = 'icon-sm',
  ...props
}: CopyButtonProps) => {
  const [showCopySuccess, setShowCopySuccess] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)

    setShowCopySuccess(true)
  }

  useEffect(() => {
    if (!showCopySuccess) return

    const timer = setTimeout(() => {
      setShowCopySuccess(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [showCopySuccess])

  return (
    <Button
      size={size}
      title="Копировать"
      aria-label="Копировать"
      onClick={handleCopy}
      {...props}
    >
      {showCopySuccess ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
