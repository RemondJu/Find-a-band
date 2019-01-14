export const fetchHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED': return action.hasErrored;
    default: return state;
  }
};

export const fetchIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_IS_LOADING': return action.isLoading;
    default: return state;
  }
};

export const fetchBandsSuccess = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BANDS_SUCCESS': return action.bands;
    default: return state;
  }
};

export const fetchBandSuccess = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BAND_SUCCESS': return action.band;
    default: return state;
  }
};

export const fetchUsersSuccess = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS': return action.users;
    default: return state;
  }
};
