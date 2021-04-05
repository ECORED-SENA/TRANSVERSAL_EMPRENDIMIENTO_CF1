<template lang="pug">
.curso-main-container
  BannerInterno(titulo="4. Ecosistema de emprendimiento")
  .container.tarjeta--blanca.p-4.p-md-5.mb-5
    p Para comprender el ecosistema de emprendimiento primero es necesario conocer su definición, según Mason y Brown (2014) 

    .row.justify-content-center.align-items-center
      .col-12.col-md-9.d-flexposition-relative 
        .tarjeta.tarjeta--azul-claro.mt-5
          .p #[strong Un ecosistema de emprendimiento es un conjunto de emprendedores interconectados (potenciales y existentes)], organizaciones emprendedoras (por ejemplo, empresas, fondos de inversión, bancos, ángeles inversionistas), instituciones (universidades, agencias del sector público, organismos financieros) y procesos de seguimiento al emprendimiento (por ejemplo, tasa de creación de empresas, número de firmas con alto crecimiento, porcentaje de éxito empresarial) que formal e informalmente se fusionan para conectar, mediar y dirigir el rendimiento del emprendimiento en una región. (pág. 5) 
          br
          br
        div.img-c
          img.img-a(src="@/assets/curso/tema_4/img_1.png")

    p.mt-5 El ecosistema de emprendimiento según Isenberg (2010) contempla seis dominios principales que ayudan a entender con mayor detalle el entorno en el cual se desarrollará el emprendimiento con el fin de generar riqueza para el emprendedor, su entorno y su país, estos son:


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
