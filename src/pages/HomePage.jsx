// src/pages/HomePage.jsx
import { useState } from 'react';
import { ResepMakanan } from '../data/makanan';
import { ResepMinuman } from '../data/minuman';
import HeroSection from '../components/home/HeroSection';
import FeaturedMakananSection from '../components/home/FeaturedMakananSection';
import FeaturedMinumanSection from '../components/home/FeaturedMinumanSection';

export default function HomePage() {
  const featuredMakanan = Object.values(ResepMakanan.resep).slice(0, 3);
  const featuredMinuman = Object.values(ResepMinuman.resep).slice(0, 2);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        <FeaturedMakananSection 
          featuredMakanan={featuredMakanan} 
          onRecipeClick={handleRecipeClick} 
        />
        <FeaturedMinumanSection 
          featuredMinuman={featuredMinuman} 
          onRecipeClick={handleRecipeClick} 
        />
      </main>

      {selectedRecipe && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
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