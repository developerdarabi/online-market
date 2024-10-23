import { ReactComponent as BuySvg } from '../../assets/ecommerce_header.svg'
import { APP_NAME } from '../../Statics'


export default function ShopDescription() {
    return (
        <div className={'flex items-center justify-center w-full lg:flex-row flex-col'}>
            <BuySvg className='md:max-w-[700px] max-w-[500px]' />
            <div className='w-2/3 flex flex-col gap-6 md:text-start text-center'>
                <h1 className='xl:text-4xl text-3xl font-medium'>Shop Smart: Quality Products at Unbeatable Prices!</h1>
                <h6 className='xl:text-xl text-md opacity-60 font-medium'>Welcome to {APP_NAME}, where quality meets affordability! Our curated selection features a diverse range of products designed to enhance your lifestyle. Whether you're looking for the latest gadgets, trendy fashion items, or everyday essentials, we’ve got you covered. Shop with us for an enjoyable experience, unbeatable prices, and exceptional customer service!</h6>
            </div>
        </div>
    )
}
