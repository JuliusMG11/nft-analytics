<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: false,
        default: []
    }
})
</script>

<template>
  <div class="top-project-section">
    <h2 class="pb-8">TOP PROJECTS</h2>
    <div class="grid grid-cols-3 gap-8">
        <section class="image-section">
            <figure class="relative image">
                <img :src="data.image" alt="">
                <div class="title absolute">
                    <h3> {{ data.name }} </h3>
                </div>
            </figure>
        </section>

        <section class="content-section col-span-2">

        </section>
    </div>
  </div>
</template>

<style lang="scss">

.top-project-section {
    padding-bottom: 22px;
    padding-bottom: 22px;
}

.image-section {
    figure {
        border-radius: 22px;
        overflow: hidden;
        height: 180px;

        h3 {
            position: absolute;
            font-size: 18px;
            z-index: 2;
            left: 16px;
            bottom: 16px;
            color: #ffffff;
            width: max-content;
            text-transform: uppercase;
            font-weight: 700;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        &::after {
            position: absolute;
            content: '';
            z-index: 1;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, #6A2EFD 2.64%, rgba(255, 255, 255, 0.00) 100%, #FFF 100%, #6A2EFD 100%);

        }
    }
}

</style>