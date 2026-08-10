/* ==========================================================================
   PRODUCT DATASET
   ========================================================================== */
const products = [
    {
        id: 1,
        title: "Lanterne Royale en Cuivre",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 850 DH",
        image: "assets/lantern.png",
        images: ["assets/lantern.png", "assets/workshop_details.png", "assets/hero_artisan.png"], // fallback to available if missing
        description: "Lanterne traditionnelle en cuivre rouge entièrement ciselée à la main. Projetez des motifs géométriques féeriques sur vos murs grâce à ses perforations minutieuses et laissez-vous emporter par la magie de l'Orient.",
        dimensions: "Hauteur 65 cm, Diamètre 30 cm",
        material: "Cuivre rouge pur",
        technique: "Ciselure et martelage manuel",
        availability: "En stock (2 pièces restantes)"
    },
    {
        id: 2,
        title: "Théière Traditionnelle Fassi",
        category: "art-table",
        categoryLabel: "Art de la Table",
        price: "850 DH",
        image: "assets/teapot.png",
        images: ["assets/teapot.png", "assets/tray.png", "assets/hero_artisan.png"],
        description: "Théière marocaine traditionnelle en cuivre jaune gravé, idéale pour servir le thé à la menthe. Équipée d'une poignée isolante recouverte de cuir pour une prise sécurisée et sculptée de magnifiques gravures traditionnelles.",
        dimensions: "Contenance 1.2L (environ 8 verres)",
        material: "Cuivre jaune (laiton) & intérieur étamé",
        technique: "Gravure à l'échoppe et polissage miroir",
        availability: "Sur commande (4 jours de fabrication)"
    },
    {
        id: 3,
        title: "Grand Plateau Impérial",
        category: "art-table",
        categoryLabel: "Art de la Table",
        price: "2 400 DH",
        image: "assets/tray.png",
        images: ["assets/tray.png", "assets/teapot.png", "assets/hero_artisan.png"],
        description: "Un magnifique plateau de service rond géant en cuivre avec des motifs géométriques arabesques extrêmement complexes. Une pièce maîtresse d'une finesse rare qui sublimera vos cérémonies de thé.",
        dimensions: "Diamètre 80 cm",
        material: "Cuivre rouge martelé et gravé",
        technique: "Gravure traditionnelle au burin et brunissage",
        availability: "En stock (1 pièce unique)"
    },
    {
        id: 4,
        title: "Vase Contemporain Martelé",
        category: "decoration",
        categoryLabel: "Décoration",
        price: "950 DH",
        image: "assets/vase.png",
        images: ["assets/vase.png", "assets/workshop_details.png", "assets/artisan_portrait.png"],
        description: "Ce vase design combine des lignes épurées modernes avec la texture chaleureuse du cuivre martelé à la main. Il s'intègre parfaitement dans les intérieurs contemporains tout en apportant une âme artisanale.",
        dimensions: "Hauteur 35 cm, Diamètre 15 cm",
        material: "Cuivre rouge de haute qualité",
        technique: "Martelage au maillet sur enclume",
        availability: "En stock"
    },
    {
        id: 5,
        title: "Applique Murale Medina",
        category: "luminaires",
        categoryLabel: "Luminaires",
        price: "1 200 DH",
        image: "assets/lantern.png",
        images: ["assets/lantern.png", "assets/workshop_details.png"],
        description: "Applique murale demi-lune en cuivre patiné. Elle diffuse une lumière douce et tamisée idéale pour créer une atmosphère chaleureuse et feutrée dans vos couloirs ou vos chambres à coucher.",
        dimensions: "Largeur 25 cm, Hauteur 40 cm",
        material: "Cuivre patiné à l'ancienne",
        technique: "Découpe à la scie de bijoutier et ciselage",
        availability: "En stock (5 pièces)"
    },
    {
        id: 6,
        title: "Miroir Ciselé Riad",
        category: "decoration",
        categoryLabel: "Décoration",
        price: "3 100 DH",
        image: "assets/tray.png",
        images: ["assets/tray.png", "assets/lantern.png", "assets/hero_artisan.png"],
        description: "Cadre de miroir d'exception en cuivre rouge repoussé et gravé à la main avec des détails floraux inspirés de l'architecture des anciens riads de Fès. Un bijou mural intemporel.",
        dimensions: "100 cm x 70 cm",
        material: "Cuivre rouge massif sur support bois",
        technique: "Repoussé sur lit de poix et gravure au burin",
        availability: "Sur commande (10 jours de fabrication)"
    },
    {
        id: 7,
        title: "Bougeoir d'Ambiance Sablé",
        category: "decoration",
        categoryLabel: "Décoration",
        price: "450 DH",
        image: "assets/vase.png",
        images: ["assets/vase.png", "assets/lantern.png"],
        description: "Petit bougeoir délicat en cuivre martelé. Sa surface texturée capte et reflète la lueur de la flamme pour créer des ombres dansantes et réchauffer instantanément l'atmosphère.",
        dimensions: "Hauteur 12 cm, Diamètre 8 cm",
        material: "Cuivre jaune",
        technique: "Martelage fin sur bigorne",
        availability: "En stock"
    },
    {
        id: 8,
        title: "Fontaine de Riad Unique",
        category: "pieces-uniques",
        categoryLabel: "Pièces Uniques",
        price: "6 500 DH",
        image: "assets/tray.png",
        images: ["assets/tray.png", "assets/workshop_details.png", "assets/hero_artisan.png"],
        description: "Une pièce d'exception réalisée entièrement sur mesure. Fontaine d'intérieur en cuivre martelé et gravé avec un système de pompe silencieux intégré en circuit fermé.",
        dimensions: "Sur mesure (Modèle exposé : H 80 cm)",
        material: "Cuivre rouge patiné vernis",
        technique: "Soudure traditionnelle, martelage et ciselure complexe",
        availability: "Sur commande uniquement (3 semaines)"
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
