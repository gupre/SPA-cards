import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [
    {
      id: 1,
      title: 'Продукт 1',
      description: 'Описание продукта 1',
      imageUrl: 'https://via.placeholder.com/150',
      isLiked: false,
    },
    {
      id: 2,
      title: 'Продукт 2',
      description: 'Описание продукта 2',
      imageUrl: 'https://via.placeholder.com/150',
      isLiked: false,
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.isLiked = !product.isLiked;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
  },
});

export const { toggleLike, deleteProduct, addProduct } = productsSlice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
