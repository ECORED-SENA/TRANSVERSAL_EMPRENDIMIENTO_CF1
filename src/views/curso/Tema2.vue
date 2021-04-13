<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 2 
      .h3 Conceptos básicos de emprendimiento

    p Es importante tener claridad en ciertos aspectos para entender el concepto de emprendimiento. Todo emprendimiento se crea con la finalidad de ofrecer en el mercado un bien, que es un elemento tangible que permite cubrir un deseo o una necesidad, o para ofrecer un servicio el cual consiste en un conjunto de actividades que se ofrecen y que son intangibles. 

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-6
        p.text-center.tamno_text_2 Los bienes se pueden clasificar de dos formas según su función:

    .jumbo_blue_2.mt-3
      .row.justify-content-center.align-items-center
        .col-12.col-md-4
          img.img-col(src="@/assets/curso/tema_2/img_1.png")
        .col-12.col-md-5
          h2 Bienes de consumo
          p Son aquellos que satisfacen directamente las necesidades de las personas, son los resultantes de un proceso de producción. Estos a su vez, pueden ser: 

    .row.justify-content-center.align-items-center
      .col-12.col-md-11
        .tarjeta.tarjeta--verde.mb-5
          .row.justify-content-center
            .col-12.col-md-5.targeta_int_1.mt-4
              img.img-b(src="@/assets/curso/tema_2/img_2.png")
              h5.mt-4 Duraderos
                |
                p Como su nombre lo indica, pueden usarse prolongadamente en el tiempo. Por ejemplo,  una casa, un auto, o la maquinaria de producción. 
            .col-12.col-md-5.targeta_int.mt-4
              img.img-b(src="@/assets/curso/tema_2/img_3.png")
              h5.mt-4 No duraderos
                |
                p Los cuales se caracterizan por agotarse en un corto periodo de tiempo o inmediatamente. Por ejemplo, un jabón de manos, el aceite de cocina, o los bienes perecederos, como un producto alimenticio. 

          .row.justify-content-center.mt-3.mb-4
            .col-12.col-md-8
              p.text-center.tamno_text_2.p-4 Así mismo, los bienes de consumo se pueden clasificar según su grado de terminación, en: 

          .row.justify-content-center
            .col-12.col-md-5.targeta_int_1.mb-5
              img.img-b(src="@/assets/curso/tema_2/img_4.png")
              h5.mt-4 Bienes finales
                |
                p Son aquellos que se producen para ser utilizados por el consumidor y satisfacer su necesidad. Por ejemplo, una mesa, una camisa o un bolígrafo. 

            .col-12.col-md-5.targeta_int.mb-5
              img.img-b(src="@/assets/curso/tema_2/img_5.png")
              h5.mt-4 Bienes intermedios
                |
                p Estos se usan como parte de un proceso productivo para ser transformados en un bien final, por ejemplo el algodón que se utiliza para la fabricación de los textiles.  

    .jumbo_blue_2.mt-5
      .row.justify-content-center.align-items-center
        .col-12.col-md-6
          img.img-col(src="@/assets/curso/tema_2/img_6.png")
        .col-12.col-md-5
          h2 Bienes de capital:
          p Son aquellos que satisfacen de forma indirecta las necesidades, son utilizados para llevar a cabo el proceso de producción. Por ejemplo, la maquinaria que se requiere en una fábrica, la cual permanecerá por un tiempo prolongado en la empresa. 

    p.mt-5 La economía se encarga de facilitar el proceso de obtención de los bienes y servicios para cubrir las necesidades de las personas a través de la #[strong actividad económica], la cual debe pasar por diferentes fases:

    TabsB.mb-5.mt-5
      .py-4.py-md-5(titulo="La producción de bienes" :icono="require('@/assets/curso/tema_2/img_20.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 La producción de bienes 
            p En esta fase de la actividad económica es en la que se decide qué bienes hay que producir, qué servicios hay que ofrecer y qué recursos hay que utilizar para todo ello. En si es la actividad que realizan las empresas. 
        
          .col-md-6
            figure
              img.img-col(src='@/assets/curso/tema_2/img_17.png', alt='Texto que describa la imagen')
              
      .py-4.py-md-5(titulo="La distribución" :icono="require('@/assets/curso/tema_2/img_21.png')")
        .row              
          .col-md-6
            .h4 La distribución
            p Una vez finalizada la producción, los bienes deben llegar a los consumidores, y el proceso de distribución es el enlace entre la producción y el consumo; esta actividad también la realizan las empresas, aunque no sean las mismas encargadas de la producción.
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-col(src='@/assets/curso/tema_2/img_18.png', alt='Texto que describa la imagen')
        
      .py-4.py-md-5(titulo="El consumo" :icono="require('@/assets/curso/tema_2/img_22.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 El consumo
            p Lo realizan los consumidores, que son las personas que deciden qué bienes eligen entre todos los que se han producido en el mercado, teniendo en cuenta que son estos los que disponen de los recursos (dinero, que suele ser limitado) para adquirirlos. 
          .col-md-6.mb-4.mb-md-0
            figure
              img.img-col(src='@/assets/curso/tema_2/img_19.png', alt='Texto que describa la imagen')

    .cajon--azul.p-4.mb-5.mb-lg-0
      .p Ahora bien, para producir bienes y servicios, las empresas necesitan de recursos a los cuales se les 
      | denominan factores productivos, a saber: 

      .list.mt-3
        .list__item
          .list__item__bulletNumber
        .list__txt
          p.m-top  #[strong Los recursos naturales]. Es el conjunto de bienes que se obtienen de la naturaleza, son limitados y son susceptibles de agotarse, como el agua, la madera, los minerales, por ejemplo.
      .list.mt-3  
        .list__item
          .list__item__bulletNumber
        .list__txt
          p.m-top #[strong El trabajo]. Es la actividad física e intelectual realizada por las personas dedicadas a la producción. Se conoce también como la mano de obra.
      .list.mt-3
        .list__item
          .list__item__bulletNumber
        .list__txt
          p.m-top #[strong El capital]. Son os bienes de inversión necesarios para la producción de bienes y servicios, como las máquinas, locales, recursos financieros, etc. 

    p.mt-5 Para que se desarrollen todas las fases de la actividad económica, es necesario que los #[strong agentes económicos] tomen decisiones, estos agentes son tres: 

    .row.justify-content-center.mt-5
      .col-12.col-md-3
        .tarjeta.tarjeta--verde_1.mb-5.full-height
          img.img-b(src="@/assets/curso/tema_2/img_7.png")
          p.mt-3  
            strong Las familias 
          p.mt-3 Son los agentes económicos que deciden qué consumir, por una parte son propietarias de algunos factores de producción, como el trabajo, y por otra son los consumidores de bienes y servicios que producen las empresas.

      .col-12.col-md-3
        .tarjeta.tarjeta--verde_2.mb-5
          img.img-b(src="@/assets/curso/tema_2/img_8.png")
          p.mt-3 
            strong Las empresas  
          p.mt-3 Son los agentes que deciden qué se debe producir y distribuir.


      .col-12.col-md-3
        .tarjeta.tarjeta--verde_3.mb-5
          img.img-b(src="@/assets/curso/tema_2/img_9.png")
          p.mt-3 
            strong El estado 
          p.mt-3 O sector público es el agente conformado por las administraciones públicas encargadas del bienestar general de la sociedad.

    p.mb-5 Las empresas para realizar su actividad y producir bienes y servicios, necesitan de los factores de producción trabajo, capital y recursos naturales en algunos casos, que pertenecen a las familias. Como contrapartida, las empresas remuneran a las familias pagando unas rentas por el uso de los recursos productivos. En el caso del trabajo recibirán un salario, un interés o un dividendo, y en el caso de los recursos naturales un alquiler o renta. 

    p.mb-5 Con estas rentas, las familias podrán adquirir los bienes y servicios producidos por las empresas, de modo que estas obtendrán un dinero, con el que pagarán a las familias, produciendo así, todo un flujo circular denominado #[strong flujo circular de la renta] y el cual se observa gráficamente en la siguiente figura. 

    img.mt-5.img-a(src="@/assets/curso/tema_2/img_10.png")

    p.mt-3 Fuente: Alfaro Giménes & Pina Massachs. (2014)

    p.mt-5 Como se ha visto, la empresa es el motor de la actividad económica, por lo tanto se puede definir como la unidad económica de producción que combina diferentes recursos productivos para producir bienes y servicios que pone a disposición de los consumidores. Sus principales objetivos son generar valor económico, crear riqueza para todos sus componentes, incrementar su rentabilidad y ser responsable socialmente. 

    p.mt-5 Uno de los objetivos más claros para una empresa es el crecimiento, por lo cual debe recurrir a todas las opciones para crecer, tanto internamente al incrementar sus volúmenes de producción, las ventas y la cuota de mercado, como externamente, ampliando mercado

    .row.justify-content-center.mt-5
      .col-12.col-md-6
        p.text-center.tamno_text_2 Para producir bienes y servicios, las empresas requieren de: 

    .row.justify-content-center.mt-5
      .col-md.col-lg-3
        .tarjeta.tarjeta--verde_4.mb-5.full-height
          img.img-b(src="@/assets/curso/tema_2/img_11.png")
          p.mt-3  
            strong Talento humano, 
            | personas naturales, que se vinculan directamente con la empresa, desde los socios hasta los trabajadores.

      .col-md.col-lg-3
        .tarjeta.tarjeta--verde_5.mb-5
          img.img-b(src="@/assets/curso/tema_2/img_12.png")
          p.mt-3 
            strong Materiales e intangibles, 
            | que son los bienes económicos de la empresa, maquinarias, mobiliarios, materias primas, etc. 



      .col-md.col-lg-3
        .tarjeta.tarjeta--verde_6.mb-5
          img.img-b(src="@/assets/curso/tema_2/img_13.png")
          p.mt-3 
            strong Organización, 
            | entendida como el conjunto de relaciones de autoridad, de coordinación y comunicación que forman la actividad del grupo humano entre si y con el exterior, esta estructura la define el empresario. 

      .col-md.col-lg-3
        .tarjeta.tarjeta--verde_7.mb-5
          img.img-b(src="@/assets/curso/tema_2/img_14.png")
          p.mt-3 
            strong Entorno, 
            | que son todos aquellos factores que condicionan la actuación del empresario y por consiguiente de la empresa, entre ellos el entorno físico, económico, sociocultural, político, jurídico, ético.

    p Cuando el emprendedor toma la decisión de poner en marcha una empresa debe contemplar los factores anteriormente mencionados, además de contar con una o varias personas que estén dispuestas a invertir en la nueva empresa para adquirir los factores de producción necesarios para llevar a cabo la iniciativa del emprendedor y que además sean capaces de organizar y gestionar todos estos recursos de la mejor manera posible, de esta forma se convertirá en un #[strong empresario]. 

        
    #t_2_1.titulo-segundo.mt-5
      .h4 2.1 Clasificación de las empresas

    p Existen muchos tipos de empresas, con grandes diferencias entre ellas, esta variedad permite realizar diversas clasificaciones según distintos aspectos que se pueden observar en la siguiente tabla.

    table.justify-content-center.mt-5
        
      tr.border_table
        th(rowspan="4").text-center.color_1 Tamaño
        td.color_table_1 Microempresas
        td.color_table_2 0 – 10 trabajadores. 

      
      
      tr.border_table
        td.color_table_1 Pequeñas
        td.color_table_2 11 – 50 trabajadores. 

      tr.border_table
        td.color_table_1 Medianas 
        td.color_table_2 51 – 200 trabajadores.

      tr.border_table
        td.color_table_1 Grandes
        td.color_table_2 Mas de 201 trabajadores. 

      tr.border_table
        th(rowspan="4").text-center.color_1 Actividad
        td.color_table_1 Sector primario 
        td.color_table_2 Empresas dedicadas a la obtención de recursos naturales. 

      tr.border_table 
        td.color_table_1 Sector secundario
        td.color_table_2 Incluye empresas dedicadas a actividades industriales o de transformación. 

      tr.border_table
        td.color_table_1 Sector terciario
        td.color_table_2 Empresas dedicadas a actividades comerciales y de servicios.
      
      tr.border_table 
        td.color_table_1 Sector cuaternario 
        td.color_table_2 Empresas que realizan actividades de desarrollo e investigación de nuevas tecnologías. 

      tr.border_table
        th(rowspan="5").text-center.color_1 Zona geográfica
        td.color_table_1 Locales  
        td.color_table_2 Desarrollan su actividad en una sola ciudad o municipio del país. 

      tr.border_table
        td.color_table_1 Regionales	
        td.color_table_2 Desarrollan sus actividades en varias regiones del país.  

      tr.border_table
        td.color_table_1 Nacionales 	
        td.color_table_2 Desarrollan sus actividades en un solo país. 

      tr.border_table
        td.color_table_1 Internacionales 	
        td.color_table_2 Operan en un país, pero exportan su producción a otros países.

      tr.border_table
        td.color_table_1 Multinacionales	
        td.color_table_2 Tienen filiales en otros países, para la producción o venta. 

      tr.border_table 
        th(rowspan="2").text-center.color_1 Destino de los beneficios 
        td.color_table_1 Con ánimo de lucro 	
        td.color_table_2 Las utilidades que obtienen se reinvierten total o proporcionalmente en sus propietarios.

      tr.border_table
        td.color_table_1 Sin ánimo de lucro	
        td.color_table_2 Las utilidades se destinan exclusivamente a fines sociales o al crecimiento y no a remunerar a los propietarios. 

      tr.border_table 
        th(rowspan="3").text-center.color_1 Propiedad del capital 
        td.color_table_1 Privada 	
        td.color_table_2 La propiedad es de personas naturales o jurídicas particulares. 

      tr.border_table
        td.color_table_1 Pública 	
        td.color_table_2 La propiedad es del estado o entidades de carácter público. 

      tr.border_table
        td.color_table_1 Mixta 	
        td.color_table_2 La propiedad se comparte entre el estado y los particulares. 

      tr.border_table
        th(rowspan="2").text-center.color_1 Forma jurídica 
        td.color_table_1 Unipersonal  	
        td.color_table_2 El propietario es una sola persona.

      tr.border_table
        td.color_table_1 Social 	
        td.color_table_2 Uno o varios propietarios, que se asocian bajo distintas modalidades jurídicas, que aportan capital para su explotación.

    #t_2_2.titulo-segundo.mt-5
      .h4 2.2 Tipos de sociedades en Colombia según su forma de asociarse

    p.mt-3 Una de las primeras decisiones que debe tomar el empresario a la hora de crear empresa es la elección de la forma jurídica, con la cual realizará sus actividades, en Colombia las sociedades comerciales se caracterizan por: 

    .cajon--azul.p-4.mb-5.mb-5-lg-0.mt-5
      ul.list-unstyled
        li.d-flex.mb-2
          .col-1.col-md-1.vineta
            img.img-col(src="@/assets/curso/tema_1/img_2.png")
          .col-12.col-md-11
            p El número de socios o accionistas, que se requiere para realizar actos mercantiles a través de una sociedad, depende del tipo de sociedad que se va a constituir. 

        li.d-flex.mb-2
          .col-1.col-md-1.vineta
            img.img-col(src="@/assets/curso/tema_1/img_2.png")
          .col-12.col-md-11
            p Los socios o accionistas pueden aportar a la sociedad dinero, bienes o trabajo. 

        li.d-flex.mb-2
          .col-1.col-md-1.vineta
            img.img-col(src="@/assets/curso/tema_1/img_2.png")
          .col-12.col-md-11
            p Su objetivo es obtener rentabilidad y distribuirla entres si, al igual que las pérdidas según su participación. 

        li.d-flex.mb-2
          .col-1.col-md-1.vineta
            img.img-col(src="@/assets/curso/tema_1/img_2.png")
          .col-12.col-md-11
            p Se constituyen como una persona jurídica, la cual es diferente de los dueños y tiene un patrimonio propio, protegiendo así el patrimonio personal de cada accionista, aunque en algunos desaparece dicha limitación de acuerdo a la normatividad a aplicar según su forma de constitución. 

        li.d-flex
          .col-1.col-md-1.vineta
            img.img-col(src="@/assets/curso/tema_1/img_2.png")
          .col-12.col-md-11
            p Se constituyen por escritura pública o documento privado. 

    p En Colombia las sociedades comerciales se clasifican según su forma de asociarse en dos 
      br
      | grandes grupos: #[strong sociedades de personas y sociedades de capital.]

    #t_2_2_1.titulo-segundo.mt-5
      .h5 2.2.1 Sociedades de personas

    p.mb-5 En este tipo de asociación lo que más importa es quienes la conforman, más que el capital aportado. Generalmente son creadas por familiares y personas cercanas, #[strong entre ellas están:] 

    AcordionA.mb-5(clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-around.align-items-center(titulo="Sociedad colectiva.")
        P Compuesta por mínimo dos integrantes quienes responden solidaria e ilimitadamente por las operaciones de la empresa y su razón social se forma con el nombre completo o el solo apellido de alguno(s) de los socio(s) seguido de las expresiones “& Compañía”, “Hermanos”, “e Hijos” u otras analogías. No podrá incluirse el nombre de un extraño. 
      .row.justify-content-around.align-items-center(titulo="Sociedad en comandita simple.")
        p Compuesta por dos tipos de socios, los comanditarios y los simples, los comanditarios tienen responsabilidad limitada según sus aportes, y los socios colectivos tienen responsabilidad ilimitada, quienes aportan capital o trabajo, cuentan con un socio gestor y máximo 25 socios comanditarios y su razón social se forma con el nombre completo o el solo apellido de uno o más de los socios colectivos y se agregará la expresión “& Compañía”, seguida en todo caso de la indicación S. en C. “sociedad en comandita simple”.
      .row.justify-content-around.align-items-center(titulo="Sociedad de responsabilidad limitada.")
        p Compuesta con mínimo 2 socios y un máximo de 25, quienes responden hasta el monto de sus aportes, con excepción de las obligaciones laborales y tributarias donde su responsabilidad es solidaria, su razón social irá seguida de la palabra “limitada” o su abreviatura “Ltda.”
      .row.justify-content-around.align-items-center(titulo="Empresa Unipersonal.")
        p Se compone por una persona natural o jurídica y la responsabilidad se limita al valor de los bienes que aporta a la sociedad, su razón social se constituye por un nombre seguido de la expresión “empresa unipersonal” o la sigla “E.U.”

    #t_2_2_2.titulo-segundo.mt-5
      .h5 2.2.2 Sociedades de capital

    p.mb-5 En estas sociedades lo más importante es el aporte económico, cada socio o accionista es valorado por su aporte al capital social y el objetivo de la sociedad es la generación de rendimientos. #[strong En esta clasificación se encuentran:] 

    AcordionA.mb-5(clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-around.align-items-center(titulo="Sociedad anónima.")
        P Cuenta con un mínimo de 5 accionistas su responsabilidad se limita de acuerdo con el aporte de capital en la misma sociedad, al aporte se le denomina acciones y se representa con las siglas “S.A.”
      .row.justify-content-around.align-items-center(titulo="Sociedad comandita por acciones.")
        p Cuenta con un mínimo de 5 accionistas, y 1 socio gestor o colectivo, los socios gestores tienen responsabilidad solidaria e ilimitada y los socios comanditarios con responsabilidad limitada según su aporte, que se representa en acciones, su razón social se representa con el solo apellido de uno o más socios colectivos seguidos de la sigla “ & Cía. S.C.A.”
      .row.justify-content-around.align-items-center(titulo="Sociedad por acciones simplificada.")
        p Cuenta como mínimo 1 socio o más socios, con responsabilidad limitada al monto aportado y su razón social se representa con el nombre de la empresa seguido de la expresión “S.A.S.”
      .row.justify-content-around.align-items-center(titulo="Sociedad de economía mixta.")
        p Son sociedades constituidas con aportes de empresas públicas y privadas y pueden desarrollar actividades industriales y comerciales. Se sujetan a las reglas del derecho privado y a la jurisdicción ordinaria, salvo disposición legal en contrario. Su razón social estará acompañada de la palabra “limitada” o su abreviatura “Ltda.”

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
