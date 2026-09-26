import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Bug, Bird, Droplets, Thermometer, Sun, Wind, LineChart, ShieldCheck, Sprout, TrendingUp, Radar, Scale, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
const HERO = 'https://images.hostinger.com/9406056b-426b-4f3a-829b-334ea52f50a8.png';
const POLLI = 'https://images.hostinger.com/22c18eb4-ca1d-46eb-b93a-00acc8c50a5a.png';
const SENSOR = 'https://images.hostinger.com/b665d3ae-2471-4560-af81-f272c17ea36a.png';
const FARMER = 'https://images.hostinger.com/52491d47-1c1e-4579-b205-dd15e676561e.png';
const ticker = ['Détection sélective des espèces', 'Répulsion non létale', 'Pollinisateurs protégés', 'Capteurs sol · air · lumière', 'Arrosage automatique', 'Prédiction des récoltes', 'Bénéfice prévisionnel'];
const capteurs = [{
  icon: Droplets,
  label: 'Humidité du sol',
  action: 'Déclenche l’arrosage au bon moment, sans gaspillage d’eau.'
}, {
  icon: Thermometer,
  label: 'Température',
  action: 'Ajuste la ventilation et l’ombrage pour stabiliser la culture.'
}, {
  icon: Wind,
  label: 'Humidité de l’air',
  action: 'Repère les conditions favorables aux maladies fongiques.'
}, {
  icon: Sun,
  label: 'Luminosité',
  action: 'Améliore l’éclairage d’appoint sous serre ou en saison courte.'
}];
const benefices = [{
  icon: Sprout,
  t: 'Agriculture durable',
  d: 'Moins de produits chimiques, des sols vivants, une exploitation qui tient dans la durée.'
}, {
  icon: Leaf,
  t: 'Respect de l’environnement',
  d: 'Aucune espèce n’est tuée : le système écarte, il n’élimine pas.'
}, {
  icon: Scale,
  t: 'Équilibre des écosystèmes',
  d: 'Les auxiliaires et pollinisateurs continuent leur travail dans la parcelle.'
}, {
  icon: ShieldCheck,
  t: 'Qualité des récoltes',
  d: 'Moins de piqûres, moins de pertes, des produits mieux valorisés au marché.'
}, {
  icon: TrendingUp,
  t: 'Rendement en hausse',
  d: 'Les conditions de croissance sont corrigées avant que la plante ne souffre.'
}, {
  icon: LineChart,
  t: 'Rentabilité pilotée',
  d: 'Vous connaissez à l’avance la récolte attendue et le bénéfice estimé.'
}];
const Section = ({
  id,
  className = '',
  children
}) => <section id={id} className={`px-5 sm:px-8 ${className}`}>{children}</section>;
function HomePage() {
  return <div className="min-h-screen bg-background text-foreground selection:bg-accent/40">
      <Helmet>
        <title>Tranom-boly Connecté — Protection intelligente et non létale des cultures</title>
        <meta name="description" content="Tranom-boly Connecté protège les cultures des insectes et volatiles nuisibles sans tuer, surveille la santé des plantes par capteurs et prédit récoltes et bénéfices." />
      </Helmet>
      <Seo title="Tranom-boly Connecté — Protection intelligente des cultures" description="Détection sélective des espèces, surveillance des cultures par capteurs et prédiction des récoltes, au service d'une agriculture durable." image={HERO} siteName="Tranom-boly Connecté" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[90rem] items-center px-5 sm:px-8 justify-between gap-4">
          <a href="#top" className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground"></span><span className="font-display text-lg font-semibold leading-tight tracking-tight">Tranom-boliko JGTech</span></a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#approche">Approche</a>
            <a className="transition-colors hover:text-primary" href="#fonctions">Fonctionnalités</a>
            <a className="transition-colors hover:text-primary" href="#benefices">Avantages</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="hidden sm:inline-flex min-h-[44px] items-center gap-2 rounded-full border border-primary/30 px-5 text-sm font-medium text-primary transition-colors hover:bg-primary/5">
              Tableau de bord
            </Link>
            <a href="#contact" className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98]"><ArrowRight className="h-4 w-4" />Demander une demonstration</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="top" className="relative">
        <div className="relative mx-auto mt-4 max-w-[90rem] overflow-hidden rounded-3xl">
          <img src={HERO} alt="Rizières et cultures en terrasses équipées d'un capteur solaire" className="h-[78vh] min-h-[520px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(146_45%_10%/0.92)] via-[hsl(146_45%_12%/0.55)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
            <motion.div initial={{
            opacity: 0,
            y: 28
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/90">
                Agriculture intelligente · Biodiversité préservée
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">Cultiver intelligemment et offre une maison connectée à vos recolte.</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Tranom-boly Connecté identifie les insectes et volatiles, écarte les nuisibles
                par répulsion non létale et laisse passer abeilles et papillons pollinisateurs —
                tout en surveillant la santé de vos cultures.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/dashboard" className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform active:scale-[0.98]">
                  Accéder au tableau de bord <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#fonctions" className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/35 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  Voir le fonctionnement
                </a>
                <a href="#contact" className="inline-flex min-h-[44px] items-center rounded-full border border-white/35 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  Parler à un conseiller
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Ticker */}
      <div className="mt-10 overflow-hidden border-y border-border bg-primary py-3 text-primary-foreground">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap pr-8">
          {[...ticker, ...ticker].map((t, i) => <span key={i} className="flex items-center gap-8 text-sm uppercase tracking-[0.16em] text-primary-foreground/85">
              {t} <span className="text-accent">◆</span>
            </span>)}
        </div>
      </div>

      {/* Approche */}
      <Section id="approche" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[72rem] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-primary/70">Notre mission</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Le nuisible s’en va. Le pollinisateur reste.
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
              <p>
                Les méthodes classiques de protection frappent sans distinction : elles détruisent
                les ravageurs, mais aussi les abeilles, les papillons et les auxiliaires dont
                dépend la fécondation de vos cultures.
              </p>
              <p>
                Tranom-boly Connecté prend le problème à l’envers. Le système observe, reconnaît
                chaque espèce, la classe selon son rôle dans la parcelle, puis agit de manière
                <span className="text-foreground font-medium"> strictement non létale</span> :
                attraction et accès facilité pour les espèces bénéfiques, répulsion ciblée pour
                les espèces nuisibles.
              </p>
              <p>
                Résultat : une parcelle protégée, un écosystème intact, et un agriculteur qui
                garde la maîtrise de ses coûts.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[{
              v: 0,
              s: '',
              l: 'espèce éliminée'
            }, {
              v: 4,
              s: '',
              l: 'capteurs de terrain'
            }, {
              v: 24,
              s: '/7',
              l: 'surveillance continue'
            }].map(k => <div key={k.l}>
                  <dt className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                    <CountUp value={k.v} suffix={k.s} />
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{k.l}</dd>
                </div>)}
            </dl>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <img src={POLLI} alt="Abeille et papillon butinant une fleur dans une parcelle cultivée" className="w-full rounded-3xl object-cover shadow-[0_30px_60px_-25px_hsl(146_45%_15%/0.45)]" />
              <div className="absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl border border-border bg-card p-4 shadow-lg sm:-left-8">
                <p className="text-xs uppercase tracking-[0.16em] text-primary/70">Classification</p>
                <p className="mt-2 text-sm leading-snug">
                  Espèce bénéfique détectée — accès facilité, aucune répulsion déclenchée.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Fonctionnalités */}
      <Section id="fonctions" className="bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-[72rem]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-primary/70">Les trois fonctions</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Un seul système, trois métiers assurés dans votre parcelle.
            </h2>
          </Reveal>

          {/* 01 */}
          <Reveal delay={0.05}>
            <article className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <span className="font-display text-5xl font-semibold text-accent">01</span>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  Détection, attraction et répulsion sélective
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Le module identifie les insectes et volatiles présents autour de la culture et
                  les classe selon leur rôle : bénéfique ou nuisible. Chaque catégorie reçoit un
                  traitement différent, sans jamais recourir à la destruction.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[{
                icon: Radar,
                t: 'Identifier',
                d: 'Reconnaissance des insectes et volatiles présents, puis classement selon leur rôle écologique.'
              }, {
                icon: Bug,
                t: 'Attirer',
                d: 'Accès facilité aux espèces bénéfiques : abeilles, papillons et autres pollinisateurs.'
              }, {
                icon: Bird,
                t: 'Repousser',
                d: 'Répulsion non létale déclenchée uniquement pour les espèces nuisibles ciblées.'
              }].map(c => <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
                    <c.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                    <p className="mt-4 font-display text-lg font-semibold">{c.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>)}
              </div>
            </article>
          </Reveal>

          {/* 02 */}
          <Reveal delay={0.05}>
            <article className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
              <div>
                <span className="font-display text-5xl font-semibold text-accent">02</span>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  Surveillance intelligente de la santé des cultures
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Des capteurs suivent la parcelle en continu. Dès qu’une valeur sort de la zone
                  idéale, le système agit : arrosage, ajustement de la température, amélioration
                  de l’éclairage. Il repère aussi les combinaisons de conditions favorisant
                  l’apparition des maladies, avant les premiers symptômes.
                </p>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  {capteurs.map(c => <li key={c.label} className="flex items-start gap-4 py-4">
                      <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.6} />
                      <div>
                        <p className="font-medium">{c.label}</p>
                        <p className="text-sm text-muted-foreground">{c.action}</p>
                      </div>
                    </li>)}
                </ul>
              </div>
              <img src={SENSOR} alt="Station de capteurs agricoles à panneau solaire installée entre les rangs de culture" className="w-full rounded-3xl object-cover shadow-[0_30px_60px_-25px_hsl(146_45%_15%/0.45)]" />
            </article>
          </Reveal>

          {/* 03 */}
          <Reveal delay={0.05}>
            <article className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
              <div>
                <span className="font-display text-5xl font-semibold text-accent">03</span>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  Prédiction des récoltes et estimation des bénéfices
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  À partir des données de terrain, le système estime la quantité de récolte
                  attendue, évalue sa valeur potentielle sur le marché et calcule le bénéfice
                  prévisionnel de la campagne. Vous planifiez vos ventes et vos investissements
                  sur des chiffres, pas sur des impressions.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  {[{
                  l: 'Quantité estimée',
                  v: 'Volume de récolte projeté par parcelle et par cycle.'
                }, {
                  l: 'Valeur potentielle',
                  v: 'Évaluation de la valeur marchande de la production attendue.'
                }, {
                  l: 'Bénéfice prévisionnel',
                  v: 'Résultat calculé une fois les charges de campagne déduites.'
                }].map(k => <div key={k.l}>
                      <p className="text-xs uppercase tracking-[0.16em] text-primary/70">{k.l}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{k.v}</p>
                    </div>)}
                </div>
                <div className="mt-8 flex h-40 items-end gap-2 rounded-2xl bg-secondary/70 p-4">
                  {[38, 52, 45, 66, 74, 61, 88, 96].map((h, i) => <motion.div key={i} initial={{
                  scaleY: 0.2,
                  opacity: 0
                }} whileInView={{
                  scaleY: 1,
                  opacity: 1
                }} viewport={{
                  once: true,
                  amount: 0.5
                }} transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }} style={{
                  height: `${h}%`,
                  transformOrigin: 'bottom'
                }} className={`flex-1 rounded-t-md ${i > 5 ? 'bg-accent' : 'bg-primary/70'}`} />)}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Projection de rendement sur le cycle en cours (illustration).</p>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* Bénéfices */}
      <Section id="benefices" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[72rem]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-primary/70">Ce que vous y gagnez</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Une exploitation plus rentable, un environnement préservé.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {benefices.map((b, i) => <Reveal key={b.t} delay={i * 0.05}>
                <div className="h-full bg-background p-7 transition-colors hover:bg-secondary/60">
                  <b.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                  <p className="mt-5 font-display text-xl font-semibold">{b.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </div>
              </Reveal>)}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" className="pb-24">
        <div className="mx-auto max-w-[90rem] overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div className="grid lg:grid-cols-2">
            <img src={FARMER} alt="Agriculteur consultant les données de ses cultures sur une tablette" className="h-full min-h-[300px] w-full object-cover" />
            <div className="p-8 sm:p-14">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Installons Tranom-boly Connecté sur votre parcelle.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/80">
                Nos conseillers évaluent votre culture, vos pertes actuelles et le dispositif
                adapté à la taille de votre exploitation. Premier échange sans engagement.
              </p>
              <div className="mt-8 space-y-3 text-sm text-primary-foreground/90">
                <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +261 38 98 041 12</p>
                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" />jeremirichantossy@gmail.com</p>
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> Ankatso, Analamanga, Madagascar</p>
              </div>
              <a href="mailto:contact@tranomboly-connecte.mg" className="mt-9 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform active:scale-[0.98]">
                Demander une démonstration <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-base font-semibold text-foreground">Tranom-boliko JGTech</p>
          <nav className="flex flex-wrap gap-6">
            <a className="hover:text-primary" href="#approche">Approche</a>
            <a className="hover:text-primary" href="#fonctions">Fonctionnalités</a>
            <a className="hover:text-primary" href="#benefices">Avantages</a>
            <a className="hover:text-primary" href="#contact">Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} Tranom-boly Connecté. Tous droits réservés.</p>
        </div>
      </footer>
    </div>;
}
export default HomePage;