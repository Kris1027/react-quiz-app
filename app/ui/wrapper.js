export default function Wrapper({ children }) {
  return (
    <main className="bg-cyan-950 min-h-screen flex flex-col justify-center items-center">
      {children}
    </main>
  );
}
