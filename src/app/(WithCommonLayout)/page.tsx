import Container from "@/src/components/UI/Container";
import IntroSection from "./_components/IntroSection";
import { FeedProjects } from "@/src/services/projects";
import WhatIdo from "./_components/WhatIDoSection";



export default async function Home() {

  const data = await FeedProjects();
  // console.log(data);


  return (
    <section className="flex flex-col items-center justify-center">
      <Container>

        <IntroSection />
        <WhatIdo />

      </Container>
    </section>
  );
}
