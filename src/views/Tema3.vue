<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ritmo

    p.mb-4(data-aos="fade-right") El ritmo musical suele organizarse en patrones de recurrencia regular; dichos patrones, controlan el movimiento de la música y ayudan al oído humano a comprender su estructura.

    p.mb-5(data-aos="fade-right") Los elementos básicos del ritmo son:
    
    .row.tarjeta--container.mb-5(data-aos="fade-right")
      .col-lg.tarjeta.color-primario-a1.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/sl1-a.svg', alt='')
        h4.text-center Pulso
        p.mb-0 Es la sensación regular y constante que se oye en la música, es como el latido interno de la música. Cuando se escucha una canción y se acompaña de forma espontánea dando palmas con un ritmo regular, lo que se está tocando es la pulsación.
      .col-lg.tarjeta.color-primario-a2.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/sl1-b.svg', alt='')
        h4.text-center Acento
        p.mb-0 Es la fuerza o énfasis que se le pone a los sonidos que se hacen con más fuerza.

    p.mb-4(data-aos="fade-right") De igual manera, se encuentra el tempo o agógica de velocidad a la que se ejecuta una pieza musical. Se señala tradicionalmente de dos maneras: con indicaciones metronómicas (como q = 70, que significa un tiempo de 70 negras o pulsos por minuto) y se divide en:

    .row.h-100.justify-content-center.mb-2(data-aos="zoom-in-down")
      .col-12.col-xl-6.mb-xl-0.mb-5
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl2-a.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Velocidad constante
              p Algunas como: adagio, lento; andante, no tan lento; allegretto, moderadamente rápido; allegro, lento; andante, menos lento; allegretto, algo rápido; allegro, rápido; presto, muy rápido.
      .col-12.col-xl-6.mb-xl-0.mb-5
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/sl2-b.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Velocidad variable
              p Algunos como: accelerando (accel.); acelerando-rallentando (rall.); retrasando-ritardando (rit.); retardando. 

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Organización

    p.mb-4(data-aos="fade-right") De acuerdo a cómo se organiza el ritmo, se debe saber que el compás es la ordenación de los pulsos fuertes y débiles. Los compases más usados están formados por dos, tres o cuatro pulsos (también llamados tiempos o partes). Según la distribución del acento se asignan en:

    TabsC.mb-5(data-aos="fade-down")
      .py-3.py-lg-5(titulo="Binario")
        .row.justify-content-center.px-lg-0.px-3
          .col-lg-10.col-10.mb-3
            p Se produce cuando los tiempos aparecen en grupos de dos, alternando un primer tiempo fuerte con un segundo tiempo débil. Ejemplo:
          .col-lg-8
            figure
              img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/img-1A.svg', alt='Imagen que contiene un esquema que ejemplifica el proceso binario, con notas musicales de los compases en 2 y 4.')
              img.d-block.d-md-none(src='@/assets/curso/temas/tema3/img-1B.svg', alt='Imagen que contiene un esquema que ejemplifica el proceso binario, con notas musicales de los compases en 2 y 4.') 
      .py-3.py-lg-5(titulo="Ternario")
        .row.justify-content-center.px-lg-0.px-3
          .col-lg-10.col-10.mb-3
            p Cuando los tiempos aparecen agrupados de tres en tres; es decir, con un primer tiempo fuerte y los otros dos débiles, se tiene un tiempo ternario. Ejemplo:
          .col-lg-8
            figure
              img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/img-2A.svg', alt='Imagen que contiene un esquema que ejemplifica el proceso ternario, con notas musicales de los compases en 3 y 4.')
              img.d-block.d-md-none(src='@/assets/curso/temas/tema3/img-2B.svg', alt='Imagen que contiene un esquema que ejemplifica el proceso ternario, con notas musicales de los compases en 3 y 4.') 

      .py-3.py-lg-5(titulo="Cuaternario")
        .row.justify-content-center.px-lg-0.px-3
          .col-lg-10.col-10.mb-3
            p Puede describirse como un tiempo binario doble, donde aparecen dos grupos de dos tiempos binarios, solo que el acento del tercer tiempo es secundario. Ejemplo:
          .col-lg-8
            figure
              img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/img-3A.svg', alt='Imagen que contiene un esquema que ejemplifica el proceso cuaternario, con notas musicales de los compases en 4 y 4.')
              img.d-block.d-md-none(src='@/assets/curso/temas/tema3/img-3B.svg', alt='Imagen que contiene un esquema que ejemplifica el proceso cuaternario, con notas musicales de los compases en 4 y 4.') 

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Duración

    p.mb-4(data-aos="fade-right") Es una de las cualidades del sonido, la cual indica la prolongación de un sonido en el tiempo y está representada gráficamente, por medio de las figuras de nota y los silencios. Al respecto, analice la siguiente tabla explicativa:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Figuras musicales</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/fig-5a.svg', alt='Tabla que relaciona el nombre de cada una de las figuras musicales (redonda, blanca, negra, corchea, semicorchea, fusa, semifusa), el símbolo que las representa, el silencio y el valor.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig-5b.svg', alt='Tabla que relaciona el nombre de cada una de las figuras musicales (redonda, blanca, negra, corchea, semicorchea, fusa, semifusa), el símbolo que las representa, el silencio y el valor.') 
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La nota y los silencios representan la duración del sonido. Por eso, es fundamental para el aprendizaje de esta formación, conocer esta, que es una de las cualidades del sonido.
      
    p.mb-4(data-aos="fade-right") Ahora bien, se invita a que conozca la siguiente ejemplificación de lo que representa una redonda:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Equivalencia de la redonda</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/fig-6a.svg', alt='Figura que relaciona lo que representa una redonda en las diferentes figuras musicales, acompañada de las notas que las componen.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig-6b.svg', alt='Figura que relaciona lo que representa una redonda en las diferentes figuras musicales, acompañada de las notas que las componen.') 
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Los signos de prolongación

    p.mb-5(data-aos="fade-right") Los signos de prolongación aumentan o prolongan la duración de un sonido y son los siguientes:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-4A.svg", alt="alt")
          .crd_hover_txt--body
            h5.mb-3 Puntillo (.)
            p.mb-0 Añade la mitad del valor de la figura. El puntillo se puede poner tanto a las figuras de nota, como a los silencios.
      .col-xl-4.col-lg-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-4B.svg", alt="alt")
          .crd_hover_txt--body.p-3.p-md-4
            h5.mb-4.mb-md-3 Ligadura (⌣)
            p.mb-0 Suma duraciones. Solo pueden llevarla dos notas que estén a la misma altura, que sean el mismo sonido. Puede afectar a sonidos que están entre dos compases diferentes. Se coloca a través de las cabezas de las figuras, nunca a través de las plicas. Los silencios nunca se ligan.
      .col-xl-4.col-lg-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-4C.svg", alt="alt")
          .crd_hover_txt--body.w-100
            h5.mb-3 Calderón
            p.mb-0 Prolonga interrumpiendo la medida a gusto del intérprete.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .cajon.color-secundario.p-4.mb-4
          h4 Curso completo de Teoría de la Música
          p.mb-0 Con el ánimo de complementar la temática del ritmo y sus elementos, se recomienda navegar en la web el Curso completo de Teoría de la Música, de Vanesa Cordantonopulos. Se sugiere específicamente revisar los niveles 1, 2, 3.


</template>

<script>
export default {
  name: 'Tema3',
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
