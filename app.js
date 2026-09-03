/* ==========================================================================
   PRODUCT DATASET
   ========================================================================== */
const products = [
    {
        id: 1,
        title: "Lanterne Royale Goutte en Laiton Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 850 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.02.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.02.jpeg", "assets/WhatsApp Image 2026-09-03 at 11.53.08 (2).jpeg"],
        description: "Lanterne suspendue majestueuse en laiton doré façonnée à la main en forme de goutte. Ses perforations fines projettent des motifs géométriques féeriques sur les murs et le plafond.",
        dimensions: "Hauteur 70 cm, Diamètre 35 cm",
        material: "Laiton massif doré",
        technique: "Ciselure et martelage manuel",
        availability: "En stock (3 pièces)"
    },
    {
        id: 2,
        title: "Grand Lustre Goutte Pointue Orientale",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "2 200 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.03 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.03 (1).jpeg"],
        description: "Lustre à suspension fine en laiton sculpté avec une finition en pointe élégante. Il apporte un charme oriental incomparable à tout espace intérieur.",
        dimensions: "Hauteur 85 cm, Diamètre 40 cm",
        material: "Laiton finement percé",
        technique: "Découpe artisanale et polissage miroir",
        availability: "En stock (2 pièces)"
    },
    {
        id: 3,
        title: "Suspension Orientale Écailles Ciselées",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 650 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.03.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.03.jpeg"],
        description: "Suspension en dôme inversé arborant des motifs d'écailles maritimes minutieusement percés. Une diffusion de lumière douce et enveloppante.",
        dimensions: "Hauteur 45 cm, Diamètre 38 cm",
        material: "Laiton patiné",
        technique: "Percement à la main & brunissage",
        availability: "En stock"
    },
    {
        id: 4,
        title: "Lanterne Baladeuse Goutte Sablée",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 400 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (1).jpeg"],
        description: "Lanterne d'ambiance à poser ou à suspendre en laiton doré brossé avec pavillon assorti. Parfaite pour créer une atmosphère chaleureuse.",
        dimensions: "Hauteur 50 cm, Diamètre 30 cm",
        material: "Cuivre jaune brossé",
        technique: "Poinçonnage manuel fin",
        availability: "En stock (4 pièces)"
    },
    {
        id: 5,
        title: "Suspension Bombe en Cuivre Doré",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 950 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (2).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (2).jpeg", "assets/WhatsApp Image 2026-09-03 at 11.53.09.jpeg"],
        description: "Suspension aux volumes généreux et galbés en laiton perforé point par point. Crée un éclairage central tamisé et romantique.",
        dimensions: "Diamètre 50 cm, Hauteur 55 cm",
        material: "Laiton pur et chaîne à maillons",
        technique: "Ciselure au marteau & emboutissage",
        availability: "En stock"
    },
    {
        id: 6,
        title: "Lustre Dôme Contemporain Bruni",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 750 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (3).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (3).jpeg"],
        description: "Dôme moderne en cuivre bruni à la patine sombre, rehaussé d'une bande ajourée minutieuse à la base. Mariage élégant entre modernité et artisanat traditionnel.",
        dimensions: "Diamètre 42 cm, Hauteur 35 cm",
        material: "Cuivre bruni patiné",
        technique: "Tournage & frise ciselée",
        availability: "En stock (3 pièces)"
    },
    {
        id: 7,
        title: "Lanterne Cylindrique Andalouse",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 350 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04 (4).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04 (4).jpeg"],
        description: "Suspension cylindrique épurée en laiton gravé aux arabesques inspirées de l'architecture andalouse. Idéale pour les couloirs ou les coins lecture.",
        dimensions: "Hauteur 60 cm, Diamètre 18 cm",
        material: "Cuivre jaune massif",
        technique: "Ciselage à l'échoppe",
        availability: "En stock"
    },
    {
        id: 8,
        title: "Lustre Multi-Niveaux Architectural",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "3 800 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.04.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.04.jpeg"],
        description: "Lustre monumental à double tambour ajouré de motifs géométriques complexes. Une véritable pièce maîtresse architecturale pour grands espaces.",
        dimensions: "Diamètre 55 cm, Hauteur 50 cm",
        material: "Laiton doré poli",
        technique: "Découpe au biseau & assemblage manuel",
        availability: "Sur commande (7 jours)"
    },
    {
        id: 9,
        title: "Lanterne Andalouse Ambiance Féerique",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 550 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.05 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.05 (1).jpeg"],
        description: "Suspension en forme de poire en cuivre ciselé. Projetez des ombres dentelées envoûtantes qui transforment instantanément votre ambiance intérieure.",
        dimensions: "Hauteur 48 cm, Diamètre 28 cm",
        material: "Laiton traditionnel",
        technique: "Perforation artisanale au poinçon",
        availability: "En stock"
    },
    {
        id: 10,
        title: "Plafonnier Biconique à Rosaces",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 600 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.05 (2).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.05 (2).jpeg"],
        description: "Plafonnier biconique structuré par des rosettes géométriques perforées, offrant un jeu de lumière fascinant et symétrique.",
        dimensions: "Diamètre 40 cm, Hauteur 32 cm",
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
        price: "1 250 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06 (1).jpeg"],
        description: "Applique murale sphérique fixée sur support laiton. Diffuse un halo doux à travers des milliers de micro-perforations martelées à la main.",
        dimensions: "Diamètre 32 cm, Profondeur 38 cm",
        material: "Laiton pur",
        technique: "Ciselage & façonnage sphérique",
        availability: "En stock"
    },
    {
        id: 13,
        title: "Grand Plafonnier Écaille Riad",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "4 200 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06 (2).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06 (2).jpeg"],
        description: "Plafonnier géant aux motifs d'écailles projetant un dôme d'ombre immersif d'une beauté exceptionnelle sur tout le plafond d'un salon ou riad.",
        dimensions: "Diamètre 75 cm",
        material: "Laiton patiné",
        technique: "Repoussé et perforation millimétrique",
        availability: "Sur commande (10 jours)"
    },
    {
        id: 14,
        title: "Lanterne Traditionnelle à Pompon Sofiane",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 450 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06 (3).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06 (3).jpeg"],
        description: "Suspension classique en forme d'olive habillée d'un pompon traditionnel en soie tressée à la main. Un charme intemporel.",
        dimensions: "Hauteur lanterne 45 cm, Pompon 25 cm",
        material: "Laiton doré & passementerie en soie",
        technique: "Gravure et assemblage artisanal",
        availability: "En stock"
    },
    {
        id: 15,
        title: "Plafonnier Galet Ovale Ciselé",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 800 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.06.jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.06.jpeg"],
        description: "Plafonnier galet suspendu horizontalement, offrant une ligne contemporaine et un éclairage d'ambiance équilibré et chaleureux.",
        dimensions: "Largeur 50 cm, Hauteur 25 cm",
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
        price: "750 DH",
        image: "assets/WhatsApp Image 2026-09-03 at 11.53.09 (1).jpeg",
        images: ["assets/WhatsApp Image 2026-09-03 at 11.53.09 (1).jpeg"],
        description: "Set de 3 photophores cylindriques en laiton avec anneau de transport. Sublimera vos tables de fête et soirées d'été.",
        dimensions: "Tailles dégradées : H 15 cm, 18 cm, 25 cm",
        material: "Laiton poli brillant",
        technique: "Découpe géométrique & soudure",
        availability: "En stock (5 sets)"
    }
];

/* ==========================================================================
   DOM ELEMENTS & APP STATE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Nav Elements
    const header = document.querySelector("header");
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
    
    // Product Grid & Filter Elements
    const productsGrid = document.getElementById("products-grid");
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

    /* ==========================================================================
       HEADER & NAVIGATION CONTROL
       ========================================================================== */
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            burgerMenu.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    /* ==========================================================================
       PRODUCT GRID GENERATION
       ========================================================================== */
    function renderProducts(categoryFilter = "all") {
        productsGrid.innerHTML = "";
        
        const filteredProducts = categoryFilter === "all" 
            ? products 
            : products.filter(p => p.category === categoryFilter);

        filteredProducts.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.setAttribute("data-id", product.id);
            card.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    <span class="product-badge">${product.categoryLabel}</span>
                    <div class="product-overlay">
                        <button class="btn btn-primary view-details-btn">Voir les détails</button>
                    </div>
                </div>
                <div class="product-content">
                    <div class="product-meta">
                        <h3 class="product-title">${product.title}</h3>
                        <span class="product-price">${product.price}</span>
                    </div>
                    <p class="product-description">${product.description.substring(0, 85)}...</p>
                    <div class="product-actions">
                        <button class="btn btn-secondary order-btn">Commander</button>
                    </div>
                </div>
            `;
            
            // Add click events
            card.querySelector(".view-details-btn").addEventListener("click", () => openModal(product));
            card.querySelector(".order-btn").addEventListener("click", () => orderWhatsApp(product));
            
            productsGrid.appendChild(card);
        });
    }

    // Filter Buttons Interaction
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            
            const filterValue = button.getAttribute("data-filter");
            renderProducts(filterValue);
        });
    });

    // Initial render
    renderProducts("all");

    /* ==========================================================================
       PRODUCT MODAL CONTROLLER
       ========================================================================== */
    function openModal(product) {
        modalCategory.textContent = product.categoryLabel;
        modalTitle.textContent = product.title;
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
        modalDim.textContent = product.dimensions;
        modalMat.textContent = product.material;
        modalTech.textContent = product.technique;
        modalAvail.textContent = product.availability;
        
        // Setup WhatsApp link
        const whatsappText = encodeURIComponent(`Bonjour Cuivre Abderrazak, je suis très intéressé(e) par le produit "${product.title}" (${product.price}). Pouvez-vous m'indiquer la disponibilité et les modalités de livraison ? Merci !`);
        modalWhatsAppBtn.href = `https://wa.me/212670190161?text=${whatsappText}`;

        // Gallery images
        modalMainImage.src = product.image;
        modalMainImage.alt = product.title;
        
        // Thumbnails rendering
        modalThumbnails.innerHTML = "";
        
        // Use default images if product images are incomplete
        const imagesList = product.images && product.images.length > 0 
            ? product.images 
            : [product.image];
            
        imagesList.forEach((imgSrc, idx) => {
            const thumbBtn = document.createElement("button");
            thumbBtn.className = `thumbnail-btn ${idx === 0 ? 'active' : ''}`;
            thumbBtn.innerHTML = `<img src="${imgSrc}" alt="${product.title} miniature ${idx + 1}">`;
            
            thumbBtn.addEventListener("click", () => {
                modalThumbnails.querySelectorAll(".thumbnail-btn").forEach(btn => btn.classList.remove("active"));
                thumbBtn.classList.add("active");
                modalMainImage.src = imgSrc;
            });
            
            modalThumbnails.appendChild(thumbBtn);
        });

        // Open modal
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // disable scroll
    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // restore scroll
    }

    modalClose.addEventListener("click", closeModal);
    modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);

    // Escape Key to close Modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    function orderWhatsApp(product) {
        const text = encodeURIComponent(`Bonjour Cuivre Abderrazak, je souhaite commander la création "${product.title}" au prix de ${product.price}. Pouvez-vous me confirmer la disponibilité ?`);
        window.open(`https://wa.me/212670190161?text=${text}`, '_blank');
    }

    /* ==========================================================================
       MAP SIMULATION (LEAFLET INTERACTIVE MAP)
       ========================================================================== */
    function initMap() {
        // Medina of Marrakech, Morocco coordinates: 31.6295, -7.9811
        const mapPosition = [31.6295, -7.9811];
        
        try {
            const map = L.map('map', {
                scrollWheelZoom: false
            }).setView(mapPosition, 16);

            // Using CartoDB Positron - light, elegant tiles that match the creme aesthetic
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxZoom: 20
            }).addTo(map);

            // Custom Leaflet DivIcon to match copper theme
            const copperIcon = L.divIcon({
                className: 'custom-map-pin',
                html: `<div style="
                    width: 20px; 
                    height: 20px; 
                    background-color: var(--color-copper); 
                    border: 3px solid var(--bg-primary); 
                    border-radius: 50%;
                    box-shadow: 0 4px 10px rgba(210, 125, 70, 0.4);
                "></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            L.marker(mapPosition, { icon: copperIcon })
                .addTo(map)
                .bindPopup(`
                    <div style="font-family: var(--font-body); padding: 5px;">
                        <h4 style="font-family: var(--font-heading); margin-bottom: 5px; color: var(--color-copper);">Cuivre Abderrazak</h4>
                        <p style="font-size: 0.85rem; margin: 0;">12 Rue de la Kessaria, Médina, Marrakech, Maroc</p>
                    </div>
                `)
                .openPopup();
        } catch (error) {
            console.warn("Leaflet Map failed to load. Displaying static style or mock map instead.", error);
            // Inject a nice placeholder design if script is blocked or offline
            const mapContainer = document.getElementById("map");
            if (mapContainer) {
                mapContainer.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background-color: var(--bg-secondary); padding: 20px; text-align: center;">
                        <span style="font-size: 3rem; color: var(--color-copper); margin-bottom: 15px;">📍</span>
                        <h4 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 10px;">Cuivre Abderrazak - Marrakech</h4>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">12 Rue de la Kessaria, Médina, Marrakech, Maroc</p>
                        <p style="font-size: 0.85rem; margin-top: 15px; background: white; padding: 8px 15px; border-radius: 20px; border: 1px solid rgba(210,125,70,0.2);">Carte indisponible hors ligne</p>
                    </div>
                `;
            }
        }
    }
    
    // Call map init
    initMap();

    /* ==========================================================================
       CONTACT FORM HANDLING (SIMULATED)
       ========================================================================== */
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading spinner/text
            submitBtn.innerHTML = `<span>Envoi en cours...</span>`;
            submitBtn.disabled = true;
            
            // Simulate API request delay
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
                
                // Reset button
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // Hide message after 8 seconds
                setTimeout(() => {
                    formMessage.style.display = "none";
                }, 8000);
            }, 1500);
        });
    }
});
