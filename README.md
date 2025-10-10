## Github Repository Live Link:

https://github.com/azizulhakim6817/hero.io_assign_8

# React + Vite

# Project Name:

Hero.io

📱 App Store Web Application
A modern, responsive web application built with React (or Next.js) that displays a collection of apps, allows installation tracking via localStorage, includes dynamic routing, sorting, searching, charts, and smooth navigation — following the given Figma design.


### 🧱 Features Overview: 
# 1. Layout & Data Design
Header: 
Includes
✅ Logo (navigates to Home on click)
✅ Navigation links: Home, Apps, Installation
✅ Active route highlight
✅ “Contribution” button linking to your GitHub profile

### Footer: 
Custom-designed footer with creative styling and relevant links/social icons.
App Data (JSON)
A JSON array of 12–20 app objects with the structure:
```js
{
  "image": "app-image-url",
  "title": "App Title",
  "companyName": "Company Name",
  "id": 1,
  "description": "App short description",
  "size": 45,
  "reviews": 1250,
  "ratingAvg": 4.5,
  "downloads": 500000,
  "ratings": [
    { "name": "1 star", "count": 20 },
    { "name": "2 star", "count": 40 },
    { "name": "3 star", "count": 150 },
    { "name": "4 star", "count": 300 },
    { "name": "5 star", "count": 740 }
  ]
}
```

### 2. 🏠 Home Page
# Banner Section:
Centered heading and description
Buttons:
🏬 “App Store” → redirects to App Store
▶️ “Play Store” → redirects to Play Store

States Section:
Three info cards (as shown in Figma)
Top Apps Section:
Shows 8 apps (4-column grid)
Each app card shows:
Image
Title
Download count
Average rating
“Show All” button navigates to the All Apps page.

### 3. 📱 All Apps Page
Title Section: Title + Subtitle (based on Figma)
Search & State Section:
Total apps count displayed on the left
Search bar on the right
Live search (case-insensitive)
“No App Found” message if no match

# App Cards:
Displays all apps with:
Image
Title
Download count
Average rating
Clicking a card → navigates to App Details page.

### 4. 📊 App Details Page
App Info Section:

Image (left side)
Title, rating, downloads, reviews (right side)
Install Button
On click → button text changes to Installed
Button becomes disabled
Shows success toast
App saved to localStorage

# Review Chart:
Responsive chart built using Recharts
Displays app’s rating distribution

App Description:
Full app details displayed below (as per Figma layout)

### 5. 🧩 My Installation Page
Lists all installed apps (from localStorage)
Each app card includes:
Image, Title, Rating, Downloads
Uninstall Button
Removes app from UI & localStorage
Shows a toast message
Sorting Dropdown:
High-Low: Sorts by downloads descending
Low-High: Sorts by downloads ascending

### 6. ⚠️ Error & Loading States
Custom 404 Page for invalid routes
Loading Animations shown during:
Page navigation
Search operations
Not Found Message: Shown when app not found in details route

# 💾 LocalStorage Integration
Installed apps are persisted in browser localStorage.
When visiting again:
Installed apps show “Installed” button state.
Uninstall removes the app from localStorage and updates the UI instantly.

# 🧰 Technologies Used
Category	Technology
Frontend Framework	React.js / Vite / Next.js
Routing	React Router DOM
Charts	Recharts
State Management	React Hooks / Context API
Styling	Tailwind CSS / SCSS
Toasts	React-Toastify
Deployment	Vercel / Netlify / Cloudflare Pages
⚙️ Installation & Setup
Clone the Repository
git clone https://github.com/your-username/app-store.git
cd app-store

Install Dependencies
npm install

Run the Development Server
npm run dev


App will be available at:
👉 http://localhost:5173/ (or as shown in terminal)

Build for Production
npm run build

Preview Production Build
npm run preview

### 🌩 Deployment
Deploy easily to:
Vercel
Netlify
Cloudflare Pages