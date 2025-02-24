import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';

const BASE_URL = "http://localhost:3005";
const PLACE_HOLDER_URL = "https://jsonplaceholder.typicode.com";

function App() {
  const updateUserInfo = {
    "username": "veli123",
    "password": "123456"
  }

  const newUser = {
    "username": "veli",
    "password": "1234"
  }

  // ! Bütün kullanıcıları çekme
  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
  }

  // ! id'ye göre kullancı çekme
  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`); // template litearal
    console.log(response.data);
  }

  // ! post ile kullanıcı ekleme (id'yi json sever kendisi veriyor)
  const createUser = async (newUser) => {
    //POST : veri eklemek için kullanılır
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data);
  }

  //! Verileri güncellemek için
  const updateUser = async (userId, updateUser) => {
    // PUT : veri güncellemek için kullanılır.
    const respone = await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
    console.log(respone.data);
  }

  //! Verileri silmek için
  const deleteUser = async (userId) => {
    // DELETE : veri silmek için kullanılır.
    const response = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  }






  const getUserByIdForPost = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data.postId;
  }

  const getPostbyId = async (postId) => {
    const response = await axios.get(`${PLACE_HOLDER_URL}/posts/${postId}`);
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserByIdForPost(1); // asenkron methodu başka methodda çağırırken await kullanılır.
    const postData = await getPostbyId(postId);
    console.log(postData);
  }

  //sayfa ilk render edildiğinde getAllsers çalışması için
  useEffect(() => {
    // getAllUsers(); // tüm kullanıcıları getir
    // getUserById(2); // idsi 1 olan kullanıcıyı getir
    // createUser(newUser);
    // updateUser("86ad", updateUserInfo);
    // deleteUser("86ad");
    getPost();
  }, [])

  return (
    <div>Selim</div>
  )
}

export default App
