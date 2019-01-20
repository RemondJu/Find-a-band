export const itemsHasErrored = bool => ({
  type: 'ITEM_HAS_ERRORED',
  hasErrored: bool,
});

export const itemsIsLoading = bool => ({
  type: 'ITEM_IS_LOADING',
  isLoading: bool,
});

export const fetchBandsSuccess = bands => ({
  type: 'FETCH_BANDS_SUCCESS',
  bands,
});

export const fetchBands = url => (dispatch) => {
  dispatch(itemsIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(fetchBandsSuccess(items)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const fetchUsersSuccess = users => ({
  type: 'FETCH_USERS_SUCCESS',
  users,
});

export const fetchUsers = url => (dispatch) => {
  dispatch(itemsIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(fetchUsersSuccess(items)))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const fetchBandSuccess = band => ({
  type: 'FETCH_BAND_SUCCESS',
  band,
});

export const fetchBand = url => (dispatch) => {
  dispatch(itemsIsLoading(true));
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));
      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(fetchBandSuccess(items[0])))
    .catch(() => dispatch(itemsHasErrored(true)));
};

export const fetchSearchFilterSuccess = items => ({
  type: 'FETCH_SEARCH_FILTER_SUCCESS',
  items,
});

export const fetchSearchFilter = (searchFilter, url) => (dispatch) => {
  dispatch(itemsIsLoading(true));
  fetch(url)
    .then(res => res.json())
    .then(items => dispatch(fetchSearchFilterSuccess(items)))
    .then(() => dispatch(itemsIsLoading(false)))
    .catch(() => dispatch(itemsHasErrored(true)));
};
