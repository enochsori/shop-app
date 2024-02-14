import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ url, item }) {
  const navigate = useNavigate();

  return (
    <img
      src={url}
      alt=''
      className='w-full h-80 rounded-lg hover:opacity-60 ease-in duration-200'
      onClick={() => navigate(`/${item}`)}
    />
  );
}
