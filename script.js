// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

function wakeUp() {
    return new Promise(resolve => setTimeout(() => {
        resolve('I woke up')
    }, Math.random() * 2000))
}
function workout() {
    return new Promise((resolve) => setTimeout(() => {
        resolve('I did the exercises')
    }, Math.random() * 2000))
}
function takeShower() {
    return new Promise(resolve => setTimeout(() => {
        resolve('I took a shower')
    }, Math.random() * 2000))
}
function haveBreakfast() {
    return new Promise((resolve) => setTimeout(() => {
        resolve('I had breakfast')
    }, Math.random() * 2000))
}
function homework() {
    return new Promise((resolve) => setTimeout(() => {
        resolve('I did my homework')
    }, Math.random() * 2000))
}
function wayToWork() {
    return new Promise(resolve => setTimeout(() => {
        resolve('Came to work')
    }, Math.random() * 2000))
}
function lunch() {
    return new Promise(resolve => setTimeout(() => {
        resolve('I had lunch')
    }, Math.random() * 2000))
}
function wayHome() {
    return new Promise(resolve => setTimeout(() => {
        resolve('Came home')
    }, Math.random() * 2000))
}
function householdChores() {
    return new Promise(resolve => setTimeout(() => {
        resolve('Did household chores')
    }, Math.random() * 2000))
}
function dinner() {
    return new Promise(resolve => setTimeout(() => {
        resolve('dinner')
    }, Math.random() * 2000))
}
function preparationForSleep() {
    return new Promise(resolve => setTimeout(() => {
        resolve('Prepared for sleep')
    }, Math.random() * 2000))
}
function sleep() {
    return new Promise(resolve => setTimeout(() => {
        resolve('I sleep')
    }, Math.random() * 2000))
}
wakeUp().then((value) => {
    console.log(value)
})
workout().then((value) => {
    console.log(value)
})
takeShower().then((value) => {
    console.log(value)
})
haveBreakfast().then((value) => {
    console.log(value)
})
homework().then((value) => {
    console.log(value)
})
wayToWork().then((value) => {
    console.log(value)
})
lunch().then((value) => {
    console.log(value)
})
wayHome().then((value) => {
    console.log(value)
})
householdChores().then((value) => {
    console.log(value)
})
dinner().then((value) => {
    console.log(value)
})
preparationForSleep().then((value) => {
    console.log(value)
})
wayHome().then((value) => {
    console.log(value)
})

const routine = async ()=>{
    console.log(await wakeUp());
    console.log(await workout());
    console.log(await takeShower());
    console.log(await haveBreakfast());
    console.log(await homework());
    console.log(await wayToWork());
    console.log(await lunch());
    console.log(await wayHome());
    console.log(await householdChores());
    console.log(await dinner());
    console.log(await preparationForSleep());
    console.log(await wayHome());
}
routine();