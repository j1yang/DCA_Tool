import{ BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Login from './components/login/login';
import Main from './components/main/main';

function App({profitService, authService, dataService}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact
          path='/'
          element={<Login authService={authService}/>}
        />
        <Route
          path='/main'
          element={
            <Main
              profitService={profitService}
              authService={authService}
              dataService={dataService} 
          />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
