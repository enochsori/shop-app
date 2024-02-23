export default function ProductCard({
  product: { name, category, id, image, price },
}) {
  return (
    <li className='flex flex-col items-center rounded-lg shadow-md cursor-pointer py-5 hover:opacity-80'>
      <img
        src={image}
        alt={name}
        className='h-96 w-80 object-cover rounded-md'
      />

      <div className='w-80 flex justify-between font-bold text-lg'>
        <h3>{name}</h3>
        <p>{`$ ${price.toFixed(2)}`}</p>
      </div>
      <div className='w-80 text-gray-600 -mt-1 text-sm'>
        {category.toUpperCase()}
      </div>
    </li>
  );
}
