import Link from "next/link";

export function Navbar() {
  return (
    <header className="site-shell border-b bg-background/90">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link className="text-lg font-semibold tracking-tight" href="/">
          Contra Labs
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="/">Home</Link>
        </div>
      </nav>
    </header>
  );
}
