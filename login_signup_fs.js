const fs = require('fs');
let dict={}
let array=[]
let main={}
let dict1={}
let list1=[]
let readlineSync=require('readline-sync') 
let user = readlineSync.question("Login or Signup :")




if (user  == "signup"){
    var user_name = readlineSync.question("username :")
    var password1 = readlineSync.question("password:")
    var password2 = readlineSync.question("confirm password :")

    if(password1 == password2){
        dict["username"]=user_name
        dict["password"]=password1 
    
        array.push(dict)
        main["user"]=array
        // console.log(main)
        const file="user.json"
        fs.exists(file,function(exists){
            if (exists){
                const xyz=fs.readFile('user.json', 'utf8', (err, xyz) => {
                    if(err) throw err;
                    var k=JSON.parse(xyz)
                    var list1=(k["user"])
            
        
            
                    
                    dict["username"]=user_name
                    dict["password"]=password1
                    
                    
                    list1.push(dict)
                    main["user"]=list1
                    console.log(main)
                                
                
                    fs.writeFile('user.json', JSON.stringify(main,null,4),err => {
                        if (err) {
                            throw err;
                        }
                    })
                    console.log("JSON data is saved.");
                
                })
            }
            else{
                const data = JSON.stringify(main);
                fs.writeFile('user.json', data, (err) => {
                    if (err) {
                        throw err;
                    }
                })
                console.log("JSON data is saved.");
            

            }
        })
    }
    else{
        console.log("Both password not same")
    
    
    }
    for(i in list1){
        var z = list1[i]["username"]
        if(z == username){
            break

        }

    }
    if (z == user_name){
        console.log("already is there")
    }
    else{
        dict["username"]=user_name
        dict["password1"]=password1
        main["user"]=list1


        console.log("you are signup successfully")
        
        let description= readlineSync.question("description:")
            let dob = readlineSync.question("DOB:")
            let hobbi = readlineSync.question("hobbies:")
            let Gender = readlineSync.question("gender:")
        // var demo={"username":user_name,"password":password1,"profile":{"description":description,"dob":date_of_birth,"hobbies":hobbies}}
        // list1.push(demo)
            dict1["description"]=description
            dict1["gender"] =Gender
            dict1["hobbies"]=hobbi
            dict1["dob:"]=dob
            list1.push(dict1)
            main["user"]=list1


        fs.writeFile('user.json', JSON.stringify(main,null,4),err => {
            if (err) throw err;
        
            
            
        })
        

//             }
            }
}else{
    var user_name = readlineSync.question("username :")
    var password1 = readlineSync.question("password:")

    let data1=fs.readFile('user.json','utf8',(err,data1)=>{
        if(err) throw err;
        var file=JSON.parse(data1)
        var doublelist=(file["user"])

        for(i in doublelist){
            var name = doublelist[i]["username :"]
            var password = doublelist[i]["password : "]
            var gender =doublelist[i]["gender :"]
            var bio =  doublelist[i]["description :"]
            var hobbies = doublelist[i]["hobbies :"]
            var date_of_birth=doublelist[i]["dob :"]

            if(name == user_name && password==password1){
                break
            }
        }
        if(name == user_name && password==password1){
            console.log("login successfully")
            console.log("username" , user_name)
            console.log("gender", gender)
            console.log("bio", bio)
            console.log("hobbies",hobbies)
            console.log("DOB", date_of_birth)

        }else{
            console.log("invalid username & password")
        }      
    })
    




    }
    


        
    
        
    
       



    
    
    


    


     