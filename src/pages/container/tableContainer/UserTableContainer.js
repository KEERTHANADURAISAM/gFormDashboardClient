import { Box } from '@mui/material'
import React from 'react'
import UserFormContainer from './UserFormContainer'
import UserCardContainer from './UserCardContainer'
import LineCHart from '../LineCHart'

const UserTableContainer = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"row",gap:"39px",marginLeft:"60px"}}>
      
    <div>
       <UserFormContainer/>
       </div>
       <div>
      <LineCHart/>
      </div>
      
         
       </Box>
  )
}

export default UserTableContainer