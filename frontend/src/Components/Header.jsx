import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { selectCartItemsCount } from '../store/cartSlice'

const Header = () => {

  const contadorItemsCarrinho = useSelector(selectCartItemsCount)

  return (
    <header className='bg-blue-400 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl  font-bold'>Loja Ecom</h1>
        <nav className='relative'>
          <Link to="/" className='mr-4 transition duration-200 hover:text-blue-600'>Home</Link>
          <Link to="/carrinho" className='transition duration-200 hover:text-blue-600'>
            Carrinho
            {contadorItemsCarrinho > 0 &&(
              <span className='absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full px-2 py-1'>
                {contadorItemsCarrinho}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
