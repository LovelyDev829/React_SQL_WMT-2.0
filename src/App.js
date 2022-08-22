import './stylesheet/style.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainBody from './components/MainBody';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='body'>
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
