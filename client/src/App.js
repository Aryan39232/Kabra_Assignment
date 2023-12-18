import { Navbar } from "./component";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { routes } from './routes'
function App() {
  const router = createBrowserRouter(routes)
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// const RouteCombiner = ({ routes }) => {
//   const RoutesMap = routes.map(
//     ({
//       exact = true,
//       Layout = ({ children }) => <>{children}</>,
//       modules,
//       Component,
//       path
//     }) => {
//       const ComponentWithLayout = () => {
//         return (
//           <Layout>
//             <Component/>
//           </Layout>
//         )
//       }
//       return (
//         <Route
//           key={path}
//           exact={exact}
//           path={path}
//           component={ComponentWithLayout}
//           />
//       )
//     }
//   )
//   return <Switch>{RoutesMap}</Switch>
// }