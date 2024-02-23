import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ url, item }) {
  const navigate = useNavigate();

  return (
    <li className=' rounded-lg shadow-lg flex justify-center'>
      <img
        src={url}
        alt=''
        className='w-70 h-98 rounded-lg hover:opacity-60 ease-in duration-200 object-cover '
        onClick={() => navigate(`/${item}`)}
      />
    </li>
  );
}
