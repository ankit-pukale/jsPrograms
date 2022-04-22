

let body = document.querySelector('body')

body.addEventListener('click', function(e){
   console.log(e.target)
   console.log(e.target.tagName)
   console.log(e.target.className)
})