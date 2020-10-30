import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router} from 'react-router-dom';

import Sneakersdetail from './pages/Sneakersdetail';

import './App.scss';
import './style/reset.scss';

const firebaseContext = React.createContext<{
    firebase: firebase.app.App;
} | null>(null);

export const FireBaseProvider: React.FC = function FireBaseProvider(props) {
    const config = {
        apiKey: "AIzaSyCsAanTg_RYTRWYoGJR8rlyh2TLi3Wd0Y0",
        authDomain: "fake-shoes-4daa7.firebaseapp.com",
        databaseURL: "https://fake-shoes-4daa7.firebaseio.com",
        projectId: "fake-shoes-4daa7",
        storageBucket: "fake-shoes-4daa7.appspot.com",
        messagingSenderId: "966294008362",
        appId: "1:966294008362:web:54654c68baf7683d34c953",
        measurementId: "G-E1RC8CZC01"
    };

    const data = firebase.initializeApp(config);

    return (
        <firebaseContext.Provider value={{firebase: data}}>
            {props.children}
        </firebaseContext.Provider>
    );
};

export const useFireBaseStorage = (): firebase.storage.Storage => {
    const context = React.useContext(firebaseContext);

    if (!context) {
        throw new Error('Use <FireBaseProvider>{children}</FireBaseProvider> first');
    }

    return context.firebase.storage();
};

export const useFireBaseDB = (): firebase.database.Database => {
    const context = React.useContext(firebaseContext);

    if (!context) {
        throw new Error('Use <FireBaseProvider>{children}</FireBaseProvider> first');
    }

    return context.firebase.database();
};


export const useFireBase = () => {
    const context = React.useContext(firebaseContext);

    if (!context) {
        throw new Error('Use <FireBaseProvider>{children}</FireBaseProvider> first');
    }

    return context.firebase;
};





function App() {
  return (
    <div className="App">
      <Router>
          <FireBaseProvider>
            <Sneakersdetail />
          </FireBaseProvider>
      </Router>
    </div>
  );
}

export default App;
