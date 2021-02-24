const monsters = [{

    id:1,
    name: 'Hell Hound', // Nome
    type: 'Aberração', // Tipo - Aberration/Aberração, Beast/Besta, Celestial/Celestial, Construct/Construto, Dragon/Dragão, Elemental/Elemental, Fey/Fada, Fiend/Demônio, Giant/Gigante, Humanoid/Humanoide, Monstrosity, Ooze/Gosma, Plant/Planta e Undead/Morto Vivo
    size: 'Grande', // Tamanho - Tiny/Miúdas, Small/Pequenas, Medium/Médias, Large/Grandes, Huge/Enormes, Gargantuan/Imenso
    cr:5, // Challenge Rating - ND Nível de Desafio
    aligment: 'Caótico Mal', // Alinhamento - Lawfull/Ordeiro, Neutral/Neutro, Chaotic/Caótico, Good/Bom, Evil/Mal - LG, NG, CG / LN, N, CN / LE, NE, CE
    imgSrc: 'https://i.pinimg.com/564x/76/20/91/762091de33f95c5da79d91bc2d6167f4.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
      abilities: { STR: 9, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:2, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: { ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{

    id:2,
    name: 'Death Knight',
    type: 'Undead',
    size: 'Medium',
    cr:10,
    aligment: 'Chaotic Evil',
    imgSrc: 'https://i.pinimg.com/564x/71/3b/29/713b2926ccb2fe9b5550af9f99d57ac0.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }

  },{
    
    id:3,
    name: 'Karasu',
    type: 'Humanoid',
    size: 'Medium',
    cr:2,
    aligment: 'Neutral Good',
    imgSrc: 'https://i.pinimg.com/564x/09/cb/f8/09cbf8215a8c1eb03d728533003a99d8.jpg',
    desc: 'Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:4,
    name: 'Karasu Rogue',
    type: 'Humanoid',
    size: 'Medium',
    cr:2,
    aligment: 'Chaotic Good',
    imgSrc: 'https://i.pinimg.com/564x/65/15/3e/65153ef71f3c7aab80dfb113b5252fb1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:5,
    name: 'Tarrasque',
    type: 'Beast',
    size: 'Gigant',
    cr:13,
    aligment: 'Chaotic Evils',
    imgSrc: 'https://i.pinimg.com/564x/db/9a/96/db9a969f1997a995f041f8b2eeeb7429.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:6,
    name: 'Mask Man',
    type: 'Humanoid',
    size: 'Medium',
    cr:2,
    aligment: 'Neutral Good',
    imgSrc: 'https://i.pinimg.com/564x/32/06/ea/3206ea9bbbf09174ec30f4e467811c25.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:7,
    name: 'Red Dragon',
    type: 'Beast',
    size: 'Large',
    cr:15,
    aligment: 'Neutral Evil',
    imgSrc: 'https://i.pinimg.com/564x/28/ea/9c/28ea9c35d44d87493251293945f2d696.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:8,
    name: 'Green Dragon',
    type: 'Beast',
    size: 'Large',
    cr:2,
    aligment: 'Neutral Good',
    imgSrc: 'https://i.pinimg.com/564x/8c/26/a9/8c26a9dc8e8b167c018340b9e27b223e.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:9,
    name: 'Hetcht Assirium',
    type: 'Celestial',
    size: 'Large',
    cr:99,
    aligment: 'Neutral Evil',
    imgSrc: 'https://i.pinimg.com/564x/b7/73/04/b77304b1a27ede272d922d0dc99da7f2.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:10,
    name: 'Fenrir',
    type: 'Beast',
    size: 'Large',
    cr:2,
    aligment: 'Neutral Evil',
    imgSrc: 'https://i.pinimg.com/564x/b7/99/40/b7994038cab8873732af869026ac2c23.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:11,
    name: 'Lich Warrior',
    type: 'Undead',
    size: 'Medium',
    cr:2,
    aligment: 'Neutral Evil',
    imgSrc: 'https://i.pinimg.com/564x/37/e3/e6/37e3e67f1e0c114cb7031c23504edce8.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:12,
    name: 'Lich Mage',
    type: 'Undead',
    size: 'Medium',
    cr:2,
    aligment: 'Neutral Evil',
    imgSrc: 'https://i.pinimg.com/564x/3d/f9/6a/3df96a5e5d93057897c61dedc87c5bab.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  },{
    
    id:13,
    name: 'Lich King',
    type: 'Undead',
    size: 'Medium',
    cr:2,
    aligment: 'Neutral Evil',
    imgSrc: 'https://i.pinimg.com/564x/a9/b9/6c/a9b96c643aae4ad0dca2e9d20f861149.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui risus, interdum at condimentum nec, dignissim vel leo. Aliquam blandit tellus a justo aliquam fringilla. Praesent dictum leo sed felis accumsan dignissim. Nam eget porta augue, eget venenatis metus. Maecenas at imperdiet nibh. Ut tristique vitae justo quis semper. Donec iaculis quam in quam dignissim, at sagittis ante interdum. Sed vitae nulla non mi sodales porta et quis enim. Mauris in nisi turpis. Sed id malesuada felis. Suspendisse pharetra tortor sit amet justo dictum, a congue ligula lobortis. Fusce commodo sollicitudin neque non placerat. Duis id ipsum mi. Quisque lobortis leo quis finibus hendrerit. Donec aliquet libero id purus mattis lacinia. Ut nec leo ex.',
    systems: {
      d20: true, 
      gurps: true
    },
    D20:{
            abilities: { STR: 11, DEX: 12, CON: 13, INT: 14, WIS: 15, CHA: 16 }, // Atributo Básicos D20
      actions: {
        normalActions: [ // Lista de ataques
          {actionId:1, actionName: 'Golpe uno', actionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {actionId:1, actionName: 'Golpe duo', actionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ],
        legendaryActions: [
          {legActionId:1, legActionName: 'Golpe uno', legActionDesc:'Lorem ipsum dolor sit amet avec moa'},
          {legActionId:2, legActionName: 'Golpe duo', legActionDesc:'Vivamus dui risus, interdum at condimentum nec'}
        ]
      },
      languages:['Orc', 'Valar'], // Idiomas
      skills:{'Iniciativa': '+3', 'Escalar': '+2'}, // Perícias
      monsterLevel: 7, // Nivel do Monstro
      senses: '+3',
      armorClass: 13,
      hp: 22, // Pontos de Vida
      mp: 12, // Pontos de Magia
      speed: '12m (8q), escalar 12m (8q)', // Deslocamento
      xp: 250 // Experiência
    },
    GURPS: {
      atributes: {ST: 10, DX: 12, IQ: 9, HT:10 }, // Atributos Básicos
      hp: 12, // Pontos de Vida
      will: 12, // Força de Vontade
      perception: 10, // Percepção
      fp: 12, // Pontos de Fadiga
      speed: 6, // Velocidade Básica
      move: 5.5, // Deslocamento Básico
      dodge: 5, // Esquiva
      parry: 0, // Aparar
      sm: 2, // Modificador de tamanho
      dr: 40, // Resistencia a Dano (RD)
      traits: {'Fanatismo': 10, 'Sanguinolência': 15}, // Vantagens, Desvantagens e peculiaridades
      skills: {'Sacar Rápido (Faca)': 16, }, // Pericias
      class: 'Mundano' // Classe
    }
  }
]


export default monsters;