import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './routes/Home'
import Carrinho from './routes/Carrinho'

function App() {

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <main className='flex-grow'>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carrinho' element={<Carrinho/>}/>
      </Routes>
       </main>
      </div>
    </Router>
  )
}

export default App
