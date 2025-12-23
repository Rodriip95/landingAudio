import React from 'react';
import { Gift, Ticket, Luggage, MapPin, Calendar, Heart, Plane } from 'lucide-react';

export default function TravelReservation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-4">
      <div className="max-w-md mx-auto">
        {/* Header con confetti effect */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-6 p-6">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
          
          {/* Decorative icons floating */}
          <div className="absolute top-4 right-4 opacity-20">
            <Gift className="w-12 h-12 text-purple-400 animate-bounce" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Luggage className="w-10 h-10 text-pink-400 animate-pulse" />
          </div>
          
          <div className="text-center relative z-10 pt-4">
            <div className="inline-block bg-green-100 rounded-full px-6 py-2 mb-4">
              <span className="text-green-700 font-bold text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                RESERVA CONFIRMADA
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
              <Heart className="w-8 h-8 text-red-400 fill-red-400 animate-pulse" />
              ¡Córdoba nos espera!
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Prepará las maletas que un nuevo viaje nos espera, lleno de aventuras y momentos inolvidables juntos.
            </p>
          </div>
        </div>

        {/* Trip Details Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Plane className="w-6 h-6" />
                <span className="font-semibold text-lg">Detalles del Viaje</span>
              </div>
              <Ticket className="w-6 h-6" />
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
              <div className="bg-purple-200 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-purple-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Destino</p>
                <p className="text-lg font-bold text-gray-800">Córdoba, Argentina</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
              <div className="bg-blue-200 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-blue-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Fecha</p>
                <p className="text-lg font-bold text-gray-800">Próximamente</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-2xl">
              <div className="bg-pink-200 p-3 rounded-full">
                <Heart className="w-6 h-6 text-pink-700 fill-pink-700" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Viajeros</p>
                <p className="text-lg font-bold text-gray-800">2 adultos y 1 niño</p>
              </div>
            </div>
          </div>
        </div>

        {/* What to Pack Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-orange-400 to-pink-400 p-3 rounded-full">
              <Luggage className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">¿Qué llevar?</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-gray-700">Ropa cómoda</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <span className="text-gray-700">Cámara de fotos</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-700">Mucha energía</span>
            </div>
          </div>
        </div>

        {/* Gift Icon Footer */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Gift className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-600">Este viaje es un regalo especial</span>
          </div>
        </div>
      </div>
    </div>
  );
}