export function Button({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className="text-xl uppercase bg-cyan-100 text-cyan-950 px-10 py-2 rounded-3xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
