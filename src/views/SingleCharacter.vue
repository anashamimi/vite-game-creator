<template>
    <div class="container vh-100 pt-5">
        <Loader v-if="isLoading" />
        <div v-else>

            <h2 class="display-2 text-center fw-semibold">
                {{ character.name }}
            </h2>

            <div class="data-character">
                <p><span class="fw-bold">Lv.</span>{{ character.level }} </p>
                <p><span class="fw-bold">Class:</span> {{ character.class }}</p>
                <p><span class="fw-bold">Breed:</span>{{ character.race }} </p>
                <p><span class="fw-bold">HP:</span>{{ character.lifepoint }} </p>
                <p><span class="fw-bold">Agility <i class="fa-solid fa-person-running"></i>:</span>{{ character.agility }}
                </p>
                <p><span class="fw-bold">Strength <i class="fa-solid fa-dumbbell"></i>:</span> {{ character.strength }}</p>
                <p><span class="fw-bold">Item:</span>{{ character.main_weapon }} </p>

                <p class="card-text">{{ character.type ? character.type.name : 'No type specified' }}</p>
                <div  class="d-flex align-items-center gap-2">
                    <p v-for="weapon in character.weapons" class="text-bg-warning px-3 rounded-5">{{ weapon.name }}</p>
                </div>

                <p class="card-text">
                    <router-link :to="{ name: 'characters' }" class="btn btn-primary">
                        Back
                    </router-link>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
export default {
    name: 'SingleCharacter',
    components: {
        Loader,
    },
    data() {
        return {
            character: null,
            apiUrl: 'http://127.0.0.1:8000/api',
            isLoading: true,
        }
    },
    methods: {
        getCharacter() {
            axios.get(`${this.apiUrl}/characters/${this.$route.params.id}`).then((res) => {

                this.character = res.data.results;

            }).catch((error) => {
                console.log(error);
                console.log(error.response.data);
                this.$router.push({ name: 'not-found', query: { e: error.response.data.message } });
            }).finally(() => {
                setTimeout(() => {
                    this.isLoading = false;
                }, 2000);
            })
        }

    },

    mounted() {
        // console.log(this.$router);
        // console.log(this.$route);
        this.getCharacter();
    }
}
</script>


<style lang="scss" scoped>
.data-character {
    background-color: rgba($color: #ffffff, $alpha: 0.5);
    font-size: 24px;

}
</style>
