import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowProduct from '@/components/ShowProduct.vue'

describe('ShowProduct.vue', () => {
  it('show a joke', () => {
    let product = {
      "id": 1,
      "name": "Joke about dreams",
      "description": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
      "categories": [
        "funny"
      ]
    }
    const wrapper = shallowMount(ShowProduct, {
      propsData: { product },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(product.name)
    let foundProdcutLink = wrapper.find('[data-test="product-link"]').exists();
    expect(foundProdcutLink).to.equal(true);
  })
})
