import React from 'react'

export default function DesktopTemplate({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-gradient-to-br from-background text-text_color' dir='rtl'>
        {children}
    </div>
  )
}
