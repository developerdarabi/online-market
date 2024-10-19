import React from 'react'

export default function CentralContainer({ children,...props }: { children: React.ReactNode }) {
    return (
        <div className='flex justify-center items-center h-full' {...props}>{children}</div>
    )
}
