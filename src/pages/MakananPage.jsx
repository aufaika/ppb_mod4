// src/pages/MakananPage.jsx
import { useState, useEffect } from 'react';
import { ResepMakanan } from '../data/makanan';
import RecipeGrid from '../components/makanan/RecipeGrid'; 

export default function MakananPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const allMakanan = Object.values(ResepMakanan.resep);

  useEffect(() => {
    if (searchQuery.trim() === '') {
        setFilteredRecipes(allMakanan);
      } else {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = allMakanan.filter(recipe => 
          recipe.name.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredRecipes(filtered);
      }
  }, [searchQuery]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        
        {/* Kolom pencarian Anda akan ada di sini */}
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Temukan Resep Makanan Favoritmu</h1>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              className="w-full px-5 py-3 text-lg border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ketik nama makanan, contoh: Rendang..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <RecipeGrid recipes={filteredRecipes} onRecipeClick={handleRecipeClick} />

      </main>

      {/* INI BAGIAN MODAL YANG SUDAH DIPERBAIKI DENGAN TAILWIND */}
      {selectedRecipe && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Konten Modal */}
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            {/* Isi Detail Resep */}
            <img src={selectedRecipe.image_url} alt={selectedRecipe.name} className="w-full h-60 object-cover rounded-xl mb-6"/>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{selectedRecipe.name}</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Bahan-bahan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {selectedRecipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Cara Membuat:</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  {selectedRecipe.steps.map((step, index) => <li key={index}>{index + 1}. {step}</li>)}
                </ol>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}