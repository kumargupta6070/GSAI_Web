import { QUALITY_STANDARDS } from '../../../data/gsaData';

export const QUALITY_CERTS = QUALITY_STANDARDS;

export const LAB_EQUIPMENT_DATA = [
  {
    name: 'Carl Zeiss Contura 3D CNC CMM',
    spec: 'Volumetric Accuracy: 1.5 + L/350 µm with VAST tactile continuous scanning probe',
    role: 'Sub-micron geometrical verification, runout, and 3D true position'
  },
  {
    name: 'Thermo Scientific Optical Emission Spectrometer',
    spec: '28 Element Channels with digital high-purity argon spark stand',
    role: 'Real-time elemental verification of Ni-Resist, micro-alloy, and carbon steels'
  },
  {
    name: 'Taylor Hobson Roughness & Profilometer',
    spec: 'Ra, Rz, and full groove contour tracing down to 0.01 µm resolution',
    role: 'Precision surface finish inspection for piston ring grooves and journals'
  },
  {
    name: 'Computerized Universal Testing Machine (UTM) & Impact',
    spec: '100 kN load cell with digital extensometer & Charpy V-notch at -20°C',
    role: 'Yield strength, tensile elongation, and impact fracture toughness verification'
  }
];

export const QUALITY_PROCESS_STAGES = [
  {
    step: '01',
    title: 'Raw Material Chemical & Spectrometry Audit',
    desc: 'Every incoming heat/batch of steel billets and pig iron undergoes 28-element chemical composition verification on our Thermo Optical Emission Spectrometer against mill test certificates.'
  },
  {
    step: '02',
    title: 'Infrared Pyrometer Controlled Induction Heating',
    desc: 'Automatic optical sorting gates instantly reject any billet that deviates by ±15°C from the forging temperature window, preventing overheating and decarburization.'
  },
  {
    step: '03',
    title: 'First-Piece & Hourly Grain Flow Forging Audit',
    desc: 'Micro-etched metallurgical macro-examination verifies continuous grain flow line integrity along high-stress fillets and absence of internal folds or cold shuts.'
  },
  {
    step: '04',
    title: 'Heat Treatment Hardness & Microstructure Survey',
    desc: 'Automated Rockwell and Vickers microhardness profiling ensures uniform martensitic/bainitic conversion with zero retained austenite in case-carburized parts.'
  },
  {
    step: '05',
    title: '100% Ultrasonic Bond Testing (Alfin Rings)',
    desc: 'Centrifugally cast Alfin insert rings pass through high-frequency ultrasonic transducers to verify 100% sound metallurgical bonding capability.'
  },
  {
    step: '06',
    title: 'Carl Zeiss CNC 3D CMM Final Metrology',
    desc: 'Sub-micron dimensional verification, true position, perpendicularity, concentricity, and profile accuracy documented in automated ISIR reports.'
  }
];

export default QUALITY_CERTS;
