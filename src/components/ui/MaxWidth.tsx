import React from 'react'

export default function MaxWidth({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`sm:px-2 md:px-12 lg:px-20 xl:px-30  ${className}`}>
      {children}
    </div>
  )
}
