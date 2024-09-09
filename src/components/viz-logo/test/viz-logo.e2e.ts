import { newE2EPage } from '@stencil/core/testing';

describe('viz-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<viz-logo></viz-logo>');

    const element = await page.find('viz-logo');
    expect(element).toHaveClass('hydrated');
  });
});
