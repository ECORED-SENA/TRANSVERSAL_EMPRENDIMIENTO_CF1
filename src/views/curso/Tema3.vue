<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 3 
      .h3 Formalización empresarial
    
    .row.justify-content-center
      .col-12.col-md-5
        p.text-right #[strong En Colombia existen varias entidades que se relacionan directamente con la formalización de toda empresa, como la Dirección de Impuestos y Aduanas Nacionales (DIAN), las Cámaras de Comercio y las Entidades Bancarias], la formalización bajo la normatividad vigente, ayuda al emprendedor a que su negocio crezca, a convertirse en proveedor de otras empresas y así llegar a otros mercados, además de abrir las posibilidades a obtener créditos y participar en programas del Gobierno que acompañan y fomentan las actividades de los emprendedores. 
      .col-12.col-md-6
        .imagen-titulo--izq
          figure.mb-5
            img.img-col(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen')

          .imagen-titulo__titulo
            .h4.m-0.titulo_blanco Emprendedores

    h4.mb-5 Algunos de estos pasos son: 

    .row.justify-content-left.align-items-center.mt-5 
      .col-12.col-md-10
        .row.justify-content-left
          .col-12.col-md-1
            h4.span.green 1
          .col-12.col-md-9
            p.mt-2 Verificar la disponibilidad del nombre elegido para la empresa en la Cámara de Comercio de su región.

    .row.justify-content-left.align-items-center
      .col-12.col-md-10
        .row.justify-content-left
          .col-12.col-md-1
            h4.span.green 2
          .col-12.col-md-9
            p.mt-2 Consultar la clasificación de acuerdo con su actividad económica.
    
    .row.justify-content-left.align-items-center
      .col-12.col-md-10
        .row.justify-content-left
          .col-12.col-md-1
            h4.span.green 3
          .col-12.col-md-9
            p.mt-2 Elegir el tipo de sociedad de acuerdo a su tipo de asociación y su composición de capital.

    .row.justify-content-left.align-items-center
      .col-12.col-md-10
        .row.justify-content-left
          .col-12.col-md-1
            h4.span.green 4
          .col-12.col-md-9
            p.mt-2 Realizar los trámites correspondientes ante la Cámara de Comercio y la Dirección de Impuestos Nacionales – DIAN.

    .row.justify-content-left.align-items-center
      .col-12.col-md-10
        .row.justify-content-left
          .col-12.col-md-1
            h4.span.green 5
          .col-12.col-md-11
            p.mt-2 Realizar los trámites ante notaría pública para la constitución de la sociedad, si la sociedad cuenta con menos de 10 empleados al momento de la constitución o hasta 500 salarios mínimos legales vigentes en activos fijos no requieren de constitución registrada ante notario público.

    p.mt-5 Tenga en cuenta que de acuerdo con el tipo de sociedad creada y el monto de los aportes, los trámites pueden cambiar de forma sustancial.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
