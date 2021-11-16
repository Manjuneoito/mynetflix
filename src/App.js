
import './App.css';
import Banner from './pages/layouts/banner/Banner';
import NavBar from './pages/layouts/navbar/NavBar';
import RowPost from './pages/layouts/rowPost/RowPost';
import {originals,action,comedy, horror, romantic} from './Urls'

function App() {
  return (
    <>
    <NavBar />
    <Banner />
    <RowPost url={originals} title = 'Netflix Originals' />
    <RowPost url={action} title = 'Action' isSmall />
    <RowPost url={comedy} title = 'Comedy' isSmall />
    <RowPost url={horror} title = 'Horror' isSmall />
    <RowPost url={romantic} title = 'Romantic' isSmall />
    
    
    </>
  );
}

export default App;
