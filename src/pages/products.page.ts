import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  readonly searchInput = this.page.getByRole('searchbox', { name: 'Search products' });
  readonly productsRegion = this.page.getByRole('region', { name: 'Products' });
  readonly productCards = this.productsRegion.getByRole('article');
  readonly resultCount = this.page.getByTestId('product-result-count');
  readonly cartButton = this.page.getByRole('button', { name: /^Cart/ });
  readonly cartCount = this.page.getByTestId('cart-count');
  readonly cartDialog = this.page.getByRole('dialog', { name: 'Your cart' });
  readonly cartItems = this.cartDialog.getByRole('listitem');
  readonly cartTotal = this.cartDialog.getByTestId('cart-total');
  readonly successToast = this.page.getByRole('status');

  constructor(page: Page) {
    super(page);
  }

  async openProducts(): Promise<void> {
    await this.open('products.html');
  }

  productCard(productName: string): Locator {
    return this.productCards.filter({
      has: this.page.getByRole('heading', { name: productName, exact: true })
    });
  }

  cartItem(productName: string): Locator {
    return this.cartItems.filter({ hasText: productName });
  }

  async searchFor(productName: string): Promise<void> {
    await this.searchInput.fill(productName);
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.productCard(productName).getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart(): Promise<void> {
    await this.cartButton.click();
  }
}
