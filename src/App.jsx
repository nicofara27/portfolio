import './App.css';

import Main from './components/views/Main';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
