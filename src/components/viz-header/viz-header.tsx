import { Component, ComponentWillLoad, getAssetPath, h, Prop, State } from '@stencil/core';
import { getUserConfig } from '../../utils';
import state from '../../store';

@Component({
  tag: 'viz-header',
  styleUrl: 'viz-header.css',
  shadow: true,
})
export class VizHeader implements ComponentWillLoad {
  @Prop() primaryText: string;
  @State() menuOpen: boolean = false;

  componentWillLoad(): Promise<void> | void {
    getUserConfig();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  private get getLogoAltText() {
    return `${state.alliance} logo`;
  }

  render() {
    const logoSrc = getAssetPath(`./assets/${state.alliance}_logo.svg`);

    return (
      <header>
        <div class="logo">
          <img src={logoSrc} alt={this.getLogoAltText} />
        </div>

        <h1 class="title">{this.primaryText}</h1>
      </header>
    );
  }
}
