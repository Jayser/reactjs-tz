import * as types from './actionTypes';

const initialState = {
    activePage: 1,
    data: [
        { id: 0, firstName: 'Richard', lastName: 'Hammond', email: 'Richard.Hammond@gmail.com', status: 1 },
        { id: 1, firstName: 'Abel', lastName: 'May', email: 'Abel.May@gmail.com', status: 0 },
        { id: 2, firstName: 'Bertram', lastName: 'May', email: 'Bertram.May@gmail.com', status: 0 },
        { id: 3, firstName: 'Brian', lastName: 'May', email: 'Brian.May@gmail.com', status: 0 },
        { id: 4, firstName: 'Cecil', lastName: 'May', email: 'Cecil.May@gmail.com', status: 0 },
        { id: 5, firstName: 'Dexter', lastName: 'Hammond', email: 'Dexter.Hammond@gmail.com', status: 1 },
        { id: 6, firstName: 'Duke', lastName: 'May', email: 'Duke.May@gmail.com', status: 0 },
        { id: 7, firstName: 'Eugene', lastName: 'May', email: 'Eugene.May@gmail.com', status: 0 },
        { id: 8, firstName: 'Howard', lastName: 'May', email: 'Howard.May@gmail.com', status: 0 },
        { id: 9, firstName: 'Kyle', lastName: 'May', email: 'Kyle.May@gmail.com', status: 0 },
        { id: 10, firstName: 'Lucian', lastName: 'Hammond', email: 'Lucian.Hammond@gmail.com', status: 1 },
        { id: 11, firstName: 'Norris', lastName: 'May', email: 'Norris.May@gmail.com', status: 0 },
        { id: 12, firstName: 'Roman', lastName: 'May', email: 'Roman.May@gmail.com', status: 0 },
        { id: 13, firstName: 'Theodore', lastName: 'May', email: 'Theodore.May@gmail.com', status: 0 },
        { id: 14, firstName: 'Warren', lastName: 'May', email: 'Warren.May@gmail.com', status: 0 },
        { id: 15, firstName: 'Wilson', lastName: 'Hammond', email: 'Wilson.Hammond@gmail.com', status: 1 },
        { id: 16, firstName: 'Xavier', lastName: 'May', email: 'Xavier.May@gmail.com', status: 0 },
        { id: 17, firstName: 'Zachary', lastName: 'May', email: 'Zachary.May@gmail.com', status: 0 },
        { id: 18, firstName: 'Immanuel', lastName: 'May', email: 'Immanuel.May@gmail.com', status: 0 },
        { id: 19, firstName: 'Jeremy', lastName: 'May', email: 'Jeremy.May@gmail.com', status: 0 }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CLEAR_SEARCH_FILTER:
            return {
                ...state,
                data: state.data.map(user => {
                    user.visibility = true;
                    return user;
                })
            };

        case types.DELETE_USER:
            return { ...state, data: state.data.filter(user => user.id !== action.id) };

        case types.USER_PAGE:
            return { ...state, activePage: action.page };

        case types.SEARCH_USER:
            return {
                ...state,
                data: state.data.map(user => {
                    const isStatus = action.field === 'status';
                    const query = action.query.toLowerCase();
                    let isShow;

                    if (isStatus) {
                        isShow = user.status && 'active'.includes(query) || user.status === 0 && 'inactive'.includes(query)
                    } else {
                        isShow = user[action.field].toLowerCase().includes(query)
                    }

                    user.visibility = isShow;

                    return user;
                })
            };

        case types.SORT_USER:
            if (state.sort !== action.field) {
                return {
                    ...state,
                    sort: action.field,
                    data: state.data.sort((a, b) => a[action.field] < b[action.field] ? -1 : 1)
                };
            }

        default:
            return state
    }
}
