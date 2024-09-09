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
