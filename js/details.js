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

  var product = document.getElementById('details');
  client.getEntry(id).then(function (entry) {
    console.log(entry);
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div2');
    console.log(entry.fields.image.fields.file.url);
    var image = document.createElement('img');
    image.src = entry.fields.image.fields.file.url;
    imgDiv.append(image);
    product.appendChild(imgDiv);

    var textDiv = document.createElement('div')
      textDiv.classList.add('text-div2');
      details.appendChild(textDiv)

      var name = document.createElement('h1');
      name.innerHTML = entry.fields.name;
      textDiv.appendChild(name);

      var price = document.createElement('p');
        price.innerHTML = entry.fields.price;
        textDiv.appendChild(price);
        details.appendChild(textDiv);

        var productText = document.createElement('p');
        productText.innerHTML = entry.fields.productText;
        textDiv.appendChild(productText);
    
        var cart = document.createElement('h2');
        cart.innerHTML = entry.fields.cart;
        textDiv.appendChild(cart);
        
        var linkToCart = document.createElement('a');
        linkToCart.href = linkToCart.href = 'cart.html?id=' + entry.sys.id;
        textDiv.appendChild(linkToCart)
         linkToCart.appendChild(cart)
        });

        client.getEntries({content_type:"unif",}).then(function(entries){
            console.log(entries);
        
            entries.items.forEach(function(entry){
                var imgDiv2 = document.createElement('div');
                imgDiv2.classList.add('img-more');
                var image = document.createElement('img');
                image.src = entry.fields.image.fields.file.url;
                imgDiv2.append(image);
                more.appendChild(imgDiv2)
            })});



