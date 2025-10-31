'use client';

import { use } from 'react';

export default function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Catan Game - Room {id}</h1>
            <p className="text-sm text-gray-600">Turn: Player 1</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-600 hover:text-gray-900">Settings</button>
            <button className="text-sm text-red-600 hover:text-red-700">Leave Game</button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Game Board */}
        <div className="flex-1 bg-blue-50 p-8 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Game Board</h2>
            <p className="text-gray-600 mb-4">
              The Catan game board will be rendered here using canvas or SVG
            </p>
            <div className="w-96 h-96 bg-gradient-to-br from-green-100 to-yellow-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">🏝️ Board Placeholder</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* Players */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold mb-3">Players</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                <span className="font-medium">Player 1 (You)</span>
                <span className="text-sm">VP: 2</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span>Player 2</span>
                <span className="text-sm">VP: 1</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold mb-3">Your Resources</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-yellow-100 p-2 rounded text-center">
                <div className="font-bold text-yellow-800">🌾 3</div>
                <div className="text-xs text-gray-600">Wheat</div>
              </div>
              <div className="bg-red-100 p-2 rounded text-center">
                <div className="font-bold text-red-800">🧱 2</div>
                <div className="text-xs text-gray-600">Brick</div>
              </div>
              <div className="bg-green-100 p-2 rounded text-center">
                <div className="font-bold text-green-800">🪵 1</div>
                <div className="text-xs text-gray-600">Wood</div>
              </div>
              <div className="bg-gray-100 p-2 rounded text-center">
                <div className="font-bold text-gray-800">⛰️ 0</div>
                <div className="text-xs text-gray-600">Ore</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 flex-1">
            <h3 className="font-semibold mb-3">Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                🎲 Roll Dice
              </button>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                🏘️ Build
              </button>
              <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                🔄 Trade
              </button>
              <button className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition">
                ✅ End Turn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
