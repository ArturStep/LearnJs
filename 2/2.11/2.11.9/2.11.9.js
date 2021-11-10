let user = prompt('Кто там?', '')

if (user == 'admin') {

    let pass = prompt ('Пароль', '')

    if (pass == 'Я главный!') {
        alert ('Здравствуй!')
    }  else if (pass == null) {
        alert('Отменено')
    }   else {
        alert('Не верный пароль')
    }
    
} else if (user == null) {
    alert('Отменено')
} else {
    alert('Я вас не знаю')
}
