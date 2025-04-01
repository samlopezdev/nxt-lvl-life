import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PanelTitle from "../components/profile/PanelTitle";
import GoalContent from "../components/profile/GoalContent";
import MediaContent from "../components/profile/MediaContent";

export default function Panel() {
  const [error, setError] = useState(null);
  const [panelTitle, setPanelTitle] = useState("");
  const [activeTab, setActiveTab] = useState("Media");
  const navigate = useNavigate();

  const activeTabStyle =
    "py-3 px-24 font-semibold border-accent-hover border-4 rounded-t-xl border-b-0 bg-accent text-light-green transition duration-150 ease-in-out";

  const inactiveTabStyle =
    "cursor-pointer py-3 px-12 font-semibold border-accent border-4 rounded-t-xl border-b-0 bg-gray-200 text-accent hover:bg-white transition duration-150 ease-in-out";

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const handleRemovePanelInfo = () => {
    sessionStorage.removeItem("panelId");
    sessionStorage.removeItem("activeTab");
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    sessionStorage.setItem("activeTab", tab)
  }

  useEffect(() => {
    const storedTab = sessionStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }

    const fetchPanelData = async () => {
      const panelId = sessionStorage.getItem("panelId");

      if (!panelId) {
        setError("Panel Not Found");
        return;
      }

      try {
        const response = await fetch(
          `https://nxt-lvl-life-backend.onrender.com/profile/panelData/${panelId}`,
        );

        const data = await response.json();
        setPanelTitle(data.panel.title);
      } catch (err) {
        setError(`Error: ${err.message}`);
        console.error(`BAD NEWS BEARS: ${err}`);
      }
    };

    fetchPanelData();
  }, []);

  return (
    <>
      <header className="border-b-2 bg-gradient-to-br from-primary from-40% to-secondary px-5 pt-6 text-light-green shadow-md">
        <div className="mb-10 flex w-full justify-between">
          <Link
            to="/profile"
            onClick={handleRemovePanelInfo}
          >
            <i className="bx bx-left-arrow-alt rounded-lg text-5xl transition-all hover:bg-accent-hover"></i>
          </Link>

          <PanelTitle title={panelTitle} />

          <Link to="/" onClick={handleLogout}>
            <button
              className="ml-5 rounded-lg bg-accent px-2 py-2 text-sm font-semibold transition-colors [transition:.3s_ease] hover:bg-accent-hover md:px-3 md:text-base"
              aria-label="Log out"
            >
              Log Out
            </button>
          </Link>
        </div>
        {error && (
          <div className="text-center font-semibold text-red-500">{error}</div>
        )}
        <div className="flex justify-center gap-3">
          <h3
            onClick={() => handleTabChange("Media")}
            className={`${activeTab === "Media" ? activeTabStyle : inactiveTabStyle}`}
          >
            Media
          </h3>
          <h3
            onClick={() => handleTabChange("Goals")}
            className={`${activeTab === "Goals" ? activeTabStyle : inactiveTabStyle}`}
          >
            Goals
          </h3>
        </div>
      </header>

      <main className="my-7">
        
        {activeTab === "Media" ? <MediaContent /> : <GoalContent />}
      </main>
    </>
  );
}
