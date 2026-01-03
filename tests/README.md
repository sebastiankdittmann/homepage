# MDX Configuration Validation

## Purpose

This test ensures that all MDX files in the blog use only Markdown syntax elements that have corresponding component configurations in `mdx-components.tsx`.

## How It Works

The test:
1. Recursively scans all `.mdx` files in the `app/blog` directory
2. Parses each file to extract which Markdown elements are used (headings, lists, links, code blocks, etc.)
3. Compares the used elements against the components defined in `mdx-components.tsx`
4. Fails with a clear error message if any MDX file uses elements that aren't configured

## What Gets Validated

The test checks for these Markdown elements:
- **Headings**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- **Text formatting**: `p`, `em` (italic), `strong` (bold)
- **Lists**: `ul`, `ol`, `li`
- **Links**: `a`
- **Code**: `code` (inline), `pre` (code blocks)
- **Quotes**: `blockquote`
- **Media**: `img`
- **Tables**: `table`, `thead`, `tbody`, `tr`, `th`, `td`
- **Separators**: `hr`

## When It Runs

This test runs:
- Locally when you run `npm test`
- In CI/CD on every pull request via the `pr-tests.yml` workflow
- It will **block PR merges** if validation fails

## Example Error

If you add an MDX file using a blockquote without configuring it:

```
MDX Configuration Validation Failed!

The following MDX files use Markdown elements that are not configured in mdx-components.tsx:

  app/blog/my-post/page.mdx:
    - <blockquote> is not configured
    - <strong> is not configured

Please add the missing component configurations to mdx-components.tsx
Configured components: h1, h2, h3, p, ul, ol, li, a, pre, code, em
```

## How to Fix Validation Errors

If the test fails, you have two options:

### Option 1: Add the Missing Component (Recommended)

Add the missing component to `mdx-components.tsx`:

```typescript
export const components = {
  // ... existing components ...
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote
      style={{
        borderLeft: '4px solid #ddd',
        paddingLeft: '1em',
        margin: '1em 0',
      }}
      {...props}
    />
  ),
};
```

### Option 2: Avoid Using the Element

Rewrite your MDX content to avoid using the unconfigured element.

## Testing the Validator

To run just the MDX validation test:

```bash
npm test tests/mdx-validation.test.ts
```

To test all tests including this one:

```bash
npm test
```

## Currently Configured Components

As of the last update, these components are configured in `mdx-components.tsx`:
- `h1`, `h2`, `h3` - Headings
- `p` - Paragraphs
- `ul`, `ol`, `li` - Lists
- `a` - Links
- `pre`, `code` - Code blocks and inline code
- `em` - Italic/emphasis text
