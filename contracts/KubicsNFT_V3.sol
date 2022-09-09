// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

error Kubics__MintClosed();
error Kubics__MintLimitReached();
error Kubics__MintALimitReached();
error Kubics__NFTMinted();
error Kubics__NeedToPayUp();
error Kubics__WhitelistMintClosed();
error Kubics__NotInTheWhitelist();
error Kubics__WhitelistLimit();
error Kubics__NotMoneyInContract();

interface WhitelistInterface {
    function isAddressWhitelisted(address addressWhitelisted)
        external
        view
        returns (bool);
}

contract KubicsNFT_V3 is
    ERC721,
    ERC721URIStorage,
    ERC721Enumerable,
    Ownable,
    ReentrancyGuard
{
    //Declaring all tokens Counters
    uint256 private s_mainTokenCounter;
    uint256 private s_tokenCounterA;
    uint256 private s_tokenCounterB;
    uint256 private s_tokenCounterC;
    uint256 private s_tokenCounterD;
    uint256 private s_tokenCounterE;

    //Declaring accounts
    address private immutable i_owner;
    address private immutable i_devAccount;
    address private immutable i_marketingAccount;
    address private immutable i_designAccount;
    address private immutable i_founderAccountA;
    address private immutable i_founderAccountB;

    //Declaring price Collections
    uint256 private priceCollectionA;
    uint256 private priceCollectionB;
    uint256 private priceCollectionC;
    uint256 private priceCollectionD;
    uint256 private priceCollectionE;

    //Declaring whitelisted price Collections
    uint256 private priceWhitelistedA;
    uint256 private priceWhitelistedB;
    uint256 private priceWhitelistedC;
    uint256 private priceWhitelistedD;
    uint256 private priceWhitelistedE;

    //Declaring status
    bool public mintStatus;
    bool public whitelistMintStatus;

    //Declaring whitelist Address and Interface
    address public constant WHITELIST_CONTRACT =
        0xeC9e66f1f4f544201660c766B265D76503E854Eb;
    WhitelistInterface WhitelistContract =
        WhitelistInterface(WHITELIST_CONTRACT);

    // Declaring mapping: URIs to 1 or 0 (true or false)
    mapping(string => uint8) existingURIs;

    //Constructor
    constructor() ERC721("Kubics_V3", "KBC") {
        //Setting accounts
        i_owner = msg.sender;
        i_devAccount = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_marketingAccount = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_designAccount = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_founderAccountA = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_founderAccountB = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;

        //Setting price for each collection Mint
        priceCollectionA = 0.005 ether;
        priceCollectionB = 0.005 ether;
        priceCollectionC = 0.005 ether;
        priceCollectionD = 0.005 ether;
        priceCollectionE = 0.005 ether;

        //Setting price for each collection WhitelistMint
        priceWhitelistedA = 0.001 ether;
        priceWhitelistedB = 0.001 ether;
        priceWhitelistedC = 0.001 ether;
        priceWhitelistedD = 0.001 ether;
        priceWhitelistedE = 0.001 ether;

        //Setting status
        mintStatus = true;
        whitelistMintStatus = false;
    }

    modifier mintCompliance(string memory metadataURI) {
        if (mintStatus != true) {
            revert Kubics__MintClosed();
        }
        if (s_mainTokenCounter >= 10000) {
            revert Kubics__MintLimitReached();
        }
        if (existingURIs[metadataURI] == 1) {
            revert Kubics__NFTMinted();
        }
        _;
    }

    modifier whitelistMintCompliance(string memory metadataURI) {
        if (whitelistMintStatus != true) {
            revert Kubics__WhitelistMintClosed();
        }
        if (checkWhitelist() != true) {
            revert Kubics__NotInTheWhitelist();
        }
        if (balanceOf(msg.sender) >= 1) {
            revert Kubics__WhitelistLimit();
        }
        if (s_mainTokenCounter >= 10000) {
            revert Kubics__MintLimitReached();
        }
        if (existingURIs[metadataURI] == 1) {
            revert Kubics__NFTMinted();
        }
        _;
    }

    /*     //Function to pause the whole contract. This will stop the whole contract and disable token transfers to all accounts
    function pause() public onlyOwner {
        _pause();
    }

    //Function to unpause the whole contract. This will restart the whole contract and enable token transfers to all accounts
    function unpause() public onlyOwner {
        _unpause();
    } */

    // Standard safeMint function
    function safeMint(address to, string memory metadataURI) public onlyOwner {
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        existingURIs[metadataURI] = 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, metadataURI);
    }

    //Custom payToMint A function. Receive metadataURI. Initiall status: false (closed)
    function payToMintA(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounterA >= 7000) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < priceCollectionA) {
            revert Kubics__NeedToPayUp();
        }

        // Updating s_mainTokenCounter
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        // Updating s_tokenCounterA
        s_tokenCounterA = s_tokenCounterA + 1;
        // Updating existingURIs
        existingURIs[metadataURI] = 1;
        // Calling Mint Function. Sending address (msg.sender) and TokenID
        _mint(msg.sender, tokenId);
        //Setting TokeURI. Sending TokenID and MetadataURI
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint B function. Receive metadataURI. Initiall status: false (closed)
    function payToMintB(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounterB >= 2500) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < priceCollectionB) {
            revert Kubics__NeedToPayUp();
        }

        // Updating s_mainTokenCounter
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        // Updating s_tokenCounterB
        s_tokenCounterB = s_tokenCounterB + 1;
        // Updating existingURIs
        existingURIs[metadataURI] = 1;
        // Calling Mint Function. Sending address (msg.sender) and TokenID
        _mint(msg.sender, tokenId);
        //Setting TokeURI. Sending TokenID and MetadataURI
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint C function. Receive metadataURI. Initiall status: false (closed)
    function payToMintC(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounterC >= 400) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < priceCollectionC) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterC = s_tokenCounterC + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint D function. Receive metadataURI. Initiall status: false (closed)
    function payToMintD(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounterD >= 90) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < priceCollectionD) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterD = s_tokenCounterD + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint E function. Receive metadataURI. Initiall status: false (closed)
    function payToMintE(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounterE >= 10) {
            revert Kubics__MintALimitReached();
        }

        if (msg.value < priceCollectionE) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterE = s_tokenCounterE + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting A function. Receive metadataURI. Initiall status: closed
    function whitelistMintingA(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < priceWhitelistedA) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterA = s_tokenCounterA + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting B function. Receive metadataURI. Initiall status: closed
    function whitelistMintingB(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < priceWhitelistedB) {
            revert Kubics__NeedToPayUp();
        }

        //Execute functions
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterB = s_tokenCounterB + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting C function. Receive metadataURI. Initiall status: closed
    function whitelistMintingC(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < priceWhitelistedC) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterC = s_tokenCounterC + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting D function. Receive metadataURI. Initiall status: closed
    function whitelistMintingD(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < priceWhitelistedD) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterD = s_tokenCounterD + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting E function. Receive metadataURI. Initiall status: closed
    function whitelistMintingE(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < priceWhitelistedE) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounterE = s_tokenCounterE + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    // Function to check if the user (msg.sender)is in the whitelist.
    function checkWhitelist() public view returns (bool) {
        //This is example and not related to your contract
        bool whitelist = WhitelistContract.isAddressWhitelisted(msg.sender);
        return whitelist;
    }

    // Function to withdra funds
    function Withdraw() public payable nonReentrant onlyOwner {
        if (address(this).balance <= 0) {
            revert Kubics__NotMoneyInContract();
        }
        // This will pay to one account 1% of the total withdraw amount to devAccount
        // =============================================================================
        (bool dv, ) = payable(i_devAccount).call{
            value: (address(this).balance * 1) / 100
        }("");
        require(dv);
        // This will pay to one account 1% of the total withdraw amount to i_marketingAccount
        // =============================================================================
        (bool mk, ) = payable(i_marketingAccount).call{
            value: (address(this).balance * 1) / 100
        }("");
        require(mk);
        // This will pay to one account 1% of the total withdraw amount to i_designAccount
        // =============================================================================
        (bool ds, ) = payable(i_designAccount).call{
            value: (address(this).balance * 1) / 100
        }("");
        require(ds);
        // This will pay to one account 1% of the total withdraw amount to i_founderAccountA
        // =============================================================================
        (bool fndA, ) = payable(i_founderAccountA).call{
            value: (address(this).balance * 1) / 100
        }("");
        require(fndA);
        // This will pay to one account 1% of the total withdraw amount to i_founderAccountB
        // =============================================================================
        (bool fndB, ) = payable(i_founderAccountB).call{
            value: (address(this).balance * 1) / 100
        }("");
        require(fndB);
        // =============================================================================
        // This will pay the rest of the total withdraw amount to the owner of the contract
        (bool success, ) = i_owner.call{value: address(this).balance}("");
        require(success);
    }

    //Setter for all price collections

    function setPriceCollectionA(uint256 newPriceA) public onlyOwner {
        //Set the new price in Wei!
        priceCollectionA = newPriceA;
    }

    function setPriceCollectionB(uint256 newPriceB) public onlyOwner {
        //Set the new price in Wei!
        priceCollectionB = newPriceB;
    }

    function setPriceCollectionC(uint256 newPriceC) public onlyOwner {
        //Set the new price in Wei!
        priceCollectionC = newPriceC;
    }

    function setPriceCollectionD(uint256 newPriceD) public onlyOwner {
        //Set the new price in Wei!
        priceCollectionD = newPriceD;
    }

    function setPriceCollectionE(uint256 newPriceE) public onlyOwner {
        //Set the new price in Wei!
        priceCollectionE = newPriceE;
    }

    //Setter for all WHITELIST price collections

    /*     function setWhitelistPriceCollectionA(uint256 whitelistNewPriceA) public onlyOwner {
        //Set the new price in Wei!
        priceWhitelistedA = whitelistNewPriceA;
    }

    function setWhitelistPriceCollectionB(uint256 whitelistNewPriceB) public onlyOwner {
        //Set the new price in Wei!
        priceWhitelistedB = whitelistNewPriceB;
    }

    function setWhitelistPriceCollectionC(uint256 whitelistNewPriceC) public onlyOwner {
        //Set the new price in Wei!
        priceWhitelistedC = whitelistNewPriceC;
    }

    function setWhitelistPriceCollectionD(uint256 whitelistNewPriceD) public onlyOwner {
        //Set the new price in Wei!
        priceWhitelistedD = whitelistNewPriceD;
    }

    function setWhitelistPriceCollectionE(uint256 whitelistNewPriceE) public onlyOwner {
        //Set the new price in Wei!
        priceWhitelistedE = whitelistNewPriceE;
    } */

    // Setters for the status
    function setMintStatus(bool status) public onlyOwner {
        mintStatus = status;
    }

    function setWhitelistMintStatus(bool status) public onlyOwner {
        whitelistMintStatus = status;
    }

    // Required function to check if the contract is paused or not
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    )
        internal
        override(
            ERC721,
            ERC721Enumerable /* whenNotPaused */
        )
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
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

    //Get contract balance
    function getContractBalance() public view returns (uint256) {
        return uint256(address(this).balance);
    }

    //Get mainTokenId
    function getTokenCounter() public view returns (uint256) {
        return s_mainTokenCounter;
    }

    //Get TokenId A
    function getTokenCounterA() public view returns (uint256) {
        return s_tokenCounterA;
    }

    //Get TokenId B
    function getTokenCounterB() public view returns (uint256) {
        return s_tokenCounterB;
    }

    //Get TokenId C
    function getTokenCounterC() public view returns (uint256) {
        return s_tokenCounterC;
    }

    //Get TokenId D
    function getTokenCounterD() public view returns (uint256) {
        return s_tokenCounterD;
    }

    //Get TokenId E
    function getTokenCounterE() public view returns (uint256) {
        return s_tokenCounterE;
    }

    // Function to know if an URI is owned
    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    //Function to point the contract to a metadata
    function contractURI() public pure returns (string memory) {
        return "ipfs://QmbzxPg6VFwfWZFtAfPur2xm3RMFE2tnWvRGWT86rgdVDs";
    }

    //Function to set the base URI
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }
}
