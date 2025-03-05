import React from 'react'
import Container from '@mui/material/Container';
import { lightBlue, yellow } from '@mui/material/colors';

function PageContainer({ children }) {
    return (
        <Container maxWidth='xl' >{children}</Container>
    )
}

export default PageContainer