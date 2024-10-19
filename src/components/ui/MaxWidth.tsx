import React from 'react'

export default function MaxWidth({children}:{children:React.ReactNode}) {
  return (
    <div className='sm:px-2 md:px-12 xl:px-28'>
        {children}
    </div>
  )
}
