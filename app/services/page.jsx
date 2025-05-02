import ServiceCard from "../components/Service";
import services from "../data/services";

export default function ServicesPage() {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
