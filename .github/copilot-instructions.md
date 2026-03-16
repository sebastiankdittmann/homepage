# Code
- Code in this repository is written in TypeScript and React, utilizing Next.js.
- Use ESLint and Prettier for code formatting and linting.
- Write functional components and prefer hooks over class components.

# Tests
- Use Jest and React Testing Library for unit and integration tests.
- Test files should be located alongside the components they test, with a `.test.tsx` extension.
- Ensure test coverage includes components, utilities, and hooks.
- Use Playwright for end-to-end tests. E2e tests live in the `e2e/` directory.
- Every new page (`page.tsx` or `page.mdx`) must have a corresponding e2e test in `e2e/pages.spec.ts` that verifies the page renders correctly and is reachable via navigation.
- When modifying an existing page, evaluate whether the change requires updating or adding e2e tests. Add or update tests for any new content, changed routes, or altered navigation flows.

# CI/CD
- CI/CD pipelines are configured using GitHub Actions.
- Prefer using existing workflow templates for consistency.
- Write consice and clear commit messages following the Conventional Commits specification.
- Write consice and clear pull request titles and descriptions, linking to relevant issues when applicable.

# Documentation
- Extend ReadMe files with relevant usage examples and setup instructions.
- Write comments only when necessary to explain complex logic; strive for self-explanatory code.
