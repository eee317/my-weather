<script setup>
import { ref } from "vue";
const menu = ref(null);
const toggle = (event) => {
  menu.value.toggle(event);
};
const items = ref([
  {
    label: "Refresh",
    icon: "pi pi-refresh",
  },
  {
    label: "Search",
    icon: "pi pi-search",
  },
  {
    separator: true,
  },
  {
    label: "Delete",
    icon: "pi pi-times",
  },
]);
</script>
<template>
  <Toolbar>
    <template #end>
      <button class="p-panel-header-icon p-link mr-2" @click="toggle">
        <span class="pi pi-cog"></span>
      </button>
      <Menu ref="menu" id="config_menu" :model="items" popup />
      <div class="bg-palette-blue">
        This has a blue background.
      </div>
      <div class="bg-palette-green">
        This has a palette-green background.
      </div>
      <div class="bg-palette-pink">
        This has a palette-green background.
      </div>
      <div class="bg-palette-orange">
        This has a palette-green background.
      </div>
    </template>
  </Toolbar>
</template>
