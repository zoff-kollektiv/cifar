import * as d3 from 'd3';

const persons = [
  {
    id: 1,
    name: 'Hosni Mubarak',
    role: 'President',
    image: 'https://trello-attachments.s3.amazonaws.com/5bc0b20255411e16156e4aa5/5bc9d76063f97a3fe8733a54/8f82123344a63ca65a698acd5559380f/mubarak-frei-sw2-dklblau.png',
    root: true,
    network: [
      {id: 2, name: 'Gamal Mubarak', role: 'Son', connection: 'family'},
      {id: 3, name: 'Alaa Mubarak', role: 'Son', connection: 'family'},
      {id: 4, name: 'Suzanne Mubarak', role: 'Spouse', connection: 'corporate'},
      {id: 5, name: 'Gamal Mubarak', role: 'Son', connection: 'corporate'},
      {id: 6, name: 'Alaa Mubarak', role: 'Son', connection: 'government'},
      {id: 7, name: 'Suzanne Mubarak', role: 'Spouse', connection: 'government'},
      {id: 8, name: 'Gamal Mubarak', role: 'Son', connection: 'family'},
      {id: 9, name: 'Alaa Mubarak', role: 'Son', connection: 'corporate'},
      {id: 10, name: 'Suzanne Mubarak', role: 'Spouse', connection: 'government'},
      {id: 11, name: 'Gamal Mubarak', role: 'Son', connection: 'family'},
      {id: 12, name: 'Alaa Mubarak', role: 'Son', connection: 'family'},
      {
        id: 13,
        name: 'Suzanne Mubarak',
        role: 'Spouse 2',
        connection: 'family',
        network: [
          {id: 14, name: 'sfsdf Mubarak', role: 'Spouse', connection: 'government'},
          {id: 15, name: 'Gamal Mubarak', role: 'Son', connection: 'family'},
        ]
      },
    ]
  }
];

const getNodes = person => {
  const nodes = [];
  const links = [];

  const storePerson = p => {
    const { network, ...rest } = p;
    nodes.push({...rest});
  };

  const gimmePeople = p => {
    storePerson(p);

    if (p.network) {
      p.network.forEach(_ => {
        gimmePeople(_);
        links.push({
          target: _.id,
          source: p.id
        });
      });
    }
  }

  gimmePeople(person);

  return { nodes, links };
};

const { nodes, links } = getNodes(persons[0]);

var nodeById = d3.map();

nodes.forEach(_ => nodeById.set(_.id, _));
links.forEach(_ => {
  _.source = nodeById.get(_.source);
  _.target = nodeById.get(_.target);
});

export { nodes, links };
