
import './App.css';
import Login from './pages/authendication/Login';
import Register from './pages/authendication/Register';
import BarChart from './pages/container/BarChart';
  
import CardContainer from './pages/container/CardContainer';
import ChartContainer from './pages/container/ChartContainer';
import LineCHart from './pages/container/LineCHart';
import UserFormContainer from './pages/container/tableContainer/UserFormContainer';
import WavyChart from './pages/container/WavyChart';
import Header from './pages/headers/Header';
import SideBar from './pages/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <CardContainer/> */}
      {/* <ChartContainer/> */}
      {/* <WavyChart/> */}
      <LineCHart/>
      {/* <UserFormContainer/> */}
     {/* <BarChart/> */}
      {/* <Login/>
      <Register/> */}
      {/* <SideBar/> */}
    </div>
  );
}

export default App;
