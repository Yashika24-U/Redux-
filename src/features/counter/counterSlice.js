import {createSlice} from "@reduxjs/toolkit"


const initialState  = {
    count : 0
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers:{
        increment : (state)=>{
            state.count  = state.count+1;
        },
        decrement : (state)=>{
            state.count  = state.count-1;
        },
        reset : (state)=>{
            state.count = 0;
        },
        incrementAmount:(state,action)=>{
            state.count = state.count + action.payload;
        }
    }
})
export const{increment,decrement,reset,incrementAmount} = counterSlice.actions;
export default counterSlice.reducer;