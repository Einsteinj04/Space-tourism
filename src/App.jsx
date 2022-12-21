import Home from './components/Home/Home.jsx'
import Destination from "./components/Destination/Destination.jsx";
import Navbar from "./components/Navbar";
import Crew from "./components/Crew/Crew.jsx";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function App() {
  return (
    <main className=" text-white bg-black">
      <Navbar />
      <Home />
      <Destination />
      <Crew/>
    </main>
  );
}
