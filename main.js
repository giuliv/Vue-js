var app = new Vue({
    el: '#app',
    data: {
      message: 'Hola Mundo!'
    }
  })

  var datos = new Vue({
      el:"#tcategorias",
      data:{
          datos:[]
  },
  created: function(){
      this.leerCategorias();
  },
  methods:{
      leerCategorias: function(){
          fetch("https://pix.pe/servicioandroid/serviciocategorias.php")
          .then(response => response.json())
          .then(json => (this.datos=json));
      }
    }
  });