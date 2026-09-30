# LeadIQ Enterprise - Implementation Guide

## 🎯 Quick Start

### Option 1: Using Vite (Recommended)

#### Step 1: Install Node.js
Download and install Node.js from https://nodejs.org (v16 or higher)

#### Step 2: Install Dependencies
```bash
npm install
```

This installs all required packages:
- React 18.2.0
- React DOM
- Tailwind CSS 3.3.0
- Vite (build tool)
- PostCSS
- Autoprefixer

#### Step 3: Run Development Server
```bash
npm run dev
```

Your browser will automatically open the dashboard at `http://localhost:3000`

#### Step 4: Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder

---

## 📂 File Structure Explanation

```
project-root/
├── AiDynamicScoringCustomerProfile.jsx   ← Main dashboard component
├── App.jsx                               ← App wrapper
├── index.jsx                             ← React entry point
├── index.html                            ← HTML entry point
├── index.css                             ← Global styles + Tailwind
├── tailwind.config.js                    ← Tailwind configuration
├── postcss.config.js                     ← PostCSS configuration
├── vite.config.js                        ← Vite build configuration
├── package.json                          ← Dependencies & scripts
├── README.md                             ← Project overview
└── IMPLEMENTATION_GUIDE.md               ← This file
```

---

## 🔧 Configuration Files Explained

### 1. **tailwind.config.js**
Extends Tailwind CSS with custom colors and spacing:
```javascript
- Primary blue: #4b41e1
- Danger red: #ba1a1a
- Custom border radius: 12px, 16px
- Custom shadows for depth
```

### 2. **postcss.config.js**
Processes CSS with:
- Tailwind CSS: Utility-first CSS framework
- Autoprefixer: Adds vendor prefixes automatically

### 3. **vite.config.js**
Development and build settings:
- Uses React plugin for JSX
- Port: 3000
- Auto-opens in browser
- Production minification

### 4. **package.json**
Manages all dependencies and scripts

---

## 🎨 Component Architecture

### Main Component: `AiDynamicScoringCustomerProfile`
The root component that orchestrates:
1. **Sidebar** - Navigation and stats
2. **Header** - Search, notifications, user profile
3. **Three-Column Layout**:
   - Left: Customer telemetry & requirements
   - Center: AI scoring & factors
   - Right: Decision audit trail

### Sub-Components

#### Header
```jsx
<Header customerData={customerData} />
```
- Company selector
- Search bar
- AI Agent button
- Notifications
- User profile

#### Sidebar
```jsx
<Sidebar />
```
- Logo
- Navigation sections
- Active page indicator
- AI Copilot stats

#### ProfileHeader
```jsx
<ProfileHeader customerData={customerData} />
```
- Avatar with status
- Customer name & title
- Company info
- Status badges
- Quick action buttons

#### DynamicScoreCard
```jsx
<DynamicScoreCard customerData={customerData} />
```
- Circular progress gauge
- Score: 94/100
- Before/after comparison
- Quantile ranking

#### ScoringBreakdown
```jsx
<ScoringBreakdown factors={scoringFactors} />
```
- 6 scoring factors
- Progress bars
- Descriptions
- Sentiment analysis

#### AuditTrailCard
```jsx
<AuditTrailCard trail={auditTrail} />
```
- Chronological events
- Highlight important actions
- Critical elevations
- AI recommendations

---

## 🎨 Customization Examples

### 1. Change Primary Color
**File:** `tailwind.config.js`
```javascript
colors: {
  primary: {
    600: '#your-color-here',  // Change from #4b41e1
  }
}
```

### 2. Update Customer Information
**File:** `AiDynamicScoringCustomerProfile.jsx`
```javascript
const customerData = {
  name: 'John Doe',           // Change name
  title: 'VP Engineering',     // Change title
  company: 'Tech Corp',        // Change company
  email: 'john@example.com',   // Change email
  score: 88,                   // Change score
  // ... other fields
};
```

### 3. Add New Scoring Factors
**File:** `AiDynamicScoringCustomerProfile.jsx`
```javascript
const scoringFactors = [
  {
    title: 'Your New Factor',
    points: '+25 pts',
    percentage: 85,
    description: 'Description of this factor',
  },
  // ... existing factors
];
```

### 4. Customize Audit Trail
**File:** `AiDynamicScoringCustomerProfile.jsx`
```javascript
const auditTrail = [
  {
    time: '09:42 AM',
    label: 'Custom Event',
    description: 'What happened',
    highlight: true,  // Optional: highlight this event
    critical: false,  // Optional: mark as critical
  },
  // ... existing events
];
```

### 5. Add Dark Mode
**File:** `tailwind.config.js`
```javascript
export default {
  darkMode: 'class',  // Add this line
  // ... rest of config
}
```

Then add dark variants to components:
```jsx
<div className="bg-white dark:bg-gray-900">
  {/* Content */}
</div>
```

---

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push
4. No configuration needed

### Deploy to Netlify
1. Build locally: `npm run build`
2. Drag & drop `dist/` folder to Netlify
3. Or connect GitHub repo for auto-deploy

### Deploy to AWS S3 + CloudFront
1. Build: `npm run build`
2. Upload `dist/` to S3
3. Invalidate CloudFront cache

### Deploy to Docker
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

---

## 📱 Making It Responsive

The component is already responsive. For mobile testing:

1. **Chrome DevTools**: Press F12, click device icon
2. **Responsive sizes**:
   - Mobile: 375px - 480px
   - Tablet: 768px - 1024px
   - Desktop: 1440px+

Current breakpoints (Tailwind):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔐 Security Considerations

1. **Data Sanitization**
   ```jsx
   import DOMPurify from 'dompurify';
   
   const safeHTML = DOMPurify.sanitize(userInput);
   ```

2. **API Integration**
   ```jsx
   // Use environment variables
   const API_URL = import.meta.env.VITE_API_URL;
   ```

3. **Authentication**
   ```jsx
   // Add auth check before rendering
   if (!isAuthenticated) {
     return <LoginPage />;
   }
   ```

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

### Issue: Images not loading
- Check image URLs in `images` object
- Verify image assets are available
- Use local images instead of CDN

### Issue: Tailwind styles not appearing
```bash
# Rebuild styles
npm install
npm run dev

# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: Build fails
```bash
# Clear build cache
rm -rf dist
npm run build
```

---

## 📊 Performance Optimization

### 1. Lazy Load Components
```jsx
import { lazy, Suspense } from 'react';

const ScoringCard = lazy(() => import('./ScoringCard'));

<Suspense fallback={<Spinner />}>
  <ScoringCard />
</Suspense>
```

### 2. Memoize Components
```jsx
import { memo } from 'react';

const DynamicScoreCard = memo(({ customerData }) => {
  // Component code
});
```

### 3. Optimize Images
- Use WebP format
- Compress before upload
- Use CDN for image delivery

### 4. Code Splitting
Vite automatically does this on build

---

## 🧪 Testing Setup

### Add Vitest for Unit Tests
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Example Test File
```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProfileHeader from './ProfileHeader';

describe('ProfileHeader', () => {
  it('renders customer name', () => {
    const data = { name: 'John Doe' };
    render(<ProfileHeader customerData={data} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

---

## 📚 Additional Resources

### Learning Resources
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Tools
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/) (optional)

### Community
- [React Community](https://react.dev/community)
- [Tailwind Discord](https://tailwindcss.com/discord)

---

## 📞 Support

### Debugging Tips
1. Check browser console for errors (F12)
2. Use React DevTools to inspect components
3. Verify data structure matches customerData type
4. Check Tailwind class names are valid

### Common Issues
- Missing dependencies → `npm install`
- Port in use → Use different port
- Styles not loading → Rebuild styles
- Images missing → Update image URLs

---

## ✅ Checklist Before Production

- [ ] All dependencies installed
- [ ] Tested on multiple browsers
- [ ] Responsive design works on mobile
- [ ] Images hosted and accessible
- [ ] API endpoints configured
- [ ] Error boundaries added
- [ ] Security headers configured
- [ ] Performance optimized
- [ ] Accessibility checked
- [ ] Build runs successfully
- [ ] Deployment tested

---

## 🎉 You're Ready!

Your LeadIQ Enterprise dashboard is now set up and ready to use. Start by running:

```bash
npm run dev
```

Happy coding! 🚀
