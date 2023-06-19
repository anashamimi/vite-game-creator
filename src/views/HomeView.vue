<template>

    <div class="jumbo">
        <!-- <img src="/public/image/img3.jpg" alt=""> -->

        <!-- <div class="layer"></div>  -->

        <div class="bg">
            <div class="overlay">
                <div class="container px-4 px-lg-5 h-100">
                    <!-- <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-8 align-self-end">
                            <h1 class="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1>
                            <hr class="divider" />
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <p class="text-white-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                            <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
                        </div>
                    </div> -->
                    <div id="productCarouselCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner carousel-width">
                        <transition-group name="carousel-slide" tag="div">
                            <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === activeSlide }]">
                                <img :src="item.image" style="height: 700px; " class="d-block w-100" :alt="item.alt">
                            </div>
                        </transition-group>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#productCarouselCaptions" data-bs-slide="prev" @click="prev()">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#productCarouselCaptions" data-bs-slide="next" @click="next()">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        
        
    </div>



</template>

<script>
export default  {
    name: 'HomeView',
    data() {
      return {
        activeSlide: 0,
        carouselItems: [
          {
            image: 'public/image/chr1a.png',
            alt: 'character1'
          },
          {
            image: 'public/image/chr2a.png',
            alt: 'character2'
          },
          {
            image: 'public/image/chr3a.png',
            alt: 'character3'
          },
          {
            image: 'public/image/chr4a.png',
            alt: 'character4'
          },
          {
            image: 'public/image/chr5a.png',
            alt: 'character5'
          },
          {
            image: 'public/image/chr6a.png',
            alt: 'character6'
          },
        ]
      }
    },
    methods: {
      next() {
        this.activeSlide = (this.activeSlide + 1) % this.carouselItems.length;
      },
      prev() {
        this.activeSlide = (this.activeSlide - 1 + this.carouselItems.length) % this.carouselItems.length;
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

    .container{
        margin: 82px;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.7);
    }

    .carousel-slide-enter-active,
  .carousel-slide-leave-active {
    transition: opacity 0.5s;
  }
  
  .carousel-slide-enter,
  .carousel-slide-leave-to {
    opacity: 0;
  }

  .carousel-width{
    width: 75%;
    margin: 0 auto;
  }
    
</style>