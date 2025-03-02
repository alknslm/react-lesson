import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

// initial state ismi default olarak kullanılır
// eğer başka isimle çağıracaksan createSlice altında initialState : "senin yazdığın isim" şeklinde tanımla

const initialState = {
    users: [],
    loading: false
}

// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId: number, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     },
// )

export const getAllUsers = createAsyncThunk(
    'users', // isteğin sonucunu tutacak state ismi
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Http isteği olmazsa reducerslar kullanılırlar
    },
    extraReducers: (builder) => {
        // Http isteği olursa extraReducerslar kullanılır

        //getAllUsers methodu çağırılısa state içindeki userları actiondan gelen data ile doldur
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            // Add user to the state array
            state.users = action.payload;
        })
    }
})

export const { } = userSlice.actions // yukarda tanımlanan methodları erişime açmak için
export default userSlice.reducer