

# Arta Export - Official Website

**Arta Export** is the official website for an export company, built using Next.js. It provides a platform to showcase products, company details, and offers easy contact options for international clients interested in exploring export opportunities.

---

## 🚀 Getting Started

Follow these instructions to get the project up and running locally on your machine.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/arta-export.git
   ```

2. Navigate to the project directory:

   ```bash
   cd arta-export
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Install Tailwind CSS and its required dependencies:

   ```bash
   npm install tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

5. Configure Tailwind by adding the following to your `tailwind.config.js`:

   ```js
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

6. In the `styles/globals.css`, add the following imports to enable Tailwind:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Running the App

To start the development server, run:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the website locally.

---

## 🧑‍💻 Project Structure

```
/arta-export
│
├── /pages                # All Next.js pages (routes)
│   ├── /index.js         # Homepage
│   ├── /about.js         # About Us page
│   └── /contact.js       # Contact Us page
│
├── /components           # Reusable UI components (e.g., Navbar, Footer)
│
├── /public               # Static assets (images, fonts, etc.)
│
├── /styles               # Global styles and CSS files
│   └── /globals.css      # Global styles for the app
│
└── next.config.js        # Configuration for Next.js
```



## ⚙️ Configuration

### Environment Variables

If you are integrating with APIs or services (like a CMS or a database), add your environment variables to the `.env.local` file:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```



## 🎨 Features

- **Product Showcase**: Display products with descriptions and images.
- **Contact Form**: Let international clients inquire directly.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **SEO Optimization**: Built with SEO best practices for better search engine visibility.



## 🛠 Technologies Used

- **Next.js**: React framework for building fast, scalable web apps.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for custom styling.
- **@fortawesome/fontawesome-free**: For adding icons to the project.
- **React Icons**: For using scalable vector icons in the app.
- **Swiper**: A powerful library for creating touch sliders and carousels.

### Dependencies in `package.json`:

```json
"dependencies": {
  "@fortawesome/fontawesome-free": "^6.6.0",
  "next": "14.2.6",
  "react": "^18",
  "react-dom": "^18",
  "react-icons": "^5.3.0",
  "react-svg-worldmap": "^2.0.0-alpha.16",
  "react-tooltip": "^5.28.0",
  "swiper": "^11.1.12",
  "tailwindcss": "^3.0.0",
  "postcss": "^8.4.10",
  "autoprefixer": "^10.4.0"
}
```
