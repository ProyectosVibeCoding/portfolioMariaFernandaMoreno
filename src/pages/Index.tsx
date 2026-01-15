import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | Full-Stack Jr Developer & Automation</title>
        <meta
          name="description"
          content="Portfolio de María Fernanda Moreno - Desarrolladora Full-Stack Jr (MERN), Automatización con n8n e IA aplicada. Desarrollo web, APIs REST y automatización de procesos."
        />
        <meta
          name="keywords"
          content="desarrolladora web, full-stack, MERN, React, Node.js, n8n, automatización, IA, Córdoba, Argentina"
        />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} | Full-Stack Jr Developer`} />
        <meta
          property="og:description"
          content="Desarrolladora Full-Stack Jr (MERN) con foco en automatización (n8n) e IA aplicada."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} | Full-Stack Jr Developer`} />
        <meta
          name="twitter:description"
          content="Desarrolladora Full-Stack Jr (MERN) con foco en automatización (n8n) e IA aplicada."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://mafetech.vercel.app" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
