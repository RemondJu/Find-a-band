export function itemsHasErrored(bool) {
  return {
    type: 'ITEM_HAS_ERRORED',
    hasErrored: bool,
  };
}
export function itemsIsLoading(bool) {
  return {
    type: 'ITEM_IS_LOADING',
    isLoading: bool,
  };
}
export function fetchBandsSuccess(bands) {
  return {
    type: 'FETCH_BANDS_SUCCESS',
    bands,
  };
}

export function fetchBands(url) {
  return (dispatch) => {
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
}

export function fetchUsersSuccess(users) {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users,
  };
}

export function fetchUsers(url) {
  return (dispatch) => {
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
}

export function fetchBandSuccess(band) {
  return {
    type: 'FETCH_BAND_SUCCESS',
    band,
  };
}

export function fetchBand(url) {
  return (dispatch) => {
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
}
