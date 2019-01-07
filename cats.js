document.addEventListener("DOMContentLoaded", function() {

    const summonCatsButton = document.querySelector(".summon-cats")
    const catDivs = document.querySelectorAll(".cat-box")
    const catBook = document.querySelector("#catBook")

    summonCatsButton.addEventListener('click', test)
    // const myInput = document.querySelector("input clas/id")


    function test() {
        
        const request = axios({
            url: 'http://bitkittens.herokuapp.com/cats.json',
            method: 'GET',
            responseType: 'JSON',
            // params: {number: myInput.value}
        }).then(function(response) {

            catDivs.forEach(function(box, index) {
                box.innerHTML = '';
                const catImg = document.createElement("IMG");
                catImg.src = response.data.cats[index]['photo'];
                catImg.alt = `photo of ${response.data.cats[index]['name']}`;
                box.appendChild(catImg);
                let catEntry = document.createElement("LI");
                catEntry.innerHTML = (`${response.data.cats[index]['name']}`)
                catBook.appendChild(catEntry);
                console.log(box)
            })

            console.log(response.cats)
            console.log(response)
            console.log(catDivs)



        })

    
    }
});  