<!-- <div id="firstCard">
  <div class="card">
    <div class="content">
      <h2>Yo</h2>
    </div>
  </div>
</div>
<button onclick="pdf()">Go</button> -->



function pdf() {
  var element = document.getElementById("firstCard");
  // element.innerHTML = "yo";
  html2pdf().from(element).save();
}
