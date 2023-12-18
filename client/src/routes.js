import { ProductList, ProductCreate, ProductCart } from "./pages"
import PageView from "./layouts/pageView"
const routes = [
  {
    path: "/",
    element: <ProductList/>,
    // Layout: <PageView />
  },
  {
    path: "/cart",
    element: <ProductCart/>,
    
    // Layout: <PageView />
  },
  {
    path: "/create-product",
    element: <ProductCreate/>,
    // Layout: <PageView />
  },
]

export {routes} 