import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-primary from-40% to-secondary px-10 py-3 text-light-green [transition:.5s_ease] lg:px-48">
      <div className="w-full lg:w-3/5">
        <h1 className="mb-9 text-4xl font-extrabold uppercase tracking-wider md:text-5xl lg:text-6xl xl:text-7xl">
          Take Control <br />
          Of Your Life
        </h1>
        <p className="text-md mb-6 text-balance lg:text-lg">
          Whether your dreams are grand or modest, this tool allows you to
          explore and design your life in detail. Get in touch with your core
          values and let them guide you toward the person you aspire to be.
        </p>
        <div className="flex items-center gap-8">
          <a href="#start">
            <button className="rounded-lg bg-accent px-3 py-2 transition-colors [transition:.5s_ease] hover:bg-accent-hover">
              How does it work?
            </button>
          </a>
          <Link
            to="/register"
            className="flex items-center justify-center gap-2 [transition:.5s_ease] hover:translate-x-2.5"
          >
            Get Started
            <i className="bx bx-right-arrow-alt pt-0.5 text-xl"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
