import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Panel({ title, panelId}) {
    const navigate = useNavigate()

    const handleClick = () => {
        sessionStorage.setItem('panelId', panelId)
        navigate('/panel')
    }

    return (
      <div
        onClick={handleClick}
        className="flex size-40 cursor-pointer items-center justify-center rounded-xl bg-accent shadow-xl md:size-52 hover:bg-accent-hover transition-all"
      >
        <span className="text-center text-lg md:text-xl font-semibold text-white">{title}</span>
      </div>
    );
}