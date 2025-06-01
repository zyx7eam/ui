import {
  MoveRightIcon,
  RocketIcon,
  ArrowDownIcon,
  CodeIcon,
  GithubIcon,
  BookOpenIcon,
  PuzzleIcon,
} from 'lucide-react';
import Link from 'next/link';
import Button from '@zyxui/button';
import Text from '@zyxui/text';
import Card from '@zyxui/card';
import Badge from '@zyxui/badge';
import Avatar from '@zyxui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@zyxui/tabs';

const PlaygroundDemo = () => {
  return (
    <div className='space-y-8'>
      <Tabs defaultValue='card' className='w-full'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='card'>Card Example</TabsTrigger>
          <TabsTrigger value='profile'>Profile Card</TabsTrigger>
          <TabsTrigger value='dashboard'>Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value='card' className='space-y-6'>
          {/* Preview */}
          <div className='w-full rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
            <Card className='mx-auto w-full max-w-sm'>
              <div className='p-4'>
                <div className='flex items-center gap-3'>
                  <Avatar
                    src='https://i.pravatar.cc/150?u=john'
                    alt='John Doe'
                  />
                  <div>
                    <Text className='font-semibold'>John Doe</Text>
                    <Text className='text-sm text-white/60'>
                      Product Designer
                    </Text>
                  </div>
                  <Badge content='Pro' color='primary' className='ml-auto' />
                </div>
              </div>
            </Card>
          </div>

          {/* Code */}
          <div className='w-full rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
            <pre className='overflow-x-auto rounded-md bg-black/20 p-4'>
              <code className='text-sm text-white/90'>
                {`<Card className="w-full max-w-sm mx-auto">
  <div className="p-4">
    <div className="flex items-center gap-3">
      <Avatar src="avatar.jpg" alt="John Doe" />
      <div>
        <Text className="font-semibold">John Doe</Text>
        <Text className="text-white/60 text-sm">
          Product Designer
        </Text>
      </div>
      <Badge content="Pro" color="primary" className="ml-auto" />
    </div>
  </div>
</Card>`}
              </code>
            </pre>
          </div>
        </TabsContent>

        <TabsContent value='profile' className='space-y-6'>
          {/* Preview */}
          <div className='w-full rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
            <Card className='mx-auto w-full max-w-md'>
              <div className='p-6'>
                <div className='space-y-4 text-center'>
                  <Avatar
                    src='https://i.pravatar.cc/150?u=sarah'
                    alt='Sarah Wilson'
                    size='xl'
                    className='mx-auto'
                  />
                  <div>
                    <Text className='text-xl font-bold'>Sarah Wilson</Text>
                    <Text className='text-white/60'>Senior Developer</Text>
                  </div>
                  <div className='flex justify-center gap-2'>
                    <Badge content='React' color='primary' variant='ghost' />
                    <Badge
                      content='TypeScript'
                      color='secondary'
                      variant='ghost'
                    />
                    <Badge content='Next.js' color='success' variant='ghost' />
                  </div>
                  <Button className='w-full'>Follow</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Code */}
          <div className='w-full rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
            <pre className='overflow-x-auto rounded-md bg-black/20 p-4'>
              <code className='text-sm text-white/90'>
                {`<Card className="w-full max-w-md mx-auto">
  <div className="p-6">
    <div className="text-center space-y-4">
      <Avatar src="avatar.jpg" alt="Sarah Wilson" size="xl" />
      <div>
        <Text className="text-xl font-bold">Sarah Wilson</Text>
        <Text className="text-white/60">Senior Developer</Text>
      </div>
      <div className="flex justify-center gap-2">
        <Badge content="React" color="primary" variant="ghost" />
        <Badge content="TypeScript" color="secondary" variant="ghost" />
        <Badge content="Next.js" color="success" variant="ghost" />
      </div>
      <Button className="w-full">Follow</Button>
    </div>
  </div>
</Card>`}
              </code>
            </pre>
          </div>
        </TabsContent>

        <TabsContent value='dashboard' className='space-y-6'>
          {/* Preview */}
          <div className='w-full rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
            <div className='mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2'>
              <Card>
                <div className='p-4'>
                  <div className='mb-2 flex items-center justify-between'>
                    <Text className='font-semibold'>Total Users</Text>
                    <Badge content='+12%' color='success' variant='ghost' />
                  </div>
                  <Text className='text-2xl font-bold'>2,847</Text>
                  <Text className='text-sm text-white/60'>
                    Active this month
                  </Text>
                </div>
              </Card>

              <Card>
                <div className='p-4'>
                  <div className='mb-2 flex items-center justify-between'>
                    <Text className='font-semibold'>Revenue</Text>
                    <Badge content='+8%' color='primary' variant='ghost' />
                  </div>
                  <Text className='text-2xl font-bold'>$12,847</Text>
                  <Text className='text-sm text-white/60'>This quarter</Text>
                </div>
              </Card>
            </div>
          </div>

          {/* Code */}
          <div className='w-full rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
            <pre className='overflow-x-auto rounded-md bg-black/20 p-4'>
              <code className='text-sm text-white/90'>
                {`<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <Card>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <Text className="font-semibold">Total Users</Text>
        <Badge content="+12%" color="success" variant="ghost" />
      </div>
      <Text className="text-2xl font-bold">2,847</Text>
      <Text className="text-sm text-white/60">Active this month</Text>
    </div>
  </Card>

  <Card>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <Text className="font-semibold">Revenue</Text>
        <Badge content="+8%" color="primary" variant="ghost" />
      </div>
      <Text className="text-2xl font-bold">$12,847</Text>
      <Text className="text-sm text-white/60">This quarter</Text>
    </div>
  </Card>
</div>`}
              </code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      {/* Hero Section */}
      <div className='relative z-50 overflow-hidden pb-16 pt-24'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='text-center'>
            <Badge
              content='v1.0.0'
              color='primary'
              variant='ghost'
              className='mb-6'
            />
            <h1 className='mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-5xl font-bold text-transparent md:text-7xl'>
              Modern UI Components
              <br />
              for React
            </h1>
            <p className='mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl'>
              Beautiful, responsive, and accessible components built with modern
              best practices. Start building your next project faster.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link href='/docs/introduction'>
                <Button size='lg' endContent={<MoveRightIcon />}>
                  Get Started
                </Button>
              </Link>
              <Link href='https://github.com/your-repo' target='_blank'>
                <Button size='lg' variant='ghost' endContent={<GithubIcon />}>
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Playground */}
      <section className='px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-10 text-center'>
            <Badge
              content='Featured'
              color='warning'
              variant='ghost'
              className='mb-4'
            />
            <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
              Interactive Playground
            </h2>
            <p className='text-white/60'>
              Try our components directly in your browser
            </p>
          </div>
          <PlaygroundDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section className='px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='group relative'>
              <div className='from-primary/20 to-secondary/20 absolute inset-0 rounded-lg bg-gradient-to-r opacity-75 blur-xl transition duration-500 group-hover:opacity-100' />
              <div className='relative rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
                <div className='bg-primary/20 mb-4 w-fit rounded-full p-3'>
                  <CodeIcon className='h-6 w-6' />
                </div>
                <h3 className='mb-2 text-xl font-semibold'>Type Safe</h3>
                <p className='text-white/60'>
                  Built with TypeScript for better developer experience and
                  fewer bugs.
                </p>
              </div>
            </div>

            <div className='group relative'>
              <div className='from-warning/20 to-danger/20 absolute inset-0 rounded-lg bg-gradient-to-r opacity-75 blur-xl transition duration-500 group-hover:opacity-100' />
              <div className='relative rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
                <div className='bg-warning/20 mb-4 w-fit rounded-full p-3'>
                  <PuzzleIcon className='h-6 w-6' />
                </div>
                <h3 className='mb-2 text-xl font-semibold'>Composable</h3>
                <p className='text-white/60'>
                  Flexible components that work together seamlessly.
                </p>
              </div>
            </div>

            <div className='group relative'>
              <div className='from-success/20 to-info/20 absolute inset-0 rounded-lg bg-gradient-to-r opacity-75 blur-xl transition duration-500 group-hover:opacity-100' />
              <div className='relative rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
                <div className='bg-success/20 mb-4 w-fit rounded-full p-3'>
                  <BookOpenIcon className='h-6 w-6' />
                </div>
                <h3 className='mb-2 text-xl font-semibold'>Well Documented</h3>
                <p className='text-white/60'>
                  Comprehensive guides and examples to get you started quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Component Showcase */}
      <section className='px-4 py-16'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-10 text-center'>
            <Badge
              content='New'
              color='success'
              variant='ghost'
              className='mb-4'
            />
            <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
              Flexible Tabs Component
            </h2>
            <p className='text-white/60'>
              Organize content with our accessible and customizable tabs
            </p>
          </div>

          <div className='space-y-8'>
            <div className='w-full rounded-lg bg-black/40 p-6 backdrop-blur-sm'>
              <Tabs
                defaultValue='overview'
                variant='underline'
                className='w-full'
              >
                <TabsList className='mb-6'>
                  <TabsTrigger value='overview'>Overview</TabsTrigger>
                  <TabsTrigger value='features'>Features</TabsTrigger>
                  <TabsTrigger value='pricing'>Pricing</TabsTrigger>
                  <TabsTrigger value='support'>Support</TabsTrigger>
                </TabsList>

                <TabsContent value='overview' className='space-y-4'>
                  <h3 className='text-xl font-semibold'>Product Overview</h3>
                  <p className='text-white/70'>
                    Our component library provides everything you need to build
                    modern, accessible web applications. With over 30+
                    components, comprehensive documentation, and TypeScript
                    support, you can focus on building great user experiences.
                  </p>
                  <div className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4'>
                    <div className='text-center'>
                      <div className='text-primary text-2xl font-bold'>30+</div>
                      <div className='text-sm text-white/60'>Components</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-success text-2xl font-bold'>
                        100%
                      </div>
                      <div className='text-sm text-white/60'>Accessible</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-warning text-2xl font-bold'>5KB</div>
                      <div className='text-sm text-white/60'>Bundle Size</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-info text-2xl font-bold'>TS</div>
                      <div className='text-sm text-white/60'>TypeScript</div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='features' className='space-y-4'>
                  <h3 className='text-xl font-semibold'>Key Features</h3>
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div className='rounded-lg bg-black/20 p-4'>
                      <h4 className='mb-2 font-semibold'>🎨 Customizable</h4>
                      <p className='text-sm text-white/70'>
                        Easily customize colors, sizes, and variants to match
                        your design system.
                      </p>
                    </div>
                    <div className='rounded-lg bg-black/20 p-4'>
                      <h4 className='mb-2 font-semibold'>♿ Accessible</h4>
                      <p className='text-sm text-white/70'>
                        Built with accessibility in mind, following WCAG
                        guidelines.
                      </p>
                    </div>
                    <div className='rounded-lg bg-black/20 p-4'>
                      <h4 className='mb-2 font-semibold'>📱 Responsive</h4>
                      <p className='text-sm text-white/70'>
                        Works perfectly on all devices and screen sizes.
                      </p>
                    </div>
                    <div className='rounded-lg bg-black/20 p-4'>
                      <h4 className='mb-2 font-semibold'>⚡ Performance</h4>
                      <p className='text-sm text-white/70'>
                        Optimized for performance with minimal bundle impact.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value='pricing' className='space-y-4'>
                  <h3 className='text-xl font-semibold'>Pricing Plans</h3>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    <Card className='p-6 text-center'>
                      <h4 className='mb-2 text-lg font-semibold'>
                        Open Source
                      </h4>
                      <div className='mb-4 text-3xl font-bold'>Free</div>
                      <p className='mb-4 text-white/60'>
                        Perfect for personal projects
                      </p>
                      <Button variant='ghost' className='w-full'>
                        Get Started
                      </Button>
                    </Card>
                    <Card className='border-primary p-6 text-center'>
                      <Badge
                        content='Popular'
                        color='primary'
                        className='mb-2'
                      />
                      <h4 className='mb-2 text-lg font-semibold'>Pro</h4>
                      <div className='mb-4 text-3xl font-bold'>$29/mo</div>
                      <p className='mb-4 text-white/60'>
                        For professional teams
                      </p>
                      <Button className='w-full'>Choose Pro</Button>
                    </Card>
                    <Card className='p-6 text-center'>
                      <h4 className='mb-2 text-lg font-semibold'>Enterprise</h4>
                      <div className='mb-4 text-3xl font-bold'>Custom</div>
                      <p className='mb-4 text-white/60'>
                        For large organizations
                      </p>
                      <Button variant='ghost' className='w-full'>
                        Contact Sales
                      </Button>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value='support' className='space-y-4'>
                  <h3 className='text-xl font-semibold'>Support & Resources</h3>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    <div>
                      <h4 className='mb-3 font-semibold'>Documentation</h4>
                      <ul className='space-y-2 text-white/70'>
                        <li>• Getting Started Guide</li>
                        <li>• Component API Reference</li>
                        <li>• Theming & Customization</li>
                        <li>• Migration Guides</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className='mb-3 font-semibold'>Community</h4>
                      <ul className='space-y-2 text-white/70'>
                        <li>• GitHub Discussions</li>
                        <li>• Discord Community</li>
                        <li>• Stack Overflow</li>
                        <li>• Twitter Updates</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='relative px-4 py-16'>
        <div className='to-primary/5 absolute inset-0 bg-gradient-to-b from-transparent' />
        <div className='relative mx-auto max-w-6xl'>
          <div className='grid grid-cols-2 gap-8 text-center md:grid-cols-4'>
            <div>
              <h4 className='mb-2 text-4xl font-bold'>30+</h4>
              <p className='text-white/60'>Components</p>
            </div>
            <div>
              <h4 className='mb-2 text-4xl font-bold'>100%</h4>
              <p className='text-white/60'>Type Safe</p>
            </div>
            <div>
              <h4 className='mb-2 text-4xl font-bold'>5KB</h4>
              <p className='text-white/60'>Average Size</p>
            </div>
            <div>
              <h4 className='mb-2 text-4xl font-bold'>1000+</h4>
              <p className='text-white/60'>Weekly Downloads</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-4 py-16'>
        <div className='mx-auto max-w-6xl text-center'>
          <h2 className='mb-6 text-3xl font-bold md:text-4xl'>
            Ready to Build Something Amazing?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-white/60'>
            Get started with our components today and create beautiful,
            accessible applications faster than ever.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/docs/installation'>
              <Button size='lg' color='default' endContent={<ArrowDownIcon />}>
                Install Now
              </Button>
            </Link>
            <Link href='/docs/components'>
              <Button size='lg' variant='ghost' endContent={<RocketIcon />}>
                Browse Components
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
