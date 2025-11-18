import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// API adresini burada tek yerden yönetiyoruz
const API_URL = "http://localhost:5180/api/products";

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", stock: "" });
  const [editingId, setEditingId] = useState(null); // null -> ekleme modu, id -> güncelleme modu
  const [loading, setLoading] = useState(false);

  // Ürünleri çek
  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      alert("Ürünleri çekerken hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Form input değişimi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Ekle / Güncelle
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basit validasyon
    if (!form.name || !form.price || !form.stock) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const payload = {
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
    };

    try {
      if (editingId === null) {
        // EKLE (POST)
        await axios.post(API_URL, payload);
        alert("Ürün eklendi.");
      } else {
        // GÜNCELLE (PUT)
        await axios.put(`${API_URL}/${editingId}`, {
          id: editingId,
          ...payload,
        });
        alert("Ürün güncellendi.");
      }

      // Formu temizle
      setForm({ name: "", price: "", stock: "" });
      setEditingId(null);

      // Listeyi yenile
      loadProducts();
    } catch (err) {
      console.error(err);
      alert("İşlem sırasında hata oluştu.");
    }
  };

  // Bir ürünü sil
  const handleDelete = async (id) => {
    if (!window.confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Ürün silindi.");
      loadProducts();
    } catch (err) {
      console.error(err);
      alert("Ürün silinirken hata oluştu.");
    }
  };

  // Bir ürünü düzenlemeye başla
  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      price: product.price.toString(),
      stock: product.stock.toString(),
    });
  };

  // İptal (güncellemeden çık)
  const handleCancelEdit = () => {
    setEditingId(null);
    setForm({ name: "", price: "", stock: "" });
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Ürün Yönetimi (RESTful API Client)</h1>

      {/* Form */}
      <div className="card mb-4">
        <div className="card-header">
          {editingId === null ? "Yeni Ürün Ekle" : `Ürünü Güncelle (ID: ${editingId})`}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Ürün Adı</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Örn: Kalem"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Fiyat</label>
              <input
                type="number"
                step="0.01"
                name="price"
                className="form-control"
                value={form.price}
                onChange={handleChange}
                placeholder="Örn: 10"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Stok</label>
              <input
                type="number"
                name="stock"
                className="form-control"
                value={form.stock}
                onChange={handleChange}
                placeholder="Örn: 100"
              />
            </div>

            <div className="col-12 d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                {editingId === null ? "Ürün Ekle" : "Güncelle"}
              </button>
              {editingId !== null && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelEdit}
                >
                  İptal
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Liste */}
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span>Ürün Listesi</span>
          <button className="btn btn-sm btn-outline-secondary" onClick={loadProducts}>
            Yenile
          </button>
        </div>
        <div className="card-body">
          {loading ? (
            <p>Yükleniyor...</p>
          ) : products.length === 0 ? (
            <p>Henüz ürün yok.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-striped align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Ad</th>
                    <th>Fiyat</th>
                    <th>Stok</th>
                    <th>İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.stock}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => handleEdit(p)}
                        >
                          Düzenle
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(p.id)}
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
