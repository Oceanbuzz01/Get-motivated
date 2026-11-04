import Icon from './Icon.jsx';
import { themeOf } from '../themes.js';

/** The theme of a tip as a pill in the theme's own colour, with its icon. */
export default function ThemeTag({ tag, style }) {
  const t = themeOf(tag);
  return (
    <span className="tag theme-tag" style={{ '--t-bg': t.bg, '--t-fg': t.fg, ...style }}>
      <Icon name={t.icon} size={12} stroke={2.5} />{tag}
    </span>
  );
}
