import React, { useEffect, useState } from 'react'
import { Card } from '../component'
import { useSelector } from 'react-redux';
import axios from 'axios';

const cardDataMock =[
  {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ySFRhc4HgKeI5MZg4s5mB8_-FSdGS1MqMIvb1TqP4Q&s',
    title: 'Laptop',
    description: 'Powerful laptop with high-resolution display and fast processor.',
    price: '$999.99',
  },
  {
    link: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61L1ItFgFHL.jpg',
    title: 'Smartphone',
    description: 'The latest smartphone with a stunning camera and long-lasting battery.',
    price: '$699.99',
  },
  {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7mT9e23GJsn1yrcCQV91TgaGaOk8KDGbY1_91KgzAw&s',
    title: 'Headphones',
    description: 'Premium noise-canceling headphones for an immersive audio experience.',
    price: '$199.99',
  },
  {
    link: 'https://images.philips.com/is/image/philipsconsumer/72dbb6e1509a4cacb631ad1900d54b9e?wid=420&hei=360&$jpglarge$',
    title: 'Coffee Maker',
    description: 'State-of-the-art coffee maker for brewing your favorite coffee at home.',
    price: '$129.99',
  },
  {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMYUuAwwHsepv9ZFCakglELdts6cxMfO0v47NkJ-9iQ&s',
    title: 'Fitness Tracker',
    description: 'Track your fitness goals with this advanced fitness tracker.',
    price: '$79.99',
  },
  {
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCXPu5ZRtu6REEVbGU5r2g3Df9lM2x5dcp_2NywILwg&s',
    title: 'Wireless Speaker',
    description: 'Portable wireless speaker with crystal-clear sound and long battery life.',
    price: '$149.99',
  },
  {
    link: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/611Gy0SZvYL._AC_UF1000,1000_QL80_.jpg',
    title: 'Smart Watch',
    description: 'Stay connected and monitor your health with this stylish smartwatch.',
    price: '$249.99',
  },
];

function ProductCart() {
  const [productAdded, setProductsAdded] = useState([]);
  const [cart, setCart] = useState([]);
  const cartData = useSelector((state)=>state.cart);

  useEffect(() => {
    const getCart = async()=>{
      try {
        const {data} = await axios.get('http://localhost:5000/api/cart/get');
        setCart(data);
      } catch (error) {
        
      }
    }
    getCart();
  }, [])
  
  return (
    <div>
      {
        cart?.length>0?(
          <div class="row row-cols-2 row-cols-md-5 g-4" style={{margin:"1rem", padding:"1rem", marginInline:"1rem"}}>
            {
              cart?.map((ele, idx) => {
                return(
                  <Card props={ele.productId} key={idx} quantity={ele.quantity}/>

                )
              })
            }
          </div>
        ):(
          <div style={{opacity:"30%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src="https://shop.millenniumbooksource.com/static/images/cart1.png" alt="" />
          </div>
        )
      }
    </div>
  )
}

export default ProductCart