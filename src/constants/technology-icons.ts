import { Technology } from '@/types/technology';
import { IconType } from 'react-icons';
import { RiCss3Fill, RiHtml5Fill, RiNextjsFill, RiReactjsLine, RiTailwindCssFill, RiJavascriptFill, RiOpenaiFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoMongodb, BiLogoPostgresql, BiLogoDjango, BiLogoAws, BiLogoBootstrap, BiLogoNodejs, BiLogoTailwindCss, BiLogoPython} from "react-icons/bi";
import {  FaNetworkWired, FaKey } from "react-icons/fa";

export const TECHNOLOGY_ICONS: Record<Technology, IconType> = {
    'React': RiReactjsLine,
    'Next.js': RiNextjsFill,
    'Tailwind': RiTailwindCssFill,
    'HTML': RiHtml5Fill,
    'CSS': RiCss3Fill,
    'TypeScript': BiLogoTypescript,
    'JavaScript': RiJavascriptFill,
    'MongoDB': BiLogoMongodb,
    'PostgreSQL': BiLogoPostgresql,
    'Django': BiLogoDjango,
    'OpenAI': RiOpenaiFill,
    'AWS': BiLogoAws,
    'Bootstrap': BiLogoBootstrap,
    'Node.js': BiLogoNodejs,
    'Tailwind': BiLogoTailwindCss,
    'Python': BiLogoPython,
    'API': FaNetworkWired, 
    'Authentication': FaKey

}