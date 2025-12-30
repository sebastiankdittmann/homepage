import { promises as fs } from 'fs';
import path from 'path';

describe('MDX Pages', () => {
  describe('Blog Posts', () => {
    it('should have valid MDX file for script-commands blog post', async () => {
      const mdxPath = path.join(process.cwd(), 'app', 'blog', 'script-commands', 'page.mdx');
      
      // Check if the file exists
      await expect(fs.access(mdxPath)).resolves.not.toThrow();
      
      // Read the file content
      const content = await fs.readFile(mdxPath, 'utf-8');
      
      // Verify the file is not empty
      expect(content.length).toBeGreaterThan(0);
      
      // Verify it contains expected content
      expect(content).toContain('Speed up repetitive tasks via script commands');
    });

    it('should parse MDX file with proper markdown syntax', async () => {
      const mdxPath = path.join(process.cwd(), 'app', 'blog', 'script-commands', 'page.mdx');
      const content = await fs.readFile(mdxPath, 'utf-8');
      
      // Check for markdown headers
      expect(content).toMatch(/^#\s+/m);
      
      // Check for markdown sections
      expect(content).toMatch(/^##\s+/m);
      
      // Check for code blocks
      expect(content).toContain('```');
    });

    it('should have all required metadata in MDX content', async () => {
      const mdxPath = path.join(process.cwd(), 'app', 'blog', 'script-commands', 'page.mdx');
      const content = await fs.readFile(mdxPath, 'utf-8');
      
      // Verify main title exists
      expect(content).toContain('#');
      
      // Verify content has meaningful length (more than just a title)
      expect(content.length).toBeGreaterThan(100);
    });
  });

  describe('MDX File Discovery', () => {
    it('should be able to find MDX files in blog directory', async () => {
      const blogDir = path.join(process.cwd(), 'app', 'blog');
      
      // Check if blog directory exists
      await expect(fs.access(blogDir)).resolves.not.toThrow();
      
      // Read directory
      const entries = await fs.readdir(blogDir, { withFileTypes: true });
      
      // Should have at least one subdirectory with MDX content
      const hasSubdirectory = entries.some(entry => entry.isDirectory());
      expect(hasSubdirectory).toBe(true);
    });
  });
});
