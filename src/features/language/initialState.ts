import { InitialState, Language } from './languageLibraryType';
import languageLibrary from './languageLibrary';

const initialState: InitialState = {
  language: Language.pl,
  library: languageLibrary.pl,
};
export default initialState;
