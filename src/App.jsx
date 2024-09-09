import { Provider } from "react-redux";

import store from "./utils/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import WatchPages from "./components/WatchPages";
import Layout from "./components/Layout";

import MainContainer from "./components/MainContainer";
import SearchedVideo from "./components/SearchedVideo";


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element:<MainContainer/>
    },
    {
      path: "/watch",
      element:<WatchPages/>
    },
    {
      path: "/search",
      element:<SearchedVideo/>
    }

  ]
}])

function App() {
  return (
    <Provider store={store}>
      <>
        <RouterProvider router={appRouter}/>
      </>
    </Provider>
  );
}

export default App;
