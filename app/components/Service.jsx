import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.shortDesc}</p>
        <div className="card-actions justify-end">
          <Link
            href={`/services/${service.slug}`}
            className="btn btn-secondary"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
