import Carousel from "./Carousel";
import MensJacket from "./MensJacket";
import Navbar from "./Navbar";
import WomenJacket from "./WomenJacket";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <WomenJacket />
      <MensJacket />
    </main>
  );
}
