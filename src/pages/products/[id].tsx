import { useRouter } from 'next/router';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Details for {id}</h1>
      <p>Details about product {id} will appear here.</p>
    </main>
  );
}
