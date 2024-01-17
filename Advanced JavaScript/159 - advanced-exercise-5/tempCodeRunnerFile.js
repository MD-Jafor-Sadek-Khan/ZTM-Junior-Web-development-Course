const x = [
  {
    val: ["k"],
  },
  {
    val: ["j"],
  },
]

const fun = (x) => (y) =>
  x.map((i) => {

    const k = i.val + y
    return { ...i, val: k }
  })

const z = fun(x)
const k = z(3)
console.log(k)