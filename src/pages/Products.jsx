import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../api/firebase';
import ProductCard from '../components/ui/ProductCard';

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ['products'], queryFn: getAllProducts });

  return (
    <section>
      <h1 className='text-2xl font-bold mb-2'>All Products</h1>
      {isLoading && <div>Loading products information....</div>}
      {error && <div>{error}</div>}

      {!isLoading && (
        <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}
