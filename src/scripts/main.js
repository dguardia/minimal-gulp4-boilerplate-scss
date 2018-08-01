function createNode(element)
{
    return document.createElement(element);
}

function append(parent, el)
{
    return parent.appendChild(el);
}

const row = document.getElementById("authors");

const url = 'https://randomuser.me/api/?results=100';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data){
        let authors = data.results;

        return authors.map(function(author){
            let col = createNode('div');
            col.className = 'col-sm-6 col-md-4 col-lg-3';

            let block = createNode('div')
            block.className = 'row inner-block';

            block.innerHTML = `<div class="card" style="width: 20rem;">
            <img class="card-img-top" src="${author.picture.large}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${author.name.title}. ${author.name.first} ${author.name.last}</h5>
                <p class="card-text"><i class="fas fa-user"></i> ${author.login.username}</p>
                <p class="card-text"><i class="fas fa-location-arrow"></i> ${author.location.street}</p>
                <p class="card-text card-text-city"><i class="fas fa-map-marker-alt"></i> ${author.location.city}</p>
                <p class="card-text card-text-state"><i class="fas fa-map-pin"></i> ${author.location.state} - ${author.location.postcode}</p>
                <p class="card-text"><i class="fas fa-mobile-alt"></i> - ${author.cell}</p>
                </div>
            </div>`;
            append(col, block);
            append(row, col);
        })
    })
    .catch(function(error){
        console.log(JSON.stringify(error));
    })