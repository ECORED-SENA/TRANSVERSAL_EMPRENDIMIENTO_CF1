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

    p.mt-5 El ecosistema de emprendimiento según Isenberg (2010) contempla seis dominios principales que ayudan a entender con mayor detalle el entorno en el cual se desarrollará el emprendimiento con el fin de generar riqueza para el emprendedor, su entorno y su país, estos son:

    TabsA.mb-5.mt-5
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="1. Políticas públicas")
        h4 Políticas públicas
        p Corresponde al apoyo que genera el estado en un ecosistema de emprendimiento y al desarrollo de los emprendimientos en un país, en el caso colombiano el estado desde hace algunos años ha generado beneficios para el desarrollo de emprendimientos, como  beneficios fiscales, creación de entidades que apoyan los emprendimientos como el Fondo Emprender o INNPULSA, leyes que apoyan a los emprendedores cuando estos presentan algún tipo de dificultad financiera para que no tengan que verse abocados al cierre definitivo de sus empresas, como lo es la  Ley 1116  del 2006.
      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="2. Financiación")
        h4 Financiación
        p Se relaciona con los mecanismos que apalancan el nacimiento y crecimiento de empresas,  el gobierno nacional también ha apoyado procesos de emprendimiento en regiones apartadas, al emprendimiento de género, y en distintas comunidades, creando leyes que faciliten el ingreso de capitales para inversión, asi como, facilitando el microcrédito entre los emprendedores; también existen facilitadores para el desarrollo de emprendimientos, como son los ángeles inversionistas, los fondos de capital de riesgo, la deuda financiera, entre otros. 

      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="3. Cultura emprendedora")
        h4 Cultura emprendedora
        p Corresponde a las condiciones propicias para el desarrollo de emprendedores desde la sociedad civil,  en este aspecto las universidades y los mismos colegios desde hace ya algunos años entre sus currículos contemplan la cátedra de emprendimiento o crean espacios donde fomentan el proceso emprendedor entre los estudiantes, para el caso de las universidades algunos ángeles inversionistas se interesan apoyando el desarrollo de estas ideas de emprendimiento.

      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="4. Capital humano")
        h4 Capital humano
        p Corresponde a la manera como se crean las capacidades requeridas por las personas para la generación de nuevas empresas exitosas, acordes con las potencialidades locales,  con el fin de crear y mejorar la mano de obra calificada en Colombia el gobierno nacional ha aportado recursos financieros para el fortalecimiento de entidades de educación como el SENA y procesos de capacitación presencial y virtual para toda la población nacional. 

      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="5. Acceso a mercados")
        h4 Acceso a mercados
        p Se relaciona con los mecanismos que permiten al empresario llegar a más y mejores clientes,  en este punto es importante la creación de redes de emprendedores, donde desde allí puedan presentar sus productos a los futuros consumidores, creación de market place o creación de oportunidades de negocio a nivel global.

      
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="6. Servicios de apoyo")
        h4 Servicios de apoyo
        p Comprende los actores claves y la infraestructura adecuada para la actividad empresarial (instituciones no gubernamentales, profesionales de apoyo), en este punto el gobierno nacional con el fin de apoyar y facilitar el desarrollo de los mercados, está mejorando las vías primarias y terciarias con el fin de agilizar el proceso de movimiento de mercancías, mejorando algunos corredores férreos y realizando inversión en aeropuertos y puertos marítimos, también ha mejorado la conectividad de la infraestructura nacional de internet, permitiendo también el ingreso de nuevos operadores y así buscando reducción de tarifas y el servicio que prestan los diferentes operadores.

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
