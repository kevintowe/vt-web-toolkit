import { Component, getAssetPath, h } from '@stencil/core';
import state from '../../store';

@Component({
  tag: 'viz-logo',
  styleUrl: 'viz-logo.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class VizLogo {
  private get getAltText() {
    return `${state.alliance} logo`;
  }

  render() {
    const imageSrc = getAssetPath(`./assets/${state.alliance}_logo.svg`);
    return <img src={imageSrc} alt={this.getAltText} />;
  }
}
