import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



export const getnewdata = createAsyncThunk('news/newapi', async () => {

    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=bf2aa5c84ca54059b15cfa3dc0e418d2")
    const data = await response.json();
    return data;
})
export const newsSlice = createSlice({
    name: "newsapi",

    initialState: {
        newsdata: [],
        status:false,
        error:false,
    },
    reducer: {},
    extraReducers: (builder) => {


        builder.addCase(getnewdata.pending, (state, action) => {
            state.status = false;
        })
        builder.addCase(getnewdata.fulfilled, (state, action) => {
            state.newsdata = action.payload;
            state.status = true;
        })
        builder.addCase(getnewdata.rejected, (state, action) => {
            state.status = false;
            state.error = true;
        })

    }

})


export default newsSlice.reducer;
