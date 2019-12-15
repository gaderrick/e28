// /tests/unit/ProductsPage.js

import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ProductsPage from '@/components/pages/ProductsPage.vue'

describe('ProductsPage.vue', () => {

  let product = {
    "id": 1,
    "name": "Joke about dreams",
    "description": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
    "categories": [
      "funny"
    ]
  }

  it('shows all the products', () => {

    const wrapper = mount(ProductsPage, {
      // We can pass mount a `computed` option and within it we can overwrite
      // any of our componenent's computed properties.
      // This allows us to bypass the Vuex store for testing purposes
      // For alternative ways of dealing with Vuex when testing components, see the following:
      // https://vue-test-utils.vuejs.org/guides/#testing-vuex-in-components
      // https://lmiller1990.github.io/vue-testing-handbook/testing-vuex.html
      computed: {
        products: function () {
          return [product]
        }
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.text()).to.include('Jokes');
    expect(wrapper.text()).to.include('Joke about dreams');
  })
})
