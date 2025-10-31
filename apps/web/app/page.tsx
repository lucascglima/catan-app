export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-green-500">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">🎲 Catan MVP</h1>
        <p className="text-xl mb-8">Multiplayer Board Game</p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Register
          </a>
        </div>
      </div>
    </main>
  );
}
