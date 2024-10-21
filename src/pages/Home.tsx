import AllProducts from '../components/products/AllProducts';
import { MaxWidth } from '../components/ui';
import useViewport from '../hooks/useViewPort';
import DocumentTitle from '../utils/DocumentTitle';

function HomePage() {
  const { isMobile } = useViewport()

  if (isMobile) {
    return <section>
      <DocumentTitle title='home' />
      Mobile main page
    </section>
  }

  return (
    <MaxWidth>
      <DocumentTitle title='home' />
      <div className='my-8'>
        <h4 className='text-3xl font-bold my-4'>Products</h4>
        <AllProducts limitationCount={8} />
      </div>
    </MaxWidth>
  );
}

export default HomePage;
