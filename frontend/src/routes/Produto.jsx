import {useDispatch} from 'react-redux'

import {addtoCart} from '../store/cartSlice'

import Swal from 'sweetalert2'



const Produto = ({produto}) => {
const dispatch = useDispatch();
const handleAddCarrinho =()=>{
dispatch(addtoCart(produto));

Swal.fire({
title: "Produto Adicionado",
text:`${produto.nome} foi adicionado ao carrinho`,
icon:"success",
confirmButtonText: "OK",

});



//função para pegar a requisição do servidor

fetch('http://localhost:3001/carrinho/adicionar',{
method:"POST",
headers:{
'Content-Type':'application/json',
},

body:JSON.stringify({produtoId:produto.id,quantidade:1}),

})

.then(response =>{

if(!response.ok){

console.log("Erro ao adicionar o carrinho",response.status);

}else{

return response.json();

}

})

.then(data =>{

if(data && data.message){

console.log("Verifica a resposta do servidor",data.message);

}

})

.catch(error=>{

console.log("erro ao enviar os dados para o servidor",error)

})



}



return (

<div>

<img src={`http://localhost:3001${produto.image.replace('/public','')}`}

alt={produto.nome}

className="w-full h-56 object-cover"/>

<div>

<h2>{produto.nome}</h2>

<p className="bg-gray-500 font-bold mb-2">{produto.preco}</p>

<button className="bg-blue-500 hover:blue-900 text-white rounded py-2 px-4"
onClick={handleAddCarrinho}>
Adicionar Carrinho
</button>
</div>
</div>
)
}



export default Produto