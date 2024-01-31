<template>
  <div class="dashboard">
    <!-- <CoinPrice /> -->
    <button @click.prevent="fetchData">Load Data</button>
    <!-- <button @click="sortPriceProject()">SORT PRICE PROJECT</button> -->

    <div class="container">
        <div class="section-part flex gap-16">
            <section class="menu-section">
                <div class="profile-section flex gap-4 items-center">
                    <figure>
                        <img src="@/assets/img/avatar.png" alt="">
                    </figure>
                    <h4>John Doe</h4>
                </div>
                <div class="nav-section">
                    <nav>
                        <ul>
                             <li class="flex gap-2 items-center">
                                <div class="icon">
                                    <img src="@/assets/img/svg/example-icon.svg" alt="">
                                </div>
                                Home
                            </li>
                            <li class="flex gap-2 items-center">
                                 <div class="icon">
                                    <img src="@/assets/img/svg/example-icon.svg" alt="">
                                </div>
                                Profile
                            </li>
                             <li class="flex gap-2 items-center">
                                <div class="icon">
                                    <img src="@/assets/img/svg/example-icon.svg" alt="">
                                </div>
                                Mints
                            </li>
                            <li class="flex gap-2 items-center">
                                  <div class="icon">
                                    <img src="@/assets/img/svg/example-icon.svg" alt="">
                                </div>
                                Analytics
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section class="content-section">
                 <TopProject :data="data[0]" />
                 <Table :data="data"  />
            </section>
        </div>
    </div>

  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { fetchData, fetchDataFromFirestore, data } from '../../useData';


const sortBestProject = () => {
    return data.value.sort((a, b) => parseInt(a.description) - parseInt(b.description));
}
const solanaToUSD = 100;


onMounted(async () => {
    await fetchDataFromFirestore();
    sortBestProject();
})



</script>

<style lang="scss" scoped>

.container {
    padding-left: 16px;
    padding-right: 16px;
}

.menu-section {
    position: sticky;
    top: 16px;
    width: 20%;
    background-color: #161920;
    padding: 32px;
    border-radius: 24px;
    height: 100%;

    .profile-section {
        figure {
            width: 32px;
            height: 32px;
            overflow: hidden;
            border-radius: 50%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        h4 {
            font-size: 16px;
            font-weight: 400;
            color: #ffffff;
        }
    }

    nav {
        padding-top: 16px;

        ul {
            padding-left: 0px;

            li {
                color: #ffffff;
                font-size: 16px;
                font-weight: 400;
                margin-top: 16px;

                .icon {
                    width: 24px;
                    height: 24px;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}

.content-section {
    width: 80%;
    background-color: #161920;
    border-radius: 32px;
    padding: 32px;
}

</style>