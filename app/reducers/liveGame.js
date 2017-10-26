import axios from 'axios';

/* -----------------    ACTIONS    -------------------- */

const GET_LIVE_GAMES = 'GET_LIVE_GAMES';

/* -------------    ACTION CREATORS    ---------------- */

const getRecent = liveGames => ({ type: GET_LIVE_GAMES, liveGames });

/* -------------    THUNK CREATORS     ---------------- */

export const fetchLiveGame = id => (dispatch) => {
  axios.get(`api/playerInfo/liveGame/${id}`)
    .then(game => game.data)
    .then(game => dispatch(getRecent(game)));
};

/* -----------------    REDUCER    -------------------- */

export default function gamesReducer(
  liveGame = {
    bannedChampions: [],
    gameId: 0,
    gameLength: 0,
    gameMode: '',
    gameQueueConfigId: 0,
    gameType: '',
    mapId: 0,
    observers: {},
    participants: [],
  },
  action,
) {
  switch (action.type) {
    case GET_LIVE_GAMES:
      return action.liveGames;
    default:
      return liveGame;
  }
}
