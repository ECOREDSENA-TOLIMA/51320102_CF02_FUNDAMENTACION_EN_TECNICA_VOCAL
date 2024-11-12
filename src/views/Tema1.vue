<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Afinación

    p.mb-4(data-aos="fade-right") Para iniciar, es importante primero que todo, definir y diferenciar lo que representan la afinación y la entonación.
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Afinación

    p.mb-4(data-aos="fade-right") Es el proceso auditivo y vocal que se desarrolla al ajustar el tono (frecuencias sonoras o alturas) de un sonido, hasta que concuerde con una nota de referencia, en cualquier nota de una escala musical. 

    TabsC.mb-5(data-aos="fade-down")
      .py-3.py-lg-5(titulo="¿Qué es estar afinado?")
        .row.justify-content-center.px-lg-5.px-3
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img-1A.png', alt='')
          .col-lg-7
            //- h5 Qué es estar afinado
            p Se considera estar afinado al escuchar y tener la habilidad de reproducir los sonidos, de acuerdo con la comprobación de uno o dos sonidos de referencia.
      .py-3.py-lg-5(titulo="¿Cómo se logra?")
        .row.justify-content-center.px-lg-5.px-3
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img-1B.png', alt='')
          .col-lg-7
            //- h5 ¿Cómo se logra?
            p Para lograr afinación es necesario conocer la diferencia auditiva entre las notas, las cuales pueden ser naturales o alteradas como sostenidos o bemoles. Al mismo tiempo, se debe tener una técnica que ayude a “sostener” la emisión limpia y clara de la voz.
      .py-3.py-lg-5(titulo="Resonancia")
        .row.justify-content-center.px-lg-5.px-3
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img-1C.png', alt='')
          .col-lg-7
            //- h5 Resonancia
            p Es importante tener en cuenta en dónde resonar la voz en el cuerpo (resonadores) y hacia dónde emitir la voz (direccionar).
      .py-3.py-lg-5(titulo="Ejemplo")
        .row.justify-content-center.px-lg-5.px-3
          .col-lg-5.col-10.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema1/img-1D.png', alt='Imagen que relaciona la ejemplificación de la afinación por medio de los 440 Hercios en el diapasón.')
          .col-lg-7
            //- h5 Ejemplo
            p La nota La del diapasón está afinado con una frecuencia de 440 Hercios (este sonido produce una vibración de cuatrocientas cuarenta y cuatro oscilaciones por segundo).
        
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title.mb-0
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Entonación
    
    .row.fondo-1.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        p Es el proceso de percepción, tanto auditiva como vocal de un cantante con respecto a un tono fundamental o tonalidad. Es decir, entonar significa tener precisión en el sonido.
      .col-12.col-lg-10.ps-4
        ul.lista-ul--color.lista-title-b.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h4.mb-0 ¿Cómo se logra?
        p.mb-4 El cantante debe escuchar los tonos de una escala musical para relacionar cada sonido con el eje central; es decir, el tono fundamental. 
     
        ul.lista-ul--color.lista-title-b.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h4.mb-0 Ejemplo
        p.mb-4 Para cantar en una tonalidad como do mayor, se debe saber cómo suena los grados conjuntos (nota por nota, sin saltos) de la escala de do mayor. (do, re, mi, fa, sol, la, si, do).
     
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Tonos musicales</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='Figura que relaciona la ejemplificación de la entonación con los diferentes tonos musicales.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='Figura que relaciona la ejemplificación de la entonación con los diferentes tonos musicales.') 

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Técnicas de afinación

    p.mb-4(data-aos="fade-right") Al respecto, es importante conocer los siguientes actores de desafinación y recomendaciones:

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-10.col-12
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Por descentralización")
            .col-12.mb-4.mb-lg-0
              ul.lista-ul.mb-0.ms-3
                li 
                  i.fas.fa-check
                  p Lo que se conoce como “columna de aire” se refiere a la dirección ascendente que tiene el aire dentro del cuerpo humano, en todo el proceso de la génesis del sonido. Por lo tanto, es necesario tener en cuenta todo el proceso de respiración, desde inspirar el aire proceso de espiración, retención del mismo en los pulmones formando un globo, el cual se infla empujando el diafragma hacia abajo y así mismo, lo vuelva a empujar haciendo que el aire se direccione y salga de forma ascendente hacia las cuerdas vocales. 
                li 
                  i.fas.fa-check
                  p Cuando no se es consciente de practicar ejercicios de apoyo y control en el diafragma y la técnica de respiración es inadecuada, se evidencia que la centralización de la respiración es incorrecta; por lo tanto, se debe ejecutar una columna de aire firme, realizando ejercicios de apoyo y control de la respiración, para así mismo tener una correcta emisión de un sonido y debido control del mismo.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/img-2A.png', alt='')
          .row(numero="2" titulo="Falta de dirección de la voz")
            .col-12.mb-4.mb-lg-0
              ul.lista-ul.mb-0.ms-3
                li 
                  i.fas.fa-check
                  p En varias ocasiones al cantar, se tiene que la voz no tiene una dirección; por lo tanto, se siente que el aire se dispersa y tiende a desafinarse. Es necesario tener una cultura de trabajo en la respiración en el diafragma y en el control del aire, en especial se debe tener un punto de dirección de la voz. 
                li 
                  i.fas.fa-check
                  p Este ejercicio se determina en fijar la voz que sale del cuerpo hacia un punto fijo situado a cierta distancia de frente, con el objetivo de controlar el aire, la emisión de las notas y su frecuencia sonora (altura o tono); esta emisión como es sabido, se logra por el uso de los resonadores, por lo tanto, es indispensable tener en cuenta la distancia a donde se quiera llegar, el proceso de resonancia y la direccionalidad del sonido para lograr un sonido afinado y limpio.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/img-2B.png', alt='')
          .row(numero="3" titulo="Desafinación por defecto")
            .col-12.mb-4.mb-lg-0
              p Los defectos físicos y/o causados por el abuso vocal o mala preparación de la voz. Entre estos defectos se encuentra la formación de nódulos o pólipos en las cuerdas vocales, los cuales son causantes de que el timbre vocal se oscurezca y se pierda la posibilidad de cantar suave y no poder realizar un “vibrato” al cambiar la onda compleja a la onda glotis. Por lo tanto, es necesario realizar ejercicios para dicho fin.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/img-2C.png', alt='')
          .row(numero="4" titulo="Desafinación por exceso de aire")
            .col-12.mb-4.mb-lg-0
              p Para poder hablar se necesita administrar el aire así mismo a la hora de cantar, se necesita más resistencia, pero se suele confundir la resistencia con la “cantidad de aire” que se necesita. El aire en el cuerpo en grandes cantidades, genera una presión, pues al tener mucha cantidad, se vuelve “incontrolable” y de esta manera al salir el sonido puede hacerlo desafinado. El sonido que buscado tiene que tener cuerpo y color, si no se controla mediante el apoyo y el control con el diafragma, la voz tiende a sonar gritada y a la vez desafinada.
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/img-2D.png', alt='')
          .row(numero="5" titulo="Defectos en la emisión de la voz")
            .col-12.mb-4.mb-lg-0
              ul.lista-ul.mb-0.ms-3
                li 
                  i.fas.fa-check
                  p En la afinación se sabe que, en cuanto a la técnica, la más pequeña alteración causa un defecto en la emisión de la voz; la tensión en la zona de la garganta hace que la voz suene “apretada”, forzada y rasgada. Asimismo, las tensiones pueden frenar el sonido, evitando que este se libere y en consecuencia el sonido queda afectado por las mucosas que recubren el conducto laríngeo y faríngeo. La voz se queda retenida en la parte interna del paladar, a consecuencia de una excesiva cobertura que evita su paso a los resonadores faciales, adquiriendo un color gutural que provoca dicha fijación; o se introduce en las fosas nasales, privándola de la calidad que le otorgan los resonadores fundamentales. La riqueza tímbrica de los resonadores faciales se consigue a través del paladar, principal receptor del sonido. Si, por el contrario, la voz se emitiese por las fosas nasales, el sonido perdería toda su calidad.
                li 
                  i.fas.fa-check
                  p Para lograr que la voz no pierda su brillantez es necesario apoyar el sonido desde las resonancias torácicas; de igual manera, la voz debe ser manejada a través del paladar y del perfecto control respiratorio, como si se exhalase una especie de aliento en forma de sonido. De esta manera es proyectada con la fuerza necesaria, mediante la exclusiva acción de los músculos respiratorios, los cuales actúan de manera automática, como cuando se tose o se ríe. 
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/img-2E.png', alt='')

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Técnicas y ejercicios interválicos de afinación

    p.mb-4(data-aos="fade-right") Es necesario reconocer algunos consejos para los ejercicios interválicos como los son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-8.col-12.mb-4.mb-lg-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Homogeneidad de la voz")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0.ms-3
                li 
                  i.fas.fa-check
                  p Es la manera de conservar la posición del sonido bien apoyado y atacado durante la ejecución vocal en toda la extensión de la voz.
                li 
                  i.fas.fa-check
                  p Cada nota debe tener su lugar propio en una voz bien impostada, tornándose de este modo imperceptible el paso de una a otra en la extensión de la voz.
                li 
                  i.fas.fa-check
                  p Es indispensable mantener las recomendaciones en cuanto a los ejercicios de apoyo y control, a través de la respiración costal-diafragmática para realizar un impulso del aire preciso de la voz conectándola con los resonadores.
          .row(titulo="Para notas graves")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0.ms-3
                li 
                  i.fas.fa-check
                  p Para manejar las notas graves es necesario cantar con la garganta abierta, como si se estuviera bostezando. Asimismo, relajar la laringe, pues es un órgano que regula la tensión de las cuerdas y potencia el rango bajo.
                li 
                  i.fas.fa-check
                  p No se recomienda forzar la laringe, en vez de esto se puede controlar y relajar para liberar tensión.
                li 
                  i.fas.fa-check
                  p Si es posible tocar la laringe con la mano mientras se canta, se debe reconocer si se inclina ligeramente en lugar de ir hacia arriba con el propósito de no generar tensiones.
                li 
                  i.fas.fa-check
                  p Se puede masajear la garganta suavemente con el ánimo de relajar los músculos asociados, la idea es mantener la laringe hacia abajo. Es importante conocer el rango vocal bajo ya que podemos ejercitar nuestra voz con el refuerzo de las escalas.
          .row(titulo="Para notas altas")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0.ms-3
                li 
                  i.fas.fa-check
                  p En cuanto la afinación, se debe tener una nota de referencia en el piano, hay que elegir la mejor nota del alto #[em medium], se procederá a cantar por semitonos en escala descendente, con la boca y la laringe distendidas y en una posición ligeramente “de bostezo”, emitiendo cada nota lo más próxima posible a la precedente y teniendo la sensación de cantarla aún más alta que esta.
                li 
                  i.fas.fa-check
                  p Empezar en la voz media y cantar subiendo y bajando por notas de grado conjunto; es decir, do-re-do, do-re-mi-re-do y así sucesivamente. Nunca forzar la voz.
                li 
                  i.fas.fa-check
                  p En las partes muy agudas, cuando los sonidos pasan por completo a la cabeza, la boca debe abrirse a lo ancho, los pómulos elevarse y se percibe el ascenso de la laringe. El diafragma, al elevarse, sigue el ascenso de la columna de aliento, la sostiene, la conduce, impidiendo de este modo la solución de continuidad del sonido. 
      .col-lg-4.col-8
        figure
          img(src='@/assets/curso/temas/tema1/img_1.png', alt='')

    p.mb-4(data-aos="fade-right") También, es importante realizar los siguientes ejercicios de interválica para la afinación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.col-12.tarjeta.tarjeta-rosa.px-lg-0.px-4.py-4
        .row.justify-content-center
          .col-lg-10.mb-4(data-aos="zoom-in-down")
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 Para empezar los ejercicios de intervalos es necesario tocar para escuchar y cantar en el piano o teclado intervalos por grados conjuntos de 2DA, 3RA, 4TA, 5TA descendiendo hasta do; por ejemplo: 2DA: do-re-do, 3RA: do-re-mi-re-do, 4TA: do-re-mi-fa-mi-re-do, 5TA: do-re-mi-fa-sol-fa-mi-re-do.
          .col-lg-10.mb-4(data-aos="zoom-in-down")
              figure.mb-2
                img(src='@/assets/curso/temas/tema1/img-3A.png', alt='')
          .col-lg-10.mb-4(data-aos="zoom-in-down")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 Para afinar estos intervalos se puede empezar a escucharlos en grado conjunto y realizar #[em glissandos] (es subir rasgando la nota hasta encontrar la afinación), por ejemplo: do (#[em glissandos]) sol y regresarse a la nota do. Se recomienda ir subiendo por grados conjuntos y devolverse hasta la nota fundamental; es decir, la nota que se empezó.
          .col-lg-10.mb-4(data-aos="zoom-in-down")
              figure.mb-2
                img(src='@/assets/curso/temas/tema1/img-3B.png', alt='')
          .col-lg-10.mb-4(data-aos="zoom-in-down")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 Se pueden afinar intervalos por grados conjuntos en grupo de cinco notas y subiendo por medios tonos, ejemplo: do, re, mi, fa, sol, fa, mi, re, do (se sigue medio tono arriba) do#¬¬¬¬¬, re#, mi # (o fa natural), fa#, sol#, fa#, mi#, re#, do#, re, mi, fa#, sol, la, sol, fa#, mi, re… hasta la nota más aguda de su rango vocal y luego descender a la nota más baja dependiendo de su rango vocal.
          .col-lg-10.mb-4(data-aos="zoom-in-down")
              figure.mb-2
                img(src='@/assets/curso/temas/tema1/img-3C.png', alt='')
          .col-lg-10.mb-4(data-aos="zoom-in-down")
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 La afinación de intervalos se puede realizar con variadas clases de articulación, por ejemplo: 
          .col-xl-5.col-lg-10.mb-4(data-aos="zoom-in-down")
            ul.lista-ul.mb-0.ms-3
              li 
                i.fas.fa-check
                p.mb-0 Realizando una vocal por cada nota: do, re, mi, fa, sol, fa, mi, re, do.
              li 
                i.fas.fa-check
                p.mb-0 Realizando una vocal diferente por cada nota: A, E, I, O, U (do, re, mi, fa, sol, fa, mi, re, do).
              li 
                i.fas.fa-check
                p.mb-0 Realizando varias combinaciones con consonantes: ba, be, bi, bo, bu, da, de, di, do, du, etc.
              li 
                i.fas.fa-check
                p.mb-0 Trino de labio: realizando ejercicios moviendo la lengua como: Rrrraaaaaaa, Rrreeeee, Rrrriiiiiiiiii, Rrrooooo, Rrruuuuuu.
              li 
                i.fas.fa-check
                p.mb-0 Trino de lengua: Realizando ejercicios moviendo los labios hacia afuera, haciendo que el aire mueva los labios como imitando una moto.
              li 
                i.fas.fa-check
                p.mb-0 Exagerar consonantes como la Ñ y colocando la voz nasal: ÑA, ÑE, ÑI, ÑO, ÑU y devolverse.
              li 
                i.fas.fa-check
                p.mb-0 Cuando se adquiera experiencia en los grados conjuntos, se pueden hacer ejercicios de afinación realizando intervalos de 2DA, 3RA, 4TA,5TA, 6TA, 7MA, a partir de la nota fundamental: do-re-do, do-mi-do, do-fa-do, do-sol-do, do-la-do, do-si-do.
          .col-xl-5.col-12.col-lg-10.mb-4(data-aos="zoom-in-down")
            .titulo-sexto.color-acento-contenido
              p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Intervalos musicales</i>
            figure.mb-2
              img(src='@/assets/curso/temas/tema1/img-3D.png', alt='Figura que relaciona la ejemplificación de los intervalos musicales.')

    p.mb-5(data-aos="fade-right") Para finalizar el tema de los intervalos, hay que tener en cuenta en un tema o estándar musical lo siguiente: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img_2.png', alt='')
      .col-lg-8.col-12
        ul.lista-ul.ul-color-a
          li 
            i.fas.fa-check
            p.mb-0 Es necesario escoger un tema musical, de acuerdo a líneas melódicas y que se ajusten donde se pueda sentir cómodo, respirar, apoyar el sonido, afinar los intervalos de las notas. Asimismo, recordar no esforzar la voz, ni intentar afinar en el mismo rango vocal de un cantante. Se puede escoger el tema, de acuerdo a la tonalidad que más se ajuste a las habilidades vocales.
          li 
            i.fas.fa-check
            p.mb-0 Se recomienda acompañarse con un instrumento si sabe tocar o por lo contrario bajar por internet o ver en YouTube una pista o karaoke, de acuerdo a las habilidades vocales. 
          li 
            i.fas.fa-check
            p.mb-0 Escuchar muy bien el tema musical, puede ser por frases, prestar atención en dónde respira el cantante. Se recomienda no reemplazar las notas de la melodía por otras y más si trata un tema muy conocido por los oyentes.
          li 
            i.fas.fa-check
            p.mb-0 Tratar de grabarse para reconocer cuáles son las fortalezas y debilidades respecto a la afinación; recordar que a veces se puede desafinar por tener mal apoyo en la respiración, por ello hay que practicar varias veces las frases que requieren mayor dificultad.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
