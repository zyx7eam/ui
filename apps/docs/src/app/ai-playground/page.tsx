'use client';

import { useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle } from '@zyxui/card';
import Button from '@zyxui/button';
import Text from '@zyxui/text';
import Badge from '@zyxui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@zyxui/tabs';
import Avatar from '@zyxui/avatar';

// Mock AI component generator (in real app, this would call your AI service)
function generateComponent(description: string) {
  const patterns = {
    dashboard: {
      code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@zyxui/tabs';
import Card, { CardBody } from '@zyxui/card';
import Text from '@zyxui/text';
import Badge from '@zyxui/badge';

export const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', change: 12, trend: 'up' },
    { label: 'Revenue', value: '$12,345', change: 5, trend: 'up' },
    { label: 'Conversion Rate', value: '3.2%', change: -2, trend: 'down' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Text as="h1" className="mb-8">Dashboard</Text>

      <Tabs defaultValue="overview" variant="underline">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardBody>
                  <Text as="h2">{stat.value}</Text>
                  <Text className="text-muted-foreground">{stat.label}</Text>
                  <Badge
                    content={\`\${stat.change > 0 ? '+' : ''}\${stat.change}%\`}
                    color={stat.trend === 'up' ? 'success' : 'danger'}
                    className="mt-2"
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};`,
      preview: (
        <div className='mx-auto max-w-4xl p-6'>
          <Text as='h2' className='mb-6'>
            Dashboard Preview
          </Text>

          <Tabs defaultValue='overview' variant='underline'>
            <TabsList className='mb-6'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics'>Analytics</TabsTrigger>
              <TabsTrigger value='reports'>Reports</TabsTrigger>
            </TabsList>

            <TabsContent value='overview'>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                <Card>
                  <div className='p-4'>
                    <Text as='h3'>1,234</Text>
                    <Text className='text-muted-foreground'>Total Users</Text>
                    <Badge content='+12%' color='success' className='mt-2' />
                  </div>
                </Card>
                <Card>
                  <div className='p-4'>
                    <Text as='h3'>$12,345</Text>
                    <Text className='text-muted-foreground'>Revenue</Text>
                    <Badge content='+5%' color='success' className='mt-2' />
                  </div>
                </Card>
                <Card>
                  <div className='p-4'>
                    <Text as='h3'>3.2%</Text>
                    <Text className='text-muted-foreground'>
                      Conversion Rate
                    </Text>
                    <Badge content='-2%' color='danger' className='mt-2' />
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ),
    },
    hero: {
      code: `import Button from '@zyxui/button';
import Text from '@zyxui/text';

export const HeroSection = () => {
  return (
    <div className="text-center py-16 px-4">
      <Text as="h1" className="mb-4">
        Build Amazing UIs with @zyxui
      </Text>
      <Text className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
        Modern React components designed for speed, accessibility, and beautiful user experiences.
      </Text>
      <div className="flex gap-4 justify-center">
        <Button size="lg">Get Started</Button>
        <Button variant="bordered" size="lg">View Components</Button>
      </div>
    </div>
  );
};`,
      preview: (
        <div className='px-4 py-12 text-center'>
          <Text as='h1' className='mb-4'>
            Build Amazing UIs with @zyxui
          </Text>
          <Text className='text-muted-foreground mx-auto mb-8 max-w-2xl text-lg'>
            Modern React components designed for speed, accessibility, and
            beautiful user experiences.
          </Text>
          <div className='flex justify-center gap-4'>
            <Button size='lg'>Get Started</Button>
            <Button variant='bordered' size='lg'>
              View Components
            </Button>
          </div>
        </div>
      ),
    },
    profile: {
      code: `import Card, { CardBody } from '@zyxui/card';
import Avatar from '@zyxui/avatar';
import Text from '@zyxui/text';
import Badge from '@zyxui/badge';
import Button from '@zyxui/button';

export const UserProfile = () => {
  const user = {
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    status: 'Online',
    projects: 12,
    experience: '5 years'
  };

  return (
    <Card className="max-w-md">
      <CardBody>
        <div className="text-center mb-6">
          <Avatar
            size="xl"
            src={user.avatar}
            alt={user.name}
            className="mx-auto mb-4"
          />
          <Text as="h3">{user.name}</Text>
          <Text className="text-muted-foreground">{user.role}</Text>
          <Badge content={user.status} color="success" className="mt-2" />
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <Text>Projects</Text>
            <Badge content={user.projects} variant="outline" />
          </div>
          <div className="flex justify-between">
            <Text>Experience</Text>
            <Badge content={user.experience} variant="outline" />
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">Message</Button>
          <Button variant="bordered" className="flex-1">Follow</Button>
        </div>
      </CardBody>
    </Card>
  );
};`,
      preview: (
        <div className='mx-auto max-w-md'>
          <Card>
            <div className='p-6'>
              <div className='mb-6 text-center'>
                <Avatar
                  size='xl'
                  src='https://i.pravatar.cc/150?u=sarah'
                  alt='Sarah Johnson'
                  className='mx-auto mb-4'
                />
                <Text as='h3'>Sarah Johnson</Text>
                <Text className='text-muted-foreground'>Senior Developer</Text>
                <Badge content='Online' color='success' className='mt-2' />
              </div>

              <div className='mb-6 space-y-3'>
                <div className='flex justify-between'>
                  <Text>Projects</Text>
                  <Badge content='12' variant='outline' />
                </div>
                <div className='flex justify-between'>
                  <Text>Experience</Text>
                  <Badge content='5 years' variant='outline' />
                </div>
              </div>

              <div className='flex gap-2'>
                <Button className='flex-1'>Message</Button>
                <Button variant='bordered' className='flex-1'>
                  Follow
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  };

  const desc = description.toLowerCase();

  if (
    desc.includes('dashboard') ||
    desc.includes('stats') ||
    desc.includes('analytics')
  ) {
    return patterns.dashboard;
  } else if (
    desc.includes('hero') ||
    desc.includes('landing') ||
    desc.includes('header')
  ) {
    return patterns.hero;
  } else if (desc.includes('profile') || desc.includes('user card')) {
    return patterns.profile;
  }

  // Default fallback
  return {
    code: `import Card from '@zyxui/card';
import Text from '@zyxui/text';
import Button from '@zyxui/button';

export const GeneratedComponent = () => {
  return (
    <Card className="max-w-md">
      <div className="p-6">
        <Text as="h3" className="mb-4">
          Custom Component
        </Text>
        <Text className="mb-4">
          This component was generated based on your description: "${description}"
        </Text>
        <Button>Get Started</Button>
      </div>
    </Card>
  );
};`,
    preview: (
      <Card className='mx-auto max-w-md'>
        <div className='p-6'>
          <Text as='h3' className='mb-4'>
            Custom Component
          </Text>
          <Text className='mb-4'>
            This component was generated based on your description: "
            {description}"
          </Text>
          <Button>Get Started</Button>
        </div>
      </Card>
    ),
  };
}

export default function AIPlaygroundPage() {
  const [description, setDescription] = useState('');
  const [generatedComponent, setGeneratedComponent] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const examples = [
    'Create a user dashboard with statistics cards',
    'Build a hero section with call-to-action buttons',
    'Design a user profile card with avatar and badges',
    'Make a feature grid with cards and icons',
    'Create a settings page with tabs',
  ];

  const handleGenerate = async () => {
    if (!description.trim()) return;

    setIsGenerating(true);

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const result = generateComponent(description);
    setGeneratedComponent(result);
    setIsGenerating(false);
  };

  const handleExampleClick = (example: string) => {
    setDescription(example);
  };

  return (
    <div className='mx-auto max-w-7xl p-6'>
      <div className='mb-8'>
        <Text as='h1' className='mb-4'>
          🤖 AI Component Playground
        </Text>
        <Text className='text-muted-foreground max-w-3xl text-lg'>
          Describe the UI component you want to build, and our AI will generate
          it using @zyxui components. Try natural language descriptions like
          "user dashboard" or "hero section with buttons".
        </Text>
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {/* Input Section */}
        <div className='space-y-6'>
          <Card>
            <CardHeader>
              <CardTitle>Component Description</CardTitle>
            </CardHeader>
            <CardBody className='space-y-4'>
              <div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Describe the component you want to create...'
                  className='h-32 w-full resize-none rounded-md border border-gray-300 p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div className='flex gap-2'>
                <Button
                  onPress={handleGenerate}
                  isDisabled={!description.trim() || isGenerating}
                  className='flex-1'
                >
                  {isGenerating ? 'Generating...' : 'Generate Component'}
                </Button>
              </div>
            </CardBody>
          </Card>

          {/* Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Example Prompts</CardTitle>
            </CardHeader>
            <CardBody>
              <div className='space-y-2'>
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(example)}
                    className='w-full rounded-md border border-gray-200 p-3 text-left text-sm transition-colors hover:bg-gray-50'
                  >
                    {example}
                  </button>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Output Section */}
        <div className='space-y-6'>
          {generatedComponent ? (
            <>
              {/* Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Live Preview</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className='rounded-md border border-gray-200 bg-gray-50 p-4'>
                    {generatedComponent.preview}
                  </div>
                </CardBody>
              </Card>

              {/* Code */}
              <Card>
                <CardHeader>
                  <CardTitle>Generated Code</CardTitle>
                </CardHeader>
                <CardBody>
                  <pre className='overflow-auto rounded-md bg-gray-900 p-4 text-sm text-green-400'>
                    <code>{generatedComponent.code}</code>
                  </pre>
                  <div className='mt-4'>
                    <Button
                      variant='bordered'
                      size='sm'
                      onPress={() =>
                        navigator.clipboard.writeText(generatedComponent.code)
                      }
                    >
                      Copy Code
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </>
          ) : (
            <Card>
              <CardBody className='py-12 text-center'>
                <Text className='text-muted-foreground'>
                  Enter a description and click "Generate Component" to see your
                  AI-generated UI component.
                </Text>
              </CardBody>
            </Card>
          )}
        </div>
      </div>

      {/* AI Guidelines */}
      <div className='mt-12'>
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardBody>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              <div className='text-center'>
                <div className='mb-3 text-3xl'>🎯</div>
                <Text as='h4' className='mb-2'>
                  Describe
                </Text>
                <Text className='text-muted-foreground text-sm'>
                  Use natural language to describe the UI component you want to
                  build.
                </Text>
              </div>
              <div className='text-center'>
                <div className='mb-3 text-3xl'>🤖</div>
                <Text as='h4' className='mb-2'>
                  Generate
                </Text>
                <Text className='text-muted-foreground text-sm'>
                  Our AI analyzes your request and selects the best @zyxui
                  components.
                </Text>
              </div>
              <div className='text-center'>
                <div className='mb-3 text-3xl'>🚀</div>
                <Text as='h4' className='mb-2'>
                  Deploy
                </Text>
                <Text className='text-muted-foreground text-sm'>
                  Copy the generated code and use it directly in your React
                  application.
                </Text>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
