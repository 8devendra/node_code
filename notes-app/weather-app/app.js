console.log("Starting")
setTimeout(()=>{
    console.log("2 sec Timeout")
},2000)
setTimeout(()=>{
    console.log("1 sec Timeout")
},1000)
setTimeout(()=>{
    console.log("0 ms Timeout")
},0)
console.log("Stoping")
