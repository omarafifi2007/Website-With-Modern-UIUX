import Benefits from './component/Benefits';
import Header from './component/Header'
import Hero from './component/Hero'
import Pricing from './component/Pricing';
import Roadmap from './component/RoadMap';
import Services from './component/Services';
import Collaboration from './component/Collaboration';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  )
}

export default App;