import React, { useState } from 'react';
import logo from './assets/trlogo(filled3).svg'
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Nav,
  Portfolio,
  Button
} from './components';



function App() {

  const [headerSelected, setHeaderSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [experienceSelected, setExperienceSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <main>
      <div id='Home'>
        <Nav
          headerSelected={headerSelected}
          aboutSelected={aboutSelected}
          experienceSelected={experienceSelected}
          portfolioSelected={portfolioSelected}
          contactSelected={contactSelected}
          setHeaderSelected={setHeaderSelected}
          setAboutSelected={setAboutSelected}
          setExperienceSelected={setExperienceSelected}
          setPortfolioSelected={setPortfolioSelected}
          setContactSelected={setContactSelected}
        />

        <div className='main-container' >
          {headerSelected && !aboutSelected && !experienceSelected && !contactSelected && !portfolioSelected ? (
            <>
              <Hero />
              <About />
            </>
          ) : !headerSelected && aboutSelected && !experienceSelected && !contactSelected && !portfolioSelected ? (
            <>
              <Hero />
              <About />
            </>
          ) : !headerSelected && !aboutSelected && experienceSelected && !contactSelected && !portfolioSelected ? (
            <>
              <Experience />
            </>
          ) : !headerSelected && !aboutSelected && !experienceSelected && contactSelected && !portfolioSelected ? (
            <>
              <Contact />
            </>
          ) : <Portfolio />}
        </div>
        <Button />
        <Footer />
      </div>
    </main>
  )

}

export default App;
