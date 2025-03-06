import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import PageContainer from './container/PageContainer';
import Header from "./components/Header"
import RouterConfig from './config/RouterConfig';
import Loading from './components/UI/Loading';

function App() {

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
    </div>
  )
}

export default App
