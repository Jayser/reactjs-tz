import { ACTION_DELETE_EMPLOYEE } from '../employees';

const initialState = [
    { firstName: 'Richard', lastName: 'Hammond', email: 'Richard.Hammond@gmail.com', status: 1 },
    { firstName: 'James', lastName: 'May', email: 'James.May@gmail.com', status: 0 }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_DELETE_EMPLOYEE:
            return state.filter((todo, idx) => idx !== action.idx);
        default:
            return state;
    }
}