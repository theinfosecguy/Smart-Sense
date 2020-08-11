

db.collection("testLogs")
.onSnapshot((snapshot) => {
    snapshot.docs.map((doc)=>{
      var data = doc.data();
      console.log(data.Name)
      
      document.getElementById("nameField").innerHTML = doc.data().Name; 

    });


})


