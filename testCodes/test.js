
friends=[
    {
      "id": 1,
      "name": "Phoebe",
      "gender": "female"
    },
    {
      "id": 2,
      "name": "Joey",
      "gender": "male"
    },
    {
      "id": 3,
      "name": "Chandler",
      "gender": "male"
    },
    {
      "id": 4,
      "name": "Monica",
      "gender": "female"
    },
    {
      "id": 5,
      "name": "Ross",
      "gender": "male"
    },
    {
      "id": 6,
      "name": "Rachael",
      "gender": "female"
    }
  ]

// // filter by gender
// function filterGender(gender,list) {
//     let listGender=[...list]

//     if (gender) {
//         listGender=listGender.filter(friend => friend.gender == gender);
//         return listGender;
//     }
// }

// console.log(filterGender("female",friends))


// // filter by Name
// function filterLetter(letter,list) {
//     let listLetter=[...list]

//     if (letter) {
//         listLetter=listLetter.filter(friend => friend.name.charAt(0).toLowerCase() == letter);
//         return listLetter;
//     }
// }

// console.log(filterLetter("p",friends))

// // Find by Id 
// function matchingByID(id,list) {
//   let friend = list.find(friend => friend.id == id)
//   return friend; 
// }

// console.log(matchingByID(4,friends))

let newFriendData={
  "name": "Jhon",
  "gender": "male"
}
// Update date by ID
function matchingByID(id,list,newFriend) {
  
  let friend = list.find(friend => friend.id == id)
    console.log(friend)
  if (friend) {
    friend.name=newFriend.name
    friend.gender=newFriend.gender
    return friend
  }
}

console.log(matchingByID(1,friends,newFriendData))