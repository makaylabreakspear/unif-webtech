//   menu button
document.getElementById("menu-toggle").addEventListener("click", function (){
    document.getElementById ("menu").classList.toggle("active");
});


console.log('hello world!');
var client = contentful.createClient({
  space: 'fdt9412ua609',
  accessToken: 'AOznWQA6p9nTvEus8d_87okFOAfNuTUzj31CTf3jAtM',
});

var placeForContent = document.getElementById('place-for-content');

  client.getEntries({content_type:"unif",}).then(function(entries){
    console.log(entries);

    entries.items.forEach(function(entry){
      var entryDiv = document.createElement('div');
      entryDiv.classList.add('entry-div');
     
     
      //  h2
      if(entry.fields.product){
        var product = document.createElement('h2');
        product.innerHTMl = entry.fields.product;
        entryDiv.appendChild(product);
      }



    })
  });
