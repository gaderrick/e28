import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowProduct from '@/components/ShowProduct.vue'

describe('ShowProduct.vue', () => {
  it('shows a product', () => {
    let product = {
      id: 1,
      name: "Driscoll’s Strawberries",
      description:
        "Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.",
      price: 4.99,
      available: 0,
      weight: 1,
      perishable: true,
      categories: ["produce", "fruits"]
    }
    const wrapper = shallowMount(ShowProduct, {
      propsData: { product },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).to.include(product.name);

    let foundProductLink = wrapper.find('[data-test="product-link"]').exists();
    expect(foundProductLink).to.equal(true);
  })
})
