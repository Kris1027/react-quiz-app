import clsx from "clsx";

export function Button({ children, onClick, disabled }) {
  return (
    <button
      className={clsx(
        "px-4 py-1 lg:px-6 lg:py-2 text-md lg:text-4xl font-bold bg-cyan-900 text-cyan-200 w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-90 cursor-pointer uppercase",
        disabled
          ? "opacity-40 hover:shadow-[3px_3px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] active:scale-100"
          : ""
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
