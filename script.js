const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
button.addEventListener('click',add) // essa função se chama adicionar um ouvidor de evento.//
// função serve para agrupar codigos e será ultilizada a qualquer momento.//
form.addEventListener("change",save)
function add(){

    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)
    if (dayExists){
        alert("Dia ja existe 🛑")
        return
    }



    nlwSetup.addDay(today)

}
function save () {
    localStorage.setItem("NLWSetup@habits",JSON.stringify(nlwSetup.data))

}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()

//const data = {
    //run: ["01-01","01-02","01-03","01-04","01-05","01-06" ],
    //takePills: ['01-03'],journal: ['01-04'],water:['01-01']
    //Entrada de objetos usando const data.//
    
    
//}

///=nlwSetup.setData(data) // Trazendo os objetos para dentro da pagina nlwSetup //
//nlwSetup.load()// Fazendo o carregamento dos objetos//