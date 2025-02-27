
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact_us/Contact_us'
import Shop from './Pages/Shop/Shop'
import Blog from './Pages/Blog/Blog'
import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import ShopOn from './shopByCategories/shopOn/ShopOn'



function App() {

  return (
   <div>

     <Router>
      <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/shop" element={<Shop/>} />
         <Route path="/about" element={<About />} />
         <Route path="/blog" element={<Blog/>} />
         <Route path="/contact_us" element={<Contact us/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/shopOn" element={<ShopOn/>} />
       </Routes>
       <Footer />
     </Router>

     <div>
     </div>
   </div>

   
  )
}

export default App
