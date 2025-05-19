import {useState,useEffect} from 'react'
import Produto from './Produto'

const Home = () => {

  const [produto,setProduto]=useState([]);
  const [loading, setLoading]=useState(true);
  const [error, setError]=useState(null);

  useEffect(()=>{
    fetch('http://localhost:3001/produtos')
    .then(response =>{
      if(!response.ok){
        console.log("Erro ao trazer os produtos")
      }
      return response.json();
    })
    .then(data=>{
      setProduto(data);
      setLoading(false)
    })
    .catch(error =>{
      setError(error);
      setLoading(false)
      console.log("erro ao buscar produtos")
    })
  },[])

  if(loading){
    return <div>Carregando produtos...</div>
  }
  if(error){
    return <div>Error ao carregar os produtos</div>
  }

  return (
    <div className='flex justify-center flex-wrap'>

      {produto.map((produto)=>(
        <Produto key={produto.id} produto={produto}/>
      ))}
    </div>
  )
}

export default Home
