import {
    defineConfig,
    presetUno,
    presetAttributify,
    presetIcons,
    presetWebFonts
} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: 'DM Sans'
            }
        })
    ]
})