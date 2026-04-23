/* ============================================================
   STARS OF HOPE — FR / EN Language Toggle  (all 4 pages)
   ============================================================ */

(function () {

  const T = {

    /* ══ SHARED NAV / BUTTONS / FOOTER ═══════════════════════ */
    "Home":                       "Accueil",
    "Foundation":                 "Fondation",
    "Tickets":                    "Billets",
    "Donate":                     "Donner",
    "Get Tickets":                "Obtenir des billets",
    "Stars of Hope, Les Etoiles d'Espoir":  "Les Étoiles d'Espoir — Stars of Hope",
    "Stars of Hope — Les Etoiles d'Espoir": "Les Étoiles d'Espoir — Stars of Hope",
    "2025 Montreal Children's Hospital Foundation": "2025 Fondation de l'Hôpital de Montréal pour enfants",
    "© 2025 Montreal Children's Hospital Foundation": "© 2025 Fondation de l'Hôpital de Montréal pour enfants",
    "Campaign strategy, design and digital execution by": "Stratégie de campagne, design et exécution numérique par",
    "Event fundraising specialists": "Spécialistes en collecte de fonds événementielle",

    /* ══ STARS-OF-HOPE.HTML ════════════════════════════════════ */
    "Montreal Children's Hospital Foundation": "Fondation de l'Hôpital de Montréal pour enfants",
    "Les Etoiles d'Espoir":       "Les Étoiles d'Espoir",
    "Stars of Hope":              "Étoiles d'Espoir",
    "Dream for a Better Health":  "Rêver d'une meilleure santé",
    "A prestigious charity gala benefiting Le SPOT Montreal":
      "Un gala de charité prestigieux au profit du SPOT Montréal",
    "One extraordinary evening bringing together Montreal's philanthropic elite to fund new equipment for the first center taking care of adolescent mental health.":
      "Une soirée extraordinaire réunissant l'élite philanthropique de Montréal pour financer de nouveaux équipements pour le premier centre dédié à la santé mentale des adolescents.",
    "May 9, 2026":                "9 mai 2026",
    "Four Seasons Hotel Montreal":"Hôtel Four Seasons Montréal",
    "6:00 PM":                    "18 h",
    "The Cause":                  "La Cause",
    "Brand Identity":             "Identité visuelle",
    "Visual language":            "Le langage visuel",
    "of the":                     "du",
    "night sky.":                 "ciel nocturne.",
    "Every element colour, type, motif is rooted in one image: the Montreal night sky, gilded stars, and the quiet luxury of a black-tie evening that changes lives.":
      "Chaque élément — couleur, typographie, motif — est ancré dans une image : le ciel nocturne de Montréal, des étoiles dorées et le luxe discret d'une soirée en tenue de soirée qui change des vies.",
    "Navy":   "Marine",
    "Royal":  "Royal",
    "Gold":   "Or",
    "Cream":  "Crème",
    "Cormorant": "Cormorant",
    "Pinyon Script": "Pinyon Script",
    "Outfit body and UI": "Outfit — corps et interface",
    "Palette": "Palette",
    "Typography": "Typographie",
    "Star Motif": "Motif étoile",
    "The 8-point star cross runs through every touchpoint: invite, AR wall, NFC card, social posts. Never decorative always meaningful.":
      "L'étoile à huit branches traverse chaque point de contact : invitation, mur AR, carte NFC, publications. Jamais décorative — toujours signifiante.",
    "Tone of Voice": "Ton éditorial",
    "Bilingual FR/EN. Elevated but warm. Exclusive but never elitist. Every headline is an invitation.":
      "Bilingue FR/EN. Élevé mais chaleureux. Exclusif, jamais élitiste. Chaque titre est une invitation.",
    "Supporting youth": "Soutenir les jeunes",
    "when it matters":  "quand ça compte",
    "most.":            "le plus.",
    "All funds raised go directly to Le SPOT Montreal, a pioneering adolescent mental health centre that lets teenagers in crisis receive intensive therapy without leaving school.":
      "Tous les fonds amassés vont directement au SPOT Montréal, un centre pionnier en santé mentale des adolescents qui permet aux jeunes en crise de recevoir une thérapie intensive sans quitter l'école.",
    "Le SPOT Montreal": "Le SPOT Montréal",
    "One of Canada's largest ambulatory centres for teens in suicidal crisis. Individual, family, and group therapy in a calming space without hospitalization.":
      "L'un des plus grands centres ambulatoires du Canada pour adolescents en crise suicidaire. Thérapie individuelle, familiale et de groupe dans un espace apaisant, sans hospitalisation.",
    "Where Your Gift Goes": "À quoi sert votre don",
    "Your donation equips Le SPOT with books, TVs, sensory tools, and comfort items, turning clinical rooms into warm, healing spaces teens want to be in.":
      "Votre don équipe Le SPOT en livres, téléviseurs, outils sensoriels et articles de confort — transformant des salles cliniques en espaces chaleureux où les jeunes veulent être.",
    "We Speak Children": "Nous parlons aux enfants",
    "The Montreal Children's Hospital serves its community in French, English, and 45 other languages, culturally sensitive support for a deeply diverse Quebec community.":
      "L'Hôpital de Montréal pour enfants sert sa communauté en français, en anglais et dans 45 autres langues — un soutien culturellement adapté pour une communauté québécoise profondément diversifiée.",
    "Canadian youth face a mental health challenge": "des jeunes Canadiens vivent un défi de santé mentale",
    "Languages served at The Children's": "langues desservies à l'Hôpital pour enfants",
    "Of proceeds fund Le SPOT directly": "des recettes financent Le SPOT directement",
    "The Evening": "La Soirée",
    "An extraordinary night": "Une soirée extraordinaire",
    "for an extraordinary cause.": "pour une cause extraordinaire.",
    "6:00 p.m.": "18 h",
    "Doors Open": "Ouverture des portes",
    "Champagne, curated hors-d'oeuvres, and live jazz in the Grand Salon.":
      "Champagne, amuse-bouches sélectionnés et jazz en direct dans le Grand Salon.",
    "7:30 p.m.": "19 h 30",
    "Cocktail": "Cocktail",
    "A five-course tasting menu by an award-winning chef. Stories from Le SPOT woven gently between each course.":
      "Un menu dégustation cinq services par un chef primé. Des témoignages du SPOT tissés doucement entre chaque plat.",
    "8:00 p.m.": "20 h",
    "Dinner": "Dîner",
    "Exclusive lots for discerning collectors, followed by the pledge moment. Your chance to become a named Star of Hope.":
      "Des lots exclusifs pour collectionneurs avisés, suivis du moment d'engagement. Votre chance de devenir une Étoile d'Espoir nommée.",
    "9:30 p.m.": "21 h 30",
    "Dance Show": "Spectacle de danse",
    "An exclusive live performance to close a night that will be remembered and that will change young lives.":
      "Un spectacle en direct exclusif pour clore une soirée mémorable qui changera des vies.",
    "11:00 p.m.": "23 h",
    "Doors Closed": "Fermeture des portes",
    "Strategic Positioning": "Positionnement stratégique",
    "Modernizing": "Moderniser la",
    "philanthropy.": "philanthropie.",
    "Stars of Hope breaks every dusty charity trope. It feels like an event people want to be at, not one they feel obligated to attend.":
      "Les Étoiles d'Espoir brisent tous les clichés caritatifs. C'est un événement où les gens veulent être, non pas où ils se sentent obligés d'aller.",
    "Break Gala Fatigue": "Briser la fatigue des galas",
    "HNWIs attend dozens of galas per year. We differentiate through immersive storytelling and radical exclusivity.":
      "Les HNWI assistent à des dizaines de galas par an. Nous nous distinguons par une narration immersive et une exclusivité radicale.",
    "Tangible Impact": "Impact tangible",
    "Replace vague donation language with hyper-specific outcomes. A $500 seat funds a teen's sensory kit.":
      "Remplacer le langage de don vague par des résultats ultra-spécifiques. Un siège à 500 $ finance la trousse sensorielle d'un adolescent.",
    "Strategic FOMO": "FOMO stratégique",
    "Limited seats. Named recognition. Private early access. We engineer scarcity so demand exceeds capacity.":
      "Places limitées. Reconnaissance nominative. Accès anticipé privé. Nous créons la rareté afin que la demande dépasse la capacité.",
    "Bilingual and Modern": "Bilingue et moderne",
    "All communications run in French and English simultaneously, reflecting Montreal's unique identity.":
      "Toutes les communications sont diffusées simultanément en français et en anglais, reflétant l'identité unique de Montréal.",
    "Key Audience": "Public cible",
    "Who we're": "À qui nous",
    "speaking to.": "nous adressons.",
    "Our core demographic: High-Net-Worth Individuals in the Greater Montreal Area. Active or retired professionals aged 40 to 70, fully bilingual, and accustomed to exclusivity.":
      "Notre groupe démographique principal : des individus à valeur nette élevée dans la grande région de Montréal. Des professionnels actifs ou retraités de 40 à 70 ans, pleinement bilingues et habitués à l'exclusivité.",
    "The Corporate Leader": "Le leader d'entreprise",
    "C-suite executives, 45 to 65. Motivated by peer recognition, CSR, and premium networking.":
      "Dirigeants C-suite, 45 à 65 ans. Motivés par la reconnaissance de leurs pairs, la RSE et le réseautage premium.",
    "Secure Your VIP Table": "Réservez votre table VIP",
    "The Philanthropist": "Le philanthrope",
    "Legacy donors, 55 to 70. Deeply motivated by cause impact and concrete outcome reporting.":
      "Donateurs de patrimoine, 55 à 70 ans. Profondément motivés par l'impact et les résultats concrets.",
    "Fund a Teen's Recovery": "Financer le rétablissement d'un adolescent",
    "The Rising Power Player": "La nouvelle puissance montante",
    "Entrepreneurs, 40 to 50. Building their philanthropic identity. They respond to FOMO and social currency.":
      "Entrepreneurs, 40 à 50 ans. En train de bâtir leur identité philanthropique. Ils réagissent au FOMO et à la monnaie sociale.",
    "Become a Star of Hope": "Devenez une Étoile d'Espoir",
    "Experience Design": "Design de l'expérience",
    "Designed for": "Conçu pour",
    "the senses and the soul.": "les sens et l'âme.",
    "Every touchpoint is intentional. The tone: celebratory but deeply connected to the cause.":
      "Chaque point de contact est intentionnel. Le ton : festif mais profondément ancré dans la cause.",
    "Arrival Moment": "Moment d'arrivée",
    "Guests enter through a corridor of suspended golden stars, each bearing an anonymized Le SPOT teen's name.":
      "Les invités entrent par un corridor d'étoiles dorées suspendues, chacune portant le prénom anonymisé d'un jeune du SPOT.",
    "Tonal Balance": "Équilibre de ton",
    "Stories from Le SPOT woven between courses, gently, humanly. Never a lecture. Always a moment that touches the heart.":
      "Des témoignages du SPOT tissés entre les plats, avec douceur et humanité. Jamais un cours — toujours un moment qui touche le cœur.",
    "The Pledge Ritual": "Le rituel d'engagement",
    "A live counter projects each donation as a new star in the constellation. The crowd watches the sky fill together.":
      "Un compteur en direct projette chaque don sous forme d'étoile dans la constellation. La foule regarde le ciel se remplir ensemble.",
    "Premium Gastronomy": "Gastronomie premium",
    "Five courses by an award-winning Montreal chef. Each dish named after a theme: Hope, Resilience, Light.":
      "Cinq services par un chef montréalais primé. Chaque plat porte un thème : Espoir, Résilience, Lumière.",
    "Live Entertainment": "Divertissement en direct",
    "A performance by a respected Montreal artist with personal ties to mental health awareness.":
      "Un spectacle d'un artiste montréalais reconnu ayant des liens personnels avec la sensibilisation à la santé mentale.",
    "Exclusive Takeaway": "Souvenir exclusif",
    "Every guest departs with a handcrafted starmap bearing their named star and the total raised that evening.":
      "Chaque invité repart avec une carte des étoiles artisanale portant son étoile nommée et le total amassé ce soir-là.",
    "Design Execution": "Exécution visuelle",
    "Visual concepts": "Des concepts visuels",
    "brought to life.": "donnés vie.",
    "The star motif runs through every touchpoint, from the gold-foil invitation to the social media campaign.":
      "Le motif étoile traverse chaque point de contact, de l'invitation à dorure à la campagne sur les réseaux sociaux.",
    "Social Media Posts": "Publications sur les réseaux sociaux",
    "Emerging Technology": "Technologies émergentes",
    "Tech that makes": "La technologie qui rend",
    "the night unforgettable.": "la soirée inoubliable.",
    "Stars of Hope deploys emerging technology to remove friction from giving, amplify emotion, and convert one-time attendees into lifetime MCHF donors.":
      "Les Étoiles d'Espoir déploient des technologies émergentes pour éliminer les obstacles au don, amplifier les émotions et convertir les participants ponctuels en donateurs à vie de la FHSJ.",
    "The Star Wall: Live AR Constellation": "Le Mur des Étoiles : constellation AR en direct",
    "A floor-to-ceiling projection at the venue entrance. Each donation unlocks a named star joining a living constellation. Stars slowly form the silhouette of a child, building emotional momentum in real time.":
      "Une projection du sol au plafond à l'entrée du lieu. Chaque don déverrouille une étoile nommée rejoignant une constellation vivante. Les étoiles forment progressivement la silhouette d'un enfant, créant un élan émotionnel en temps réel.",
    "Pledge tiers ($500 / $5k / $25k) add stars to the shared sky":
      "Les niveaux d'engagement (500 $ / 5 k$ / 25 k$) ajoutent des étoiles au ciel commun",
    "Guests scan table QR codes to watch their personal star appear live":
      "Les invités scannent les codes QR de table pour voir leur étoile personnelle apparaître en direct",
    "Running total projected: Together, we've raised $XXX,XXX tonight":
      "Total projeté : Ensemble, nous avons amassé XXX XXX $ ce soir",
    "Shareable AR photo frame via mobile browser, no download required":
      "Cadre photo AR partageable via navigateur mobile, sans téléchargement",
    "NFC Giving Tokens": "Jetons NFC de don",
    "Each seat receives a gold-embossed Star of Hope NFC card. One tap opens a personalized giving page, pre-filled name, history, and suggested impact amounts.":
      "Chaque siège reçoit une carte NFC Étoile d'Espoir dorée. Un seul toucher ouvre une page de don personnalisée, avec nom, historique et montants d'impact suggérés préremplis.",
    "Giving in under 10 seconds": "Don en moins de 10 secondes",
    "Real-Time Digital Auction": "Enchères numériques en temps réel",
    "Guests bid via smartphone alongside the live auction. An anonymous leaderboard drives competition, proven to increase average lot value by 40%.":
      "Les invités enchérissent via smartphone en parallèle de l'enchère en direct. Un classement anonyme stimule la compétition, avéré augmenter la valeur moyenne des lots de 40 %.",
    "AI nudges alert near-miss bidders": "Des suggestions IA alertent les enchérisseurs proches du lot",
    "72-Hour Follow-Up Engine": "Système de suivi 72 heures",
    "Post-gala: personalized impact video, a your star is still shining email, and a warm call script for high-capacity non-pledgers.":
      "Post-gala : vidéo d'impact personnalisée, un courriel « votre étoile brille toujours » et un script d'appel chaleureux pour les non-donateurs à fort potentiel.",
    "Annual Stewardship Loop": "Cycle annuel de fidélisation",
    "Every November, on the gala anniversary, donors receive a Le SPOT Year in Review and a soft ask for the next Stars of Hope.":
      "Chaque novembre, à l'anniversaire du gala, les donateurs reçoivent un bilan annuel du SPOT et une invitation douce pour les prochaines Étoiles d'Espoir.",
    "Target: 60% retention in 18 months": "Objectif : 60 % de rétention en 18 mois",
    "Media and Promotion Strategy": "Stratégie médias et promotion",
    "Multi-channel.": "Multicanal.",
    "Hyper-targeted.": "Hyper-ciblé.",
    "Every channel serves a specific role in building awareness, desire, and urgency. The goal: a sold-out event within 12 weeks.":
      "Chaque canal joue un rôle précis pour bâtir la notoriété, le désir et l'urgence. Objectif : un événement complet en 12 semaines.",
    "Personalized Email: 3 Waves": "Courriel personnalisé : 3 vagues",
    "Wave 1: exclusive save-the-date to past donors. Wave 2: impact brief with Le SPOT case studies. Wave 3: urgency close.":
      "Vague 1 : save-the-date exclusif aux donateurs passés. Vague 2 : bref d'impact avec études de cas du SPOT. Vague 3 : clôture d'urgence.",
    "Instagram: 9-Post Campaign": "Instagram : campagne de 9 publications",
    "Teaser, Awareness, Carousel, Impact, BTS Venue, Storytelling, Reel, Progress, CTA. Geo-targeted to Westmount, Outremont, and downtown Montreal.":
      "Teaser, notoriété, carrousel, impact, coulisses du lieu, storytelling, reel, progression, CTA. Géociblé vers Westmount, Outremont et le centre-ville de Montréal.",
    "Facebook: Community and Logistics": "Facebook : communauté et logistique",
    "Longer-form Le SPOT impact stories, retargeting past MCHF donors, and an event logistics page. Tailored for the 45 to 70 demographic.":
      "Récits d'impact plus longs du SPOT, reciblage des anciens donateurs de la FHSJ et page logistique de l'événement. Adapté au groupe démographique des 45 à 70 ans.",
    "Premium Print Invitations": "Invitations imprimées premium",
    "Gold-foil embossed on 600gsm cotton stock. Hand-addressed and couriered to 300 top prospects.":
      "Dorure à chaud sur papier coton 600 g. Adressées à la main et expédiées par coursier à 300 prospects prioritaires.",
    "How We Make It Successful": "Comment nous assurons le succès",
    "Three outcomes.": "Trois résultats.",
    "All measurable.": "Tous mesurables.",
    "Here is how Blume.co ensures Stars of Hope delivers on every metric that matters to MCHF.":
      "Voici comment Blume.co garantit que les Étoiles d'Espoir atteignent chaque indicateur important pour la FHSJ.",
    "Target: $500K raised": "Objectif : 500 000 $ amassés",
    "Technology-Driven Revenue": "Revenus pilotés par la technologie",
    "NFC giving and digital auction removes all friction from donating. Frictionless giving increases average donations by 30 to 50%.":
      "Le don NFC et les enchères numériques éliminent toute friction dans le processus de don. Un don sans friction augmente les dons moyens de 30 à 50 %.",
    "Target: Sold out": "Objectif : Complet",
    "FOMO-Engineered Sellout": "Sold-out par ingénierie du FOMO",
    "Personalized emails, Instagram countdown content, AR Star Wall word-of-mouth, and a limited-seat format combine to guarantee a sellout 6 weeks before the date.":
      "Des courriels personnalisés, du contenu de compte à rebours Instagram, le bouche-à-oreille du mur AR et un format à places limitées combinent pour garantir le complet 6 semaines avant la date.",
    "Target: 60% retention": "Objectif : 60 % de rétention",
    "Long-Term Donor Cultivation": "Cultivation à long terme des donateurs",
    "Named stars, the annual stewardship email, and personal follow-up convert one-time attendees into recurring MCHF donors.":
      "Les étoiles nommées, le courriel annuel de fidélisation et le suivi personnel convertissent les participants ponctuels en donateurs récurrents de la FHSJ.",

    /* ══ FOUNDATION.HTML ═══════════════════════════════════════ */
    "About": "À propos",
    "Montreal Children's": "Hôpital de Montréal pour",
    "Hospital Foundation": "enfants — Fondation",
    "The Montreal Children's Hospital is a global leader in pediatric medicine with a groundbreaking multicultural program, offering services in French, English and 45 other languages.":
      "L'Hôpital de Montréal pour enfants est un leader mondial en médecine pédiatrique avec un programme multiculturel novateur, offrant des services en français, en anglais et dans 45 autres langues.",
    "The Children's is proud of its ability to serve an increasingly diverse Quebec community. But even more than that —":
      "L'Hôpital est fier de servir une communauté québécoise de plus en plus diversifiée. Mais surtout —",
    "We Speak Children.": "Nous parlons aux enfants.",
    "Fondation de l'Hopital de Montreal pour enfants": "Fondation de l'Hôpital de Montréal pour enfants",
    "Our Mission": "Notre mission",
    "We believe giving must": "Nous croyons que donner doit",
    "do good and feel good.": "faire du bien et se sentir bien.",
    "The Montreal Children's Hospital is a global leader in pediatric medicine with a groundbreaking multicultural program. We serve our community in French, English, and 45 other languages — because every child deserves to be understood.":
      "L'Hôpital de Montréal pour enfants est un leader mondial en médecine pédiatrique. Nous servons notre communauté en français, en anglais et dans 45 autres langues — parce que chaque enfant mérite d'être compris.",
    "We believe that giving must do good and feel good. This is why we are donor-centered and respectful, we behave with integrity, value teamwork and are dedicated to making others and ourselves shine.":
      "Nous croyons que donner doit faire du bien et se sentir bien. C'est pourquoi nous sommes centrés sur le donateur et respectueux, nous agissons avec intégrité, valorisons le travail d'équipe et nous engageons à faire rayonner les autres et nous-mêmes.",
    "We are donor-centered and respectful, we behave with integrity, value teamwork and are dedicated to making others and ourselves":
      "Nous sommes centrés sur le donateur et respectueux, nous agissons avec intégrité, valorisons le travail d'équipe et nous engageons à faire rayonner les autres et nous-mêmes",
    "shine.": "rayonner.",
    "The Children's multicultural program is one of the most extensive in the country — a reflection of the rich diversity of Quebec itself. Every child who walks through our doors receives care in the language and cultural context that makes them feel safe, seen, and supported.":
      "Le programme multiculturel de l'Hôpital est l'un des plus étendus au pays — le reflet de la riche diversité du Québec. Chaque enfant qui franchit nos portes reçoit des soins dans la langue et le contexte culturel qui le font se sentir en sécurité, vu et soutenu.",
    "Our Values": "Nos valeurs",
    "What drives": "Ce qui guide",
    "everything we do.": "tout ce que nous faisons.",
    "Four principles guide every decision, every interaction, and every dollar raised in the name of Montreal's children.":
      "Quatre principes guident chaque décision, chaque interaction et chaque dollar amassé au nom des enfants de Montréal.",
    "Donor-Centered": "Centré sur le donateur",
    "We are respectful and grateful. Giving must feel as good as it does good.":
      "Nous sommes respectueux et reconnaissants. Donner doit se sentir aussi bien que faire du bien.",
    "Integrity": "Intégrité",
    "We behave with integrity in how we raise funds, communicate, and steward every gift.":
      "Nous agissons avec intégrité dans notre collecte de fonds, notre communication et la gestion de chaque don.",
    "Teamwork": "Travail d'équipe",
    "We value teamwork across departments, cultures, and the entire community rallying around Montreal's children.":
      "Nous valorisons le travail d'équipe entre départements, cultures et toute la communauté unie autour des enfants de Montréal.",
    "Making Others Shine": "Faire rayonner les autres",
    "We are dedicated to making others and ourselves shine — lifting donors, families, staff, and the children at the heart of everything we do.":
      "Nous nous engageons à faire rayonner les autres et nous-mêmes — en soutenant les donateurs, les familles, le personnel et les enfants au cœur de tout ce que nous faisons.",
    "Multicultural Care": "Soins multiculturels",
    "We speak": "Nous parlons",
    "47 languages.": "47 langues.",
    "Services available in French, English, and 45 additional languages — because every child deserves to be understood.":
      "Services disponibles en français, en anglais et dans 45 langues supplémentaires — parce que chaque enfant mérite d'être compris.",
    "+ 27 more": "+ 27 autres",

    /* ══ TICKETS.HTML ══════════════════════════════════════════ */
    "Stars of Hope — May 9, 2026": "Les Étoiles d'Espoir — 9 mai 2026",
    "Get Your Tickets": "Obtenez vos billets",
    "Choose your": "Choisissez votre",
    "experience.": "expérience.",
    "Every ticket is a contribution to the children and families of the Montreal Children's Hospital. Select the experience that speaks to your heart.":
      "Chaque billet est une contribution aux enfants et aux familles de l'Hôpital de Montréal pour enfants. Sélectionnez l'expérience qui parle à votre cœur.",
    "Regular": "Régulier",
    "CA Dollars per person": "Dollars CA par personne",
    "1 cocktail drink": "1 boisson cocktail",
    "1 gift bag": "1 sac cadeau",
    "Gala access": "Accès au gala",
    "Dinner service": "Service de dîner",
    "Reserve a Seat": "Réserver une place",
    "Most Popular": "Le plus populaire",
    "2 cocktail drinks": "2 boissons cocktail",
    "2 gift bags": "2 sacs cadeaux",
    "Front row seat": "Siège en première rangée",
    "Priority check-in": "Enregistrement prioritaire",
    "Reserve a VIP Seat": "Réserver une place VIP",
    "Diamond": "Diamant",
    "4 cocktail drinks": "4 boissons cocktail",
    "Your name on the Foundation website": "Votre nom sur le site de la Fondation",
    "Reserve a Diamond Seat": "Réserver une place Diamant",
    "All proceeds go directly to the Montreal Children's Hospital Foundation · Tax receipts issued":
      "Tous les profits vont directement à la Fondation de l'Hôpital de Montréal pour enfants · Reçus fiscaux émis",
    "For group bookings or sponsorship inquiries,":
      "Pour les réservations de groupe ou les demandes de commandite,",
    "contact us": "contactez-nous",

    /* ══ DONATE.HTML ═══════════════════════════════════════════ */
    "Make a Difference": "Faites une différence",
    "Your gift": "Votre don",
    "changes lives.": "change des vies.",
    "Every dollar donated goes directly to care, research, and support programs at the Montreal Children's Hospital.":
      "Chaque dollar donné va directement aux soins, à la recherche et aux programmes de soutien de l'Hôpital de Montréal pour enfants.",
    "Select an Amount": "Sélectionnez un montant",
    "Other": "Autre",
    "Custom Amount (CA$)": "Montant personnalisé (CA$)",
    "First Name": "Prénom",
    "Last Name": "Nom de famille",
    "Email Address": "Adresse courriel",
    "Card Number": "Numéro de carte",
    "Expiry": "Date d'expiration",
    "CVV": "CVV",
    "Donate Now": "Donner maintenant",
    "Secured with SSL · Tax receipt issued · Charitable reg. #10000 1234 RR0001":
      "Sécurisé par SSL · Reçu fiscal émis · Enreg. organisme de bienfaisance nº 10000 1234 RR0001",
    "Your Impact": "Votre impact",
    "See what your": "Voyez ce que",
    "gift makes possible.": "votre don rend possible.",
    "Every contribution directly improves the lives of children and families at the Montreal Children's Hospital.":
      "Chaque contribution améliore directement la vie des enfants et des familles de l'Hôpital de Montréal pour enfants.",
    "Provides comfort kits for children during overnight hospital stays":
      "Fournit des trousses de confort pour les enfants lors de séjours hospitaliers de nuit",
    "Funds interpreter services for a family in one of our 47 languages":
      "Finance des services d'interprétation pour une famille dans l'une de nos 47 langues",
    "Supports one hour of pediatric research at The Children's":
      "Soutient une heure de recherche pédiatrique à l'Hôpital",
    "Helps equip a treatment room with the latest medical technology":
      "Aide à équiper une salle de soins avec les dernières technologies médicales",
    "Sponsors a full day of care for a child in our specialized units":
      "Parraine une journée complète de soins pour un enfant dans nos unités spécialisées",
  };

  /* ── BUTTON + STYLES ──────────────────────────────────────── */
  const css = document.createElement("style");
  css.textContent = `
    #lang-toggle {
      position: fixed; top: 16px; right: 20px; z-index: 10000;
      display: flex; align-items: center; gap: 4px;
      padding: 6px 18px;
      background: rgba(8,16,52,0.88);
      border: 1px solid #c9a84c; border-radius: 999px;
      font-family: 'Outfit', sans-serif; font-size: 12px;
      font-weight: 600; letter-spacing: 0.14em; color: #c9a84c;
      cursor: pointer; backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: background .2s, color .2s, box-shadow .2s;
      user-select: none;
      box-shadow: 0 2px 16px rgba(0,0,0,.35);
    }
    #lang-toggle:hover { background:#c9a84c; color:#080f34; box-shadow:0 4px 24px rgba(201,168,76,.35); }
    #lang-toggle .sep  { opacity:.35; font-weight:300; margin:0 3px; }
    #lang-toggle .on   { font-weight:800; }
  `;
  document.head.appendChild(css);

  const btn = document.createElement("button");
  btn.id = "lang-toggle";
  btn.setAttribute("aria-label", "Toggle language / Changer de langue");
  document.body.appendChild(btn);

  /* ── STATE ────────────────────────────────────────────────── */
  let lang = sessionStorage.getItem("soh-lang") || "en";

  function renderBtn() {
    btn.innerHTML = lang === "en"
      ? `<span class="on">EN</span><span class="sep">|</span>FR`
      : `EN<span class="sep">|</span><span class="on">FR</span>`;
  }

  /* ── WRAP ALL MATCHING TEXT NODES ONCE ────────────────────── */
  function wrapAll() {
    const SKIP = new Set(["SCRIPT","STYLE","NOSCRIPT","BUTTON","INPUT","TEXTAREA","SELECT","OPTION"]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (SKIP.has(n.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        if (!n.textContent.trim())              return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const raw = node.textContent;
      const key = raw.trim();
      if (!T[key]) return;
      const lead  = raw.match(/^\s*/)[0];
      const trail = raw.match(/\s*$/)[0];
      const span  = document.createElement("span");
      span.dataset.en    = key;
      span.dataset.fr    = T[key];
      span.dataset.lead  = lead;
      span.dataset.trail = trail;
      span.textContent   = raw;
      node.parentNode.replaceChild(span, node);
    });
  }

  /* ── APPLY CURRENT LANG TO ALL WRAPPED NODES ─────────────── */
  function applyLang() {
    document.querySelectorAll("[data-en]").forEach(el => {
      const lead  = el.dataset.lead  || "";
      const trail = el.dataset.trail || "";
      el.textContent = lead + (lang === "fr" ? el.dataset.fr : el.dataset.en) + trail;
    });
    /* placeholders */
    document.querySelectorAll("[placeholder]").forEach(el => {
      const key = el.dataset.enPh || el.getAttribute("placeholder").trim();
      if (!el.dataset.enPh) el.dataset.enPh = key;
      if (T[key]) el.setAttribute("placeholder", lang === "fr" ? T[key] : el.dataset.enPh);
    });
    /* labels */
    document.querySelectorAll("label").forEach(el => {
      if (el.dataset.enLabel) {
        el.textContent = lang === "fr" ? el.dataset.frLabel : el.dataset.enLabel;
        return;
      }
      const key = el.textContent.trim();
      if (!T[key]) return;
      el.dataset.enLabel = key;
      el.dataset.frLabel = T[key];
      if (lang === "fr") el.textContent = T[key];
    });
    document.documentElement.lang = lang;
  }

  /* ── BOOT ─────────────────────────────────────────────────── */
  wrapAll();
  renderBtn();
  applyLang();

  btn.addEventListener("click", () => {
    lang = lang === "en" ? "fr" : "en";
    sessionStorage.setItem("soh-lang", lang);
    applyLang();
    renderBtn();
  });

})();