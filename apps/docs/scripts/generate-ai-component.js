#!/usr/bin/env node

/**
 * @zyxui AI Component Generator
 *
 * This script helps generate React components using @zyxui components
 * based on natural language descriptions or design requirements.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load component catalog
const catalogPath = path.join(__dirname, '..', 'ai-catalog.json');
const componentCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

/**
 * Analyzes requirements and suggests components
 */
function analyzeRequirements(description) {
  const suggestions = {
    components: [],
    patterns: [],
    reasoning: [],
  };

  const desc = description.toLowerCase();

  // Analyze for specific component needs
  if (
    desc.includes('button') ||
    desc.includes('click') ||
    desc.includes('action')
  ) {
    suggestions.components.push('Button');
    suggestions.reasoning.push('Detected need for interactive buttons');
  }

  if (
    desc.includes('card') ||
    desc.includes('container') ||
    desc.includes('group')
  ) {
    suggestions.components.push('Card');
    suggestions.reasoning.push('Detected need for content grouping with cards');
  }

  if (
    desc.includes('tab') ||
    desc.includes('section') ||
    desc.includes('organize')
  ) {
    suggestions.components.push('Tabs');
    suggestions.reasoning.push(
      'Detected need for content organization with tabs',
    );
  }

  if (
    desc.includes('user') ||
    desc.includes('profile') ||
    desc.includes('avatar')
  ) {
    suggestions.components.push('Avatar');
    suggestions.reasoning.push('Detected need for user representation');
  }

  if (
    desc.includes('status') ||
    desc.includes('badge') ||
    desc.includes('label') ||
    desc.includes('count')
  ) {
    suggestions.components.push('Badge');
    suggestions.reasoning.push('Detected need for status indicators or labels');
  }

  if (
    desc.includes('title') ||
    desc.includes('heading') ||
    desc.includes('text')
  ) {
    suggestions.components.push('Text');
    suggestions.reasoning.push('Detected need for typography components');
  }

  // Analyze for common patterns
  if (
    desc.includes('dashboard') ||
    desc.includes('stats') ||
    desc.includes('analytics')
  ) {
    suggestions.patterns.push('dashboard');
    suggestions.reasoning.push('Dashboard pattern detected');
  }

  if (
    desc.includes('hero') ||
    desc.includes('landing') ||
    desc.includes('header')
  ) {
    suggestions.patterns.push('heroSection');
    suggestions.reasoning.push('Hero section pattern detected');
  }

  if (
    desc.includes('feature') ||
    desc.includes('grid') ||
    desc.includes('showcase')
  ) {
    suggestions.patterns.push('featureGrid');
    suggestions.reasoning.push('Feature grid pattern detected');
  }

  if (desc.includes('profile') && desc.includes('user')) {
    suggestions.patterns.push('userProfile');
    suggestions.reasoning.push('User profile pattern detected');
  }

  return suggestions;
}

/**
 * Generates component imports based on selected components
 */
function generateImports(components) {
  const imports = [];

  components.forEach((componentName) => {
    const component = componentCatalog.components[componentName];
    if (component) {
      imports.push(component.import);
    }
  });

  return imports.join('\n');
}

/**
 * Generates TypeScript interface for component props
 */
function generateInterface(componentName, dataFields = []) {
  if (dataFields.length === 0) return '';

  const interfaceName = `${componentName}Props`;
  const fields = dataFields
    .map((field) => `  ${field.name}: ${field.type};`)
    .join('\n');

  return `interface ${interfaceName} {
${fields}
}

`;
}

/**
 * Generate component templates based on patterns
 */
function generateComponentTemplate(pattern, componentName, props = {}) {
  const patterns = componentCatalog.designPatterns.layouts;

  if (!patterns[pattern]) {
    return `// Pattern '${pattern}' not found in catalog`;
  }

  const template = patterns[pattern].template;

  // Basic template substitution
  let code = template
    .replace(/\{componentName\}/g, componentName)
    .replace(/\{\/\* Dashboard content \*\/\}/g, generateDashboardContent())
    .replace(/\{features\.map\([^}]+\}\)\}/g, generateFeatureMapCode())
    .replace(/\{user\./g, '{props.user.')
    .replace(/\{stats\.map\([^}]+\}\)\}/g, generateStatsMapCode());

  return code;
}

function generateDashboardContent() {
  return `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardBody>
                <Text variant="h3">1,234</Text>
                <Text className="text-muted-foreground">Total Users</Text>
                <Badge content="+12%" color="success" className="mt-2" />
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text variant="h3">$12,345</Text>
                <Text className="text-muted-foreground">Revenue</Text>
                <Badge content="+5%" color="success" className="mt-2" />
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text variant="h3">98.5%</Text>
                <Text className="text-muted-foreground">Uptime</Text>
                <Badge content="Excellent" color="success" className="mt-2" />
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text variant="h3">456</Text>
                <Text className="text-muted-foreground">Active Sessions</Text>
                <Badge content="-2%" color="warning" className="mt-2" />
              </CardBody>
            </Card>
          </div>`;
}

function generateFeatureMapCode() {
  return `{[
    { id: 1, title: "Feature 1", description: "Amazing feature description", icon: "🚀" },
    { id: 2, title: "Feature 2", description: "Another great feature", icon: "⚡" },
    { id: 3, title: "Feature 3", description: "Third fantastic feature", icon: "🎯" }
  ].map((feature) => (
    <Card key={feature.id}>
      <CardBody>
        <div className="text-4xl mb-4">{feature.icon}</div>
        <Text variant="h3" className="mb-2">
          {feature.title}
        </Text>
        <Text className="text-muted-foreground">
          {feature.description}
        </Text>
      </CardBody>
    </Card>
  ))}`;
}

function generateStatsMapCode() {
  return `{stats.map((stat, index) => (
    <Card key={index}>
      <CardBody>
        <Text variant="h3" className="mb-1">
          {stat.value}
        </Text>
        <Text className="text-muted-foreground text-sm mb-2">
          {stat.label}
        </Text>
        <Badge
          content={\`\${stat.change > 0 ? '+' : ''}\${stat.change}%\`}
          color={stat.trend === 'up' ? 'success' : 'danger'}
          variant="outline"
        />
      </CardBody>
    </Card>
  ))}`;
}

/**
 * Main component generator function
 */
function generateComponent(description, componentName, options = {}) {
  const analysis = analyzeRequirements(description);
  const imports = generateImports(analysis.components);

  // Determine primary pattern
  const primaryPattern = analysis.patterns[0] || 'basic';

  // Generate interface if needed
  const interfaceCode = options.includeProps
    ? generateInterface(componentName, options.dataFields || [])
    : '';

  // Generate component template
  const componentTemplate =
    analysis.patterns.length > 0
      ? generateComponentTemplate(primaryPattern, componentName)
      : generateBasicComponent(analysis.components, componentName);

  // Combine all parts
  const fullComponent = `${imports}

${interfaceCode}export const ${componentName} = ${options.includeProps ? `(props: ${componentName}Props)` : '()'} => {
  return (
    ${componentTemplate}
  );
};`;

  return {
    code: fullComponent,
    analysis,
    suggestions: analysis.reasoning,
  };
}

function generateBasicComponent(components, componentName) {
  if (components.includes('Card') && components.includes('Button')) {
    return `<Card className="max-w-md">
      <CardBody>
        <Text variant="h3" className="mb-4">
          ${componentName}
        </Text>
        <Text className="mb-4">
          This is a basic component generated with your selected components.
        </Text>
        <Button>Get Started</Button>
      </CardBody>
    </Card>`;
  }

  return `<div className="p-6">
      <Text variant="h2" className="mb-4">
        ${componentName}
      </Text>
      <Text>
        Generated component based on your requirements.
      </Text>
    </div>`;
}

/**
 * CLI Interface
 */
function runCLI() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
@zyxui AI Component Generator

Usage:
  node generate-ai-component.js "description" ComponentName [options]

Examples:
  node generate-ai-component.js "user dashboard with stats" UserDashboard
  node generate-ai-component.js "hero section with buttons" HeroSection
  node generate-ai-component.js "feature grid with cards" FeatureGrid

Options:
  --output <file>    Save to file
  --props           Include TypeScript props interface
  --analyze         Show analysis only
    `);
    process.exit(0);
  }

  const description = args[0];
  const componentName = args[1] || 'GeneratedComponent';
  const outputFile = args
    .find((arg) => arg.startsWith('--output='))
    ?.split('=')[1];
  const includeProps = args.includes('--props');
  const analyzeOnly = args.includes('--analyze');

  if (analyzeOnly) {
    const analysis = analyzeRequirements(description);
    console.log('\n📊 Analysis Results:');
    console.log('\nSuggested Components:', analysis.components.join(', '));
    console.log('Detected Patterns:', analysis.patterns.join(', '));
    console.log('\nReasoning:');
    analysis.reasoning.forEach((reason) => console.log(`  • ${reason}`));
    return;
  }

  const result = generateComponent(description, componentName, {
    includeProps,
  });

  console.log('\n🤖 Generated Component:');
  console.log('\n' + result.code);

  console.log('\n💡 Suggestions:');
  result.suggestions.forEach((suggestion) => console.log(`  • ${suggestion}`));

  if (outputFile) {
    fs.writeFileSync(outputFile, result.code);
    console.log(`\n📁 Saved to: ${outputFile}`);
  }
}

// Export for programmatic use
export {
  analyzeRequirements,
  generateComponent,
  generateImports,
  componentCatalog,
};

// Run CLI if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runCLI();
}
