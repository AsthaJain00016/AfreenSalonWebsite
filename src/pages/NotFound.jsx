import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-7 text-center">
      <span className="eyebrow">404</span>
      <h1 className="section-title">This page has stepped out</h1>
      <p className="section-sub mx-auto">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get
        you back to the salon.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
