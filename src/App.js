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
      <div className='main-container' id='Home'>
        <div className='main-small'>
          <div class="circl1-box">
            <div class="circle1"></div>
          </div>
          <div class="circle2-box">
            <div class="circle2">
            </div>
          </div>
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

          <div className='component-container'>
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
      </div>
    </main>
  )

}

export default App;
