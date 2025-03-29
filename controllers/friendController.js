
// Controller friend

//Access Friend Data
const friends = require('../models/friends')


// Filter by Gender & Letter 
const filterGenderLetter = (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);

        if (matchingFriends.length > 0) {
            // return valid data when the gender matches 
            res.status(200).json(matchingFriends)
        } else {
            // and an error response when there are no matches
            res.status(404).json({error: "No friends matching gender "+filterGender})
        }  
    }

    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.charAt(0).toLocaleLowerCase() == filterLetter.toLocaleLowerCase())

        if (matchingFriends.length > 0) {
            // return valid data when the gender matches 
            res.status(200).json(matchingFriends)
        } else {
            // and an error response when there are no matches
            res.status(404).json({error: "No friends matching letter "+filterLetter})
        }  
    }
}

// Info headers 
const infoHeaders = (req, res) => {
    console.log(req.headers)

    // Modify this response to just return info on the user-agent, content-type and accept headers
    res.json({
        "User-agent" : req.headers["user-agent"], 
        "Content-type" : req.headers["content-type"], 
        "Accept" : req.headers.accept
    }) 
}

// Find a Friend by ID
const getFriendByID = (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    let friend = friends.find(friend => friend.id == friendId)
    friend ? res.status(200).json({result: friend})
        : res.status(404).json({result: 'It doesnt exit a Friend with that id: ' + friendId})
    
        // NOt taking this part???
    // Modify this response with the matched friend, or a 404 if not found
    friend ? res.status(200).json({result: 'Finding friend with ID ' + friendId})
        : res.status(404).json({result: 'It doesnt exit a Friend with that id: ' + friendId})
}

// Post Friend
const postNewFriend = (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    console.log(friends)
    res.status(200).json(newFriend)
}

// Put Update friend Information by ID
const putUpdateFriend = (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    // Replace the old friend data for friendId with the new data from updatedFriend
    let friend = friends.find(friend => friend.id == friendId)
    console.log(friend)
    if (friend) {
        friend.name=updatedFriend.name
        friend.gender=updatedFriend.gender
        return friend
    }

    // Modify this response with the updated friend, or a 404 if not found
    res.json({result: 'Updated friend with ID ' + friendId, data: updatedFriend})
}





module.exports = {
    filterGenderLetter,
    infoHeaders,
    getFriendByID,
    postNewFriend,
    putUpdateFriend,
}