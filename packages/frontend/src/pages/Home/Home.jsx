import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { getAllProducts } from '../../features/products/productsSlice';

const Home = () => {

  const dispatch = useDispatch()
  const { products, error, loading } = useSelector(state => state.products)
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <>
      { loading && <p>Loading...</p> }
      { error && <p>{ error }</p>}
      
      <div className='hero-wrapper'>
        <div className='hero-bg'>
          <div className='hero-heading hidden'>ON SALE</div>
          <Link className="button">SHOP NOW <MdKeyboardArrowRight /></Link>
        </div>
        <div className='hero-bg'>
          <div className='hero-heading hidden'>BRANDS</div>
          <Link className="button">SHOP NOW <MdKeyboardArrowRight /></Link>
        </div>
      </div>

      <div className="grid-even-columns">
        { products.length > 0
          ? products.map(product => <Card key={product._id} product={product}  />)
          : <h2>No products to show</h2>
        }
      </div>
    </>
  )
}

export default Home