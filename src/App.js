import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";
import DefaultLayout from "./layout/DefaultLayout";
import { Section } from 'react-scroll-section'
import AboutMe from "./screens/AboutMe/AboutMe";
import Contact from "./screens/Contact/Contact";
import Home from "./screens/Home/Home";
import Project from "./screens/Project/Project";
import SkillPage from './screens/SkillPage/SkillPage';

const dataScreen = [
  {
    id: 'home',
    component: <Home />
  },
  {
    id: 'about',
    component: <AboutMe />
  },
  {
    id: 'skill',
    component: <SkillPage />
  },
  {
    id: 'project',
    component: <Project />
  },
  {
    id: 'contact',
    component: <Contact />
  },
]

function App() {
  const darkmode = JSON.parse(localStorage.getItem("dark-mode-enabled"))
    ? true
    : false;
  if (darkmode) {
    localStorage.setItem("dark-mode-enabled", true);
  }
  return (
    <BrowserRouter>
      <ScrollingProvider scrollBehavior="smooth">
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <DefaultLayout>
                  {
                    dataScreen.map((child, id) => (
                      <Section key={id} id={child.id}>
                        {child.component}
                      </Section>
                    ))
                  }
                </DefaultLayout>
              }
            />
          </Routes>
        </div>
      </ScrollingProvider>
    </BrowserRouter>
  );
}

export default App;
