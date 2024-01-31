<template>
  <div class="table-section">
    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
        <thead>
            <tr>
                <th 
                    scope="col" 
                    class="pb-4 text-xs font-medium text-left uppercase"
                >
                    <strong>Position</strong>
                </th>
                <th 
                    scope="col" 
                    class="pb-4 text-xs font-medium text-left uppercase"
                >
                    <strong>Project name</strong>
                </th>
                    <th 
                    scope="col" 
                    class="pb-4 text-xs font-medium text-left uppercase"
                >
                    <strong>Price</strong>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="item in data"
                :key="item.id"
            >
                <td>
                    <figure>
                        <img :src="item.image" alt="">
                    </figure>
                </td>
                <td>{{ item.description }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.floorPrice / 1000  }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: false
    }
})
</script>

<style lang="scss" scoped>

.table-section {
    color: #ffffff;

    figure {
        width: 42px;
        height: 42px;
        overflow: hidden;
        border-radius: 50%;

        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
}

th {
    text-align: left;
}

tbody {
    tr {
        td {
            padding-top: 16px;
        }
    }
}


</style>