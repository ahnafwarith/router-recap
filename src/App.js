import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Header from './components/Header/Header';
import Grandpa from './components/Grandpa/Grandpa';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orders' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        <Route path='/*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
