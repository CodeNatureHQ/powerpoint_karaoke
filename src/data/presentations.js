// Unsplash images via their free image service (no API key needed)
// Images are intentionally mismatched with slide content for maximum absurdity

const presentations = [
  {
    id: 1,
    title: "Warum Tauben die wahren Manager der Innenstadt sind",
    subtitle: "Eine ornithologische Führungsanalyse",
    slides: [
      {
        title: "Agenda",
        bullets: [
          "Die urbane Taube: Ein Führungsprofil",
          "Strategische Positionierung auf dem Marktplatz",
          "Ressourcenverteilung: Brotkrumen und Budgets",
          "Teamdynamik im Schwarm",
        ],
        type: "agenda",
        image: {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          caption: "Typische Führungskraft (Symbolbild)",
        },
      },
      {
        title: "Das Profil einer Führungstaube",
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
        bullets: [
          "Immer am Point-of-Sale (Bäckerei, Marktstand)",
          "First-Mover-Advantage bei herabfallenden Pommes",
          "Exzellente Standortanalyse: Bankdächer, Brücken, Statuen",
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
        title: "Teamdynamik im Schwarm",
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
        title: "Fazit & Empfehlung",
        bullets: [
          "Tauben sind die unterschätztesten Manager unserer Zeit",
          "Jedes Unternehmen braucht einen Chief Pigeon Officer",
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
    slides: [
      {
        title: "Die Büroklammer – Ein übersehener Wirtschaftsfaktor",
        bullets: [
          "Weltweite Produktion: 37 Milliarden Stück pro Jahr (ungefähr)",
          "Marktvolumen: Unberechenbar, da viele im Sofa verschwinden",
          "Status: Offizielles Tauschmittel in mindestens 3 Büros",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
          caption: "Börsenkurs der Büroklammer (Echtzeit)",
        },
      },
      {
        title: "Historischer Kontext",
        bullets: [
          "1899: Erfindung der modernen Büroklammer",
          "1987: Erste dokumentierte Büroklammer-Währung in der Buchhaltung",
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
        bullets: [
          "Phase 1: Kauf im 100er-Pack",
          "Phase 2: 3 werden benutzt, 97 verschwinden",
          "Phase 3: Mysteriöses Auftauchen in Hosentaschen",
          "Phase 4: Einsatz als Schloss-Öffner oder Lesezeichen",
        ],
        type: "content",
        chart: {
          type: "pie",
          title: "Verbleib einer 100er-Packung Büroklammern",
          data: [
            { name: "Bestimmungsgemäß", value: 3, fill: "#a855f7" },
            { name: "Im Sofa", value: 27, fill: "#ec4899" },
            { name: "Hosentasche", value: 18, fill: "#f59e0b" },
            { name: "Schublade", value: 22, fill: "#10b981" },
            { name: "Parallel-universum", value: 30, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Büroklammer vs. Bitcoin",
        bullets: [
          "Büroklammer: physisch, real, biegbar",
          "Bitcoin: digital, volatil, nicht biegbar",
          "Klarer Sieger: Büroklammer",
          "Bonus: Man kann aus Büroklammern Skulpturen bauen",
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
        title: "Investitionsstrategie",
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
        title: "Zusammenfassung",
        bullets: [
          "Die Büroklammer ist die stabilste Währung der Welt",
          "Investieren Sie jetzt, bevor es alle tun",
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
    slides: [
      {
        title: "Die Kartoffel: Mehr als nur Beilage",
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
        bullets: [
          "1 Kartoffel ≈ 0,5 Volt (wissenschaftlich bestätigt)",
          "457 Kartoffeln = 1 Laptop-Ladung (theoretisch)",
          "Erneuerbare Energie: Einfach neue Kartoffeln pflanzen",
          "Kartoffel-Cloud: Dezentrale Datenspeicherung im Keller",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Energieoutput nach Kartoffelsorte (in Volt)",
          data: [
            { name: "Festkochend", value: 0.52, fill: "#a855f7" },
            { name: "Mehlig", value: 0.48, fill: "#ec4899" },
            { name: "Süßkartoffel", value: 0.61, fill: "#f59e0b" },
            { name: "Pommes-Form", value: 0.03, fill: "#10b981" },
            { name: "Gnocchi", value: 0.00, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Kartoffel-basierte KI",
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
        bullets: [
          "Jede Kartoffel bekommt eine eindeutige ID",
          "Transaktionen: Kartoffel A → Kartoffel B (Tauschhandel)",
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
        title: "Case Study: Smart Kartoffel",
        bullets: [
          "IoT-Sensor im Kartoffelsack",
          "Echtzeit-Monitoring: Feuchtigkeit, Temperatur, Keimstatus",
          "Automatischer Alert: »Ihre Kartoffel keimt – bitte handeln!«",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
          caption: "Innenleben einer Smart Kartoffel (Querschnitt)",
        },
      },
      {
        title: "Ausblick 2030",
        bullets: [
          "Kartoffel-Powered Data Centers",
          "Erste Kartoffel im Weltraum (SpudX-Mission)",
          "IPO der »Kartoffel AG« erwartet",
          "Fragen? Kritik? Kartoffel?",
        ],
        type: "conclusion",
        image: {
          url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop",
          caption: "SpudX-1 beim Start (Künstlerische Darstellung)",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Synergiepotenziale im privaten Wäschemanagement",
    subtitle: "Optimierung textiler Workflows im häuslichen Umfeld",
    slides: [
      {
        title: "Problemstellung",
        bullets: [
          "67% aller Socken gehen beim Waschen verloren",
          "Durchschnittliche Wäscheberg-Verweilzeit: 4,7 Tage",
          "Bügelstau: Das unterschätzte Risiko",
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
        bullets: [
          "Oma: Goldstandard (aber nicht skalierbar)",
          "WG: Agil, aber fehleranfällig",
          "Single-Haushalt: Lean, aber schmutzig",
          "Hotel: Industriestandard – unser Vorbild?",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Wäsche-Qualitätsindex nach Haushalt",
          data: [
            { name: "Oma", value: 98, fill: "#a855f7" },
            { name: "Hotel", value: 85, fill: "#ec4899" },
            { name: "WG", value: 34, fill: "#f59e0b" },
            { name: "Single", value: 22, fill: "#10b981" },
            { name: "Student", value: 7, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Optimierungsansätze",
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
        title: "KPI-Dashboard für Wäsche",
        bullets: [
          "Socken-Verlustrate < 5%",
          "Wäsche-Zykluszeit < 48h",
          "Bügelquote: 100% (ambitioniert, aber nötig)",
          "Kundenzufriedenheit (Eigenrating): ≥ 4/5 Sterne",
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
        title: "Implementierungsplan",
        bullets: [
          "Q1: Wäschekörbe kaufen",
          "Q2: Familienmitglieder schulen",
          "Q3: Pilotprojekt »Socken-Tracker«",
          "Q4: Review und Retrospektive",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
          caption: "Strategieplanung in der Waschküche",
        },
      },
      {
        title: "Fazit",
        bullets: [
          "Wäschemanagement ist die letzte unoptimierte Frontier",
          "Wer seine Wäsche im Griff hat, hat sein Leben im Griff",
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
    slides: [
      {
        title: "Einleitung",
        bullets: [
          "Der intergalaktische Arbeitsmarkt wächst",
          "73 Millionen offene Stellen auf der Erde allein",
          "Doch: 89% aller Bewerber scheitern im Gespräch",
          "Warum? Kulturelle Missverständnisse.",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=600&h=400&fit=crop",
          caption: "Der intergalaktische Arbeitsmarkt (Überblick)",
        },
      },
      {
        title: "Fehler #1: Falscher Händedruck",
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
        bullets: [
          "Raumanzug: Overdressed (außer auf der ISS)",
          "Hawaiihemd: Nur akzeptabel auf Risa",
          "Gar nichts: Auf einigen Planeten normal, auf den meisten nicht",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Dresscode-Akzeptanz nach Planet",
          data: [
            { name: "Anzug", value: 72, fill: "#a855f7" },
            { name: "Raumanzug", value: 45, fill: "#ec4899" },
            { name: "Hawaii", value: 23, fill: "#f59e0b" },
            { name: "Toga", value: 56, fill: "#10b981" },
            { name: "Nichts", value: 8, fill: "#6366f1" },
          ],
        },
      },
      {
        title: "Fehler #3: Lebenslauf-Lügen",
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
        bullets: [
          "Auf Ferenginar: Immer mehr verlangen (Erwerbsregel Nr. 1)",
          "Auf Vulkan: Logisches Argument schlägt Emotion",
          "Auf der Erde: Einfach googeln, was andere verdienen",
          "Im Borg-Kollektiv: Gehalt ist irrelevant. Widerstand auch.",
        ],
        type: "content",
        chart: {
          type: "bar",
          title: "Durchschnittsgehalt nach Galaxie-Quadrant (in Latinum)",
          data: [
            { name: "Alpha", value: 340, fill: "#a855f7" },
            { name: "Beta", value: 280, fill: "#ec4899" },
            { name: "Gamma", value: 520, fill: "#f59e0b" },
            { name: "Delta", value: 0, fill: "#10b981" },
          ],
        },
      },
      {
        title: "Fehler #5: Die falsche Abschlussfrage",
        bullets: [
          "NICHT fragen: »Wann kann ich Urlaub nehmen?«",
          "NICHT fragen: »Muss ich wirklich auf diesem Planeten wohnen?«",
          "BESSER: »Wie ist die Work-Life-Orbit-Balance?«",
        ],
        type: "content",
        image: {
          url: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&h=400&fit=crop",
          caption: "Work-Life-Orbit-Balance: Zufriedene Mitarbeiter im Quadrant Gamma",
        },
      },
      {
        title: "Zusammenfassung",
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
