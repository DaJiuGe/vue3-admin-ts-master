<template>
  <a-menu theme="dark" mode="inline">
    <template v-for="route in routes">
      <a-menu-item v-if="!route.children" :key="route.path">
        <router-link :to="route.path">
          <Icon :icon="route.meta.icon" />
          {{ route.meta.title }}
        </router-link>
      </a-menu-item>
      <a-sub-menu v-else :key="route.path">
        <template #title>
          <Icon :icon="route.meta.icon" />
          {{ route.meta.title }}
        </template>
        <a-menu-item
          v-for="childRoute in route.children"
          :key="childRoute.path"
        >
          <router-link :to="childRoute.path">
            <Icon :icon="childRoute.meta.icon" />
            {{ childRoute.meta.title }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { indexRoutes } from "@/router/index";

export default defineComponent({
  setup() {
    const routes = indexRoutes;
    return { routes };
  },
});
</script>

<style lang="sass" scoped></style>
