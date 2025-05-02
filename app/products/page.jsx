import ProductCard from "../components/Product";
import products from "../data/products";

export default function ProductsPage() {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
