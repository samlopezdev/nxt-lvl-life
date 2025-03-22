import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-accent pb-12 pt-24 text-light-green">
      <h2 className="mb-3 text-balance text-center text-4xl font-semibold uppercase text-light-green [transition:.3s_ease] lg:text-5xl">
        Don&apos;t Delay, Start Today
      </h2>
      <p className="mb-10 text-center text-2xl">
        Life Doesn&apos;t Wait For Anyone
      </p>
      <div className="mb-40 flex justify-center font-semibold">
        <Link to="/login">
          <button className="rounded-lg bg-accent px-8 py-3 [transition:.3s_ease] hover:bg-accent-hover">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="ml-5 rounded-lg bg-accent px-12 py-3 [transition:.3s_ease] hover:bg-accent-hover">
            Sign Up
          </button>
        </Link>
      </div>
      <p className="text-center text-xs leading-5 tracking-wide">
        Copyright NxtLvlLife 2025. All Rights Reserved.
        <br /> Developed w/ ♥ by{" "}
        <Link
          to={"https://www.linkedin.com/in/samlopezdev/"} target="_blank"
          className="hover:scale-150 font-semibold"
        >
          Samantha Lopez
        </Link>
      </p>
    </footer>
  );
}
