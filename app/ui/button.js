export function Button({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className="text-3xl uppercase bg-cyan-100 text-cyan-950 px-10 py-2 rounded-3xl mt-10"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
