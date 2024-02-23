import CategoryCard from '../components/CategoryCard';

export default function Home() {
  const categoryImg = [
    '/categories/acoustic-guitars.webp',
    '/categories/bass-guitars.webp',
    '/categories/electric-guitars.webp',
    '/categories/pianos.webp',
    '/categories/drums.webp',
  ];

  const items = [
    'acoustic-guitar',
    'bass-guitar',
    'electric-guitar',
    'piano',
    'drum',
  ];

  return (
    <div className='px-4 w-full flex flex-col'>
      <div className='w-full text-center'>
        <div className='w-full mt-4'>
          <img
            src='/images/banner-img.jpg'
            alt='banner image'
            className='w-full h-60 mx-auto object-cover rounded-md'
          />
        </div>

        <div className='w-full flex justify-center text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-10'>
          <h1>welcome!!</h1>{' '}
          <h1 className='hidden md:block'>
            we love music and people loving music!!
          </h1>
        </div>
        <div className=' text-lg font-bold mb-2'>
          Choose your favorite category
        </div>
      </div>

      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 gap-y-4'>
        {categoryImg.map((item, index) => (
          <CategoryCard key={index} url={item} item={items[index]} />
        ))}
      </ul>
    </div>
  );
}
