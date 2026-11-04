// A colour and an icon per theme. `bg` is the light fill, `fg` the deep ink;
// in dark mode the CSS flips them (see .theme-tag in app.css).
export const THEMES = {
  Groei:          { icon: 'sprout',   bg: '#dfeec8', fg: '#33461f' },
  Zelfcompassie:  { icon: 'flower',   bg: '#fbdde5', fg: '#7a2a43' },
  Mindfulness:    { icon: 'wind',     bg: '#d3eee7', fg: '#1d5649' },
  Rust:           { icon: 'moon',     bg: '#dce7f6', fg: '#26466e' },
  Focus:          { icon: 'target',   bg: '#e2e0f7', fg: '#393378' },
  Gevoel:         { icon: 'smile',    bg: '#eedff6', fg: '#5b2b71' },
  Dankbaarheid:   { icon: 'gift',     bg: '#f8e6cc', fg: '#6a4210' },
  Moed:           { icon: 'mountain', bg: '#fbdcd2', fg: '#7b2c16' },
  Verbinding:     { icon: 'users',    bg: '#ffe1d0', fg: '#643312' },
  Zelfvertrouwen: { icon: 'star',     bg: '#faefbd', fg: '#5c4806' },
  Loslaten:       { icon: 'feather',  bg: '#d9eff8', fg: '#1b546d' },
  Lichaam:        { icon: 'activity', bg: '#e6f2c4', fg: '#425517' },
  Hoop:           { icon: 'sunrise',  bg: '#ffe6cf', fg: '#7a3f12' },
  Creativiteit:   { icon: 'palette',  bg: '#f7dbef', fg: '#782563' },
  Geluk:          { icon: 'sparkles', bg: '#fff1b8', fg: '#665000' }
};
export const THEME_NAMES = Object.keys(THEMES);
export const themeOf = (tag) => THEMES[tag] || { icon: 'sun', bg: 'var(--color-accent-100)', fg: 'var(--color-accent-800)' };
