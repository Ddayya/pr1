'use strict'
alert("Я JavaScript");

let surname = prompt("Введите вашу фамилию", 'Фамилия');

let name = prompt("Введите ваше имя", 'Имя');

let patronymic = prompt("Введите ваше отчество", 'Отчество');

let isTrue = confirm(`Верны ли ${surname} ${name} ${patronymic}?`);
alert(isTrue)
