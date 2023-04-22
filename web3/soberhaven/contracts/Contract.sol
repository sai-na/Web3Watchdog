// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SoberHaven {
    struct Post {
        address owner;
        string title;
        string description;
        uint256 upvotes;
        uint256 downvotes;
        string location ;
        string image;
        uint256 time;
        bool show;
        address [] voters;
    }
    mapping(uint256 => Post) public posts;
    uint256 public postCount = 0;
function createPost(address _owner , string memory _title, string memory _description, uint256 _upvotes, uint256 _downvotes, string memory _location , string memory _image, uint256 _time , bool _show) public returns(uint256){
    Post storage post = posts[postCount];
    require( post.time <= block.timestamp, "Time must be lesser  than current time");
    post.owner = _owner;
    post.description = _description;
    post.upvotes = _upvotes;
    post.downvotes = _downvotes;
    post.location = _location;
    post.image = _image;
    post.time = _time;
    post.title=_title;
    post.show = true;
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
function visibility( uint256 _id , address police) public returns (bool) {
    
}
}