export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-100 py-4 text-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
    </footer>
  );
}
