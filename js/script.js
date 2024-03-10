let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")

let elCardWrapper = document.querySelector(".wrapper")
let elList1 = document.querySelector(".list1")
let elList2 = document.querySelector(".list2")
let elList3 = document.querySelector(".list3")

let request1 = new XMLHttpRequest()
let request2 = new XMLHttpRequest()
let request3 = new XMLHttpRequest()


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
                    <button onclick="morePostClick()" class="item-btn">More</button>
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

// Modal part start --------------------------------------------
function morePostClick(id){
    getRequest(request1, `https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        elModalWrapper.classList.add("open-modal")
        elModal.innerHTML = `
        <span>
            <b class="item-text">ID: </b>
            ${res.id}
        </span>

        <strong>
            <b class="item-text">Name: </b>
            ${res.name}
        </strong>

        <strong>
            <b class="item-text">Email: </b>
            ${res.email}
        </strong>

        <p>
            <b class="item-text">Post: </b>
            ${res.body}
        </p>
        `
    })
} // Modal ishlamadi
// Modal part end --------------------------------------------