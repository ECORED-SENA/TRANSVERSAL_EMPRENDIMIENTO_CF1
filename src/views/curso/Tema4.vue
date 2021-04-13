<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 4 
      .h3 Ecosistema de emprendimiento
    
    p.mb-5 Para comprender el ecosistema de emprendimiento primero es necesario conocer su definición, según Mason y Brown (2014) 

    .row.justify-content-center.align-items-center
      .col-12.col-md-9.d-flexposition-relative 
        .tarjeta--azul_1.p-4.mb-5.mb-lg-0
          .p.mb-5 #[strong Un ecosistema de emprendimiento es un conjunto de emprendedores interconectados (potenciales y existentes)], organizaciones emprendedoras (por ejemplo, empresas, fondos de inversión, bancos, ángeles inversionistas), instituciones (universidades, agencias del sector público, organismos financieros) y procesos de seguimiento al emprendimiento (por ejemplo, tasa de creación de empresas, número de firmas con alto crecimiento, porcentaje de éxito empresarial) que formal e informalmente se fusionan para conectar, mediar y dirigir el rendimiento del emprendimiento en una región. (pág. 5) 

    .row.justify-content-center
      .col-12      
        div.img-c
          img.img-a(src="@/assets/curso/tema_4/img_1.png")

    
    .tarjeta.tarjeta--azul_oscuro.p-4.p-md-5.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-4.col-sm-6.col-md-3.mb-4.mb-md-0
          img.img-col(src="@/assets/curso/tema_4/img_2.svg")

        .col-md.col-lg-6
          p.mb-3 El ecosistema de emprendimiento según Isenberg (2010) contempla seis dominios principales que ayudan a entender con mayor detalle el entorno en el cual se desarrollará el emprendimiento con el fin de generar riqueza para el emprendedor, su entorno y su país, estos son:
          
          a.boton.boton--b(:href="obtenerLink('/downloads/Temas_4_Ecosistema_de_emprendimiento.pdf')" target="_blank" type="application/pdf")
            span Descargar Recurso
            i.fas.fa-file-download

    

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
