<template>

    <div class="jumbo">
        <!-- <img src="/public/image/img3.jpg" alt=""> -->

        <!-- <div class="layer"></div>  -->
        

        <div class="bg">
            <div class="overlay">
                <div class="container" style="padding-top: 100px;">
                    <h1 class="text-white">Personaggi fantastici e dove trovarli</h1>
                </div>
                <!-- <div class="container px-4 px-lg-5 h-100">
                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-8 align-self-end">
                            <h1 class="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1>
                            <hr class="divider" />
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <p class="text-white-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                            <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                        </div>
                </div> -->
                    <!-- <div style="padding-top: 140px; padding-left: 550px;" v-for="item in menu" :key="item.routeName">
                        <router-linkr :to="{ name: item.routeName }" type="button" class="btn btn-dark d-inline-block">clicca qui per i personaggi</router-linkr>
                    </div> -->
            </div>
        </div>
        
    </div>



</template>

<script>
export default  {
    name: 'HomeView',  
    data() {
        return {
            menu: [
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

    .jumbo{
        position: relative;
        height: 100vh;
    }

    .bg{
        height: 100%;
        background: url(../../public/image/img3.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        
    }
    
</style>