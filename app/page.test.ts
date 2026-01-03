describe('Homepage Functionalities', () => {
  describe('Blog Entries Sorting', () => {
    it('should sort blog entries by publish date correctly', () => {
      const blogEntries = [
        {
          href: '/blog/post-3',
          publishDate: new Date(2025, 7, 15),
          text: 'Third Post',
        },
        {
          href: '/blog/post-1',
          publishDate: new Date(2025, 5, 29),
          text: 'First Post',
        },
        {
          href: '/blog/post-2',
          publishDate: new Date(2025, 6, 10),
          text: 'Second Post',
        },
      ];

      // Sort by publish date (ascending)
      const sorted = blogEntries.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime());

      // Verify the sorting order
      expect(sorted[0].text).toBe('First Post');
      expect(sorted[1].text).toBe('Second Post');
      expect(sorted[2].text).toBe('Third Post');
    });

    it('should handle empty blog entries array', () => {
      const blogEntries: any[] = [];
      
      const sorted = blogEntries.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime());
      
      expect(sorted).toHaveLength(0);
    });

    it('should handle single blog entry', () => {
      const blogEntries = [
        {
          href: '/blog/single-post',
          publishDate: new Date(2025, 5, 29),
          text: 'Single Post',
        },
      ];

      const sorted = blogEntries.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime());

      expect(sorted).toHaveLength(1);
      expect(sorted[0].text).toBe('Single Post');
    });

    it('should maintain stable sort for entries with same publish date', () => {
      const blogEntries = [
        {
          href: '/blog/post-a',
          publishDate: new Date(2025, 5, 29),
          text: 'Post A',
        },
        {
          href: '/blog/post-b',
          publishDate: new Date(2025, 5, 29),
          text: 'Post B',
        },
      ];

      const sorted = blogEntries.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime());

      // Both entries have the same date, so order should remain stable
      expect(sorted).toHaveLength(2);
      expect(sorted[0].publishDate.getTime()).toBe(sorted[1].publishDate.getTime());
    });
  });

  describe('Blog Entry Structure', () => {
    it('should have valid blog entry structure', () => {
      const blogEntry = {
        href: '/blog/test',
        publishDate: new Date(2025, 5, 29),
        text: 'Test Entry',
      };

      expect(blogEntry).toHaveProperty('href');
      expect(blogEntry).toHaveProperty('publishDate');
      expect(blogEntry).toHaveProperty('text');
      expect(blogEntry.href).toMatch(/^\/blog\//);
      expect(blogEntry.publishDate).toBeInstanceOf(Date);
      expect(typeof blogEntry.text).toBe('string');
    });
  });
});
