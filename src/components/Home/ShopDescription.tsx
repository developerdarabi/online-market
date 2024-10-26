import { ReactComponent as BuySvg } from '../../assets/ecommerce_header.svg'
import { APP_NAME } from '../../Statics'


export default function ShopDescription() {
    return (
        <div className={'flex justify-between items-center gap-10'}>
            <BuySvg className='lg:aspect-[16/9] aspect-[16/15]' />
            <div className='flex flex-col gap-8'>
                <h1 className='xl:text-3xl text-xl font-bold'>Quality Products at Unbeatable Prices!</h1>
                <h6 className='xl:text-xl text-md font-medium opacity-70'>Welcome to {APP_NAME}, where quality meets affordability! Our curated selection features a diverse range of products designed to enhance your lifestyle. Whether you're looking for the latest gadgets, trendy fashion items, or everyday essentials, we’ve got you covered</h6>
            </div>
        </div>
    )
}
