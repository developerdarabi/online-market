import React from 'react'
import {ReactComponent as EmptyCartsSvg} from '../../assets/empty_cart.svg'
import { Link } from 'react-router-dom'

export default function EmptyCarts() {
  return (
    <div className='flex items-center justify-center flex-col gap-5 pt-14 pb-14'>
      <EmptyCartsSvg className='aspect-[16/9] max-w-[500px]'/>
      <h6 className='md:text-xl text-sm font-medium mt-14'>Your cart is empty</h6>
      <Link to={'/products'} className='bg-primary text-white rounded-md px-4 py-2'>Go shopping</Link>
    </div>
  )
}
