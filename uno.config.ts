import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import { presetIcons } from 'unocss'
export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind(),
    presetIcons({
      /* options */
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
    })
  ]
})
