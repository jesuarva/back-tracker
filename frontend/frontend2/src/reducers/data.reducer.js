import * as A from '../actions/actionTypes';

const initialState = [
  {
    _id: '5beff2a1a2c62816825ed5c9',
    name: 'test1',
    bags: 5,
    email: 'test@test1.com',
    __v: 0,
  },
  {
    _id: '5beff2aca2c62816825ed5cb',
    name: 'test2',
    bags: 5,
    email: 'test@test2.com',
    __v: 0,
  },
  {
    _id: '5beff2b3a2c62816825ed5cd',
    name: 'test3',
    bags: 5,
    email: 'test@test3.com',
    __v: 0,
  },
  {
    _id: '5beff2b6a2c62816825ed5cf',
    name: 'test4',
    bags: 5,
    email: 'test@test4.com',
    __v: 0,
  },
  {
    _id: '5beff2f5a2c62816825ed5d1',
    name: 'test5',
    bags: 5,
    email: 'test@test5.com',
    __v: 0,
  },
  {
    _id: '5beff2f9a2c62816825ed5d3',
    name: 'test6',
    bags: 5,
    email: 'test@test6.com',
    __v: 0,
  },
  {
    _id: '5beff2fda2c62816825ed5d5',
    name: 'test7',
    bags: 5,
    email: 'test@test7.com',
    __v: 0,
  },
  {
    _id: '5beff304a2c62816825ed5d7',
    name: 'test8',
    bags: 5,
    email: 'test@test8.com',
    __v: 0,
  },
  {
    _id: '5beff310a2c62816825ed5d9',
    name: 'test9',
    bags: 5,
    email: 'test@test9.com',
    __v: 0,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case A.ADD_DATA:
      return state.concat(action.data);
    default:
      return state;
  }
};
