# Healthcare Provider Directory

A Learning Support Provider directory built with React, TypeScript, and modern CSS. Browse and discover healthcare providers with detailed profiles, ratings, and contact information.

## 🚀 Features

- **Modern Dark Theme**: Eye-catching design with gradients and animations
- **Provider Search**: Find healthcare providers by name or specialization
- **Detailed Profiles**: View comprehensive provider information including ratings, experience, and contact details
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Custom CSS** - No styling frameworks, pure CSS with modern features

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Learning_Support_Provider_Directory_Module
```

### 2. Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start and be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── SearchBar.tsx   # Search functionality
│   ├── ProviderCard.tsx # Provider card component
│   └── LoadingSpinner.tsx # Loading indicator
├── pages/              # Page components
│   ├── ProviderList.tsx    # Main provider listing
│   ├── ProviderDetail.tsx  # Individual provider details
│   └── NotFound.tsx        # 404 page
├── services/           # API and data services
│   └── providerService.ts  # Provider data management
├── data/              # Static data files
│   └── providers.json # Provider data
├── hooks/             # Custom React hooks
└── App.tsx            # Main application component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

To preview the production build locally:

```bash
npm run preview
```

### Adding New Providers
Edit `src/data/providers.json` to add new healthcare providers:

```json
{
  "id": "new-provider-id",
  "name": "Provider Name",
  "specialization": "Specialization",
  "rating": 4.5,
  "experience": "10 years",
  "location": "City, State",
  "contactEmail": "email@example.com",
  "phoneNumber": "(555) 123-4567",
  "shortDescription": "Brief description...",
  "description": "Detailed description..."
}
```

### Styling
The application uses custom CSS located in `src/index.css`. You can modify colors, animations, and layouts by editing this file.

### Key CSS Variables
```css
:root {
  --primary-color: #6366f1;
  --background-color: #0a0a0a;
  --card-background: #1a1a1a;
  /* Add your custom variables */
}
```

## 🔍 Features Overview

### Search Functionality
- Search providers by name or specialization
- Real-time filtering as you type
- Case-insensitive search

### Provider Cards
- Beautiful gradient borders
- Hover animations
- Star ratings display
- Contact information
- Experience badges

### Provider Details
- Comprehensive provider information
- Contact details
- Professional background
- Ratings and reviews
