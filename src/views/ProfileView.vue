<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-xs-12 col-sm-12 col-md-5">
                <WelcomeComponent />
                <HabilityComponent />
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 text-justify">
                <div>
                    <PresentationComponent />
                </div>
                <div class="col-xs-12 col-sm-12 mt-5">
                    <!-- <Contactame /> -->
                </div>
            </div>
        </div>
    </div>
</template>
  
  


<script>
import { defineComponent, ref } from 'vue';
import WelcomeComponent from '@/components/ProfilePage/WelcomeComponent.vue'
import HabilityComponent from '@/components/ProfilePage/HabilityComponent.vue'
import PresentationComponent from '@/components/ProfilePage/PresentationComponent.vue'

export default defineComponent({
    name: 'Profile',
    components: { WelcomeComponent, HabilityComponent,PresentationComponent },

    setup(props) {

    }
})

</script>

<style>
.font-weight-bold {
    font-weight: bold;
    text-align: left;
}

.text-justify {
    text-align: justify;
}
</style>