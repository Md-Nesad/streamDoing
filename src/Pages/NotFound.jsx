import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-purple-400 to-pink-400 text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-purple-500 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
