import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth py-12 p-6 md:px-16 xl:px-46">
      <Navbar />
      
      <main className="flex-grow space-y-24 md:space-y-64">
        <section id="home" className="scroll-mt-24"><Home /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="projects" className="scroll-mt-24"><Projects /></section>
        <section id="experiences" className="scroll-mt-24"><Experiences /></section>
        <section id="contact" className="scroll-mt-24"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}