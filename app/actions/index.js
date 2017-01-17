import * as types from '../constants/ActionTypes'

export const deleteEmployee = idx => ({ type: types.DELETE_EMPLOYEE, idx });
export const searchEmployee = (field, query) => ({ type: types.SEARCH_EMPLOYEE, field, query });