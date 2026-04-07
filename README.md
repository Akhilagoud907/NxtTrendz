# 🛍️ Nxt Trendz - E-commerce Web Application

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Routing](https://img.shields.io/badge/Routing-React_Router-green)
![State](https://img.shields.io/badge/State-Context_API-purple)
![Status](https://img.shields.io/badge/Project-Completed-brightgreen)

A production-ready **E-commerce Web Application** built using **React.js**, enabling users to browse products, search, filter, sort, and manage their cart with a seamless user experience.

This project demonstrates strong understanding of:

- Component-Based Architecture  
- State Management using Context API  
- Routing & Navigation  
- API Integration  
- Authentication Handling  
- Responsive UI Design  

---

## 🔐 Login Credentials

Username: rahul  
Password: rahul@2021  

---

## ✨ Core Features

- 🔐 User Authentication (Login & Logout)  
- 🛡 Protected Routes using React Router  
- 🔍 Product Search Functionality  
- 🎯 Filter Products (Category, Rating, Price)  
- ↕️ Sort Products (Price Low → High / High → Low)  
- 🛒 Add to Cart Functionality  
- ➕ Increment / ➖ Decrement Cart Items  
- 📦 Detailed Product View Page  
- 🔄 Persistent Cart using Context API  
- 📱 Fully Responsive Design 
- 💳 Payment Popup with Order Confirmation
- 📱 Fully Responsive Design  

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React.js |
| Language | JavaScript (ES6+) |
| Routing | React Router DOM |
| State Management | Context API |
| Styling | CSS3 |
| API | REST API Integration |

---

## 🏗 Application Architecture

- Modular and reusable component structure  
- Centralized state management using Context API  
- Conditional rendering based on API response  
- Protected routing based on authentication state  
- Clean separation of UI and business logic  
- Dynamic product rendering from API  
- Popup-based interaction for checkout flow 

---

## 🔐 Authentication Flow

1. User logs in with credentials  
2. Token is stored in cookies/local storage  
3. Protected routes validate authentication  
4. Unauthorized users are redirected to Login page  

---

## 🛒 Cart Management Logic

- Add products to cart  
- Update quantity dynamically  
- Remove items from cart  
- Maintain global cart state using Context API  
- Display total items and summary 
- Checkout opens a **Payment Popup Modal**
-  Validate payment selection before confirming order  

---

## 📂 Project Structure

```
NxtTrendz/
│
├── public/
│ ├── index.html
│
├── src/
│ │
│ ├── components/
│ │ ├── AllProductSection/
│ │ ├── Cart/
│ │ ├── CartItem/
│ │ ├── CartListView/
│ │ ├── CartSummary/
│ │ ├── EmptyCartView/
│ │ ├── FiltersGroup/
│ │ ├── Header/
│ │ ├── Home/
| | ├── LoginForm/
| | ├── NotFound/
| | ├── PrimeDealSection/
| | ├── ProductDealsSection/
| | ├── ProductCard/
| | ├── ProductItemDetails/
| | ├── Products/
| | ├── ProductsHeadr/
| | ├── ProtectedRoute/
│ │ └── SimilarProductItem/
│ ├── context/
│ │ └── CartContext.js
│ │
│ ├── App.js
│ ├── index.js
│ └── setupTests.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/Akhilagoud907/NxtTrendz
cd NxtTrendz
npm install
npm start
```

Application runs at:

```
http://localhost:3000
```

---

## 🔌 APIs Used

- Authentication API 
- Products API 

---

## 📱 Responsive Design

- Mobile-Friendly Layout  
- Tablet Optimization  
- Desktop Responsive Grid  
- Smooth Hover Effects  
- Gradient Background UI  

---

## 📈 Performance Highlights

- Efficient state management  
- Clean routing structure  
- Reusable components  
- Optimized rendering logic  
- Clear separation of concerns  

---

## 🚀 Future Enhancements

- ❤️ Wishlist Feature
- 💳 Payment Gateway Integration
- 📦 Order History
- 🌙 Dark Mode
- 📊 Analytics Dashboard 
---

## 👩‍💻 Author

**Akhila**

---

## ⭐ Show Your Support

If you found this project helpful or impressive, please consider giving it a ⭐ on GitHub!
