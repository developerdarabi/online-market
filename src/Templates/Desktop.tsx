import React from 'react'

export default function DesktopTemplate({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-gradient-to-br from-[#f1f1f1] text-text_color' dir='ltr'>
        {children}
    </div>
  )
}
