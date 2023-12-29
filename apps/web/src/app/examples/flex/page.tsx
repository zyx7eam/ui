
import Flex from '@zyxui/flex'
import Text from '@zyxui/text'
import React from 'react'

const FlexBoxExample = () => {
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
        </Flex>
    )
}

export default FlexBoxExample