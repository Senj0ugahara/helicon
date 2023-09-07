import { createStore } from 'vuex'

export default createStore({
  state: {
    orderPrice: 11000,
    liters: {
      show: false,
      selected: '34 литра с ТЭНом',
      items: [
        {
          name: '34 литра с ТЭНом',
          price: 11000,
        },
        {
          name: 'Another liters item',
          price: 11000
        }
      ]
    },
    dops: [
      {
        name: 'Набор для копчения',
        oldPrice: 7990,
        newPrice: 7990,
        img: require('../assets/images/dop_1-mini.webp'),
        postfix: 'kopch',
        selected: false
      },
      {
        name: 'Жестяные банки (10 шт.)',
        oldPrice: 7990,
        newPrice: 7990,
        img: require('../assets/images/dop_2-mini.webp'),
        postfix: 'banki',
        selected: false
      },
      {
        name: 'Защитные зажимы',
        oldPrice: 7990,
        newPrice: 7990,
        img: require('../assets/images/dop_3-mini.webp'),
        postfix: 'zajim',
        selected: false
      },
      {
        name: 'Насадка для самогоноварения',
        oldPrice: 7990,
        newPrice: 7990,
        img: require('../assets/images/dop_4-mini.webp'),
        postfix: 'nasad',
        selected: false
      },
    ],
    kredit: false,
    dialogVisible: false
  },
  getters: {
  },
  mutations: {
    selectedCheckbox(state, index) {
      state.dops[index].selected = !state.dops[index].selected;
    },
    totalPrice(state, index) {
      if (state.dops[index].selected) {
        state.orderPrice += state.dops[index].newPrice;
      } else {
        state.orderPrice -= state.dops[index].newPrice;
      }
    },
    buyByKredit(state) {
      state.kredit = !state.kredit;
    },
    selectedLiters(state, index) {
      state.liters.selected = state.liters.items[index].name;
      state.liters.show = !state.liters.show;
    }
  },
  actions: {
    selectedCheckbox({ commit }, index) {
      commit('selectedCheckbox', index);
    },
    totalPrice({ commit }, index) {
      commit('totalPrice', index);
    },
    buyByKredit({ commit }, index) {
      commit('buyByKredit', index)
    },
    selectedLiters({ commit }, index) {
      commit('selectedLiters', index);
    }
  },
  modules: {
  }
})
