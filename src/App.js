import React, { useEffect, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hyperspeed from './Hyperspeed';
import { ContainerTextFlip } from "./components/ui/container-text-flip";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import Technologies from './Technologies';
import About from './About';
import SolutionsOverview from './Solutions';
import ProjectsPage from './components/ProjectsPage';
import Team from './Team';
import GetInTouch from './GetInTouch';
import Disclosure from './Disclosure';
import { BentoDemo } from './components/ui/bentoDemo';
import RemoteDriving from './Solutions/RemoteDriving';
import DigitalTwin from './Solutions/DigitalTwin';
import MultimodalSimulator from './Solutions/MultimodalSimulator';
import TrafficAnalysisTools from './Solutions/TrafficAnalysisTools';
import Visualisation from './Solutions/Visualisation';
import VRRoadDesign from './Solutions/VRRoadDesign';
import News from './News';
import NewsArticle from './NewsArticle';
import Training from './Training';

import TawkToWidget from './TawkToWidget';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageContext from './contexts/LanguageContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "about",
          element: <About />
        },
        // {
        //   path: "technologies",
        //   element: <Technologies />
        // },
        {
          path: "solutions",
          element: <SolutionsOverview />
        },
        {
          path: "solutions/remote-driving",
          element: <RemoteDriving />
        },
        {
          path: "solutions/digital-twin",
          element: <DigitalTwin />
        },
        {
          path: "solutions/multimodal-simulator",
          element: <MultimodalSimulator />
        },
        {
          path: "solutions/traffic-analysis-tools",
          element: <TrafficAnalysisTools />
        },
        {
          path: "solutions/visualization",
          element: <Visualisation />
        },
        {
          path: "solutions/vr-road-design",
          element: <VRRoadDesign />
        },
        {
          path: "projects",
          element: <ProjectsPage />
        },
        {
          path: "team",
          element: <Team />
        },
        {
          path: "news",
          element: <News />
        },
        {
          path: "news/:slug",
          element: <NewsArticle />
        },
        {
          path: "training",
          element: <Training />
        },
        {
          path: "training/:courseCode",
          element: <div>Course detail page - Coming soon!</div>
        },
        {
          path: "disclosure",
          element: <Disclosure />
        },
        {
          path: "disclosure/:section",
          element: <Disclosure />
        },
        {
          path: "get-in-touch",
          element: <GetInTouch />
        }
      ]
    }
  ],
  {
    basename: "/dochakWebsite",
  }
        );

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

function Layout() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <TawkToWidget />
    </div>
  );
}

function HomePage() {
  const { t } = useContext(LanguageContext);
  
  // Animation component for individual elements
  const AnimatedElement = ({ children, animation = 'slide-up', delay = 0, className = '' }) => {
    const { elementRef, isVisible } = useScrollAnimation({
      threshold: 0.1,
      triggerOnce: true
    });

    return (
      <div
        ref={elementRef}
        className={`animate-on-scroll ${animation} ${isVisible ? 'visible' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };
  
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="hero-section" style={{position: 'relative', overflow: 'hidden'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'xyDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 3,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [20, 50],
            movingCloserSpeed: [-150, -230],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0xCBD5E1,
              islandColor: 0xE5E7EB,
              background: 0xF5F7FA,
              shoulderLines: 0x94A3B8,
              brokenLines: 0x94A3B8,
              leftCars: [0x217cd1, 0x57bceb, 0xF1F5F9],
              rightCars: [0xFFFFFF, 0xF1F5F9, 0x93C5FD],
              sticks: 0x93C5FD,
            }              
          }}
        />
        </div>
        <div className="hero-content hero-centered" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-text">
            <AnimatedElement animation="slide-up" delay={0}>
              <h1>{t('hero.title')}</h1>
            </AnimatedElement>
            <AnimatedElement animation="slide-up" delay={200}>
              <ContainerTextFlip words={t('hero.flipWords')} interval={2200} textClassName="flip-words" />
            </AnimatedElement>
            <AnimatedElement animation="slide-up" delay={400}>
              <div className="hero-subheadline">{t('hero.subtitle')}</div>
            </AnimatedElement>
            {/* <div className="hero-buttons">
              <Link to="/about">
                <button>Learn More</button>
              </Link>
              <Link to="/solutions"> 
                <button>Our Solutions</button>
              </Link>
            </div> }*/}
            </div>
        </div>
      </section>
      {/* Section 2: Light-grey */}
      <section className="light-section">
        <h2>{t('sections.overview')}</h2>
          <BentoDemo />
      </section>
      {/* Section 3: Stats */}
      {/* <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="0">
            <div className="stat-number">29</div>
            <div className="stat-label">Conference Papers</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="0">
            <div className="stat-number">7</div>
            <div className="stat-label">Patents Granted</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="0">
            <div className="stat-number">₩10B</div>
            <div className="stat-label">Revenue Goal</div>
          </div>
          <div className="stat-card" data-aos="fade-up" data-aos-delay="0">
            <div className="stat-number">6</div>
            <div className="stat-label">Solutions</div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

export default App;


