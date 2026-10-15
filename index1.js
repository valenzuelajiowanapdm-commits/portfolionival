const message = document.getElementById("message")
const Button1 = document.getElementById("loadBtn")
const Button2 = document.getElementById("clickBtn")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedules = document.getElementById("schedules")

Button2.addEventListener("click", function(){
    Button2.style.backgroundColor = "skyblue"
    Button1.style.backgroundColor = "skyblue"


    message.innerHTML = "Loading Ready......";

    profile.innerHTML = "Profile Ready......";
    grades.innerHTML = " Grades Ready......";
    schedules.innerHTML = "Schedules Ready......";

    const profilePromise = new Promise(function(resolve){

        setTimeout(function(){
    
            profile.innerHTML = "Profile: Loaded";
            profile.style.color = "green"
    
            resolve();
    
        }, 1000)
        })
    
        const gradesPromise = new Promise(function(resolve){
    
            setTimeout(function(){
        
                grades.innerHTML = "Grades: Loaded";
                grades.style.color = "green"
        
                resolve();
        
            }, 2000)
        })
    
        const schedulesPromise = new Promise(function(resolve){
    
            setTimeout(function(){
        
                schedules.innerHTML = "Schedules: Loaded";
                schedules.style.color = "green"
        
                resolve();
        
            }, 3000)
        })
    
        Promise.all([profilePromise, gradesPromise, schedulesPromise])
    
        .then(function(){
            message.innerHTML = "Dashboard Ready!"
            message.style.color = "green"
        })
    })

function showMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account...!")
        }, 2000)
    })
}
Button1.addEventListener("click",function(){
    message.innerHTML = "Loading..."

    profile.innerHTML = "Profile: Loaded";
    grades.innerHTML = "Grades: Loaded";
    schedules.innerHTML = "Schedules: Loaded";

    showMessage()

    .then(function(result){

        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Asset....")
            }, 2000)
        })
    

        .then(function(result){
            message.innerHTML = result;

            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Welcome!")
                }, 1000)
            })

        })
        
        .then(function(result){
            message.innerHTML = result

        })
    })
   
})