export const COMPANY_INFO = {
  name: 'GSA Industries India Pvt Ltd',
  shortName: 'GSAI',
  tagline: 'Engineering Precision. Forging Trust. Powering Global Mobility.',
  description: 'GSA Industries India Pvt Ltd is an IATF 16949:2016 and ISO 9001:2015 certified premier manufacturer of high-nickel Alfin insert rings, precision hot and warm forgings, and CNC-machined components for global Tier-1 automotive and industrial OEMs.',
  established: '1988',
  headquarters: 'Village Dappar, Tehsil Derabassi, Distt. Mohali, Punjab - 140506, India',
  phone: '+91 1762 281144',
  phoneAlt: '+91 1762 281145',
  email: 'info@gsainds.com',
  salesEmail: 'sales@gsainds.com',
  exportCountries: '20+ Countries',
  globalOEMs: '50+ Global Tier-1 Clients',
  monthlyCapacity: '2,500+ Metric Tons',
  plantArea: '150,000+ Sq. Ft. State-of-the-art Facility'
};

export const KEY_STATS = [
  { value: 35, suffix: '+', label: 'Years of Engineering Excellence', description: 'Established in 1988 with continuous technological evolution' },
  { value: 2500, suffix: ' MT/Mo', label: 'Monthly Forging Capacity', description: 'Equipped with heavy hammer & press forging lines' },
  { value: 20, suffix: '+', label: 'Export Destinations', description: 'Trusted across Europe, North America, Southeast Asia, and India' },
  { value: 99.98, suffix: '%', label: 'Quality Acceptance Rate', description: 'Stringent IATF 16949 Six Sigma and PPAP Level 3 compliance' }
];

export const PRODUCTS_DATA = [
  {
    id: 'alfin-insert-rings',
    name: 'High-Nickel Austenitic Alfin Insert Rings',
    category: 'Alfin Rings',
    categorySlug: 'alfin',
    tagline: 'The Global Gold Standard for Heavy-Duty Diesel Pistons',
    image: '/images/hero_forging_plant_1792597018373.jpg',
    badge: 'Flagship Product',
    description: 'Centrifugally cast austenitic high-nickel cast iron (Ni-Resist) insert rings bonded metallurgically into aluminum diesel pistons to prevent top ring groove erosion in high-pressure combustion engines.',
    applications: ['Heavy Commercial Vehicles (HCV)', 'Locomotives & Marine Engines', 'Off-Highway Earthmovers', 'High-Output Agricultural Tractors'],
    materials: ['Ni-Resist Type 1 (13.5-17.5% Ni)', 'Ni-Resist Type 2 (18-22% Ni)', 'Custom Alloyed Nodular Austenitic Iron'],
    specs: {
      'Diameter Range': '50 mm to 320 mm Outer Diameter',
      'Radial Thickness': '2.5 mm to 14.0 mm',
      'Bonding Integrity': '100% Ultrasonic Soundness Bond',
      'Hardness': '130 - 220 HBW',
      'Thermal Expansion': 'Matched to Al-Si Piston Alloys'
    },
    features: [
      'High resistance to thermal fatigue, wear, and micro-welding at elevated temperatures (>300°C)',
      '100% Ultrasonic non-destructive testing (NDT) to ensure flawless metallurgic bond',
      'Centrifugal casting delivers ultra-dense microstructure without inclusions',
      'Precision CNC ground OD and ID with sub-micron runout tolerance'
    ]
  },
  {
    id: 'hot-steel-forgings',
    name: 'Precision Closed-Die Hot Forged Blanks',
    category: 'Forged Components',
    categorySlug: 'forged',
    tagline: 'High-Integrity Grain Flow for Extreme Stress Dynamics',
    image: '/images/heat_treatment_furnace_1792597063023.jpg',
    badge: 'Heavy Duty',
    description: 'Custom-engineered closed-die steel forgings manufactured on high-tonnage hammers and automated mechanical presses with controlled grain flow and induction billet heating.',
    applications: ['Automotive Transmissions', 'Suspension & Steering Systems', 'Drivetrain Differentials', 'Hydraulic Cylinders & Valves'],
    materials: ['SAE 1018 / 1045', 'SAE 4140 / 4340 Alloy Steels', '20MnCr5 / 16MnCr5 Case Hardening Steels', 'Stainless Steel 304 / 316 / 410'],
    specs: {
      'Weight Range': '0.15 kg to 30.0 kg per single piece',
      'Press Capacity': '1000 Ton to 2500 Ton lines',
      'Dimensional Tolerance': 'ISO 2768-m / DIN 7526 Class F/E',
      'Surface Treatment': 'Shot blasted, phosphated, or oil rust protected'
    },
    features: [
      'Continuous uninterrupted grain flow conforming to critical stress profiles',
      'Infrared pyrometer temperature-controlled induction heating prevents decarbonization',
      'Die cavity simulation with 3D CAD/CAM eliminates internal fold defects',
      'Pre-machined or ready-to-finish supply conditions'
    ]
  },
  {
    id: 'cnc-vmc-machined',
    name: 'Ultra-Precision CNC & 4-Axis VMC Machined Parts',
    category: 'CNC Machining',
    categorySlug: 'cnc',
    tagline: 'Sub-Micron Machining with Full CMM Dimensional Traceability',
    image: '/images/cnc_machining_center_1792597041619.jpg',
    badge: 'Sub-Micron Accuracy',
    description: 'High-speed automated CNC turning and 4-axis Vertical Machining Centers (VMC) providing finished parts with critical micron-level geometrical tolerances.',
    applications: ['Engine Camshafts & Crankshaft Flanges', 'Planetary Gear Carriers', 'Steering Knuckles & Spindles', 'High-Pressure Common Rail Blocks'],
    materials: ['Forged Carbon & Alloy Steels', 'SG Ductile Iron (EN-GJS-500/7)', 'Aluminum Extruded & Cast Alloys'],
    specs: {
      'Turning Diameter': 'Up to 500 mm',
      'Milling Envelope': '800 mm x 500 mm x 600 mm',
      'True Position': 'Within 0.012 mm',
      'Surface Finish (Ra)': 'Up to Ra 0.2 µm with micro-honing'
    },
    features: [
      'Equipped with Renishaw in-process probing for zero-offset accuracy',
      'Automated deburring, high-pressure ultrasonic washing, and rust prevention dip',
      'Batch-wise Statistical Process Control (SPC) with Cpk > 1.67',
      'Fully traceable laser marking with 2D Data Matrix QR codes'
    ]
  },
  {
    id: 'automotive-components',
    name: 'Critical Automotive Engine & Drivetrain Components',
    category: 'Automotive Components',
    categorySlug: 'auto',
    tagline: 'Engineered for Tier-1 OEMs Worldwide',
    image: '/images/precision_automotive_parts_1792597084158.jpg',
    badge: 'Tier-1 Certified',
    description: 'High-duty connecting rods, drive flanges, gear blanks, shifting forks, and differential spider crosses tested for high-cycle fatigue and dynamic torque.',
    applications: ['Passenger Vehicles & SUVs', 'Light & Medium Commercial Vehicles', 'Electric Vehicle (EV) Reduction Gearboxes', 'Two-Wheelers & ATVs'],
    materials: ['Micro-alloyed Forging Steels (38MnS6)', 'Chrome-Moly Alloy 42CrMo4', 'Case Hardened Steels'],
    specs: {
      'Fatigue Endurance': '> 10,000,000 Cycles tested',
      'Hardness Range': 'Case depth 0.8 - 1.5 mm, 58 - 62 HRC',
      'Balancing': 'Dynamic balancing within 0.5 gram-cm'
    },
    features: [
      'Crack fractured (split) rod technology compatible for connecting rods',
      'Deep-case carburized for extreme abrasive and torsional wear life',
      'PPAP Level 3 documentation with full IMDS material reporting',
      'Exported to Tier-1 supply chains in Germany, USA, and Japan'
    ]
  },
  {
    id: 'agricultural-machinery',
    name: 'Heavy Agricultural Implements & Rotavator Blades',
    category: 'Agricultural Engineering',
    categorySlug: 'agri',
    tagline: 'Agrizone Premium Farm Equipment & High-Wear Earthwear',
    image: '/images/agrizone_machinery_1792597104895.jpg',
    badge: 'Agrizone Brand',
    description: 'Heavy-duty agricultural machinery components manufactured under the renowned Agrizone brand, including boron-steel rotavator blades, cultipackers, hubs, and PTO drive shafts.',
    applications: ['Tractor Rotavators & Tillers', 'Disc Harrows & Ploughs', 'Combine Harvesters & Seeders', 'Paddy & Sugarcane Cultivation'],
    materials: ['High-Boron Hardened Steel (30MnB5)', 'Spring Steel (EN45A)', 'Austempered Ductile Iron (ADI)'],
    specs: {
      'Blade Hardness': '48 - 52 HRC throughout cross-section',
      'Wear Resistance': '3x longer life vs standard carbon steel',
      'Impact Toughness': '> 25 Joules at -20°C (No brittle breakage)'
    },
    features: [
      'Advanced induction cutting edge hardening while preserving tough ductile core',
      'Electrostatic powder coated or electrophoretic CED painted finish',
      'Field-proven across tough rocky and clay terrains worldwide',
      'Direct OEM fit for John Deere, Mahindra, Kubota, New Holland tractors'
    ]
  },
  {
    id: 'heat-treated-assemblies',
    name: 'Continuous Atmosphere Heat Treated Assemblies',
    category: 'Heat Treatment',
    categorySlug: 'heat',
    tagline: 'Precision Metallurgy Controlled by SCADA Automation',
    image: '/images/heat_treatment_furnace_1792597063023.jpg',
    badge: 'SCADA Controlled',
    description: 'In-house continuous mesh-belt and sealed-quench heat treatment plant executing continuous hardening, tempering, normalizing, and case-carburizing with carbon-potential oxygen probe control.',
    applications: ['Transmission gears', 'Drive splines', 'Fasteners', 'Heavy equipment pins'],
    materials: ['Medium Carbon Steels', 'Low Alloy Steels', 'Special Forging Grades'],
    specs: {
      'Furnace Capacity': '1,500 kg per hour continuous feed',
      'Temperature Precision': '± 5°C throughout heating zone',
      'Atmosphere': 'Endothermic gas with oxygen-probe closed-loop control'
    },
    features: [
      'Zero decarburization with uniform martensitic microstructure',
      'Polymer or rapid oil quenching options to optimize residual stresses',
      'Real-time automated datalogging with batch certificate generation',
      'Microhardness profile verification down to 50g load'
    ]
  }
];

export const CAPABILITIES_DATA = [
  {
    id: 'forging-press',
    title: 'Closed-Die Hammer & Press Forging Shop',
    capacity: '2,500 MT / Month',
    icon: 'Hammer',
    image: '/images/hero_forging_plant_1792597018373.jpg',
    description: 'Houses heavy counterblow hammers, mechanical forging presses (up to 2,500 tons), and automated trimming presses supported by medium-frequency induction billet heating furnaces.',
    equipment: [
      '2,500-Ton & 1,600-Ton Forging Press Lines',
      'Heavy Double-Frame Counterblow Hammers',
      'Induction Billet Heaters with Infrared Pyrometer Sort Gates',
      'Automated Wide-Bed Trimming and Coining Presses'
    ]
  },
  {
    id: 'cnc-machining',
    title: 'Advanced CNC, VMC & Robotic Machining Cells',
    capacity: '150,000+ Finished Parts / Month',
    icon: 'Cpu',
    image: '/images/cnc_machining_center_1792597041619.jpg',
    description: 'A fleet of high-precision CNC turning centers, vertical machining centers (4-axis), horizontal machining centers, and multi-spindle drilling lines.',
    equipment: [
      'Multi-Axis Japanese & Taiwanese CNC Turning Centers',
      'High-Speed Vertical Machining Centers (VMC) with 4th-Axis Rotaries',
      'High-Precision Centerless and Cylindrical Grinding Machines',
      'Automated Multi-Stage Ultrasonic Cleaning & Washing Plants'
    ]
  },
  {
    id: 'heat-treatment',
    title: 'Continuous Atmosphere Heat Treatment Facility',
    capacity: '1,500 kg / Hour Continuous Throughput',
    icon: 'Flame',
    image: '/images/heat_treatment_furnace_1792597063023.jpg',
    description: 'Fully integrated continuous atmosphere furnace line for hardening, tempering, normalizing, stress relieving, and case carburizing with computer-controlled carbon potential.',
    equipment: [
      'Continuous Mesh Belt Hardening & Tempering Furnace',
      'Sealed Quench Furnaces (SQF) with Endothermic Gas Generators',
      'Oxygen Probe Carbon Potential Microprocessor Regulators',
      'Automated Agitated Polymer & Fast-Quench Oil Tanks'
    ]
  },
  {
    id: 'tool-die-design',
    title: 'In-House Tool Room & 3D CAD/CAM Simulation',
    capacity: '100% In-House Die Making',
    icon: 'Wrench',
    image: '/images/precision_automotive_parts_1792597084158.jpg',
    description: 'Equipped with High-Speed Machining centers (HSM) and wire-EDM machines for developing production dies in record lead times with DEFORM-3D grain simulation.',
    equipment: [
      'Siemens NX CAD/CAM & SolidWorks Engineering Workstations',
      'DEFORM 3D Finite Element Metal Flow & Die Wear Simulation',
      'High-Speed Graphite & Hardened Steel Die Milling Centers',
      'Precision Wire Cut EDM & Spark Erosion Machines'
    ]
  },
  {
    id: 'metrology-quality',
    title: 'World-Class Metrology & Metallurgical Testing Lab',
    capacity: '100% Traceability & Zero Defect',
    icon: 'CheckSquare',
    image: '/images/agrizone_machinery_1792597104895.jpg',
    description: 'Climate-controlled laboratory equipped with high-precision Zeiss Coordinate Measuring Machines (CMM), Optical Emission Spectrometers, and Metallurgical Microscopes.',
    equipment: [
      'Carl Zeiss CNC Coordinate Measuring Machine (CMM)',
      'Thermo Optical Emission Spectrometer (28 Channel Element Analysis)',
      'Mitutoyo Surface Roughness Testers & Contour Measurement Machines',
      'Computerized Tensile, Yield & Charpy Impact Testing Systems'
    ]
  }
];

export const INDUSTRIES_DATA = [
  {
    id: 'automotive',
    title: 'Automotive & Commercial Vehicles',
    description: 'Critical engine, transmission, steering, and suspension components supplying Tier-1 automotive brands worldwide.',
    badge: 'Tier-1 Certified',
    stats: '15M+ Parts In Service',
    highlights: ['Connecting Rods', 'Alfin Insert Rings', 'Transmission Gears', 'Steering Knuckles']
  },
  {
    id: 'agriculture',
    title: 'Agricultural Implements & Tractors',
    description: 'High-durability rotavator blades, tiller shafts, hitch assemblies, and hub forgings manufactured under the Agrizone brand.',
    badge: 'Agrizone Leading Brand',
    stats: 'OEM to Major Tractor Brands',
    highlights: ['Boron Steel Rotavator Blades', 'Drive PTO Shafts', 'Flange Hubs', 'Cultivator Shovels']
  },
  {
    id: 'heavy-engineering',
    title: 'Heavy Construction & Mining Machinery',
    description: 'Heavy-duty forged pins, hydraulic cylinders, track links, and bucket teeth for earthmovers and mining excavators.',
    badge: 'Heavy Duty Endurance',
    stats: 'Tested to 35-Ton Shock Loads',
    highlights: ['Pivot Pins & Bushings', 'High-Pressure Hydraulic Flanges', 'Excavator Bucket Teeth', 'Track Rollers']
  },
  {
    id: 'railways-marine',
    title: 'Railways, Locomotives & Marine Engines',
    description: 'Extra-large austenitic Alfin rings and forged crankshaft counterweights for high-displacement marine and locomotive diesel engines.',
    badge: 'High Displacement',
    stats: 'Up to 320mm Diameter',
    highlights: ['Large-Bore Alfin Rings', 'Coupling Hubs', 'Locomotive Brake Components', 'Valve Spindles']
  },
  {
    id: 'energy-oil-gas',
    title: 'Energy, Oil & Gas Flow Control',
    description: 'High-pressure forging valves, high-nickel alloy pipe flanges, and manifold blocks designed for extreme corrosive environments.',
    badge: 'Severe Service',
    stats: 'Rated to 10,000 PSI',
    highlights: ['API Valve Bodies', 'High-Pressure Flanges', 'Manifold Blocks', 'Turbine Fittings']
  }
];

export const QUALITY_STANDARDS = [
  {
    name: 'IATF 16949:2016',
    title: 'Global Automotive Quality Management System',
    description: 'The premier international standard for automotive production and service parts, guaranteeing zero-defect focus and continuous risk management.'
  },
  {
    name: 'ISO 9001:2015',
    title: 'Quality Management Systems Certification',
    description: 'Rigorous standard ensuring consistent engineering excellence, process optimization, customer satisfaction, and full supply-chain traceability.'
  },
  {
    name: 'PPAP Level 3 Compliant',
    title: 'Production Part Approval Process',
    description: 'Comprehensive engineering validation including Gage R&R, FMEA, Process Flow, Control Plan, Initial Sample Inspection Reports (ISIR), and Material Test Certs.'
  },
  {
    name: 'Zero-Defect Culture',
    title: 'Six Sigma & Kaizen Continuous Improvement',
    description: 'Poka-Yoke error-proofing on machining fixtures, continuous SPC data logging, and sub-10 PPM customer satisfaction targets.'
  }
];

export const FAQS_DATA = [
  {
    question: 'What makes GSA Industries Alfin Insert Rings unique in the global market?',
    answer: 'GSA Industries utilizes advanced centrifugal casting for high-nickel austenitic cast iron (Ni-Resist). This guarantees a completely dense, inclusion-free microstructure with thermal expansion coefficient precisely matched to aluminum piston alloys, backed by 100% ultrasonic bond verification.'
  },
  {
    question: 'What is GSA\'s forging and machining weight & dimension envelope?',
    answer: 'Our forging shop handles closed-die hot and warm forgings from 0.15 kg up to 30 kg per piece across high-tonnage hammers and 1,000T to 2,500T press lines. Our CNC & VMC machining facilities turn components up to 500 mm in diameter and mill envelopes up to 800 mm.'
  },
  {
    question: 'Can GSA supply fully finished, heat-treated, and ready-to-assemble components?',
    answer: 'Yes! GSA is a complete single-source supplier. We offer end-to-end tooling design, closed-die forging, SCADA-controlled continuous heat treatment (hardening, tempering, case-carburizing), multi-axis CNC machining, surface finishing (shot blasting, phosphating), and sub-micron CMM metrology inspection.'
  },
  {
    question: 'How quickly can GSA provide a quote and prototype for new custom drawings?',
    answer: 'Our sales engineering team typically turns around custom RFQ inquiries within 24 to 48 hours. Using in-house 3D CAD/CAM and die tooling, first-off prototype samples can be manufactured and shipped within 3 to 4 weeks upon die drawing signoff.'
  },
  {
    question: 'What quality documentation is provided with production shipments?',
    answer: 'Every shipment is accompanied by a certified 3.1 Material Certificate, 100% dimensional CMM inspection report, heat treatment hardness survey chart, metallurgical spectrometry report, and full PPAP Level 3 dossier upon initial part qualification.'
  }
];
