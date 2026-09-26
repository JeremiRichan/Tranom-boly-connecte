import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Home, Users, ShoppingCart, Cloud, HelpCircle, Phone, ChevronDown, Menu, X, LayoutDashboard } from "lucide-react";

const navLinks = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { to: "/espaces", label: "Espaces utilisateurs", icon: Users, hasDropdown: true },
  { to: "/vente", label: "Vente & Marchés", icon: ShoppingCart },
  { to: "/meteo", label: "Météo", icon: Cloud },
  { to: "/help", label: "Help", icon: HelpCircle },
  { to: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="https://images.hostinger.com/6a86e9be-283c-4750-ba03-d301ce7548a3.png" alt="Logo" className="w-8 h-8 rounded" />
          <div className="leading-tight">
            <div className="text-xs font-bold text-green-800 uppercase tracking-wide">TRANOM-BOLY</div>
            <div className="text-[10px] text-green-600 font-semibold uppercase tracking-widest">CONNECTÉ</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label, icon: Icon, hasDropdown }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  active
                    ? "text-green-700 border-b-2 border-green-600"
                    : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                <Icon size={14} />
                {label}
                {hasDropdown && <ChevronDown size={12} />}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-gray-500 hover:text-green-700 transition-colors">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="hidden md:flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center text-white text-xs font-bold">EG</div>
            <div className="leading-tight">
              <div className="text-xs font-semibold text-gray-800">Ella Gracia</div>
              <div className="text-[10px] text-gray-500">Agricultrice</div>
            </div>
            <ChevronDown size={12} className="text-gray-400" />
          </div>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium ${
                location.pathname === to ? "bg-green-50 text-green-700" : "text-gray-600"
              }`}
            >
              <Icon size={15} /> {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
