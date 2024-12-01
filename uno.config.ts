import presetOnu from '@onu-ui/preset';
import {
  defineConfig
} from 'unocss';

export default defineConfig({
  presets: [
    presetOnu(),
  ],
  theme: {
    colors: {
      flawless: '#338743',
      perfect: '#2571ac',
      heroic: '#831dad',
      legendary: '#d61000'
    }
  },
  blocklist: [
    'container',
    'outline'
  ],
});