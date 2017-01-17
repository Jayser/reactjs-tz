import { DELETE_EMPLOYEE, SEARCH_EMPLOYEE  } from '../constants/ActionTypes'

const initialState = [
    { firstName: 'Richard', lastName: 'Hammond', email: 'Richard.Hammond@gmail.com', status: 1 },
    { firstName: 'Abel', lastName: 'May', email: 'Abel.May@gmail.com', status: 0 },
    { firstName: 'Bertram', lastName: 'May', email: 'Bertram.May@gmail.com', status: 0 },
    { firstName: 'Brian', lastName: 'May', email: 'Brian.May@gmail.com', status: 0 },
    { firstName: 'Cecil', lastName: 'May', email: 'Cecil.May@gmail.com', status: 0 },

    { firstName: 'Dexter', lastName: 'Hammond', email: 'Dexter.Hammond@gmail.com', status: 1 },
    { firstName: 'Duke', lastName: 'May', email: 'Duke.May@gmail.com', status: 0 },
    { firstName: 'Eugene', lastName: 'May', email: 'Eugene.May@gmail.com', status: 0 },
    { firstName: 'Howard', lastName: 'May', email: 'Howard.May@gmail.com', status: 0 },
    { firstName: 'Kyle', lastName: 'May', email: 'Kyle.May@gmail.com', status: 0 },

    { firstName: 'Lucian', lastName: 'Hammond', email: 'Lucian.Hammond@gmail.com', status: 1 },
    { firstName: 'Norris', lastName: 'May', email: 'Norris.May@gmail.com', status: 0 },
    { firstName: 'Roman', lastName: 'May', email: 'Roman.May@gmail.com', status: 0 },
    { firstName: 'Theodore', lastName: 'May', email: 'Theodore.May@gmail.com', status: 0 },
    { firstName: 'Warren', lastName: 'May', email: 'Warren.May@gmail.com', status: 0 },

    { firstName: 'Wilson', lastName: 'Hammond', email: 'Wilson.Hammond@gmail.com', status: 1 },
    { firstName: 'Xavier', lastName: 'May', email: 'Xavier.May@gmail.com', status: 0 },
    { firstName: 'Zachary', lastName: 'May', email: 'Zachary.May@gmail.com', status: 0 },
    { firstName: 'Immanuel', lastName: 'May', email: 'Immanuel.May@gmail.com', status: 0 },
    { firstName: 'Jeremy', lastName: 'May', email: 'Jeremy.May@gmail.com', status: 0 }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_EMPLOYEE:
            return state.filter((todo, idx) => idx !== action.idx);

        case SEARCH_EMPLOYEE:
            return initialState.filter(todo => {
                const value = todo[action.field].toLowerCase();
                const query = action.query.toLowerCase().toLowerCase();

                return value.indexOf(query) !== -1;
            });

        default:
            return state
    }
}
