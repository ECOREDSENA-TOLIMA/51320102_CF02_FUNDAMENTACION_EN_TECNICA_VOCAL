export default {
  global: {
    componenteFormativo: 'El canto y la rítmica musical',
    descripcionCurso:
      'Tener los conocimientos teórico-prácticos básicos de una adecuada técnica vocal, como son la respiración, la articulación, la dicción, la vocalización, la fonación y la resonancia, ayudan a adquirir un canto afinado. Además, es importante saber que el ritmo, es la columna vertebral de la música que da forma, dirección y expresión a las composiciones musicales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Afinación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de afinación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas y ejercicios interválicos de afinación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Registros y tesituras vocales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ritmo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Organización',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Duración',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fraseo (frase musical)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de fraseo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de fraseo en un estándar musical',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ejercicios rítmicos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_51320102.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. Ritmo',
      referencia: 'Riversa, A. (2024). <em>Qué es el tempo.</em>',
      tipo: 'Artículo web',
      link: 'https://www.unprofesor.com/musica/que-es-el-tempo-301.html',
    },
  ],
  glosario: [
    {
      termino: 'Acento',
      significado:
        'es la fuerza o énfasis que se le pone a los sonidos que se hace con más fuerza.',
    },
    {
      termino: 'Compás',
      significado:
        'es la ordenación de los pulsos fuertes y débiles. Los compases más usados están formados por dos, tres o cuatro pulsos (también llamados tiempos o partes). Según la distribución del acento se distribuyen en binarios, ternarios y cuaternarios.',
    },
    {
      termino: 'Pulso',
      significado:
        'es la sensación regular y constante que se oye en la música, es como el latido interno de la música. Cuando se escucha una canción y se acompaña de forma espontánea, dando palmas con un ritmo regular, lo que se toca tocando es la pulsación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cordantonopulos, V. (2002). <em>Curso completo de Teoría de la Música.</em> ',
      link: '',
    },
    {
      referencia:
        'Esperanza de vida (2016). Tutorial de voz: Fraseo- Respiración. [Archivo video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=XnMYUxcmggY',
    },
    {
      referencia:
        'Guiral, C. (2015). <em>Tutorial Técnica Vocal.</em> Afinación Vocal. [Archivo video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=pOOre89OTHA',
    },
    {
      referencia:
        'Justel, E. (s.f.). <em>El Santo Grial de los registros vocales.</em> ',
      link: 'https://vox-technologies.com/blog/registros-vocales',
    },
    {
      referencia:
        'Latham, A. (2008). <em>Diccionario enciclopédico de la música.</em> Fondo de cultura económica. México ',
      link: '',
    },
    {
      referencia:
        'Martín, L. (s.f.). <em>Taller de voz y vocalización.</em> Grupo de Formación en Narración Oral de la Universidad Nacional. Editorial Normas tejedores de historia.',
      link: '',
    },
    {
      referencia:
        'Miguel Manzo Vocal Studio. (2016). <em>Técnica Vocal - Que son el Grit, Fry, Falsetto, Aire, Growl. Consejos para Cantar Mejor.</em> [Archivo video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=eC5RxoWCXDI',
    },
    {
      referencia:
        'Soto, M. (2004). <em>Manual de técnica vocal, cultura general y ética profesional.</em> Conservatorio Nacional de Música. CONAMU. ',
      link: '',
    },
    {
      referencia:
        'Universidad Técnica Federico Santa María. (s.f.). <em>Teoría Musical.</em> ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Claudia Rocío Varón Buitrago',
          cargo: 'Senior equipo de adecuación',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ángela Rocío Ortegón Merchán',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ángela Patricia Frasser Castaño',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Genny Carolina Mora Rojas',
          cargo: 'Guionista',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jesús Bernardo Nova Ortiz',
          cargo: 'Guionista',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
