$(function(){
    const lista = []

// Seleciona os versiculos
$('.verse').on('click', (event)=>{
    const $verse = $(event.currentTarget);
   $verse.toggleClass('selected')
   if($('.verse').hasClass('selected')){
    $('.menu-verse').show()
   } else {
    $('.menu-verse').hide()
   }
})



$('#main > div.menu-verse > div > button:nth-child(1)').on('click', ()=>{
    $('.selected').each(()=>{
        $('.selected').addClass('yellow')
        $('.yellow').removeClass('selected')
        $('.yellow').removeClass('selected')
        $('.yellow').removeClass('orange')
        $('.yellow').removeClass('purple')
        $('.yellow').removeClass('blue')
        $('.yellow').removeClass('green')
    })
    
})
$('#main > div.menu-verse > div > button:nth-child(2)').on('click', ()=>{
    $('.selected').each(()=>{
        $('.selected').addClass('orange')
        $('.orange').removeClass('selected')
        $('.orange').removeClass('yellow')
        $('.orange').removeClass('purple')
        $('.orange').removeClass('blue')
        $('.orange').removeClass('green')
})
})

$('#main > div.menu-verse > div > button:nth-child(3)').on('click', ()=>{
    $('.selected').each(()=>{
        $('.selected').addClass('purple')
        $('.purple').removeClass('selected')
        $('.purple').removeClass('yellow')
        $('.purple').removeClass('orange')
        $('.purple').removeClass('blue')
        $('.purple').removeClass('green')
    })
})
$('#main > div.menu-verse > div > button:nth-child(4)').on('click', ()=>{
    $('.selected').each(()=>{
        $('.selected').addClass('blue')
        $('.blue').removeClass('selected')
        $('.blue').removeClass('yellow')
        $('.blue').removeClass('orange')
        $('.blue').removeClass('purple')
        $('.blue').removeClass('green')
    })
})
$('#main > div.menu-verse > div > button:nth-child(5)').on('click', ()=>{
    $('.selected').each(()=>{
        $('.selected').addClass('green')
        $('.green').removeClass('selected')
        $('.green').removeClass('yellow')
        $('.green').removeClass('orange')
        $('.green').removeClass('purple')
        $('.green').removeClass('blue')
    })
})

$('#main > div.menu-verse > div > button:nth-child(6)').on('click', ()=>{
    $('.selected').each(()=>{
        $('.selected').removeClass('green')
        $('.selected').removeClass('yellow')
        $('.selected').removeClass('orange')
        $('.selected').removeClass('purple')
        $('.selected').removeClass('blue')
        $('.selected').removeClass('selected')
        $('.menu-verse').hide()
    })
})
})