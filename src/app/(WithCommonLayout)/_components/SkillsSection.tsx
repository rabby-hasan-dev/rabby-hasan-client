import SoftSkills from '@/src/components/modules/skills/SoftSkills';
import TechSkills from '@/src/components/modules/skills/TechSkills';
import HeadingComponent from '@/src/components/UI/HeadingComponent';
import React from 'react';

const SkillsSection = () => {
    return (
        <div>
            <HeadingComponent heading='My Skills' subHeading='skills' />
            <TechSkills />
            <SoftSkills />
        </div>
    );
};

export default SkillsSection;