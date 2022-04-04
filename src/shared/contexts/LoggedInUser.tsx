import React, { createContext } from 'react';

export type LoggedInUserContextType = {
    userName: string    
  };

export const LoggedInUserContext = createContext<LoggedInUserContextType>({} as LoggedInUserContextType);

export const LoggedInUserProvider: React.FC<React.ReactNode> = ({ children }) => {
    return(
        <LoggedInUserContext.Provider value={{ userName: 'pcfordelone' }}>
            {children}
        </LoggedInUserContext.Provider>
    )
}