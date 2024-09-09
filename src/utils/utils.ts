import state from '../store';
import { Alliance } from '../types';

/**
 * Set the alliance theme.
 *
 * @param alliance
 */
export const setAlliance = (alliance: Alliance) => {
  state.alliance = alliance;
};

export const getUserConfig = () => {
  const alliance = localStorage.getItem('vizient-toolkit-alliance');
  if (alliance !== null) {
    setAlliance(alliance as Alliance);
  }
};
