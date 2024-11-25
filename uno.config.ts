import {
  defineConfig,
  presetAttributify,
  presetUno
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  theme: {
    colors: {
      flawless: '#338743',
      perfect: '#2571ac',
      heroic: '#831dad',
      legendary: '#d61000'
    }
  },
  shortcuts: [
    
  ],
  blocklist: [
    'container',
    'outline'
  ],
});