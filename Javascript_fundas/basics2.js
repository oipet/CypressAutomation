const flag = true


if (!flag)
{
    console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition NOT satisfied")
}
console.log("******")
let i = 0
while (i>10)
{
    i++
    console.log(i)

}
console.log("******")
do
{
    i++
} while (i > 10)
console.log(i)

console.log("******")
let n =0
for (let k = 1; k <= 100; k++)
{
    if (k % 2 == 0 && k % 5 == 0)
    {
        n++
        console.log(k)
        if (n == 3) {
            break
        }
            
    }
}
console.log("******")

let required = true
while (required) {
    
    console.log(required)
    required = false

}
console.log("******")