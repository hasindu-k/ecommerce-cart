🛒 **ecommerce-cart**

A high-performance full-stack e-commerce shopping cart system designed for high concurrency environments, supporting real-time inventory updates and reservation-based cart handling.

---

🧰 **Tech Stack**

* **Backend:** Node.js + Express
* **Frontend:** React + Redux
* **Database:** MongoDB
* **Caching Layer:** Redis

---

🚀 **Key Features**

* ✅ Real-time inventory management with concurrent user support
* 🛑 Optimistic concurrency control to prevent overselling
* 🔁 Redis-based reservation system for cart items
* ⚛️ Responsive React UI with loading states and error handling
* ⚙️ Atomic operations for inventory updates
* 🧾 Versioned documents in MongoDB to detect update conflicts

---

🏗️ **System Architecture**

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   React     │ ←→ │  Express    │ ←→ │  MongoDB    │
│   Frontend  │    │   API       │    │  Database   │
└─────────────┘    └─────────────┘    └─────────────┘
                         ↑
                         │
                   ┌─────────────┐
                   │    Redis    │
                   │   Cache     │
                   └─────────────┘
```
