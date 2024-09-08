
import './App.css';
  
import CardContainer from './pages/container/CardContainer';
import Header from './pages/headers/Header';
import SideBar from './pages/sideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <CardContainer/>
      {/* <SideBar/> */}
    </div>
  );
}

export default App;
