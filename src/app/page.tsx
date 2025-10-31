"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/portada.webp",
    "/imagen.jpg",
    "/imagen2.jpg",
    "/imagen3.jpg",
  ];

  // 🔁 Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // 🎵 Actualizar progreso
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setHasEnded(true);
      setProgress(100);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
      setHasEnded(false);
    }
  };

  const replay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    setHasEnded(false);
    setIsPlaying(true);
  };

  return (
    <main className="flex items-center justify-center h-dvh w-full bg-gradient-to-b from-green-700 to-black text-white overflow-hidden">
      <div className="flex flex-col items-center p-6 rounded-2xl bg-zinc-800/70 backdrop-blur-md shadow-xl w-[90%] max-w-sm">
      {/* 🎞 Carrusel de imágenes */}
        <div className="relative w-60 h-60 mb-4 rounded-lg overflow-hidden shadow-lg">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Cover ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <h1 className="text-xl font-semibold mb-1">Te Amo Mi Amor</h1>
        <p className="text-sm text-zinc-400 mb-6">Este es el primer audio que me mandaste, es el primer mensaje de nuestro chat y escucharlo me hace muy feliz, porque fue el inicio de todo.</p>

        {/* ▶ Botón principal */}
        <button
          onClick={hasEnded ? replay : togglePlay}
          className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-400 transition"
        >
          {hasEnded ? (
            <RotateCcw className="w-8 h-8 text-black" />
          ) : isPlaying ? (
            <Pause className="w-8 h-8 text-black" />
          ) : (
            <Play className="w-8 h-8 text-black" />
          )}
        </button>

        {/* Barra de progreso */}
        <div className="w-full mt-6 h-2 bg-zinc-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        <audio ref={audioRef} src="/audio/audio.mp3" />
      </div>
    </main>
  );
}