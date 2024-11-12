<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-right") ¡Para cantar afinado, lo primero que hay que hacer es arriesgarse, nadie nace aprendido! 

    p.mb-5(data-aos="fade-right") El presente componente formativo acerca un poco al aprendiz al proceso del canto, detallando aspectos relevantes que se requieren para llegar a este fin, de manera eficaz. Así que, para tener un poco de contexto de lo que se tratará, es importante que revise el siguiente video introductorio:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SR3qDlqgNIA" title="El canto y la rítmica musical" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
