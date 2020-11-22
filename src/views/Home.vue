<template>
  <a-layout id="components-layout">
    <a-layout-header class="header">
      <div id="logo">
        <div class="logo-img" />
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <sider-nav />
      <a-layout-content
        :style="{
          margin: '16px 8px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiderNav from '@/components/SiderNav.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SiderNav,
  },
});
</script>

<style lang="postcss" scoped>
#logo {
  width: 120px;
  margin: 5px 28px 5px 0;
  float: left;
  & .logo-img {
    width: 52px;
    height: 52px;
    background: url(../assets/zgx.png) 0% 0% / 100% no-repeat;
    margin-left: 20px;
  }
}
</style>
