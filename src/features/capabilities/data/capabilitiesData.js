import { CAPABILITIES_DATA } from '../../../data/gsaData';

export const ALL_CAPABILITIES = CAPABILITIES_DATA;

export const PROCESS_FLOW_STEPS = [
  { step: '01', title: 'CAD/CAM & DEFORM 3D Simulation', desc: 'Finite element grain flow simulation and high-speed CNC die tooling in in-house tool room.' },
  { step: '02', title: 'Optical Induction Billet Heating', desc: 'Pyrometer-guided heating gates reject any billet outside strict forging thermal band.' },
  { step: '03', title: 'Closed-Die Forging & Press Lines', desc: 'Up to 2,500-ton forging presses and heavy counterblow hammers create near-net shapes.' },
  { step: '04', title: 'Continuous SCADA Heat Treatment', desc: 'Sealed quench furnaces ensure precise case-carburizing, hardening, and normalizing.' },
  { step: '05', title: 'Multi-Axis CNC & VMC Turning', desc: 'Sub-micron geometrical tolerances with automated in-process Renishaw tactile probing.' },
  { step: '06', title: 'Carl Zeiss 3D CMM & Ultrasonic NDT', desc: '100% metallurgical and dimensional signoff with PPAP Level 3 documentation.' }
];

export const EQUIPMENT_INVENTORY = [
  { category: 'Forging Presses & Hammers', machine: 'Closed-Die Forging Press', capacity: '2,500 Tons', make: 'National / Ajax Heavy Line', origin: 'USA / Europe' },
  { category: 'Forging Presses & Hammers', machine: 'Mechanical Forging Press', capacity: '1,600 Tons', make: 'Eumuco High Speed', origin: 'Germany' },
  { category: 'Forging Presses & Hammers', machine: 'Double-Frame Drop Hammers', capacity: '1.5 Ton to 3 Ton', make: 'Bêché Counterblow', origin: 'Germany' },
  { category: 'Induction Heating', machine: 'Billet Heating Furnaces', capacity: '1,200 kW (1,500 kg/hr)', make: 'Inductotherm Optical Sorter', origin: 'USA / India' },
  { category: 'CNC Machining', machine: 'Vertical Machining Centers (4-Axis)', capacity: '800 x 500 x 600 mm', make: 'Doosan / Mazak', origin: 'Japan / Korea' },
  { category: 'CNC Machining', machine: 'CNC Turning Centers', capacity: 'Dia 500 mm x 600 mm', make: 'Mori Seiki / Haas', origin: 'Japan / USA' },
  { category: 'Heat Treatment', machine: 'Continuous Mesh Belt Line', capacity: '1,500 kg / Hour', make: 'Wellman / SCADA Integrated', origin: 'UK / India' },
  { category: 'Metrology Lab', machine: 'CNC Coordinate Measuring Machine', capacity: 'Accuracy: 1.5 + L/350 µm', make: 'Carl Zeiss Contura 3D', origin: 'Germany' },
  { category: 'Metallurgical Lab', machine: 'Optical Emission Spectrometer', capacity: '28 Element Channels', make: 'Thermo Fisher ARL', origin: 'Switzerland' }
];

export default ALL_CAPABILITIES;
