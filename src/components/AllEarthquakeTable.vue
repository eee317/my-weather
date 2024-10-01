<script setup>
import { ref, onMounted } from 'vue';
const selectedProduct = ref();
const customers = ref([{
                    id: 1000,
                    name: '2024-09-01',
                    country: {
                        name: 'Algeria',
                        code: 'dz'
                    },
                    company: 'Benton, John B Jr',
                    date: '2015-09-13',
                    status: 'unqualified',
                    verified: true,
                    activity: 17,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png'
                    },
                    balance: 70663
                },
                {
                    id: 1001,
                    name: '2024-08-02',
                    country: {
                        name: 'Egypt',
                        code: 'eg'
                    },
                    company: 'Chanay, Jeffrey A Esq',
                    date: '2019-02-09',
                    status: 'proposal',
                    verified: true,
                    activity: 0,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png'
                    },
                    balance: 82429
                },
                {
                    id: 1002,
                    name: '2024-08-01',
                    country: {
                        name: 'Panama',
                        code: 'pa'
                    },
                    company: 'Chemel, James L Cpa',
                    date: '2017-05-13',
                    status: 'qualified',
                    verified: false,
                    activity: 63,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png'
                    },
                    balance: 28334
                },
                {
                    id: 1003,
                    name: 'Lenna Paprocki',
                    country: {
                        name: 'Slovenia',
                        code: 'si'
                    },
                    company: 'Feltz Printing Service',
                    date: '2020-09-15',
                    status: 'new',
                    verified: false,
                    activity: 37,
                    representative: {
                        name: 'Xuxue Feng',
                        image: 'xuxuefeng.png'
                    },
                    balance: 88521
                },
                {
                    id: 1004,
                    name: 'Donette Foller',
                    country: {
                        name: 'South Africa',
                        code: 'za'
                    },
                    company: 'Printing Dimensions',
                    date: '2016-05-20',
                    status: 'proposal',
                    verified: true,
                    activity: 33,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png'
                    },
                    balance: 93905
                },]);

</script>
<template>
<DataTable
  v-model:selection="selectedProduct" :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="name" header="日期" style="width: 10%"></Column>
    <Column field="country.name" style="width: 5%">
      <template #body="slotProps">
        <div style="width:12px; height:12px;" class="bg-primary-300 rounded-full"></div>
      </template>
    </Column>
    <Column field="company" header="地震報告" style="width: 60%"></Column>
    <Column  style="width: 10%">
      <template #body="slotProps">
        <router-link :to="{name:'Earthquake'}">
          <Button>查看更多</Button>
        </router-link>
      </template>
    </Column>
</DataTable>
</template>