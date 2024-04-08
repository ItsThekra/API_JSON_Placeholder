function GetPost(userId){
    let reqest = new XMLHttpRequest();

    reqest.open("Get",
              "https://jsonplaceholder.typicode.com/posts?userId="+userId)
              reqest.responseType = "json";
    reqest.send();

    reqest.onload = function(){
        // 200 - 299
        if(reqest.status >= 200 && reqest.status < 300)
        {
            document.getElementById('post').innerHTML = ""; 
            let posts = reqest.response
            for(post of posts)
            {
                let content = `
            <div id="post">
                <h3>${post.title}</h3>
                <h4>${post.body}</h4>
            </div>
             `
            document.getElementById('post').innerHTML += content;
           }

        }else{
            console.log("Hey! there's something wrong")
        }
    }
}


function GetUser(){
    let reqest = new XMLHttpRequest();

    reqest.open("Get",
              "https://jsonplaceholder.typicode.com/users")
              reqest.responseType = "json";
    reqest.send();

    reqest.onload = function(){
        // 200 - 299
        if(reqest.status >= 200 && reqest.status < 300)
        {
            document.getElementById('users').innerHTML = ""; 
            let users = reqest.response
            for(user of users)
            {
                let userName = `
                <div id="user" onclick="userClicked(${user.id},this)">
                <h2>${user.name}</h2>
                <h3>${user.email}</h3>
                </div>
             `
            document.getElementById('users').innerHTML += userName;
           }

        }else{
            console.log("Hey! there's something wrong")
        }
    }
}

GetPost(1)
GetUser()

function userClicked(id,el){ // user id 
   GetPost(id)

   let selectedElements = document.getElementsByClassName("selected") 

   for(element of selectedElements){
    element.classList.remove("selected") 
   }

    el.classList.add("selected") // Add class to "div" element by using JS 
}
