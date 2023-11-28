<script>
  // wir brauchen einen Prop zum erstellen einer Karte
  export let dino;

  //img Pfad
  const imgPfad = "../public/Dino-img/"+dino.group_letter + dino.card_number+ "_" + dino.name + ".png";
  console.log(imgPfad)

</script>


		 <div id="wrapper">
  <h2 style="background-color: rgb(243, 158, 189);">{dino.group_letter}</h2>
  <div class="description">
    <h3>{dino.name}</h3>
    <h5>{dino.group}</h5>
  </div>
  <img id="image" src="{imgPfad}" alt="Brachiosaurus">
  <article id="wrapper2">
    <section class="card topLeftRounded" id="karte-1">
      <img class="icon" src="./img/years.png" alt="BrachiosaurusStats-icons">
     
    </section>
    <section class="card" id="karte-2">
       <div class="cardText">
        <h5>years</h5>
        <h4>{dino.years}</h4>
      </div>
    </section>
    <section class="card" id="karte-3">
       <img class="icon" src="./img/speed.png" alt="BrachiosaurusStats-icons">
    </section>
    <section class="card topRightRounded" id="karte-4">
     
      <div class="cardText">
        <h5>speed</h5>
        <h4>{dino.speed}</h4>
      </div>
    </section>
    <section class="card" id="karte-5">
       <img class="icon" src="./img/height.png" alt="BrachiosaurusStats-icons">
    </section>
    <section class="card" id="karte-6">
      <div class="cardText">
        <h5>height</h5>
        <h4>{dino.height}</h4>
      </div>
     
    </section>
    <section class="card" id="karte-7">
       <img class="icon" src="./img/teeth.png" alt="BrachiosaurusStats-icons">
    </section>
    <section class="card" id="karte-8">
      <div class="cardText">
        <h5>teeth</h5>
        <h4>{dino.number_teeth}</h4>
      </div>
     
    </section>
    <section class="card bottomLeftRounded" id="karte-9">
      <img class="icon" src="./img/iq.png" alt="BrachiosaurusStats-icons">
    </section>
    <section class="card" id="karte-10">
      <div class="cardText">
        <h5>iq</h5>
        <h4>{dino.iq}</h4>
      </div>
      
    </section>
    <section class="card" id="karte-11">
      <img class="icon" src="./img/eggs.png" alt="BrachiosaurusStats-icons">
    </section>
    <section class="card bottomRightRounded" id="karte-12">
      <div class="cardText">
        <h5>eggs</h5>
        <h4>{dino.number_eggs}</h4>
      </div>
      
    </section>
  </article>
</div>


<style>
</style>
