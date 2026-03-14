// Dados extraídos do gerador Perchance ajpw-dragon-previewer - mesmos endpoints (user-uploads.perchance.org)
window.AJDRAGON_DATA = {
  settings: { height: '500px' },
  selects: {
    eyeshape: ['Any','Spooky','Lovely','Blank','Striking','Cute','Creepy','Crossed','Suspicious','Starry','Swirl','Surprised','Ordinary'],
    tail: ['Any','finned','aquatic','kaiju','chimera','serpent','bladed','feathery'],
    pattern: ['Any','avian','nova','speckled','scorched','leviathan','jetstream','verdant'],
    wings: ['Any','mothlike','continuous','classical','battleworn','frilled','hooked','downy','none'],
    mane: ['Any','doubled','quilled','pinfeather','fractal','oceanic'],
    hornshape: ['Any','broken','branched','curled','crystalline','deepsea','sleek','quad','none'],
    eyecolor: ['Any','Amethyst','Cerulean','Dreamy','Dusty','Earthy','Flaxen','Florid','Forested','Hazel','Lush','Misty','Oceanic','Opulent','Pale','Rosy','Russet','Seafoam','Shady','Smoky','Sunny','Verdant','Vibrant','Warm','custom'],
    primarycolor: ['Any','Amethyst','Cerulean','Dreamy','Dusty','Earthy','Flaxen','Florid','Forested','Hazel','Lush','Misty','Oceanic','Opulent','Pale','Rosy','Russet','Seafoam','Shady','Smoky','Sunny','Verdant','Vibrant','Warm','custom'],
    secondarycolor: ['Any','Amethyst','Cerulean','Dreamy','Dusty','Earthy','Flaxen','Florid','Forested','Hazel','Lush','Misty','Oceanic','Opulent','Pale','Rosy','Russet','Seafoam','Shady','Smoky','Sunny','Verdant','Vibrant','Warm','custom'],
    tertiarycolor: ['Any','Amethyst','Cerulean','Dreamy','Dusty','Earthy','Flaxen','Florid','Forested','Hazel','Lush','Misty','Oceanic','Opulent','Pale','Rosy','Russet','Seafoam','Shady','Smoky','Sunny','Verdant','Vibrant','Warm','custom']
  },
  // Odds: valor numérico por opção do select (índice ou valor exato do select)
  eyeOdds: { Any: null, Spooky:1, Lovely:2, Blank:3, Striking:4, Cute:5, Creepy:6, Crossed:7, Suspicious:8, Starry:9, Swirl:10, Surprised:11, Ordinary:12 },
  tailOdds: { Any: null, finned:1, aquatic:2, kaiju:3, chimera:4, serpent:5, bladed:6, feathery:7 },
  bodyOdds: { Any: null, avian:1, nova:2, speckled:3, scorched:4, leviathan:5, jetstream:6, verdant:7 },
  wingOdds: { mothlike:7, continuous:4, classical:3, battleworn:2, frilled:5, hooked:6, downy:1, none:8 },
  maneOdds: { Any: null, doubled:1, quilled:2, pinfeather:3, fractal:4, oceanic:5 },
  hornOdds: { Any: null, broken:1, branched:2, curled:3, crystalline:4, deepsea:5, sleek:6, quad:7, none:8 },
  // Uma cor (filter CSS) por tema - primeiro da lista do original
  colorFilters: {
    Amethyst_Wildflower: 'brightness(0) saturate(100%) invert(52%) sepia(13%) saturate(1195%) hue-rotate(224deg) brightness(90%) contrast(88%)',
    Cerulean_Sky: 'brightness(0) saturate(100%) invert(88%) sepia(6%) saturate(1622%) hue-rotate(166deg) brightness(104%) contrast(99%)',
    Dreamy_Lilac: 'brightness(0) saturate(100%) invert(65%) sepia(64%) saturate(4549%) hue-rotate(213deg) brightness(99%) contrast(107%)',
    Dusty_Taupe: 'brightness(0) saturate(100%) invert(72%) sepia(6%) saturate(921%) hue-rotate(314deg) brightness(95%) contrast(108%)',
    Earthy_Umber: 'brightness(0) saturate(100%) invert(58%) sepia(12%) saturate(1190%) hue-rotate(266deg) brightness(86%) contrast(85%)',
    Flaxen_Ochre: 'brightness(0) saturate(100%) invert(90%) sepia(24%) saturate(684%) hue-rotate(339deg) brightness(97%) contrast(88%)',
    Florid_Vermillion: 'brightness(0) saturate(100%) invert(42%) sepia(99%) saturate(725%) hue-rotate(346deg) brightness(95%) contrast(92%)',
    Forested_Juniper: 'brightness(0) saturate(100%) invert(38%) sepia(82%) saturate(1759%) hue-rotate(229deg) brightness(101%) contrast(103%)',
    Hazel_Olive: 'brightness(0) saturate(100%) invert(64%) sepia(18%) saturate(262%) hue-rotate(338deg) brightness(89%) contrast(92%)',
    Lush_Berry: 'brightness(0) saturate(100%) invert(46%) sepia(15%) saturate(971%) hue-rotate(284deg) brightness(85%) contrast(81%)',
    Misty_Starlight: 'brightness(0) saturate(100%) invert(89%) sepia(70%) saturate(1085%) hue-rotate(220deg) brightness(83%) contrast(77%)',
    Oceanic_Sapphire: 'brightness(0) saturate(100%) invert(68%) sepia(97%) saturate(4782%) hue-rotate(172deg) brightness(105%) contrast(104%)',
    Opulent_Royalty: 'brightness(0) saturate(100%) invert(25%) sepia(99%) saturate(7495%) hue-rotate(264deg) brightness(89%) contrast(123%)',
    Pale_Pastel: 'brightness(0) saturate(100%) invert(85%) sepia(50%) saturate(557%) hue-rotate(198deg) brightness(88%) contrast(86%)',
    Rosy_Sunset: 'brightness(0) saturate(100%) invert(78%) sepia(85%) saturate(3736%) hue-rotate(318deg) brightness(114%) contrast(99%)',
    Russet_Mahogany: 'brightness(0) saturate(100%) invert(74%) sepia(35%) saturate(432%) hue-rotate(0deg) brightness(93%) contrast(94%)',
    Seafoam_Lagoon: 'brightness(0) saturate(100%) invert(79%) sepia(27%) saturate(7438%) hue-rotate(160deg) brightness(102%) contrast(103%)',
    Shady_Dark: 'brightness(0) saturate(100%) invert(33%) sepia(10%) saturate(2074%) hue-rotate(243deg) brightness(93%) contrast(86%)',
    Smoky_Dust: 'brightness(0) saturate(100%) invert(83%) sepia(15%) saturate(247%) hue-rotate(2deg) brightness(99%) contrast(85%)',
    Sunny_Amber: 'brightness(0) saturate(100%) invert(74%) sepia(58%) saturate(3516%) hue-rotate(358deg) brightness(97%) contrast(107%)',
    Verdant_Lush: 'brightness(0) saturate(100%) invert(93%) sepia(11%) saturate(6604%) hue-rotate(121deg) brightness(103%) contrast(106%)',
    Vibrant_Neon: 'brightness(0) saturate(100%) invert(64%) sepia(34%) saturate(615%) hue-rotate(326deg) brightness(103%) contrast(101%)',
    Warm_Tangerine: 'brightness(0) saturate(100%) invert(64%) sepia(34%) saturate(615%) hue-rotate(326deg) brightness(103%) contrast(101%)'
  },
  layers: [
    { name: 'Eyeshine', filter: null, url: 'https://user-uploads.perchance.org/file/d4d994e5bfe58925dd4f4843563c4aaa.webp' },
    { name: 'Mouth', filter: null, url: 'https://user-uploads.perchance.org/file/e363660cf1f1dc381f3b528cdbf07475.webp' },
    { name: 'Eyes', filter: 'eye', options: [
      { cond: 10, url: 'https://user-uploads.perchance.org/file/49c8e07b4022ed4f84191b72ffed78ba.webp' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/96c26ae382f0caa8d21f880663a2d5c2.webp' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/bb77bbf84f76c6925197b73ab6b35506.webp' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/8fd0d3e4b7f495a44fd6029d6b80639e.webp' },
      { cond: 1, url: 'https://user-uploads.perchance.org/file/894610a386a9837e33a08fa4712236fb.webp' },
      { cond: 8, url: 'https://user-uploads.perchance.org/file/4e75f6e51e9a7a9f65e91e7fd69de1aa.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/74ca45e4089d35d74ca4da9b3945e08c.webp' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/d46ebe63c1ba4dd984233f1605ffee1f.webp' },
      { cond: 9, url: 'https://user-uploads.perchance.org/file/e0efb8448952718e591e07b229a94c4e.webp' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/63680d8411e803c57ed396a7936e7e6b.webp' },
      { cond: 11, url: 'https://user-uploads.perchance.org/file/a5c848b477ff7171254a7c170f127325.webp' },
      { cond: 12, url: 'https://user-uploads.perchance.org/file/1bf63b0576a5d79110942da4ed231ed5.webp' }
    ]},
    { name: 'Eyebase', filter: null, url: 'https://user-uploads.perchance.org/file/6402924aa33fa7f4230f83fd2849f062.webp' },
    { name: 'Eyelashes', filter: null, options: [
      { cond: false, url: null },
      { cond: true, url: 'https://user-uploads.perchance.org/file/6f50b7b293f08b761538d289c3d9c1fe.webp' }
    ]},
    { name: 'Claws', filter: null, url: 'https://user-uploads.perchance.org/file/98690d480e02dd282f21fa25fcdc6750.png' },
    { name: 'Wingshadow', filter: null, options: [
      { cond: 0, url: null },
      { cond: 1, url: 'https://user-uploads.perchance.org/file/c2242e37964d0d0b6ad24665d95c63f6.webp' }
    ]},
    { name: 'Wingpattern', filter: 'secondary', options: [
      { cond: 8, url: null },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/954ae19d99f6bdfe61b600b8629c937b.webp' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/f6659fb0f79894e048ef83796522d6d0.webp' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/8af7b01abbd57b06a904825737375de4.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/e3bd856bc291fe82a4422c51588e46a4.webp' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/cc6dd65c7f5ff5406d25e2922d838086.webp' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/4f38b60dc32af7027420c30bc6bf55b8.webp' },
      { cond: 1, url: null }
    ]},
    { name: 'Wings', filter: 'tertiary', options: [
      { cond: 1, url: 'https://user-uploads.perchance.org/file/3fd58a0928966192b15d3ba9ffe5ea14.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/fa7e765b19fd135f30628bb64effdf9a.webp' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/6439294a064dcfc05833b522787a2556.webp' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/67ba819bf4ace2a04bfd68a17d59ade1.png' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/62ab124b09b3ca46526ed63f3f2dcc57.webp' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/1fcbf89e7042067c8a4f7f6e5a988f21.png' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/fb99ff8d0b68326aa25291affce8d6f0.webp' },
      { cond: 8, url: null }
    ]},
    { name: 'Hornshadow', filter: null, options: [
      { cond: 0, url: null },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/0cba57c44b25f8a5ab6f75fca999ef22.webp' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/41ad086415224b871f048c3d29d3a463.webp' },
      { cond: 1, url: 'https://user-uploads.perchance.org/file/68ffa2034a6c7bdee44d3dfff22c4ec6.webp' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/efac00885dd75df6428dde1bac2ea4e6.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/752a1ab08259f2a8352ec1890b850214.webp' }
    ]},
    { name: 'Hornpattern', filter: 'secondary', options: [
      { cond: 0, url: null },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/baea1cf2116be44cd65f584bea59b5f1.webp' }
    ]},
    { name: 'Horn', filter: 'tertiary', options: [
      { cond: 1, url: 'https://user-uploads.perchance.org/file/0ad14c6110e9240f43226e4ae4697300.png' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/b657240796f4de54b535fc9872feb017.png' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/887a324a41924d1add25d9c47b9331d6.png' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/d2b34d1dfe9886396e47b3c796382246.webp' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/f653d6d88335544d4b9741e819182943.webp' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/6827815a4d8afc8ce9fcd4e693be8b3c.png' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/33a25b08d30c3dda967fb306e1cd65c9.png' },
      { cond: 8, url: null }
    ]},
    { name: 'Spineshadow', filter: null, options: [
      { cond: 0, url: null },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/44b1f636a6a7367f822ca59f2f2a9c75.webp' }
    ]},
    { name: 'Spine', filter: 'tertiary', options: [
      { cond: 1, url: 'https://user-uploads.perchance.org/file/60246f18f780c7ba19bc02887855e2be.png' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/0a9b13ccfa65c3d3a6f94c1832d3eb3e.webp' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/cc77a0086f3f92c5c4bd9902e80c453e.png' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/d1a36d5054b3d1e16bd19bcf7c36b8bd.webp' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/cf239423075b3b567c490882d11578ef.png' }
    ]},
    { name: 'Shadow', filter: null, url: 'https://user-uploads.perchance.org/file/fd281ae0ef199c8ea67131833b7b5300.webp' },
    { name: 'Pattern2', filter: 'tertiary', options: [
      { cond: 1, url: 'https://user-uploads.perchance.org/file/5008bb3765075ec19b5da7ef6af97456.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/d1c2b32885826f2c7ec9c64fbe4b402c.png' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/5addd1f971504c51b29e55a501bca51e.webp' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/0a029a20da92b7f2e4253a2b5abd6b9a.webp' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/c7de386d40a99fef7da0e84ad3dd8b51.webp' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/63fa619a66b5526c114d9096ae51cabf.webp' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/d0e82fbaf0d7c60923cdb89f8235b0b9.webp' }
    ]},
    { name: 'Pattern', filter: 'secondary', options: [
      { cond: 1, url: 'https://user-uploads.perchance.org/file/80106881f09de288a02257785d94d4fa.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/417e5cc8932d8e3dad3e638151c551c9.webp' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/9c9f54d4a85dac0035b7316b7e405718.webp' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/2a3c1be04fd7b43ae337e7d01839a00f.png' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/404dfe6f3cd3e822c3031b2faa898cfc.webp' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/a91f4b6524facd1ac5a38a288c0a45ee.webp' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/9f0873b348169165fe440a026ff6f7e4.webp' }
    ]},
    { name: 'Body', filter: 'main', url: 'https://user-uploads.perchance.org/file/80b968086f24270976cc286698350fc4.webp' },
    { name: 'Tail Tertiary', filter: 'tertiary', options: [
      { cond: 8, url: null },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/2b135262bfa2180b66d59739c530ed7f.webp' },
      { cond: 1, url: 'https://user-uploads.perchance.org/file/93250131775addf8a8db2bd76a31e66d.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/eec67ae0c67fd5ef3017e0897eb2192b.webp' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/0cee5815d8a84b1632a4965bd3106178.webp' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/68bebf4cce181d64db3604030bfb4f06.webp' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/3f8340ac552ffeadf3ec30511b805b2e.webp' }
    ]},
    { name: 'Tail Secondary', filter: 'secondary', options: [
      { cond: 8, url: null },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/df5a7ff0c87ed2d7e65bc10f04c306d4.png' },
      { cond: 1, url: 'https://user-uploads.perchance.org/file/037abb4b4de0fbff4cfa4ff6be36b879.webp' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/637cab8551241b4b6f084a342ef12d81.webp' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/58333c94527cd8db07c2ad1759936923.webp' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/1fa484319a5febb1494e83c22694a974.webp' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/b7916d18c2273a552bda6e96d3116428.webp' }
    ]},
    { name: 'Tail', filter: 'main', options: [
      { cond: 1, url: 'https://user-uploads.perchance.org/file/8bd01190231400c137b9ba63a52ab877.png' },
      { cond: 2, url: 'https://user-uploads.perchance.org/file/4158419bfb9e028185fb5c0a2e344bdc.png' },
      { cond: 3, url: 'https://user-uploads.perchance.org/file/dd1132180d82371d4f585f1df41e55b0.png' },
      { cond: 4, url: 'https://user-uploads.perchance.org/file/ed8a442ab7ea4a707077ef3851fe3eca.png' },
      { cond: 5, url: 'https://user-uploads.perchance.org/file/ef626bd9475b7b35b6206f85f8c5da35.png' },
      { cond: 6, url: 'https://user-uploads.perchance.org/file/9ce5ce9a9cf8fc9d872c84b5990341a6.png' },
      { cond: 7, url: 'https://user-uploads.perchance.org/file/6ed0825db169a1f6bf98a3ab5da25525.png' }
    ]}
  ]
};
