'use client';

import { MagicCard } from '@/components/magicui/magic-card';
import { Reference } from '@/types/reference';
import { Avatar, Flex, Heading, Text } from '@radix-ui/themes';
import Link from 'next/link'
import Image from 'next/image'
import { a } from 'framer-motion/client';
import { useTheme } from 'next-themes';

export const ReferenceCard = ({ reference }: { reference: Reference }) => {

    const { theme } = useTheme();

    return (
        <Link href={reference.link} passHref>
            <MagicCard gradientColor={ theme === 'dark' ? 'black' : 'lightgray' } className={ 'w-72 h-32 p-3' }>
                <Flex direction={ 'column' } className={ 'h-full' } gap={ '2' }>
                    <Flex align={ 'center' } gap={ '3' }>
                        <Avatar radius={ 'full' } fallback={ reference.name.substring(0, 1) } src={reference.image} />
                        <Flex direction={ 'column' }>
                            <Heading size={ '3' } weight={ 'medium' }>
                                { reference.name }
                            </Heading>
                            <Text size={ '2' }>
                                {reference.tag}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex className={ 'mt-auto' }>
                        <Text size={ '2' } className={ 'text-gray-500' }>
                            { reference.description }
                        </Text>
                    </Flex>
                </Flex>
            </MagicCard>

        </Link>
    )
}