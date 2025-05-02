export default function Home() {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-xl md:text-5xl font-bold text-orange-500">{`Website is still constructing...`}</h1>
          <h2 className="text-2xl md:text-5xl font-bold">
            Welcome to ARC TECH SOLUTIONS
          </h2>
          <p className="py-6">
            We build high-performance PCs and powerful software for your
            business.
          </p>
          <a href="/products" className="btn btn-primary">
            Shop PCs
          </a>
        </div>
      </div>
    </section>
  );
}
