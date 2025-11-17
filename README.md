# RESTful API + React Client (Full-Stack CRUD Project)

Bu proje, **.NET 8 Web API**, **Entity Framework Core**, **SQL Server**, **React (Vite)** ve **Axios** kullanılarak oluşturulmuş tam kapsamlı bir Full-Stack CRUD uygulamasıdır.  
Hem backend hem frontend tarafında modern teknolojiler ve best practice’ler uygulanmıştır.

---

## 🚀 Özellikler

### ✔️ Backend (ASP.NET Core Web API)
- Ürün listeleme (GET)
- Ürün ekleme (POST)
- Ürün güncelleme (PUT)
- Ürün silme (DELETE)
- SQL Server + Entity Framework Core (Code First)
- Swagger ile API dokümantasyonu
- Global CORS yapılandırması

### ✔️ Frontend (React + Vite)
- Axios ile API tüketimi
- Bootstrap ile modern UI
- Ürün ekleme formu
- Ürün listeleme tablosu
- Ürün silme
- Ürün güncelleme

---

## 🗂️ Proje Yapısı

RESTFUL-API-REACT-CLIENT/
│
├── Backend/
│ ├── Controllers/
│ │ └── ProductsController.cs
│ ├── Data/
│ │ └── AppDbContext.cs
│ ├── Models/
│ │ └── Product.cs
│ ├── Properties/
│ │ └── launchSettings.json
│ └── Program.cs
│
└── Frontend/
├── src/
│ ├── App.jsx
│ └── main.jsx
├── index.html
└── package.json

