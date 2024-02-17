import './/app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import About from './components/about/About'



const App = () => {
  return (
    <div>
      <section id='Home'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='About'><Parallax type = 'About' /></section>
      <section ><About/></section>
    </div>
  )
}

export default App
