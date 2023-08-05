import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsService from "./productsService"



const initialState = {
  products: [],
  error: null,
  loading: false
}

// First argument in the async function is the payload. Replace with _ if you don't have a payload.
export const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
  try {
    return await productsService.getAllAsync()
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = null
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.payload
      })
  }
})

export default productsSlice.reducer