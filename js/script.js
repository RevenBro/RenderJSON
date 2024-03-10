
let elCardWrapper = document.querySelector(".wrapper")
let elList1 = document.querySelector(".list1")
let elList2 = document.querySelector(".list2")
let elList3 = document.querySelector(".list3")

let request1 = new XMLHttpRequest()
let request2 = new XMLHttpRequest()
let request3 = new XMLHttpRequest()

// const promise = new Promise((resolve, reject) => {
//     request.open("GET", "https://jsonplaceholder.typicode.com/posts");
//     request.send()

//     request.onload = () => {
//         resolve(JSON.parse(request.response))
//     }
//     request.onerror = () => {
//         reject("Frontda xatolik bor")
//     }
//     request.onabort = () => {
//         reject("Backendda xatolik bor")
//     }
// })

// promise
// .then(res =>  {
//     let splicedList = res.splice(0, 20);
//     splicedList.length ? splicedList.map(item => {
//         let elItem = document.createElement("li")

//         elItem.classList.add("list-item")
//         elItem.innerHTML = `
//             <span>
//                 <b class="item-text">ID: </b>
//                 ${item.id}
//             </span>

//             <strong>
//                 <b class="item-text">Name: </b>
//                 ${item.title}
//             </strong>

//             <p>
//                 <b class="item-text">Post: </b>
//                 ${item.body}
//             </p>

//             <div>
//                 <button class="item-btn">More</button> // bu button ishlamaydi
//             </div>
//         `
//         elList1.appendChild(elItem)

//     }) : "Ma'lumot topilmadi"
// })
// .catch(err => {
//     console.log(err);
// })


// 1-list render start -----------------------------------------
function getRequest(req, URL) {
    const promise = new Promise((resolve, reject) => {
        req.open("GET", URL);
        req.send()
    
        req.onload = () => {
            resolve(JSON.parse(req.response))
        }
        req.onerror = () => {
            reject("Frontda xatolik bor")
        }
        req.onabort = () => {
            reject("Backendda xatolik bor")
        }
    })
    return promise;
}
getRequest(request1, "https://jsonplaceholder.typicode.com/posts")
.then(res =>  {
        let splicedList = res.splice(0, 30);
        splicedList.length ? splicedList.map(item => {
            let elItem = document.createElement("li")
    
            elItem.classList.add("list-item")
            elItem.innerHTML = `
                <span>
                    <b class="item-text">ID: </b>
                    ${item.id}
                </span>
    
                <strong>
                    <b class="item-text">Name: </b>
                    ${item.title}
                </strong>
    
                <p>
                    <b class="item-text">Post: </b>
                    ${item.body}
                </p>
    
                <div>
                    <button class="item-btn">More</button>
                </div>
            `
            elList1.appendChild(elItem)
    
        }) : "Ma'lumot topilmadi"
})
// 1-list render end -----------------------------------------


// 2-list render start -----------------------------------------
function getRequest(req, URL) {
    const promise = new Promise((resolve, reject) => {
        req.open("GET", URL);
        req.send()
    
        req.onload = () => {
            resolve(JSON.parse(req.response))
        }
        req.onerror = () => {
            reject("Frontda xatolik bor")
        }
        req.onabort = () => {
            reject("Backendda xatolik bor")
        }
    })
    return promise;
}
getRequest(request2, "https://jsonplaceholder.typicode.com/comments")
.then(res =>  {
        let splicedList = res.splice(0, 30);
        splicedList.length ? splicedList.map(item => {
            let elItem = document.createElement("li")
    
            elItem.classList.add("list-item")
            elItem.innerHTML = `
                <span>
                    <b class="item-text">ID: </b>
                    ${item.id}
                </span>
    
                <strong>
                    <b class="item-text">Name: </b>
                    ${item.name}
                </strong>

                <strong>
                    <b class="item-text">Email: </b>
                    ${item.email}
                </strong>
    
                <p>
                    <b class="item-text">Post: </b>
                    ${item.body}
                </p>
    
                <div>
                    <button class="item-btn">More</button>
                </div>
            `
            elList2.appendChild(elItem)
    
        }) : "Ma'lumot topilmadi"
})
// 2-list render end -----------------------------------------


// 3-list render start -----------------------------------------
function getRequest(req, URL) {
    const promise = new Promise((resolve, reject) => {
        req.open("GET", URL);
        req.send()
    
        req.onload = () => {
            resolve(JSON.parse(req.response))
        }
        req.onerror = () => {
            reject("Frontda xatolik bor")
        }
        req.onabort = () => {
            reject("Backendda xatolik bor")
        }
    })
    return promise;
}
getRequest(request3, "https://jsonplaceholder.typicode.com/todos")
.then(res =>  {
        let splicedList = res.splice(0, 30);
        splicedList.length ? splicedList.map(item => {
            let elItem = document.createElement("li")
    
            elItem.classList.add("list-item")
            elItem.innerHTML = `
                <span>
                    <b class="item-text">ID: </b>
                    ${item.id}
                </span>
    
                <strong>
                    <b class="item-text">Title: </b>
                    ${item.title}
                </strong>

                <strong>
                    <b class="item-text">Completed: </b>
                    ${item.completed}
                </strong>
    
                <div>
                    <button class="item-btn">More</button>
                </div>
            `
            elList3.appendChild(elItem)
    
        }) : "Ma'lumot topilmadi"
})
// 3-list render end -----------------------------------------