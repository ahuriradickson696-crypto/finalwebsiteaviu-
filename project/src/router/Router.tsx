import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type RouterContextType = {
  path: string;
  navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
});

function readPath(): string {
  if (typeof window === 'undefined') return '/';
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath);

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
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
