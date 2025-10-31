export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-blue-600">
                🎲 Catan MVP
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/lobby" className="text-gray-700 hover:text-blue-600">
                Lobby
              </a>
              <button className="text-gray-700 hover:text-blue-600">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
