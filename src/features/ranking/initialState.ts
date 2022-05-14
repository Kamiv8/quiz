import { DataBestPlayersType } from './dataBestPlayersType';

interface InitialStateType {
  players: DataBestPlayersType[]
}

const initialState: InitialStateType = {
  players: [],
};

export default initialState;
