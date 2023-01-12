import Classes from "../components/Classes";
import HeroSection from "../components/HeroSection";
import Profile from "../components/Profile";
import Services from "../components/Services";
import Teams from "../components/Teams";
import Testimony from "../components/Testimony";
import Trusted from "../components/Trusted";
import Tutoring from "../components/Tutoring";

export default function HomePage() {
  return (
    <div className="mx-auto">
      <HeroSection />
      <Trusted />
      <Classes />
      <Teams />
      <Tutoring />
      <Testimony />
      <Services />
    </div>
  );
}
