import Image from 'next/image';

interface ProductCardProps {
  product: {
    name: string;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="w-full h-48 bg-gray-200 relative">
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg text-primary-dark">{product.name}</h3>
      </div>
    </div>
  );
}
