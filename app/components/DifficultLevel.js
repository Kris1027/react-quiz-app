export default function DifficultLevel({ dispatch }) {
  return (
    <select
      onChange={(e) =>
        dispatch({ type: "changeTime", payload: e.target.value })
      }
      className="p-1 text-md lg:text-lg font-bold bg-[var(--secondaryBackground)] text-[var(--primaryText)] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] active:scale-90 cursor-pointer uppercase outline-none"
    >
      <option value={300}>Easy</option>
      <option value={250}>Medium</option>
      <option value={200}>Hard</option>
    </select>
  );
}
