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

export const fetchDataSuccess = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS': return action.items;
    default: return state;
  }
};
