import './App.scss';
import Search from './components/search/search';
import {Provider} from 'react-redux';
import store from './redux/store';
import Form from './components/Form/form';
import Cart from './components/minicart/minicart';
import Nav from './components/navigation/nav';
import Logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
      <>
        <Provider store={store}>
          <header className="header">
            <div className="header__top">
              <div className="header__top--logo">
                <div className="mobileIcon">
                  <FontAwesomeIcon icon={faBars} />
                </div>
                <img src={Logo} alt="main logo"/>
                <h1>LOGO</h1>
              </div>
              <Search/>
              <Cart/>
            </div>
            <div className="header__nav">
              <nav className="mainNav">
                <Nav/>
              </nav>
            </div>
          </header>
          <main className="mainContent">
            <div className="mainContent__cards">
                <Form/>
            </div>
          </main>
        </Provider>
      </>
  );
}

export default App;
