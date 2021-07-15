document.addEventListener('DOMContentLoaded',()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data=> {
            const list = document.getElementById('list');
            const inp = document.getElementById('input');
            const btnAdd = document.getElementById('add');
            btnAdd.addEventListener('click',()=>{
                const list_item = document.createElement('div');

                const btn = document.createElement('button')
                list.prepend(list_item);
                btn.classList.add('add');
                list_item.classList.add('list_item')
                list_item.prepend(inp.value);
                list_item.append(btn);
                btn.prepend('x')
                const check = document.createElement('input');
                check.type = 'checkbox';
                list_item.prepend(check);
                inp.value === '' ? list_item.remove(): inp.value = '';
                btn.addEventListener('click', (e) => {
                    e.target.parentElement.remove();
                })

                check.addEventListener('click',(e) => {
                    e.target.parentElement.classList.toggle('checked')
                    btn.disabled = !btn.disabled
                    data.completed = !data.completed
                })
            })


            for (let i = 0; i <data.length ; i++) {
                const list_item = document.createElement('div');
                const btn = document.createElement('button')
                btn.classList.add('add')
                btn.prepend('x')
                list_item.classList.add('list_item')
                list.prepend(list_item);
                list_item.append(btn)
                list_item.prepend(data[i].title)
                const check = document.createElement('input');
                check.type = 'checkbox';
                list_item.prepend(check)
                btn.addEventListener('click', (e) => {
                       e.target.parentElement.remove();
                   })

                check.addEventListener('click',(e) => {
                    e.target.parentElement.classList.toggle('checked')
                    btn.disabled = !btn.disabled
                    data.completed = !data.completed
                })


            }

        })
})

// document.addEventListener('DOMContentLoaded',()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(res=> res.json())
//         .then(data=> {
//            const render = (data) => {
//                const list = document.getElementById('list');
//                for (let i = 0; i < data.length; i++) {
//                    const list_item = document.createElement('div');
//                    const btn = document.createElement('button')
//                    btn.classList.add('add')
//                    btn.prepend('x')
//                    list_item.classList.add('list_item')
//                    list.prepend(list_item);
//                    list_item.append(btn)
//                    list_item.prepend(data[i].title)
//                    const check = document.createElement('input');
//                    check.type = 'checkbox';
//                    list_item.prepend(check);
//                    check.addEventListener('click',(e) => {
//                        e.target.parentElement.classList.toggle('checked')
//                        btn.disabled = !btn.disabled
//                        data.completed = !data.completed
//                    });

//                }
//
//             }
//             render(data)
//
//             function remove(index){
//                 data.splice(index,1)
//                 render(data)
//             }
//             remove()
//             ////////////////////////////////////////
//
//         })
//
// })
