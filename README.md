# 🏡 Wanderlust (Airbnb Clone)

🚀 Live: https://airbnb-green-one.vercel.app/

## 📌 Project Overview

**Wanderlust** is a full-stack web application inspired by Airbnb that allows users to explore, create, and manage property listings with authentication, reviews, and interactive maps.

---

## 📸 Screenshots

## Home Page
<img width="500" height="275" alt="Screenshot 2026-04-27 182020" src="https://github.com/user-attachments/assets/69e2c250-a952-465e-a719-9504cf830490" />

## Map Integration in Listing
<img width="500" height="275" alt="Screenshot 2026-04-27 184113" src="https://github.com/user-attachments/assets/faf20cde-3bcf-42a1-8449-6ffadf45a8f1" />


## Edit Listing Page
<img width="500" height="275" alt="Screenshot 2026-04-27 183506" src="https://github.com/user-attachments/assets/7765a00d-c0f9-497f-b5cf-d37471e6811f" />

## Listing Page


---

## 📌 Project Overview

This project is a feature-rich Airbnb clone built using the **MERN stack (MongoDB, Express, Node.js)** with a server-rendered frontend using **EJS**. It supports user authentication, listing management, image uploads, reviews, wishlists, and map-based location visualization.

---

## 🛠️ Tech Stack

### 🔧 Backend
- **Runtime Environment:** Node.js  
- **Framework:** Express.js (v5.2.1)  
- **Database:** MongoDB (Mongoose ODM)  
- **Session Management:** express-session + connect-mongo  
- **Authentication:** Passport.js (passport-local, passport-local-mongoose)  
- **Validation:** Joi (server-side schema validation)  

### 🎨 Frontend
- **Templating Engine:** EJS + ejs-mate (for layouts)  
- **CSS Framework:** Bootstrap 5.0.2  
- **Icons:** FontAwesome  
- **Maps:** Leaflet.js  
- **Styling & Logic:** Vanilla CSS & JavaScript  

### ☁️ File Storage & Utilities
- **Cloud Database:** MongoDB Atlas  
- **Cloud Storage:** Cloudinary (via multer-storage-cloudinary)  
- **File Uploads:** Multer  
- **Environment Variables:** dotenv  
- **Utilities:**
  - **External Utilities:**
     - method-override (PUT/PATCH/DELETE support)  
     - connect-flash (flash messages)
  - **Custom Utilities:**
     - wrapAsync (async error wrapper)  
     - ExpressError (custom error class)  

---

## ✨ Key Features

- 🔐 **User Authentication**  
  Secure signup, login, and logout using Passport.js with protected routes.

- 🏠 **Listing Management (CRUD)**  
  Users can create, read, update, and delete property listings.

- 🖼️ **Image Uploads & Preview**  
  Upload listing images stored on Cloudinary with frontend previews.

- ⭐ **Reviews & Ratings**  
  Users can add reviews and ratings; only authors can delete their reviews.

- 🗺️ **Interactive Maps**  
  Display listing locations using Leaflet.js.

- 🔍 Advanced Search, Filtering & Sorting  
  Enables users to efficiently discover listings through keyword search, category-based filtering (Beach, Mountain, City, etc.), and sorting options like price and latest listings.

- ❤️ **Wishlists**  
  Save and manage favorite listings.

- 💰 **GST Toggle**  
  Dynamic frontend toggle to include/exclude GST in pricing.

- 🔔 **Flash Notifications**  
  Real-time success and error alerts using connect-flash.

- ✅ **Data Validation**  
  Joi ensures strong server-side validation.

---

## 🚏 API Routes

### 🏠 Listings (`/listings`)

| Method | Route | Description |
|------|------|-------------|
| GET | `/listings` | Fetch all listings (supports search, filters, sorting) |
| GET | `/listings/new` | Render new listing form |
| POST | `/listings` | Create a new listing (with image upload) |
| GET | `/listings/myListings` | Get logged-in user's listings |
| GET | `/listings/myWishlists` | Get user's wishlist |
| POST | `/listings/:id/wishlist` | Toggle wishlist (Add/Remove) |
| GET | `/listings/:id` | Get specific listing details |
| GET | `/listings/:id/edit` | Render edit listing form |
| PATCH | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

---

### ⭐ Reviews (`/listings/:id/reviews`)

| Method | Route | Description |
|------|------|-------------|
| POST | `/listings/:id/reviews` | Add a review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review |

---

### 👤 Users (Authentication)

| Method | Route | Description |
|------|------|-------------|
| GET | `/signup` | Render signup form |
| POST | `/signup` | Register user |
| GET | `/login` | Render login form |
| POST | `/login` | Authenticate user |
| GET | `/logout` | Logout user |

---


## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/HARISH-1316/WanderLust-Airbnb-Clone.git
cd Wanderlust-Airbnb-Clone
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Configure Environment Variables
```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
DB_URL=your_mongodb_connection_string
PORT=3000
SESSION_SECRET=your_session_secret
```
### 4️⃣ Run the Application
```bash
node app.js
```
or (for development with auto-restart):
```bash
nodemon app.js
```
### 5️⃣ Open in Browser
Visit:
http://localhost:3000

---

## 🚀 Future Improvements

- 💳 **Online Payments Integration**  
  Integrate payment gateways (e.g., Stripe) to enable real booking transactions.

- 📅 **Booking System**  
  Implement date-based reservations with availability tracking.

- 💬 **Real-time Chat System**  
  Enable direct communication between users (hosts and guests) for instant messaging.

- 🔐 **OAuth Authentication**  
  Add Google/GitHub login for seamless user authentication.

- ⚡ **Performance Optimization**  
  Improve speed using caching (Redis), lazy loading, and database indexing.

- 🛡️ **Security Enhancements**  
  Add rate limiting, data sanitization, and stronger access control.

---

## 👨‍💻 Author

**Harish P**  
Aspiring Full Stack Developer  

🔗 GitHub: https://github.com/HARISH-1316  
💼 LinkedIn: https://www.linkedin.com/in/harish-prabhakaran-/       
📧 Email: harishprabhakaran90@gmail.com 
