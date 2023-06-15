<template>
    <div class="container">
        <Loader v-if="character === null" />
        <div v-if="character">

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
                <p><span class="fw-bold">Item:</span>{{ character.weapon }} </p>
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
        }
    },
    methods: {
        getCharactert() {
            axios.get(`${this.apiUrl}/character/${this.$route.params.slug}`).then((res) => {
                if (res.data.success) {
                    this.character = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            }).catch((error) => {
                console.error(error);
                // Gestisci l'errore in modo appropriato, ad esempio mostrando un messaggio all'utente
            });
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
