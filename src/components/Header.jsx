import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className='w-full flex justify-between items-center p-4 mb-4 text-2xl border-b border-zinc-600'>
      <Link to='/' className='flex hover:opacity-80'>
        <img src='/favicon.ico' alt='' className='w-16 rounded-lg mr-2' />
        <h1 className='font-bold text-4xl'>SHOP</h1>
      </Link>

      <section className='flex w-full basis-2/5 justify-end items-center'>
        <div className='relative mr-4 flex justify-center items-center'>
          <p className='bg-red-500 h-5 w-5 rounded-full text-center text-sm font-bold absolute top-0.5 left-3 opacity-80'>
            1
          </p>
          <RiShoppingCartLine
            className='text-2xl hover:opacity-80 hover:cursor-pointer mt-2'
            onClick={() => navigate('/cart')}
          />
        </div>
        <button
          className='font-bold px-4 py-1 bg-gray-500 rounded-md flex justify-center items-center text-gray-50 hover:opacity-80'
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </section>
    </header>
  );
}
