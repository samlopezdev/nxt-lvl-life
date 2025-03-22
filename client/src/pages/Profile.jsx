import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SquarePanel from "../components/profile/SquarePanel";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [panels, setPanels] = useState([]);
  const [newPanelTitle, setNewPanelTitle] = useState("");
  const navigate = useNavigate();


    const fetchProfileData = useCallback( async ()  => {
      try {
        const tokenId = localStorage.getItem("tokenId");

        if (!tokenId) {
          navigate('/login')
          return
        }

        const response = await fetch(`http://localhost:8000/profile/${tokenId}`);
        const data = await response.json();

        if (response.ok) {
          setCurrentUser(data.user.username);
          setPanels(data.panels);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch profile data");
          setIsLoading(false)
        }
        
      } catch (err) {
        console.error(`BAD NEWS BEARS: ${err}`);
        setIsLoading(false);
      }

    // fetchProfileData();
  }, [navigate]);

  const handleAddPanel = async (e) => {
    e.preventDefault();

    const tokenId = localStorage.getItem("tokenId");
    const response = await fetch("http://localhost:8000/profile/addPanel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenId, newPanelTitle }),
    });

    const data = await response.json();
    if (response.ok) {
      setPanels((prevPanels) => [...prevPanels, data.newPanel]);
      setNewPanelTitle("");
    } else {
      console.error("Failed to add panel")
    }

  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  return (
    <>
      <header className="mb-10 flex w-full justify-between border-b-2 bg-gradient-to-br from-primary from-40% to-secondary px-5 py-6 text-light-green shadow-md">
        <h2 className="text-balance text-4xl font-semibold [transition:.3s_ease]">
          Hello, {currentUser}!
        </h2>

        <Link to="/" onClick={handleLogout}>
          <button
            className="ml-5 rounded-lg bg-accent px-2 py-2 text-xl font-semibold transition-colors [transition:.3s_ease] hover:bg-accent-hover md:px-3"
            aria-label="Log out"
          >
            Log Out
          </button>
        </Link>
      </header>

      <main className="mt-5 transition-all md:mt-28">
        <section className="m-auto flex w-11/12 flex-wrap justify-center gap-10">
          {isLoading ? (
            <div className="mx-auto size-14 animate-spin rounded-full border-4 border-t-accent"></div>
          ) : panels ? (
            panels.map((panel) => (
              <SquarePanel
                key={panel._id}
                panelId={panel._id}
                title={panel.title}
              />
            ))
          ) : (
            <h3>Add A Panel to get started</h3>
          )}
          <form
            onSubmit={handleAddPanel}
            className="flex size-40 flex-col items-center justify-center gap-4 rounded-xl bg-slate-300 shadow-xl md:size-52"
            aria-labelledby="add-panel-form"
          >
            <input
              type="text"
              placeholder="Panel Title"
              name="title"
              value={newPanelTitle}
              onChange={(e) => setNewPanelTitle(e.target.value)}
              className="w-4/5 rounded-md px-1 py-1 text-sm"
              required
              aria-label="New panel title"
            />
            <button
              className="flex items-center rounded-lg bg-accent px-2 py-2 text-sm font-semibold text-light-green transition-colors [transition:.3s_ease] hover:bg-accent-hover md:px-3"
              aria-label="Add new panel"
            >
              <i className="bx bx-plus-medical mr-1"></i>
              <span>New Panel</span>
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
