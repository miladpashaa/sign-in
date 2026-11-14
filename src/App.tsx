import SignInForm from "./SignInForm";

export default function App() {
  return (
    <main className="min-h-screen bg-[#d9d9d9] p-3 font-mono text-black sm:p-4 lg:p-6">
      <div className="relative flex min-h-[calc(100vh-1.5rem)] flex-col overflow-hidden border-4 border-black bg-white sm:min-h-[calc(100vh-2rem)] lg:min-h-[calc(100vh-3rem)]">
        {/* Raw structural grid — denser on small screens, coarser as space grows */}
        <div
          aria-hidden="true"
          className="absolute inset-0 [background-image:linear-gradient(to_right,#00000014_1px,transparent_1px),linear-gradient(to_bottom,#00000014_1px,transparent_1px)] [background-size:40px_40px] sm:[background-size:56px_56px] lg:[background-size:72px_72px]"
        />
        {/* Watermark — tablet and up only, so mobile keeps full width for the form */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-16 left-2 hidden select-none text-[6rem] font-black uppercase leading-none tracking-tighter text-black/10 md:block lg:left-8 lg:text-[10rem]"
        >
          AUTH://
        </span>

        {/* Top bar — stacks to two lines below sm, single row above */}
        <header className="relative z-10 flex flex-col gap-1 border-b-4 border-black bg-black px-4 py-3 text-[11px] font-bold uppercase tracking-widest text-white sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-sm">
          <span>ACME®</span>
          <span>Secure area // Auth-v2</span>
        </header>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-4 py-10 sm:gap-10 sm:py-14">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/60 sm:text-xs">
              [ 401 — Authorization required ]
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-none tracking-tighter sm:text-6xl lg:text-7xl">
              Welcome back.
            </h1>
          </div>

          <div className="w-full max-w-md">
            <SignInForm />
          </div>
        </div>

        {/* Bottom bar */}
        <footer className="relative z-10 flex flex-col gap-1 border-t-4 border-black bg-black px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-white sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-[11px]">
          <span>© 2026 ACME Corp</span>
          <span>React 19 · Vite · TypeScript · Tailwind v4</span>
        </footer>
      </div>
    </main>
  );
}
