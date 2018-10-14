import * as Types from './mutations-type';
const mutations={
  [Types.ADD_CART](state,book){
    let product=state.cartList.find(item=>item.bookId==book.bookId);
    if(product){ // 购物车有添加的这本书，则只在数量上加1
      book.bookCount+=1;
    }else{
      book.bookCount=1;
      state.cartList=[...state.cartList,book]
    }
  }
};
export default mutations;
