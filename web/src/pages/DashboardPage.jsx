import { Helmet } from "react-helmet";
import { Thermometer, Droplets, Sun, Zap, Wifi, Lock, Battery, Activity, CheckCircle, Leaf } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const chartData = [
  { date: "15 Mai", temp: 24, humAir: 65, humSol: 40, lux: 700 },
  { date: "16 Mai", temp: 23, humAir: 68, humSol: 42, lux: 750 },
  { date: "17 Mai", temp: 25, humAir: 66, humSol: 41, lux: 800 },
  { date: "18 Mai", temp: 26, humAir: 64, humSol: 39, lux: 820 },
  { date: "19 Mai", temp: 25, humAir: 67, humSol: 42, lux: 830 },
  { date: "20 Mai", temp: 24, humAir: 70, humSol: 44, lux: 790 },
  { date: "21 Mai", temp: 24.6, humAir: 68, humSol: 42, lux: 850 },
];

const params = [
  { label: "Température", value: "24.6 °C", status: "Normal", icon: Thermometer, color: "text-orange-500" },
  { label: "Humidité de l'air", value: "68 %", status: "Normal", icon: Droplets, color: "text-blue-500" },
  { label: "Humidité du sol", value: "42 %", status: "Normal", icon: Droplets, color: "text-teal-500" },
  { label: "Luminosité", value: "850 lux", status: "Normal", icon: Sun, color: "text-yellow-500" },
  { label: "État de la pompe", value: "Active", status: "Normal", icon: Activity, color: "text-green-600" },
  { label: "Engrais (Distributeur)", value: "Inactif", status: "Normal", icon: Leaf, color: "text-green-700" },
  { label: "État de la porte", value: "Fermée", status: "Normal", icon: Lock, color: "text-gray-600" },
  { label: "Connexion ESP32", value: "Connecté", status: "Normal", icon: Wifi, color: "text-blue-600" },
  { label: "Niveau batterie", value: "87 %", status: "Normal", icon: Battery, color: "text-green-500" },
  { label: "Consommation aujourd'hui", value: "1.24 kWh", status: "Normal", icon: Zap, color: "text-yellow-600" },
];

const activities = [
  { text: "Pompe activée automatiquement", sub: "Humidité du sol faible (28%)", time: "10:32", type: "pump" },
  { text: "Engrais distribué", sub: "Programme automatique", time: "08:15", type: "leaf" },
  { text: "Accès autorisé à la maison", sub: "Par Ella Gracia", time: "Hier, 18:42", type: "door" },
  { text: "Tâche terminée", sub: "Arrosage manuel", time: "Hier, 16:30", type: "check" },
];

const last7 = [
  { label: "Pompe", items: ["Jeu 22", "Ven 23", "Sam 24", "Dim 25", "Lun 26", "Mar 27", "Mer 28"], values: ["On", "Off", "On", "On", "Off", "On", "On"] },
  { label: "Engrais", values: ["OFF", "OFF", "ON", "OFF", "ON", "OFF", "OFF"] },
  { label: "Lumière", values: ["On", "On", "On", "On", "On", "On", "On"] },
  { label: "Porte", values: ["V", "V", "V", "V", "V", "V", "V"] },
];

export default function DashboardPage() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("fr-MG", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Helmet>
        <title>Accueil – Tranom-boly Connecté</title>
        <meta name="description" content="Dashboard principal du système intelligent Tranom-boly Connecté" />
      </Helmet>

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <h1 className="text-xl font-bold text-green-800">Bonjour, Ella Gracia !</h1>
          <p className="text-sm text-gray-500">Voici l'état actuel de votre maison connectée et de vos cultures.</p>
        </div>
        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
          <CheckCircle size={16} className="text-green-600" />
          <div>
            <div className="text-xs text-gray-500">Système global</div>
            <div className="text-xs font-semibold text-green-700">Tout est normal</div>
          </div>
          <div className="border-l border-gray-200 pl-3 ml-1">
            <div className="text-xs text-gray-400 capitalize">{dateStr}</div>
            <div className="text-lg font-bold text-green-800 tabular-nums">{now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</div>
          </div>
        </div>
      </div>

      {/* Params grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        {params.map(({ label, value, status, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <Icon size={16} className={color} />
              <span className="text-[10px] text-green-600 font-medium bg-green-50 px-1.5 rounded">{status}</span>
            </div>
            <div className="text-sm font-bold text-gray-800">{value}</div>
            <div className="text-[11px] text-gray-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Évolution des paramètres</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="temp" stroke="#f97316" name="Température (°C)" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="humAir" stroke="#3b82f6" name="Humidité air (%)" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="humSol" stroke="#06b6d4" name="Humidité sol (%)" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="lux" stroke="#eab308" name="Luminosité (lux)" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Météo actuelle */}
        <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Météo actuelle</h3>
          <p className="text-xs text-gray-400 mb-3">Antananarivo, Madagascar</p>
          <div className="flex items-center gap-3 mb-4">
            <div className="text-5xl">☀️</div>
            <div>
              <div className="text-3xl font-bold text-gray-800">24 °C</div>
              <div className="text-sm text-gray-500">Ensoleillé</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
            {[["Humidité", "62%"], ["Vent", "12 km/h"], ["Pluie", "0%"]].map(([k, v]) => (
              <div key={k}>
                <div className="font-semibold text-gray-700">{v}</div>
                <div className="text-gray-400">{k}</div>
              </div>
            ))}
          </div>
          <div className="border-t pt-2">
            <div className="text-xs text-gray-500 mb-1">Prévisions 7 jours →</div>
            <div className="flex gap-1 overflow-x-auto pb-1">
              {["Jeu", "Ven", "Sam", "Dim", "Lun", "Mar", "Mer"].map((d, i) => (
                <div key={d} className="flex flex-col items-center min-w-[32px] text-[10px] text-gray-600">
                  <span>{d}</span>
                  <span className="my-0.5">☀️</span>
                  <span className="font-semibold">{26 + (i % 3) - 1}°</span>
                  <span className="text-gray-400">{16 + (i % 2)}°</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* 7 derniers jours */}
        <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">7 derniers jours</h3>
          <div className="space-y-2">
            {[
              { icon: "💧", label: "Pompe", days: ["On","Off","On","On","Off","On","On"] },
              { icon: "🌿", label: "Engrais", days: ["OFF","OFF","ON","OFF","ON","OFF","OFF"] },
              { icon: "💡", label: "Lumière", days: ["On","On","On","On","On","On","On"] },
              { icon: "🚪", label: "Porte", days: ["V","V","V","V","V","V","V"] },
            ].map(({ icon, label, days }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-base">{icon}</span>
                <span className="text-xs text-gray-600 w-16">{label}</span>
                <div className="flex gap-1 flex-1">
                  {days.map((v, i) => (
                    <span key={i} className={`text-[10px] px-1 py-0.5 rounded flex-1 text-center font-medium ${
                      v === "On" || v === "ON" || v === "V" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    }`}>{v}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activités récentes */}
        <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Activités récentes</h3>
            <button className="text-xs text-green-600 hover:underline">Voir tout</button>
          </div>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={12} className="text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-gray-800">{a.text}</div>
                  <div className="text-[11px] text-gray-500">{a.sub}</div>
                </div>
                <div className="text-[10px] text-gray-400 shrink-0">{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
