fastor-app/
│
├── public/
│   ├── fastor-logo.png        # Static logo file accessible via /fastor-logo.png
│   └── index.html             # Root HTML template
│
├── src/
│   ├── api/
│   │   ├── apiService.js      # API request functions
│   │   └── mockData.js        # Mock data for local testing
│   │
│   ├── components/
│   │   ├── Header.jsx         # Header component (imports logo from /public)
│   │   ├── RestaurantCard.jsx # Example UI component
│   │   └── ...                # Other reusable UI components
│   │
│   ├── pages/
│   │   ├── Home.jsx           # Main landing page
│   │   ├── RestaurantList.jsx # Displays restaurant data
│   │   └── ...                # Other app pages
│   │
│   ├── App.jsx                # Root component managing routes
│   ├── main.jsx               # React DOM entry point
│   └── index.css              # Global styles
│
├── package.json
└── README.md
1️⃣ Install Dependencies
npm install

2️⃣ Start the Development Server
npm start


Runs the app at http://localhost:3000

3️⃣ Build for Production
npm run build

🧩 Key Features
⚛️ Component-based architecture
📡 Modular API handling
🎨 Clean UI structure
🚀 Easy deployment (Vercel/GitHub Pages ready)
🧠 Supports mock + live data sources

🛠️ Tech Stack

React 18+
Vite or Create React App
Tailwind CSS / CSS Modules
Axios / Fetch API
React Router v6
