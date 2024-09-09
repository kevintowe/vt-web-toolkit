/**
 * As of first writing this, I do not think we should expose store functions directly to the library user.
 * Instead wrap store functionality in util methods
 */

import { createStore } from '@stencil/store';
import { Alliance } from './types';

const { state, onChange } = createStore({
  alliance: Alliance.Vizient,
});

// Update alliance on store change
onChange('alliance', value => {
  document.documentElement.className = `${value}-theme`;
  console.log(value);
  localStorage.setItem('vizient-toolkit-alliance', value); // not sure if this should go in the utils command or not.
});

export default state;
