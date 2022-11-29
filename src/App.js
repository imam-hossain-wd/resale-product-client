import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='w-11/12 mx-auto'>
      <RouterProvider router={router}/>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>

    </div>
  );
}

export default App;
