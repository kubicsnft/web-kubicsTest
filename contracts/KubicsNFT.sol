// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

interface WhitelistInterface {
    function isAddressWhitelisted(address addressWhitelisted)
        external
        view
        returns (bool);
}

contract KubicsNFT is ERC721, ERC721URIStorage, Pausable, Ownable {
    uint256 private s_tokenCounter;
    address private immutable i_owner;
    uint256 private priceCollectionA;
    uint256 private priceCollectionAWhitelisted;
    bool public mintStatus;
    bool public whitelistMintStatus;

    address public constant WHITELIST_CONTRACT =
        0xd9145CCE52D386f254917e481eB44e9943F39138;
    WhitelistInterface WhitelistContract =
        WhitelistInterface(WHITELIST_CONTRACT);

    mapping(string => uint8) existingURIs;

    constructor() ERC721("Kubics", "KBC") {
        i_owner = msg.sender;
        priceCollectionA = 0.005 ether;
        priceCollectionAWhitelisted = 0.001 ether;
        mintStatus = true;
        whitelistMintStatus = false;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmbzxPg6VFwfWZFtAfPur2xm3RMFE2tnWvRGWT86rgdVDs";
    }

    // Standard safeMint function
    function safeMint(address to, string memory metadataURI) public onlyOwner {
        uint256 tokenId = s_tokenCounter;
        s_tokenCounter = s_tokenCounter + 1;
        existingURIs[metadataURI] = 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, metadataURI);
    }

    //Custom payToMint function. Receive metadataURI. Initiall status: closed
    function payToMint(string memory metadataURI)
        public
        payable
        returns (uint256)
    {
        require(mintStatus == true, "Mint closed!");
        require(s_tokenCounter < 10000, "All the NFT have been minted!");
        require(existingURIs[metadataURI] != 1, "NFT already minted!");
        require(msg.value >= priceCollectionA, "Need to pay up!");

        uint256 tokenId = s_tokenCounter;
        s_tokenCounter = s_tokenCounter + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_tokenCounter;
    }

    //Custom whitelistMinting function. Receive metadataURI. Initiall status: closed
    function whitelistMinting(string memory metadataURI)
        public
        payable
        returns (uint256)
    {
        require(whitelistMintStatus == true, "Whitelist Mint closed!");
        require(checkWhitelist() == true, "Not in the whitelist");
        require(s_tokenCounter < 10000, "All the NFT have been minted!");
        require(existingURIs[metadataURI] != 1, "NFT already minted!");
        require(msg.value >= priceCollectionAWhitelisted, "Need to pay up!");
        require(
            balanceOf(msg.sender) < 1,
            "User has already claimed their token"
        );

        uint256 tokenId = s_tokenCounter;
        s_tokenCounter = s_tokenCounter + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_tokenCounter;
    }

    // Function to check if the user is in the whitelist.
    function checkWhitelist() public view returns (bool) {
        //This is example and not related to your contract
        bool whitelist = WhitelistContract.isAddressWhitelisted(msg.sender);
        return whitelist;
    }

    // Function to withdra funds
    function Withdraw() public payable onlyOwner {
        require(address(this).balance > 0, "No money in the contract");
        // This will pay to one account 1% of the total withdraw amount
        // =============================================================================
        (bool hs, ) = payable(0xCfE3D942a24f6eCe0057C0F96380aBe20a4Ad1B4).call{
            value: (address(this).balance * 1) / 100
        }("");
        require(hs);
        // =============================================================================
        // This will pay the rest of the total withdraw amount to the owner of the contract
        (bool success, ) = i_owner.call{value: address(this).balance}("");
        require(success);
    }

    function setPriceCollectionA(uint256 newPriceA) public onlyOwner {
        //Set the new price in Wei!
        priceCollectionA = newPriceA;
    }

    function setMintStatus(bool status) public onlyOwner {
        mintStatus = status;
    }

    function setWhitelistMintStatus(bool whitelistStatus) public onlyOwner {
        whitelistMintStatus = whitelistStatus;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    // Getters functions
    function getContractBalance() public view returns (uint256) {
        return uint256(address(this).balance);
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    // Get NFT URI by index is provided by ERC721URIStorage calling KubicsNFT.tokenURI(TokenID)
    // Get Contract owner is provided by Ownable calling KubicsNFT.owner()
}
