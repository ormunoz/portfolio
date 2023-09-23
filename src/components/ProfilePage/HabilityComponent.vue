<template>
    <div>
        <h3 class="font-weight-bold mt-5">Habilidades Blandas: </h3>
        <section id="slideshow">
            <div class="entire-content">
                <div class="content-carrousel">
                    <figure class="shadow"><img :src="'/img/hability/tiempo.png'" alt="tiempo.png" border="0" width="800"
                            height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/aprendizaje_rapido.png'" alt="aprendizaje_rapido.png" border="0"
                            width="800" height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/creatividad_innovacion.png'" alt="creatividad_innovacion.png'" border="0" width="800"
                            height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/escuchar.png'" alt="escuchar.png" border="0" width="800"
                            height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/auto_desarrollo.png'" alt="auto_desarrollo.png" border="0"
                            width="800" height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/manejo_conflicto.png'" alt="anejo_conflicto.png" border="0" width="800"
                            height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/trabajo_equipo.png'" alt="trabajo_equipo.png" border="0" width="800"
                            height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/orientacion.png'" alt="orientacion.png" border="0" width="800"
                            height="449" auto="compress" cs="tinysrgb" /></figure>
                    <figure class="shadow"><img :src="'/img/hability/pensamiento_analitico.png'" alt="pensamiento_analitico.png" border="0" width="800"
                            height="449" auto="compress" cs="tinysrgb" /></figure>

                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
    name: 'HabilityComponent', 
}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

html,
body {
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #99ffcc;
}

#slideshow {
    margin: 0 auto;
    height: 600px;
    width: 100%;
    box-sizing: border-box;
}

.slideshow-title {
    font-family: 'Allerta Stencil';
    font-size: 62px;
    color: #99ffcc;
    margin: 0 auto;
    text-align: center;
    margin-top: 25%;
    letter-spacing: 3px;
    font-weight: 300;
}

.sub-heading {
    padding-top: 50px;
    font-size: 18px;
}

.sub-heading-two {
    font-size: 15px;
}

.sub-heading-three {
    font-size: 13px;
}

.sub-heading-four {
    font-size: 11px;
}

.sub-heading-five {
    font-size: 9px;
}

.sub-heading-six {
    font-size: 7px;
}

.sub-heading-seven {
    font-size: 5px;
}

.sub-heading-eight {
    font-size: 3px;
}

.sub-heading-nine {
    font-size: 1px;
}

.entire-content {
    margin: auto;
    width: 190px;
    perspective: 1000px;
    position: relative;
    padding-top: 80px;
    /* Ajusta el margen izquierdo para mover a la izquierda */
    margin-left: 80px;
    /* Puedes ajustar este valor según tus necesidades */
}

.content-carrousel {
    width: 100%;
    position: absolute;
    float: right;
    animation: rotar 35s infinite linear;
    transform-style: preserve-3d;
}

.content-carrousel:hover {
    animation-play-state: paused;
    cursor: pointer;
}

.content-carrousel figure {
    width: 110%;
    height: 180px;
    overflow: hidden;
    position: absolute;
}

.content-carrousel figure:nth-child(1) {
    transform: rotateY(0deg) translateZ(300px);
}

.content-carrousel figure:nth-child(2) {
    transform: rotateY(40deg) translateZ(300px);
}

.content-carrousel figure:nth-child(3) {
    transform: rotateY(80deg) translateZ(300px);
}

.content-carrousel figure:nth-child(4) {
    transform: rotateY(120deg) translateZ(300px);
}

.content-carrousel figure:nth-child(5) {
    transform: rotateY(160deg) translateZ(300px);
}

.content-carrousel figure:nth-child(6) {
    transform: rotateY(200deg) translateZ(300px);
}

.content-carrousel figure:nth-child(7) {
    transform: rotateY(240deg) translateZ(300px);
}

.content-carrousel figure:nth-child(8) {
    transform: rotateY(280deg) translateZ(300px);
}

.content-carrousel figure:nth-child(9) {
    transform: rotateY(320deg) translateZ(300px);
}

.content-carrousel figure:nth-child(10) {
    transform: rotateY(360deg) translateZ(300px);
}

.shadow {
    position: absolute;
    box-shadow: 0px 0px 20px 0px #000;
    border-radius: 1px;
}

.content-carrousel img {
    image-rendering: auto;
    transition: all 300ms;
    width: 100%;
    height: 100%;
}

.content-carrousel img:hover {
    transform: scale(1.1);
    transition: all 1000ms;
}

@keyframes rotar {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(360deg);
    }
}
</style>