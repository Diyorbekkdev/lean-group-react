import { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import LeanVideo from './components/LeanVideo/LeanVideo';
import Products from './components/aptab-part/Products';
import Team from './components/Heros/Team';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/Backtop/Backtop';
import Awards from './components/Awards/Awards';
import Information from './components/infoComponent/InfoComponent';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Header/>
      <LeanVideo/>
      <Awards/>
      <Products/>
      <Information/>
      <Team/>
      <News/>
      <Footer/>
      <BackToTopButton/>
    </Fragment>
  );
}

export default App;
