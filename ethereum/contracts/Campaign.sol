

pragma solidity ^0.4.25;

contract CampaignFactory {
     address[] public deployedContract;
     
     function createCampaign(uint minimum) public {
        address contractAddress = new Campaign(minimum, msg.sender);
        deployedContract.push(contractAddress);
     }
     
     function getDeployedContracts() public view returns (address[]){
        return deployedContract;
     }
     
}


contract Campaign {
    
    struct Request {
        string description;
        address recipient; // address of the person who will get money
        uint value;     // eth to transfer
        bool complete;  // whether the request is completed or not
        uint approvalCount; // number of people who voted yes
        mapping(address => bool) approvals; // these are the address of people who have provided approvals the request which means they have voted or not
        
    }
    
    Request[] public requests;
    address public manager; // holds the address of the owner or who has created contract
    uint public minimumContribution; // minimum amount is required to contribute 
    mapping(address => bool) public approvers; // list of address who had donated money, returns true if donated
    uint approversCount; // stores the count  of number of people who has contributed 
    
    
    constructor (uint minContribution, address campaignFactoryAddress) public {
        manager = campaignFactoryAddress;
        minimumContribution = minContribution;
    }
    
    function contribute() public payable  {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;  // address doesn't get stored inside the mapping only the value.
        approversCount++;
        
        
    }
    
    modifier restricted () {
        require(msg.sender == manager);
        _;
    }
    
    function createRequest(string description,address recipient,uint value) public restricted {
        
        Request memory newRequest = Request({
            description: description,
            recipient: recipient,
            value: value,
            complete: false,
            approvalCount: 0
            // mapping is not added and it is not showing any error?
            // because mapping is refrence type and we only need to add value type
        });
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public{
        
        Request storage request = requests[index];   // syntax sugar to not repeat requests[index].structureObject
        
        require(approvers[msg.sender]); // checks the person had contributed the min amount or not. if not contributed revert
        
        require(!requests[index].approvals[msg.sender]); // checks the person already voted or not. if voted revert 
        
        request.approvals[msg.sender] = true; // we have made the address true so that the person cannot vote again.
        requests[index].approvalCount++ ;
        
        
        
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > approversCount/2);
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() view returns (
        uint,uint,uint,uint,address
        ) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
    
}



