
const add = (x,y, callback) => {
    setTimeout(() => {
        const sum = x + y;
        callback(sum)
    }, 2000)

}


add(1,4, (sum) => {
    console.log(sum)
})
