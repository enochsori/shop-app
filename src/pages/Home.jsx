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
      <div className='w-full flex justify-center'>
        <div className='flex text-2xl md:text-3xl lg:text-4xl font-bold mb-6'>
          <h1>welcome!!</h1>{' '}
          <h1 className='hidden md:block'>
            we love music and people loving music!!
          </h1>
        </div>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 gap-y-4'>
        {categoryImg.map((item, index) => (
          <CategoryCard key={index} url={item} item={items[index]} />
        ))}
      </section>
    </div>
  );
}
