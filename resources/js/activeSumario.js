// const btnSumario = document.getElementById('sumario').addEventListener('click', toggleSumario)

// function toggleSumario(){
//     const element = document.getElementById('lista-sumario');
//     console.log(element)
//     element.classList.add('active')
// }

// const btnclose = document.querySelector('#lista-sumario > div > a').addEventListener('click', closeSumario)

// function closeSumario(){
//     const element = document.getElementById('lista-sumario');
//     console.log(element)
//     element.classList.remove('active')
// }

$('#barra-de-informacao > a:nth-child(1)').on('click', ()=>{
    $('#lista-sumario').addClass('active')
})

$('#lista-sumario > div > a').on('click', ()=>{
    $('#lista-sumario').removeClass('active')
})