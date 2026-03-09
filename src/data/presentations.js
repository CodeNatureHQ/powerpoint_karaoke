// Each presentation has a unique color theme and varied slide layouts
// Layouts: "two-col" (bullets + visual), "image-full" (full-width image behind),
//          "big-number" (large stat + text), "section" (section divider),
//          "chart-focus" (chart is hero), "quote" (large quote style)

const presentations = [
  {
    id: 1,
    title: "Warum Tauben die wahren Manager der Innenstadt sind",
    subtitle: "Eine ornithologische Führungsanalyse",
    coverImage: "https://images.unsplash.com/photo-1741384019035-9832956a2037?w=600&h=400&fit=crop",
    template: "corporate",
    mood: "corporate",
    theme: {
      accent: "#2563eb",
      accentAlt: "#1d4ed8",
      gradient: "from-blue-600 to-blue-800",
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
          url: "https://images.unsplash.com/photo-1604082668161-d4fbd42d40cb?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1713622979401-2e253ff636d8?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1737942301039-ddfb53a454df?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1531264993164-04a70aa46453?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1758963335844-28fc0701aab8?w=600&h=400&fit=crop",
          caption: "Zukünftiger Firmensitz der Tauben AG",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Die geheime Ökonomie der Büroklammer",
    subtitle: "Warum die Büroklammer das wahre Zahlungsmittel der Zukunft ist",
    coverImage: "https://images.unsplash.com/photo-1512278753435-c834ff8a597a?w=600&h=400&fit=crop",
    template: "sidebar",
    mood: "bossa",
    theme: {
      accent: "#d97706",
      accentAlt: "#b45309",
      gradient: "from-amber-600 to-orange-700",
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
          url: "https://images.unsplash.com/photo-1531347334762-59780ece5c76?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1516134162643-d3a8f6ef0623?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1562217180-021f74991332?w=600&h=400&fit=crop",
          caption: "Unser Versprechen: Rendite in Klammerform",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Kartoffeln als Zukunftstechnologie",
    subtitle: "Vom Acker ins Silicon Valley",
    coverImage: "https://images.unsplash.com/photo-1651248341193-a4035e081fbc?w=600&h=400&fit=crop",
    template: "gradient",
    mood: "tech",
    theme: {
      accent: "#10b981",
      accentAlt: "#059669",
      gradient: "from-emerald-700 via-teal-700 to-cyan-800",
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
          url: "https://images.unsplash.com/photo-1659738538929-715b764d59f9?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1644439017477-befade11bd83?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1457364559154-aa2644600ebb?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1764866557879-059e1db80a50?w=600&h=400&fit=crop",
          caption: "Hauptquartier der Kartoffel AG (Vision 2030)",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Synergiepotenziale im privaten Wäschemanagement",
    subtitle: "Optimierung textiler Workflows im häuslichen Umfeld",
    coverImage: "https://images.unsplash.com/photo-1752805869096-9b149e6effa1?w=600&h=400&fit=crop",
    template: "minimal",
    mood: "minimal",
    theme: {
      accent: "#be185d",
      accentAlt: "#9d174d",
      gradient: "from-pink-600 to-rose-700",
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
          url: "https://images.unsplash.com/photo-1755657722450-26f64fbcddbd?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1746557416454-00c814b84318?w=600&h=400&fit=crop",
          caption: "Der Weg zur textilen Erleuchtung",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Strategische Fehler bei intergalaktischen Bewerbungsgesprächen",
    subtitle: "Wie man es in der Milchstraße NICHT macht",
    coverImage: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=600&h=400&fit=crop",
    template: "dark",
    mood: "space",
    theme: {
      accent: "#818cf8",
      accentAlt: "#6366f1",
      gradient: "from-indigo-900 to-slate-900",
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
          url: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1756747646179-d5652667914e?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1634176866089-b633f4aec882?w=600&h=400&fit=crop",
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
          url: "https://images.unsplash.com/photo-1742626157111-59f3f1019a8a?w=600&h=400&fit=crop",
          caption: "Viel Erfolg da draußen!",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Projektmanagement auf dem Todesstern",
    subtitle: "Warum das Imperium dringend einen Scrum Master braucht",
    coverImage: "https://images.unsplash.com/photo-1730855793881-a61bc8fb54d6?w=600&h=400&fit=crop",
    template: "bold-header",
    mood: "imperial",
    theme: {
      accent: "#dc2626",
      accentAlt: "#b91c1c",
      gradient: "from-red-700 to-gray-900",
    },
    slides: [
      {
        title: "2 Todessterne",
        layout: "big-number",
        bigNumber: "2",
        bigNumberSub: "Todessterne gebaut. 2 zerstört. 0 aus den Fehlern gelernt. Klassisches Wasserfall-Problem.",
        bullets: [
          "Budget: 1 Trilliarde Imperiale Credits",
          "Bauzeit: 20 Jahre (ohne agile Methoden)",
        ],
        type: "content",
      },
      {
        title: "Projekthistorie",
        layout: "chart-focus",
        bullets: [
          "Todesstern I: Lüftungsschacht-Bug nie gefixt",
          "Todesstern II: In der Beta-Phase zerstört",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Imperiale Großprojekte: Budget vs. Ergebnis",
          data: [
            { name: "Todesstern I", budget: 100, erfolg: 3 },
            { name: "Todesstern II", budget: 150, erfolg: 1 },
            { name: "Starkiller", budget: 200, erfolg: 2 },
            { name: "Star Destroyer", budget: 30, erfolg: 78 },
          ],
        },
      },
      {
        title: "»Ich finde Ihren Mangel an Agilität beklagenswert.«",
        subtitle: "– Darth Vader, Sprint Review #47",
        layout: "quote",
        type: "content",
      },
      {
        title: "Der Lüftungsschacht: Eine Retrospektive",
        layout: "image-full",
        bullets: [
          "Ticket #4857: »Thermischer Abzugsschacht ungesichert«",
          "Priorität: Niedrig (Wer fliegt schon da rein?)",
          "Status: Won't Fix → Wontfix → Todesstern explodiert",
          "Lesson Learned: Jeder Bug ist ein potenzieller Exploit",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1757271453507-bbee317318a8?w=600&h=400&fit=crop",
          caption: "Sicherheitsanalyse des Lüftungsschachts (Querschnitt)",
        },
      },
      {
        title: "Die dunkle Seite des Wasserfalls",
        layout: "two-col",
        bullets: [
          "20 Jahre Bauzeit ohne ein einziges User-Feedback",
          "Kein MVP – direkt zum Planet-Zerstörer",
          "Zero Testing: »Wozu testen? Wir haben die Macht.«",
          "Stakeholder-Meeting nur mit Force-Choke",
        ],
        type: "content",
        chart: {
          type: "pie",
          title: "Zeitverteilung im Todesstern-Projekt",
          data: [
            { name: "Planung", value: 5, fill: "#ef4444" },
            { name: "Bau", value: 60, fill: "#6366f1" },
            { name: "Meetings", value: 20, fill: "#f59e0b" },
            { name: "Force-Choke", value: 10, fill: "#a855f7" },
            { name: "Testing", value: 5, fill: "#10b981" },
          ],
        },
      },
      {
        title: "Mitarbeiterfluktuation",
        layout: "chart-focus",
        bullets: [
          "Kündigungsgrund #1: Force-Choke durch Vorgesetzten",
        ],
        type: "content",
        chart: {
          type: "line",
          title: "Mitarbeiterzufriedenheit im Imperium (1–10)",
          data: [
            { name: "Einstellung", value: 8 },
            { name: "Woche 1", value: 7 },
            { name: "Monat 1", value: 5 },
            { name: "Erstes Meeting", value: 3 },
            { name: "Erster Choke", value: 1 },
            { name: "Resignation", value: 0.5 },
          ],
        },
      },
      {
        title: "Scrum bei den Rebellen",
        layout: "two-col",
        bullets: [
          "Kleine, cross-funktionale Teams (Luke, Han, Leia, Chewie)",
          "Iteratives Vorgehen: Erst Pläne stehlen, dann angreifen",
          "Daily Standup im Millennium Falken",
          "Sprint-Ziel: Todesstern zerstören (erledigt in 1 Sprint)",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1758873269035-aae0e1fd3422?w=600&h=400&fit=crop",
          caption: "Agiles Teammeeting der Rebellenallianz",
        },
      },
      {
        title: "HR-Probleme des Imperiums",
        layout: "two-col",
        bullets: [
          "Dress Code: Nur Schwarz oder Weiß (keine Individualität)",
          "Homeoffice: Nicht möglich (außer für Sith Lords)",
          "Weiterbildung: »Du brauchst keine Weiterbildung. Du brauchst die Macht.«",
          "Benefits: Kostenlose Atemmaske (nur für Vader)",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Mitarbeiter-Benefits: Imperium vs. Rebellen",
          data: [
            { name: "Homeoffice", imperium: 0, rebellen: 95 },
            { name: "Teamgeist", imperium: 12, rebellen: 88 },
            { name: "Überlebens-\nchance", imperium: 34, rebellen: 67 },
            { name: "Kantine", imperium: 78, rebellen: 23 },
          ],
        },
      },
      {
        title: "12 Parsec",
        layout: "big-number",
        bigNumber: "12 pc",
        bigNumberSub: "Kessel Run in 12 Parsec – das ist agile Delivery. Das Imperium braucht dafür 20 Jahre und einen ganzen Mond.",
        bullets: [
          "Rebellenansatz: Schnell, iterativ, improvisiert",
          "Imperiumsansatz: Groß, langsam, katastrophal",
        ],
        type: "content",
      },
      {
        title: "Empfehlung für das Imperium",
        layout: "two-col",
        bullets: [
          "Scrum Master statt Sith Master einstellen",
          "Code Reviews statt Force-Choke bei Fehlern",
          "Kleinere Iterationen: Erst Mond-Laser, dann Planet-Laser",
          "Retrospektive: »Was lief gut? Was war die dunkle Seite?«",
          "Möge der Sprint mit euch sein.",
        ],
        type: "conclusion",
        image: {
          url: "https://images.unsplash.com/photo-1758691737060-3814f16d5aba?w=600&h=400&fit=crop",
          caption: "Der neue agile Workspace des Imperiums (Konzept)",
        },
      },
    ],
  },
];

export default presentations;
