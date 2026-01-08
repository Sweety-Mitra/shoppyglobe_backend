# ShoppyGlobe – Node.js & Express Backend

A complete backend REST API for the **ShoppyGlobe E-commerce Application**, built using **Node.js**, **Express.js**, **MongoDB**, and **JWT-based authentication**. This backend powers secure user authentication, product management, and shopping cart functionality for the frontend application.

---

## Features Implemented

### 1. User Authentication & Authorization
- Secure user registration and login using **JWT authentication**
- Password hashing implemented with **bcrypt**
- Token-based authorization for protected routes
- Only authenticated users can access cart-related APIs
- Proper error handling for:
  - Invalid login credentials
  - Missing required fields
  - Unauthorized access attempts

---

### 2. Product Management
- `GET /products` – Retrieve all products from the database
- `GET /products/:id` – Retrieve product details by ID
- Products stored and managed using **MongoDB**
- Error handling for:
  - Invalid product IDs
  - Product not found scenarios

---

### 3. Shopping Cart Management
- `POST /cart` – Add products to a user-specific cart
- `PUT /cart/:id` – Update quantity of cart items
- `DELETE /cart/:id` – Remove items from cart
- Cart operations are protected using JWT authentication
- Each cart is uniquely associated with a logged-in user
- Cart data is persisted securely in MongoDB

---

### 4. API Error Handling & Validation
- Centralized error handling middleware
- Input validation for authentication and cart operations
- Consistent and meaningful API error responses
- Proper HTTP status codes used:
  - `200` – Success
  - `201` – Resource created
  - `400` – Bad request
  - `401` – Unauthorized
  - `404` – Not found
  - `500` – Internal server error

---

### 5. MongoDB Integration
- **Users Collection** – Stores user details and hashed passwords
- **Products Collection** – Stores product information
- **Cart Collection** – Stores user-specific cart items
- Database interactions handled using **Mongoose ODM**
- Full CRUD functionality implemented

---

### 6. API Testing
- All APIs tested using **Thunder Client** (VS Code extension)
- Test cases include:
  - User registration and login
  - Invalid authentication attempts
  - Product listing and product details
  - Cart operations (add, update, delete)
  - Unauthorized access handling

---

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Token)**
- **bcrypt**
- **dotenv**
- **Thunder Client**

---

## Project Purpose

This project was developed as part of an academic backend development assignment to demonstrate:

- RESTful API design
- Secure authentication and authorization
- MongoDB database integration
- Clean project structure and error handling
- API testing and documentation

---

### How to Run
1. npm install
2. create .env
3. node server.js

----

## GitHub Repository
🔗 **Repository**: [https://github.com/Sweety-Mitra/shoppyglobe_backend]