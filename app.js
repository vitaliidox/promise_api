let inst = document.querySelector('#inst')


fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
.then(response => response.json())

.then(data =>{
        console.log(data)
        new Inst(data).show()
})

class Inst{
    constructor(data){
        this.data = data
    }
    show(){
        inst.innerHTML=`
        <table class="table">
            <thead>
                <tr>
                <th scope="col">№</th>
                <th scope="col">Currency</th>
                <th scope="col">Base currency</th>
                <th scope="col">Buy</th>
                <th scope="col">Sale</th>
                </tr>
            </thead>
            <tbody id="crrc">
            </tbody>
        </table>`
        let crrc = document.querySelector('#crrc')
        for(let i=0;i<this.data.length; i++){
            crrc.innerHTML+=`
            <tr class ="bg-warning">
                <th scope="row">${i+1}</th>
                <td>${this.data[i].ccy}</td>
                <td>${this.data[i].base_ccy}</td>
                <td>${this.data[i].buy}</td>
                <td>${this.data[i].sale}</td>
            </tr>
            `
        }
        inst.style.cssText = `margin:25vh; border:3px solid black`
        }
    }