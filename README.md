# Academic Papers Collection

A web application to organize and browse academic papers for research. Designed for PhD students and researchers who need to keep track of the papers they have read.

![Screenshot of the Academic Papers Collection website](.github/screenshot.png)

## Features

- Browse and filter papers by category, read status, and search terms
- View detailed information about each paper, including abstract, authors, venue, and personal notes
- Mobile-responsive design for easy access on all devices
- Organize papers by research categories
- Track read and unread papers

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/academic-papers-collection.git
   cd academic-papers-collection
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Your Papers

Edit the `src/data/papers.ts` file to add your own papers. The paper schema includes:

```typescript
interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  keywords: string[];
  url: string;
  notes: string;
  category: string;
  read: boolean;
  dateAdded: string;
}
```

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Setup

1. Create a GitHub repository for your project
2. Push your code to the repository
3. Go to your GitHub repository settings > Pages
4. Set the source to "GitHub Actions"

GitHub Actions will automatically build and deploy your site whenever you push to the main branch.

### Manual Deployment

You can also manually trigger a deployment by going to the Actions tab in your GitHub repository and selecting the "Deploy to GitHub Pages" workflow.

## Customization

- Update site information in `src/app/layout.tsx`
- Change theme colors in `tailwind.config.js`
- Update GitHub URL in the footer (`src/components/Footer.tsx`)

## License

MIT

---

Made with ❤️ for researchers and PhD students
