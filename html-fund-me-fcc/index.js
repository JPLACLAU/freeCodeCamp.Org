console.log("hi from script tag") //this is javascript

import { ethers } from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementByEd("connectButton")
const fundButton = document.getElementByEd("fundButton")
connectButton.onclick = connect
fundButton.onclick = fundButton

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        console.log("I see a metamask! Yupiii!")
        await window.ethereum.request({ method: "eth_requestAccounts" })
        connectButton.innerHTML = "Connected!"
    } else {
        connectButton.innerHTML = "Please Install Metamask."
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
