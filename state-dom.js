const array = [
    {
        text: 'Первое дело',
        done: true
    },
    {
        text: 'Второе дело',
        done: true
    },
    {
        text: 'Третье дело',
        done: true
    },
    {
        text: 'Четвертое дело',
        done: true
    },
    {
        text: 'Пятое дело',
        done: true
    }
]
const render = (arr) => {
    const list = document.getElementById('list')
    list.innerHTML = ''
    for (let i = 0; i < arr.length ; i++) {
    const div = document.createElement('div')
        div.classList.add('text')
        div.textContent = arr[i].text
        const btn = document.createElement('button')
        btn.textContent = 'x'
        list.append(div)
        div.append(btn)
        btn.addEventListener('click', () => {
            remove(i)
        })
        const check = document.createElement('input')
        check.type = 'checkbox'
        div.prepend(check)
        check.addEventListener('click', () => {
            checkToDo(i)
        })
    }

}

render(array)
const remove = (ind) => {
    array.splice(ind,1)
    render(array)
}

/*const addToDo = (text) => {
    array.push({
        text: text,
        done: true
    })
    render(array)
}*/
const add = document.getElementById('add')
const inp = document.getElementById('inp')
const list = document.getElementById('list')
const btn = document.createElement('button')
add.addEventListener('click', () => {
    array.push({
        text: inp.value,
        done: true
    })
    render(array)
    inp.value = ''
})
const checkToDo = (i) => {
        array[i].done = !array[i].done

}

