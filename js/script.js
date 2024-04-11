document.getElementById("menu-toggle").addEventListener("click", function (){
  document.getElementById ("menu").classList.toggle("active");
});

console.log('hello world!');
//   connecting the contentful
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

      placeForContent.appendChild(entryDiv);

      var imgDiv = document.createElement('div');
      imgDiv.classList.add('img-div');

      var image = document.createElement('img');
      image.src = entry.fields.image.fields.file.url;
      imgDiv.append(image);
      entryDiv.appendChild(imgDiv)

      var textDiv = document.createElement('div')
      textDiv.classList.add('text-div');
      entryDiv.appendChild(textDiv)

     
        
      if(entry.fields.name){
        var name = document.createElement('h1');
        name.innerHTML = entry.fields.name;
        textDiv.appendChild(name);

        var description = document.createElement('p');
        description.innerHTML = entry.fields.description;
        textDiv.appendChild(description);

        var price = document.createElement('p');
        price.innerHTML = entry.fields.price;
        textDiv.appendChild(price);
        placeForContent.appendChild(entryDiv);

        var linkToDetails = document.createElement('a');
        linkToDetails.href = linkToDetails.href = 'details.html?id=' + entry.sys.id;
        imgDiv.appendChild(linkToDetails)
         linkToDetails.appendChild(image)
       
        
        

      }
    })

  });
  

