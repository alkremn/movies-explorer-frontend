import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className='page'>
      <Header />
      {/* <Main /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <NotFound /> */}
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
