import { createSlice } from '@reduxjs/toolkit';

// Cria um slice do Redux Toolkit para gerenciar o estado do carrinho.
const cartSlice = createSlice({

// Nome do slice, usado para identificar as actions geradas.
name: 'carrinho',

// Estado inicial do carrinho, que é um array vazio.
initialState: [],

// Reducers definem como o estado do carrinho deve ser alterado em resposta a actions.
reducers: {

// Reducer para adicionar um item ao carrinho.
addToCart: (state, action) => {

// Procura se o item já existe no carrinho.
const item = state.find((i) => i.id === action.payload.id);

// Se o item já existe, incrementa a quantidade.
if (item) {
item.quantidade++;
} else {

// Se o item não existe, adiciona ao carrinho com quantidade 1.
state.push({ ...action.payload, quantidade: 1 });

}

},

// Reducer para remover um item do carrinho.

removeFromCart: (state, action) => {

// Filtra o array de itens, removendo o item com o ID correspondente.
return state.filter((item) => item.id !== action.payload.id);
},

// Reducer para limpar o carrinho, retornando um array vazio.
clearCart: (state) => {
return [];
},
},
});

// Exporta as actions geradas pelo createSlice.
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Seletor para calcular a quantidade total de itens no carrinho.
export const selectCartItemsCount = (state) => {

// Usa reduce para somar a quantidade de todos os itens no carrinho.
return state.carrinho.reduce((total, item) => total + item.quantidade, 0);

};

// Exporta o reducer gerado pelo createSlice.
export default cartSlice.reducer;