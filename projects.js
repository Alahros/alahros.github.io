/*
 * ============================================================
 *  PROJECTS — Single source of truth for the portfolio carousel
 * ============================================================
 *  HOW TO ADD A NEW PROJECT
 *  1. Drop your media (gif / png / jpg / mp4) inside assets/gifs/
 *  2. Drop a square thumbnail (recommended 200x200) in assets/thumbs/
 *  3. Copy any object below, paste it inside the array and edit the fields.
 *  4. Save. The carousel auto-detects it. No build step required.
 *
 *  Fields:
 *  - id           : unique slug (used internally)
 *  - thumb        : path to the square thumbnail (bottom strip)
 *  - media        : path to the big preview shown in the main viewer
 *  - mediaType    : "image" | "video"   (optional, defaults to "image")
 *  - title        : { en, es }
 *  - year         : number
 *  - role         : { en, es }   (short role description)
 *  - tags         : ["Tag1", "Tag2", ...]
 *  - bullets      : { en: [...], es: [...] }  (3–5 short bullets)
 *  - description  : { en, es }   (1–2 sentences)
 *  - links        : { download?, trailer?, source?, play? }
 * ============================================================
 */

window.PROJECTS = [
  {
    id: "mi-esmeralda",
    thumb: "assets/thumbs/project1.png",
    media: "assets/gifs/project1.gif",
    title: { en: "Mi Esmeralda", es: "Mi Esmeralda" },
    year: 2024,
    role: { en: "2D Artist & Animator", es: "Artista 2D y Animadora" },
    tags: ["2D Art", "Animation", "Unity", "Game Jam"],
    bullets: {
      en: [
        "Character & prop art direction",
        "Frame-by-frame 2D animation",
        "Visual aesthetic and mood",
        "Asset integration in Unity"
      ],
      es: [
        "Dirección de arte de personajes y props",
        "Animación 2D cuadro a cuadro",
        "Estética visual y atmósfera",
        "Integración de assets en Unity"
      ]
    },
    description: {
      en: "2.5D videogame developed for LAGS Game Jam. I led the 2D art pipeline — characters, props and animation — with a strong focus on visual aesthetics.",
      es: "Videojuego 2.5D desarrollado para LAGS Game Jam. Lideré el pipeline 2D — personajes, props y animación — con un fuerte enfoque en la estética visual."
    },
    links: {
      play: "https://alahros.itch.io/"
    }
  },
  

  {
    id: "asteroid-energy",
    thumb: "assets/thumbs/project2.png",
    media: "assets/gifs/project2.gif",
    title: { en: "Asteroid Energy", es: "Asteroid Energy" },
    year: 2024,
    role: { en: "2D Artist & Programmer", es: "Artista 2D y Programador" },
    tags: ["2D Art", "Animation", "Unity", "C#", "Game Jam"],
    bullets: {
      en: [
        "Character and prop creation",
        "2D animation and Animator setup",
        "Player movement scripting (C#)",
        "Made for Limited Capacity Game Jam"
      ],
      es: [
        "Creación de personajes y props",
        "Animación 2D y configuración del Animator",
        "Programación del movimiento del jugador (C#)",
        "Hecho para Limited Capacity Game Jam"
      ]
    },
    description: {
      en: "Videogame built for the Limited Capacity Game Jam. Beyond the 2D art and animation, I handled the Animator and the player's movement code.",
      es: "Videojuego desarrollado para la Limited Capacity Game Jam. Además del arte 2D y la animación, me encargué del Animator y del código de movimiento del jugador."
    },
    links: {
      play: "https://alahros.itch.io/"
    }
  },

  {
    id: "wrong-gun",
    thumb: "assets/thumbs/project3.png",
    media: "assets/gifs/project3.gif",
    title: {
      en: "What da fuq is wrong with my gun",
      es: "What da fuq is wrong with my gun"
    },
    year: 2025,
    role: { en: "2D Artist & Programmer", es: "Artista 2D y Programador" },
    tags: ["2D Art", "Animation", "Unity", "C#", "Game Jam"],
    bullets: {
      en: [
        "Main 2D artist (characters, props, FX)",
        "Animation and Animator wiring",
        "Player and weapon scripting",
        "Made for Wrong Genre Game Jam"
      ],
      es: [
        "Artista 2D principal (personajes, props, FX)",
        "Animación y configuración del Animator",
        "Programación del personaje y armas",
        "Hecho para Wrong Genre Game Jam"
      ]
    },
    description: {
      en: "Chaotic jam game made for the Wrong Genre Game Jam. I took care of the full 2D pipeline plus character and weapon programming.",
      es: "Juego caótico desarrollado para la Wrong Genre Game Jam. Me encargué del pipeline 2D completo más la programación del personaje y las armas."
    },
    links: {
      play: "https://alahros.itch.io/"
    }
  }
];
