import { ReactComponent as EmptyWishListSvg } from '../../assets/empty_wish.svg'

export default function EmptyWishList() {
  return (
    <div className='flex items-center justify-center flex-col gap-5 pt-14 pb-14'>
      <EmptyWishListSvg className='aspect-[16/9] max-w-[500px]' />
      <h6 className='md:text-xl text-sm font-medium mt-14'>Your wishlist is empty</h6>
    </div>
  )
}
