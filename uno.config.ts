import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Noto Sans Korean',
        serif: 'Noto Serif Korean',
        mono: 'Noto Sans Mono',
      },
    }),
  ],
  theme: {
    colors: {
      flawless: '#338743',
      perfect: '#2571ac',
      heroic: '#831dad',
      legendary: '#d61000'
    }
  }
});