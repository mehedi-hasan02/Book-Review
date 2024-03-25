import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import ListedBook from './Pages/ListedBook.jsx';
import PagesToRead from './Pages/PagesToRead.jsx';
import BookDetails from './Component/Book/BookDetails.jsx';
import ReadBook from './Component/ReadBook.jsx';
import WishList from './Pages/WishList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader:()=>fetch('fakeData.json'),
      },
      {
        path: '/listedBook',
        element: <ListedBook/>,
        children:[
          {
            index: true,
            element:<ReadBook/>,
          },
          {
            path: 'wishlist',
            element: <WishList/>
          },
        ]
      },
      
      {
        path: '/pagesRead',
        element: <PagesToRead/>
      },
      {
        path:'/book/:bookId',
        element:<BookDetails/>,
        loader:({params})=>fetch(`fakeData.json/${params.bookId}`),
        // children:[
        //   {
        //     index: true,
        //     element: <ReadBook/>,
        //     loader:({params})=>fetch(`fakeData.json/${params.bookId}`),
        //   },
        //   {
        //     path: 'wishList',
        //     element: <WishList/>,
        //     loader:({params})=>fetch(`fakeData.json/${params.bookId}`),
        //   }
        // ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
