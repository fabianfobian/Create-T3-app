import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyStore
        </Link>
        <ul className="flex gap-4">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/cart">Cart</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}
