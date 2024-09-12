import React from 'react'
import Header from '../headers/Header'
import CardContainer from '../container/CardContainer'
import ChartContainer from '../container/ChartContainer'
import WavyChart from '../container/WavyChart'
import LineCHart from '../container/LineCHart'
import ResponseBar from '../container/ResponseBar'
import UserCardContainer from '../container/tableContainer/UserCardContainer'
import UserTableContainer from '../container/tableContainer/UserTableContainer'
import ResponseContainer from '../container/ResponseContainer'

const HomeLayout = () => {
  return (
    <div className='HomeLayoutComponents'>
        <Header/>
        {/* <CardContainer /> */}
        {/* <ChartContainer/> */}
        <UserTableContainer/>
      <ResponseContainer/>
      
    </div>
  )
}

export default HomeLayout