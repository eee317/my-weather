<script setup>
import {defineProps} from 'vue';
import { matchDate, resultTitle, resultColor } from '@/utils/utils';
defineProps({
    data: {
        type: Object,
        default: () => {},
    },
});
</script>
<template>
  <DataTable :value="data" tableStyle="">
    <Column style="width: 3%">
      <template #body="slotProps">
        <div class="rounded-full mx-auto w-2 h-2" :class="resultColor(slotProps.data.ReportColor)"></div>
      </template>
    </Column>
    <Column header="地震報告">
      <template #body="slotProps" >
        <p class="m-0">{{ matchDate(slotProps.data.ReportContent) }}</p>
        <p class="m-0">{{ resultTitle(slotProps.data.ReportContent || '').slice(0, 13) }}...</p>
      </template>
    </Column>
  </DataTable>
</template>