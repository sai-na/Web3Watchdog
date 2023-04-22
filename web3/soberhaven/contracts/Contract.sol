// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SoberHaven {
    struct Post {
        address owner;
        string title;
        string description;
        uint256 upvotes;
        string location ;
        string image;
        uint256 time;
        bool showPublic;
        bool showPolice;
        address [] voters;
    }
    mapping(uint256 => Post) public posts;
    uint256 public postCount = 0;
    address[] public police = [0x936F3348c3035ea5530F0d959272DC6cC0402C44,0x936F3348c3035ea5530F0d959272DC6cC0402C44];
function createPost(address _owner , string memory _title, string memory _description, uint256 _upvotes, string memory _location , string memory _image, uint256 _time ) public returns(uint256){
    Post storage post = posts[postCount];
    require( post.time <= block.timestamp, "Time must be lesser  than current time");
    post.owner = _owner;
    post.description = _description;
    post.upvotes = _upvotes;
    post.location = _location;
    post.image = _image;
    post.time = _time;
    post.title=_title;
    post.showPublic = false;
    post.showPolice= false;
    postCount++;
    
    return postCount -1;


}
function getPosts() public view returns(Post[] memory){
    Post[] memory allPosts = new Post[](postCount);
   for(uint i=0 ; i<postCount ; i++){
        Post storage item = posts[i];
        allPosts[i] = item;
   }
   return allPosts;
}
function updatePublicView( uint256 _id ) public returns (bool) {
    //require(msg.sender == police, "Only police can update the view");
    for(uint i=0 ; i<police.length ; i++){
        if(msg.sender == police[i]){
            Post storage post = posts[_id];
            post.showPolice = true;
            return true;
        }
    }
   
    
    return false;
}
}