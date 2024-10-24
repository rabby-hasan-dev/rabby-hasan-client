



import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/src/assets/icons";

import { FaMedium } from 'react-icons/fa';
import TechSkills from "@/src/components/modules/skills/TechSkills";
import SoftSkills from "@/src/components/modules/skills/SoftSkills";
import InterestSection from "./_components/InterestSection";
import VisionSection from "./_components/VisionSection";
import AchivementSection from "./_components/AchivementSection";
import TestimonialsPreview from "@/src/components/modules/Home/TestimonialPreview";
import CallToAction from "../_components/CallAction";
import WorkExperience from "./_components/WorkExperience";
import Education from "./_components/Education";
import Certification from "./_components/Certification";
import { Divider } from "@nextui-org/divider";
import HeroSection from "./_components/HeroSection";
import SocialCv from "./_components/SocialCv";



const AboutMePage = () => {


  // bg-gradient-to-r from-blue-50 to-slate-100 dark:from-gray-800 dark:to-gray-900

  return (
    <>

      <div>
        <section className=" transition duration-500 py-16">
          <div className="container mx-auto px-6 text-center">

            {/* Hero Section */}
            <HeroSection />

            {/* Social and CV Section */}
            <SocialCv />

            <Divider className="my-4" />

            <WorkExperience />
            <Divider className="my-4" />



            <Education />

            <Divider className="my-4" />

            <TechSkills />

            <Divider className="my-4" />
            <SoftSkills />
            <Divider className="my-4" />

            <Certification />

            <Divider className="my-4" />
            <AchivementSection />

            <Divider className="my-4" />

            <TestimonialsPreview />

            <Divider className="my-4" />

            <InterestSection />

            <Divider className="my-4" />

            <VisionSection />
            <Divider className="my-4" />

            <CallToAction />

          </div>
        </section>
      </div>










    </>












  );
};

export default AboutMePage;
