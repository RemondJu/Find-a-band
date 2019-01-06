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
export function fetchDataSuccess(items) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    items,
  };
}

export function fetchData(url) {
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
      .then(items => dispatch(fetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
