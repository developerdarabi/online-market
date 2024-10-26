import { ReactComponent as PaymentSvg } from '../../assets/payment.svg'

export default function Payment() {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-8'>
                <h1 className='xl:text-3xl text-xl font-bold'>Secure and Easy Payment Options</h1>
                <p className='xl:text-xl text-md font-medium opacity-70'>Enjoy a hassle-free checkout with multiple secure payment methods, including credit cards, PayPal, and more. Your information is protected with the latest encryption technology, ensuring a safe and smooth transaction every time</p>
            </div>
            <PaymentSvg className={'lg:aspect-[16/9] aspect-[1/1]'} />
        </div>
    )
}
