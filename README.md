# 🚀 RideReady - Bike Servicing Management API

RideReady is a backend API built to manage bike servicing operations for a bike service center. It enables efficient tracking of customers, bikes, and service records. With powerful CRUD support and dedicated endpoints for assigning and completing services, RideReady simplifies service management workflows.

## 🔗 Live Backend

> 🌐 [Live Backend URL Here] (e.g., https:.app)

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

---

## 🧱 Database Schema

All tables use **UUIDs** as primary keys.

### 1. Customer Table

| Field      | Type     | Description                 |
| ---------- | -------- | --------------------------- |
| customerId | UUID     | Unique identifier           |
| name       | String   | Full name                   |
| email      | String   | Unique email                |
| phone      | String   | Contact number              |
| createdAt  | DateTime | Auto timestamp when created |

### 2. Bike Table

| Field      | Type   | Description                      |
| ---------- | ------ | -------------------------------- |
| bikeId     | UUID   | Unique identifier                |
| brand      | String | Brand name (e.g., Yamaha)        |
| model      | String | Model name                       |
| year       | Int    | Manufacturing year               |
| customerId | UUID   | Foreign key referencing Customer |

### 3. ServiceRecord Table

| Field          | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| serviceId      | UUID     | Unique service record ID                 |
| bikeId         | UUID     | Foreign key referencing Bike             |
| serviceDate    | DateTime | Date the service started                 |
| completionDate | DateTime | Nullable. Date service completed         |
| description    | String   | Service details (e.g., oil change)       |
| status         | String   | Status: “pending”, “in-progress”, “done” |

---

## 📦 API Features & Endpoints

### 1. Customer Management

- `POST /api/customers` – Create a new customer
- `GET /api/customers` – Get all customers
- `GET /api/customers/:id` – Get customer by ID
- `PUT /api/customers/:id` – Update customer
- `DELETE /api/customers/:id` – Delete customer

### 2. Bike Management

- `POST /api/bikes` – Add a new bike
- `GET /api/bikes` – Get all bikes
- `GET /api/bikes/:id` – Get bike by ID

### 3. Service Management

- `POST /api/services` – Create service record
- `GET /api/services` – Get all service records
- `GET /api/services/:id` – Get service record by ID
- `PUT /api/services/:id/complete` – Mark service as completed

### 4. Special Endpoints

- `GET /api/services/status` – Fetch overdue or pending services older than 7 days

---

## ✅ Error Handling

All error responses follow a standardized structure:

```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "stack": "Optional stack trace shown only in development"
}
```

✨ Key Features
Full CRUD for Customers, Bikes, and Services

Assign and complete bike servicing jobs

Fetch overdue/pending services automatically

Robust TypeScript structure and Prisma-powered DB interactions

Standardized error responses for better debugging
