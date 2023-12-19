import React, { useState,useEffect } from 'react'
import { Card } from '../component'
import { Store } from '../store'
import { useDispatch, useSelector } from 'react-redux';
const cardData =[
  {
    _id:"6501f7b394ebe96296d60112",
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ySFRhc4HgKeI5MZg4s5mB8_-FSdGS1MqMIvb1TqP4Q&s',
    title: 'Laptop',
    description: 'Powerful laptop with high-resolution display and fast processor.',
    price: '$999.99',
  },
  {
    _id:"6501f7b394ebe96296d60112",

    link: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61L1ItFgFHL.jpg',
    title: 'Smartphone',
    description: 'The latest smartphone with a stunning camera and long-lasting battery.',
    price: '$699.99',
  },
  {
    _id:"6501f7b394ebe96296d60112",

    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7mT9e23GJsn1yrcCQV91TgaGaOk8KDGbY1_91KgzAw&s',
    title: 'Headphones',
    description: 'Premium noise-canceling headphones for an immersive audio experience.',
    price: '$199.99',
  },
  {
    _id:"6501f7b394ebe96296d60112",

    link: 'https://images.philips.com/is/image/philipsconsumer/72dbb6e1509a4cacb631ad1900d54b9e?wid=420&hei=360&$jpglarge$',
    title: 'Coffee Maker',
    description: 'State-of-the-art coffee maker for brewing your favorite coffee at home.',
    price: '$129.99',
  },
  {
    _id:"6501f7b394ebe96296d60112",

    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMYUuAwwHsepv9ZFCakglELdts6cxMfO0v47NkJ-9iQ&s',
    title: 'Fitness Tracker',
    description: 'Track your fitness goals with this advanced fitness tracker.',
    price: '$79.99',
  },
  {
    _id:"6501f7b394ebe96296d60112",

    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCXPu5ZRtu6REEVbGU5r2g3Df9lM2x5dcp_2NywILwg&s',
    title: 'Wireless Speaker',
    description: 'Portable wireless speaker with crystal-clear sound and long battery life.',
    price: '$149.99',
  },
  {
    _id:"6501f7b394ebe96296d60112",

    link: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/611Gy0SZvYL._AC_UF1000,1000_QL80_.jpg',
    title: 'Smart Watch',
    description: 'Stay connected and monitor your health with this stylish smartwatch.',
    price: '$249.99',
  },
];

const ProductList = () => {
  const productsList = useSelector((state) => state.list?.productList );

  const [products, setProducts] = useState(productsList)
  useEffect(() => {
    
  }, [])
  
  return (
    <div class="row row-cols-2 row-cols-md-5 g-4" style={{margin:"1rem", padding:"1rem", marginInline:"1rem"}}>
      {
        products && products?.map((ele, idx) => {
          return(
            <Card props={ele} key={idx}/>
          )
        })
      }
    </div>
  )
}

export default ProductList