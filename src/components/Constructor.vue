<template>
  <section class="constructor">
    <div class="container">
      <h2 class="title constructor__title">
        Откройте <span class="blue">больше возможностей</span> «Крестьянки»
      </h2>
      <p class="subtitle constructor__subtitle">Вместе с полезными дополнениями</p>
      <div class="constructor-wrapper">
        <div class="constructor-dops">
          <ul class="constructor-list">
            <li
              class="constructor-item"
              v-for="(dop, index) in getDops"
              :key="index"
            >
              <label class="custom-checkbox constructor-item__checkbox" @change="selectedCheckbox(index)">
                <input class="custom-checkbox__input" type="checkbox" :class="{ 'custom-checkbox__input_active': dop.selected }">
                <span class="custom-checkbox__check"></span>
              </label>
              <div class="constructor-item__img">
                <img :src="dop.img" alt="">
              </div>
              <a class="constructor-item__name">
                {{ dop.name }}
              </a>
              <div class="constructor-item__prices">
                <span class="constructor-item__oldprice">
                  <s>{{ dop.oldPrice.toLocaleString() }} ₽</s>
                </span>
                <span class="constructor-item__newprice">
                  {{ dop.newPrice.toLocaleString() }} ₽
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="constructor-image">
          <img class="constructor__img constructor__img_main" src="../assets/images/ten-main.webp" alt="">
          <div class="constructor__image" v-for="(dop, index) in getDops" :key="index">
            <img
              v-show="dop.selected"
              :class="`constructor__img constructor__img_${dop.postfix}`"
              :src="require(`../assets/images/dop-${dop.postfix}.webp`)"
              alt=""
            />
          </div>
        </div>
        <div class="constructor-form">
          <Form @click="sendForm" />
        </div>
      </div>
    </div>
  </section>
  <Modal v-model:show="$store.state.dialogVisible">
    <ConstructorModal />
  </Modal>
</template>

<script>
import Form from './UI/Form.vue';
import Modal from './UI/Modal.vue';
import ConstructorModal from './ConstructorModal.vue';
export default {
  components: {
    Form,
    Modal,
    ConstructorModal
  },
  computed: {
    getDops() {
      return this.$store.state.dops;
    }
  },
  methods: {
    selectedCheckbox(index) {
      this.$store.dispatch('selectedCheckbox', index);
      this.$store.dispatch('totalPrice', index);
    }
  }
}
</script>

<style lang="scss" scoped>
.constructor {
  padding: 100px 0;

  &__title {
    margin-bottom: 20px;

    span.blue {
      color: var(--color-blue);
    }
  }

  &__subtitle {
    margin-bottom: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 39px;
    color: var(--color-main);
    text-align: center;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &-dops {
    max-width: 427px;
    width: 100%;
    padding: 98px 0;
    background-color: #F5F5F5;
  }

  &-list {
    margin: 0 25px 0 15px;
  }

  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    padding-bottom: 20px;
    border-bottom: 1px solid #C8C8C8;

    &:last-child {
      margin-bottom: 0;
    }

    &__checkbox {
      margin-right: 10px;
    }

    &__img {
      margin-right: 10px;
    }

    &__name {
      max-width: 150px;
      width: 100%;
      margin-right: auto;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 23px;
      text-decoration: underline;
      color: #565656;
    }

    &__prices {
      display: flex;
      flex-direction: column;
    }

    &__oldprice {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 14px;
      color: #C8C8C8;
      text-align: right;
    }

    &__newprice {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 900;
      line-height: 22px;
      color: var(--color-main);
    }
  }

  &-image {
    position: relative;
    max-width: 640px;
    width: 100%;
  }

  &__img {
    position: absolute;
    max-width: none;
    animation: img_show .6s ease-in-out;
    z-index: 1;

    &_main {
      top: 118px;
      left: 50%;
      transform: translateX(-50%);
    }

    &_kopch {
      top: 40%;
      right: 118px;
    }

    &_banki {
      top: 50%;
      left: 83px;
    }

    &_zajim {
      bottom: 20%;
      left: 142px;
    }

    &_nasad {
      bottom: 10%;
      right: 82px;
    }
  }
}

@keyframes img_show {
  0% {
    will-change: contents;
    opacity: 0;
    filter: drop-shadow(2px 4px 1px rgba(0, 0, 0, 0));
  }
  25% {
    opacity: 1;
    transform: scale(1.1);
    filter: drop-shadow(2px 4px 1px rgba(0, 0, 0, .25));
  }
  50% {
    transform: scale(1);
    filter: drop-shadow(2px 4px 5px rgba(0, 0, 0, .3));
  }
  100% {
    will-change: auto;
    filter: drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  }
}
</style>