import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

(function applyStoredTheme() {
  const stored = localStorage.getItem('prism-theme');
  const theme = stored
    ? stored
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  document.body.setAttribute('data-theme', theme);
})();

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
