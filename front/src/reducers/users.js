const initialState = [
  {
    id: 1,
    name: 'user1',
    age: 18,
    email: 'user1@user1.com',
  }, {
    id: 2,
    name: 'user2',
    age: 32,
    email: 'user2@user2.com',
  }, {
    id: 3,
    name: 'user3',
    age: 49,
    email: 'user3@user3.com',
  }, {
    id: 4,
    name: 'user4',
    age: 27,
    email: 'user4@user4.com',
  }, {
    id: 5,
    name: 'user5',
    age: 30,
    email: 'user5@user5.com',
  },
];

const users = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default users;
