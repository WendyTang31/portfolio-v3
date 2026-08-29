import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../alias.css";
import { ALIAS_ACCESS_CODE, ALIAS_SESSION_KEY } from "../../data/aliasGate";

function isUnlocked(): boolean {
  try {
    return sessionStorage.getItem(ALIAS_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberUnlock() {
  try {
    sessionStorage.setItem(ALIAS_SESSION_KEY, "1");
  } catch {
    // Private browsing can block storage; unlock still works for this visit.
  }
}

function useNoIndex() {
  useEffect(() => {
    let robots = document.querySelector('meta[name="robots"]');
    let created = false;
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
      created = true;
    }
    const previous = robots.getAttribute("content");
    robots.setAttribute("content", "noindex, nofollow");
    return () => {
      if (created) robots.remove();
      else if (previous) robots.setAttribute("content", previous);
      else robots.removeAttribute("content");
    };
  }, []);
}

export function AliasGate({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [unlocked, setUnlocked] = useState(isUnlocked);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useNoIndex();

  useEffect(() => {
    const key = searchParams.get("key") ?? searchParams.get("access");
    if (!key || key.trim() !== ALIAS_ACCESS_CODE) return;
    rememberUnlock();
    setUnlocked(true);
    setSearchParams({}, { replace: true });
  }, [searchParams, setSearchParams]);

  if (unlocked) return children;

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (value.trim() === ALIAS_ACCESS_CODE) {
      rememberUnlock();
      setUnlocked(true);
      setError(false);
      return;
    }
    setError(true);
  }

  return (
    <div className="alias-page flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-[var(--gutter)] py-16">
        <p className="alias-mono text-[10px] uppercase tracking-[0.2em] text-[var(--glow)]">
          Private project
        </p>
        <h1 className="alias-h1 mt-4 text-[var(--glow)]">ALIAS</h1>
        <p className="alias-body mt-5 max-w-md text-center text-[var(--ink-soft)]">
          This case study is shared by invitation. If Wendy sent you a password,
          enter it here.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex w-full max-w-sm flex-col gap-3"
        >
          <label className="alias-sr-only" htmlFor="alias-access">
            Access password
          </label>
          <input
            id="alias-access"
            type="password"
            autoComplete="off"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setError(false);
            }}
            className="w-full border border-black/15 bg-transparent px-4 py-3 alias-mono text-sm tracking-[0.08em] text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)]/50 focus:border-[var(--glow)]"
            placeholder="Password"
          />
          {error && (
            <p className="alias-mono text-[11px] uppercase tracking-[0.14em] text-[#8A3B4A]">
              That password is not right
            </p>
          )}
          <button
            type="submit"
            className="alias-mono mt-1 border border-[var(--glow)] px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-[var(--glow)] transition-colors hover:bg-[var(--glow)] hover:text-white"
          >
            Enter
          </button>
        </form>

        <Link
          to="/#work"
          className="alias-mono mt-12 text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
        >
          Back to selected work
        </Link>
      </div>
    </div>
  );
}
