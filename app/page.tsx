import FeaturesSection from "@/modules/feature";
import HeroSection from "@/modules/hero";
import FooterSection from "@/modules/footer";
import WebSiteSection from "@/modules/web-site";
import WebAppSection from "@/modules/web-app";
import EComSection from "@/modules/ecom-app";
import BMSOnboardSection from "@/modules/bms";
import AboutSection from "@/modules/about";

export default function Home() {
  return (
<div>
  <HeroSection />
  <AboutSection />
  <FeaturesSection />
  <WebSiteSection/>
  <WebAppSection/>
  <EComSection/>
  <BMSOnboardSection/>
  <FooterSection/>
</div>
  );
}
