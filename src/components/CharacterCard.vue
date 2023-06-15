<template>
    <div class="col-4">
        <div class="card card-bg mb-3 shadow">
            <div class="row align-items-center">
                <div class="col-10">
                    <h4 class="fs-4 card-title fw-bold text-center text-capitalize py-2">
                        {{ character.name }}</h4>
                </div>
                <div class="col-2">
                    <p class="card-text text-small fw-bold">{{  character.level }} lv.</p>
                </div>

            </div>
            <div class="card-body">

                <p class="card-text"><span class="fw-bold text-capitalize">Breed:</span>
                    {{  character.race }}</p>
                <p class="card-text"><span class="fw-bold text-capitalize">class:</span>
                    {{  character.class }}</p>
                <p class="card-text"><span class="fw-bold text-capitalize">lifepoint:</span>
                    {{  character.lifepoint }}</p>
                <p class="card-text"><i class="fa-solid fa-dumbbell"></i>: {{  character.strength }} </p>
                <p class="card-text"><i class="fa-solid fa-person-running"></i>: {{  character.agility }}
                </p>
                <p class="card-text"><span class="fw-bold text-capitalize">weapon:</span>
                    {{  character.main_weapon }}</p>


                <p>{{  character.type ?  character.type.name : 'No type' }}</p>

                <p class="card-text">
                    <router-link :to="{ name: 'show-character', params: { id: character.id } }" class="btn btn-warning">Vedi
                        prodotto </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: ['character'],

}
</script>

<style lang="scss" scoped></style>