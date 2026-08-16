# SpeedyMeals 🍔

SpeedyMeals is a full-stack, real-time food delivery platform built with the MERN stack. It supports three user roles — **Customers**, **Shop Owners**, and **Delivery Boys** — each with a dedicated dashboard, and uses Socket.IO for live order tracking and delivery updates.

## Features

- **Multi-role authentication** — sign up/sign in as a customer, shop owner, or delivery partner, with email/password or Google auth (Firebase), OTP-based password reset, and JWT + cookie-based sessions.
- **Shop management** — owners can create/edit their shop, upload a shop image (Cloudinary), and manage a menu of items.
- **Item catalog** — add, edit, delete, search, and rate food items; browse items and shops filtered by city.
- **Cart & checkout** — add items to cart, place orders, and pay online via **Razorpay** (with payment verification).
- **Live order tracking** — real-time order status updates and delivery boy location tracking on a map (Leaflet + Geoapify), powered by **Socket.IO**.
- **Delivery workflow** — delivery boys receive assignments, accept orders, verify delivery with an OTP, and view today's completed deliveries.
- **User dashboard** — track current & past orders, view order details, and see delivery progress live.
- **Owner dashboard** — manage shop items and incoming orders, update order status, and view sales insights (charts via Recharts).
- **Location-aware** — auto-detects/updates user city and coordinates (GeoJSON `Point` with a 2dsphere index) for location-based shop/item discovery.

## Tech Stack

**Frontend**
- React 19 + Vite
- Redux Toolkit / React Redux
- React Router DOM
- Tailwind CSS
- Axios
- Socket.IO Client
- Leaflet / React-Leaflet (maps)
- Firebase (Google authentication)
- Recharts (analytics charts)

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- Socket.IO (real-time communication)
- JWT (`jsonwebtoken`) + `cookie-parser` for auth
- Bcrypt.js (password hashing)
- Multer + Cloudinary (image uploads)
- Nodemailer (OTP / transactional emails)
- Razorpay (payments)

## Project Structure

```
SpeedyMeals/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Route logic (auth, user, shop, item, order)
│   ├── middlewares/     # Auth guard, Multer upload handler
│   ├── models/          # Mongoose schemas (User, Shop, Item, Order, DeliveryAssignment)
│   ├── routes/          # Express routers
│   ├── utils/           # Token, mail, Cloudinary, city-alias helpers
│   ├── socket.js         # Socket.IO event handlers
│   └── index.js          # App entry point
└── frontend/
    ├── src/
    │   ├── components/  # Reusable UI components (cards, nav, dashboards)
    │   ├── hooks/        # Custom data-fetching hooks
    │   ├── pages/         # Route-level pages (Home, Shop, Cart, Checkout, Orders, Auth...)
    │   ├── redux/         # Redux slices & store
    │   └── App.jsx
    └── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB database (local or Atlas)
- Accounts/API keys for: Cloudinary, Razorpay, Firebase, Geoapify, and an SMTP/email provider (for Nodemailer)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/SpeedyMeals.git
cd SpeedyMeals
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` with the following variables:
```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

Run the backend in dev mode:
```bash
npm run dev
```

### 3. Frontend setup
```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/` with the following variables:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_GEOAPIKEY=your_geoapify_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Run the frontend dev server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (default Vite port) and the backend API at `http://localhost:5000`.

> **Note:** Update the CORS origin and Socket.IO origin in `backend/index.js` to match your frontend URL when running locally or deploying.

## API Overview

| Route prefix | Description |
|---|---|
| `/api/auth` | Sign up, sign in, sign out, OTP send/verify, password reset, Google auth |
| `/api/user` | Get current user, update user location |
| `/api/shop` | Create/edit shop, get own shop, get shops by city |
| `/api/item` | Add/edit/delete items, get by city/shop/id, search, rate |
| `/api/order` | Place order, verify payment, manage/track orders, delivery assignment & OTP verification |

## Deployment

The project is structured for separate frontend and backend deployments (e.g., frontend on Vercel/Netlify, backend on Render/Railway). Make sure to set the environment variables listed above on your hosting platform and update CORS/Socket.IO origins to your production frontend URL.

## License

**All rights reserved.** This code is publicly viewable, but no permission is granted to copy, modify, distribute, or otherwise use it without explicit written permission from the copyright holder. See [LICENSE](./LICENSE) for full details.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.
