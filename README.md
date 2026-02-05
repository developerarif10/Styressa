# Styressa Beauty & Spa Salon 🌿

![Styressa Hero](/public/images/hero-image.webp)

> **Styressa** is a modern, high-performance marketing website designed for a premium beauty and spa salon. Built with **Next.js 15**, **Tailwind CSS**, and **Supabase**, it delivers a luxurious user experience with a focus on speed, accessibility, and aesthetic elegance.

---

## 🚀 Tech Stack

- **Frontend:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Backend/DB:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda) (Display) & [Inter](https://fonts.google.com/specimen/Inter) (Body)

---

## ✨ Features

- **🎨 Premium Design:** Custom "Calm & Luxurious" color palette and typography.
- **📱 Fully Responsive:** Optimized for all devices (Mobile, Tablet, Desktop).
- **⚡ High Performance:** Utilizes React Server Components and Next.js optimization.
- **📧 Contact Form:** Integrated with Supabase for real-time form submissions.
- **♿ Accessible:** Semantic HTML and ARIA best practices.
- **🌚 Modern UI:** Smooth transitions, sticky navigation, and interactive elements.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/styressa.git
   cd styressa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Supabase credentials.

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   > **Note:** Without these variables, the contact form will not function properly.

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📂 Project Structure

```bash
.
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout (Fonts, Metadata)
│   ├── page.tsx          # Homepage composition
│   └── globals.css       # Global styles & Tailwind theme
├── components/           # React Components
│   ├── ui/               # Reusable UI elements (Button, etc.)
│   ├── Navbar.tsx        # Responsive Navigation
│   ├── Hero.tsx          # Hero Section
│   ├── Services.tsx      # Services Grid
│   ├── Contact.tsx       # Contact Form (Supabase)
│   └── ...               # Other sections
├── public/               # Static Assets (Images, Icons)
├── utils/                # Utilities (Supabase client, Helpers)
└── tailwind.config.ts    # Tailwind Configuration
```

---

## 🚢 Deployment

The easiest way to deploy this next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the project into Vercel.
3. Add your **Environment Variables** (`NEXT_PUBLIC_SUPABASE_URL`, etc.) in the Vercel dashboard.
4. Click **Deploy**.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Designed & Developed with ❤️ for Styressa.
