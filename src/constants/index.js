import * as img from './img'

export const languages = [
    { value: "pt", text: "Português" },
    { value: "en", text: "Inglês" },
    { value: "es", text: "Espanhol" },
    { value: "fr", text: "Francês" },
    { value: "de", text: "Alemão" },
    { value: "it", text: "Italiano" },
    { value: "nl", text: "Holandês" },
    { value: "ru", text: "Russo" },
    { value: "ja", text: "Japonês" },
    { value: "zh", text: "Chinês (Simplificado)" },
    { value: "ar", text: "Árabe" },
    { value: "hi", text: "Hindi" },
    { value: "ko", text: "Coreano" },
    { value: "tr", text: "Turco" },
    { value: "sv", text: "Sueco" },
    { value: "pl", text: "Polonês" },
    { value: "vi", text: "Vietnamita" },
    { value: "th", text: "Tailandês" },
    { value: "el", text: "Grego" },
    { value: "da", text: "Dinamarquês" }
  ];
  

export const QuotationServiceText = {
    title: 'Serviço de Tradução Técnica',
    progressIndicator: [
        'Selecione o idioma',
        'Envie arquivos',
        'Adicione Informações'
    ],
    formSteps: {
        title: 'Cotação Rápida',
        inputs: {
                    step1: [
                        'Do que se trata o seu conteudo',
                        'Idioma da origem',
                        'Idioma para tradução',
                    ],
                    step2: [
                        'Adicione aqui seus arquivos',
                        'Adicione aqui seus arquivos',
                        'Adicione aqui seus arquivos',
                    ],
                    step3: [
                        'Seu Nome',
                        'Seu Cargo',
                        'Seu E-mail',
                    ],
                }
        
    }
}

export const PartnershipsText = {
    title: 'Nossas Parcerias',
    logo: [
        img.shopee,
        img.Zf,
        img.crowdin,
        img.cloudwords,
        img.museu,
        img.osx,
        img.ziemann,
        img.ambev,
        img.abbott,
        img.anton,
        img.bwx,
        img.ef,
        img.ellipse,
        img.evoltz,
        img.junghe,
        img.zapier
    ]
}

export const SectorsActivityText = {
    title: 'Veja alguns dos nossos setores de atuação',
    sector: [
        {
            icon: img.law,
            text: 'Legal'
        },
        {
            icon: img.medical,
            text: 'Medica'
        },
        {
            icon: img.company,
            text: 'Empresarial'
        },
        {
            icon: img.money,
            text: 'Financeira'
        },
        {
            icon: img.programming,
            text: 'IT & Software'
        },
        {
            icon: img.plane,
            text: 'Turismo'
        },
        {
            icon: img.film,
            text: 'Media & Filmes'
        },
        {
            icon: img.MBA,
            text: 'E-learning'
        },
        {
            icon: img.tesla,
            text: 'Automotiva'
        },
        {
            icon: img.marketing,
            text: 'Marketing'
        },
        {
            icon: img.Bio,
            text: 'Ciências'
        },
        {
            icon: img.buy,
            text: 'E-commerce'
        },
    ]
}

export const FeedbackText = {
    title: 'Qualidade que da gosto',
    description: 'Cada tradução passa por uma revisão minuciosa e validação tanto pela nossa equipe de editores externos profissionais quanto pelos nossos especialistas internos em idiomas.',
    card: [
        {
            icon: img.Elisabeth,
            name: 'Elisabeth',
            company: 'Anton Paar',
            description: 'Na Magma Translation, encontramos profissionalismo e precisão em cada projeto. Anton Paar agradece pela parceria e recomenda seus excelentes serviços de tradução.',
            stars: [
                img.Star,
                img.Star,
                img.Star,
                img.Star,
                img.Star
            ]
        },
        {
            icon: img.Ricardo,
            name: 'Ricardo',
            company: 'Museu do amanhã',
            description: 'A Magma Translation tem sido uma aliada inestimável na nossa missão de difundir conhecimento. O Museu do Amanhã agradece pela excelência e dedicação em cada tradução.',
            stars: [
                img.Star,
                img.Star,
                img.Star,
                img.Star,
                img.Star
            ]
        },
        {
            icon: img.Marcelo,
            name: 'Marcelo',
            company: 'Ambev',
            description: 'Com a expertise da Magma Translation, a Ambev elevou sua comunicação global a novos patamares. Valorizamos e recomendamos seus impecáveis serviços de tradução.',
            stars: [
                img.Star,
                img.Star,
                img.Star,
                img.Star,
                img.Star
            ]
        }
    ]
}

export const TranslationText = {
    title: 'O que você pode traduzir?',
    description: 'Nossos tradutores proficientes têm a capacidade de traduzir qualquer tipo de documento, com suporte aos tipos de arquivo abaixo mencionados.',
    documentsType: [
        {
            icon: img.PDF,
            name: 'Documentos'
        },
        {
            icon: img.Goal,
            name: 'Marketing e Anúncios'
        },
        {
            icon: img.Website,
            name: 'Website & Apps'
        },
        {
            icon: img.VideoCamera,
            name: 'Vídeos'
        },
        {
            icon: img.Ecommerce,
            name: 'Descrições de produtos'
        },
        {
            icon: img.Bio,
            name: 'Artigos e muito mais'
        },
    ]
}

export const FooterText = {
    description: 'MAGMA é um fornecedor global de soluções de localização, permitindo que marcas estabeleçam uma presença autêntica em diversos mercados ao redor do mundo.',
    reserved: 'Magma Translation | Todos os direitos reservados. ©Magma™'
}