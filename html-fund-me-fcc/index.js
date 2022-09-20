console.log("hi from script tag"); //this is javascript

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("I see a metamask! Yupiii!");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("connectButton").innerHTML = "Connected!";
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please Install Metamask.";
  }
}
