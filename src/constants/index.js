import * as img from './img'

export const termsText = {
    title: "Termos de uso",
    explication: "Estes Termos de Uso regem o uso dos serviços de tradução de documentos oferecidos por [Nome da Empresa], acessíveis em [URL do Site]. Ao acessar ou utilizar os Serviços, você concorda em cumprir e estar vinculado a estes Termos. Se você não concordar com estes Termos, não utilize os Serviços.",
    texts: [
        {
            title: "1. Serviços",
            topics: [
                {
                    number: "1.1",
                    strong: "Descrição dos Serviços",
                    text: ": Os Serviços da Empresa incluem a tradução de documentos de um idioma para outro, de acordo com as instruções e requisitos do cliente."
        
                },
                {
                    number: "1.2",
                    strong: "Uso Adequado",
                    text: ": : Você concorda em usar os Serviços apenas para fins legais e adequados. Você não deve utilizar os Serviços para qualquer atividade ilegal, fraudulenta, difamatória, abusiva ou prejudicial."
        
                }
            ]
        },
        {
            title: "2. Pagamento e Taxas",
            topics: [
                {
                    number: "2.1",
                    strong: "Preços e Taxas",
                    text: "Os preços e taxas para os Serviços são estabelecidos pela Empresa e podem ser encontrados em [URL da Página de Preços]. Os preços estão sujeitos a alterações sem aviso prévio.",
                },
                {
                    number: "2.2",
                    strong: "Pagamento",
                    text: "O pagamento pelos Serviços deve ser efetuado de acordo com as políticas de pagamento da Empresa, conforme especificado em [URL da Página de Pagamento].",
                },
            ],
        },
        {
            title: "3. Propriedade Intelectual",
            topics: [
                {
                    number: "3.1",
                    strong: "Direitos Autorais",
                    text: "A Empresa retém os direitos autorais de todas as traduções realizadas. Você concorda em não reproduzir, distribuir ou utilizar as traduções para fins comerciais sem autorização prévia por escrito da Empresa.",
                },
            ],
        },
        {
            title: "4. Confidencialidade",
            topics: [
                {
                    number: "4.1",
                    strong: "Confidencialidade",
                    text: "A Empresa se compromete a manter a confidencialidade de todos os documentos e informações fornecidos pelos clientes. Os documentos fornecidos para tradução serão tratados com a máxima confidencialidade.",
                },
            ],
        },
        {
            title: "5. Cancelamento e Reembolso",
            topics: [
                {
                    number: "5.1",
                    strong: "Cancelamento",
                    text: "O cliente pode cancelar um pedido antes do início do trabalho de tradução. O cancelamento de um pedido já em andamento pode estar sujeito a taxas.",
                },
                {
                    number: "5.2",
                    strong: "Reembolso",
                    text: "A política de reembolso da Empresa está especificada em [URL da Política de Reembolso]. O cliente deve seguir essa política para solicitar um reembolso.",
                },
            ],
        },
        {
            title: "6. Responsabilidade",
            topics: [
                {
                    number: "6.1",
                    strong: "Limitação de Responsabilidade",
                    text: "A Empresa não é responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou incapacidade de usar os Serviços.",
                },
            ],
        },
        {
            title: "7. Modificações",
            topics: [
                {
                    number: "7.1",
                    strong: "Modificações dos Termos",
                    text: "A Empresa se reserva o direito de modificar estes Termos a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação dos Termos revisados em [URL dos Termos de Uso]. É sua responsabilidade revisar regularmente os Termos para estar ciente de quaisquer alterações.",
                },
            ],
        },
        {
            title: "8. Lei Aplicável e Jurisdição",
            topics: [
                {
                    number: "8.1",
                    strong: "Lei Aplicável",
                    text: "Estes Termos são regidos pelas leis do [Estado/País], sem consideração a conflitos de leis.",
                },
                {
                    number: "8.2",
                    strong: "Foro Jurisdicional",
                    text: "Qualquer disputa relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais localizados no [Estado/País].",
                },
            ],
        },
        {
            title: "9. Contato",
            topics: [
                {
                    number: "9.1",
                    strong: "Contato",
                    text: "Para entrar em contato com a Empresa em relação a estes Termos de Uso, envie um e-mail para [Endereço de E-mail de Contato].",
                },
            ],
        },
        
    ]
}

export const typeContent = [
    {value: "", label: "Selecione..."},
    {value: "type1", label: "tipo1"},
    {value: "type2", label: "tipo2"},
    {value: "type3", label: "tipo3"},
    {value: "type4", label: "tipo4"},
    {value: "type5", label: "tipo5"},
    {value: "type6", label: "tipo6"},
]

export const languages = [
    {value: "", label: "Selecione..."},
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
  
export const ThanksText = {
    title: 'Agradecemos pelo contato',
    text: 'Obrigado por compartilhar seus detalhes. Em breve, nossa equipe entrará em contato para discutir suas necessidades de tradução',
    btnText: 'Voltar A home',
    image: img.ImgThanks
}

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
                        'Tipo conteudo',
                        'Idioma da origem',
                        'Idioma para tradução',
                    ],
                    step2: [
                        'Adicione aqui seus arquivos',
                        'Adicione aqui seus arquivos',
                        'Adicione aqui seus arquivos',
                    ],
                    step3: [
                        'Seu Nome*',
                        'Seu Cargo',
                        'Seu E-mail*',
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