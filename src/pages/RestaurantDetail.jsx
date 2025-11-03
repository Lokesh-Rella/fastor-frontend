import React, { useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockRestaurants } from '../api/mockData';
import Header from '../components/Header';

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const restaurant = mockRestaurants.find((r) => r.id === id);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const restaurantImg = new Image();
    const logoImg = new Image();

    restaurantImg.crossOrigin = 'Anonymous';
    restaurantImg.src = restaurant.imageURL;
    logoImg.src = '/fastor-logo.png';

    restaurantImg.onload = () => {
      ctx.drawImage(restaurantImg, 0, 0, canvas.width, canvas.height);
      logoImg.onload = () => {
        const logoSize = 100;
        const x = (canvas.width - logoSize) / 2;
        const y = (canvas.height - logoSize) / 2;
        ctx.drawImage(logoImg, x, y, logoSize, logoSize);
      };
    };
  }, [restaurant]);

  const handleShare = async () => {
    if (!navigator.share) {
      alert('Web Share API not supported in this browser.');
      return;
    }

    const blob = await new Promise((res) =>
      canvasRef.current.toBlob(res, 'image/png')
    );
    const file = new File([blob], 'Fastor-Restaurant.png', { type: 'image/png' });

    await navigator.share({
      files: [file],
      title: `Check out ${restaurant.name}`,
      text: `I superimposed the Fastor logo using this PWA!`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>
          <canvas ref={canvasRef} width="600" height="400" className="mx-auto rounded-lg shadow" />
          <div className="mt-6">
            <button
              onClick={handleShare}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Share Image
            </button>
            <button
              onClick={() => navigate('/restaurants')}
              className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
