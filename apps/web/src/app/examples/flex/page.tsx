'use client'
import Button from '@zyxui/button/dist/button'
import Flex from '@zyxui/flex'
import Text from '@zyxui/text'
import React, { useState } from 'react'

const FlexBoxExample = () => {
    const [gap, setGap] = useState<'sm' | 'md' | 'lg' | 'xl' | undefined>('md')
    const [direction, setDirection] = useState<'row' | 'row-reverse' | 'column' | 'column-reverse'>('row')

    return (
        <Flex direction='column' gap='xl' className='max-w-7xl mx-auto my-10'>
            <div>
                <Text as={'h1'}>Flex Box - Align Prop</Text>
                <hr />
                <Text as={'h4'}>Align Start Example</Text>
                <Flex gap={'sm'} align='flex-start'>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-4'>01</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-12'>02</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-8'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Align Stretch Example</Text>
                <Flex gap={'sm'} align='stretch'>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-4'>01</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-12'>02</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-8'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Align End Example</Text>
                <Flex gap={'sm'} align='flex-end'>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-4'>01</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-12'>02</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-8'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Align Center Example</Text>
                <Flex gap={'sm'} align='center'>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-4'>01</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-12'>02</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 py-8'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Align Baseline Example</Text>
                <Flex gap={'sm'} align='baseline'>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 pt-2 pb-6'>01</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 pt-8 pb-12'>02</Flex>
                    <Flex justify='center' align='center' className='w-72 rounded-md bg-cyan-500 pt-12 pb-4'>03</Flex>
                </Flex>
            </div>
            <div>
                <Text as={'h1'}>Flex Box - Justify Prop</Text>
                <hr />
                <Text as={'h4'}>Justify Start Example</Text>
                <Flex gap={'sm'} justify='flex-start'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Justify Center Example</Text>
                <Flex gap={'sm'} justify='center'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Justify End Example</Text>
                <Flex gap={'sm'} justify='flex-end'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Justify Space Between Example</Text>
                <Flex gap={'sm'} justify='space-between'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Justify Space Around Example</Text>
                <Flex gap={'sm'} justify='space-around'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Justify Space Evenly Example</Text>
                <Flex gap={'sm'} justify='space-evenly'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Justify Stretch Example</Text>
                <Flex gap={'sm'} justify='stretch'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
                <hr className='my-4' />
                <Text className='mb-5 mt-10' as={'h4'}>Justify Normal Example</Text>
                <Flex gap={'sm'} justify='normal'>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>01</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>02</Flex>
                    <Flex justify='center' align='center' className='w-16 h-16 rounded-md bg-pink-500'>03</Flex>
                </Flex>
            </div>
            <div>
                <Text as={'h1'}>Flex Box - Gap Prop</Text>
                <hr />
                <Text as={'h4'}>Gap Examples</Text>
                <Flex direction='column' className='mb-5'>
                    <Text as={'p'}>Gap Sizes:</Text>
                    <Flex gap='md'>
                        <Button size={'sm'} variant={'flat'} onPress={() => setGap(undefined)}>None</Button>
                        <Button size={'sm'} variant={'flat'} onPress={() => setGap('sm')}>sm</Button>
                        <Button size={'sm'} variant={'flat'} onPress={() => setGap('md')}>md</Button>
                        <Button size={'sm'} variant={'flat'} onPress={() => setGap('lg')}>lg</Button>
                        <Button size={'sm'} variant={'flat'} onPress={() => setGap('xl')}>xl</Button>
                    </Flex>
                </Flex>
                <Flex gap={gap} justify='flex-start'>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                    <Button>Button</Button>
                </Flex>
            </div>
            <div>
                <Text as={'h1'}>Flex Box - Direction Prop</Text>
                <hr />
                <Text as={'h4'}>Direction Examples</Text>
                <Flex direction='column' className='mb-5'>
                    <Text as={'p'}>Directions:</Text>
                    <Flex gap='md'>
                        <Button size={'sm'} variant={'flat'} onPress={() => setDirection('row')}>Row</Button>
                        <Button size={'sm'} variant={'flat'} onPress={() => setDirection('row-reverse')}>Row-Reverse</Button>
                        <Button size={'sm'} variant={'flat'} onPress={() => setDirection('column')}>Column</Button>
                        <Button size={'sm'} variant={'flat'} onPress={() => setDirection('column-reverse')}>Column-Reverse</Button>
                    </Flex>
                </Flex>
                <Flex gap='md' direction={direction} justify='flex-start'>
                    <Button>01</Button>
                    <Button>02</Button>
                    <Button>03</Button>
                    <Button>04</Button>
                    <Button>05</Button>
                    <Button>06</Button>
                </Flex>
            </div>
            <div>
                <Text as={'h1'}>Flex Box - Wrap Prop</Text>
                <hr />
                <Text as={'h4'}>nowrap Examples</Text>
                <Flex direction='column' className='mb-5'>
                    <Text as={'p'}>Directions:</Text>
                    <Flex gap='md' wrap='nowrap' className='bg-cyan-400 overflow-hidden border border-cyan-300'>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 01</div>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 02</div>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 03</div>
                    </Flex>
                </Flex>
                <Text as={'h4'}>wrap Examples</Text>
                <Flex direction='column' className='mb-5'>
                    <Text as={'p'}>Directions:</Text>
                    <Flex gap='md' wrap='wrap' className='bg-cyan-400 border border-cyan-300'>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 01</div>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 02</div>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 03</div>
                    </Flex>
                </Flex>
                <Text as={'h4'}>wrap-reverse Examples</Text>
                <Flex direction='column' className='mb-5'>
                    <Text as={'p'}>Directions:</Text>
                    <Flex gap='md' wrap='wrap-reverse' className='bg-cyan-400 border border-cyan-300'>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 01</div>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 02</div>
                        <div className='text-sm flex-none p-4 w-2/5 bg-red-400'>Content 03</div>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    )
}

export default FlexBoxExample