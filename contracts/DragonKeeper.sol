// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

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

contract DragonKeeper is
    ERC721,
    ERC721URIStorage,
    Pausable,
    Ownable,
    ReentrancyGuard
{
    //Declaring all tokens Counters
    uint256 private s_mainTokenCounter;
    uint256 private s_tokenCounter_Legendary;
    uint256 private s_tokenCounter_UltraRare;
    uint256 private s_tokenCounter_Rare;
    uint256 private s_tokenCounter_Uncommon;
    uint256 private s_tokenCounter_Common;

    //Declaring accounts
    address private immutable i_owner;
    address private immutable i_devAccount;
    address private immutable i_marketingAccount;
    address private immutable i_designAccount;
    address private immutable i_founderAccountA;
    address private immutable i_founderAccountB;

    //Declaring price Collections
    uint256 private price_Legendary;
    uint256 private price_UltraRare;
    uint256 private price_Rare;
    uint256 private price_Uncommon;
    uint256 private price_Common;

    //Declaring status
    bool public mintStatus;
    bool public whitelistMintStatus;

    //Declaring whitelist Address and Interface
    address public constant WHITELIST_CONTRACT =
        0xCaE8b7Cd1b0956D1ce2d77a0ad9a854201447500; // Goerli test contract
    //ETH contract Address = 0x9B399A856B0016Cf91c60aaAE195B33738874C2B
    WhitelistInterface WhitelistContract =
        WhitelistInterface(WHITELIST_CONTRACT);

    // Declaring mapping: URIs to 1 or 0 (true or false)
    mapping(string => uint8) existingURIs;

    //Constructor
    constructor() ERC721("DragonKeeper", "DKP") {
        //Setting accounts
        i_owner = msg.sender;
        i_devAccount = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_marketingAccount = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_designAccount = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_founderAccountA = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        i_founderAccountB = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;

        //Setting price for each collection Mint
        price_Legendary = 0.005 ether; //0,5
        price_UltraRare = 0.005 ether; //0,4
        price_Rare = 0.005 ether; //0,3
        price_Uncommon = 0.005 ether; //0,2
        price_Common = 0.005 ether; //0,18

        //Setting status: true= open & false = closed
        mintStatus = true;
        whitelistMintStatus = true;
    }

    modifier mintCompliance(string memory metadataURI) {
        if (mintStatus != true) {
            revert Kubics__MintClosed();
        }
        if (s_mainTokenCounter >= 10588) {
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
        if (s_mainTokenCounter >= 10588) {
            revert Kubics__MintLimitReached();
        }
        if (existingURIs[metadataURI] == 1) {
            revert Kubics__NFTMinted();
        }
        _;
    }

    //Function to pause the whole contract. This will stop the whole contract and disable token transfers to all accounts
    function pause() public onlyOwner {
        _pause();
    }

    //Function to unpause the whole contract. This will restart the whole contract and enable token transfers to all accounts
    function unpause() public onlyOwner {
        _unpause();
    }

    // Standard safeMint function
    function safeMint(address to, string memory metadataURI) public onlyOwner {
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        existingURIs[metadataURI] = 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, metadataURI);
    }

    //Custom payToMint_Legendary function. Receive metadataURI. Initiall status: false (closed)
    function payToMint_Legendary(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounter_Legendary >= 40) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < price_Legendary) {
            revert Kubics__NeedToPayUp();
        }

        // Updating s_mainTokenCounter
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        // Updating s_tokenCounterA
        s_tokenCounter_Legendary = s_tokenCounter_Legendary + 1;
        // Updating existingURIs
        existingURIs[metadataURI] = 1;
        // Calling Mint Function. Sending address (msg.sender) and TokenID
        _mint(msg.sender, tokenId);
        //Setting TokeURI. Sending TokenID and MetadataURI
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint_UltraRare function. Receive metadataURI. Initiall status: false (closed)
    function payToMint_UltraRare(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounter_UltraRare >= 216) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < price_UltraRare) {
            revert Kubics__NeedToPayUp();
        }

        // Updating s_mainTokenCounter
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        // Updating s_tokenCounterB
        s_tokenCounter_UltraRare = s_tokenCounter_UltraRare + 1;
        // Updating existingURIs
        existingURIs[metadataURI] = 1;
        // Calling Mint Function. Sending address (msg.sender) and TokenID
        _mint(msg.sender, tokenId);
        //Setting TokeURI. Sending TokenID and MetadataURI
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint_Rare function. Receive metadataURI. Initiall status: false (closed)
    function payToMint_Rare(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounter_Rare >= 972) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < price_Rare) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_Rare = s_tokenCounter_Rare + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint_Uncommon function. Receive metadataURI. Initiall status: false (closed)
    function payToMint_Uncommon(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounter_Uncommon >= 2880) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < price_Uncommon) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_Uncommon = s_tokenCounter_Uncommon + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom payToMint_Common function. Receive metadataURI. Initiall status: false (closed)
    function payToMint_Common(string memory metadataURI)
        public
        payable
        nonReentrant
        mintCompliance(metadataURI)
        returns (uint256)
    {
        //Modifier checks three main conditionals before executing the Mint
        //Checking specific conditionals before executing the Mint
        if (s_tokenCounter_Common >= 6480) {
            revert Kubics__MintALimitReached();
        }
        if (msg.value < price_Common) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_Common = s_tokenCounter_Common + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting_Legendary function. Receive metadataURI. Initiall status: closed
    function whitelistMinting_Legendary(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < price_Legendary) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_Legendary = s_tokenCounter_Legendary + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting_UltraRare function. Receive metadataURI. Initiall status: closed
    function whitelistMinting_UltraRare(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < price_UltraRare) {
            revert Kubics__NeedToPayUp();
        }

        //Execute functions
        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_UltraRare = s_tokenCounter_UltraRare + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting_Rare function. Receive metadataURI. Initiall status: closed
    function whitelistMinting_Rare(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < price_Rare) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_Rare = s_tokenCounter_Rare + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting_Uncommon function. Receive metadataURI. Initiall status: closed
    function whitelistMinting_Uncommon(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < price_Uncommon) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_Uncommon = s_tokenCounter_Uncommon + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    //Custom whitelistMinting_Common function. Receive metadataURI. Initiall status: closed
    function whitelistMinting_Common(string memory metadataURI)
        public
        payable
        nonReentrant
        whitelistMintCompliance(metadataURI)
        returns (uint256)
    {
        //Checking specific conditionals before executing the Mint
        if (msg.value < price_Common) {
            revert Kubics__NeedToPayUp();
        }

        uint256 tokenId = s_mainTokenCounter;
        s_mainTokenCounter = s_mainTokenCounter + 1;
        s_tokenCounter_Common = s_tokenCounter_Common + 1;
        existingURIs[metadataURI] = 1;
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return s_mainTokenCounter;
    }

    // Function to check if the user (msg.sender)is in the whitelist interface.
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

    function setPrice_Legendary(uint256 newPriceA) public onlyOwner {
        //Set the new price in Wei!
        price_Legendary = newPriceA;
    }

    function setPrice_UltraRare(uint256 newPriceB) public onlyOwner {
        //Set the new price in Wei!
        price_UltraRare = newPriceB;
    }

    function setPrice_Rare(uint256 newPriceC) public onlyOwner {
        //Set the new price in Wei!
        price_Rare = newPriceC;
    }

    function setPriceCollectionD(uint256 newPriceD) public onlyOwner {
        //Set the new price in Wei!
        price_Uncommon = newPriceD;
    }

    function setPrice_Common(uint256 newPriceE) public onlyOwner {
        //Set the new price in Wei!
        price_Common = newPriceE;
    }

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

    //Get contract balance
    function getContractBalance() public view returns (uint256) {
        return uint256(address(this).balance);
    }

    //Get mainTokenId
    function getTokenCounter() public view returns (uint256) {
        return s_mainTokenCounter;
    }

    //Get s_tokenCounter_Legendary
    function getTokenCounter_Legendary() public view returns (uint256) {
        return s_tokenCounter_Legendary;
    }

    //Get s_tokenCounter_UltraRare
    function getTokenCounter_UltraRare() public view returns (uint256) {
        return s_tokenCounter_UltraRare;
    }

    //Get s_tokenCounter_Rare
    function getTokenCounter_Rare() public view returns (uint256) {
        return s_tokenCounter_Rare;
    }

    //Get s_tokenCounter_Uncommon
    function getTokenCounter_Uncommon() public view returns (uint256) {
        return s_tokenCounter_Uncommon;
    }

    //Get s_tokenCounter_Common
    function getTokenCounter_Common() public view returns (uint256) {
        return s_tokenCounter_Common;
    }

    // Function to know if an URI is owned
    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    //Function to point the contract to a metadata
    function contractURI() public pure returns (string memory) {
        return "ipfs://QmQ8YF2JaVHBmFrrSvuNviyFKYaNJBZTRpUtHUYQ5VGMfY";
    }

    //Function to set the base URI
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }
}
