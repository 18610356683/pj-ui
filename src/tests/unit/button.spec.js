import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

// 描述测试button组件
describe('button.vue', () => {
    // it后面是测试用例
    it('1. 测试slot是否能正常显示', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'pj-ui'
            }
        })
        expect(wrapper.text()).to.equal('pj-ui')
    })
    it('2. 测试传入icon熟悉', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'pj-icon': Icon
            },
            propsData: {
                icon: 'icon-anquanrenzheng'
            }
        })
        expect(wrapper.find('use').attributes('href')).to.equal('#icon-anquanrenzheng')
    })
})