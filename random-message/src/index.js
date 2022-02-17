const messages=[
    "Sebastian",
    "Ana",
    "Pedro",
    "Diego",
    "Oscar",
    "Laura",
    "Raul",
    "Omar",
    "Francisco",
    "David",
    "Carlos"
]
const randomMsg=()=>{
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}
module.exports={randomMsg}