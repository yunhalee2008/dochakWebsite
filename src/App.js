import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hyperspeed from './Hyperspeed';
import { ContainerTextFlip } from "./components/ui/container-text-flip";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Technologies from './Technologies';
import About from './About';
import Solutions from './Solutions';
import Projects from './Projects';
import Team from './Team';
import GetInTouch from './GetInTouch';
import { BentoDemo } from './components/ui/bentoDemo';
import { Link } from "react-router-dom";

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
        {
          path: "technologies",
          element: <Technologies />
        },
        {
          path: "solutions",
          element: <Solutions />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "team",
          element: <Team />
        },
        {
          path: "get-in-touch",
          element: <GetInTouch />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="hero-section" style={{position: 'relative', overflow: 'hidden'}}>
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              // Base surfaces
              roadColor: 0xCBD5E1,        // Tailwind slate-300 – soft, visible on light bg
              islandColor: 0xE5E7EB,      // border-light – consistent light element
              background: 0xF5F7FA,       // site-wide light gray background
            
              // Lane markings
              shoulderLines: 0x94A3B8,    // slate-400 – subtle but clear on road
              brokenLines: 0x94A3B8,      // same as above for consistency
            
              // Car colors – distinct blue variants per lane
              leftCars: [
                0x289AD7,
                0x10B981, // curious blue
                0x57bceb  // science blue
              ],
            
              rightCars: [
                0xe5e7eb, // endeavour
                0x004294, // navy-heading
                0x646b74  // deep slate – adds depth and variation
              ],
            
              // Poles, sticks, etc.
              sticks: 0x004294, // curious blue – readable, bright, consistent
            
            }              
          }}
        />
        <div className="hero-content hero-centered" style={{position: 'relative', zIndex: 1}}>
          <div className="hero-text">
            <h1>Driving The Future Mobility</h1>
            <ContainerTextFlip words={["SMARTER", "SAFER", "SEAMLESS"]} interval={2200} textClassName="flip-words" />
            <div className="hero-subheadline">Innovating the future of mobility — one solution at a time.</div>
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
        <h2>Overview</h2>
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
