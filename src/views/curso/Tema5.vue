<template lang="pug">
.curso-main-container
  BannerInterno(titulo="5. Entidades que apoyan el emprendimiento en Colombia")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    p En nuestro país a partir de la Ley 905 de 2004, se creó el Sistema Nacional de Apoyo a las Mipymes para articular de forma estratégica entidades del sector financiero y entidades del Gobierno nacional, que respaldan al emprendimiento en Colombia, así como para apoyar a los emprendedores y empresarios quienes son los dinamizadores de la economía. 


    .row.justify-content-center.align-items-center
      .col-12.col-md-9.d-flexposition-relative 
        .tarjeta.tarjeta--azul-claro.mt-5
          .p El Gobierno nacional ha iniciado esfuerzos para el apoyo a las micro, pequeñas y medianas empresas que permitan incrementar la dinámica económica del país, a través de estrategias y programas liderados por el SENA con el Fondo Emprender y el Sistema Nacional de Creación e Incubación de empresas que le brinda a los aprendices SENA de formación titulada técnica o tecnológica, y universitarios de pre y posgrado, capacitación y recursos económicos condonables. SENA (2016)

          br
          br
        div.img-c
          img.img-a(src="@/assets/curso/tema_5/img_1.png")

    p.mt-5 Existen diferentes alternativas de financiamiento para los emprendedores, quienes pueden beneficiarse de las instituciones y estrategias de apoyo a las iniciativas y los proyectos productivos sostenibles, mediante el acceso a firmas que apoyan el emprendimiento en Colombia.


    #t_5_1.pb-5.h2.mt-5 5.1 Gobierno nacional

      .row.justify-content-center.mt-5
        .col-12.col-md-5
          p.text-right.tamno_text_2 El gobierno nacional promueve el desarrollo empresarial con programas especiales, como #[strong iNNpulsa] Colombia o #[strong Apps.co]. 

        .col-12.col-md-5
          img.img-col(src="@/assets/curso/tema_5/img_2.png")

    #t_5_2.pb-5.h2 5.2 Gobiernos locales

      .row.justify-content-center.mt-5
        .col-12.col-md-5
          p.text-right.tamno_text_2 Algunas de las entidades que a nivel gubernamental local apoyan a los emprendedores, son: 

        .col-12.col-md-5
          img.img-col(src="@/assets/curso/tema_5/img_3.png")

      p.mt-5 Ante la necesidad de impulsar el emprendimiento en Colombia, cada región del país trabaja para impulsar iniciativas emprendedoras de forma que el ecosistema regional de emprendimiento es cada vez más sólido, generando nuevas oportunidades y desarrollo económico. 

    #t_5_3.pb-5.h2 5.3 Aceleradoras e incubadoras

      .row.justify-content-center.mt-5
        .col-12.col-md-5
          img.img-col(src="@/assets/curso/tema_5/img_4.png")
        .col-12.col-md-5
          h6 Las aceleradoras de emprendimientos 
          p son entidades privadas que invierten en startups y empresas que están surgiendo a cambio de participación en el negocio, su éxito depende del desempeño de las empresas aceleradas, por lo que también ofrecen soporte de gestión y orientación de profesionales calificados, para que el nuevo negocio alcance otro nivel más rápido del que conseguiría por cuenta propia.

      .row.justify-content-center.mt-5
        .col-12.col-md-5
          h6.text-right Las incubadoras
          p.text-right por su parte son entidades que apoyan las iniciativas de los emprendedores durante las primeras etapas de constitución de su empresa. El acompañamiento que realizan las incubadoras permite que aumente la tasa de supervivencia de las nuevas empresas. Generalmente ofrecen servicios de asistencia y asesoría en planes de negocio, capacitaciones, propiedad intelectual, mercadeo, entre otros aspectos que requiere el emprendedor. 
        .col-12.col-md-5
          img.img-col(src="@/assets/curso/tema_5/img_5.png")

    #t_5_4.pb-5.h2 5.4 Universidades e Instituciones de Educación Superior    

    p Las unidades de emprendimiento que existen al interior de las universidades e IES toman distintos nombres, sin embargo, su propósito es el mismo: promover el emprendimiento universitario dentro de lo cual desarrollan jornadas de sensibilización, ferias empresariales, charlas y conferencias.  

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-9.d-flexposition-relative 
        .tarjeta.tarjeta--azul-claro
          .p En algunas unidades de emprendimiento #[strong existen grupos de expertos que acompañan la formulación de planes de negocio], la construcción de modelos de negocio, la presentación a fuentes de financiación y en ocasiones, acompañan la puesta en marcha de las empresas. 

          br
          br
        div.img-c
          img.img-a(src="@/assets/curso/tema_5/img_6.png") 


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
