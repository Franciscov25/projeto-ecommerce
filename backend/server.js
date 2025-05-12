const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs').promises; // promises garante que o arquivo será encontrado
const app = express();
const port = 3001 // criando porta

//Middleware são pequenas ferramentas

//Middleware para permitir que o frontend acesse o servidor backend em diferentes dominios
app.use(cors());
//Middleware para verificar se o corpo das requisições estão como json
app.use(express.json());
//Middleware para garantir os arquivos da pasta public staticos
app.use(express.static('static'))


//ROTA DE PRODUTOS - GET BUSCAR PRODUTOS

// toda requisição tem o req e o res, requisição/resposta
// async permite executar outras funções ao mesmo tempo, torna a aplicação mais rápida
app.get('/produtos', async (req,res)=>{
    
    try{
        const file = path.join(__dirname,'data','produtos.json');
        const data = await fs.readFile(file,'utf8');
        const produtos = JSON.parse(data);
        res.json(produtos)
    }
    catch(error){
        console.log('Erro ao ler o arquivo',error)
        res.status(500).json({message:'Erro ao byscar os produtos'}) // 500 é quando o servidor não consegue ler/buscar dados
    }
})

//ROTA

app.post('/carrinho/adicionar',(req,res)=>{

const {produtoId,quantidade} =req.body;

console.log(`Produto ${produtoId} adicionado ao carrinho ${quantidade}`);

res.status(201).json({message:"Produto adicionado ao carrinho com sucesso"})

})

// RODAR O SERVIDOR BACKEND
app.listen(port,()=>{
    console.log(`Servidor Rodando em http://localhost:${port}`);
})