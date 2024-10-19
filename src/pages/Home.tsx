import AllProducts from '../components/products/AllProducts';
import { MaxWidth } from '../components/ui';
import DocumentTitle from '../utils/DocumentTitle';

function HomePage() {

  return (
    <MaxWidth>
      <DocumentTitle title='صفحه اصلی' />
      <div className='my-8'>
        <h4 className='text-3xl font-bold my-4'>محصولات</h4>
        <AllProducts limitationCount={8} />
      </div>
    </MaxWidth>
  );
}

export default HomePage;
