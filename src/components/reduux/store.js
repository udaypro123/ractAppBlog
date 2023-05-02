import {configureStore} from '@reduxjs/toolkit'
import newsSlice from './newsSlice'
import blogitemSlice from './blogitemSlice'



export const store=configureStore({
            reducer:{
                    newsapi:newsSlice,
                    itemslice:blogitemSlice,
            },
})