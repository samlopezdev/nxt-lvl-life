import { Link } from "react-router-dom";

export default function NavAction() {
    const tokenId = localStorage.getItem("tokenId");
    const btnClasses =
      "rounded-lg px-1 py-2 [transition:.3s_ease] text-xs hover:bg-accent-hover md:px-3 md:text-sm lg:text-base";

      return (
        <div className="font-semibold">
          <Link to={tokenId ? "/profile" : "/login"} className={btnClasses}>
            Log In
          </Link>
          <Link
            to="/register"
            className={`${btnClasses} ml-5 bg-accent px-2 transition-colors`}
          >
            Create Account
          </Link>
        </div>
      );
}
