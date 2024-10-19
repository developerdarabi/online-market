import product1 from '../../assets/main/product1.webp'
import product2 from '../../assets/main/product2.webp'
import product3 from '../../assets/main/product3.jpg'

export default function HomeSlider() {
    return (
        <div className='h-full w-full relative'>
            <img src={product3} className="absolute w-full h-full" />
        </div>
    )
}
