import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import HeroBanner from "./components/heroBanner";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";
import HeaderLayout from "./components/headerLayout";
import FooterLayout from "./components/footerLayout";

export default function Home() {
  return (
    <>
      <HeaderLayout>
        <FooterLayout>
          <HeroBanner />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Contact />
        </FooterLayout>
      </HeaderLayout>
    </>
  );
}
