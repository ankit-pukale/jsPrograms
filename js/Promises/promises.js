//synchronous code ->
function testsync(){
    console.log('block 1 is executed')
    alert("alert for Block 1")
}
function testsync2(){
    console.log('block 2 is executed')
}
testsync()
testsync2()

//Async
function one(){
    setTimeout(function(){
        console.log('function One')
    },2000)
}
function two(){
   setTimeout(function(){
       console.log('function Two')
   },200)
}
one()
two()

// function info() {
    //     setTimeout(function () {
    //         console.log('id created')
    //     }, 2000)
    
    //     setTimeout(function () {
    //         console.log('user retrive')
    //     }, 1000)
    
    //     setTimeout(function () {
    //         console.log('user update')
    //     })
    // }
    // info()
    
    
    // call back hell
    
    // function info() {
    //     setTimeout(function () {
    //         console.log('id created')
    //         setTimeout(function () {
    //             console.log('user retrive')
    //             setTimeout(function () {
    //                 console.log('user update')
    //             })
    //         }, 1000)
    
    //     }, 2000)
    // }
    // info()
    
    
    // promises --- Es6 promises
    
    
    // promises is the new way of handling async code for synchronous  execution
    
    
    let pro = new Promise(function (resolve, reject) {
        let x = 10
        let y = 100
        if (x == y) {
            resolve("hello")
        }
        else {
            reject("bye")
        }
    
    })
    
    // consuming promise 
    // pro.then(function (str) {
    //     console.log(str)
    // }, function (str) {
    //     console.log(str)
    // })
    
    // consuming promise with then block
    // pro.then(function(x){
    //     console.log(x)
    // })
    // .catch(function(x){
    //     console.log(x)
    // })


    //How call back hell resolved in promise??
    let pro3 = new Promise(function (resolve, reject) {
        let a = 100
        let b = 100
        if (a == b) {
            resolve(1)
        }
        else {
            reject('Cretation fail')
        }
    
    })
    
    
    function Getinfo(id) {
        return new Promise(function (resolve, reject) {
            if (id == 1) {
                resolve('chinmaydespande010@gmail.com')
            }
            else {
                reject('unable to get ifo ')
            }
    
        })
    }
    
    pro3.then(function (id) {
        Getinfo(id)
        .then(function (email) {
            return email
        }).then(function (email) {
            console.log(email)
        })
    }).catch(function(str){
        console.log(str)
    })
    
    
    