import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouterContextType = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

<<<<<<< HEAD
function normalise(p: string): string {
  const clean = p.split('?')[0].split('#')[0] || '/';
  return clean.length > 1 ? clean.replace(/\/+$/, '') : clean;
}

function readPath(): string {
  if (typeof window === 'undefined') return '/';
  // Old bookmarks like /#/study are upgraded to /study
  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    const legacy = normalise(hash.slice(1));
    window.history.replaceState(null, '', legacy);
    return legacy;
  }
  return normalise(window.location.pathname);
=======
function readPath(): string {
  if (typeof window === 'undefined') return '/';
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath);

<<<<<<< HEAD
  useEffect(() => {
    const onPop = () => {
      setPath(readPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Keep the browser tab title, description and canonical URL in step with the page
  useEffect(() => {
    const SITE = 'AVIU';
    const ORIGIN = 'https://aviu.ac.ug';
    const home = 'Avance International University (AVIU) — NCHE Accredited | Uganda';
    const setMeta = (sel: string, attr: string, val: string) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };
    const apply = () => {
      const h1 = document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim();
      const title = path === '/' || !h1 ? home : `${h1} | ${SITE}`;
      document.title = title;
      const desc = document.querySelector('.page-hero-text')?.textContent?.replace(/\s+/g, ' ').trim();
      if (path !== '/' && desc) setMeta('meta[name="description"]', 'content', desc.slice(0, 200));
      const url = ORIGIN + (path === '/' ? '/' : path);
      setMeta('link[rel="canonical"]', 'href', url);
      setMeta('meta[property="og:url"]', 'content', url);
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[name="twitter:title"]', 'content', title);
      return Boolean(h1) || path === '/';
    };
    // pages load lazily, so retry briefly until the heading exists
    const timers = [0, 150, 400, 900, 1800].map((ms) => window.setTimeout(apply, ms));
    return () => timers.forEach(window.clearTimeout);
  }, [path]);

  const navigate = (to: string) => {
    const next = normalise(to.startsWith('/') ? to : `/${to}`);
    if (next !== window.location.pathname) window.history.pushState(null, '', next);
    setPath(next);
    window.scrollTo(0, 0);
=======
  // Default to home (#/) when opened without a hash
  useEffect(() => {
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '/';
      setPath('/');
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setPath(readPath());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to: string) => {
    const next = to.startsWith('/') ? to : `/${to}`;
    window.location.hash = next;
    setPath(next);
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

<<<<<<< HEAD
// eslint-disable-next-line react-refresh/only-export-components
=======
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
export function useRouter() {
  return useContext(RouterContext);
}
