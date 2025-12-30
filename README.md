Welcome! Happy to see you are checking out my personal projects!

This website is build with React and NextJs. I am also using MdxJs to render my blog entry markdown files.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testing

This project uses Jest for unit testing. To run the tests:

```bash
npm test
# or to run tests in watch mode
npm run test:watch
```

The test suite includes:
- MDX page parsing validation to ensure blog posts are correctly formatted
- Component tests for the TextLink component
- Unit tests for blog entry sorting functionality

Tests are automatically run as part of the CI/CD pipeline before deployment.

## Creating blogs via Markdown
Documentation for creating blogs via markdown can be found [here](https://nextjs.org/docs/app/building-your-application/configuring/mdx).