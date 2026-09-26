import { Helmet } from "react-helmet";
import { Wind, Droplets, Gauge, Eye, Sun } from "lucide-react";

const previsions = [
  { jour: "Jeu 22", icon: "☀️", max: 26, min: 16, pluie: "0%" },
  { jour: "Ven 23", icon: "⛅", max: 25, min: 17, pluie: "10%" },
  { jour: "Sam 24", icon: "☀️", max: 24, min: 16, pluie: "0%" },
  { jour: "Dim 25", icon: "🌤️", max: 24, min: 17, pluie: "5%" },
  { jour: "Lun 26", icon: "⛅", max: 26, min: 17, pluie: "15%" },
  { jour: "Mar 27", icon: "☀️", max: 27, min: 18, pluie: "0%" },
  { jour: "Mer 28", icon: "☀️", max: 26, min: 18, pluie: "0%" },
];

export default function MeteoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Helmet>
        <title>Météo – Tranom-boly Connecté</title>
        <meta name="description" content="Prévisions météo 7 jours pour votre exploitation agricole à Antananarivo." />
      </Helmet>

      <div className="mb-4">
        <h1 className="text-xl font-bold text-green-800">Météo</h1>
        <p className="text-sm text-gray-500">Antananarivo, Madagascar</p>
      </div>

      {/* Current weather hero */}
      <div className="bg-gradient-to-br from-green-700 to-green-900 text-white rounded-xl p-6 mb-4 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-7xl">☀️</div>
            <div>
              <div className="text-6xl font-bold">24 °C</div>
              <div className="text-green-200 text-lg mt-1">Ensoleillé</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {[
              { icon: Droplets, label: "Humidité", value: "62%" },
              { icon: Wind, label: "Vent", value: "12 km/h" },
              { icon: Gauge, label: "Pression", value: "1012 hPa" },
              { icon: Sun, label: "UV", value: "Modéré" },
              { icon: Eye, label: "Visibilité", value: "10 km" },
              { icon: Droplets, label: "Pluie", value: "0 mm" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={14} className="text-green-300" />
                <div>
                  <div className="text-green-300 text-xs">{label}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7-day forecast */}
      <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Prévisions sur 7 jours</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {previsions.map((p) => (
            <div key={p.jour} className="flex flex-col items-center bg-gray-50 rounded-lg p-3 gap-1">
              <span className="text-xs font-semibold text-gray-600">{p.jour}</span>
              <span className="text-3xl my-1">{p.icon}</span>
              <span className="text-sm font-bold text-gray-800">{p.max}°</span>
              <span className="text-xs text-gray-400">{p.min}°</span>
              <span className="text-[11px] text-blue-600 font-medium">{p.pluie}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Détails aujourd'hui */}
      <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Détails aujourd'hui</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Humidité", value: "62%", icon: Droplets, color: "text-blue-500" },
            { label: "Vent", value: "12 km/h", icon: Wind, color: "text-gray-500" },
            { label: "Pression", value: "1012 hPa", icon: Gauge, color: "text-purple-500" },
            { label: "Pluie", value: "0 mm", icon: Droplets, color: "text-teal-500" },
            { label: "UV", value: "Modéré", icon: Sun, color: "text-yellow-500" },
            { label: "Visibilité", value: "10 km", icon: Eye, color: "text-green-500" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="flex flex-col items-center bg-gray-50 rounded-lg p-3 gap-1">
              <Icon size={20} className={color} />
              <div className="text-base font-bold text-gray-800">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
