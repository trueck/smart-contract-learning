function hi() {
    console.log("hi")
    let name = "edwin"
    console.log(name)
}

hi()

async function main() {}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
