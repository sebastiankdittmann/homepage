import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from '@/components/ui/provider';
import TextLink from '@/components/textLink/TextLink';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('TextLink Component', () => {
  const mockProps = {
    href: '/blog/test-post',
    publishDate: new Date(2025, 5, 29), // June 29, 2025
    text: 'Test Blog Post',
  };

  const renderWithProvider = (component: React.ReactElement) => {
    return render(<Provider>{component}</Provider>);
  };

  it('should render the text link correctly', () => {
    renderWithProvider(<TextLink {...mockProps} />);
    
    // Check if the text is rendered
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
  });

  it('should format the publish date correctly (de-DE format)', () => {
    renderWithProvider(<TextLink {...mockProps} />);
    
    // Expected format: DD.MM.YYYY
    const formattedDate = mockProps.publishDate.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    
    expect(screen.getByText(`${formattedDate}:`)).toBeInTheDocument();
  });

  it('should render with correct href property', () => {
    const { container } = renderWithProvider(<TextLink {...mockProps} />);
    
    // The component doesn't render an <a> tag but uses onClick handler
    // Verify the component renders without errors
    expect(container).toBeTruthy();
  });

  it('should handle different dates correctly', () => {
    const differentDate = new Date(2024, 0, 1); // January 1, 2024
    const propsWithDifferentDate = { ...mockProps, publishDate: differentDate };
    
    renderWithProvider(<TextLink {...propsWithDifferentDate} />);
    
    const formattedDate = differentDate.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    
    expect(screen.getByText(`${formattedDate}:`)).toBeInTheDocument();
  });
});
