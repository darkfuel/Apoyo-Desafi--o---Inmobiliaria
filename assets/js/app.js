const propiedades = [
    {
        imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        titulo: "Apartamento de lujo en zona exclusiva",
        detalle: " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        hab: "4 Habitaciones |",
        banos: "4 Baños",
        precio: " 5.000",
        pet: "No se permite fumar",
        smoke: "No se permiten mascotas"
    },

    {
        imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        titulo: "Apartamento acogedor en la montaña",
        detalle: " Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        direccion: "789 Mountain Road, Summit Peaks, CA 23456",
        hab: "2 Habitaciones |",
        banos: "1 Baño",
        precio: " 1.200",
        pet: "Permitido fumar",
        smoke: "Mascotas permitidas"
    },

    {
        imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        titulo: "Penthouse de lujo con terraza panorámica",
        detalle: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        direccion: "567 Skyline Avenue, Skyview City, CA 56789",
        hab: "3 Habitaciones |",
        banos: "3 Baños",
        precio: "4.500",
        pet: "No se permite fumar",
        smoke: "Mascotas permitidas"
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
        precio: " 2.200",
        pet: false,
        smoke: false
    },
]

let template = ''
for (const propiedad of propiedades) {
    template += `
         <div class="col-md-4 mb-4">
            <div class="card">
              <img src= ${propiedad.imagen} class="card-img-top" alt="Imagen del departamento"/>
              <div class="card-body">
                <h5 class="card-title">${propiedad.titulo}</h5>
                <p class="card-text">${propiedad.detalle}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.hab}
                <i class="fas fa-bath"></i> ${propiedad.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
              </div>
            </div>
          </div>   
    `
}

console.log(template)