# RestFulAPI 
🧩 RestFulAPI – Full-Stack CRUD Application

ASP.NET Core Web API (.NET 8) + React (Vite) + SQL Server + Entity Framework Core

Bu proje, backend tarafında .NET Core Web API, frontend tarafında React (Vite), veritabanı olarak SQL Server ve ORM katmanı olarak Entity Framework Core kullanılarak geliştirilmiş tam bir CRUD uygulamasıdır.

🚀 Özellikler

Ürün ekleme / güncelleme / silme / listeleme

Modern React (Hooks) yapısı

Entity Framework Core Code-First mimarisi

SQL Server veritabanı

Tam API dökümantasyonu (Swagger)

CORS entegrasyonu

Vite ile hızlı React geliştirme altyapısı

🏗 Kullanılan Teknolojiler
Backend

.NET 8 Web API

Entity Framework Core 8

SQL Server

Dependency Injection

Swagger

CORS

Code-First Migrations

Frontend

React + Vite

Axios

Bootstrap

useState, useEffect Hooks

📂 Proje Yapısı
RestFulAPI/
 ├── Controllers/
 ├── Data/
 ├── Models/
 ├── Migrations/
 ├── wwwroot/
 ├── Program.css
 ├── appsettings.json
 └── README.md
react-rest-client/
 ├── src/
 │   ├── App.jsx
 │   ├── main.jsx
 ├── package.json
 └── index.html



 🔧 Kurulum
🟦 1. Backend Kurulumu
Bağımlılıkları yükle:
dotnet restore

Veritabanını oluştur:
Update-Database

API’yi çalıştır:
dotnet run


API Default Port:

http://localhost:5180


Swagger:

http://localhost:5180/swagger

🟩 2. Frontend Kurulumu (React – Vite)

React projesi react-rest-client klasöründedir.

Bağımlılıkları yükle:
npm install

Frontend'i çalıştır:
npm run dev


Frontend portu:

http://localhost:5173

🔗 API Endpointleri
Metod	Endpoint	Açıklama
GET	/api/products	Ürünleri listele
GET	/api/products/{id}	ID’ye göre ürün getir
POST	/api/products	Yeni ürün ekle
PUT	/api/products/{id}	Ürün güncelle
DELETE	/api/products/{id}	Ürün sil