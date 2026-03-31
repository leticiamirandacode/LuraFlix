const criarTitulo = (dados) => ({
  matchScore: 95,
  ageBadge: {
    text: "14",
    class: ""
  },
  duration: "2h 00m",
  tags: ["Empolgante", "Filme", "Drama"],
  progress: 0,
  ...dados
});

const titulos = {
  mammaMia: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRcWiRKBuVNr95RJaCIF-aPxrX_z7fLllzlpwKcb9CjH4LD8ImlKqfCu6zzPGrbOk_SziSC9EZA41sxKdploow9mJmbbtLsnzmY.webp?r=3c7",
    top10: true,
    badge: "Top 10",
    badgeColor: "red",
    matchScore: 98,
    ageBadge: { text: "10", class: "" },
    duration: "1h 48m",
    tags: ["Divertido", "Musical", "Romance"],
    youtube: "https://youtu.be/1aqLE3WqYpg?si=FPsrD5ftCW4TMz20"
  }),
  shrek: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQb4Q_dAEGhPqKkFPbmEEhq5Jq54H8Y3GdYWAW9PVN9l4zF1lgM0T6M-cpzb8iJcdc_Ui51BhFAQDjAPYYjLF6VP8csZ6N1KbwI.webp?r=e24",
    matchScore: 97,
    ageBadge: { text: "L", class: "" },
    duration: "1h 30m",
    tags: ["Engraçado", "Animação", "Fantasia"],
    youtube: "https://www.youtube.com/watch?v=CwXOrWvPBPk"
  }),
  genteGrande: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcZjVqGp69U7Zg6I_sbG7xtfzA1Pkmfe9Rbgdj3kZjsBCtDnc7pmCCkuLy2-lFIfM8Y_yU44P-Mchlr4qrWcPTVcpkd_ZifaH2g.webp?r=1ec",
    matchScore: 92,
    ageBadge: { text: "12", class: "" },
    duration: "1h 42m",
    tags: ["Leve", "Comédia", "Família"],
    youtube: "https://www.youtube.com/watch?v=RanCz8X71sc"
  }),
  matrix: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQuyKpW1jcrXWdexrAzBH8b6sZhF7k808eWcsCPtCVHDxUhfND1NzN99fMwYKBVzRcgRPCggq82c9llcoNEGTwH0mxF9hgghYbU.webp?r=47f",
    matchScore: 99,
    ageBadge: { text: "14", class: "red-accent" },
    duration: "2h 16m",
    tags: ["Tenso", "Ficção", "Ação"],
    youtube: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  }),
  minhaMaeEUmaPeca: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeMebcV2QCEo4kWl1ozJUx4ZMSBOzkSoYgCqnLi2M_7KOC_WS5zTOnu4Q7HanxoDgw4vDH4MO_-0RiYuM3QUMhxC0XC5ZcHCxlY.webp?r=9d9",
    progress: 70,
    badge: "Assistindo",
    badgeColor: "gray",
    matchScore: 94,
    ageBadge: { text: "12", class: "" },
    duration: "1h 24m",
    tags: ["Engraçado", "Comédia", "Nacional"],
    youtube: "https://www.youtube.com/watch?v=HrST-4WLlbA"
  }),
  senhorDosAneis: criarTitulo({
    img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg",
    progress: 40,
    badge: "Assistindo",
    badgeColor: "gray",
    matchScore: 98,
    ageBadge: { text: "12", class: "" },
    duration: "3h 21m",
    tags: ["Épico", "Fantasia", "Aventura"],
    youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
  }),
  ateQueAMorteNosSepare: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVp3OAeRGKMemiuN1kK5ZgT6Kh-twIpGlAImPmIx8ALfFEdHdRAbqcvnONbaxjtXfGdmCyPLqQhRmaS3gswn8BScKKReXhhq1s0.webp?r=0ff",
    badge: "Assistindo",
    matchScore: 88,
    ageBadge: { text: "14", class: "" },
    duration: "1h 30m",
    tags: ["Tenso", "Suspense", "Drama"],
    youtube: "https://www.youtube.com/watch?v=dAnzuTb-A8k"
  }),
  sexyAndTheCity: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUpOuTO8lhOZx8lEl01l0IDyrCWkFj8zokmDhiNx2_nybrqQxwZUMxhgyL0i3RWSpxCz-_1pcsoTh6UrsWZ_7lNPdr1s-IJEulg.webp?r=caa",
    badge: "Nova temporada",
    badgeColor: "red",
    matchScore: 91,
    ageBadge: { text: "16", class: "red-accent" },
    duration: "6 temporadas",
    tags: ["Leve", "Romance", "Comédia"],
    youtube: "https://www.youtube.com/watch?v=b58gZlXm2yI"
  }),
  brooklynNineNine: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABenekJkXTG23OZ6zwgdHK1qQf8w4Rbbsu5TMGXnytVnXfqbMK6dg2rzQ52ZwPCPnmq2SYItR4zVsScLiYdnotUmuEwO69UUueGo.webp?r=37d",
    badge: "Nova temporada",
    badgeColor: "red",
    matchScore: 96,
    ageBadge: { text: "14", class: "" },
    duration: "8 temporadas",
    tags: ["Leve", "Comédia", "Policial"],
    youtube: "https://www.youtube.com/watch?v=ZGYjQxX7Bok"
  }),
  breakingBad: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_wyuaKDX2rC8U6CONyA1ZeHvlF8tcl3bTw7rcp4dnY9ziAEwIy_Gb6-cUO7khOgUB9sQoOr5YZcDqZ7JL0UZD2ImpFysUikCo.webp?r=01d",
    badge: "Novidade",
    badgeColor: "red",
    matchScore: 99,
    ageBadge: { text: "18", class: "red-accent" },
    duration: "5 temporadas",
    tags: ["Sombrio", "Drama", "Crime"],
    youtube: "https://www.youtube.com/watch?v=XZ8daibM3AE"
  }),
  theVampireDiaries: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXrR_sMBWBeuxHxlJfD2n16OSuzPnaVkBST1muZuC38Sh4RZzdBiaUrkfHuLeAz1poqhPHq-uE_T99KNtyT1xLqiyoWmPgpyiAI.webp?r=fb5",
    badge: "Novidade",
    badgeColor: "red",
    matchScore: 93,
    ageBadge: { text: "16", class: "red-accent" },
    duration: "8 temporadas",
    tags: ["Emocionante", "Fantasia", "Romance"],
    youtube: "https://youtu.be/RO3Qp_XdR0w?si=M0c3IT71khaquan9"
  }),
  suits: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5",
    top10: true,
    matchScore: 95,
    ageBadge: { text: "14", class: "" },
    duration: "9 temporadas",
    tags: ["Inteligente", "Drama", "Jurídico"],
    youtube: "https://www.youtube.com/watch?v=Ab2YIbP5xw8"
  }),
  strangerThings: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdRUTkjXSjXmg80MhSv4ll1h04BKugSlKQvPOeJ-VfPIz8he71hjeDBZ5WDEpzlNi6tblBvcIDHC6vl7DXxooQBIQeg5QnA6uOQ.webp?r=2e4",
    top10: true,
    matchScore: 97,
    ageBadge: { text: "14", class: "" },
    duration: "4 temporadas",
    tags: ["Empolgante", "Ficção", "Suspense"],
    youtube: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
  }),
  mazeRunner: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRpPDmkdzIBslxyDGfBNVesFLLE0B6O0CurfSxUu82BvHMp3eWjrw_aTmeqjE1zociqvevxKit-wxmoIlTw5EarMAh7gbw2wrhQ.webp?r=555",
    top10: true,
    matchScore: 90,
    ageBadge: { text: "14", class: "" },
    duration: "1h 53m",
    tags: ["Intenso", "Ficção", "Ação"],
    youtube: "https://www.youtube.com/watch?v=64-iSYVmMVY"
  }),
  comoSeFosseAPrimeiraVez: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV0XkIwyOOLUiPalum5qRseQ3E-FLuZzEUFXZqe6eUnFrr8vTC2ltc8VYwl7KeXtgDsi83HKZ1dUdqT2utaqptWFwX1pw5_ZMrI.webp?r=837",
    badge: "Novidade",
    badgeColor: "red",
    matchScore: 94,
    ageBadge: { text: "10", class: "" },
    duration: "1h 39m",
    tags: ["Fofo", "Romance", "Comédia"],
    youtube: "https://www.youtube.com/watch?v=17KJk3ErIx0"
  }),
  ilhaDoMedo: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfRXbqsK05W2B6W1Y-NySDnx7k6YdbxyVvRRVsP2p2mUQ4fGfx4AMvSqwl5aMUYEJpKuDvjuZez0i4Isz6uUcb4X36vU3bqhUy4.webp?r=49d",
    badge: "Assistindo",
    matchScore: 96,
    ageBadge: { text: "16", class: "red-accent" },
    duration: "2h 18m",
    tags: ["Sombrio", "Suspense", "Mistério"],
    youtube: "https://www.youtube.com/watch?v=v8yrZSkKxTA"
  }),
  laCasaDePapel: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdPTw9i74LWMTjSW_Yq61M4Dt4CHnVZZ5p92iJEaMrXhQ1D4CUnWz9-_yF5enSgza9cW4LNfOWQUwPw7Vk28DYUA5PjQnYLXxVY.jpg?r=131",
    badge: "Assistindo",
    matchScore: 95,
    ageBadge: { text: "16", class: "red-accent" },
    duration: "5 temporadas",
    tags: ["Tenso", "Ação", "Crime"],
    youtube: "https://www.youtube.com/watch?v=iS5xXr-GOnM"
  }),
  theOffice: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRuywCKfmKyjH4MDyPsQM7KxZDON-YmDJe-riDi05axIKf2s-wI2dCQ7kUY4z04lIDeIMNrA5IDc8rnUnGWeX7ZTWpCtX0hhzis.webp?r=fea",
    badge: "Assistindo",
    matchScore: 97,
    ageBadge: { text: "14", class: "" },
    duration: "9 temporadas",
    tags: ["Constrangedor", "Comédia", "Trabalho"],
    youtube: "https://www.youtube.com/watch?v=tNcDHWpselE"
  }),
  gossipGirl: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRSSySpczVbDRN7GtCwocOyxNDF4JjV-4g360CnQuRuWyU-KY-AE_iz18GdAtnA-25hq-6vkIfIbcz4E-q-CakrfT75HVl25xtM.webp?r=0f8",
    badge: "Assistindo",
    matchScore: 89,
    ageBadge: { text: "14", class: "" },
    duration: "6 temporadas",
    tags: ["Viciante", "Drama", "Romance"],
    youtube: "https://www.youtube.com/watch?v=dAnzuTb-A8k"
  }),
  you: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVuTJFhb5im_lWopbOO1XRYCT3EoXwbPcWV7cBNCiWFeBdVukyyfjEQYTbeg2FgtsK449gpOxNqWEC8Fpyj5J_679VP6RtfFRrQ.jpg?r=d99",
    badge: "Assistindo",
    matchScore: 94,
    ageBadge: { text: "18", class: "red-accent" },
    duration: "4 temporadas",
    tags: ["Sombrio", "Suspense", "Psicológico"],
    youtube: "https://www.youtube.com/watch?v=mn0QvmEicIY"
  }),
  peakyBlinders: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY3SkuJ676wWCTnvaQrL5-i_O3wZon_2lzZM10g0Tks-HAUL1HMtUOn0MkasDp8liXQs1-EJ-yCcLtuw7wRUmRlXFOnEth7Kbho.jpg?r=7cc",
    badge: "Assistindo",
    matchScore: 96,
    ageBadge: { text: "18", class: "red-accent" },
    duration: "6 temporadas",
    tags: ["Estiloso", "Drama", "Crime"],
    youtube: "https://www.youtube.com/watch?v=P_-r11fcDTc"
  }),
  deRepente30: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRFjgyYyNwLLMKF5d9RW8GnZBv4uEKTGYeB0b8ILztb9n0HFNGrxUGwswklIv_Bmpp-7jyt3BCRJdK45Lv8V4Sbs4sTahYzgI0I.webp?r=544",
    matchScore: 93,
    ageBadge: { text: "12", class: "" },
    duration: "1h 38m",
    tags: ["Nostálgico", "Romance", "Comédia"],
    youtube: "https://www.youtube.com/watch?v=syimNmqZOVA"
  }),
  madagascar: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfqZNrahAmxVemFcaGWmeaK_6KnXHjtJcblsXt9vcYDlLRnoOAd6vJXV6YBaD67u_RFyxXmIK4jp0FZsHdxLNC0XHjKo3b-Zkiw.webp?r=06a",
    matchScore: 96,
    ageBadge: { text: "L", class: "" },
    duration: "1h 26m",
    tags: ["Divertido", "Animação", "Aventura"],
    youtube: "https://www.youtube.com/watch?v=orAqhC-Hp_o"
  }),
  vestidaPracasar: criarTitulo({
    img: "https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfvWVHORE7_uJukcxpRMGVy6pDkr5M94Kr4Ez71rq0SCHDRIrFPuHXGKEjsvRTuGMlPPAVu5whkQ5zv8okvnsdEqUsdSlb2tqeI.webp?r=35b",
    matchScore: 92,
    ageBadge: { text: "12", class: "" },
    duration: "1h 51m",
    tags: ["Leve", "Romance", "Comédia"],
    youtube: "https://www.youtube.com/watch?v=J9DzAjOe7sY"
  })
};
const categoria = (title, items) => ({ title, items });

export const catalogosPorPerfil = {
  Leticia: [
    categoria("Em alta", [
      titulos.mammaMia,
      titulos.shrek,
      titulos.genteGrande,
      titulos.matrix,
      titulos.madagascar
    ]),
    categoria("Continuar assistindo", [
      {
        ...titulos.sexyAndTheCity,
        progress: 62,
        badge: "Assistindo",
        badgeColor: "red"
      },
      {
        ...titulos.comoSeFosseAPrimeiraVez,
        progress: 28,
        badge: "Assistindo",
        badgeColor: "red"
      }
    ]),
    categoria("Para maratonar", [
      titulos.sexyAndTheCity,
      titulos.breakingBad,
      titulos.theVampireDiaries,
      titulos.brooklynNineNine,
      titulos.strangerThings,
      titulos.suits
    ]),
    categoria("Principais escolhas do dia pra você", [
      titulos.mazeRunner,
      titulos.comoSeFosseAPrimeiraVez,
      titulos.ateQueAMorteNosSepare,
      titulos.ilhaDoMedo,
      titulos.vestidaPracasar,
    ])
  ],
  Joao: [
    categoria("Em alta", [
      titulos.mammaMia,
      titulos.shrek,
      titulos.genteGrande,
      titulos.matrix,
      titulos.madagascar
    ]),
    categoria("Continuar assistindo", [
      {
        ...titulos.breakingBad,
        progress: 41,
        badge: "Assistindo",
        badgeColor: "red"
      },
      {
        ...titulos.laCasaDePapel,
        progress: 25,
        badge: "Assistindo",
        badgeColor: "red"
      }
    ]),
    categoria("Para maratonar", [
      titulos.theOffice,
      titulos.you,
      titulos.peakyBlinders,
      titulos.breakingBad,
      titulos.suits,
      titulos.laCasaDePapel
    ]),
    categoria("Principais escolhas do dia pra você", [
      titulos.mazeRunner,
      titulos.ilhaDoMedo,
      titulos.comoSeFosseAPrimeiraVez,
      titulos.deRepente30,
    ])
  ],
  Marcela: [
    categoria("Em alta", [
      titulos.mammaMia,
      titulos.shrek,
      titulos.genteGrande,
      titulos.matrix,
      titulos.madagascar
    ]),
    categoria("Continuar assistindo", [
      {
        ...titulos.theVampireDiaries,
        progress: 85
      },
      {
        ...titulos.gossipGirl,
        progress: 36
      }
    ]),
    categoria("Para maratonar", [
      titulos.suits,
      titulos.brooklynNineNine,
      titulos.laCasaDePapel,
      titulos.breakingBad,
      titulos.theOffice,
      titulos.strangerThings
    ]),
    categoria("Principais escolhas do dia pra você", [
      titulos.mazeRunner,
      titulos.ilhaDoMedo,
      titulos.comoSeFosseAPrimeiraVez
    ])
  ],
  Vini: [
    categoria("Em alta", [
      titulos.mammaMia,
      titulos.shrek,
      titulos.genteGrande,
      titulos.matrix,
      titulos.madagascar
    ]),
    categoria("Continuar assistindo", [
      {
        ...titulos.peakyBlinders,
        progress: 65
      },
      {
        ...titulos.matrix,
        progress: 15
      }
    ]),
    categoria("Principais escolhas do dia pra você", [
      titulos.mazeRunner,
      titulos.ilhaDoMedo,
      titulos.comoSeFosseAPrimeiraVez
    ]),
    categoria("Para maratonar", [
      titulos.sexyAndTheCity,
      titulos.theVampireDiaries,
      titulos.gossipGirl,
      titulos.you,
      titulos.strangerThings,
      titulos.theOffice
    ])
  ]
};
