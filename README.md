# Bearpy Credit - Credit Repair Consultation Website

A modern, responsive website for credit repair consultation services built with React, Vite, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Mobile-First Design**: Responsive layout optimized for all devices
- **Modern UI**: Clean, professional design with shadcn/ui components
- **High-Quality Images**: Beautiful Unsplash images throughout the site
- **Working Forms**: Functional contact form with validation
- **SEO-Friendly**: Semantic HTML structure for better search engine optimization
- **Fast Performance**: Built with Vite for optimal loading speeds

## 📱 Pages

- **Home**: Overview of services, key benefits, and testimonials
- **About**: Company story, mission, team, and values
- **Services**: Detailed service offerings and pricing
- **Contact**: Lead capture form and contact information

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 🎨 Design Features

- **White Theme**: Clean, professional white color scheme
- **Mobile-First**: Responsive design starting from mobile
- **High-Quality Images**: Professional Unsplash images
- **Accessible**: WCAG compliant components
- **Modern Typography**: Clean, readable fonts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   └── Contact.tsx     # Contact page
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎯 Key Features

### Home Page
- Hero section with compelling headline
- Feature cards highlighting benefits
- Client testimonials
- Call-to-action sections

### About Page
- Company mission and values
- Team member profiles
- Company statistics
- Story and background

### Services Page
- Detailed service descriptions
- Pricing tiers
- Process explanation
- FAQ section

### Contact Page
- Working contact form
- Contact information
- Business hours
- Why choose us section

## 🔧 Customization

### Colors
The color scheme can be customized in `src/index.css` by modifying the CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other color variables */
}
```

### Content
All content is easily editable in the respective page components in the `src/pages/` directory.

### Images
Replace Unsplash image URLs with your own images by updating the `src` attributes in the components.

## 📱 Mobile Optimization

- Responsive grid layouts
- Mobile-first CSS approach
- Touch-friendly buttons and forms
- Optimized images for different screen sizes
- Collapsible navigation menu

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload the `dist` folder

## 📄 License

This project is for demonstration purposes. Please ensure you have proper licensing for any commercial use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact the development team.

---

Built with ❤️ using React, Vite, and Tailwind CSS