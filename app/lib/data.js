module.exports = {
    players : [
        {
            name: 'Valentine',
            derbyname: 'Ta Mère',
            id: 3615,
            rotation: 1,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        { 
            name: 'Capu',
            derbyname: 'Cass\'',
            id: 56,
            rotation: 2,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        { 
            name: 'Claire',
            derbyname: 'Fuckeuse',
            id: 4950,
            rotation: 2,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        { 
            name: 'Beth',
            derbyname: 'Bex',
            id: '01',
            rotation: 3,
            leads: 0,
            penalties: 0,
            jammer: true
        },
        { 
          name: 'Anaïs',
          derbyname: 'Bobo',
          id: 141,
          rotation: 1,
          penalties: 0,
          pivot: true
        },
        { 
          name: '',
          derbyname: 'Bully',
          id: 54,
          rotation: 1,
          penalties: 0,
          pivot: true
        },
        { 
          name: '',
          derbyname: 'Lilith',
          id: '090',
          rotation: 2,
          penalties: 0,
          pivot: true
        },
        {
          name: 'Sarah',
          derbyname: 'Tracky',
          id: 21,
          rotation: 2,
          penalties: 0
        },
        {
          name: 'Rose',
          derbyname: 'Roz',
          id: 22,
          rotation: 3,
          penalties: 0
        },
        {
          name: 'Clém\'',
          derbyname: 'Avo',
          id: 31,
          rotation: 2,
          penalties: 0
        },
        {
          name: 'Anaïs',
          derbyname: 'Major',
          id: 502,
          rotation: 2,
          penalties: 0
        },
        {
          name: 'Orel',
          derbyname: 'Sally',
          id: 72,
          rotation: 1,
          penalties: 0
        },
        {
          name: 'aka Guigui',
          derbyname: 'Guinness',
          id: 911,
          rotation: 2,
          penalties: 0
        },
        {
          name: '',
          derbyname: 'Chuck',
          id: 99,
          rotation: 1,
          penalties: 0
        },
        {
          name: '',
          derbyname: 'Neen',
          id: '04',
          rotation: 3,
          penalties: 0
        }
    ],
    lines: [
      {
        id: 'Sasha',
        tripod: {
          tete: [72,'090'],
          inte: [502,72],
          exte: ['090']
        },
        offense: [54]
      },
      {
        id: 'Trixie',
        tripod: {
          tete: [99,21,911],
          inte: [21],
          exte: [99,911]
        },
        offense: [141]
      },
      {
        id: 'Gottmik',
        tripod: {
          tete: [72],
          inte: [99, 911],
          exte: [141]
        },
        offense: [54]
      },
    ],
    backups: {
      inte: [04,31],
      exte: [22]
    },
    game: {
      jams: [],
      stats: {}
    }
}