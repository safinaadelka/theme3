let = money = Number(prompt("сколько у вас денег?"))
let = cost = Number(prompt("стоимость товара?"))


if (money == cost){
    alert("поздравляю! вы купили товар!")
}
else if(money < cost){
    let change = cost - money
    console.log(change)
    alert("Для покупки не хватает: " + change + " руб.")
}
else if(money > cost){
    change = money - cost
    console.log(change)
    alert("Покупка совершена: Ваша сдача " + change + " руб")
}