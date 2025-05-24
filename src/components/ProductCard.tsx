import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded border p-4 shadow transition hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="mb-4 h-48 w-full rounded object-cover"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="font-bold text-blue-600">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
}
