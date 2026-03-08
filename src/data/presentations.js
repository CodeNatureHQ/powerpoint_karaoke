// Each presentation has a unique color theme and varied slide layouts
// Layouts: "two-col" (bullets + visual), "image-full" (full-width image behind),
//          "big-number" (large stat + text), "section" (section divider),
//          "chart-focus" (chart is hero), "quote" (large quote style)

const presentations = [
  {
    id: 1,
    title: "Warum Tauben die wahren Manager der Innenstadt sind",
    subtitle: "Eine ornithologische Führungsanalyse",
    theme: {
      accent: "#a855f7",
      accentAlt: "#7c3aed",
      bg: "from-violet-950/80 to-indigo-950/80",
      titleBg: "from-violet-600/40 to-indigo-600/40",
      border: "border-violet-500/20",
      bullet: "bg-violet-400",
      progress: "from-violet-500 to-indigo-500",
    },
    slides: [
      {
        title: "Agenda",
        layout: "two-col",
        bullets: [
          "Die urbane Taube: Ein Führungsprofil",
          "Strategische Positionierung auf dem Marktplatz",
          "Ressourcenverteilung: Brotkrumen und Budgets",
          "Teamdynamik im Schwarm",
          "Change Management: Wenn der Bäcker schließt",
        ],
        type: "agenda",
        image: {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          caption: "Typische Führungskraft (Symbolbild)",
        },
      },
      {
        title: "Das Profil einer Führungstaube",
        layout: "image-full",
        bullets: [
          "360°-Blick auf die Gesamtsituation (buchstäblich)",
          "Stressresistenz: Bleibt ruhig, selbst bei Kindern mit Eis",
          "Klare Kommunikation: Gurren = Zustimmung",
          "Entscheidungsfreude: Fliegt los, ohne lange zu planen",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
          caption: "CEO der Innenstadtfiliale",
        },
      },
      {
        title: "Strategische Positionierung",
        layout: "chart-focus",
        bullets: [
          "Immer am Point-of-Sale (Bäckerei, Marktstand)",
          "First-Mover-Advantage bei herabfallenden Pommes",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Tauben-Hotspots: Attraktivität nach Standort",
          data: [
            { name: "Bäckerei", value: 95, fill: "#a855f7" },
            { name: "Marktplatz", value: 88, fill: "#ec4899" },
            { name: "Bahnhof", value: 76, fill: "#f59e0b" },
            { name: "Park", value: 62, fill: "#10b981" },
            { name: "Bürogebäude", value: 15, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Ressourcenmanagement",
        layout: "two-col",
        bullets: [
          "Dezentrale Beschaffung – jeder pickt, was er findet",
          "Zero-Waste-Strategie: Alles wird verwertet",
          "Effizienz: 3 Sekunden vom Fund zum Konsum",
        ],
        type: "content",
        chart: {
          type: "pie",
          title: "Nahrungsquellen der Stadttaube",
          data: [
            { name: "Brotkrumen", value: 35, fill: "#a855f7" },
            { name: "Pommes", value: 25, fill: "#ec4899" },
            { name: "Dönerreste", value: 20, fill: "#f59e0b" },
            { name: "Mysterium", value: 15, fill: "#10b981" },
            { name: "Eis (vom Kind)", value: 5, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "»Flache Hierarchien sind kein Buzzword – wir haben buchstäblich kein Organigramm.«",
        subtitle: "– Alpha-Taube, Marktplatz Süd",
        layout: "quote",
        type: "content",
      },
      {
        title: "Teamdynamik im Schwarm",
        layout: "two-col",
        bullets: [
          "Flache Hierarchien (maximal 1 Alpha-Taube)",
          "Agile Methoden: Sprint, Pause, Sprint",
          "Retrospektive findet täglich auf dem Dachfirst statt",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
          caption: "Das Team bei der täglichen Retrospektive",
        },
      },
      {
        title: "Reaktionszeit",
        layout: "big-number",
        bigNumber: "4 Sek.",
        bigNumberSub: "Durchschnittliche Reaktionszeit der Taube bei Nahrungsquellen-Pivot",
        bullets: [
          "Spatzen: 12 Sekunden",
          "Krähen: 25 Sekunden",
          "DAX-Konzern: 18.000 Sekunden",
        ],
        type: "content",
      },
      {
        title: "Risikobewertung & Compliance",
        layout: "chart-focus",
        bullets: [
          "Compliance: Keine Regeln, keine Verstöße",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Risikoanalyse: Bedrohungslevel (1–100)",
          data: [
            { name: "Katzen", value: 78, fill: "#ef4444" },
            { name: "Autos", value: 45, fill: "#f59e0b" },
            { name: "Kinder", value: 32, fill: "#10b981" },
            { name: "Regen", value: 3, fill: "#6366f1" },
            { name: "Ordnungsamt", value: 2, fill: "#a855f7" },
          ],
        },
      },
      {
        title: "Expansion ins Ausland",
        layout: "image-full",
        bullets: [
          "Pariser Tauben: Benchmarking-Partner",
          "Venezianische Tauben: Premium-Segment (Touristenfütterung)",
          "New Yorker Tauben: Aggressive Wachstumsstrategie",
          "Tokioter Tauben: Höchste Disziplin, kleinste Portionen",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop",
          caption: "Internationales Tauben-Summit 2024",
        },
      },
      {
        title: "Fazit & Empfehlung",
        layout: "two-col",
        bullets: [
          "Tauben sind die unterschätztesten Manager unserer Zeit",
          "Jedes Unternehmen braucht einen Chief Pigeon Officer",
          "ROI einer Taube im Vorstand: Unbezahlbar",
          "Fragen? (Bitte nur gurren)",
        ],
        type: "conclusion",
        image: {
          url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop",
          caption: "Zukünftiger Firmensitz der Tauben AG",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Die geheime Ökonomie der Büroklammer",
    subtitle: "Warum die Büroklammer das wahre Zahlungsmittel der Zukunft ist",
    theme: {
      accent: "#f59e0b",
      accentAlt: "#d97706",
      bg: "from-amber-950/80 to-orange-950/80",
      titleBg: "from-amber-600/40 to-orange-600/40",
      border: "border-amber-500/20",
      bullet: "bg-amber-400",
      progress: "from-amber-500 to-orange-500",
    },
    slides: [
      {
        title: "37 Mrd.",
        layout: "big-number",
        bigNumber: "37 Mrd.",
        bigNumberSub: "Büroklammern werden jährlich produziert. Wo gehen sie hin?",
        bullets: [
          "Marktvolumen: Unberechenbar, da viele im Sofa verschwinden",
          "Status: Offizielles Tauschmittel in mindestens 3 Büros",
        ],
        type: "content",
      },
      {
        title: "Historischer Kontext",
        layout: "chart-focus",
        bullets: [
          "1899: Erfindung der modernen Büroklammer",
          "2024: NFT-Büroklammern – die Zukunft?",
        ],
        type: "content",
        chart: {
          type: "line",
          title: "Büroklammer-Wertentwicklung (1899–2025)",
          data: [
            { name: "1899", value: 1 },
            { name: "1950", value: 3 },
            { name: "1987", value: 12 },
            { name: "2000", value: 8 },
            { name: "2010", value: 25 },
            { name: "2020", value: 67 },
            { name: "2025", value: 142 },
          ],
        },
      },
      {
        title: "Der Büroklammer-Kreislauf",
        layout: "two-col",
        bullets: [
          "Phase 1: Kauf im 100er-Pack",
          "Phase 2: 3 werden benutzt, 97 verschwinden",
          "Phase 3: Mysteriöses Auftauchen in Hosentaschen",
          "Phase 4: Einsatz als Schloss-Öffner oder Lesezeichen",
        ],
        type: "content",
        chart: {
          type: "pie",
          title: "Verbleib einer 100er-Packung",
          data: [
            { name: "Bestimmungsgemäß", value: 3, fill: "#f59e0b" },
            { name: "Im Sofa", value: 27, fill: "#ec4899" },
            { name: "Hosentasche", value: 18, fill: "#a855f7" },
            { name: "Schublade", value: 22, fill: "#10b981" },
            { name: "Paralleluniversum", value: 30, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Büroklammer vs. Bitcoin",
        layout: "chart-focus",
        bullets: [
          "Klarer Sieger: Büroklammer",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Vergleich: Büroklammer vs. Kryptowährungen",
          data: [
            { name: "Stabilität", klammer: 95, bitcoin: 12 },
            { name: "Biegbarkeit", klammer: 100, bitcoin: 0 },
            { name: "Hype", klammer: 3, bitcoin: 98 },
            { name: "Nutzen", klammer: 87, bitcoin: 11 },
          ],
        },
      },
      {
        title: "»Wer Büroklammern biegt, denkt nach – wissenschaftlich belegt.«",
        subtitle: "– Prof. Dr. Klammer, Institut für Bürobedarf-Psychologie",
        layout: "quote",
        type: "content",
      },
      {
        title: "Die Psychologie der Büroklammer",
        layout: "image-full",
        bullets: [
          "Büroklammerbieger sind 23% produktiver (Quelle: keine)",
          "Spirale = Stress, Herz = Verliebt, Gerade = Langweile",
          "Die Form der Biegung verrät den Gemütszustand",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
          caption: "Büroklammer-Kunst: Emotionale Verarbeitung des Q3-Reports",
        },
      },
      {
        title: "Globale Klammer-Diplomatie",
        layout: "two-col",
        bullets: [
          "Norwegen: Büroklammer als Nationalsymbol des Widerstands",
          "Japan: Origami-Klammern als Kunstform anerkannt",
          "USA: Büroklammerverbrauch korreliert mit BIP",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Büroklammerverbrauch pro Kopf/Jahr",
          data: [
            { name: "Deutschland", value: 1350, fill: "#f59e0b" },
            { name: "Japan", value: 980, fill: "#ec4899" },
            { name: "USA", value: 2100, fill: "#a855f7" },
            { name: "Norwegen", value: 870, fill: "#10b981" },
            { name: "Antarktis", value: 2, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Investitionsstrategie",
        layout: "two-col",
        bullets: [
          "Diversifizierung: Silber, Gold, Bunt, XXL-Format",
          "Lagerung: Magnetische Schale auf dem Schreibtisch",
          "Exit-Strategie: Im Zweifelsfall zum Zahnarzt bringen",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
          caption: "Diversifiziertes Büroklammer-Portfolio",
        },
      },
      {
        title: "Zukunftsvision: Klammer 2.0",
        layout: "chart-focus",
        bullets: [
          "Smart-Klammer mit Bluetooth und GPS-Tracking",
          "Büroklammer-Abo-Modell (monatlich frische Klammern)",
        ],
        type: "content",
        chart: {
          type: "line",
          title: "Prognostizierter Smart-Klammer-Absatz (in Mio.)",
          data: [
            { name: "2025", value: 0.1 },
            { name: "2026", value: 2 },
            { name: "2027", value: 15 },
            { name: "2028", value: 89 },
            { name: "2030", value: 340 },
          ],
        },
      },
      {
        title: "Zusammenfassung",
        layout: "two-col",
        bullets: [
          "Die Büroklammer ist die stabilste Währung der Welt",
          "Investieren Sie jetzt, bevor es alle tun",
          "Die Zukunft gehört den Klammerbewussten",
          "Kontakt: klammerboerse@buero.fake",
        ],
        type: "conclusion",
        image: {
          url: "https://images.unsplash.com/photo-1518458028785-8b391e76d42e?w=600&h=400&fit=crop",
          caption: "Unser Versprechen: Rendite in Klammerform",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Kartoffeln als Zukunftstechnologie",
    subtitle: "Vom Acker ins Silicon Valley",
    theme: {
      accent: "#10b981",
      accentAlt: "#059669",
      bg: "from-emerald-950/80 to-teal-950/80",
      titleBg: "from-emerald-600/40 to-teal-600/40",
      border: "border-emerald-500/20",
      bullet: "bg-emerald-400",
      progress: "from-emerald-500 to-teal-500",
    },
    slides: [
      {
        title: "Die Kartoffel: Mehr als nur Beilage",
        layout: "image-full",
        bullets: [
          "4.000 Sorten weltweit – mehr als Programmiersprachen",
          "Wächst unter der Erde – wie gute Serverräume",
          "Energiedicht, robust, skalierbar",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
          caption: "Kartoffel-basiertes Rechenzentrum (Prototyp)",
        },
      },
      {
        title: "Kartoffel-Computing",
        layout: "chart-focus",
        bullets: [
          "1 Kartoffel ≈ 0,5 Volt (wissenschaftlich bestätigt)",
          "457 Kartoffeln = 1 Laptop-Ladung (theoretisch)",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Energieoutput nach Kartoffelsorte (in Volt)",
          data: [
            { name: "Festkochend", value: 0.52, fill: "#10b981" },
            { name: "Mehlig", value: 0.48, fill: "#a855f7" },
            { name: "Süßkartoffel", value: 0.61, fill: "#f59e0b" },
            { name: "Pommes-Form", value: 0.03, fill: "#ec4899" },
            { name: "Gnocchi", value: 0.0, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "0,5 Volt",
        layout: "big-number",
        bigNumber: "0,5 V",
        bigNumberSub: "Energieoutput einer einzelnen Kartoffel – mehr als mancher Mitarbeiter am Montag",
        bullets: [
          "457 Kartoffeln = 1 Laptop-Ladung",
          "Erneuerbare Energie: Einfach neue pflanzen",
        ],
        type: "content",
      },
      {
        title: "Kartoffel-basierte KI",
        layout: "two-col",
        bullets: [
          "Stärkebasierte neuronale Netze",
          "Training mit Kartoffeldaten (Größe, Gewicht, Augenanzahl)",
          "Ergebnis: KI, die zuverlässig Pommes von Wedges unterscheidet",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
          caption: "Die KI wird mit Premium-Kartoffeln trainiert",
        },
      },
      {
        title: "Kartoffel-Blockchain",
        layout: "chart-focus",
        bullets: [
          "Proof of Steak: Validierung durch Bratkartoffeln",
        ],
        type: "content",
        chart: {
          type: "line",
          title: "Kartoffelcoin-Kurs (letzte 7 Tage)",
          data: [
            { name: "Mo", value: 3.2 },
            { name: "Di", value: 4.1 },
            { name: "Mi", value: 2.8 },
            { name: "Do", value: 7.5 },
            { name: "Fr", value: 1.2 },
            { name: "Sa", value: 12.3 },
            { name: "So", value: 0.4 },
          ],
        },
      },
      {
        title: "»Bin festkochend und suche neue Herausforderungen.«",
        subtitle: "– Profil auf KartoffelNet (LinkedIn für Knollen)",
        layout: "quote",
        type: "content",
      },
      {
        title: "Kartoffel als Baumaterial",
        layout: "two-col",
        bullets: [
          "Kartoffelstärke-Beton: 40% leichter als herkömmlich",
          "Wände aus Kartoffelpüree – natürliche Isolierung",
          "Im Brandfall: Angenehmer Bratkartoffelgeruch",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Kartoffelbeton vs. Standard (kg/m²)",
          data: [
            { name: "Druckfest.", kartoffel: 45, standard: 60 },
            { name: "Isolierung", kartoffel: 92, standard: 55 },
            { name: "Geruch", kartoffel: 100, standard: 2 },
            { name: "Essbarkeit", kartoffel: 85, standard: 0 },
          ],
        },
      },
      {
        title: "Kartoffel im Weltraum",
        layout: "image-full",
        bullets: [
          "NASA-Studie: Kartoffeln wachsen auf dem Mars",
          "Kartoffel als Astronautennahrung: Kompakt, vielseitig, tröstlich",
          "SpudX-Mission: Erste autonome Kartoffel in der Umlaufbahn",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop",
          caption: "SpudX-1 beim Start (Künstlerische Darstellung)",
        },
      },
      {
        title: "Marktanalyse & Wettbewerb",
        layout: "two-col",
        bullets: [
          "Größter Konkurrent: Die Süßkartoffel (Hipster-Segment)",
          "Reis: Günstig, aber langweilig",
          "Kartoffel: Einziges Nahrungsmittel mit Tech-Potenzial",
        ],
        type: "content",
        chart: {
          type: "pie",
          title: "Tech-Readiness nach Nahrungsmittel",
          data: [
            { name: "Kartoffel", value: 45, fill: "#10b981" },
            { name: "Süßkartoffel", value: 20, fill: "#ec4899" },
            { name: "Reis", value: 5, fill: "#f59e0b" },
            { name: "Pasta", value: 3, fill: "#a855f7" },
            { name: "Toast", value: 27, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Ausblick 2030",
        layout: "two-col",
        bullets: [
          "Kartoffel-Powered Data Centers weltweit",
          "IPO der »Kartoffel AG« (Bewertung: 3 Billionen Knollen)",
          "Kartoffel als offizielle Weltwährung im Gespräch",
          "Fragen? Kritik? Kartoffel?",
        ],
        type: "conclusion",
        image: {
          url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
          caption: "Hauptquartier der Kartoffel AG (Vision 2030)",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Synergiepotenziale im privaten Wäschemanagement",
    subtitle: "Optimierung textiler Workflows im häuslichen Umfeld",
    theme: {
      accent: "#ec4899",
      accentAlt: "#db2777",
      bg: "from-pink-950/80 to-rose-950/80",
      titleBg: "from-pink-600/40 to-rose-600/40",
      border: "border-pink-500/20",
      bullet: "bg-pink-400",
      progress: "from-pink-500 to-rose-500",
    },
    slides: [
      {
        title: "67%",
        layout: "big-number",
        bigNumber: "67%",
        bigNumberSub: "aller Socken gehen beim Waschen verloren. Wohin verschwinden sie?",
        bullets: [
          "Durchschnittliche Wäscheberg-Verweilzeit: 4,7 Tage",
          "Bügelstau: Das unterschätzte Risiko",
        ],
        type: "content",
      },
      {
        title: "Verbleib von Socken",
        layout: "chart-focus",
        bullets: [
          "Die Frage: Kann man das optimieren?",
        ],
        type: "content",
        chart: {
          type: "pie",
          title: "Verbleib von Socken nach dem Waschen",
          data: [
            { name: "Gefunden (Paar)", value: 33, fill: "#10b981" },
            { name: "Einzelgänger", value: 28, fill: "#f59e0b" },
            { name: "Unter dem Bett", value: 15, fill: "#ec4899" },
            { name: "Wurmloch", value: 14, fill: "#a855f7" },
            { name: "Hund", value: 10, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Ist-Analyse: Der typische Wäscheprozess",
        layout: "image-full",
        bullets: [
          "Sammeln → Vergessen → Riechen → Waschen → Trocknen → Knüllen → Stapeln",
          "Durchlaufzeit: 1–3 Wochen",
          "Fehlerquote: Farbunfälle ca. 12% pro Quartal",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
          caption: "Datenanalyse des Wäscheprozesses (Real-Time Dashboard)",
        },
      },
      {
        title: "Benchmarking: Wer wäscht am besten?",
        layout: "chart-focus",
        bullets: [
          "Oma: Goldstandard (aber nicht skalierbar)",
          "Hotel: Industriestandard – unser Vorbild?",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Wäsche-Qualitätsindex nach Haushalt",
          data: [
            { name: "Oma", value: 98, fill: "#ec4899" },
            { name: "Hotel", value: 85, fill: "#a855f7" },
            { name: "WG", value: 34, fill: "#f59e0b" },
            { name: "Single", value: 22, fill: "#10b981" },
            { name: "Student", value: 7, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "»Wenn eine Socke verschwindet – existiert sie noch?«",
        subtitle: "– Schrödingers Socke: Gleichzeitig in der Trommel und nicht",
        layout: "quote",
        type: "content",
      },
      {
        title: "Optimierungsansätze",
        layout: "two-col",
        bullets: [
          "Socken-Pairing vor dem Waschen (Pre-Sorting)",
          "Farbcodierte Wäschekörbe (Kanban-System)",
          "Bügelfreie Kleidung als strategische Investition",
          "Outsourcing an Mitbewohner oder Familienmitglieder",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
          caption: "Kanban-Board für textile Prozessoptimierung",
        },
      },
      {
        title: "Der Wäsche-Bot",
        layout: "two-col",
        bullets: [
          "Roboterarm sortiert, faltet und bügelt autonom",
          "KI erkennt Sockenpaare mit 73% Genauigkeit",
          "Preis: Nur 14.999 € (weniger als 200 Jahre Waschsalon)",
        ],
        type: "content",
        chart: {
          type: "line",
          title: "Wäsche-Bot: Faltgenauigkeit über Zeit (%)",
          data: [
            { name: "Tag 1", value: 12 },
            { name: "Woche 1", value: 34 },
            { name: "Monat 1", value: 58 },
            { name: "Monat 6", value: 73 },
            { name: "Jahr 1", value: 74 },
            { name: "Jahr 2", value: 73 },
          ],
        },
      },
      {
        title: "KPI-Dashboard für Wäsche",
        layout: "chart-focus",
        bullets: [
          "Alle KPIs deutlich unter Zielwert",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Wäsche-KPIs: Ist vs. Soll",
          data: [
            { name: "Socken-Verlust", ist: 67, soll: 5 },
            { name: "Zykluszeit (h)", ist: 168, soll: 48 },
            { name: "Bügelquote %", ist: 12, soll: 100 },
            { name: "Zufriedenheit", ist: 2, soll: 5 },
          ],
        },
      },
      {
        title: "38 Jahre",
        layout: "big-number",
        bigNumber: "38 J.",
        bigNumberSub: "bis zum Break-Even unserer Wäsche-Optimierung. Aber der emotionale Gewinn ist unbezahlbar.",
        bullets: [
          "Investition: 47 € (Wäschekörbe, Etiketten, Stoppuhr)",
          "Einsparung: 12 Minuten pro Woche weniger Sockensuche",
        ],
        type: "content",
      },
      {
        title: "Fazit",
        layout: "two-col",
        bullets: [
          "Wäschemanagement ist die letzte unoptimierte Frontier",
          "Wer seine Wäsche im Griff hat, hat sein Leben im Griff",
          "Die Socke von heute ist die Währung von morgen",
          "Vielen Dank – und bitte: faltet eure Wäsche.",
        ],
        type: "conclusion",
        image: {
          url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop",
          caption: "Der Weg zur textilen Erleuchtung",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Strategische Fehler bei intergalaktischen Bewerbungsgesprächen",
    subtitle: "Wie man es in der Milchstraße NICHT macht",
    theme: {
      accent: "#6366f1",
      accentAlt: "#4f46e5",
      bg: "from-indigo-950/80 to-blue-950/80",
      titleBg: "from-indigo-600/40 to-blue-600/40",
      border: "border-indigo-500/20",
      bullet: "bg-indigo-400",
      progress: "from-indigo-500 to-blue-500",
    },
    slides: [
      {
        title: "89%",
        layout: "big-number",
        bigNumber: "89%",
        bigNumberSub: "aller intergalaktischen Bewerber scheitern im Gespräch. Warum? Kulturelle Missverständnisse.",
        bullets: [
          "73 Millionen offene Stellen auf der Erde allein",
          "Der intergalaktische Arbeitsmarkt wächst",
        ],
        type: "content",
      },
      {
        title: "Fehler #1: Falscher Händedruck",
        layout: "image-full",
        bullets: [
          "Bei Klingonen: Zu sanft = Beleidigung",
          "Bei Vulkaniern: Bitte nur den Vulkanier-Gruß",
          "Bei Tentakel-Spezies: Alle Tentakel gleichzeitig schütteln",
          "Bei Energiewesen: Gar nicht anfassen!",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1531746790095-e5995eb25e03?w=600&h=400&fit=crop",
          caption: "Korrekte Begrüßungstechnik (Spezies 47-B)",
        },
      },
      {
        title: "Fehler #2: Unpassende Kleidung",
        layout: "chart-focus",
        bullets: [
          "Raumanzug: Overdressed (außer auf der ISS)",
          "Gar nichts: Auf einigen Planeten normal",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Dresscode-Akzeptanz nach Planet",
          data: [
            { name: "Anzug", value: 72, fill: "#6366f1" },
            { name: "Raumanzug", value: 45, fill: "#ec4899" },
            { name: "Hawaii", value: 23, fill: "#f59e0b" },
            { name: "Toga", value: 56, fill: "#10b981" },
            { name: "Nichts", value: 8, fill: "#a855f7" },
          ],
        },
      },
      {
        title: "Fehler #3: Lebenslauf-Lügen",
        layout: "two-col",
        bullets: [
          "»Ich spreche fließend Klingonisch« – wird getestet!",
          "»Erfahrung mit Lichtgeschwindigkeit« – Referenzen werden geprüft",
          "»Teamplayer in 4 Dimensionen« – Was ist die 4. genau?",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1450101499163-c8848e968ab7?w=600&h=400&fit=crop",
          caption: "Lebenslauf-Prüfung durch die Galaktische Personalabteilung",
        },
      },
      {
        title: "Fehler #4: Gehaltsverhandlung",
        layout: "two-col",
        bullets: [
          "Auf Ferenginar: Immer mehr verlangen (Erwerbsregel Nr. 1)",
          "Auf Vulkan: Logisches Argument schlägt Emotion",
          "Im Borg-Kollektiv: Gehalt ist irrelevant. Widerstand auch.",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Durchschnittsgehalt nach Quadrant (in Latinum)",
          data: [
            { name: "Alpha", value: 340, fill: "#6366f1" },
            { name: "Beta", value: 280, fill: "#ec4899" },
            { name: "Gamma", value: 520, fill: "#f59e0b" },
            { name: "Delta", value: 0, fill: "#10b981" },
          ],
        },
      },
      {
        title: "»Gehalt ist irrelevant. Widerstand auch.«",
        subtitle: "– Borg-Kollektiv, Personalabteilung",
        layout: "quote",
        type: "content",
      },
      {
        title: "Kulturelle Fettnäpfchen",
        layout: "two-col",
        bullets: [
          "Auf Kronos: Nie das Essen ablehnen (auch wenn es lebt)",
          "Auf Betazed: Lügen zwecklos – Telepathen merken alles",
          "Auf Risa: Alles zu locker nehmen – es ist ein Vorstellungsgespräch",
        ],
        type: "content",
        chart: {
          type: "pie",
          title: "Häufigste kulturelle Fettnäpfchen",
          data: [
            { name: "Falsches Essen", value: 32, fill: "#6366f1" },
            { name: "Begrüßung", value: 28, fill: "#ec4899" },
            { name: "Augenkontakt", value: 18, fill: "#f59e0b" },
            { name: "Zeitverständnis", value: 15, fill: "#10b981" },
            { name: "Gravitationsfehler", value: 7, fill: "#a855f7" },
          ],
        },
      },
      {
        title: "Best Practices",
        layout: "image-full",
        bullets: [
          "Vorher die Atmosphäre des Planeten prüfen (wörtlich)",
          "Universalübersetzer immer aufgeladen lassen",
          "Backup-Outfit für unerwartete Gravitationsverhältnisse",
          "Referenzen aus mindestens 2 Sonnensystemen mitbringen",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
          caption: "Vorbereitung auf das Interview (Planeten-Recherche)",
        },
      },
      {
        title: "Erfolgsquoten",
        layout: "chart-focus",
        bullets: [
          "Dieser Vortrag: 47% Erfolgsquote (unbestätigt)",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Erfolgsquote nach Vorbereitungsmethode (%)",
          data: [
            { name: "Keine", value: 3, fill: "#ef4444" },
            { name: "Wikipedia", value: 12, fill: "#f59e0b" },
            { name: "Dieser Vortrag", value: 47, fill: "#6366f1" },
            { name: "Alien-Coach", value: 89, fill: "#10b981" },
            { name: "Bestechung", value: 94, fill: "#a855f7" },
          ],
        },
      },
      {
        title: "Zusammenfassung",
        layout: "two-col",
        bullets: [
          "Recherche ist alles – auch intergalaktisch",
          "Kulturelle Sensibilität > technische Skills",
          "Im Zweifelsfall: Lächeln (aber nicht bei Spezies ohne Mund)",
          "Möge die Bewerbung mit euch sein!",
        ],
        type: "conclusion",
        image: {
          url: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=600&h=400&fit=crop",
          caption: "Viel Erfolg da draußen!",
        },
      },
    ],
  },
];

export default presentations;
