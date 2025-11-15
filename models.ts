export const MODELS_BY_MAKE: Record<string, string[]> = {
  "Abarth": [
    "500e"
  ],
  "Alfa Romeo": [
    "Junior Elettrica"
  ],
  "Audi": [
    "A6 e-tron",
    "Q4 e-tron",
    "Q6 e-tron",
    "Q8 e-tron",
    "S6 e-tron",
    "e-tron GT"
  ],
  "BMW": [
    "i3",
    "i4",
    "i5",
    "i7",
    "iX",
    "iX1",
    "iX2",
    "iX3"
  ],
  "BYD": [
    "Atto 3",
    "Dolphin",
    "Han",
    "Seal",
    "Seal U",
    "Tang"
  ],
  "CUPRA": [
    "Born",
    "Tavascan"
  ],
  "Cadillac": [
    "Lyriq",
    "Vistiq"
  ],
  "Citroën": [
    "ë-C3",
    "ë-C4",
    "ë-C4 X",
    "ë-SpaceTourer"
  ],
  "DS Automobiles": [
    "DS 3 E-Tense",
    "N°4 E-Tense",
    "N°8"
  ],
  "Dacia": [
    "Spring"
  ],
  "Fiat": [
    "500e",
    "600e",
    "Grande Panda"
  ],
  "Ford": [
    "Capri",
    "E-Tourneo Courier",
    "E-Tourneo Custom",
    "E-Transit",
    "Explorer",
    "Mustang Mach-E",
    "Puma Gen-E"
  ],
  "GWM ORA": [
    "03"
  ],
  "Genesis": [
    "Electrified G80",
    "Electrified GV70",
    "GV60"
  ],
  "Honda": [
    "e",
    "e:Ny1"
  ],
  "Hyundai": [
    "Inster",
    "Ioniq 5",
    "Ioniq 6",
    "Ioniq 9",
    "Kona Electric"
  ],
  "Jaguar": [
    "I-Pace"
  ],
  "Jeep": [
    "Avenger Electric",
    "Compass Electric"
  ],
  "Kia": [
    "EV3",
    "EV4",
    "EV5",
    "EV6",
    "EV9",
    "Niro EV",
    "PV5"
  ],
  "Lancia": [
    "Ypsilon Elettrica"
  ],
  "Lexus": [
    "RZ",
    "UX 300e"
  ],
  "Lotus": [
    "Eletre",
    "Emeya"
  ],
  "Lucid": [
    "Air",
    "Gravity"
  ],
  "MG": [
    "Cyberster",
    "MG4",
    "MG5",
    "ZS EV"
  ],
  "MINI": [
    "Cooper Electric",
    "Countryman Electric"
  ],
  "Maserati": [
    "GranCabrio Folgore",
    "GranTurismo Folgore",
    "Grecale Folgore"
  ],
  "Mazda": [
    "6e",
    "MX-30 Electric"
  ],
  "Mercedes": [
    "EQA",
    "EQB",
    "EQC",
    "EQE",
    "EQE SUV",
    "EQS",
    "EQS SUV",
    "EQT",
    "EQV",
    "eSprinter",
    "eVito"
  ],
  "Mini": [
    "Aceman"
  ],
  "Mitsubishi": [
    "i-MiEV"
  ],
  "Nissan": [
    "Ariya",
    "Leaf",
    "Micra EV",
    "Townstar EV"
  ],
  "Opel": [
    "Astra Electric",
    "Combo Electric",
    "Corsa-e",
    "Frontera Electric",
    "Grandland Electric",
    "Mokka Electric",
    "Vivaro Electric",
    "Zafira Electric"
  ],
  "Peugeot": [
    "e-2008",
    "e-208",
    "e-3008",
    "e-308",
    "e-308 SW",
    "e-408",
    "e-5008",
    "e-Rifter",
    "e-Traveller"
  ],
  "Polestar": [
    "2",
    "3",
    "4",
    "5"
  ],
  "Porsche": [
    "Macan Electric",
    "Taycan"
  ],
  "Renault": [
    "4 E-Tech",
    "5 E-Tech",
    "Kangoo E-Tech",
    "Master E-Tech",
    "Megane E-Tech",
    "Scenic E-Tech",
    "Trafic E-Tech",
    "Twingo Electric",
    "Zoe"
  ],
  "Rolls-Royce": [
    "Spectre"
  ],
  "Skoda": [
    "Enyaq iV"
  ],
  "Smart": [
    "#5"
  ],
  "SsangYong (KGM)": [
    "Musso EV",
    "Torres EVX"
  ],
  "Subaru": [
    "Solterra"
  ],
  "Tesla": [
    "Cybertruck",
    "Model 3",
    "Model S",
    "Model X",
    "Model Y"
  ],
  "Toyota": [
    "Proace City Electric",
    "Proace Electric",
    "Urban Cruiser EV",
    "bZ4X"
  ],
  "Volkswagen": [
    "ID. Buzz",
    "ID. Buzz Cargo",
    "ID.3",
    "ID.4",
    "ID.5",
    "ID.7",
    "e-Caravelle",
    "e-Crafter",
    "e-Golf",
    "e-Transporter",
    "e-Up!"
  ],
  "Volvo": [
    "C40 Recharge",
    "ES90",
    "EX30",
    "EX90",
    "XC40 Recharge"
  ],
  "smart": [
    "#1",
    "#3"
  ],
  "Škoda": [
    "Elroq"
  ]
} as const

export type ModelsByMake = typeof MODELS_BY_MAKE
export type Make = keyof ModelsByMake
export type Model<T extends Make> = ModelsByMake[T][number]

// Get models for a specific make
export function getModelsForMake(make: string): string[] {
  return MODELS_BY_MAKE[make] || []
}

// Get all unique models
export function getAllModels(): string[] {
  const allModels = new Set<string>()
  Object.values(MODELS_BY_MAKE).forEach(models => {
    models.forEach(model => allModels.add(model))
  })
  return Array.from(allModels).sort()
}
