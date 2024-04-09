"use client"

import { createContext, useContext, useState } from 'react';

interface SearchMessageContextType {
  searchMessage: string | null;
  setSearchMessage: (message: string | null) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  reply: string | null;
  setReply: (message: string | null) => void;
}

const SearchMessageContext = createContext<SearchMessageContextType | undefined>(undefined);

export const useSearchMessage = (): SearchMessageContextType => {
  const context = useContext(SearchMessageContext);
  if (!context) {
    throw new Error('useSearchMessage must be used within a SearchMessageProvider');
  }
  return context;
};

interface SearchMessageProviderProps {
  children: React.ReactNode;
}

export const SearchMessageProvider: React.FC<SearchMessageProviderProps> = ({ children }) => {
  const [searchMessage, setSearchMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Initial loading state
  const [reply, setReply] = useState<string | null>(""); // Initial reply state

  return (
    <SearchMessageContext.Provider value={{ searchMessage, setSearchMessage, loading, setLoading, reply, setReply }}>
      {children}
    </SearchMessageContext.Provider>
  );
};
