# Guru's Portfolio - Engineering Leader

A high-performance personal portfolio website built with **React** and **Vite**, featuring a modern **Glassmorphism** design system, interactive animations, and dynamic content fetching.

## 🚀 Key Features

- **Modern Aesthetics**: Premium glassmorphism UI with smooth gradients (Teal → Green).
- **Interactive Experience**: Implemented with `framer-motion` for fluid transitions and magnetic button effects.
- **Dynamic Content**: 
  - **Experience Page**: Interactive career timeline, skills visualization, and 9+ real testimonials.
  - **Blog (Reading Collection)**: Automatically fetches metadata (Title, Description, Source) from provided URLs on the fly.
- **Dark/Light Mode**: Fully supported with a seamless toggle.
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v18)
- **Tooling**: [Vite](https://vitejs.dev/) for ultra-fast builds.
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome, etc.)
- **Navigation**: [React Router](https://reactrouter.com/)

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- npm (installed with Node.js)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd resume
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## ☁️ Deployment (Cloudflare Pages)

To deploy successfully to Cloudflare Pages, use the following **Build Settings**:

- **Framework Preset**: None (or Vite)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`

> [!IMPORTANT]
> Ensure the **Build output directory** is set specifically to `dist`. Cloudflare may default it to `out` or `build`, which will cause the deployment to fail.

## 📝 Configuration

### Adding Articles to the Blog

To add new articles to your **Reading Collection**:
1. Open `src/pages/Blog.jsx`.
2. Find the `articleUrls` array.
3. Simply paste the URL of the article you want to share. The system will automatically fetch the metadata when the page loads.

### Updating Resume

The resume file is located in `/public/Gurusubramaniam.pdf`. Replace this file with your latest version to update the "Download Resume" link.

---
Built with ❤️ by Guru.
