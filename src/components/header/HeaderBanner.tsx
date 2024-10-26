import shopSrc from '../../assets/shop.png'
import {ReactComponent as HeaderShop} from '../../assets/online_shoping.svg'

export default function HeaderBanner() {
  return (
    <div className="w-full  mt-20 flex justify-between items-center max-h-[600px] rounded-xl rounded-tl-[12rem] rounded-br-[12rem] bg-gradient-to-br from-primary to-[#6BD4E8]">
        <div className='flex flex-col gap-10 text-white ps-20'>
          <h1 className='xl:text-7xl lg:text-4xl text-2xl font-bold text-primary'>Online shop</h1>
          <h1 className='xl:text-4xl tlg:ext-3xl text-xl font-medium text-background'>In every day and every where</h1>
        </div>
        <HeaderShop className='aspect-[16/11] max-w-[1100px]'/>
    </div>
  )
}
