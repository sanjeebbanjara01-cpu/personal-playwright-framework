import { test, expect } from '../../src/fixtures/test.fixture';

test.describe('Products happy paths', () => {
  test('searches for a product and adds it to the cart', async ({ productsPage }) => {
    await productsPage.openProducts();
    await productsPage.searchFor('Automation Keyboard');

    await expect(productsPage.resultCount).toHaveText('1 product');
    await expect(productsPage.productCards).toHaveCount(1);
    await expect(productsPage.productCard('Automation Keyboard')).toBeVisible();

    await productsPage.addProductToCart('Automation Keyboard');

    await expect(productsPage.cartCount).toHaveText('1');
    await expect(productsPage.successToast).toHaveText('Automation Keyboard added to cart.');

    await productsPage.openCart();

    await expect(productsPage.cartDialog).toBeVisible();
    await expect(productsPage.cartItems).toHaveCount(1);
    await expect(productsPage.cartItem('Automation Keyboard')).toContainText('Automation Keyboard × 1');
    await expect(productsPage.cartTotal).toHaveText('$89.00');
  });
});
