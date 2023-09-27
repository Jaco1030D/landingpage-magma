import * as img from './img'

export const languages = [
    {value: "", label: "Selecione o idioma"},
    { value: "pt", label: "Português" },
    { value: "en", label: "Inglês" },
    { value: "es", label: "Espanhol" },
    { value: "fr", label: "Francês" },
    { value: "de", label: "Alemão" },
    { value: "it", label: "Italiano" },
    { value: "nl", label: "Holandês" },
    { value: "ru", label: "Russo" },
    { value: "ja", label: "Japonês" },
    { value: "zh", label: "Chinês (Simplificado)" },
    { value: "ar", label: "Árabe" },
    { value: "hi", label: "Hindi" },
    { value: "ko", label: "Coreano" },
    { value: "tr", label: "Turco" },
    { value: "sv", label: "Sueco" },
    { value: "pl", label: "Polonês" },
    { value: "vi", label: "Vietnamita" },
    { value: "th", label: "Tailandês" },
    { value: "el", label: "Grego" },
    { value: "da", label: "Dinamarquês" }
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