# Novelli Pressure Washing Website

A modern, responsive website for Novelli Pressure Washing built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design
- SEO optimized
- Fast loading times
- Interactive components
- Contact form with email functionality
- Testimonials carousel
- Service showcase
- Before/After image comparisons

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Animations**: CSS Transitions

## Project Structure

- `app/`: Next.js App Router pages and layouts
- `src/components/`: React components
  - `layout/`: Layout components (Header, Footer, etc.)
  - `ui/`: Reusable UI components (Button, Card, etc.)
  - `sections/`: Page sections (Hero, Services, etc.)
- `src/data/`: JSON data files
- `public/`: Static assets

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Customization

- Update the content in the `src/data/` directory to change the website content
- Modify the color scheme in `app/globals.css` and `tailwind.config.js`
- Replace placeholder images in the `public/images/` directory with real images

## Email Functionality

The contact forms are configured to send emails to novellipw@gmail.com using SendGrid.

For detailed setup instructions, see [EMAIL_SETUP.md](./EMAIL_SETUP.md).

## License

This project is licensed under the MIT License.
