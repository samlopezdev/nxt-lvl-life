import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      const response = await fetch(import.meta.env.VITE_BASE_URL + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        window.localStorage.setItem("tokenId", data.id);
        navigate("/profile");
      }
      else {
        alert(data.message || "Login Error")
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-img flex min-h-screen items-center justify-center bg-[url('/greenlandscape-full.webp')] bg-cover bg-center bg-no-repeat">
      <div className="z-2 relative w-1/3 rounded-xl border-2 border-white/40 bg-transparent px-8 py-10 text-white shadow-xl backdrop-blur-md">
        <h2 className="text-center text-4xl font-semibold uppercase">Login</h2>
        <form onSubmit={handleLogin} aria-labelledby="login-form">
          <div className="relative my-8 h-12 w-full">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter E-Mail"
              className="h-full w-full rounded-full border-2 border-neutral-50/30 bg-transparent pl-3 pr-10 outline-none transition-all duration-100 ease-in-out placeholder:italic placeholder:text-white focus:outline-white"
              required
              aria-label="Email address"
            />
            <i className="bx bxs-envelope absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          <div className="relative my-8 h-12 w-full">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="h-full w-full rounded-full border-2 border-neutral-50/30 bg-transparent pl-3 pr-10 outline-none transition-all duration-100 ease-in-out placeholder:italic placeholder:text-white focus:outline-white"
              required
              aria-label="Password"
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`bx ${showPassword ? "bx-hide" : "bx-show"} absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-xl`}
              aria-label={showPassword ? "Hide password" : "Show password"}
              role="button"
              tabIndex="0"
            ></i>
          </div>
          <button
            type="submit"
            className="mb-4 w-full rounded-full bg-primary px-2 py-2 font-semibold shadow-xl transition-colors [transition:.3s_ease] hover:bg-accent-hover"
            disabled={isLoading} // Disable button when loading
            aria-busy={isLoading}
          >
            {isLoading ? (
              <div className="mx-auto size-6 animate-spin rounded-full border-4 border-t-accent"></div> // Show spinner when loading
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center">
          Don&apos;t have an account?
          <Link
            to="/register"
            className="ml-2 font-semibold hover:underline hover:underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
