export default function Wrapper({ children }) {
  return (
    <main className="bg-[var(--primaryBackground)] min-h-screen flex flex-col justify-center items-center">
      {children}
    </main>
  );
}
