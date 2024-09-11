import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types/Product';


export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

interface ProductsState {
  products: Product[];
  favorites: number[];
  isFetched: boolean; 
}

const initialState: ProductsState = {
  products: [], 
  favorites: [], 
  isFetched: false, 
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id);
      } else {
        state.favorites.push(id);
      }
    },
    addProduct(state, action) {
      state.products.push(action.payload); 
    },
    removeProduct(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload); 
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...action.payload];
      state.isFetched = true; 
    });
  }
});

export const { toggleFavorite, addProduct, removeProduct } = productsSlice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
