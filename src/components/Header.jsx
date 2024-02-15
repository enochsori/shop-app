import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { login, logout, onUserStateChange } from '../api/firebase';
import { useEffect, useState } from 'react';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header className='w-full flex justify-between items-center p-4 mb-4 text-2xl border-b border-gray-300'>
      <Link to='/' className='flex hover:opacity-80'>
        <img src='/favicon.ico' alt='' className='w-16 rounded-lg mr-2' />
        <h1 className='font-bold text-brand text-4xl'>enoch's music</h1>
      </Link>

      <nav className='flex items-center gap-4 font-semibold'>
        <div className='relative mr-4 flex justify-center items-center'>
          <p className='bg-red-500 h-5 w-5 rounded-full text-center text-sm font-bold absolute top-0.5 left-3 opacity-80'>
            1
          </p>
          <RiShoppingCartLine
            className='text-2xl hover:opacity-80 hover:cursor-pointer mt-2'
            onClick={() => navigate('/cart')}
          />
        </div>
        {user ? (
          <button
            className='font-bold px-4 py-1 bg-gray-500 rounded-md flex justify-center items-center text-gray-50 hover:opacity-80'
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <button
            className='font-bold px-4 py-1 bg-gray-500 rounded-md flex justify-center items-center text-gray-50 hover:opacity-80'
            onClick={handleLogin}
          >
            Log in
          </button>
        )}
      </nav>
    </header>
  );
}
