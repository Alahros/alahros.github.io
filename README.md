# Alahros.github.io

Personal portfolio for **Alejandro Ahumada** — 2D artist, pixel art and Unity game developer.

Live site: <https://alahros.github.io>

## Stack

Plain HTML + CSS + JS. No build step. Hosted on GitHub Pages.

## Project structure

```
index.html        # Page markup (data-i18n attributes for text)
style.css         # Visual styles (modern dark + pixel-art accents)
projects.js       # Project data — edit this to add/remove projects
i18n.js           # EN/ES translations for static text
main.js           # Carousel logic + boot
assets/
  cv/             # CV PDF
  gifs/           # Project preview media (gif / png / mp4)
  thumbs/         # Square thumbnails for the carousel strip
  icons/          # Social icons
  lang/           # Language switch buttons
```

## How to add a new project

1. Drop your media (gif/png/jpg/mp4) into `assets/gifs/`.
2. Drop a square thumbnail (≈ 200×200 px) into `assets/thumbs/`.
3. Open `projects.js` and add a new object to the `PROJECTS` array, e.g.:

```js
{
  id: "my-new-game",
  thumb: "assets/thumbs/my-new-game.png",
  media: "assets/gifs/my-new-game.gif",
  title: { en: "My New Game", es: "Mi Nuevo Juego" },
  year: 2025,
  role: { en: "2D Artist", es: "Artista 2D" },
  tags: ["2D Art", "Unity"],
  bullets: {
    en: ["Bullet 1", "Bullet 2"],
    es: ["Punto 1", "Punto 2"]
  },
  description: {
    en: "Short description.",
    es: "Descripción corta."
  },
  links: { play: "https://...", trailer: "https://..." }
}
```

4. Save. Open `index.html` in a browser — the carousel auto-detects it.

## How to add/edit text

Static UI text (nav, hero, sections) lives in `i18n.js` under `I18N.en` and `I18N.es`.
Any element with `data-i18n="some.key"` reads from there.

## Local preview

Just open `index.html` in your browser. No server required.
