/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const place = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Name, style, weights, misl) {
const NFT = {
    "Name": Name,
    "Figure": style,
    "Weight": weights,
    "Others": misl
}
place.push(NFT);
console.log("Hello: "+ Name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i< place.length; i++) {
      console.log("\nName "+place[i].Name);
      console.log("Figure "+place[i].Figure);
      console.log("Weight "+place[i].Weight);
      console.log("Other "+place[i].Others);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+place.length);
}

// call your functions below this line
mintNFT("Siddharth","Indian","58","Crazy");
mintNFT("Hitesh","Indian","65","Calm");
mintNFT("Jaya","Indian","55","Curious");
mintNFT("Unknown","Indian","58","Crazy");
listNFTs();
getTotalSupply();
