# LeadIQ Enterprise - AI-Powered Lead Qualification Dashboard

A sophisticated React + Tailwind CSS component showcasing an AI-driven CRM system for lead scoring and customer profile management.

## 🎯 Features

- **Dynamic AI Scoring System**: Real-time lead qualification with visual score gauge
- **Explainable AI Audit Trail**: Complete transparent timeline of AI decisions
- **Multi-factor Scoring**: 6-signal evaluation system with detailed breakdown
- **Responsive Dashboard**: Three-column layout with customer profile, metrics, and audit trail
- **Commercial Fit Analysis**: Budget verification, procurement cycle tracking, win likelihood
- **Profile Telemetry**: Customer organization and contact information
- **Interactive UI Elements**: Progress bars, badges, timeline visualization

## 📦 Installation

### 1. Clone or Download the Project
```bash
cd leadiq-enterprise-crm
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- React 18.2.0
- Tailwind CSS 3.3.0
- Vite (build tool)
- Development tools

### 3. Set Up Tailwind CSS

Create a `postcss.config.js` file in the root:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create a `src/index.css` file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Update Vite Config

Create a `vite.config.js` file:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

## 🚀 Usage

### Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
leadiq-enterprise-crm/
├── AiDynamicScoringCustomerProfile.jsx  # Main component
├── tailwind.config.js                   # Tailwind configuration
├── postcss.config.js                    # PostCSS configuration
├── vite.config.js                       # Vite build configuration
├── package.json                         # Dependencies
├── src/
│   ├── index.css                        # Global styles
│   ├── index.jsx                        # React entry point
│   └── App.jsx                          # Root component
└── README.md                            # This file
```

## 🎨 Component Hierarchy

```
AiDynamicScoringCustomerProfile (Main)
├── Sidebar
│   └── SidebarSection
├── Header
├── ProfileHeader
│   ├── Badge
│   └── ActionButton
├── Left Column
│   ├── ProfileTelemetry
│   ├── AiExtractedIntentMap
│   └── CommercialFitCard
├── Center Column
│   ├── DynamicScoreCard
│   └── ScoringBreakdown
└── Right Column
    └── AuditTrailCard
```

## 🎯 Key Components

### ProfileHeader
Displays customer information with profile image, badges, and quick action buttons.

```jsx
<ProfileHeader customerData={customerData} />
```

### DynamicScoreCard
Shows circular score gauge with before/after metrics and quantile ranking.

### ScoringBreakdown
Displays 6-signal evaluation with progress bars and descriptions for each scoring factor.

### AuditTrailCard
Timeline of AI decisions with chronological events and sentiment analysis.

### Card
Reusable wrapper component for consistent card styling throughout the dashboard.

## 🎨 Tailwind Customization

The project uses custom Tailwind configuration for:

- **Primary Colors**: Blue color scheme (#4b41e1)
- **Danger States**: Red indicators for critical events
- **Border Radius**: 12px and 16px for consistency
- **Shadows**: Subtle shadows for depth
- **Backdrop Effects**: Blur effects for layered UI

## 📊 Data Structure

### customerData
```javascript
{
  name: string,
  title: string,
  company: string,
  email: string,
  location: string,
  score: number,
  previousScore: number,
  scoreIncrease: number,
  quantile: string,
  aiConfidence: number,
  leadType: string,
  assignedTo: string,
  companySize: string,
  revenue: string,
  stage: string,
}
```

### Scoring Factors
```javascript
{
  title: string,
  points: string,
  percentage: number,
  description: string,
}
```

### Audit Trail Items
```javascript
{
  time: string,
  label: string,
  description: string,
  highlight?: boolean,
  critical?: boolean,
}
```

## 🔧 Customization Guide

### Change Color Scheme
Update color values in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#your-color-code',
  }
}
```

### Modify Customer Data
Update the `customerData` object in the component:
```javascript
const customerData = {
  name: 'Your Customer',
  // ... other fields
};
```

### Add New Scoring Factors
Add items to the `scoringFactors` array:
```javascript
{
  title: 'New Factor',
  points: '+X pts',
  percentage: 75,
  description: 'Description',
}
```

## 📱 Responsive Design

The component is built mobile-first with Tailwind's responsive utilities:
- Sidebar hides on small screens
- Three-column grid adapts to available space
- Cards remain readable on mobile
- Navigation becomes collapsible

## 🚀 Performance Optimization

- Lazy loading of images
- Optimized SVG rendering
- CSS-in-JS elimination with Tailwind
- Component memoization support ready
- Zero unnecessary re-renders

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Notes

### Image Assets
Images are fetched from Figma's CDN and are available for 7 days. For production use, download and host locally:

```javascript
// Update image imports
import customerProfile from './assets/customer-profile.png';
```

### Accessibility
The component includes:
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support (ready to implement)
- High contrast color scheme

### Dark Mode
To add dark mode support, extend the Tailwind configuration:
```javascript
darkMode: 'class',
// Add dark: variants to Tailwind classes
```

## 📞 Support & Customization

For component customization or questions:
1. Check the component's JSX structure
2. Review Tailwind CSS documentation
3. Modify the `tailwind.config.js` for theme changes
4. Test responsive behavior with browser dev tools

## 📄 License

This component was generated from Figma design using Anthropic's Claude API.

## 🙏 Credits

- Design Source: Figma
- Built with: React + Tailwind CSS
- Icons & Images: Figma asset library
