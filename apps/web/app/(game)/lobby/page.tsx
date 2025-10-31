'use client';

export default function LobbyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Game Lobby</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Create New Game</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Game Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Single Player (vs AI)</option>
                <option>Multiplayer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Players</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>3 Players</option>
                <option>4 Players</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="private" className="mr-2" />
              <label htmlFor="private" className="text-sm text-gray-700">
                Private Game
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Create Game
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Join with Code</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room Code</label>
              <input
                type="text"
                placeholder="Enter 6-digit code"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
              Join Game
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Available Games</h2>
        </div>
        <div className="p-6">
          <div className="text-center text-gray-500 py-8">
            No available games at the moment. Create a new game to get started!
          </div>
        </div>
      </div>
    </div>
  );
}
