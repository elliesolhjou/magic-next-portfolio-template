import { Flex, Link } from '@radix-ui/themes';
import { AboutHeading } from './about-heading';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import BoxReveal from '@/components/magicui/box-reveal';
import { SectionHeading } from '../section-heading';
import { Selfie } from './selfie';

export const About = () => {
    return (
        <Flex direction={ 'column' } gap={ '8' }>
            <Selfie />
            <AboutHeading />
            <Flex direction={ 'column' } gap={ '3' }>
                <SectionHeading title={ 'About Me' } />
                <BoxReveal boxColor={ 'black' }>
                    <AnimatedShinyText className={ 'text-gray-400 text-sm sm:text-lg' } shimmerWidth={ 200 }>
                    Hey there! I'm Ellie Solhjou, a tech enthusiast with a passion for solving real-world problems through code and creativity. By day, I'm diving deep into computer science at USC, and by night, I'm crafting solutions that mix tech with a touch of sustainability. Whether I'm managing projects or developing software, I'm all about making an impact and having fun while doing it. Let's build something amazing together—one line of code (and maybe a bit of coffee) at a time!
                    </AnimatedShinyText>
                </BoxReveal>
            </Flex>
            { /* <Technology /> */ }
        </Flex>
    );
}