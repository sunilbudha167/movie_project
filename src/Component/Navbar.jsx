import React, { useEffect, useState } from 'react';

const MovieCard = ({ image, title, genre, rating }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-400">{genre}</p>
        <p className="mt-2 text-yellow-400 font-bold">⭐ {rating}</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold cursor-pointer">MovieHub</div>
      <div className="hidden md:flex items-center bg-white rounded-full shadow-md px-3 py-1 w-full max-w-md mx-6 flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow text-gray-900 bg-transparent outline-none px-2 py-1 rounded-l-full"
        />
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z" />
          </svg>
        </button>
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v11m0 0a3.5 3.5 0 0 0 0-7 3.5 3.5 0 0 0 0 7zm-6 4a6 6 0 0 0 12 0m-6 5v4" />
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex space-x-8 text-lg">
        <li className="hover:text-orange-400 cursor-pointer">Home</li>
        <li className="hover:text-orange-400 cursor-pointer">Movies</li>
        <li className="hover:text-orange-400 cursor-pointer">Genres</li>
        <li className="hover:text-orange-400 cursor-pointer">About</li>
        <li><a href="#contact" className="hover:text-orange-400 cursor-pointer">Contact</a></li>
      </ul>
      <div className="md:hidden">
        <button aria-label="Menu" className="focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1601987075444-439b6c34849d?auto=format&fit=crop&w=1470&q=80"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] text-white flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-500"></div>
      <div className="relative z-10 max-w-2xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Unlimited Movies, TV Shows & More
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Watch anywhere. Cancel anytime. Ready to watch? Let’s go!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-full transition duration-300">
          Explore Now
        </button>
      </div>
    </section>
  );
};

const movies = [
  { title: 'Inception', genre: 'Sci-Fi', rating: 8.8, image: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
  { title: 'Interstellar', genre: 'Adventure', rating: 8.6, image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { title: 'Endgame', genre: 'Action', rating: 8.4, image: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg' },
  { title: 'Joker', genre: 'Drama', rating: 8.4, image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
  { title: 'Dark Knight', genre: 'Crime', rating: 9.0, image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { title: 'Spider-Man', genre: 'Adventure', rating: 8.3, image: 'https://image.tmdb.org/t/p/w500/5weKu49pzJCt06OPpjvT80efnQj.jpg' },
  { title: 'Dr Strange', genre: 'Fantasy', rating: 7.4, image: 'https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg' },
  { title: 'Black Panther', genre: 'Hero', rating: 7.3, image: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg' },
  { title: 'Matrix', genre: 'Sci-Fi', rating: 8.7, image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
  { title: 'Godfather', genre: 'Crime', rating: 9.2, image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg' },
  { title: 'Parasite', genre: 'Thriller', rating: 8.6, image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
  { title: 'Tenet', genre: 'Action', rating: 7.5, image: 'https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg' },
  { title: 'The Batman', genre: 'Action', rating: 8.0, image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
  { title: 'Dune', genre: 'Sci-Fi', rating: 8.1, image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
  { title: 'Frozen II', genre: 'Animation', rating: 6.8, image: 'https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg' },
  { title: 'Toy Story 4', genre: 'Comedy', rating: 7.7, image: 'https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg' },
];

const Movies = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 min-h-screen">
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center">
        Trending Movies
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-10">Feel free to contact me for feedback or collaborations.</p>
        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold">MovieHub</h3>
          <p className="text-gray-400 mt-2">Your ultimate destination for movies and shows.</p>
        </div>
        <div className="mt-6 md:mt-0 space-x-6">
          <a href="#" className="hover:text-orange-400">Privacy</a>
          <a href="#" className="hover:text-orange-400">Terms</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-6">© {new Date().getFullYear()} MovieHub. All rights reserved.</p>
      <p className="text-center text-gray-500 text-sm mt-1">© {new Date().getFullYear()} MovieHub. Design by Sunil Budhathoki.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movies />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;