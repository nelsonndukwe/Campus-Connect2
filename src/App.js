import logo from './logo.svg';
import './App.css';
import Nav from './Componenets/nav/Nav';
import Home from './Componenets/home/Home';
import About from './Componenets/about/About';
import Partners from './Componenets/partners/Partners';
import Footer from './Componenets/footer/Footer';
import Contact from './Componenets/contact/Contact'
import  Activity from './Componenets/activity/Activity'

function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
    <About />
    <Partners />
    <Activity/>
    <Contact/>
    <Footer />

      
    </div>
  );
}

export default App;
