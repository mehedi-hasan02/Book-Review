import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import ListedBook from './Pages/ListedBook.jsx';
import PagesToRead from './Pages/PagesToRead.jsx';
import BookDetails from './Component/Book/BookDetails.jsx';
import ReadBook from './Component/ReadBook.jsx';
import WishList from './Pages/WishList.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './Component/ErrorPage.jsx';
import Contact from './Component/Contact.jsx';
import SignIn from './Component/SignIn.jsx';
import UpComing from './Pages/UpComing.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        loader: async () => {
          const data = await fetch('https://raw.githubusercontent.com/mehedi-hasan02/book-data/main/fakeData.json')
          return data
        },
        element: <Home />,

      },
      {
        path: '/listedBook',
        element: <ListedBook />,
        children: [
          {
            path: '',
            element: <ReadBook />,

          },
          {
            path: 'wishlist',
            element: <WishList />
          },
        ]
      },

      {
        path: '/pagesRead',
        element: <PagesToRead />
      },
      {
        path: '/book/:bookId',
        element: <BookDetails />,
        loader: ({ params }) => fetch(`fakeData.json/${params.bookId}`),
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path: '/upcoming',
        loader: async () => {
          const data = await fetch('https://github.com/mehedi-hasan02/upcoming-data/blob/main/upcoming.json')
          return data
        },
        element: <UpComing/>
      },
      {
        path: '/signIn',
        element: <SignIn/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </>
)
