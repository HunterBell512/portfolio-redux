import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Foot from './components/Footer';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Foot />
    </>
  )
}

export default App
