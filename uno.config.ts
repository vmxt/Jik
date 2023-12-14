import {
    defineConfig,
    presetUno,
    presetAttributify,
    presetIcons,
    presetWebFonts
} from 'unocss'

export default defineConfig({
    shortcuts: {
        'flex-center': 'flex items-center',
        'text': 'text-dark dark:text-light hover:text-orange-400',
        'text-orange': 'text-orange-400 hover:text-orange-500',
        'spotlight': 'text-orange-400 text-xl md:text-2xl',
        'anime-name': 'text-2xl md:text-3xl w-90 md:w-full',
        'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        'btn-orange': 'focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-orange-900',
        'transition': 'transition-colors duration-300 transform'
    },
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
