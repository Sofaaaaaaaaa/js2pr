"use srtict"
//1
let name;
let admin;
name ='Джон';
admin= name ;
alert(admin);

//2
let citi = prompt('Введите название города');
let yearOfFoundation = prompt('Год образования');
let Population  = prompt('Население');
let ageCiti  = 2024 - yearOfFoundation ;
alert(`Городу ${citi} исполнилось ${ageCiti} лет с момента его образования.Население - ${Population} человек`);

//3
let r = prompt('Введите радиус круга');
let S = Math.PI * (r**2);
alert (`Площадь круга с радиусом ${r} равна ${S}`);

//4
let a = prompt('Введите перовое число');
let b = prompt('Введите второе число');
alert (`Сумма = ${a+b},Разность = ${a-b}, Частное = ${a/b},Произведение = ${a*b}`);