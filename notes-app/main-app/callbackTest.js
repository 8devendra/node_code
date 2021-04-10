const getData=(address,callback)=>{
    setTimeout(()=>{
        const data={
            lat:0,
            lon:0
        }
        callback(data)
    },2000)

}

getData('Location Address',(data)=>{
    console.log('Location address'+data.lat)
})

const add=(num1,num2,ans)=>{
    ans(num1+num2)
}

add(1,2,(sum)=>{
    console.log(sum)
})

console.log('tst')