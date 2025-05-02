import products from "../../data/products";

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return <p className="p-10">Product not found.</p>;

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-xl mb-6 rounded"
      />
      <p>{product.description}</p>
    </section>
  );
}
