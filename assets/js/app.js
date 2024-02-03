const propiedades = [
  {
    imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    titulo: "Apartamento de lujo en zona exclusiva",
    detalle: " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    hab: "4 Habitaciones |",
    banos: "4 Baños",
    precio: "5.000",
    pet: false,
    smoke: false,
    sale: true
  },

  {
    imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    titulo: "Apartamento acogedor en la montaña",
    detalle: " Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    hab: "2 Habitaciones |",
    banos: "1 Baño",
    precio: "1.200",
    pet: true,
    smoke: true,
    sale: true
  },

  {
    imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    titulo: "Penthouse de lujo con terraza panorámica",
    detalle: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    hab: "3 Habitaciones |",
    banos: "3 Baños",
    precio: "4.500",
    pet: false,
    smoke: true,
    sale: true
  },

  {
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Apartamento en el centro de la ciudad",
    detalle: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    hab: "2 Habitaciones",
    banos: " 2 Baños",
    precio: "2.000",
    pet: false,
    smoke: true
  },


  {
    imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    titulo: "Apartamento luminoso con vista al mar",
    detalle: "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    hab: " 3 Habitaciones",
    banos: " 3 Baños",
    precio: "2.500",
    pet: true,
    smoke: true
  },


  {
    imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    titulo: "Condominio moderno en zona residencial",
    detalle: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    hab: " 2 Habitaciones",
    banos: " 2 Baños",
    precio: "2.200",
    pet: false,
    smoke: false
  },

  {
    imagen: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Cabaña en montaña",
    detalle: "Acogedora cabaña en el corazon del bosque",
    direccion: "Skykomish, Skykomish, United States",
    hab: " 2 Habitaciones",
    banos: " 2 Baños",
    precio: "8.200",
    pet: true,
    smoke: true
  },

  {
    imagen: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Cabaña en lago",
    detalle: "Acogedora cabaña con clima invernal",
    direccion: "Emerald Lake, Canada",
    hab: " 4 Habitaciones",
    banos: " 2 Baños",
    precio: "10.200",
    pet: true,
    smoke: false
  },

  {
    imagen: "https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Casa de playa",
    detalle: "Frente al mar",
    direccion: "Cas abao Beach Z/n, Willemstad",
    hab: " 5 Habitaciones",
    banos: " 3 Baños",
    precio: "16.000",
    pet: true,
    smoke: true
  },

  {
    imagen: "https://images.unsplash.com/photo-1599313354145-2329b2dd172e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Cabaña en rio",
    detalle: "Canada river house",
    direccion: "Emerald Lake, Columbia-Shuswap A, BC, Canada",
    hab: " 2 Habitaciones",
    banos: " 2 Baños",
    precio: "3.500",
    pet: false,
    smoke: false
  },

  {
    imagen: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Casa moderna",
    detalle: "Moderna, amplia buena ubicacion en Spain",
    direccion: "Spain",
    hab: " 3 Habitaciones",
    banos: " 3 Baños",
    precio: "23.000",
    pet: true,
    smoke: false
  },

  {
    imagen: "https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Casa escape de ciudad",
    detalle: "Cerca de la ciudad con la tranquiladad de un bosque, vista espectacular",
    direccion: "Bogotá, Colombia",
    hab: " 2 Habitaciones",
    banos: " 1 Baños",
    precio: "2.500",
    pet: true,
    smoke: true
  },

  {
    imagen: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Penthouse Florida",
    detalle: "Este penthouse de lujo ofrece excelente ubicacion en Florida",
    direccion: "Fort Myers, FL, USA",
    hab: "6 Habitaciones |",
    banos: "5 Baños",
    precio: "8.500",
    pet: false,
    smoke: true,
    sale: true
  },

  {
    imagen: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Proyecto casa contenedor",
    detalle: "Oportunidad unica de casa con nuevas tendencias",
    direccion: "Boston, USA",
    hab: "2 Habitaciones |",
    banos: "1 Baños",
    precio: "14.500",
    pet: true,
    smoke: true,
    sale: true
  },

  {
    imagen: "https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Casa minimalista",
    detalle: "Compacta y unica",
    direccion: "Zwolle",
    hab: "5 Habitaciones |",
    banos: "4 Baños",
    precio: "34.500",
    pet: false,
    smoke: false,
    sale: true
  },

  {
    imagen: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Casa Amplia",
    detalle: "Mejor ubicacion en Canada",
    direccion: "Oshawa, ON, Canada",
    hab: "3 Habitaciones |",
    banos: "1 Baños",
    precio: "44.500",
    pet: false,
    smoke: true,
    sale: true
  },

  {
    imagen: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    titulo: "Condominio innovador",
    detalle: "Nuevas tecnologias, aplicadas al hogar",
    direccion: "Barra da Tijuca, Brazil",
    hab: "2 Habitaciones |",
    banos: "2 Baños",
    precio: "74.500",
    pet: false,
    smoke: true,
    sale: true
  },
]

let template = ''

//comprobacion a traves de una funcion | fuera del for
const isSmoke = (propiedad) => {
  const { smoke } = propiedad;
  if (smoke) {
    return `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
  } else {
    return `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
  }
}
//comprobacion con ternario | dentro del for
for (const propiedad of propiedades) {
  const isPet = propiedad.pet === true ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : `<p class="text-danger">
   <i class="fas fa-ban"></i> No se permiten mascotas</p>`;

//seleccion de objetos en venta   
  if (propiedad.sale) {

    template += `
          <div class="col-md-4 mb-4">
             <div class="card">
               <img src= ${propiedad.imagen} class="card-img-top" alt="Imagen del departamento"/>
               <div class="card-body">
                 <h5 class="card-title"> ${propiedad.titulo}</h5>
                 <p class="card-text"> ${propiedad.detalle}</p>
                 <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
                 <p><i class="fas fa-bed"></i> ${propiedad.hab}
                 <i class="fas fa-bath"></i> ${propiedad.banos}
                 </p>
                 <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                ${isSmoke(propiedad)}
                ${isPet}
               </div>
             </div>
           </div>   
     `
  }
}
const row = document.querySelector(".row")
row.innerHTML = (template)


