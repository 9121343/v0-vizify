export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">FRIZBLEY</h1>
        <p className="text-xl">Cosmic Footwear Innovation</p>
        <div className="mt-8">
          <a
            href="/shop"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded text-white"
          >
            Shop Now
          </a>
        </div>
      </div>
    </main>
  );
}
