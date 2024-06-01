// 1. Create a variable to hold your NFTs
let nfts = [];

// 2. This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, description) {
    const nft = {
        name: name,
        artist: artist,
        year: year,
        description: description
    };
    nfts.push(nft);
}

// 3. Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Artist: " + nft.artist);
        console.log("Year: " + nft.year);
        console.log("Description: " + nft.description);
        console.log("------------------------");
    });
}

// 4. Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + nfts.length);
}

// Call your functions 
mintNFT("Digital Art #1", "Artist A", 2024, "A unique digital art piece");
mintNFT("Digital Art #2", "Artist B", 2023, "A rare digital artwork");
mintNFT("Digital Art #3", "Artist C", 2022, "An exclusive digital masterpiece");

listNFTs();
getTotalSupply();
