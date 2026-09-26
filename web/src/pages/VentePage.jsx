import { Helmet } from "react-helmet";
import { Search, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const marches = [
  { nom: "Marché Analakely", type: "Marché", adresse: "Analakely, Antananarivo", distance: "2.3 km", prix: "2 600 Ar/kg" },
  { nom: "Coopérative Fanantenana", type: "Coopérative", adresse: "Ambohidratrimo", distance: "12 km", prix: "2 600 Ar/kg" },
  { nom: "Sarl Fresh Agro", type: "Grossiste", adresse: "Ivato", distance: "15 km", prix: "2 900 Ar/kg" },
  { nom: "Export Mada Ltd", type: "Exportateur", adresse: "Zone Forello, Tanjombato", distance: "18 km", prix: "3 100 Ar/kg" },
  { nom: "Acheteur direct", type: "Acheteur", adresse: "Ambatolampy", distance: "170 km", prix: "2 400 Ar/kg" },
  { nom: "Marché de Behoririka", type: "Marché", adresse: "Behoririka, Antananarivo", distance: "4.5 km", prix: "2 500 Ar/kg" },
  { nom: "Coop Vert Espoir", type: "Coopérative", adresse: "Manjakandriana", distance: "30 km", prix: "2 750 Ar/kg" },
];

const filters = ["Tous", "Marchés", "Coopératives", "Grossistes", "Exportateurs", "Acheteurs"];
const typeMap = { "Marchés": "Marché", "Coopératives": "Coopérative", "Grossistes": "Grossiste", "Exportateurs": "Exportateur", "Acheteurs": "Acheteur" };

export default function VentePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tous");

  const filtered = marches.filter((m) => {
    const matchSearch = m.nom.toLowerCase().includes(search.toLowerCase()) || m.adresse.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "Tous" || m.type === typeMap[filter];
    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Helmet>
        <title>Vente &amp; Marchés – Tranom-boly Connecté</title>
        <meta name="description" content="Trouvez les meilleurs endroits pour vendre vos produits agricoles." />
      </Helmet>

      <div className="mb-4">
        <h1 className="text-xl font-bold text-green-800">Vente &amp; Marchés</h1>
        <p className="text-sm text-gray-500">Trouvez les meilleurs endroits pour vendre vos produits.</p>
      </div>

      {/* Search & filter */}
      <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un marché, acheteur, coopérative..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin size={13} className="text-green-600" />
            Autour de moi
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${filter === f ? "bg-green-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[11px] text-gray-400 uppercase border-b bg-gray-50">
              <th className="text-left px-4 py-3">Nom</th>
              <th className="text-left px-4 py-3">Type</th>
              <th className="text-left px-4 py-3">Adresse</th>
              <th className="text-right px-4 py-3">Distance</th>
              <th className="text-right px-4 py-3">Prix moyen</th>
              <th className="text-center px-4 py-3">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-green-50/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">
                      {m.nom[0]}
                    </div>
                    <span className="font-medium text-gray-800">{m.nom}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    m.type === "Exportateur" ? "bg-purple-100 text-purple-700" :
                    m.type === "Grossiste" ? "bg-blue-100 text-blue-700" :
                    m.type === "Coopérative" ? "bg-teal-100 text-teal-700" :
                    m.type === "Acheteur" ? "bg-orange-100 text-orange-700" :
                    "bg-green-100 text-green-700"
                  }`}>{m.type}</span>
                </td>
                <td className="px-4 py-3 text-gray-600">{m.adresse}</td>
                <td className="px-4 py-3 text-right text-gray-600">{m.distance}</td>
                <td className="px-4 py-3 text-right font-semibold text-green-700">{m.prix}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"><Phone size={13} /></button>
                    <button className="p-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"><MessageCircle size={13} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-400">Aucun résultat trouvé.</td></tr>
            )}
          </tbody>
        </table>
        <div className="px-4 py-2 border-t text-xs text-gray-400">Résultats mis à jour en temps réel</div>
      </div>
    </div>
  );
}
