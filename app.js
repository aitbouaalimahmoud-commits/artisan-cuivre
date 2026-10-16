/* ==========================================================================
   PRODUCT DATASET
   ========================================================================== */
const products = [
    {
        id: 1,
        title: "Lanterne Royale Goutte en Laiton Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 249 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.02.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.02.jpeg", "assets/WhatsApp Image 2026-09-03 at 11.53.08 (2).jpeg"],
        description: "Lanterne suspendue majestueuse en laiton doré façonnée à la main en forme de goutte. Ses perforations fines projettent des motifs géométriques féeriques sur les murs et le plafond.",
        dimensions: "Diamètre 35 cm",
        material: "Laiton massif doré",
        technique: "Ciselure et martelage manuel",
        availability: "En stock (3 pièces)"
    },
    {
        id: 2,
        title: "Grand Lustre Goutte Pointue Orientale",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 149 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.03 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.03 (1).jpeg"],
        description: "Lustre à suspension fine en laiton sculpté avec une finition en pointe élégante. Il apporte un charme oriental incomparable à tout espace intérieur.",
        dimensions: "Diamètre 30 cm",
        material: "Laiton finement percé",
        technique: "Découpe artisanale et polissage miroir",
        availability: "En stock (2 pièces)"
    },
    {
        id: 3,
        title: "Suspension Orientale Écailles Ciselées",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 350 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.03.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.03.jpeg"],
        description: "Suspension en dôme inversé arborant des motifs d'écailles maritimes minutieusement percés. Une diffusion de lumière douce et enveloppante.",
        dimensions: "Diamètre 30 cm",
        material: "Laiton patiné",
        technique: "Percement à la main & brunissage",
        availability: "En stock"
    },
    {
        id: 4,
        title: "Lanterne Baladeuse Goutte Sablée",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 250 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (1).jpeg"],
        description: "Lanterne d'ambiance à poser ou à suspendre en laiton doré brossé avec pavillon assorti. Parfaite pour créer une atmosphère chaleureuse.",
        dimensions: "Diamètre 30 cm",
        material: "Cuivre jaune brossé",
        technique: "Poinçonnage manuel fin",
        availability: "En stock (4 pièces)"
    },
    {
        id: 5,
        title: "Suspension Bombe en Cuivre Doré",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 400 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (2).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (2).jpeg", "assets/WhatsApp Image 2026-09-03 at 11.53.09.jpeg"],
        description: "Suspension aux volumes généreux et galbés en laiton perforé point par point. Crée un éclairage central tamisé et romantique.",
        dimensions: "Diamètre 30 cm",
        material: "Laiton pur et chaîne à maillons",
        technique: "Ciselure au marteau & emboutissage",
        availability: "En stock"
    },
    {
        id: 6,
        title: "Lustre Dôme Contemporain Bruni",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 499 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (3).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (3).jpeg"],
        description: "Dôme moderne en cuivre bruni à la patine sombre, rehaussé d'une bande ajourée minutieuse à la base. Mariage élégant entre modernité et artisanat traditionnel.",
        dimensions: "Diamètre 25 cm",
        material: "Cuivre bruni patiné",
        technique: "Tournage & frise ciselée",
        availability: "En stock (3 pièces)"
    },
    {
        id: 7,
        title: "Lanterne Cylindrique Andalouse",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 599 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (4).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (4).jpeg"],
        description: "Suspension cylindrique épurée en laiton gravé aux arabesques inspirées de l'architecture andalouse. Idéale pour les couloirs ou les coins lecture.",
        dimensions: "Diamètre 35 cm",
        material: "Cuivre jaune massif",
        technique: "Ciselage à l'échoppe",
        availability: "En stock"
    },
    {
        id: 8,
        title: "Lustre Multi-Niveaux Architectural",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "3 600 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04.jpeg"],
        description: "Lustre monumental à double tambour ajouré de motifs géométriques complexes. Une véritable pièce maîtresse architecturale pour grands espaces.",
        dimensions: "Diamètre 30 cm",
        material: "Laiton doré poli",
        technique: "Découpe au biseau & assemblage manuel",
        availability: "Sur commande (7 jours)"
    },
    {
        id: 9,
        title: "Lanterne Andalouse Ambiance Féerique",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 675 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.05 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.05 (1).jpeg"],
        description: "Suspension en forme de poire en cuivre ciselé. Projetez des ombres dentelées envoûtantes qui transforment instantanément votre ambiance intérieure.",
        dimensions: "Diamètre 30 cm",
        material: "Laiton traditionnel",
        technique: "Perforation artisanale au poinçon",
        availability: "En stock"
    },
    {
        id: 10,
        title: "Plafonnier Biconique à Rosaces",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 683 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.05 (2).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.05 (2).jpeg"],
        description: "Plafonnier biconique structuré par des rosettes géométriques perforées, offrant un jeu de lumière fascinant et symétrique.",
        dimensions: "Diamètre 30 cm",
        material: "Laiton brossé",
        technique: "Martelage et gravure géométrique",
        availability: "En stock (2 pièces)"
    },
    {
        id: 11,
        title: "Lanterne Ovale en Cuivre Argenté",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 100 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.05.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.05.jpeg"],
        description: "Superbe suspension ovale en cuivre à finition étamée argentée. Ses arabesques raffinées captent la lumière naturelle comme artificielle.",
        dimensions: "Hauteur 55 cm, Diamètre 36 cm",
        material: "Cuivre étamé (finition argentée)",
        technique: "Étamage à chaud & découpe fine",
        availability: "En stock (2 pièces)"
    },
    {
        id: 12,
        title: "Applique Sphérique Murale Orientale",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 378 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06 (1).jpeg"],
        description: "Applique murale sphérique fixée sur support laiton. Diffuse un halo doux à travers des milliers de micro-perforations martelées à la main.",
        dimensions: "10 pouces",
        material: "Laiton pur",
        technique: "Ciselage & façonnage sphérique",
        availability: "En stock"
    },
    {
        id: 13,
        title: "Grand Plafonnier Écaille Riad",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "1 378 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06 (2).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06 (2).jpeg"],
        description: "Plafonnier géant aux motifs d'écailles projetant un dôme d'ombre immersif d'une beauté exceptionnelle sur tout le plafond d'un salon ou riad.",
        dimensions: "10 pouces",
        material: "Laiton patiné",
        technique: "Repoussé et perforation millimétrique",
        availability: "Sur commande (10 jours)"
    },
    {
        id: 14,
        title: "Lanterne Traditionnelle à Pompon Sofiane",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 389 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06 (3).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06 (3).jpeg"],
        description: "Suspension classique en forme d'olive habillée d'un pompon traditionnel en soie tressée à la main. Un charme intemporel.",
        dimensions: "Diamètre 30 cm",
        material: "Laiton doré & passementerie en soie",
        technique: "Gravure et assemblage artisanal",
        availability: "En stock"
    },
    {
        id: 15,
        title: "Plafonnier Galet Ovale Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 419 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06.jpeg"],
        description: "Plafonnier galet suspendu horizontalement, offrant une ligne contemporaine et un éclairage d'ambiance équilibré et chaleureux.",
        dimensions: "Diamètre 20 cm",
        material: "Laiton brossé",
        technique: "Ciselure au poinçon",
        availability: "En stock"
    },
    {
        id: 16,
        title: "Petit Vide-Poche Ovale en Cuivre Martelé",
        category: "art-table",
        categoryLabel: "Art de la Table",
        price: "320 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.07 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.07 (1).jpeg"],
        description: "Plateau d'appoint et vide-poche ovale en laiton délicatement martelé. Parfait pour déposer bijoux, clés ou sucreries.",
        dimensions: "Longueur 22 cm, Largeur 14 cm",
        material: "Laiton martelé à chaud",
        technique: "Martelage traditionnel manuel",
        availability: "En stock (8 pièces)"
    },
    {
        id: 17,
        title: "Globe Orientale Projection Ciselée",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 500 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.07 (3).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.07 (3).jpeg", "assets/WhatsApp Image 2026-09-03 at 11.53.07 (2).jpeg"],
        description: "Globe sphérique intégralement gravé à la main projetant une toile d'ombrage géométrique spectaculaire à 360 degrés.",
        dimensions: "Diamètre 45 cm",
        material: "Laiton doré poli",
        technique: "Gravure à l'échoppe & ciselure",
        availability: "En stock"
    },
    {
        id: 18,
        title: "Applique Rectangulaire Double Faisceau",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 150 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.07 (4).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.07 (4).jpeg"],
        description: "Applique murale rectangulaire moderne diffusant la lumière vers le haut et le bas avec une façade en dentelle de cuivre.",
        dimensions: "Hauteur 40 cm, Largeur 20 cm",
        material: "Cuivre et laiton patiné",
        technique: "Découpe fine & gravure",
        availability: "En stock (5 pièces)"
    },
    {
        id: 19,
        title: "Composition Triple Suspensions Soucoupes",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "4 800 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.07.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.07.jpeg"],
        description: "Ensemble sculptural composé de trois suspensions soucoupes sur patère circulaire en laiton. Idéal au-dessus d'une table à manger ou dans une entrée.",
        dimensions: "Patère 40 cm, Diamètre soucoupes 35 cm",
        material: "Laiton massif patiné",
        technique: "Repoussé et gravure au marteau",
        availability: "Sur commande (12 jours)"
    },
    {
        id: 20,
        title: "Applique Murale Galbée Moucharabieh",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 100 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.08 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.08 (1).jpeg"],
        description: "Applique demi-lune galbée avec motifs orientaux ajourés. Elle offre un éclairage latéral chaleureux parfait pour les espaces de vie.",
        dimensions: "Hauteur 45 cm, Largeur 22 cm",
        material: "Laiton bruni",
        technique: "Découpe minutieuse et brunissage",
        availability: "En stock"
    },
    {
        id: 21,
        title: "Lanterne Goutte Royale Double Étage",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "3 200 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.08 (3).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.08 (3).jpeg"],
        description: "Lanterne suspendue d'exception à deux étagement sculptés, alliant la grandeur impériale et la finesse de la dinanderie marocaine.",
        dimensions: "Hauteur 95 cm, Diamètre 35 cm",
        material: "Laiton doré poli",
        technique: "Ciselure fine & emboutissage",
        availability: "En stock (1 pièce unique)"
    },
    {
        id: 22,
        title: "Applique Lantern Cylindrique sur Potence",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 400 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.08 (4).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.08 (4).jpeg"],
        description: "Applique murale suspendue à une potence élégante. Elle projette une aura lumineuse tamisée et des ombres ciselées fines.",
        dimensions: "Hauteur totale 55 cm, Diamètre 18 cm",
        material: "Cuivre patiné",
        technique: "Gravure et assemblage mural",
        availability: "En stock"
    },
    {
        id: 23,
        title: "Applique Rosace Rétroéclairée Mandala",
        category: "decoration",
        categoryLabel: "Décoration",
        price: "2 600 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.08 (6).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.08 (6).jpeg"],
        description: "Oeuvre murale en cuivre ciselé représentant une rosace mandala rétroéclairée par LED. Apporte une sérénité lumineuse et luxueuse.",
        dimensions: "Diamètre 60 cm",
        material: "Cuivre rouge et laiton avec kit LED",
        technique: "Découpe fine & rétroéclairage",
        availability: "En stock (2 pièces)"
    },
    {
        id: 24,
        title: "Lanterne Goutte Argentée Ciselée",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 300 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.08.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.08.jpeg"],
        description: "Lanterne goutte étamée à l'argent avec détails ciselés complexes. Un éclat étincelant aussi bien de jour que de nuit.",
        dimensions: "Hauteur 75 cm, Diamètre 32 cm",
        material: "Cuivre argenté",
        technique: "Étamage & gravure manuelle",
        availability: "En stock"
    },
    {
        id: 25,
        title: "Trio de Lanternes Photophores de Table",
        category: "art-table",
        categoryLabel: "Art de la Table",
        price: "2 759 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.09 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.09 (1).jpeg"],
        description: "Set de 3 photophores cylindriques en laiton avec anneau de transport. Sublimera vos tables de fête et soirées d'été.",
        dimensions: "Tailles dégradées : H 15 cm, 18 cm, 25 cm",
        material: "Laiton poli brillant",
        technique: "Découpe géométrique & soudure",
        availability: "En stock (5 sets)"
    },
    {
        id: 26,
        title: "Lanterne Majestueuse Toupie en Laiton Doré Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 450 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.08 (5).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.08 (5).jpeg"],
        description: "Lanterne suspendue d'exception en forme de toupie royale, ornée de motifs ajourés complexes créant des projections lumineuses féeriques.",
        dimensions: "Hauteur 80 cm, Diamètre 38 cm",
        material: "Laiton doré massif",
        technique: "Ciselure fine & perforation manuelle",
        availability: "En stock (2 pièces)"
    },
    {
        id: 27,
        title: "Lanterne Majestueuse Goutte Étoilée",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 850 DH",
        image: "assets/WhatsApp Image 2026-09-22 at 21.58.16.jpeg",
        images: [
            "assets/WhatsApp Image 2026-09-22 at 21.58.16.jpeg",
            "assets/WhatsApp Image 2026-09-22 at 21.58.13.jpeg"
        ],
        video: "assets/WhatsApp Video 2026-09-22 at 21.58.16.mp4",
        description: "Lanterne suspendue d'exception façonnée en forme de goutte royale effilée. Ses micro-perforations ciselées projettent à 360° une rosace d'ombres féerique qui habille chaleureusement l'espace.",
        dimensions: "Hauteur 65 cm, Diamètre 35 cm",
        material: "Laiton doré massif",
        technique: "Ciselure fine & perforation manuelle",
        availability: "En stock (2 pièces)"
    },
    {
        id: 28,
        title: "Suspension Biconique Diamant aux Rosaces Circulaires",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 750 DH",
        image: "assets/WhatsApp Image 2026-09-22 at 22.27.04.jpeg",
        images: [
            "assets/WhatsApp Image 2026-09-22 at 22.27.04.jpeg",
            "assets/WhatsApp Image 2026-09-22 at 22.27.07.jpeg",
            "assets/WhatsApp Image 2026-09-22 at 22.27.04 (1).jpeg"
        ],
        description: "Suspension contemporaine à géométrie biconique sculptée en laiton doré ornée d'arabesques en anneaux perforés. Diffuse une lumière tamisée idéale au-dessus d'une table de repas ou dans un hall.",
        dimensions: "Diamètre 40 cm, Hauteur 35 cm",
        material: "Laiton ciselé finition satinée",
        technique: "Emboutissage biconique & perforation manuelle",
        availability: "En stock (3 pièces)"
    },
    {
        id: 29,
        title: "Lampadaire Oriental Majestueux en Laiton Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 590 DH",
        image: "assets/WhatsApp Image 2026-09-24 at 15.26.32 (1).jpeg",
        images: [
            "assets/WhatsApp Image 2026-09-24 at 15.26.32 (1).jpeg",
            "assets/WhatsApp Image 2026-09-24 at 15.26.32.jpeg",
            "assets/WhatsApp Image 2026-09-24 at 15.26.32 (2).jpeg"
        ],
        description: "Somptueux lampadaire oriental sur pied en laiton doré finement ciselé et ajouré à la main. Suspendue à une potence arquée au fini martelé d'une hauteur totale de 160 cm et ornée d'un pompon traditionnel, sa lanterne goutte (25 cm) projette un sublime jeu d'ombres féeriques à 360°. Une création d'art d'exception idéale pour sublimer salon, riad ou chambre.",
        dimensions: "Hauteur totale : 160 cm, Lanterne : 25 cm",
        material: "Laiton massif doré ciselé, pompon artisanal",
        technique: "Ciselure florale, perforation manuelle au poinçon & potence arquée martelée",
        availability: "En stock (2 pièces)"
    },
    {
        id: 30,
        title: "Suspension Conique en Laiton Doré Perforé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 549 DH",
        image: "assets/WhatsApp Image 2026-10-08 at 15.28.09.jpeg",
        images: [
            "assets/WhatsApp Image 2026-10-08 at 15.28.09.jpeg",
            "assets/WhatsApp Image 2026-10-08 at 15.28.10.jpeg"
        ],
        description: "Suspension conique contemporaine en laiton massif doré, minutieusement perforée à la main d'un dégradé de fines ouvertures. Idéale en solo ou en alignement au-dessus d'une table à manger, d'un îlot central ou d'un comptoir, elle diffuse une lumière chaleureuse, tamisée et captivante.",
        dimensions: "Diamètre 20 cm, Hauteur 22 cm",
        material: "Laiton massif doré brossé",
        technique: "Tournage repoussé, perforation manuelle au poinçon et finition satinée",
        availability: "En stock (4 pièces)"
    },
    {
        id: 31,
        title: "Table Basse Ronde en Laiton Ciselé & Piètement Bois",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "2 759 DH",
        image: "assets/WhatsApp Image 2026-10-08 at 00.21.01.jpeg",
        images: ["assets/WhatsApp Image 2026-10-08 at 00.21.01.jpeg"],
        description: "Table basse artisanale d'exception associant un somptueux plateau en laiton doré finement gravé d'arabesques marocaines concentriques à un piètement tripode épuré en bois massif. Une alliance parfaite entre tradition dinandière et design contemporain, idéale pour un salon raffiné ou un patio.",
        dimensions: "Diamètre 60 cm, Hauteur 50 cm",
        material: "Plateau en laiton massif gravé, piètement en bois massif",
        technique: "Gravure et ciselure traditionnelle au burin, tournage sur bois",
        availability: "En stock (2 pièces)"
    },
    {
        id: 32,
        title: "Baignoire Îlot Royale en Cuivre Massif & Pieds Griffes",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "28 900 DH",
        image: "assets/WhatsApp Image 2026-10-06 at 21.58.40.jpeg",
        images: ["assets/WhatsApp Image 2026-10-06 at 21.58.40.jpeg"],
        description: "Pièce maîtresse de la haute dinanderie marocaine, cette somptueuse baignoire îlot en cuivre rouge massif est martelée à la main par nos maîtres artisans. Rehaussée de poignées anneaux et d'un porte-serviette en laiton doré, elle repose sur quatre imposants pieds griffes sculptés. Un chef-d'œuvre de prestige pour suites et salles de bain d'exception.",
        dimensions: "Longueur 160 cm (63 in), Largeur 80 cm (31.5 in), Hauteur 67 cm (26.4 in)",
        material: "Cuivre rouge pur épais martelé, poignées et pieds griffes en laiton massif",
        technique: "Martelage d'art manuel, formage traditionnel à chaud & finitions d'exception",
        availability: "Sur commande (délai 2 à 3 semaines)"
    },
    {
        id: 33,
        title: "Baignoire Ovale Rétro en Cuivre Vieilli & Patine Vert-de-Gris",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "22 597 DH",
        image: "assets/WhatsApp Image 2026-10-06 at 21.55.11.jpeg",
        images: ["assets/WhatsApp Image 2026-10-06 at 21.55.11.jpeg"],
        description: "Baignoire îlot de caractère façonnée en cuivre massif vieilli avec un dégradé sublime de patine vert-de-gris naturelle. Ses lignes douces et ergonomiques s'inspirent des bains traditionnels, offrant un confort absolu et une esthétique vintage somptueuse au charme intemporel.",
        dimensions: "Longueur 160 cm, Largeur 75 cm, Hauteur 65 cm",
        material: "Cuivre pur massif avec patine artisanale vert-de-gris",
        technique: "Martelage manuel traditionnel, oxydation naturelle contrôlée et vernis protecteur de haute qualité",
        availability: "Pièce unique disponible (1 pièce)"
    },
    {
        id: 34,
        title: "Lanterne Royale Goutte Galbée en Laiton Doré Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 289 DH",
        image: "assets/suspension_goutte_royale_2289.jpg",
        images: ["assets/suspension_goutte_royale_2289.jpg"],
        description: "Majestueuse suspension en goutte galbée sculptée d'une dentelle d'arabesques orientales en laiton doré. Sa forme généreuse et ses ciselures fines créent des jeux d'ombres féeriques et une ambiance feutrée, sublimant chambres, salons ou entrées avec une élégance intemporelle.",
        dimensions: "Hauteur 42 cm, Diamètre 28 cm",
        material: "Laiton doré finition satinée",
        technique: "Ciselure florale à la main, découpe ajourée au poinçon traditionnel",
        availability: "En stock (3 pièces)"
    },
    {
        id: 35,
        title: "Suspension Orientale Larme Effilée en Laiton Ajouré",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 189 DH",
        image: "assets/suspension_larme_ciselee_2189.jpg",
        images: ["assets/suspension_larme_ciselee_2189.jpg"],
        description: "Suspension d'une silhouette élancée en forme de larme effilée terminée par une flèche ciselée. Réalisée en laiton vieilli finement ajouré de motifs géométriques et floraux, elle projette une féerie d'ombres kaléidoscopiques spectaculaires sur les murs et plafonds.",
        dimensions: "Hauteur 35 cm (13.8 in), Diamètre 20 cm",
        material: "Laiton massif vieilli patiné",
        technique: "Ciselure d'art, perforation minutieuse au poinçon et finition patinée",
        availability: "En stock (2 pièces)"
    },
    {
        id: 36,
        title: "Baignoire Sabot Majestueuse en Laiton Doré Poli & Pieds Griffes",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "24 900 DH",
        image: "assets/baignoire_laiton_dore_poli.jpg",
        images: ["assets/baignoire_laiton_dore_poli.jpg"],
        description: "Splendide baignoire sabot en laiton massif doré, entièrement polie miroir et martelée à la main. Conçue pour une installation intérieure luxueuse ou au bord d'une terrasse de riad, elle repose sur quatre pieds griffes sculptés et diffuse une brillance dorée royale captivante.",
        dimensions: "Longueur 155 cm, Largeur 75 cm, Hauteur 70 cm",
        material: "Laiton massif doré poli miroir",
        technique: "Martelage d'art à chaud, emboutissage et polissage éclat or",
        availability: "Sur commande (délai 2 semaines)"
    },
    {
        id: 37,
        title: "Applique Murale Orientale Goutte en Laiton Doré Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "949.50 DH",
        image: "assets/IMG-20261015-WA0018.jpg",
        images: [
            "assets/IMG-20261015-WA0018.jpg",
            "assets/IMG-20261015-WA0017.jpg",
            "assets/IMG-20261015-WA0020.jpg",
            "assets/IMG-20261015-WA0019.jpg"
        ],
        description: "Sublime applique murale orientale en forme d'ogive goutte façonnée en laiton massif doré, entièrement ciselée et ajourée à la main d'arabesques florales. Livrée avec potence murale en laiton et cordon tressé, elle diffuse un éclairage tamisé féerique à 360°.",
        dimensions: "Hauteur 22 cm (8.7 in), Support mural en laiton inclus",
        material: "Laiton massif doré ciselé, potence murale en laiton",
        technique: "Ciselure florale à la main, perforation traditionnelle au poinçon & polissage doré",
        availability: "En stock (6 pièces)"
    },
    {
        id: 38,
        title: "Applique Murale Demi-Cylindrique aux Rosaces Orientales",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "759.67 DH",
        image: "assets/IMG-20261015-WA0016.jpg",
        images: [
            "assets/IMG-20261015-WA0016.jpg",
            "assets/IMG-20261015-WA0015.jpg"
        ],
        description: "Applique murale demi-cylindrique en laiton doré brossé, magnifiquement ajourée au centre d'un médaillon floral andalou entouré d'une constellation de micro-perforations. Projette un faisceau lumineux captivant vers le haut et le bas.",
        dimensions: "Hauteur 20 à 40 cm, Largeur 13 cm",
        material: "Laiton massif doré brossé",
        technique: "Découpe artisanale au poinçon fin, cintrage demi-cylindre & finition satinée",
        availability: "En stock (8 pièces)"
    },
    {
        id: 39,
        title: "Plafonnier Soucoupe Ciel Étoilé en Laiton Doré Perforé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 759.67 DH",
        image: "assets/IMG-20261011-WA0027.jpg",
        images: [
            "assets/IMG-20261011-WA0027.jpg",
            "assets/IMG-20261011-WA0024.jpg",
            "assets/IMG-20261011-WA0022.jpg",
            "assets/IMG-20261011-WA0023.jpg"
        ],
        description: "Plafonnier contemporain galbé en forme de soucoupe orientale en laiton doré massif. Minutieusement perforé d'un semis d'étoiles, il transforme votre plafond en une véritable voûte céleste féerique tout en assurant un éclairage central chaleureux.",
        dimensions: "Diamètre 25 cm (9.8 in), Fixation plafond laiton incluse",
        material: "Laiton massif doré satiné",
        technique: "Repoussage au tour traditionnel & micro-perforation manuelle",
        availability: "En stock (4 pièces)"
    },
    {
        id: 40,
        title: "Applique Murale Cornet Andalouse en Laiton Doré Ajouré",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 180 DH",
        image: "assets/IMG-20261012-WA0022.jpg",
        images: [
            "assets/IMG-20261012-WA0022.jpg",
            "assets/IMG-20261012-WA0021.jpg",
            "assets/IMG-20261012-WA0020.jpg",
            "assets/IMG-20261012-WA0023.jpg"
        ],
        description: "Splendide applique murale conique en forme de cornet inversé couronné d'un chapiteau demi-lune en laiton doré finement ciselé. Diffuse une projection lumineuse spectaculaire en éventail solaire qui sublime les murs de patio, couloirs et salons.",
        dimensions: "Hauteur 35 cm, Largeur 30 cm, Profondeur 16 cm",
        material: "Laiton massif doré ciselé",
        technique: "Ciselure florale à l'échoppe & ajourage traditionnel",
        availability: "En stock (5 pièces)"
    },
    {
        id: 41,
        title: "Applique Bougeoir Murale Ovale en Laiton Doré Brossé",
        category: "decoration",
        categoryLabel: "Décoration",
        price: "680 DH",
        image: "assets/IMG-20261012-WA0044.jpg",
        images: [
            "assets/IMG-20261012-WA0044.jpg",
            "assets/IMG-20261012-WA0045.jpg",
            "assets/IMG-20261012-WA0046.jpg",
            "assets/IMG-20261012-WA0043.jpg"
        ],
        description: "Applique bougeoir murale minimaliste de forme ovale concave en laiton massif au fini doré brossé chaud. Conçue pour accueillir une bougie cierge dont la flamme se reflète magnifiquement sur la coupelle dorée.",
        dimensions: "Hauteur 25 cm, Largeur 11 cm",
        material: "Laiton massif brossé, coupelle et pique-bougie",
        technique: "Formage manuel, polissage brossé satiné & vernis protecteur",
        availability: "En stock (10 pièces)"
    },
    {
        id: 42,
        title: "Applique Bougeoir Ronde Disque Solaire en Laiton Brossé",
        category: "decoration",
        categoryLabel: "Décoration",
        price: "650 DH",
        image: "assets/IMG-20261012-WA0047.jpg",
        images: [
            "assets/IMG-20261012-WA0047.jpg",
            "assets/IMG-20261012-WA0048.jpg",
            "assets/IMG-20261012-WA0049.jpg",
            "assets/IMG-20261012-WA0050.jpg"
        ],
        description: "Applique bougeoir circulaire solaire au design épuré et intemporel en laiton doré brossé. La lueur de la flamme au centre du disque projette une aura lumineuse dorée envoûtante créant une ambiance zen et réconfortante.",
        dimensions: "Diamètre 20 cm, Profondeur 8 cm",
        material: "Laiton massif brossé",
        technique: "Emboutissage circulaire & finition dorée brossée main",
        availability: "En stock (12 pièces)"
    },
    {
        id: 43,
        title: "Applique Bougeoir Murale en Arche en Laiton Doré",
        category: "decoration",
        categoryLabel: "Décoration",
        price: "690 DH",
        image: "assets/IMG-20261012-WA0051.jpg",
        images: [
            "assets/IMG-20261012-WA0051.jpg",
            "assets/IMG-20261012-WA0054.jpg",
            "assets/IMG-20261012-WA0053.jpg"
        ],
        description: "Élégante applique bougeoir inspirée des alcôves et arches mauresques en laiton massif doré satiné. Parfaite pour créer une composition murale à deux ou trois unités le long d'un couloir, salon ou escalier.",
        dimensions: "Hauteur 25 cm, Largeur 11 cm",
        material: "Laiton massif doré brossé",
        technique: "Découpe en arche, pliage artisanal & finition satinée",
        availability: "En stock (8 pièces)"
    },
    {
        id: 44,
        title: "Suspension Sphérique Arabesque Royale en Laiton Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 450 DH",
        image: "assets/IMG-20261012-WA0018.jpg",
        images: [
            "assets/IMG-20261012-WA0018.jpg",
            "assets/IMG-20261012-WA0015.jpg",
            "assets/IMG-20261012-WA0016.jpg"
        ],
        description: "Suspension boule orientale façonnée à la main en laiton doré patiné. Entièrement sculptée d'un maillage floral arabesque ajouré, elle diffuse une projection d'ombres dentelées spectaculaire à 360° sur les plafonds et murs.",
        dimensions: "Diamètre 25 cm, Chaîne de suspension 80 cm réglable",
        material: "Laiton doré patiné, chaîne à maillons assortie",
        technique: "Emboutissage sphérique, ciselure à la main & brunissage traditionnel",
        availability: "En stock (4 pièces)"
    },
    {
        id: 45,
        title: "Suspension Goutte Royale d'Orient en Laiton Doré Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 580 DH",
        image: "assets/IMG-20261005-WA0037.jpg",
        images: [
            "assets/IMG-20261005-WA0037.jpg",
            "assets/IMG-20261005-WA0038.jpg",
            "assets/IMG-20261005-WA0041.jpg",
            "assets/IMG-20261005-WA0039.jpg"
        ],
        description: "Majestueuse suspension en forme de goutte effilée en laiton massif doré, entièrement ajourée et ciselée à la main de motifs orientaux en rosaces. Une création d'exception pour sublimer une entrée, salle à manger ou suite parentale.",
        dimensions: "Hauteur 35 cm (13.8 in), Pavillon et chaîne inclus",
        material: "Laiton massif doré ciselé",
        technique: "Ciselure florale à la main, découpe au poinçon fin & polissage doré",
        availability: "En stock (3 pièces)"
    },
    {
        id: 46,
        title: "Grande Lanterne Orientale Toupie de Riad en Laiton Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 250 DH",
        image: "assets/IMG-20261005-WA0034.jpg",
        images: [
            "assets/IMG-20261005-WA0034.jpg",
            "assets/IMG-20261005-WA0036.jpg",
            "assets/IMG-20261005-WA0033.jpg",
            "assets/IMG-20261005-WA0035.jpg"
        ],
        description: "Pièce maîtresse des riads impériaux, cette somptueuse lanterne suspendue en forme de toupie royale à multiples facettes ajourées projette une féerie de rosaces kaléidoscopiques illuminant instantanément tout l'espace d'une douce magie marocaine.",
        dimensions: "Hauteur 55 cm, Diamètre 32 cm",
        material: "Laiton doré massif et chaîne de suspension",
        technique: "Ciselure d'art, assemblage manuel traditionnel & finition dorée royale",
        availability: "En stock (2 pièces)"
    },
    {
        id: 47,
        title: "Lampe à Poser Sphérique Rosaces Perforées sur Socle",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 150 DH",
        image: "assets/IMG-20261005-WA0007.jpg",
        images: [
            "assets/IMG-20261005-WA0007.jpg",
            "assets/IMG-20261005-WA0009.jpg",
            "assets/IMG-20261005-WA0010.jpg"
        ],
        description: "Lampe de chevet et d'ambiance sphérique en laiton doré posée sur une base circulaire en laiton. Ses perforations concentriques en rosaces projettent une aura lumineuse tamisée relaxante, idéale sur une table de nuit ou une console de salon.",
        dimensions: "Diamètre 25 cm, Hauteur 30 cm avec socle",
        material: "Laiton massif doré perforé, socle en laiton",
        technique: "Poinçonnage manuel fin & formage sphérique",
        availability: "En stock (6 pièces)"
    },
    {
        id: 48,
        title: "Lampe de Table Obélisque Minaret en Laiton Perforé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 390 DH",
        image: "assets/IMG-20261005-WA0011.jpg",
        images: [
            "assets/IMG-20261005-WA0011.jpg",
            "assets/IMG-20261005-WA0012.jpg",
            "assets/IMG-20261005-WA0013.jpg"
        ],
        description: "Lampe à poser pyramidale élancée inspirée des minarets mauresques, surmontée d'un fleuron sculpté. Ses perforations géométriques verticales créent des lignes de lumière envoûtantes qui habillent subtilement les intérieurs raffinés.",
        dimensions: "Hauteur 45 cm, Diamètre base 18 cm",
        material: "Laiton doré vieilli sur socle tripode",
        technique: "Découpe géométrique, perforation manuelle & patine satinée",
        availability: "En stock (4 pièces)"
    },
    {
        id: 49,
        title: "Lampe de Table Goutte Royale en Laiton Ciselé (35 cm)",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 480 DH",
        image: "assets/IMG-20261005-WA0018.jpg",
        images: [
            "assets/IMG-20261005-WA0018.jpg",
            "assets/IMG-20261005-WA0015.jpg",
            "assets/IMG-20261005-WA0016.jpg",
            "assets/IMG-20261005-WA0017.jpg"
        ],
        description: "Lampe à poser majestueuse en forme de goutte royale en laiton doré brossé reposant sur un socle massif. Ses délicates ciselures florales filtrent la lumière avec une infinie douceur pour créer une atmosphère feutrée et chaleureuse.",
        dimensions: "Hauteur 35 cm (13.8 in), Socle en laiton massif inclus",
        material: "Laiton massif doré ciselé, socle stable en laiton",
        technique: "Ciselure florale à la main & perforation minutieuse",
        availability: "En stock (4 pièces)"
    },
    {
        id: 50,
        title: "Lampe d'Ambiance Minaret Royal Hexagonal en Laiton Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 650 DH",
        image: "assets/IMG-20261005-WA0021.jpg",
        images: [
            "assets/IMG-20261005-WA0021.jpg",
            "assets/IMG-20261005-WA0030.jpg",
            "assets/IMG-20261005-WA0019.jpg",
            "assets/IMG-20261005-WA0020.jpg"
        ],
        description: "Somptueuse création d'art dinandier combinant une flèche pyramidale ciselée et un tambour hexagonal galbé sur piédouche en laiton massif. Une véritable sculpture lumineuse qui projette des rosaces d'étoiles sur vos murs et meubles.",
        dimensions: "Hauteur 35 cm (13.8 in), Base hexagonale sculptée",
        material: "Laiton massif doré ciselé et ajouré",
        technique: "Ciselure d'art au burin, ajourage à la main & polissage éclat or",
        availability: "En stock (3 pièces)"
    },
    {
        id: 51,
        title: "Lampe d'Ambiance Ovoïde Sablée en Laiton sur Socle Carré",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 290 DH",
        image: "assets/IMG-20261005-WA0026.jpg",
        images: [
            "assets/IMG-20261005-WA0026.jpg",
            "assets/IMG-20261005-WA0024.jpg",
            "assets/IMG-20261005-WA0025.jpg"
        ],
        description: "Lampe ovoïde contemporaine en laiton doré reposant sur un élégant socle carré à gradins. Sa surface finement piquetée projette une lumière constellation tamisée parfaite pour les ambiances lounge et cosy.",
        dimensions: "Hauteur 30 cm (11.8 in), Socle carré 18x18 cm",
        material: "Laiton massif doré, socle à gradins",
        technique: "Piquage artisanal de précision & formage ovoïde",
        availability: "En stock (5 pièces)"
    },
    {
        id: 52,
        title: "Applique Murale Galbée Demi-Lune Ciselée à Éclairage Rayonnant",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 190 DH",
        image: "assets/IMG-20261005-WA0027.jpg",
        images: [
            "assets/IMG-20261005-WA0027.jpg",
            "assets/IMG-20261005-WA0028.jpg",
            "assets/IMG-20261005-WA0029.jpg",
            "assets/IMG-20261005-WA0031.jpg",
            "assets/IMG-20261005-WA0032.jpg"
        ],
        video: "assets/VID-20261005-WA0014.mp4",
        description: "Applique murale galbée en demi-lune en laiton massif doré, entièrement ciselée au centre d'arabesques florales et bordée de persiennes ajourées latérales. Son faisceau lumineux spectaculaire rayonne en éventail sur les murs.",
        dimensions: "Hauteur 32 cm, Largeur 18 cm, Profondeur 10 cm",
        material: "Laiton massif doré ciselé",
        technique: "Ciselure florale à la main, découpe latérale & cintrage galbé",
        availability: "En stock (6 pièces)"
    }
];

/* ==========================================================================
   TRANSLATIONS (FR / EN)
   ========================================================================== */
const translations = {
    fr: {
        nav_home: "Accueil", nav_creations: "Créations", nav_savoirfaire: "Savoir-Faire",
        nav_galerie: "Galerie", nav_artisan: "L'Artisan", nav_contact: "Contact",
        nav_commander: "Commander",
        filter_all: "Tout", filter_luminaires: "Luminaires", filter_table: "Art de la Table",
        filter_deco: "Décoration", filter_unique: "Pièces Uniques",
        btn_view: "Voir les détails", btn_order: "Commander",
        btn_whatsapp: "Commander sur WhatsApp", swipe_hint: "Glissez pour voir plus",
        pieces: "pièces",
        cat_luminaires: "Luminaires", cat_table: "Art de la Table",
        cat_deco: "Décoration", cat_unique: "Pièces Uniques",
    },
    en: {
        nav_home: "Home", nav_creations: "Creations", nav_savoirfaire: "Craftsmanship",
        nav_galerie: "Gallery", nav_artisan: "The Artisan", nav_contact: "Contact",
        nav_commander: "Order",
        filter_all: "All", filter_luminaires: "Lighting", filter_table: "Table Art",
        filter_deco: "Decoration", filter_unique: "Unique Pieces",
        btn_view: "View Details", btn_order: "Order",
        btn_whatsapp: "Order on WhatsApp", swipe_hint: "Swipe to see more",
        pieces: "pieces",
        cat_luminaires: "Lighting", cat_table: "Table Art",
        cat_deco: "Decoration", cat_unique: "Unique Pieces",
    }
};

let currentLang = "fr";

function t(key) {
    return (translations[currentLang] || translations.fr)[key] || key;
}

/* ==========================================================================
   DOM ELEMENTS & APP STATE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {

    // Nav Elements
    const header = document.querySelector("header");
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    const navOverlay = document.getElementById("nav-overlay");
    const langToggleBtn = document.getElementById("lang-toggle-btn");
    const langLabel = document.getElementById("lang-label");

    // Product Container & Filter Elements
    const productsContainer = document.getElementById("products-container");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Modal Elements
    const modal = document.getElementById("product-modal");
    const modalClose = document.getElementById("modal-close");
    const modalMainImage = document.getElementById("modal-main-image");
    const modalThumbnails = document.getElementById("modal-thumbnails");
    const modalCategory = document.getElementById("modal-category");
    const modalTitle = document.getElementById("modal-title");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const modalDim = document.getElementById("modal-dim");
    const modalMat = document.getElementById("modal-mat");
    const modalTech = document.getElementById("modal-tech");
    const modalAvail = document.getElementById("modal-avail");
    const modalWhatsAppBtn = document.getElementById("modal-whatsapp-btn");

    // Contact Form Elements
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    const categoriesDefinition = [
        { id: "luminaires", labelKey: "cat_luminaires", icon: "fa-lightbulb" },
        { id: "art-table",  labelKey: "cat_table",      icon: "fa-utensils" },
        { id: "decoration", labelKey: "cat_deco",       icon: "fa-gem" },
        { id: "pieces-uniques", labelKey: "cat_unique", icon: "fa-crown" }
    ];

    /* ==========================================================================
       HEADER & NAVIGATION CONTROL
       ========================================================================== */
    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    function closeMobileMenu() {
        burgerMenu && burgerMenu.classList.remove("active");
        navLinks && navLinks.classList.remove("active");
        navOverlay && navOverlay.classList.remove("active");
    }

    function toggleMobileMenu() {
        burgerMenu && burgerMenu.classList.toggle("active");
        navLinks && navLinks.classList.toggle("active");
        navOverlay && navOverlay.classList.toggle("active");
    }

    if (burgerMenu) burgerMenu.addEventListener("click", toggleMobileMenu);
    if (navOverlay) navOverlay.addEventListener("click", closeMobileMenu);
    if (navLinks) navLinks.querySelectorAll("a").forEach(l => l.addEventListener("click", closeMobileMenu));

    /* ==========================================================================
       LANGUAGE TOGGLE
       ========================================================================== */
    function applyLanguage() {
        // Nav links
        const navItems = navLinks ? navLinks.querySelectorAll("a") : [];
        const keys = ["nav_home","nav_creations","nav_galerie","nav_commander","nav_contact"];
        navItems.forEach((a, i) => { if (keys[i]) a.textContent = t(keys[i]); });

        // Filter buttons
        const filterKeyMap = { all: "filter_all", luminaires: "filter_luminaires", "art-table": "filter_table", decoration: "filter_deco", "pieces-uniques": "filter_unique" };
        filterButtons.forEach(btn => {
            const f = btn.getAttribute("data-filter");
            const labelSpan = btn.querySelector(".btn-label");
            if (labelSpan && filterKeyMap[f]) {
                labelSpan.textContent = t(filterKeyMap[f]);
            }
        });

        // Re-render products with updated language
        const activeFilter = document.querySelector(".filter-btn.active");
        renderProducts(activeFilter ? activeFilter.getAttribute("data-filter") : "all");

        // Update lang button label
        if (langLabel) langLabel.textContent = currentLang === "fr" ? "EN" : "FR";
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", () => {
            currentLang = currentLang === "fr" ? "en" : "fr";
            applyLanguage();
        });
    }

    /* ==========================================================================
       PRODUCT CARD HELPER
       ========================================================================== */
    function createProductCard(product) {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-id", product.id);
        const formattedPrice = product.price.replace(/\s+/g, "\u00a0");
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <span class="product-badge">${product.categoryLabel}</span>
                <div class="product-overlay">
                    <button class="btn btn-primary view-details-btn">${t("btn_view")}</button>
                </div>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price-wrapper">
                    <span class="product-price">${formattedPrice}</span>
                </div>
                <p class="product-description">${product.description.substring(0, 95)}...</p>
                <div class="product-actions">
                    <button class="btn btn-secondary order-btn">${t("btn_order")}</button>
                </div>
            </div>
        `;
        card.querySelector(".view-details-btn").addEventListener("click", () => openModal(product));
        card.querySelector(".order-btn").addEventListener("click", () => orderWhatsApp(product));
        return card;
    }

    /* ==========================================================================
       PRODUCT GRID RENDERER
       ========================================================================== */
    function renderProducts(filterCategory = "all") {
        if (!productsContainer) return;
        productsContainer.innerHTML = "";

        const filteredProducts = filterCategory === "all"
            ? products
            : products.filter(p => p.category === filterCategory);

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div style="text-align:center;padding:50px 20px;color:var(--text-muted);width:100%;">
                    <i class="fa-solid fa-box-open" style="font-size:3rem;margin-bottom:15px;color:var(--color-copper);"></i>
                    <p>Aucun produit dans cette catégorie pour le moment.</p>
                </div>
            `;
            return;
        }

        const grid = document.createElement("div");
        grid.className = "products-grid";

        filteredProducts.forEach(product => {
            grid.appendChild(createProductCard(product));
        });

        productsContainer.appendChild(grid);
    }

    // Filter Buttons Interaction
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            renderProducts(button.getAttribute("data-filter"));
        });
    });

    // Update filter counts dynamically
    function updateFilterCounts() {
        const allCount = document.querySelector('.filter-btn[data-filter="all"] .filter-count');
        if (allCount) allCount.textContent = products.length;
        categoriesDefinition.forEach(cat => {
            const el = document.querySelector(`.filter-btn[data-filter="${cat.id}"] .filter-count`);
            if (el) el.textContent = products.filter(p => p.category === cat.id).length;
        });

        const discoverBtn = document.getElementById("discover-btn");
        if (discoverBtn) {
            discoverBtn.innerHTML = `<i class="fa-solid fa-gem"></i> Voir Nos Produits (${products.length}) <i class="fa-solid fa-arrow-right"></i>`;
        }
        const secHeaderH2 = document.querySelector("#produits .section-header h2");
        if (secHeaderH2) {
            secHeaderH2.textContent = `Nos Produits Artisanaux (${products.length} Pièces)`;
        }
        const secHeaderP = document.querySelector("#produits .section-header p");
        if (secHeaderP) {
            secHeaderP.textContent = `Découvrez notre collection de ${products.length} pièces uniques façonnées à la main. Du luminaire oriental traditionnel aux baignoires d'art et créations dinandières d'exception.`;
        }
    }
    updateFilterCounts();

    // Initial render
    renderProducts("all");

    /* ==========================================================================
       PRODUCT MODAL CONTROLLER
       ========================================================================== */
    function openModal(product) {
        if (!modal) return;
        modalCategory.textContent = product.categoryLabel;
        modalTitle.textContent = product.title;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
        modalDim.textContent = product.dimensions;
        modalMat.textContent = product.material;
        modalTech.textContent = product.technique;
        modalAvail.textContent = product.availability;

        const whatsappText = encodeURIComponent(`Bonjour Cuivre Abderrazak, je suis très intéressé(e) par le produit "${product.title}" (${product.price}). Pouvez-vous m'indiquer la disponibilité et les modalités de livraison ? Merci !`);
        modalWhatsAppBtn.href = `https://wa.me/212670190161?text=${whatsappText}`;
        if (modalWhatsAppBtn.querySelector("span")) modalWhatsAppBtn.querySelector("span").textContent = t("btn_whatsapp");

        const mainContainer = modalMainImage.parentElement;
        let modalVideo = mainContainer.querySelector("video");
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.style.display = "none";
        }
        modalMainImage.style.display = "block";
        modalMainImage.src = product.image;
        modalMainImage.alt = product.title;
        modalThumbnails.innerHTML = "";

        const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];
        imagesList.forEach((imgSrc, idx) => {
            const thumbBtn = document.createElement("button");
            thumbBtn.className = `thumbnail-btn ${idx === 0 ? "active" : ""}`;
            thumbBtn.innerHTML = `<img src="${imgSrc}" alt="${product.title} miniature ${idx + 1}">`;
            thumbBtn.addEventListener("click", () => {
                modalThumbnails.querySelectorAll(".thumbnail-btn").forEach(b => b.classList.remove("active"));
                thumbBtn.classList.add("active");
                if (modalVideo) {
                    modalVideo.pause();
                    modalVideo.style.display = "none";
                }
                modalMainImage.style.display = "block";
                modalMainImage.src = imgSrc;
            });
            modalThumbnails.appendChild(thumbBtn);
        });

        if (product.video) {
            const videoThumbBtn = document.createElement("button");
            videoThumbBtn.className = "thumbnail-btn video-thumb";
            videoThumbBtn.setAttribute("title", "Voir la vidéo");
            videoThumbBtn.setAttribute("aria-label", "Voir la vidéo");
            videoThumbBtn.innerHTML = `<i class="fa-solid fa-play" style="font-size:1.3rem;color:var(--color-copper);"></i>`;
            videoThumbBtn.addEventListener("click", () => {
                modalThumbnails.querySelectorAll(".thumbnail-btn").forEach(b => b.classList.remove("active"));
                videoThumbBtn.classList.add("active");
                modalMainImage.style.display = "none";
                if (!modalVideo) {
                    modalVideo = document.createElement("video");
                    modalVideo.setAttribute("controls", "true");
                    modalVideo.setAttribute("autoplay", "true");
                    modalVideo.setAttribute("loop", "true");
                    modalVideo.setAttribute("playsinline", "true");
                    modalVideo.style.width = "100%";
                    modalVideo.style.height = "100%";
                    modalVideo.style.objectFit = "cover";
                    mainContainer.appendChild(modalVideo);
                }
                modalVideo.src = product.video;
                modalVideo.style.display = "block";
                modalVideo.play().catch(() => {});
            });
            modalThumbnails.appendChild(videoThumbBtn);
        }

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        if (!modal) return;
        const mainContainer = modalMainImage ? modalMainImage.parentElement : null;
        const modalVideo = mainContainer ? mainContainer.querySelector("video") : null;
        if (modalVideo) {
            modalVideo.pause();
        }
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modal) modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) closeModal();
    });

    function orderWhatsApp(product) {
        const text = encodeURIComponent(`Bonjour Cuivre Abderrazak, je souhaite commander la création "${product.title}" au prix de ${product.price}. Pouvez-vous me confirmer la disponibilité ?`);
        window.open(`https://wa.me/212670190161?text=${text}`, "_blank");
    }

    /* ==========================================================================
       MAP (LEAFLET)
       ========================================================================== */
    function initMap() {
        const mapPosition = [31.6295, -7.9811];
        try {
            const map = L.map("map", { scrollWheelZoom: false }).setView(mapPosition, 16);
            L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
                attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>",
                maxZoom: 20
            }).addTo(map);
            const copperIcon = L.divIcon({
                className: "custom-map-pin",
                html: `<div style="width:20px;height:20px;background-color:var(--color-copper);border:3px solid var(--bg-primary);border-radius:50%;box-shadow:0 4px 10px rgba(210,125,70,0.4);"></div>`,
                iconSize: [20, 20], iconAnchor: [10, 10]
            });
            L.marker(mapPosition, { icon: copperIcon }).addTo(map)
                .bindPopup(`<div style="font-family:var(--font-body);padding:5px;"><h4 style="font-family:var(--font-heading);margin-bottom:5px;color:var(--color-copper);">Cuivre Abderrazak</h4><p style="font-size:0.85rem;margin:0;">12 Rue de la Kessaria, Médina, Marrakech, Maroc</p></div>`)
                .openPopup();
        } catch (error) {
            const mapContainer = document.getElementById("map");
            if (mapContainer) {
                mapContainer.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:var(--bg-secondary);padding:20px;text-align:center;"><span style="font-size:3rem;color:var(--color-copper);margin-bottom:15px;">📍</span><h4 style="font-family:var(--font-heading);font-size:1.3rem;margin-bottom:10px;">Cuivre Abderrazak - Marrakech</h4><p style="color:var(--text-muted);font-size:0.95rem;">12 Rue de la Kessaria, Médina, Marrakech, Maroc</p></div>`;
            }
        }
    }
    initMap();

    /* ==========================================================================
       CONTACT FORM
       ========================================================================== */
    if (contactForm) {
        contactForm.addEventListener("submit", e => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = `<span>Envoi en cours...</span>`;
            submitBtn.disabled = true;
            setTimeout(() => {
                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const message = document.getElementById("message").value.trim();
                if (name && email && message) {
                    formMessage.className = "form-message success";
                    formMessage.textContent = "Merci pour votre message ! Abderrazak vous répondra très prochainement par e-mail ou téléphone.";
                    contactForm.reset();
                } else {
                    formMessage.className = "form-message error";
                    formMessage.textContent = "Une erreur est survenue. Veuillez remplir tous les champs obligatoires.";
                }
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                setTimeout(() => { formMessage.style.display = "none"; }, 8000);
            }, 1500);
        });
    }

}); // end DOMContentLoaded
