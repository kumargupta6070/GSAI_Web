# 🏭 GSA Industries India Pvt Ltd — Website Rebuild Plan

## Project Overview

**Client:** GSA Industries India Pvt Ltd (GSAI)  
**Existing Site:** [gsainds.com](https://gsainds.com/)  
**Goal:** Rebuild the existing WordPress/Thrive-based website into a **modern React SPA** with next-level animations, premium UI/UX, and stunning visuals — making it an irresistible demo for the client.  
**Deployment Target:** Netlify (static frontend)  
**Backend:** Node.js (to be added later)

---

## 📊 Existing Website Content Audit

### Navigation Structure (from gsainds.com)
| Menu Item | URL | Sub-items |
|-----------|-----|-----------|
| Home | `/` | — |
| About Us | `/about-us/` | Company Overview, Vision & Mission, Certifications |
| Products | `/products/` | Alfin Rings, Monotherm Pistons, Gears, Yokes & Cross, Forgings, Castings |
| Capabilities | `/capabilities/` | Engineering & Design, Tool & Die, Forging & Press, Heat Treatment, CNC Machining, Quality Lab |
| Industries | `/industries/` | Automotive, Agriculture, Railways, Construction, Energy, Defense |
| Quality | `/quality/` | Certifications, Lab Equipment, Processes |
| Contact | `/contact/` | Contact Form, Google Map, Address |

### Company Data & Statistics
| Stat | Value |
|------|-------|
| Founded | Established manufacturer (multi-decade presence) |
| Location | Village Daulatpur, Rasulpur Jodan Road, Patiala, Punjab – 147001, India |
| Phone | +91-175-5041269 |
| Email | info@gsainds.com |
| Certifications | IATF 16949, ISO 14001, ISO 45001, CQI-9 |
| Alfin Ring Market | Substantial national & global market share |
| Agriculture Brand | Agrizone |

### Products Portfolio
1. **Alfin Rings** — Bonded inserts for diesel pistons (market leader)
2. **Monotherm Pistons** — Steel piston forgings for heavy diesel engines
3. **Piston Tops / Crowns** — Forged piston crowns
4. **Industrial Gears & Gear Blanks** — Custom precision gears
5. **Yokes & Cross Components** — Drivetrain/transmission parts
6. **Custom Forgings** — Open die, closed die, hot forgings
7. **Sand Castings** — Custom engineered cast components
8. **EV & Suspension Parts** — Aluminum suspension components for EVs
9. **Agrizone Agricultural Implements** — Straw reapers, laser land levelers, super seeders, potato harvesters, silage harvesters

### Capabilities / Infrastructure
1. **Engineering & Design** — PLM, AutoCAD, Unigraphics, VAVE
2. **Tool & Die Making** — 5-axis Mazak CNC, VMC, EDM, in-house tooling
3. **Forging & Press Line** — 1000T & 2500T CNC Screw Presses, hydraulic presses, induction heating (700KW/350KW)
4. **Heat Treatment** — CQI-9, SCADA-controlled continuous furnaces (normalizing, annealing, hardening & tempering, induction hardening, solution annealing)
5. **CNC Machining** — Multi-axis CNC turning centers, VMCs
6. **Quality Lab (NABL-certified)** — Optical emission spectrometer, UTM, hardness testers, metallurgical microscope + image analyzer, FaroArm CMM

### Industries Served
Automotive · Agriculture · Railways · Construction · Energy · Defense · Aerospace

---

## 🎨 Design Philosophy — "Industrial Premium"

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| **Primary Dark** | Deep Industrial Charcoal | `#0A0F1A` |
| **Primary Accent** | Electric Cyan | `#00D4FF` |
| **Secondary Accent** | Molten Amber / Forge Orange | `#FF6B2C` |
| **Tertiary** | Steel Silver | `#B8C5D3` |
| **Surface Dark** | Gunmetal | `#141B2D` |
| **Surface Light** | Soft White Smoke | `#F0F2F5` |
| **Success** | Precision Green | `#00E676` |
| **Text Primary** | Pure White | `#FFFFFF` |
| **Text Secondary** | Muted Steel | `#8892A4` |
| **Gradient Hero** | `linear-gradient(135deg, #0A0F1A, #141B2D, #1A2540)` | — |

### Typography
- **Headings:** `Outfit` (Google Fonts) — bold, geometric, modern industrial
- **Body:** `Inter` (Google Fonts) — clean, highly legible
- **Accent/Numbers:** `Space Grotesk` — for statistics, counters, technical data

### Design Principles
1. **Dark-mode dominant** — Industrial elegance with dark backgrounds
2. **Glassmorphism** — Frosted glass panels for cards, navigation overlays
3. **Cinematic hero sections** — Full-viewport with subtle parallax
4. **Animated counters** — Stats that count up on scroll into view
5. **Reveal animations** — Elements slide/fade in as user scrolls
6. **Particle effects** — Subtle spark/ember particles in hero for forge ambiance
7. **Hover micro-interactions** — Cards lift, glow borders, magnetic cursor effects
8. **Smooth page transitions** — Cross-fade between routes
9. **3D tilt effects** — Product cards tilt on mouse hover
10. **Staggered grid reveals** — Products/capabilities appear in cascading sequence

---

## 🗂️ Folder Structure

```
gsa_website/
├── public/
│   ├── images/                    # All static images (from existing site + optimized)
│   │   ├── hero/
│   │   ├── products/
│   │   ├── capabilities/
│   │   ├── industries/
│   │   ├── certifications/
│   │   └── logos/
│   ├── fonts/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── app/                       # App-level configuration
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── routes.jsx             # React Router configuration
│   │
│   ├── common/                    # 🔁 Reusable common components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   ├── Input/
│   │   │   ├── Input.jsx
│   │   │   └── Input.css
│   │   ├── TextArea/
│   │   │   ├── TextArea.jsx
│   │   │   └── TextArea.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   ├── SectionTitle/
│   │   │   ├── SectionTitle.jsx
│   │   │   └── SectionTitle.css
│   │   ├── StatCounter/
│   │   │   ├── StatCounter.jsx
│   │   │   └── StatCounter.css
│   │   ├── CustomAlert/
│   │   │   ├── CustomAlert.jsx
│   │   │   └── CustomAlert.css
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.css
│   │   ├── Loader/
│   │   │   ├── Loader.jsx
│   │   │   └── Loader.css
│   │   ├── ScrollToTop/
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── ScrollToTop.css
│   │   ├── Breadcrumb/
│   │   │   ├── Breadcrumb.jsx
│   │   │   └── Breadcrumb.css
│   │   └── Logo/
│   │       ├── Logo.jsx
│   │       └── Logo.css
│   │
│   ├── animations/                # 🎬 All animation-related files
│   │   ├── ScrollReveal/
│   │   │   ├── ScrollReveal.jsx
│   │   │   └── ScrollReveal.css
│   │   ├── ParallaxSection/
│   │   │   ├── ParallaxSection.jsx
│   │   │   └── ParallaxSection.css
│   │   ├── CounterAnimation/
│   │   │   ├── CounterAnimation.jsx
│   │   │   └── CounterAnimation.css
│   │   ├── TiltCard/
│   │   │   ├── TiltCard.jsx
│   │   │   └── TiltCard.css
│   │   ├── ParticleEmber/
│   │   │   ├── ParticleEmber.jsx
│   │   │   └── ParticleEmber.css
│   │   ├── TextReveal/
│   │   │   ├── TextReveal.jsx
│   │   │   └── TextReveal.css
│   │   ├── PageTransition/
│   │   │   ├── PageTransition.jsx
│   │   │   └── PageTransition.css
│   │   ├── MagneticButton/
│   │   │   ├── MagneticButton.jsx
│   │   │   └── MagneticButton.css
│   │   ├── StaggerReveal/
│   │   │   ├── StaggerReveal.jsx
│   │   │   └── StaggerReveal.css
│   │   ├── GlowBorder/
│   │   │   ├── GlowBorder.jsx
│   │   │   └── GlowBorder.css
│   │   └── useIntersectionObserver.js   # Custom hook for scroll-triggered animations
│   │
│   ├── features/                  # 📄 Feature-based page modules
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Home.css
│   │   │   ├── components/
│   │   │   │   ├── HeroSection/
│   │   │   │   │   ├── HeroSection.jsx
│   │   │   │   │   └── HeroSection.css
│   │   │   │   ├── AboutPreview/
│   │   │   │   │   ├── AboutPreview.jsx
│   │   │   │   │   └── AboutPreview.css
│   │   │   │   ├── ProductsShowcase/
│   │   │   │   │   ├── ProductsShowcase.jsx
│   │   │   │   │   └── ProductsShowcase.css
│   │   │   │   ├── CapabilitiesOverview/
│   │   │   │   │   ├── CapabilitiesOverview.jsx
│   │   │   │   │   └── CapabilitiesOverview.css
│   │   │   │   ├── IndustriesServed/
│   │   │   │   │   ├── IndustriesServed.jsx
│   │   │   │   │   └── IndustriesServed.css
│   │   │   │   ├── StatsSection/
│   │   │   │   │   ├── StatsSection.jsx
│   │   │   │   │   └── StatsSection.css
│   │   │   │   ├── CertificationsBar/
│   │   │   │   │   ├── CertificationsBar.jsx
│   │   │   │   │   └── CertificationsBar.css
│   │   │   │   └── CTASection/
│   │   │   │       ├── CTASection.jsx
│   │   │   │       └── CTASection.css
│   │   │   └── data/
│   │   │       └── homeData.js
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── About.css
│   │   │   ├── components/
│   │   │   │   ├── CompanyOverview/
│   │   │   │   │   ├── CompanyOverview.jsx
│   │   │   │   │   └── CompanyOverview.css
│   │   │   │   ├── VisionMission/
│   │   │   │   │   ├── VisionMission.jsx
│   │   │   │   │   └── VisionMission.css
│   │   │   │   ├── Timeline/
│   │   │   │   │   ├── Timeline.jsx
│   │   │   │   │   └── Timeline.css
│   │   │   │   ├── TeamLeadership/
│   │   │   │   │   ├── TeamLeadership.jsx
│   │   │   │   │   └── TeamLeadership.css
│   │   │   │   └── CertificationsList/
│   │   │   │       ├── CertificationsList.jsx
│   │   │   │       └── CertificationsList.css
│   │   │   └── data/
│   │   │       └── aboutData.js
│   │   │
│   │   ├── Products/
│   │   │   ├── Products.jsx
│   │   │   ├── Products.css
│   │   │   ├── components/
│   │   │   │   ├── ProductGrid/
│   │   │   │   │   ├── ProductGrid.jsx
│   │   │   │   │   └── ProductGrid.css
│   │   │   │   ├── ProductCard/
│   │   │   │   │   ├── ProductCard.jsx
│   │   │   │   │   └── ProductCard.css
│   │   │   │   ├── ProductDetail/
│   │   │   │   │   ├── ProductDetail.jsx
│   │   │   │   │   └── ProductDetail.css
│   │   │   │   └── ProductFilter/
│   │   │   │       ├── ProductFilter.jsx
│   │   │   │       └── ProductFilter.css
│   │   │   └── data/
│   │   │       └── productsData.js
│   │   │
│   │   ├── Capabilities/
│   │   │   ├── Capabilities.jsx
│   │   │   ├── Capabilities.css
│   │   │   ├── components/
│   │   │   │   ├── CapabilityCard/
│   │   │   │   │   ├── CapabilityCard.jsx
│   │   │   │   │   └── CapabilityCard.css
│   │   │   │   ├── ProcessFlow/
│   │   │   │   │   ├── ProcessFlow.jsx
│   │   │   │   │   └── ProcessFlow.css
│   │   │   │   └── EquipmentList/
│   │   │   │       ├── EquipmentList.jsx
│   │   │   │       └── EquipmentList.css
│   │   │   └── data/
│   │   │       └── capabilitiesData.js
│   │   │
│   │   ├── Industries/
│   │   │   ├── Industries.jsx
│   │   │   ├── Industries.css
│   │   │   ├── components/
│   │   │   │   ├── IndustryCard/
│   │   │   │   │   ├── IndustryCard.jsx
│   │   │   │   │   └── IndustryCard.css
│   │   │   │   └── IndustryDetail/
│   │   │   │       ├── IndustryDetail.jsx
│   │   │   │       └── IndustryDetail.css
│   │   │   └── data/
│   │   │       └── industriesData.js
│   │   │
│   │   ├── Quality/
│   │   │   ├── Quality.jsx
│   │   │   ├── Quality.css
│   │   │   ├── components/
│   │   │   │   ├── CertificationGrid/
│   │   │   │   │   ├── CertificationGrid.jsx
│   │   │   │   │   └── CertificationGrid.css
│   │   │   │   ├── LabEquipment/
│   │   │   │   │   ├── LabEquipment.jsx
│   │   │   │   │   └── LabEquipment.css
│   │   │   │   └── QualityProcess/
│   │   │   │       ├── QualityProcess.jsx
│   │   │   │       └── QualityProcess.css
│   │   │   └── data/
│   │   │       └── qualityData.js
│   │   │
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       ├── Contact.css
│   │       ├── components/
│   │       │   ├── ContactForm/
│   │       │   │   ├── ContactForm.jsx
│   │       │   │   └── ContactForm.css
│   │       │   ├── ContactInfo/
│   │       │   │   ├── ContactInfo.jsx
│   │       │   │   └── ContactInfo.css
│   │       │   └── MapEmbed/
│   │       │       ├── MapEmbed.jsx
│   │       │       └── MapEmbed.css
│   │       └── data/
│   │           └── contactData.js
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useScrollPosition.js
│   │   ├── useMediaQuery.js
│   │   └── useDebounce.js
│   │
│   ├── utils/                     # Utility functions
│   │   ├── constants.js           # Site-wide constants (colors, URLs, etc.)
│   │   ├── helpers.js             # General helper functions
│   │   └── seoMeta.js             # SEO meta tag helper
│   │
│   ├── security/                  # 🔒 Security-related files
│   │   ├── aesEncryption.js       # AES encrypt/decrypt utility
│   │   ├── inputSanitizer.js      # XSS prevention & input sanitization
│   │   ├── csrfToken.js           # CSRF token handler (for backend later)
│   │   └── rateLimiter.js         # Client-side rate limiting for forms
│   │
│   ├── styles/                    # Global styles
│   │   ├── globals.css            # CSS reset, global vars, font imports
│   │   ├── variables.css          # CSS custom properties (design tokens)
│   │   └── keyframes.css          # Global @keyframes definitions
│   │
│   ├── data/                      # Site-wide shared data
│   │   ├── navigationData.js      # Nav menu structure
│   │   └── siteMetadata.js        # Company info, social links, etc.
│   │
│   └── main.jsx                   # React entry point
│
├── .env                           # Environment variables
├── .gitignore
├── package.json
├── vite.config.js                 # Vite configuration
├── netlify.toml                   # Netlify deploy config (SPA redirects)
└── README.md
```

---

## 📄 Page-by-Page Plan

### Page 1: Home (`/`)

| Section | Description | Animations |
|---------|-------------|------------|
| **Hero** | Full-viewport cinematic dark hero with company tagline "Precision Engineered for Global Industries", CTA buttons "Explore Products" & "Contact Us" | Particle ember effect, text reveal letter-by-letter, parallax background |
| **About Preview** | Split layout — left: text about GSAI's legacy & expertise; right: company facility image | Scroll reveal from left/right |
| **Stats Strip** | Horizontal bar: 4 counters — Years of Experience, Products Delivered, Global Clients, Sq.Ft Plant Area | Animated counter on scroll, subtle glow pulse |
| **Products Showcase** | Grid of 6 featured product cards with images, hover-to-reveal detail | Staggered reveal, 3D tilt on hover, glow border |
| **Capabilities Overview** | Horizontal scrolling timeline showing 6 capabilities with icons | Scroll-driven horizontal animation, icon pulse |
| **Industries Served** | Hexagonal grid or icon-card layout for 7 industry sectors | StaggerReveal, hover scale+glow |
| **Certifications Bar** | Horizontal scrolling logo marquee: IATF, ISO 14001, ISO 45001, CQI-9 | Infinite CSS scroll animation |
| **CTA Section** | "Ready to Partner?" section with gradient background + contact CTA | Parallax, magnetic button hover |

### Page 2: About Us (`/about`)

| Section | Description | Animations |
|---------|-------------|------------|
| **Page Hero** | Dark banner with "About GSA Industries" title | Text reveal, breadcrumb |
| **Company Overview** | Story of GSAI, their journey, what they stand for | ScrollReveal paragraphs |
| **Vision & Mission** | Two glassmorphism cards side by side | Tilt card effect |
| **Company Timeline** | Vertical animated timeline of milestones | Line-draw animation on scroll |
| **Leadership / Team** | Grid of key leadership with photos | StaggerReveal |
| **Certifications** | Full certifications detail with badges | Glow border cards |

### Page 3: Products (`/products` & `/products/:slug`)

| Section | Description | Animations |
|---------|-------------|------------|
| **Page Hero** | "Our Products" banner | Text reveal |
| **Category Filter** | Horizontal filter tabs (All / Forged / Cast / Machined / Agriculture) | Smooth active-tab indicator |
| **Product Grid** | Responsive grid of all products with images | Stagger + TiltCard |
| **Product Detail** | Modal or page: full specs, gallery, applications | Slide-in transition |

### Page 4: Capabilities (`/capabilities`)

| Section | Description | Animations |
|---------|-------------|------------|
| **Page Hero** | "Our Capabilities" banner | Text reveal |
| **Process Flow** | Visual flowchart: Design → Tooling → Forging → Heat Treatment → Machining → Quality | Connected nodes, line-draw on scroll |
| **Capability Cards** | 6 expanded cards — each with image, description, equipment list | Accordion expand, ScrollReveal |
| **Equipment Showcase** | Key machines with specs (2500T Press, 5-Axis CNC, SCADA Furnace) | Parallax image + data overlay |

### Page 5: Industries (`/industries`)

| Section | Description | Animations |
|---------|-------------|------------|
| **Page Hero** | "Industries We Serve" banner | Text reveal |
| **Industry Grid** | 7 industry cards (Automotive, Agriculture, Railways, Construction, Energy, Defense, Aerospace) | Hexagonal hover effect |
| **Industry Detail** | Expanded view with relevant products and applications | Smooth expand animation |

### Page 6: Quality (`/quality`)

| Section | Description | Animations |
|---------|-------------|------------|
| **Page Hero** | "Quality Assurance" banner | Text reveal |
| **Certifications Grid** | IATF 16949, ISO 14001, ISO 45001, CQI-9, NABL — each with badge + description | GlowBorder cards |
| **Lab Equipment** | Showcase of lab instruments (Spectrometer, UTM, FaroArm, etc.) | ScrollReveal grid |
| **Quality Process** | Visual pipeline: Incoming Inspection → In-Process → Final → Testing | Animated pipeline |

### Page 7: Contact (`/contact`)

| Section | Description | Animations |
|---------|-------------|------------|
| **Page Hero** | "Get In Touch" banner | Text reveal |
| **Split Layout** | Left: Contact info (address, phone, email, social) / Right: Contact form | Slide-in from sides |
| **Contact Form** | Name, Email, Phone, Company, Subject (dropdown), Message, Submit | Input focus animations, success alert |
| **Google Map** | Embedded interactive map showing Patiala location | Fade-in on scroll |

---

## 🎬 Animation Registry

| Animation | File | Used On | Technique |
|-----------|------|---------|-----------|
| ScrollReveal | `animations/ScrollReveal/` | Every page | IntersectionObserver + CSS transitions |
| ParallaxSection | `animations/ParallaxSection/` | Hero sections | CSS `transform: translateY()` on scroll |
| CounterAnimation | `animations/CounterAnimation/` | Stats section | requestAnimationFrame number increment |
| TiltCard | `animations/TiltCard/` | Product/capability cards | Mouse-move event → CSS `perspective` + `rotateX/Y` |
| ParticleEmber | `animations/ParticleEmber/` | Home hero | Canvas particles (sparks/embers floating) |
| TextReveal | `animations/TextReveal/` | Page titles, hero text | Per-character staggered `opacity` + `translateY` |
| PageTransition | `animations/PageTransition/` | Route changes | CSS `opacity` + `translateY` wrapper |
| MagneticButton | `animations/MagneticButton/` | CTA buttons | Mouse proximity → button shifts toward cursor |
| StaggerReveal | `animations/StaggerReveal/` | Grids (products, industries) | Cascading delay per child element |
| GlowBorder | `animations/GlowBorder/` | Certification cards, quality | Animated gradient border using `conic-gradient` rotation |

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 18 (via Vite) |
| **Routing** | React Router v6 |
| **Styling** | Vanilla CSS (CSS Modules pattern, CSS custom properties) |
| **Animations** | Pure CSS + JS (IntersectionObserver, requestAnimationFrame, Canvas) — no heavy libs |
| **Fonts** | Google Fonts: Outfit, Inter, Space Grotesk |
| **Icons** | Lucide React (lightweight) |
| **Build** | Vite |
| **Deploy** | Netlify |
| **Backend (later)** | Node.js + Express |
| **Security (later)** | AES-256, JWT, CSRF protection |

---

## 🔧 Implementation Phases

### Phase 1 — Foundation (Current)
- [ ] Initialize Vite + React project
- [ ] Set up folder structure
- [ ] Create design system (CSS variables, globals, keyframes)
- [ ] Build common components (Button, Input, Header, Footer, Navbar, Card, SectionTitle, etc.)
- [ ] Build animation components (ScrollReveal, TextReveal, TiltCard, CounterAnimation)

### Phase 2 — Home Page
- [ ] Hero section with ParticleEmber + TextReveal
- [ ] About Preview section
- [ ] Stats counter strip
- [ ] Products showcase grid
- [ ] Capabilities overview
- [ ] Industries served section
- [ ] Certifications marquee
- [ ] CTA section

### Phase 3 — Inner Pages
- [ ] About Us page (all sections)
- [ ] Products page + product detail views
- [ ] Capabilities page + process flow
- [ ] Industries page
- [ ] Quality page + certifications detail
- [ ] Contact page + form

### Phase 4 — Polish & Optimization
- [ ] Page transitions (route-level animations)
- [ ] Responsive design audit (mobile, tablet, desktop)
- [ ] SEO meta tags for all pages
- [ ] Performance optimization (lazy loading images, code splitting)
- [ ] Accessibility audit
- [ ] Netlify deployment configuration

### Phase 5 — Backend Integration (Future)
- [ ] Node.js/Express API
- [ ] Contact form submission endpoint
- [ ] RFQ (Request for Quotation) system
- [ ] Admin panel for content management
- [ ] Security layer (AES, JWT, CSRF)

---

## 🔑 Key Differentiators vs. Existing Site

| Aspect | Existing (gsainds.com) | New Website |
|--------|----------------------|-------------|
| **Tech** | WordPress + Thrive Theme | React SPA (Vite) |
| **Design** | Generic template, light theme, static | Dark industrial premium, glassmorphism, dynamic |
| **Animations** | Basic fade-in | Particle effects, parallax, 3D tilt, magnetic buttons, text reveal, scroll-driven |
| **Performance** | Heavy WordPress, multiple jQuery plugins | Lightweight Vite build, lazy loaded, optimized |
| **Mobile** | Responsive but basic | Mobile-first premium responsive |
| **UX** | Standard navigation | Smooth transitions, micro-interactions, immersive scrolling |
| **SEO** | Basic Yoast | Custom per-page meta, semantic HTML5, structured data |

---

> [!IMPORTANT]
> **All content (text, product names, company data, certifications, contact info) will be sourced directly from the existing gsainds.com website.** We are NOT changing any factual content — only redesigning the presentation to be next-level.

> [!TIP]
> This plan is designed so each phase delivers a progressively complete and impressive demo. Even Phase 2 (Home page alone) should be enough to wow the client.

---

**Ready to proceed? Add your comments/modifications to this plan and I'll start building! 🚀**
