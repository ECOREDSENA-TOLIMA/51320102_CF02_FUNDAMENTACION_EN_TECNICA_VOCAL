<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Ejercicios rítmicos

    p.mb-4(data-aos="fade-right") Al conocerse los siguientes ejercicios rítmicos, se podrá tener el control de cada elemento en canto y baile:

    .row.fondo-1.p-4.mb-4(data-aos="zoom-in-down")
      .col-lg-7.col-12.mb-4.col-lg-0.order-lg-1.order-2
        ul.lista-ul.mb-0
          li 
            i.fas.fa-check
            p.mb-2 Los elementos básicos del ritmo se deben estudiar en el siguiente orden: primero el pulso, después acento, luego esquema rítmico; o al unísono con una parte del cuerpo marca el pulso, con otra el acento, con otra el esquema rítmico.
          li 
            i.fas.fa-check
            p.mb-2 En un tema musical, se debe tener en cuenta la percusión corporal del pulso, los acentos, el esquema rítmico de las frases mediante palmas, piernas y pies. Si se tiene problemas de rítmica, se recomienda escuchar la canción y desplazarse buscando el pulso y el acento, después tratar de cantar el texto de la canción.
          li 
            i.fas.fa-check
            p.mb-2 Se recomienda llevar el pulso y el acento de distintos géneros musicales, de acuerdo al gusto; ojalá utilizando las palmas mientras se escuchan; posteriormente, se puede marcar con diferentes partes del cuerpo y/o desplazarse.
          li 
            i.fas.fa-check
            p.mb-2 Igualmente, ejecutar ejercicios rítmicos corporales e instrumentales, con el propósito de acompañar la canción que se va a cantar (se sugiere sea memorizada).
          li 
            i.fas.fa-check
            p.mb-2 Es necesario conocer la temática de la canción para poder trabajar la respiración y la prosodia rítmica por frases melódicas.
          li 
            i.fas.fa-check
            p.mb-2 Es importante ejecutar el ritmo de la canción con palmas y al mismo tiempo interiorizar la melodía, de acuerdo a las frases melódicas.
          li 
            i.fas.fa-check
            p.mb-2 Realizar un ejercicio de interiorización rítmica. Ejemplo sencillo: interiorizar el ritmo de la primera semifrase y reproducir con palmas el ritmo de la segunda sección.
          li 
            i.fas.fa-check
            p.mb-2 Si es posible trabajar el ritmo de la canción por frases con una pareja, donde se toque con palmas el ritmo de la pregunta y que la otra persona responda el ritmo de la respuesta. Utilizar diferentes matices y velocidades. Por ejemplo:
      .col-lg-4.col-8.order-lg-2.order-1
        figure
          img(src='@/assets/curso/temas/tema5/img-1.png', alt='')
          

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 11. </b> <i>Ejercicio rítmico pregunta - respuesta</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema5/fig-11a.svg', alt='Figura que relaciona un ejemplo sobre cómo hacer el ejercicio rítmico sobre Pregunta - Respuesta, donde según el contenido se sugiere sea realizado en pareja.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema5/fig-11b.svg', alt='Figura que relaciona un ejemplo sobre cómo hacer el ejercicio rítmico sobre Pregunta - Respuesta, donde según el contenido se sugiere sea realizado en pareja.') 
    


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
