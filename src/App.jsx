import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AuthContextProvider from './context/AuthContext';

Header;
function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
