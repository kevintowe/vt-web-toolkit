import { newSpecPage } from '@stencil/core/testing';
import { VizLogo } from '../viz-logo';

describe('viz-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VizLogo],
      html: `<viz-logo></viz-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <viz-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </viz-logo>
    `);
  });
});
