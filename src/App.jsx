import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import FirstModule from './Components/FirstModule/FirstModule'
import Collection from './Components/Colletion/Collection'
import ForMens from './Components/ForMens/ForMens'
import Aboutus from './Components/Aboutus/Aboutus'
import ForWomen from './Components/ForWomen/ForWomen'
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import ForMensData from './Components/ForMensData/ForMensData'
import Maincomponents from './Components/Maincomponents/Maincomponents'
import ForWomenData from './Components/ForWomenData/ForWomenData'
import Ditels from './Components/Ditels/Ditels'










function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    
    
    
      

    <BrowserRouter>
    
    < Navigation/>
    
        <Routes>
        <Route path='/' element={<Maincomponents/>}/>
        <Route path='/formensdata' element={<ForMensData/>}/>
        <Route path='/forwomendata' element={<ForWomenData/>}/>
        <Route path='/detels' element={<Ditels/>}/>
        
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
