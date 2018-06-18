window.onload = () => {
 const btn = document.getElementById('boton1');
 const btnThree = document.getElementById('boton3');
 const btnTwo = document.getElementById('boton2');

 btn.addEventListener('click', function () {

  fetch('https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Mala respuesta de perritos");
    }
  }).then((dogesJson) => {
    const dogeReceptorDiv = document.getElementById("cateReceptor");
      for (let dogeIndex = 0; dogeIndex < dogesJson.length; dogeIndex++) {
        const dogeImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        dogeImg.src = dogesJson[dogeIndex];
        dogeReceptorDiv.appendChild(dogeImg);
      }
 
  });
 });

 btnTwo.addEventListener('click', function () {
  // Fetch retorna una promesa
  fetch(`https://cors-anywhere.herokuapp.com/http://shibe.online/api/cats?count=10&urls=true&httpsUrls=true`) //Recibe la URL donde se va a hacer la consulta
    .then((response) => { //Este then es de la promesa del fetch
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Mala respuesta de gatitos");
      }
    }).then((catesJson) => { //recibimos el JSON en este punto
      //Este then es de la promesa de response.json()
      const cateReceptorDiv = document.getElementById("cateReceptor");
      for (let cateIndex = 0; cateIndex < catesJson.length; cateIndex++) {
        const cateImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        cateImg.src = catesJson[cateIndex];
        cateReceptorDiv.appendChild(cateImg);
      }
    })
    .catch((error) => {
      console.error("Holi soy un error " + error);
    });
  });

  btnThree.addEventListener('click', () => {
    fetch('https://cors-anywhere.herokuapp.com/http://shibe.online/api/birds?count=10&urls=true&httpsUrls=true')
   .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Mala respuesta de pajaritos");
    }
  }).then((birdesJson) => {
    const birdReceptorDiv = document.getElementById("birdReceptor");
      for (let birdIndex = 0; birdIndex < birdesJson.length; birdIndex++) {
        const birdImg = document.createElement('img'); //Aquí "almaceno" las imágenes
        birdImg.src = birdesJson[birdIndex];
        birdReceptorDiv.appendChild(birdImg);
      }
    });
  });
};



 