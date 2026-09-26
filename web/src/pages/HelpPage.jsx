import { Helmet } from "react-helmet";
import { Search, ChevronRight, HelpCircle, BookOpen, Wifi, BarChart2, ClipboardList, TrendingUp, ShoppingCart, Shield } from "lucide-react";
import { useState } from "react";

const categories = [
  { label: "Guide utilisateur", icon: BookOpen },
  { label: "FAQ", icon: HelpCircle },
  { label: "Maison connectée", icon: Wifi },
  { label: "Capteurs & Données", icon: BarChart2 },
  { label: "Gestion des cultures", icon: ClipboardList },
  { label: "Dépenses & Bénéfices", icon: TrendingUp },
  { label: "Vente & Marchés", icon: ShoppingCart },
  { label: "Compte & Sécurité", icon: Shield },
];

const guides = [
  { title: "Comment connecter ma maison ?", desc: "Apprenez à connecter votre maison Tranom-boly à l'application." },
  { title: "Comment interpréter les données des capteurs ?", desc: "Comprendre les valeurs et les indicateurs de vos capteurs." },
  { title: "Gérer mes tâches agricoles", desc: "Comment ajouter, modifier et suivre vos tâches." },
  { title: "Suivre mes dépenses et bénéfices", desc: "Apprenez à gérer vos finances agricoles." },
  { title: "Comment vendre mes récoltes ?", desc: "Trouvez les meilleurs marchés pour vos produits." },
];

export default function HelpPage() {
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Helmet>
        <title>Centre d'aide – Tranom-boly Connecté</title>
        <meta name="description" content="Trouvez des réponses et apprenez à utiliser Tranom-boly Connecté." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-green-800 mb-1">Centre d'aide</h1>
          <p className="text-sm text-gray-500">Trouvez des réponses et apprenez à utiliser Tranom-boly Connecté.</p>
          <div className="relative mt-4 max-w-lg mx-auto">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Rechercher dans l'aide..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: categories */}
          <div className="bg-white rounded-lg border border-gray-100 p-3 shadow-sm h-fit">
            {categories.map(({ label, icon: Icon }) => (
              <button key={label} className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded transition-colors text-left">
                <Icon size={15} className="text-green-600" />
                {label}
                <ChevronRight size={13} className="ml-auto text-gray-300" />
              </button>
            ))}
          </div>

          {/* Right: popular guides */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-sm font-semibold text-gray-700">Guides populaires</h2>
            {guides.filter(g => g.title.toLowerCase().includes(search.toLowerCase()) || search === "").map((g, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm flex items-start justify-between gap-3 hover:border-green-200 transition-colors cursor-pointer">
                <div>
                  <div className="text-sm font-medium text-gray-800">{g.title}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{g.desc}</div>
                </div>
                <ChevronRight size={16} className="text-gray-300 shrink-0 mt-0.5" />
              </div>
            ))}

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 mt-4">
              <HelpCircle size={20} className="text-green-600 shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-green-800">Besoin d'aide supplémentaire ?</div>
                <div className="text-xs text-green-700">Contactez notre équipe, nous sommes là pour vous aider.</div>
              </div>
              <a href="/contact" className="bg-green-700 text-white text-xs px-3 py-1.5 rounded hover:bg-green-800 transition-colors shrink-0">Nous contacter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
