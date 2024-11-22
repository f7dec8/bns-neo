import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
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