import React from 'react'
import { TbArrowsSort } from "react-icons/tb";

export default function SearchProductWithSort() {
  return (
    <div className='flex items-center justify-between gap-4'>
        <input type='search' placeholder='Search ...' className='w-full rounded-xl p-2 text-sm font-medium'/>
        <button className='bg-primary rounded-xl p-2 text-white'><TbArrowsSort/></button>
    </div>
  )
}
