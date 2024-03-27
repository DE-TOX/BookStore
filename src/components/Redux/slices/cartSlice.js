import { createSelector, createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getCartItems } from "../../../services/ProductServices";

export const fetchCartLength = createAsyncThunk("fetchCart",async()=>{
    const response = await getCartItems()
    console.log(response);
    return response.data.result.length
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        data: null,
        isError:false
    },
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCartLength.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchCartLength.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCartLength.rejected,(state,action)=>{
            console.log(action.payload);
        })
    }
})

export const getItemsSelector = createSelector(state => state.cart, state => state)

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer