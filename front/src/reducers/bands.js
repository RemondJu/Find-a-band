const initialState = [
  {
    id: 1,
    name: 'band1',
    members: 3,
    maxMembers: 5,
    email: 'band1@band1.com',
  }, {
    id: 2,
    name: 'band2',
    members: 3,
    maxMembers: 5,
    email: 'band2@band2.com',
  }, {
    id: 3,
    name: 'band3',
    members: 3,
    maxMembers: 5,
    email: 'band3@band3.com',
  }, {
    id: 4,
    name: 'band4',
    members: 3,
    maxMembers: 5,
    email: 'band4@band4.com',
  }, {
    id: 5,
    name: 'band5',
    members: 3,
    maxMembers: 5,
    email: 'band5@band5.com',
  },
];

const bands = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default bands;
