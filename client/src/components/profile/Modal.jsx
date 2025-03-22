// eslint-disable-next-line react/prop-types
export default function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-10 flex items-center justify-center transition-colors backdrop-blur-sm ${open ? "visible bg-black/20" : "invisible"}`}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`max-w-[26rem] mx-5 shadow-2xl rounded-xl bg-white p-6 text-black transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <button onClick={onClose} className="flex items-center p-1 absolute right-2 top-2 rounded-full bg-white text-3xl text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <i className="bx bx-x"></i>
        </button>
        {children}
      </div>
    </div>
  );
}
