import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.shortDesc}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${product.slug}`} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
