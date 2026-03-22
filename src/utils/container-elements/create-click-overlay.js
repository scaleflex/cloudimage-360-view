import { createInitialIcon } from './create-initial-icon';

export const createClickOverlay = (logoSrc) => {
  const overlay = document.createElement('div');
  overlay.className = 'cloudimage-360-click-overlay';

  const icon = createInitialIcon(logoSrc);
  icon.classList.add('cloudimage-360-click-overlay-icon');

  const label = document.createElement('span');
  label.className = 'cloudimage-360-click-overlay-label';
  label.textContent = 'Click to load 360\u00B0 view';

  overlay.appendChild(icon);
  overlay.appendChild(label);

  return overlay;
};
