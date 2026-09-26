import { Helmet } from "react-helmet";
import { Phone, MessageCircle, Mail, Facebook, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = e => { e.preventDefault(); setSent(true); };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Helmet>
        <title>Contact – Tranom-boly Connecté</title>
        <meta name="description" content="Contactez l'équipe Tranom-boly Connecté. Nous sommes là pour vous aider." />
      </Helmet>

      <div className="mb-4">
        <h1 className="text-xl font-bold text-green-800">Contactez-nous</h1>
        <p className="text-sm text-gray-500">Nous sommes là pour vous aider.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Infos contact */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-gray-100 p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Informations de contact</h2>
            <div className="space-y-3">
              {[
                { icon: Phone, label: "Téléphone", value: "+261 20 22 301 82", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: MessageCircle, label: "WhatsApp", value: "+261 32 12 345 67", color: "text-green-600", bg: "bg-green-50" },
                { icon: Mail, label: "Email", value: "contact@tranom-boly.mg", color: "text-orange-500", bg: "bg-orange-50" },
                { icon: Facebook, label: "Facebook", value: "Tranom-boly Connecté", color: "text-blue-700", bg: "bg-blue-50" },
                { icon: MapPin, label: "Adresse", value: "Antananarivo, Madagascar", color: "text-red-500", bg: "bg-red-50" },
              ].map(({ icon: Icon, label, value, color, bg }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className={color} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{label}</div>
                    <div className="text-sm font-medium text-gray-800">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={15} className="text-green-600" />
              <h2 className="text-sm font-semibold text-gray-700">Heures d'ouverture</h2>
            </div>
            <div className="space-y-1 text-sm">
              {[
                ["Lundi – Vendredi", "8h00 – 17h00"],
                ["Samedi", "8h00 – 12h00"],
                ["Dimanche", "Fermé"],
              ].map(([jour, heure]) => (
                <div key={jour} className="flex justify-between">
                  <span className="text-gray-600">{jour}</span>
                  <span className={`font-medium ${heure === "Fermé" ? "text-red-500" : "text-green-700"}`}>{heure}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-200 rounded-lg h-40 flex items-center justify-center text-gray-500 text-sm border border-gray-100">
            <div className="text-center">
              <MapPin size={24} className="mx-auto mb-1 text-red-500" />
              Antananarivo, Madagascar
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg border border-gray-100 p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Envoyez-nous un message</h2>
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Mail size={24} className="text-green-600" />
              </div>
              <div className="text-green-800 font-semibold mb-1">Message envoyé !</div>
              <div className="text-sm text-gray-500">Nous vous répondrons dans les plus brefs délais.</div>
              <button onClick={() => setSent(false)} className="mt-4 text-xs text-green-600 hover:underline">Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={handle} className="space-y-4">
              {[
                { key: "nom", label: "Nom complet", type: "text", placeholder: "Votre nom" },
                { key: "email", label: "Email", type: "email", placeholder: "votre@email.com" },
                { key: "sujet", label: "Sujet", type: "text", placeholder: "Objet de votre message" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Votre message</label>
                <textarea rows={5} placeholder="Décrivez votre question ou problème..." value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 resize-none" />
              </div>
              <button type="submit" className="w-full bg-green-700 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-green-800 transition-colors">
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
