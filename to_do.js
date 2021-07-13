const inp = document.getElementById('input')
const btnAdd = document.getElementById('add')
const list = document.getElementById('list')


btnAdd.addEventListener('click', () => {
    const listItem = document.createElement('div')
    listItem.classList.add('list_item')
    const getInp = document.createElement('input')
    getInp.classList.add('check')
    getInp.type = 'checkbox'
    listItem.prepend(getInp)
    list.prepend(listItem)
    listItem.append(inp.value)
    const getBtn = document.createElement('button')
    getBtn.classList.add('btnX')
    getBtn.textContent = 'x'
    listItem.append(getBtn)
    getBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove()

    })
    getInp.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('checked')
        getBtn.disabled = !getBtn.disabled


    })
    if (inp.value === '') {
        listItem.remove()
    }else {
        inp.value = ''
    }
})
