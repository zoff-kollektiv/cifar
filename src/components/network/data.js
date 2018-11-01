const nodes = [
  {name: 'Hosni Mubarak', role: 'President', root: true},
  {name: 'Gamal Mubarak', role: 'Son', connection: 'family'},
  {name: 'Alaa Mubarak', role: 'Son', connection: 'family'},
  {name: 'Suzanne Mubarak', role: 'Spouse', connection: 'corporate'},
  {name: 'Gamal Mubarak', role: 'Son', connection: 'corporate'},
  {name: 'Alaa Mubarak', role: 'Son', connection: 'corporate'},
  {name: 'Suzanne Mubarak', role: 'Spouse', connection: 'corporate'},
  {name: 'Gamal Mubarak', role: 'Son', connection: 'family'},
  {name: 'Alaa Mubarak', role: 'Son', connection: 'corporate'},
  {name: 'Suzanne Mubarak', role: 'Spouse', connection: 'family'},
  {name: 'Gamal Mubarak', role: 'Son', connection: 'family'},
  {name: 'Alaa Mubarak', role: 'Son', connection: 'family'},
  {name: 'Suzanne Mubarak', role: 'Spouse', connection: 'family'},
  {name: 'Omar Alaa Mubarak', role: 'Grandson', connection: 'family'},
  {name: 'Mahmoud Gamal Mubarak', role: 'Grandson', connection: 'family'}
];

const links = [
  {source: 1, target: 0},
  {source: 2, target: 0},
  {source: 3, target: 0},
  {source: 4, target: 0},
  {source: 5, target: 0},
  {source: 6, target: 0},
  {source: 7, target: 0},
  {source: 8, target: 0},
  {source: 9, target: 0},
  {source: 10, target: 0},
  {source: 11, target: 0},
  {source: 12, target: 0},
  {source: 13, target: 0},
  {source: 14, target: 13},
];

export { nodes, links };
