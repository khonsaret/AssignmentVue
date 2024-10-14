import { createI18n } from 'vue-i18n'
const messages = {
    en: {
        home: "Home",
        course:"Course",
        process:"Process",
        hosting:"Hosting",
        about:"About",
        // lang:"EN",
        tlogo:"KHONSARET"
    },
    khm: {
        home: "ទំព័រដើម",
        course:"វគ្គសិក្សា",
        process:"ដំណើរការ",
        hosting:"តម្លៃបង្ហោះ",
        about:"អំពីយើង",
        // lang:"KH",
        tlogo:"ខុនសារ៉េត"
    
    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n