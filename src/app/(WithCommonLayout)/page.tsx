import Container from "@/src/components/UI/Container";
import IntroSection from "./_components/IntroSection";
import { FeedProjects } from "@/src/services/projects";
import WhatIdo from "./_components/WhatIDoSection";
import SkillsSection from "./_components/SkillsSection";
import { Divider } from "@nextui-org/divider";
import ProjectSection from "./_components/ProjectSection";



export default async function Home() {

  const data = await FeedProjects();



  return (
    <section className="flex flex-col items-center justify-center">
      <Container>

        <IntroSection />
        <WhatIdo />
        <Divider className="my-4" />
        <SkillsSection />
        <Divider className="my-4" />
        <ProjectSection />

      </Container>
    </section>
  );
}
