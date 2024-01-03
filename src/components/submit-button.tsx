'use client'

import { useFormStatus } from 'react-dom'

interface Props {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function SubmitButton ({ onClick, children, className }: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      aria-disabled={pending}
      type='submit'
      className={`${pending ? 'cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
