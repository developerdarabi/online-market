import { ReactComponent as EmptyHistorySvg } from '../../assets/no_data.svg'

export default function EmptyOrders() {
  return (
    <div className='flex items-center justify-center flex-col gap-5 pt-14 pb-14'>
      <EmptyHistorySvg className='aspect-[16/9] max-w-[500px]' />
      <h6 className='md:text-xl text-sm font-medium mt-14'>Your history is empty</h6>
    </div>
  )
}
