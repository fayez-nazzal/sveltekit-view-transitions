import { defineConfig, presetUno, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Roboto',
          weights: [400, 500],
        },
      },
    }),
  ],
});
