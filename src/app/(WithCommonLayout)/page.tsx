import Container from "@/src/components/UI/Container";
import IntroSection from "./_components/IntroSection";
import { FeedProjects } from "@/src/services/projects";
import WhatIdo from "./_components/WhatIDoSection";
import { Divider } from "@nextui-org/divider";
import ExperienceHighlights from "./_components/ExperienceHighlights";
import FeaturedProjects from "./_components/FeaturedProjects";

import BlogPreview from "./_components/BlogPreview";
import CallToAction from "./_components/CallAction";
import TestimonialsPreview from "@/src/components/modules/Home/TestimonialPreview";



export default async function Home() {

  const data = await FeedProjects();



  return (
    <section className="flex flex-col items-center justify-center">
      <Container>

        <IntroSection />
        <WhatIdo />
        <Divider className="my-4" />
        <ExperienceHighlights />
        <Divider className="my-4" />
        <FeaturedProjects />
        <Divider className="my-4" />
        <TestimonialsPreview />
        <Divider className="my-4" />
        <BlogPreview />
        <Divider className="my-4" />
        <CallToAction />
        <Divider className="my-4" />


      </Container>
    </section>
  );
}
