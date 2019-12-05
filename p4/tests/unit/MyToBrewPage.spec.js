import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import MyToBrewPage from '@/components/pages/MyToBrewPage.vue'

describe('MyToBrewPage.vue', () => {
    let toBrew = [1, 3]

    let sharedState = {
        "recipes": [
            {
                "id": 1,
                "name": "Cream Ale"
            },
            {
                "id": 2,
                "name": "Left Hand Milk Stout"
            },
            {
                "id": 3,
                "name": "Better than Perfect Double IPA"
            },
            {
                "id": 4,
                "name": "Spiced Ale"
            }
        ]
    }

    it('shows if cream ale is in my brew list', () => {
        const wrapper = mount(MyToBrewPage, {
            computed: {
                toBrewList: function () {
                    return toBrew;
                },
                sharedState: function () {
                    return sharedState;
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.text()).to.include('Cream Ale');
    })

    it('shows if a double ipa is in my brew list', () => {
        const wrapper = mount(MyToBrewPage, {
            computed: {
                toBrewList: function () {
                    return toBrew;
                },
                sharedState: function () {
                    return sharedState;
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })
        expect(wrapper.text()).to.include('Double IPA');
    })
})