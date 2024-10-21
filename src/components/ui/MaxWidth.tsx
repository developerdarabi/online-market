import React from 'react'

export default function MaxWidth({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`sm:px-2 md:px-12 xl:px-40 ${className}`}>
      {children}
    </div>
  )
}
