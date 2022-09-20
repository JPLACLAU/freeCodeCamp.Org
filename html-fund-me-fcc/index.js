console.log("hi from script tag") //this is javascript

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        console.log("I see a metamask! Yupiii!")
        await window.ethereum.request({ method: "eth_requestAccounts" })
        document.getElementById("connectButton").innerHTML = "Connected!"
    } else {
        document.getElementById("connectButton").innerHTML =
            "Please Install Metamask."
    }
}

async function fund(ethAmount) {
    console.log("Funding with ${ethAmount}...")
    if (typeof window.ethereum !== "undefined") {
    }
    // provider/ conecction to blockchain,
    //signer / wallet / someonewith gas
    //contract that  that we are interacting
    // abi , address
}
