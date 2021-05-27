import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { fetchCharactersFulfilled, FETCH_CHARACTERS } from './actions';

const ENDPOINT = 'http://star-wars-characters.glitch.me/api/search/'
const fetchCharatersEpic = (action$, state) => {
  return action$.pipe(
    ofType(FETCH_CHARACTERS),
    mergeMap(action =>
      ajax
        .getJSON(ENDPOINT + action.payload.searchTerm)
        .pipe(map(response => fetchCharactersFulfilled(response.results)))
    )
  )
}

export default fetchCharatersEpic;
