var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');
document.getElementById("menu-toggle").addEventListener("click", function (){
  document.getElementById ("menu").classList.toggle("active");
});
console.log(id);

var client = contentful.createClient({
    space: 'fdt9412ua609',
    accessToken: 'AOznWQA6p9nTvEus8d_87okFOAfNuTUzj31CTf3jAtM',
  });

  var product = document.getElementById('cart-info');
  client.getEntry(id).then(function (entry) {
    console.log(entry);

    var cartContent = document.createElement('div');
    cartContent.classList.add('cart-content');
    console.log(entry.fields.image.fields.file.url);
    var image = document.createElement('img');
    image.src = entry.fields.image.fields.file.url;
    cartContent.append(image);
    
    var name = document.createElement('h1');
    name.innerHTML = entry.fields.name;
    cartContent.appendChild(name);

     cartInfo.appendChild(cartContent);

});

var price = document.getElementById('price');
client.getEntry(id).then(function (entry) {
    var price = document.createElement('h2');
    price.innerHTML = entry.fields.price;
   
});
