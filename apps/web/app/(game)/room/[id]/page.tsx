'use client';

import { use } from 'react';

export default function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Game Room</h1>
            <p className="text-gray-600">Room Code: {id}</p>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Leave Room
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Players</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Player 1 (You)</p>
                    <p className="text-sm text-gray-600">Ready</p>
                  </div>
                </div>
                <span className="text-green-600 font-medium">✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <p className="text-gray-400">Waiting for player...</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Game Settings</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Max Players:</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Game Type:</span>
                <span className="font-medium">Multiplayer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Private:</span>
                <span className="font-medium">Yes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Start Game
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Chat</h2>
        <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
          <p className="text-gray-500 text-sm">Chat messages will appear here...</p>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
