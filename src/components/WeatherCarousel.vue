<script setup>
import { ref, onMounted  } from "vue";
  const dataValue = [{
    "locationName": "嘉義縣",
    "weatherElement": [
        {
            "elementName": "Wx",
            "time": [
                {
                    "startTime": "2024-10-01 12:00:00",
                    "endTime": "2024-10-01 18:00:00",
                    "parameter": {
                        "parameterName": "陰短暫陣雨或雷雨",
                        "parameterValue": "18"
                    }
                },
                {
                    "startTime": "2024-10-01 18:00:00",
                    "endTime": "2024-10-02 06:00:00",
                    "parameter": {
                        "parameterName": "陰短暫陣雨或雷雨",
                        "parameterValue": "18"
                    }
                },
                {
                    "startTime": "2024-10-02 06:00:00",
                    "endTime": "2024-10-02 18:00:00",
                    "parameter": {
                        "parameterName": "陰短暫陣雨或雷雨",
                        "parameterValue": "18"
                    }
                }
            ]
        },
        {
            "elementName": "PoP",
            "time": [
                {
                    "startTime": "2024-10-01 12:00:00",
                    "endTime": "2024-10-01 18:00:00",
                    "parameter": {
                        "parameterName": "30",
                        "parameterUnit": "百分比"
                    }
                },
                {
                    "startTime": "2024-10-01 18:00:00",
                    "endTime": "2024-10-02 06:00:00",
                    "parameter": {
                        "parameterName": "60",
                        "parameterUnit": "百分比"
                    }
                },
                {
                    "startTime": "2024-10-02 06:00:00",
                    "endTime": "2024-10-02 18:00:00",
                    "parameter": {
                        "parameterName": "60",
                        "parameterUnit": "百分比"
                    }
                }
            ]
        },
        {
            "elementName": "MinT",
            "time": [
                {
                    "startTime": "2024-10-01 12:00:00",
                    "endTime": "2024-10-01 18:00:00",
                    "parameter": {
                        "parameterName": "29",
                        "parameterUnit": "C"
                    }
                },
                {
                    "startTime": "2024-10-01 18:00:00",
                    "endTime": "2024-10-02 06:00:00",
                    "parameter": {
                        "parameterName": "27",
                        "parameterUnit": "C"
                    }
                },
                {
                    "startTime": "2024-10-02 06:00:00",
                    "endTime": "2024-10-02 18:00:00",
                    "parameter": {
                        "parameterName": "26",
                        "parameterUnit": "C"
                    }
                }
            ]
        },
        {
            "elementName": "CI",
            "time": [
                {
                    "startTime": "2024-10-01 12:00:00",
                    "endTime": "2024-10-01 18:00:00",
                    "parameter": {
                        "parameterName": "悶熱"
                    }
                },
                {
                    "startTime": "2024-10-01 18:00:00",
                    "endTime": "2024-10-02 06:00:00",
                    "parameter": {
                        "parameterName": "悶熱"
                    }
                },
                {
                    "startTime": "2024-10-02 06:00:00",
                    "endTime": "2024-10-02 18:00:00",
                    "parameter": {
                        "parameterName": "舒適至悶熱"
                    }
                }
            ]
        },
        {
            "elementName": "MaxT",
            "time": [
                {
                    "startTime": "2024-10-01 12:00:00",
                    "endTime": "2024-10-01 18:00:00",
                    "parameter": {
                        "parameterName": "32",
                        "parameterUnit": "C"
                    }
                },
                {
                    "startTime": "2024-10-01 18:00:00",
                    "endTime": "2024-10-02 06:00:00",
                    "parameter": {
                        "parameterName": "29",
                        "parameterUnit": "C"
                    }
                },
                {
                    "startTime": "2024-10-02 06:00:00",
                    "endTime": "2024-10-02 18:00:00",
                    "parameter": {
                        "parameterName": "29",
                        "parameterUnit": "C"
                    }
                }
            ]
        }
    ]
}]

const dataValue2=ref([
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: '台北市',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: '新北市',
                    description: 'Product Description',
                    image: 'black-watch.jpg',
                    price: 72,
                    category: 'Accessories',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },
                {
                    id: '1002',
                    code: 'zz21cz3c1',
                    name: '新竹市',
                    description: 'Product Description',
                    image: 'blue-band.jpg',
                    price: 79,
                    category: 'Fitness',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3
                },
                {
                    id: '1003',
                    code: '244wgerg2',
                    name: '台南市',
                    description: 'Product Description',
                    image: 'blue-t-shirt.jpg',
                    price: 29,
                    category: 'Clothing',
                    quantity: 25,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1004',
                    code: 'h456wer53',
                    name: 'Bracelet',
                    description: 'Product Description',
                    image: 'bracelet.jpg',
                    price: 15,
                    category: 'Accessories',
                    quantity: 73,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },])


const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);


const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

// Dialog
const visible = ref(false);
</script>
<template>

  <Carousel :value="dataValue2" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000" class="mt-3">
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 p-3"  @click="visible = true">
            <div class="mb-3">
                <div class="relative mx-auto">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round"  style="width:250px;"/>
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                </div>
            </div>
            <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-between align-items-center">
                <!-- <div class="mt-0 font-semibold">${{ slotProps.data.price }}</div> -->
                <p class="mt-0 font-semibold">晴天</p>
                <p class="mt-0 font-semibold">降雨機率 10%</p>
            </div>
        </div>
    </template>
</Carousel>

<Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">Update your information.</span>
    <div class="flex align-items-center gap-3 mb-3">
        <label for="username" class="font-semibold w-6rem">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex align-items-center gap-3 mb-5">
        <label for="email" class="font-semibold w-6rem">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
    </div>
    <div class="flex justify-content-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
    </div>
</Dialog>



</template>