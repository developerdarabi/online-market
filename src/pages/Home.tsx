import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import MainCategories from '../components/Categories/MainCategories';
import MobileCategories from "../components/Categories/Mobile";
import Payment from "../components/Home/Payment";
import ShopDescription from '../components/Home/ShopDescription';
import SearchProductWithSort from "../components/SearchProductWithSort";
import AllProducts from '../components/products/AllProducts';
import MobileSlider from "../components/products/MobileSlider";
import { MaxWidth } from '../components/ui';
import useViewport from '../hooks/useViewPort';
import DocumentTitle from '../utils/DocumentTitle';

function HomePage() {
  const { isMobile } = useViewport()

  if (isMobile) {
    return <section className="p-4 flex flex-col gap-4">
      <DocumentTitle title='home' />
      <SearchProductWithSort />
      <MobileSlider />
      <MobileCategories />
      <div className='flex items-center justify-between'>
        <h4 className='text-sm font-bold'>Popular</h4>
        <Link className='text-xs font-medium flex items-center justify-center text-primary' to={'/products'}>
          Vew all
          <MdKeyboardArrowRight size={25} />
        </Link>
      </div>
      <AllProducts limitationCount={4} />
    </section>
  }

  return (
    <MaxWidth className='flex flex-col gap-20'>
      <DocumentTitle title='home' />
      <div className='my-32'>
        <h4 className='text-3xl font-bold mb-8'>Explore categories</h4>
        <MainCategories />
      </div>
      <ShopDescription />
      <div className='my-8'>
        <div className='flex items-center justify-between'>
          <h4 className='text-3xl font-bold my-4'>Products</h4>
          <Link className='text-xs font-medium flex items-center justify-center text-primary' to={'/products'}>
            See products
            <MdKeyboardArrowRight size={25} />
          </Link>
        </div>
        <AllProducts limitationCount={8} />
      </div>
      <Payment />
    </MaxWidth>
  );
}

export default HomePage;
