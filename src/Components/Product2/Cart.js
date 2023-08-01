import React,{useState,useEffect} from 'react'
import Appbar from '../Products/Appbar'
import Footer from '../Products/Footer'
import './cart.css'
import { useSelector } from 'react-redux'

const Cart = () => {
  // const cart = useSelector((state) => state.cart.cart)
  const [products, setProduct] = useState([]);

  useEffect(async () => {
    await fetch("http://localhost:3001/api/v1/products")
    .then(res => res.json())
    .then(data => setProduct(data))
  })
  return (
    <>
    <Appbar/>
      <div className="cart">
        {/* Left part */}
        <div className="cartLeft">
          {products.map((item,index) => {
            <div className='cartContainer'>
              {/* Image */}
              <div>
                <img src={item.imageURL} style={{width:100,height:100}}/>
                </div>
                {/* description */}
                <div>
                <p>{item.name.length > 30 ? item.name.substr(0,30) : item.name}</p>
                  <p>{item.description.length > 60 ? item.description.substr(0,60) : item.description}</p>
                </div>
                {/* buttons */}
                <div>

                </div>
              </div>
          })}

        </div>
        {/* Right part */}
        <div className="cartRight">
          <h2>Cart Right</h2>

        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Cart
