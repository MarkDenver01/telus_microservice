# Web Ordering Application - Full Stack 

A full stack web app built the following:
- **React + TypeScript (Frontend)**
- **Spring Boot + MySQL (Backend)**
- all running in a **Docker + NGINX** environment.

---

## Tech Stack

### Frontend

- React
- TypeScript
- TailwindCSS
- Flowbite (UI Components)
- Axios

### Backend

- Java Spring Boot
- Spring Data JPA
- MySQL
- RESTful API

### Infrastructure

- Docker + Docker Compose
- NGINX (Reverse Proxy)
- phpMyAdmin

---

## Features

### Product Listing

- Lists all available products in a responsive table
- Shows title, brand, category, price, stock, rating, and shipping info
- Data is fetched from the backend

### Pagination + Search

- Paginated API: `/public/products/page`
- Search API: `/public/search`
- Integrated search filters by title, brand, or category
- Client-side pagination and search controls

### Checkout Modal

- Triggered when user clicks **"Check out"**
- Form includes:
  - Name
  - Address
  - Contact Number
  - Delivery Start & End Date
  - Product(s) selected
- Form data is submitted to:
  - `POST /public/orders/checkout`

### Order Processing

- Creates order in the backend
- Updates product stock
- Sends success message to frontend

---

## Backend API Overview

| Method | Endpoint                  | Description                              |
| ------ | ------------------------- | ---------------------------------------- |
| `GET`  | `/public/products`        | Get all products (non-paginated)         |
| `GET`  | `/public/products/page`   | Get paginated products with search query |
| `GET`  | `/public/search`          | Search by title, brand, or category      |
| `POST` | `/public/orders/checkout` | Submit an order and update product stock |

---

## Folder Structure

### Frontend (React)

```
frontend/
  src/
    api/
      api_client.ts        # axios instance
      product_api.ts       # All axios requests
    components/
      ProductTable.tsx     # Table display for products
      CheckoutModal.tsx    # Modal for order checkout
      Pagination.tsx       # Custom pagination component
    pages/
      LandingPage.tsx      # Product listing page
```

### Backend (Spring Boot)

```
java-backend/
  src/main/java/
    com/example/productapi/
      config/
      domain/
          entity/
          model/
          repository/
          service/
      dto/
      mapper/
      presentation/
                controller/
                service/
```

---

## How to runn the web app

### 1. Clone the Repo

```bash
gi clone https://github.com/MarkDenver01/telus_microservice.git
cd your-repo-name (e.g. telus)
```

### 2. Start Docker Services

```bash
docker-compose up --build
```

### 3. Access the App

- Frontend: `http://localhost`
- API: `http://localhost/api/public/...`
- phpMyAdmin: `http://localhost/phpmyadmin`

---

## User Flow

1. User loads the homepage with paginated products
2. User searches by keyword or filters by brand/category
3. Clicks **Check out** to open modal
4. Fills in personal and delivery details
5. Product stock is updated and confirmation is shown

---

## Deployment Notes

- All apps are containerized
- NGINX handles routing:
  - `/` → React static files
  - `/api` → Spring Boot backend
  - `/phpmyadmin` → phpMyAdmin interface

---

## Troubleshooting

1.I created **init.sql** which helps you to insert the sampel data to the database, and this file is already build in docker but if ever the docker doesn't
read the execution of **init.sql**, kindly copy + paste the query below in your mysql to insert a dummy data.

INSERT IGNORE INTO products (thumbnail, title, brand, category, price, rating, stock, shipping_information)
VALUES
    ('https://via.placeholder.com/100x100.png?text=Product+1', 'iPhone 12', 'Apple', 'Smartphones', 799, 4.7, 34, 'Free shipping within 3-5 days'),
    ('https://via.placeholder.com/100x100.png?text=Product+2', 'Galaxy S21', 'Samsung', 'Smartphones', 699, 4.5, 42, 'Ships in 2 days'),
    ('https://via.placeholder.com/100x100.png?text=Product+3', 'MacBook Pro', 'Apple', 'Laptops', 1499, 4.8, 10, 'Free next-day delivery'),
    ('https://via.placeholder.com/100x100.png?text=Product+4', 'PlayStation 5', 'Sony', 'Gaming', 499, 4.6, 8, 'Ships within a week'),
    ('https://via.placeholder.com/100x100.png?text=Product+5', 'AirPods Pro', 'Apple', 'Accessories', 249, 4.4, 75, 'Free shipping'),
    ('https://via.placeholder.com/100x100.png?text=Product+6', 'ThinkPad X1', 'Lenovo', 'Laptops', 1299, 4.5, 15, 'Delivery in 4 days'),
    ('https://via.placeholder.com/100x100.png?text=Product+7', 'Sony WH-1000XM5', 'Sony', 'Accessories', 399, 4.7, 22, 'Ships tomorrow'),
    ('https://via.placeholder.com/100x100.png?text=Product+8', 'Dell XPS 13', 'Dell', 'Laptops', 1099, 4.6, 18, 'Ships in 3-5 days');

---

## 📄 License

[MIT](LICENSE)

