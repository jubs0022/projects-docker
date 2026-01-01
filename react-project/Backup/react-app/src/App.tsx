import About from "./components/about";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import WebBody from "./components/webbody";

export default function App(){
  return <div>
    <Header />
    <WebBody />
    <About />
    <Skills />
    <Projects />
  </div>;
}
