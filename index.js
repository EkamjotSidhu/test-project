const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0f23252c6msh20f31f98818a1f3p1ca85bjsnd09303c40ea0',
        'X-RapidAPI-Host': 'computer-components-api.p.rapidapi.com'
    }
};


const parts_cards = document.querySelectorAll('.component_card')
var card = ''
for (var part of parts_cards) {
    part.addEventListener('click', async (e) => {

        await fetch(`https://computer-components-api.p.rapidapi.com/${e.target.alt}?limit=5&offset=0`, options)
            .then(response => response.json())
            .then((data) => {
                console.log(e.target.alt)
                var showPart = document.getElementById('showParts')
                card = e.target.alt
                console.log(card)
                showPart.textContent = ''
                showPart.style = 'width:100%;color:white'
                var list = document.createElement('ul')
                list.setAttribute('id', 'partList')
                for (item of data) {
                    var img = document.createElement('img')
                    img.setAttribute('class', 'partImage')
                    img.style = 'height:20px;width:20px'
                    img.src = item.img
                    var li = document.createElement('li')
                    li.setAttribute('class', 'inventory')
                    li.appendChild(img)
                    var partSpan = document.createElement('span')
                    li.setAttribute('id', item.price)
                    partSpan.textContent = `${item.brand} 
                    ${item.model} 
                    ${item.price}`
                    li.appendChild(partSpan)
                    li.style = 'display:flex-inline'
                    list.appendChild(li)
                }
                showPart.appendChild(list)
                document.getElementById('parts').appendChild(showPart)
                chosenParts()
            })

            .catch(err => console.error(err));
    })
}
function chosenParts() {
    var selectedParts = document.querySelectorAll(".inventory")
    selectedParts.forEach(part => {
        console.log(part.id)
        var price = 0
        part.addEventListener('click', (e) => {
            if (card == 'processor') {
                document.getElementById('chosenProcessor').textContent = `Processor Price: ${part.id}`
                document.getElementById('chosenProcessor').dataset.number = parseInt(part.id)

            }
            if (card == 'ram') {
                document.getElementById('chosenRam').textContent = `Ram Price: ${part.id}`
                document.getElementById('chosenProcessor').dataset.number = parseInt(part.id)
            }
            if (card == 'storage') {
                document.getElementById('chosenStorage').textContent = `Storage Price: ${part.id}`
                document.getElementById('chosenProcessor').dataset.number = parseInt(part.id)
            }
            if (card == 'motherboard') {
                document.getElementById('chosenMotherboard').textContent = `Motherboard Price: ${part.id}`
                document.getElementById('chosenProcessor').dataset.number = parseInt(part.id)
            }
            if (card == 'keyboard') {
                document.getElementById('chosenKeyboard').textContent = `Keyboard Price: ${part.id}`
                document.getElementById('chosenProcessor').dataset.number = parseInt(part.id)
            }
            if (card == 'gpu') {
                document.getElementById('chosenGpu').textContent = `GPU Price: ${part.id}`
                document.getElementById('chosenProcessor').dataset.number = parseInt(part.id)
            }
            if (card == 'case') {
                document.getElementById('chosenCase').textContent = `Case Price: ${part.id}`
            }
            if (card == 'case_fan') {
                document.getElementById('chosenCasefan').textContent = `Case Fan Price: ${part.id}`
            }
            if (card == 'cpu_fan') {
                document.getElementById('chosenCpufan').textContent = `Cpu Fan Price: ${part.id}`
            }
            if (card == 'monitor') {
                // const router = require('express').Router();
                // const monitor = require('../Models/Monitor');
                // const sequelize = require('../config/connection');

                // router.get('/', async (req, res) => {
                //     try {
                //         const getMonitor = await monitor.findAll();

                //         console.log(res.status(200).json(getMonitor));
                //     } catch (err) {
                //         res.status(500).json(err);
                //     }
                // })

                // module.exports = router;
                // document.getElementById('chosenMonitor').textContent = `MonitorPrice: ${part.id}`
            }
            // totalPrice = 0
            // var cart = document.querySelectorAll('.cartPart')
            // for (var part of cart) {
            //     totalPrice = totalPrice + part.id
            // }
            // console.log(totalPrice)
            console.log(price)
        })
    })
}
