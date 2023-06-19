<template>
    <header> 
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top py-3" id="mainNav">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#page-top"><img src="../../public/image/logo.png" style="height: 40px;" alt=""></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item" v-for="item in menu" :key="item.routeName">
                            <router-link :to="{ name: item.routeName }" class="nav-link" active-class="active"> {{ item.label }} </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<script>
    export default {
    name: 'HeaderApp',
    data() {
        return {
            menu: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Characters',
                    routeName: 'characters'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.navbar{
    z-index: 100000;
}
</style>