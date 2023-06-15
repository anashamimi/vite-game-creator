<template>
    <Loader v-if="characters.length === 0" />
    <div class="container" id="character-list">
        <h1 class=" text-center p-4 text-white text-uppercase">characters list</h1>
        <div class="row gy-4 mb-4">
            <CharacterCard v-for="(character, index) in characters" :key="character.id" :character="character" />

        </div>
        <nav aria-label="Page navigation example" :class="characters.length === 0 ? 'd-none' : ''" class="py-4" >
            <ul class="pagination m-0">
                <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                        @click="getData(currentPage - 1)">Previous</button></li>
                <li class="page-item" v-for="n in lastPage"><button
                        :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                </li>

                <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
                        @click="getData(currentPage + 1)">Next</button></li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
import axios from 'axios';
import CharacterCard from '../components/CharacterCard.vue';
import Loader from '../components/Loader.vue';
export default {
    'name': 'CharactertList',
    components: {
        CharacterCard,
        Loader
    },
    data() {
        return {
            characters: [],
            selectedType: '',
            apiUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
            isLoading: true,
        }

    },

    methods: {
        getData(numPage) {
            axios.get(`${this.apiUrl}/characters`, {
                params: {
                    'page': numPage
                }
            }).then((res) => {
                console.log(res.data);
                this.characters = res.data.results.data;
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            }).catch((error) => {
                console.log(error);
            }).finally(() => {                
                this.isLoading = false;                
            })
        }
    },
    mounted() {
        this.getData(1);
    }
}
</script>
  
<style lang="scss" scoped></style>