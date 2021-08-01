import React, { createContext } from 'react';
import MainView from './components/MainView';
import { auth, db } from './firebase';

export const DatabaseContext = createContext(db);
export const AuthenticationContext = createContext(auth);

function App() {

  return (
    <AuthenticationContext.Provider value={auth}>
      <DatabaseContext.Provider value={db}>
        <MainView />
      </DatabaseContext.Provider>
    </AuthenticationContext.Provider>
  );
}

export default App;
