import shopSrc from '../../assets/shop.png'

export default function HeaderBanner() {
  return (
    <div className="w-full  mt-20 flex justify-between xl:px-40 px-20 items-center max-h-[600px] rounded-xl rounded-tl-[18rem] rounded-br-[18rem] bg-gradient-to-br from-primary to-[#6BD4E8]">
        <div className='flex flex-col gap-10 text-white'>
          <h1 className='xl:text-9xl text-5xl font-bold'>Shop</h1>
          <h1 className='text-5xl font-medium'>In every day and every where</h1>
        </div>
        <img src={shopSrc} className='lg:w-[900px] lg:h-[600px] w-[200px] h-[500px]'/>
    </div>
  )
}
