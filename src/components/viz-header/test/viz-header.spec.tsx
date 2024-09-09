import { newSpecPage } from '@stencil/core/testing';
import { VizHeader } from '../viz-header';

describe('viz-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VizHeader],
      html: `<viz-header></viz-header>`,
    });
    expect(page.root).toEqualHtml(`
      <viz-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </viz-header>
    `);
  });
});
