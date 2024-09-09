import { Component, getAssetPath, h } from '@stencil/core';
import state from '../../store';
import { getUserConfig } from '../../utils';

@Component({
  tag: 'viz-logo',
  styleUrl: 'viz-logo.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class VizLogo {
  componentWillLoad(): Promise<void> | void {
    getUserConfig();
  }

  private get getLogoAltText() {
    return `${state.alliance} logo`;
  }

  render() {
    const imageSrc = getAssetPath(`./assets/${state.alliance}_logo.svg`);
    return <img src={imageSrc} alt={this.getLogoAltText} />;
  }
}
