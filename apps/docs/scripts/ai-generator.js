#!/usr/bin/env node

/**
 * @zyxui AI Component Generator CLI
 *
 * Generate React components using natural language descriptions
 *
 * Usage:
 *   node ai-generator.js "Create a user dashboard with stats cards"
 *   node ai-generator.js --interactive
 *   node ai-generator.js --template dashboard
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load component catalog and patterns
const catalogPath = path.join(__dirname, '..', 'ai-enhanced-catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

// Predefined templates
const templates = {
  dashboard: {
    name: 'Dashboard',
    description: 'Statistics dashboard with metric cards and tabs',
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@zyxui/tabs';
import { Card, CardBody } from '@zyxui/card';
import Text from '@zyxui/text';
import Badge from '@zyxui/badge';

export const Dashboard = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', change: 12, trend: 'up' },
    { label: 'Revenue', value: '$12,345', change: 5, trend: 'up' },
    { label: 'Conversion Rate', value: '3.2%', change: -2, trend: 'down' },
    { label: 'Active Sessions', value: '89', change: 8, trend: 'up' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Text as="h1" className="mb-8">Dashboard</Text>

      <Tabs defaultValue="overview" variant="underline">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardBody>
                  <Text as="h3" className="text-2xl font-bold mb-2">
                    {stat.value}
                  </Text>
                  <Text className="text-muted-foreground mb-3">
                    {stat.label}
                  </Text>
                  <Badge
                    content={\`\${stat.change > 0 ? '+' : ''}\${stat.change}%\`}
                    color={stat.trend === 'up' ? 'success' : 'danger'}
                    size="sm"
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="space-y-6">
            <Text as="h2">Analytics Overview</Text>
            <Text className="text-muted-foreground">
              Detailed analytics data would be displayed here.
            </Text>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="space-y-6">
            <Text as="h2">Reports</Text>
            <Text className="text-muted-foreground">
              Generate and view reports here.
            </Text>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-6">
            <Text as="h2">Dashboard Settings</Text>
            <Text className="text-muted-foreground">
              Configure your dashboard preferences.
            </Text>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};`,
  },

  profile: {
    name: 'UserProfile',
    description: 'User profile card with avatar and actions',
    code: `import { Card, CardBody } from '@zyxui/card';
import Avatar from '@zyxui/avatar';
import Text from '@zyxui/text';
import Badge from '@zyxui/badge';
import Button from '@zyxui/button';

export const UserProfile = ({ user }) => {
  const userData = user || {
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    status: 'Online',
    projects: 12,
    experience: '5 years',
    location: 'San Francisco, CA',
    skills: ['React', 'TypeScript', 'Node.js']
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardBody>
        <div className="text-center mb-6">
          <Avatar
            size="xl"
            src={userData.avatar}
            alt={userData.name}
            className="mx-auto mb-4"
          />
          <Text as="h3" className="mb-1">{userData.name}</Text>
          <Text className="text-muted-foreground mb-2">{userData.role}</Text>
          <Badge content={userData.status} color="success" />
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <Text>Projects</Text>
            <Badge content={userData.projects} variant="outline" />
          </div>
          <div className="flex justify-between">
            <Text>Experience</Text>
            <Badge content={userData.experience} variant="outline" />
          </div>
          <div className="flex justify-between">
            <Text>Location</Text>
            <Text className="text-muted-foreground text-sm">{userData.location}</Text>
          </div>
        </div>

        <div className="mb-6">
          <Text className="mb-2">Skills</Text>
          <div className="flex flex-wrap gap-2">
            {userData.skills.map((skill, index) => (
              <Badge key={index} content={skill} variant="outline" size="sm" />
            ))}
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
  },

  hero: {
    name: 'HeroSection',
    description: 'Landing page hero with call-to-action buttons',
    code: `import Button from '@zyxui/button';
import Text from '@zyxui/text';
import Badge from '@zyxui/badge';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <Badge
          content="New Release v2.0"
          color="primary"
          className="mb-6"
        />

        <Text as="h1" className="text-4xl md:text-6xl font-bold mb-6">
          Build Amazing UIs with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            @zyxui
          </span>
        </Text>

        <Text className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Modern React components designed for speed, accessibility, and beautiful user experiences.
          Create stunning interfaces in minutes, not hours.
        </Text>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="px-8">
            Get Started Free
          </Button>
          <Button variant="bordered" size="lg" className="px-8">
            View Components
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <Text as="h3" className="mb-2">50+ Components</Text>
            <Text className="text-muted-foreground">
              Production-ready React components for any project
            </Text>
          </div>
          <div className="text-center">
            <Text as="h3" className="mb-2">TypeScript First</Text>
            <Text className="text-muted-foreground">
              Built with TypeScript for better developer experience
            </Text>
          </div>
          <div className="text-center">
            <Text as="h3" className="mb-2">Fully Accessible</Text>
            <Text className="text-muted-foreground">
              WCAG compliant components that work for everyone
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};`,
  },

  form: {
    name: 'ContactForm',
    description: 'Contact form with validation',
    code: `import { Card, CardHeader, CardBody, CardFooter, CardTitle } from '@zyxui/card';
import Input from '@zyxui/input';
import Button from '@zyxui/button';
import Text from '@zyxui/text';
import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    // Reset form or show success message
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <Text className="text-muted-foreground">
            Send us a message and we'll get back to you as soon as possible.
          </Text>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardBody className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                state={errors.name ? 'error' : 'default'}
                errorMessage={errors.name}
                required
              />

              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                state={errors.email ? 'error' : 'default'}
                errorMessage={errors.email}
                required
              />
            </div>

            <Input
              label="Subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
            />

            <div>
              <Text className="text-sm font-medium mb-2">Message *</Text>
              <textarea
                placeholder="Tell us more..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={\`w-full h-32 p-3 border rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent \${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }\`}
              />
              {errors.message && (
                <Text className="text-red-500 text-sm mt-1">{errors.message}</Text>
              )}
            </div>
          </CardBody>

          <CardFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};`,
  },
};

// AI analysis functions
function analyzeDescription(description) {
  const desc = description.toLowerCase();
  const suggestions = {
    components: [],
    patterns: [],
    reasoning: [],
  };

  // Analyze for component keywords
  if (
    desc.includes('button') ||
    desc.includes('click') ||
    desc.includes('action')
  ) {
    suggestions.components.push('Button');
    suggestions.reasoning.push(
      'Detected action/interaction words - suggests Button component',
    );
  }

  if (
    desc.includes('card') ||
    desc.includes('profile') ||
    desc.includes('user')
  ) {
    suggestions.components.push('Card', 'Avatar', 'Badge');
    suggestions.reasoning.push(
      'Profile/card structure detected - suggests Card with Avatar and Badge',
    );
  }

  if (
    desc.includes('dashboard') ||
    desc.includes('stats') ||
    desc.includes('metrics')
  ) {
    suggestions.patterns.push('dashboard');
    suggestions.components.push('Card', 'Tabs', 'Badge', 'Text');
    suggestions.reasoning.push(
      'Dashboard pattern detected - grid of metric cards with navigation',
    );
  }

  if (
    desc.includes('hero') ||
    desc.includes('landing') ||
    desc.includes('homepage')
  ) {
    suggestions.patterns.push('hero');
    suggestions.components.push('Text', 'Button');
    suggestions.reasoning.push(
      'Hero section pattern - large text with call-to-action buttons',
    );
  }

  if (
    desc.includes('form') ||
    desc.includes('input') ||
    desc.includes('contact')
  ) {
    suggestions.patterns.push('form');
    suggestions.components.push('Input', 'Button', 'Card');
    suggestions.reasoning.push(
      'Form pattern detected - inputs with validation and submission',
    );
  }

  if (
    desc.includes('tab') ||
    desc.includes('navigation') ||
    desc.includes('section')
  ) {
    suggestions.components.push('Tabs');
    suggestions.reasoning.push(
      'Navigation/sections detected - suggests Tabs component',
    );
  }

  return suggestions;
}

function generateComponent(description, componentName = 'GeneratedComponent') {
  const analysis = analyzeDescription(description);

  // Check if we have a matching template
  const matchingTemplate = Object.entries(templates).find(([key, template]) =>
    analysis.patterns.includes(key),
  );

  if (matchingTemplate) {
    const [, template] = matchingTemplate;
    return {
      name: template.name,
      code: template.code,
      analysis,
      template: true,
    };
  }

  // Generate basic component based on analysis
  const imports = new Set(['Text from "@zyxui/text"']);
  const components = [];

  if (analysis.components.includes('Button')) {
    imports.add('Button from "@zyxui/button"');
  }
  if (analysis.components.includes('Card')) {
    imports.add('{ Card, CardBody, CardHeader, CardTitle } from "@zyxui/card"');
  }
  if (analysis.components.includes('Badge')) {
    imports.add('Badge from "@zyxui/badge"');
  }
  if (analysis.components.includes('Avatar')) {
    imports.add('Avatar from "@zyxui/avatar"');
  }

  const code = `import ${Array.from(imports).join(';\\nimport ')};

export const ${componentName} = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Text as="h1" className="mb-8">
        ${description}
      </Text>

      <div className="space-y-6">
        <Text className="text-muted-foreground">
          This component was generated based on: "${description}"
        </Text>

        ${
          analysis.components.includes('Button')
            ? `
        <div className="flex gap-2">
          <Button>Primary Action</Button>
          <Button variant="bordered">Secondary Action</Button>
        </div>`
            : ''
        }

        ${
          analysis.components.includes('Card')
            ? `
        <Card>
          <CardHeader>
            <CardTitle>Generated Card</CardTitle>
          </CardHeader>
          <CardBody>
            <Text>Card content based on your description.</Text>
          </CardBody>
        </Card>`
            : ''
        }
      </div>
    </div>
  );
};`;

  return {
    name: componentName,
    code,
    analysis,
    template: false,
  };
}

// CLI interface
function displayHelp() {
  console.log(`
@zyxui AI Component Generator

Usage:
  node ai-generator.js "description"     Generate component from description
  node ai-generator.js --template NAME   Use predefined template
  node ai-generator.js --interactive     Interactive mode
  node ai-generator.js --list            List available templates
  node ai-generator.js --help            Show this help

Examples:
  node ai-generator.js "Create a user dashboard with stats"
  node ai-generator.js --template dashboard
  node ai-generator.js --interactive

Templates: ${Object.keys(templates).join(', ')}
`);
}

function listTemplates() {
  console.log('\\nAvailable Templates:\\n');
  Object.entries(templates).forEach(([key, template]) => {
    console.log(`  ${key.padEnd(12)} - ${template.description}`);
  });
  console.log('');
}

async function interactiveMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (prompt) =>
    new Promise((resolve) => rl.question(prompt, resolve));

  console.log('\\n🤖 @zyxui AI Component Generator - Interactive Mode\\n');

  try {
    const description = await question(
      'Describe the component you want to create: ',
    );
    const componentName =
      (await question('Component name (or press Enter for default): ')) ||
      'GeneratedComponent';

    console.log('\\n⚡ Generating component...\\n');

    const result = generateComponent(description, componentName);

    console.log(`📁 Component: ${result.name}`);
    console.log(`🔍 Template: ${result.template ? 'Yes' : 'Custom generated'}`);
    console.log(`\\n📝 Analysis:`);
    result.analysis.reasoning.forEach((reason) => {
      console.log(`   • ${reason}`);
    });

    console.log(`\\n💻 Generated Code:\\n`);
    console.log(result.code);

    const saveFile = await question('\\nSave to file? (y/N): ');
    if (saveFile.toLowerCase() === 'y') {
      const filename = `${result.name}.tsx`;
      fs.writeFileSync(filename, result.code);
      console.log(`\\n✅ Saved to ${filename}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    rl.close();
  }
}

// Main CLI logic
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    displayHelp();
    return;
  }

  if (args.includes('--list')) {
    listTemplates();
    return;
  }

  if (args.includes('--interactive')) {
    await interactiveMode();
    return;
  }

  if (args.includes('--template')) {
    const templateIndex = args.indexOf('--template');
    const templateName = args[templateIndex + 1];

    if (!templateName || !templates[templateName]) {
      console.error(`Error: Template "${templateName}" not found.`);
      console.log('Available templates:', Object.keys(templates).join(', '));
      return;
    }

    const template = templates[templateName];
    console.log(`\\n📁 Template: ${template.name}`);
    console.log(`📝 Description: ${template.description}\\n`);
    console.log(template.code);
    return;
  }

  // Direct description mode
  const description = args.join(' ');
  const result = generateComponent(description);

  console.log(`\\n📁 Component: ${result.name}`);
  console.log(`🔍 Analysis: ${result.analysis.reasoning.join(', ')}`);
  console.log(`\\n💻 Code:\\n`);
  console.log(result.code);
}

// Handle CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { generateComponent, analyzeDescription, templates };
