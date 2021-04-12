export const global = {
  componenteFormativo: 'Ser emprendedor',
  descripcionCurso:
    'Relacionar aspectos importantes respecto a la caracterización del emprendedor, el entorno económico en el cual creará su empresa, cómo hace parte del ecosistema de emprendimiento y conocer las formas en que puede organizarse y formalizarse además de conocer las entidades que en Colombia apoyan a los emprendedores',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'introduccion',
      icono: 'fas fa-info',
      titulo: 'Introducción',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Habilidades emprendedoras',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: '¿Cuáles son las motivaciones para emprender?',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Análisis DOFA',
          hash: 't_1_2',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Conceptos básicos de emprendimiento',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Clasificación de las empresas',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Tipos de sociedades en Colombia según su forma de asociarse',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2.1',
          titulo: 'Sociedades de personas',
          hash: 't_2_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2.2',
          titulo: 'Sociedades de capital',
          hash: 't_2_2_2',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Formalización empresarial',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema4',
      icono: 'far fa-file-alt',
      numero: '4',
      titulo: 'Ecosistema de emprendimiento',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema5',
      icono: 'far fa-file-alt',
      numero: '5',
      titulo: 'Entidades que apoyan el emprendimiento en Colombia',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '5.1',
          titulo: 'Gobierno nacional',
          hash: 't_5_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.2',
          titulo: 'Gobiernos locales',
          hash: 't_5_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.3',
          titulo: 'Aceleradoras e incubadoras',
          hash: 't_5_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.4',
          titulo: 'Universidades e Instituciones de Educación Superior',
          hash: 't_5_4',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Tania Yaneth Ramírez Benítez',
      cargo: 'Soporte organizacional',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Javier Enrique Santana',
      cargo: 'Experto temático',
      centro: 'Centro de Gestión Industrial',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Michael Andrés Cortés Caro',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Mauricio Jiménez Fajardo',
      cargo: 'Experto temático',
      centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
    },
    {
      nombre: 'Manuel Alejandro Garzón Cárdenas',
      cargo: 'Experto temático',
      centro: 'Deutsche Gesellschaft für',
      regional: 'Internationale Zusammenarbeit (GIZ)',
    },
    {
      nombre: 'Liliana Victoria Morales Gualdrón',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la Industria y la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Evaluador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Martha Isabel Martínez Vargas',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: ['Carlos Julian Ramirez Benitez', 'Zuleidy Maria Ruiz Torres'],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Ricardo Alfonso Gonzalez Vargas',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Alfaro Giménez, J., & Pina Massachs, M. (2014). Empresa y administración  (p. 10). Mc Graw Hill Educación. ',
    link: 'https://www.mhe.es/materia_familia.php?materia=5&nivel=C.',
  },
  {
    referencia: 'Apps.co (2020) ¿Qué es APSS:CO?',
    link: 'https://apps.co',
  },
  {
    referencia: 'Bancoldex. (2021) Líneas de crédito.',
    link: 'https://www.bancoldex.com/',
  },
  {
    referencia:
      'Cámara de Comercio de Bogotá (2009). Abc de las SAS Sociedades por acciones simplificadas.',
    link:
      'https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/14243/ABC%20DE%20LAS%20SAS.pdf?sequence=1&isAllowed=y',
  },
  {
    referencia:
      'Cámara de Comercio de Bogotá. (2016). Consejos para la creación de su empresa. [Video] YouTube.',
    link: 'https://youtu.be/n-Ut5dBry3Q',
  },
  {
    referencia:
      'Cámara de Comercio de Bogotá. (2016). Formalización empresarial CCB. [Video] YouTube.',
    link: 'https://youtu.be/Kt9g3lXgsOg',
  },
  {
    referencia: 'Cámara de Comercio de Bogotá. Formalice su empresa. CCB.',
    link: 'https://www.ccb.org.co/Cree-su-empresa/Formalice-su-empresa.',
  },
  {
    referencia: 'Fondo Nacional de Garantías (2021) Sobre el FNG Quienes somos',
    link: 'https://www.fng.gov.co/ES',
  },
  {
    referencia:
      'Global Entrepreneurship Monitor GEM. (2019). Dinámica de la actividad Empresarial en Colombia. Universidad ICESI. ',
    link:
      'https://repository.icesi.edu.co/biblioteca_digital/handle/10906/86241',
  },
  {
    referencia: 'iNNpulsa Colombia (2021). Nosotros.',
    link: 'https://www.innpulsacolombia.com/nosotros',
  },
  {
    referencia:
      'Isenberg, D. (2010). Cómo lanzar una revolución emprendedora. Harvard Business Review, 88 (págs., 33-40.',
  },
  {
    referencia:
      'Ley 1014 de 2006. De fomento a la cultura del emprendimiento. Enero 27 de 2006. DO. N° 46.164.',
  },
  {
    referencia:
      'Ley 905 de 2004, Por medio de la cual se modifica la Ley 590 de 2000 sobre promoción del desarrollo de la micro, pequeña y mediana empresa colombiana y se dictan otras disposiciones. 02 Ago, 2004 ',
  },
  {
    referencia:
      'Mason, C. & Brown, R. (2014). Entrepreneurial Ecosystems and Growth Oriented Entrepreneurship. Final Report to OECD, Paris. ',
    link: 'http://www.oecd.org/cfe/leed/Entrepreneurial-ecosystems.pdf',
  },
  {
    referencia: 'Minciencias (2021) Convocatorias.',
    link: 'https://minciencias.gov.co/convocatorias',
  },
  {
    referencia:
      'Sánchez, E. (1). El emprendimiento un reto hacia el desarrollo regional y local. Desarrollo & Gestión, (5). Recuperado a partir de',
    link: 'https://revistas.uniminuto.edu/index.php/DYG/article/view/443',
  },
  {
    referencia:
      'SENA (2016) Cartilla emprendimiento Centro de Servicios Financieros.',
    link: 'https://hdl.handle.net/11404/4646',
  },
]

export const glosario = [
  {
    termino: 'Administración',
    significado:
      'proceso de diseñar y mantener un ambiente en el cual las personas, trabajando en grupo, alcanzan con eficiencia las metas establecidas.',
  },
  {
    termino: 'Capital',
    significado:
      'es la suma de todos los recursos aportados por los propietarios, socios o accionistas (bienes y valores), para la constitución y puesta en marcha de una empresa.',
  },
  {
    termino: 'Crédito condonable',
    significado:
      'Créditos en los que las entidades absuelven del pago de capital e intereses al deudor, siempre y cuando se cumpla con condiciones previas expresas. ',
  },
  {
    termino: 'Emprendimiento',
    significado:
      'la palabra viene del francés entrepreneur (pionero), se refiere a la capacidad de hacer un esfuerzo adicional para alcanzar una meta siendo utilizada para identificar a quien comienza una empresa, término que fue ligado a empresarios innovadores o aquellos individuos que con su actividad generan inestabilidad en los mercados; actitud orientada a identificar y tomar oportunidades, siendo un instrumento de cambio cultural para crear y agregar valor.',
  },
  {
    termino: 'Competitividad',
    significado:
      'capacidad de la sociedad para hacerle frente al desafío de la economía global y al proceso de internacionalización, creando ventajas competitivas sostenibles y al mismo tiempo incrementar sus niveles de bienestar. Capacidad de competir eficientemente en los mercados incrementando a la vez los ingresos reales.',
  },
  {
    termino: 'Estrategia',
    significado:
      'programas generales de acción y despliegue de recursos para alcanzar los objetivos establecidos de tal forma que definan lo que es o debe ser el negocio de la compañía; forma concreta y específica de solucionar la situación, problema o necesidad del grupo con el cual está trabajándose.',
  },
  {
    termino: 'Impuestos:',
    significado:
      'pagos obligatorios de dinero que exige el estado a los individuos y empresas que no están sujetos a una contraprestación directa, con el fin de financiar los pagos propios de la administración del estado y la provisión de bienes y servicios de carácter público, tales como la administración de la justicia, gastos de defensa, subsidios, entre otros.',
  },
  {
    termino: 'Producción:',
    significado:
      'toda actividad del hombre que, a través de un proceso de transformación de insumos, materias primas y recursos naturales, obtiene bienes y servicios que sirven para satisfacer las necesidades humanas.',
  },
  {
    termino: 'Segmentación de mercado:',
    significado:
      'Separación del mercado de un artículo en las categorías de localización, personalidad u otras características para cada división.',
  },
]

export const complementario = [
  {
    texto: 'Apps.co (2020) ¿Qué es APSS:CO?',
    tipo: 'Página Web',
    link: 'https://apps.co',
  },
  {
    texto: 'Cali emprendedora (2021) Desarrollo empresarial. ',
    tipo: 'Página web',
    link: 'https://www.caliemprendedora.com/ideacion',
  },
  {
    texto:
      'Cámara de Comercio de Bogotá. (2016). Consejos para la creación de su empresa.',
    tipo: 'Video YouTube',
    link: 'https://youtu.be/n-Ut5dBry3Q',
  },
  {
    texto:
      'Cámara de Comercio de Bogotá. (2016). Formalización empresarial CCB.',
    tipo: 'Video YouTube',
    link: 'https://youtu.be/Kt9g3lXgsOg',
  },
  {
    texto: 'Créame (2020) Aceleración especializada. ',
    tipo: 'Página Web',
    link: 'https://www.creame.com.co/aceleracion-empresarial',
  },
  {
    texto: 'FNG (2021) Sobre el FNG Quienes somos',
    tipo: 'Página web',
    link: 'https://www.fng.gov.co/ES',
  },
  {
    texto: 'Fondo emprender (2021) ¿Quiénes somos?',
    tipo: 'Página web',
    link:
      'http://www.fondoemprender.com/SitePages/oldQue%20es%20FondoEmprender.aspx',
  },
  {
    texto: 'iNNpulsa Colombia (2021). Nosotros.',
    tipo: 'Página web',
    link: 'https://www.innpulsacolombia.com/nosotros',
  },
  {
    texto:
      'Ley 1014 de 2006. De fomento a la cultura del emprendimiento. Enero 27 de 2006. DO. N°46.164. ',
    tipo: 'PDF',
    link: '/download/complementarios/Ley_1014_de_2006.pdf',
  },
  {
    texto: 'Minciencias (2021) Convocatorias.',
    tipo: 'Página web',
    link: 'https://minciencias.gov.co/convocatorias',
  },
  {
    texto: 'RutaN ',
    tipo: 'Página web',
    link: 'https://www.rutanmedellin.org/es/',
  },
  {
    texto: 'Ventures (2020) Servicios  ',
    tipo: 'Página Web',
    link: 'https://ventures.com.co/site/servicios-ventures/',
  },
]
