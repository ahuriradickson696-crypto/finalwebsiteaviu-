import { createContext, useContext, useState, type ReactNode } from 'react';
import { ApplyModal } from '@/components/ApplyModal';

type ApplyContextType = {
  openApply: () => void;
};

const ApplyContext = createContext<ApplyContextType>({
  openApply: () => {},
});

export function ApplyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ApplyContext.Provider value={{ openApply: () => setIsOpen(true) }}>
      {children}
      <ApplyModal open={isOpen} onClose={() => setIsOpen(false)} />
    </ApplyContext.Provider>
  );
}

<<<<<<< HEAD
// eslint-disable-next-line react-refresh/only-export-components
=======
>>>>>>> 7eb87b5fa18d7868fd6df0fc89da9b430598886b
export function useApply() {
  return useContext(ApplyContext);
}
