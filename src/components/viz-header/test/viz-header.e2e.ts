import { newE2EPage } from '@stencil/core/testing';

describe('viz-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<viz-header></viz-header>');

    const element = await page.find('viz-header');
    expect(element).toHaveClass('hydrated');
  });
});
