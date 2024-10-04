<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Registros y tesituras vocales

    p.mb-4(data-aos="fade-right") Para entender de mejor manera este proceso, se pueden encontrar las siguientes clasificaciones:
       
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Clasificación de las voces

    p.mb-4(data-aos="fade-right") Clasificar una voz es ubicarla en una categoría determinada, es reconocer que las voces tienen ámbitos vocales. Al respecto, existen voces femeninas (soprano, mezzosoprano y contralto) y masculinas (tenor, barítono y bajo). 

    p.mb-5(data-aos="fade-right") A continuación, una explicación de cada una de ellas:

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/info-1A.png', alt='Imagen que relaciona la ubicación del do4 en el piano, a partir de diferentes tipos de voz (soprano, contraalto, tenor y bajo).')
          .tarjeta.color-morado.p-3(x="12%" y="10%" numero="+")
            p Es la voz más clara y su ámbito vocal es desde el #[b do4] hasta el #[b do].
          .tarjeta.color-morado.p-3(x="7%" y="26%" numero="+")
            p Es la voz intermedia y su ámbito vocal es desde el #[b la3] hasta el #[b la5].
          .tarjeta.color-morado.p-3(x="11%" y="41%" numero="+")
            p Es la voz más grave de la mujer y su ámbito vocal es desde el #[b sol3] hasta el #[b fa5].
          .tarjeta.color-morado.p-3(x="14%" y="57.8%" numero="+")
            p Es la voz más aguda del hombre y su ámbito es desde el #[b re3] hasta el #[b la4].
          .tarjeta.color-morado.p-3(x="11.5%" y="74%" numero="+")
            p Es la voz intermedia y su ámbito vocal es desde el #[b sol2] hasta el #[b mi4].
          .tarjeta.color-morado.p-3(x="14.5%" y="89%" numero="+")
            p Es la voz más grave del registro masculino y su ámbito vocal es desde el #[b mi2] hasta el #[b mi4].
      .col-12.d-block.d-md-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/info-1B.png', alt='Imagen que relaciona la ubicación del do4 en el piano, a partir de diferentes tipos de voz (soprano, contraalto, tenor y bajo).')

    p.mb-5(data-aos="fade-right") Con respecto a la clasificación de la voz, es importante conocer los siguientes ejemplos de ubicación:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Ejemplo de la ubicación del do central en el piano</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-3a.png', alt='Imagen que relaciona la ubicación del do (C) en todas las partes del piano, desde el C1 hasta el C8.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-3b.png', alt='Imagen que relaciona la ubicación del do (C) en todas las partes del piano, desde el C1 hasta el C8.') 

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Ejemplo de la ubicación del ámbito vocal de cada voz a partir del do4</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-4a.svg', alt='Figura que relaciona la ubicación del do4 en el piano, a partir de diferentes tipos de voz (soprano, contraalto, tenor y bajo).')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-4b.svg', alt='Figura que relaciona la ubicación del do4 en el piano, a partir de diferentes tipos de voz (soprano, contraalto, tenor y bajo).') 

    p.mb-5(data-aos="fade-right") A partir de los ejemplos anteriores de ubicación, es importante entender los siguientes aspectos del ámbito vocal de cada voz a partir del do4:

    .row.tarjeta--container.mb-5(data-aos="fade-right")
      .col-lg.tarjeta.color-primario-a1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/sl1-a.svg', alt='')
        h4.text-center Ámbito o rango vocal
        p.mb-0 Es el marco total de frecuencias que puede generar un tracto vocal. Se mide por la frecuencia más grave y más aguda posible. Dentro del ámbito, el volumen sube de la nota grave a la nota de arriba. Las notas graves comúnmente no son aplicables por la falta de volumen, las notas más agudas por el volumen descontrolado.
      .col-lg.tarjeta.color-primario-a2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/sl1-b.svg', alt='')
        h4.text-center Tesitura
        p.mb-0 Para la música clásica, se define como una zona apta para el uso musical, sin que se esfuerce la voz. Esa es más pequeña que el ámbito y consiste de las notas que se pueden producir con una calidad apta para el uso musical.
      .col-lg.tarjeta.color-primario-a3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/sl1-c.svg', alt='')
        h4.text-center Cómo poder clasificar la voz
        p.mb-0 Al definir el rango vocal y la tesitura, se puede encontrar la clasificación de la voz.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 lasificación según registros vocales

    p.mb-5(data-aos="fade-right") La cantidad del registro vocal es la extensión de la voz dentro de una escala de tonos musicales. Al respecto, es importante conocer la siguiente clasificación:

    .row.mb-2(data-aos="zoom-in-down")
      .col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/sl2-a.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Voz de cabeza
              p Es la que se utiliza en las notas agudas. Para producir las ondas sonoras, es requerida menos masa vibratoria de las cuerdas vocales y la vibración se siente en la cabeza. Su nombre viene dado por dónde se siente la resonancia de la voz al cantar determinadas notas. 
              p Para una ejecución sana de la voz de cabeza, las cuerdas vocales se deben mantener juntas en todo momento. En la voz de cabeza esto es particularmente difícil, ya que, al ser la masa muscular de las cuerdas vocales más fina, es más importante que nunca que mantengas el equilibrio vocal entre la masa muscular de las cuerdas vocales y el aire que expulsas al cantar.
      .col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/sl2-b.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Voz mixta 
              p Se produce una transición gradual de masa vibratoria de más a menos, a medida que se sube de tono. La resonancia se siente parte en el paladar blando y parte en la boca. A medida que es subida de nota se va sintiendo cada vez más en la cabeza. La voz mixta está entremedio de la voz de pecho y la voz de cabeza. No suena tan potente como la voz de pecho, ni tan fina como la voz de cabeza.
              p Es la voz que se utiliza en las notas de paso, también llamadas puentes o passagio, para hacer que suenen con más potencia de manera segura para tu voz.
      .col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/sl2-c.svg' alt='')
          .tarjeta.color-primario-b2
            .p-4
              h4 Voz de pecho
              p Es la voz con la que habitualmente se habla, la parte más grave del rango. Se utiliza para las notas graves y medias. Su nombre proviene del lugar donde se nota la resonancia, que es el pecho. Las ondas de sonido se generan utilizando toda la masa vibratoria de las cuerdas vocales.
              p La voz de pecho es el nombre que se le da al registro grave/medio de la voz humana. Esto es así, tanto para hombres como para mujeres, aunque es algo común que las mujeres no lo utilicen correctamente de forma natural. También se puede sentir que la voz tiene más presencia, más cuerpo. Esto es así porque utilizas toda la musculatura de tus cuerdas vocales. 

    .tarjeta.color-acento-contenido-a.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/compliant.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Rango vocal
              p Para complementar esta temática y ayudar a encontrar su rango vocal, se sugiere revisar el siguiente documento anexo.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Rango_vocal.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download







</template>

<script>
export default {
  name: 'Tema2',
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
