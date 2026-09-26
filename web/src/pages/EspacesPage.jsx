import { Helmet } from "react-helmet";
import { ClipboardList, DollarSign, TrendingUp, Wheat, ArrowRight, Plus, CheckCircle, Circle } from "lucide-react";

const tasks = [
  { id: 1, text: "Arroser les semis de tomates", done: false, priority: "urgent" },
  { id: 2, text: "Appliquer l'engrais sur parcelle B", done: false, priority: "normal" },
  { id: 3, text: "Vérifier l'état des capteurs", done: true, priority: "normal" },
  { id: 4, text: "Préparer la terre pour la prochaine saison", done: false, priority: "normal" },
  { id: 5, text: "Contacter le marché Analakely", done: false, priority: "urgent" },
];

const depenses = [
  { label: "Semences", montant: "85 000 Ar", date: "12 Mai" },
  { label: "Engrais organique", montant: "120 000 Ar", date: "14 Mai" },
  { label: "Main d'œuvre", montant: "200 000 Ar", date: "15 Mai" },
  { label: "Transport", montant: "45 000 Ar", date: "18 Mai" },
  { label: "Pesticides bio", montant: "170 000 Ar", date: "20 Mai" },
];

const recoltes = [
  { culture: "Tomates", quantite: "450 kg", parcelle: "A1", valeur: "540 000 Ar" },
  { culture: "Haricots verts", quantite: "320 kg", parcelle: "B2", valeur: "320 000 Ar" },
  { culture: "Maïs", quantite: "480 kg", parcelle: "C3", valeur: "240 000 Ar" },
];

export default function EspacesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Helmet>
        <title>Espaces utilisateurs – Tranom-boly Connecté</title>
        <meta name="description" content="Gérez vos activités, dépenses, bénéfices et récoltes agricoles." />
      </Helmet>

      <div className="mb-4">
        <h1 className="text-xl font-bold text-green-800">Espaces utilisateurs</h1>
        <p className="text-sm text-gray-500">Gérez vos activités, dépenses, bénéfices et récoltes.</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Tâches à faire", value: "5", sub: "Tâches en attente", icon: ClipboardList, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Dépenses", value: "620 000 Ar", sub: "Total ce mois", icon: DollarSign, color: "text-red-500", bg: "bg-red-50" },
          { label: "Bénéfices", value: "660 000 Ar", sub: "Bénéfice estimé", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
          { label: "Quantité récolte", value: "1 250 kg", sub: "Estimation totale", icon: Wheat, color: "text-yellow-600", bg: "bg-yellow-50" },
        ].map(({ label, value, sub, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
            <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center mb-2`}>
              <Icon size={18} className={color} />
            </div>
            <div className="text-xl font-bold text-gray-800">{value}</div>
            <div className="text-xs text-gray-500">{sub}</div>
            <div className="text-xs font-medium text-gray-600 mt-1">{label}</div>
            <button className="mt-2 flex items-center gap-1 text-xs text-green-600 hover:underline">
              Voir les détails <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Tâches */}
        <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-700">Tâches à faire</h2>
            <button className="flex items-center gap-1 text-xs bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 transition-colors">
              <Plus size={12} /> Nouvelle
            </button>
          </div>
          <div className="space-y-2">
            {tasks.map((t) => (
              <div key={t.id} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                {t.done ? <CheckCircle size={16} className="text-green-600 shrink-0" /> : <Circle size={16} className="text-gray-300 shrink-0" />}
                <span className={`text-sm flex-1 ${t.done ? "line-through text-gray-400" : "text-gray-700"}`}>{t.text}</span>
                {t.priority === "urgent" && <span className="text-[10px] bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded font-medium">Urgent</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Dépenses */}
        <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-700">Dépenses récentes</h2>
            <button className="text-xs text-green-600 hover:underline">Voir tout</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] text-gray-400 uppercase border-b">
                <th className="text-left pb-2">Libellé</th>
                <th className="text-right pb-2">Montant</th>
                <th className="text-right pb-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {depenses.map((d, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="py-2 text-gray-700">{d.label}</td>
                  <td className="py-2 text-right font-medium text-red-600">{d.montant}</td>
                  <td className="py-2 text-right text-gray-400 text-xs">{d.date}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="pt-3 text-xs font-semibold text-gray-600">Total</td>
                <td className="pt-3 text-right font-bold text-red-700">620 000 Ar</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Récoltes */}
        <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-700">Récoltes par parcelle</h2>
            <button className="text-xs text-green-600 hover:underline">Voir mes récoltes →</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] text-gray-400 uppercase border-b">
                <th className="text-left pb-2">Culture</th>
                <th className="text-center pb-2">Parcelle</th>
                <th className="text-right pb-2">Quantité</th>
                <th className="text-right pb-2">Valeur estimée</th>
              </tr>
            </thead>
            <tbody>
              {recoltes.map((r, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="py-2 font-medium text-gray-800">{r.culture}</td>
                  <td className="py-2 text-center">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">{r.parcelle}</span>
                  </td>
                  <td className="py-2 text-right text-gray-700">{r.quantite}</td>
                  <td className="py-2 text-right font-semibold text-green-700">{r.valeur}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="pt-3 text-xs font-semibold text-gray-600">Total</td>
                <td />
                <td className="pt-3 text-right font-bold text-gray-800">1 250 kg</td>
                <td className="pt-3 text-right font-bold text-green-700">1 100 000 Ar</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
