import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="🏙️ Ciudad"
          className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-red-500"
        />
        <input
          type="text"
          placeholder="📍 Colonia"
          className="w-full border rounded-md p-2"
        />
        <input
          type="text"
          placeholder="🧭 Código Postal"
          className="w-full border rounded-md p-2"
        />
      </div>
      <div className="flex justify-center gap-4 pt-2 flex-wrap">
        <button className="bg-red-600 text-white px-5 py-2 rounded-md shadow hover:bg-red-700">
          Buscar
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
          Limpiar
        </button>
        <button className="text-sm text-red-600 hover:underline">
          Más filtros ▾
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
