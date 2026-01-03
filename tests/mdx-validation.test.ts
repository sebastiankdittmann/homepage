import fs from 'fs';
import path from 'path';
import { components } from '../mdx-components';

describe('MDX Configuration Validation', () => {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const configuredComponents = Object.keys(components);

  // Function to find all MDX files recursively
  function findMdxFiles(dir: string): string[] {
    const files: string[] = [];
    
    if (!fs.existsSync(dir)) {
      return files;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...findMdxFiles(fullPath));
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  // Function to extract markdown elements used in MDX content
  function extractMarkdownElements(content: string): Set<string> {
    const elements = new Set<string>();

    // Check for headings
    if (/^#{1}\s/m.test(content)) elements.add('h1');
    if (/^#{2}\s/m.test(content)) elements.add('h2');
    if (/^#{3}\s/m.test(content)) elements.add('h3');
    if (/^#{4}\s/m.test(content)) elements.add('h4');
    if (/^#{5}\s/m.test(content)) elements.add('h5');
    if (/^#{6}\s/m.test(content)) elements.add('h6');

    // Check for lists (unordered and ordered)
    if (/^[-*+]\s/m.test(content)) {
      elements.add('ul');
      elements.add('li');
    }
    if (/^\d+\.\s/m.test(content)) {
      elements.add('ol');
      elements.add('li');
    }

    // Check for links
    if (/\[.+?\]\(.+?\)/.test(content)) elements.add('a');

    // Check for code blocks
    if (/```[\s\S]*?```/.test(content)) {
      elements.add('pre');
      elements.add('code');
    }

    // Check for inline code
    if (/`[^`]+`/.test(content)) {
      elements.add('code');
    }

    // Check for blockquotes
    if (/^>\s/m.test(content)) elements.add('blockquote');

    // Check for emphasis (italic)
    if (/(\*[^*]+\*|_[^_]+_)/.test(content)) elements.add('em');

    // Check for strong (bold)
    if (/(\*\*[^*]+\*\*|__[^_]+__)/.test(content)) elements.add('strong');

    // Check for images
    if (/!\[.*?\]\(.*?\)/.test(content)) elements.add('img');

    // Check for horizontal rules
    if (/^(-{3,}|\*{3,}|_{3,})$/m.test(content)) elements.add('hr');

    // Check for tables
    if (/\|.*\|/.test(content)) {
      elements.add('table');
      elements.add('thead');
      elements.add('tbody');
      elements.add('tr');
      elements.add('th');
      elements.add('td');
    }

    // Paragraphs are implicit - if there's text content that's not part of other elements
    if (content.trim().length > 0) {
      elements.add('p');
    }

    return elements;
  }

  it('should have MDX files in the blog directory', () => {
    const mdxFiles = findMdxFiles(blogDir);
    expect(mdxFiles.length).toBeGreaterThan(0);
  });

  it('should validate all MDX files have corresponding component configurations', () => {
    const mdxFiles = findMdxFiles(blogDir);
    const missingComponents: { file: string; missing: string[] }[] = [];

    for (const filePath of mdxFiles) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const usedElements = extractMarkdownElements(content);
      
      const missing = Array.from(usedElements).filter(
        element => !configuredComponents.includes(element)
      );

      if (missing.length > 0) {
        missingComponents.push({
          file: path.relative(process.cwd(), filePath),
          missing,
        });
      }
    }

    if (missingComponents.length > 0) {
      let errorMessage = '\n\nMDX Configuration Validation Failed!\n\n';
      errorMessage += 'The following MDX files use Markdown elements that are not configured in mdx-components.tsx:\n\n';
      
      for (const { file, missing } of missingComponents) {
        errorMessage += `  ${file}:\n`;
        for (const element of missing) {
          errorMessage += `    - <${element}> is not configured\n`;
        }
        errorMessage += '\n';
      }
      
      errorMessage += 'Please add the missing component configurations to mdx-components.tsx\n';
      errorMessage += `Configured components: ${configuredComponents.join(', ')}\n`;

      throw new Error(errorMessage);
    }
  });

  it('should list all configured MDX components', () => {
    // This test documents what components are currently configured
    expect(configuredComponents).toEqual(
      expect.arrayContaining(['h1', 'h2', 'h3', 'p', 'ul', 'ol', 'li', 'a', 'pre'])
    );
  });
});
