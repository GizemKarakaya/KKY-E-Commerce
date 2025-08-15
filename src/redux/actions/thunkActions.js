import { setRoles } from './clientActions';
import { setFetchState } from './productActions';
import api from '../../services/api';

// Thunk Action Creator to get roles
export const fetchRoles = () => {
  return async (dispatch, getState) => {
    // Check if roles are already loaded
    const { client } = getState();
    if (client.roles.length > 0) {
      return; // Roles already loaded, no need to fetch again
    }

    try {
      dispatch(setFetchState('FETCHING'));
      
      const response = await api.get('/roles');
      
      dispatch(setRoles(response.data));
      dispatch(setFetchState('FETCHED'));
      
    } catch (error) {
      console.error('Error fetching roles:', error);
      dispatch(setFetchState('FAILED'));
    }
  };
};
