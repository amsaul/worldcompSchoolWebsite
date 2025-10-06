import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Campus', 'Events', 'Sports', 'Classrooms', 'Activities'];

  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Campus',
      title: 'School Building',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/7092363/pexels-photo-7092363.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Classrooms',
      title: 'Modern Classroom',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/8364028/pexels-photo-8364028.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events',
      title: 'Science Fair',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/8923128/pexels-photo-8923128.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sports',
      title: 'Basketball Game',
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/8364027/pexels-photo-8364027.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Activities',
      title: 'Art Class',
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/7092366/pexels-photo-7092366.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Classrooms',
      title: 'Computer Lab',
    },
    {
      id: 7,
      url: 'https://images.pexels.com/photos/8364029/pexels-photo-8364029.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Campus',
      title: 'School Playground',
    },
    {
      id: 8,
      url: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events',
      title: 'Graduation Ceremony',
    },
    {
      id: 9,
      url: 'https://images.pexels.com/photos/8613337/pexels-photo-8613337.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Activities',
      title: 'Music Class',
    },
    {
      id: 10,
      url: 'https://images.pexels.com/photos/8923120/pexels-photo-8923120.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sports',
      title: 'Soccer Practice',
    },
    {
      id: 11,
      url: 'https://images.pexels.com/photos/8923146/pexels-photo-8923146.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Classrooms',
      title: 'Library',
    },
    {
      id: 12,
      url: 'https://images.pexels.com/photos/8364030/pexels-photo-8364030.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events',
      title: 'Annual Day',
    },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="animate-fade-in">
      <section className="relative bg-gradient-to-br bg-maroon text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">Gallery</h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto">
            Explore our vibrant school community through moments captured in time
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r bg-maroon text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer bg-white animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(image.url)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-blue-200 text-sm">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r bg-maroon text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {image.category}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all hover:scale-110"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-6xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
