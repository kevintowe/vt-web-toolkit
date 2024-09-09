import { Component, h, Prop } from '@stencil/core';
import { setAlliance } from '../../utils';
import { Alliance } from '../../types';

@Component({
  tag: 'viz-header',
  styleUrl: 'viz-header.css',
  shadow: true,
})
export class VizHeader {
  @Prop() primaryText: string;

  render() {
    return (
      <div>
        <button onClick={() => setAlliance(Alliance.Excelerate)}>Switch to Excelerate Theme</button>
        <h1>Hello world</h1>
      </div>
    );
  }
}
