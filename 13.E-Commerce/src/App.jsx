import { useEffect, useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import PageContainer from './container/PageContainer';
import Header from "./components/Header"
import RouterConfig from './config/RouterConfig';
import Loading from './components/UI/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, deleteFromBasket, setDrawer } from './redux/slices/basketSlice';


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])



  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer anchor='right' onClose={() => dispatch(setDrawer())} open={drawer} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                    <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', width: '60px' }}>{product.price}TL</p>
                    <button onClick={() => dispatch(deleteFromBasket(product))} style={{ marginLeft: '10px', borderRadius: '5px', backgroundColor: '#ec2849', border: 'none', color: 'white', width: '30px' }}>X</button>
                  </div>
                </div>
              )
            })
          }

          <div>
            <p style={{ textAlign: 'center' }}>Toplam Tutar : {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div >
  )
}

export default App
