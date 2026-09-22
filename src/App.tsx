import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrandStatement } from "./components/BrandStatement";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Adventures } from "./components/Adventures";
import { WhyUs } from "./components/WhyUs";
import { OurStory } from "./components/OurStory";
import { Testimonials } from "./components/Testimonials";
import { InstagramCommunity } from "./components/InstagramCommunity";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <FeaturedProducts />
        <Adventures />
        <WhyUs />
        <OurStory />
        <Testimonials />
        <InstagramCommunity />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
