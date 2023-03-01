/*
    Full Name: Kinen Ocitti (100725411), Manuel Lopez (100622700)
    Date Completed: March 1 , 2023
*/

/*
Self calling anonymus functo to run when the js is loaded into the page
*/
(function(){
     
    /*
    Function to run when on the contact us html page
    adds onsubmit hadnler to the form in the contatct page 
    when clicking submit printsout all the inputs value and set a timeout that in 3 seconds redirects the user to home page
    */
    function ContactUsForm(){
        // get all the input elemtnts
        document.getElementById("contactName").innerText = 'Name:'
        document.getElementById("contactNumberLabel").innerText = 'Contact Number'
        document.getElementById("contactEmail").innerText = 'Email Addresss:'
        document.getElementById("contactshortMessage").innerText  = 'Short Message: '
        document.getElementById("submitbutton").innerText = 'Submit'

        
        const username = document.getElementById("username")
        const contactNumber = document.getElementById("contactNumber")
        const emailAddress = document.getElementById("emailAddress")
        const shortMessage = document.getElementById("shortMessage")
        const form = document.getElementById("myForm")


        // add a onsubmite event listner
        form.onsubmit = (e)=>{
            // prevent form from refreshing the page
            e.preventDefault()
            
            // log contact information
            console.log(`
            Contact Us Form Values:
            Name: ${username.value} 
            Contact Number: ${contactNumber.value}
            Email Addres: ${emailAddress.value}
            Short Message: ${shortMessage.value}
            `)

            // set timeput to wait 3 seconds to redirect the page
            setTimeout(() => {
                let pathName = window.location.pathname.split('/')
                pathName.pop()
                pathName.push('index.html')

                window.location.pathname = pathName.join('/') 
            }, 3000);
            return false;
        }

    }

    function AboutUsForm(){

        document.getElementById("aboutH4Name1").innerText = 'Name'
        document.getElementById("aboutH5Name1").innerText = 'Manuel Arturo Lopez Perez'
        document.getElementById("aboutDesc1-1").innerText = 'Full Stack Developer'
        document.getElementById("aboutDesc1-2").innerText = 'Proficient in Golang and TypeScript'
        document.getElementById("aboutDesc1-3").innerText = 'Resume'
        
        
        document.getElementById("aboutH4Name2").innerText= 'Name'
        document.getElementById("aboutH5Name2").innerText = "Kinen Ocitti"
        document.getElementById("aboutDesc2-1").innerText = 'Data Analyst.'
        document.getElementById("aboutDesc2-2").innerText = "Proficient in Data Manipulation and Database Managment." 
        document.getElementById("aboutDesc2-3").innerText= "Resume"

    }

    function ProjectsForm(){
        document.getElementById("projectName1").innerText = 'Name'
        document.getElementById("projectName1-1").innerText = 'MICP - SIM'
        document.getElementById("projectDesc1-1").innerText = 'Microprecessor 8085 simulator'
        document.getElementById("projectDesc1-2").innerText = 'WebSocket connection with front-end to send current state of microprocessor'
        document.getElementById("projectDesc1-3").innerText = 'Implemented syntax highlither for assembly language'
        
        
        document.getElementById("projectName2").innerText= 'Name'
        document.getElementById("projectName2-1").innerText = "Grade Sheet Application"
        document.getElementById("projectDesc2-1").innerText = 'Used Bash Script'
        document.getElementById("projectDesc2-2").innerText = "Created an Application that Calcutated the GPA of the Student." 
        document.getElementById("projectDesc2-3").innerText= "It also Calculated the Average Percentage both Semesters of the Student"
        
        document.getElementById("projectName3").innerText = 'Name: '
        document.getElementById("projectName3-1").innerText = 'Cell Automata Visulaizer'
        document.getElementById("projectDesc3-1").innerText = 'Developed a websire to show and run 3 cell automatas'
        document.getElementById("projectDesc3-2").innerText = 'Implemented game of life '
        document.getElementById("projectDesc3-3").innerText = "Implemented Langton's ant"
        document.getElementById("projectDesc3-4").innerText = "Implemented Brian's Brain"
        
        
        document.getElementById("projectName4").innerText= 'Name: '
        document.getElementById("projectName4-1").innerText = "Client and Salesperson Application"
        document.getElementById("projectDesc4-1").innerText = 'Used PHP, CSS, and SQL.'
        document.getElementById("projectDesc4-2").innerText = "Created an Application that Had an interface for both Clients and Salespeople." 
        document.getElementById("projectDesc4-3").innerText= "Both, the Salespeople and Clients were required to Login."

    }

    function ServiceForm(){
        document.getElementById("servicesName1").innerText = 'Name of Skill:'
        document.getElementById("servicesName1-1").innerText = 'Backend-Development'
        document.getElementById("serviesDesc1-1").innerText = "Created REST and Graphql API's."
        document.getElementById("serviesDesc1-2").innerText = 'Created Realtime applications with websockets.'
        document.getElementById("serviesDesc1-3").innerText = 'Created Authentication Services with a roles model.'
        
        document.getElementById("servicesName2").innerText= 'Name of Skill:'
        document.getElementById("servicesName2-1").innerText = "Web Design"
        document.getElementById("serviesDesc2-1").innerText = 'Proficient in: PHP, HTML, CSS and JavaScript.'
        document.getElementById("serviesDesc2-2").innerText = "Creating Responsive Web Design." 
        
        document.getElementById("servicesName3").innerText = 'Name of Skill: '
        document.getElementById("servicesName3-1").innerText = 'Data Analytics and Management'
        document.getElementById("servicesDesc3-1").innerText = 'Great at Developing Statistical Modelling and Visualization.'
        document.getElementById("servicesDesc3-2").innerText = 'Implemented game of life '
        document.getElementById("servicesDesc3-3").innerText = "Implemented Langton's ant"
        
        
        document.getElementById("servicesName4").innerText= 'Name of Skill: '
        document.getElementById("servicesName4-1").innerText = "Mobile Development"
        document.getElementById("serviesDesc4-1").innerText = 'Proficient in React Native.'
        document.getElementById("serviesDesc4-2").innerText = "Responsive Desing on phones." 
        document.getElementById("servicesDesc4-3").innerText= "Both, the Salespeople and Clients were required to Login."
    }

    
    function ValidateInput(inputId, regex, message, confirm, messageConfirm){
        let errorMessage = $('#ErrorMessage').hide()
        $(`#${inputId}`).on('blur', function (){
            let inputText = $(this).val();
            if(!regex.test(inputText)){
                $(this).trigger('focus').trigger('select');
                errorMessage.addClass("alert alert-danger").text(message).show()
            }else{
                errorMessage.removeAttr('class').hide()
            }
        })

        if(confirm){
            $(`#${confirm}`).on('blur', function (){
            let inputText = $(`#${inputId}`).val();
            let confrimText = $(`#${confirm}`).val();
            if(inputText !== confrimText){
                $(this).trigger('focus').trigger('select');
                errorMessage.addClass("alert alert-danger").text(messageConfirm).show()
            }else{
                errorMessage.removeAttr('class').hide()
            }
            })
        }
    }



    function RegisterFromValidate(){
        const firstNamePattern =  /^([A-Z][a-z]{1,25})$/g 
         ValidateInput('FirstName', firstNamePattern, "Please Enter a Valid First Name (First Letter MUST BE Capitalized!)")
        const lastNamePattern =  /^([A-Z][a-z]{1,25})$/g 
         ValidateInput('lastName', lastNamePattern, "Please Enter a Valid Last Name (First Letter MUST BE Capitalized!)")
        const emailPattern = /^[\w-\.]{8,}@([\w-]+\.)+[\w-][^\d]{1,10}$/;
        ValidateInput('emailAddress', emailPattern, "Please Enter a Valid Email (Minimum Length Must be 8 charcters)")
        const passwordPattern = /^.{6,}$/g
         ValidateInput('password', passwordPattern, "Please Enter a Valid Password (Minimum Length Must be 6 charcters)", "confirmPassword", "Confirm password Must be Equal to Password" )

    }


    function RegisterFrom(){
        const errorMessage = document.createElement("div")
        errorMessage.setAttribute("id", "ErrorMessage")
        const main = document.getElementById("main")
        // add it before the scripts tag element
        main.insertBefore(errorMessage, main.firstChild)
        $("#ErrorMessage").hide()
        let isValid = RegisterFromValidate()

        $(`#submitButton`).on('click', function(e){
            e.preventDefault()

            if($('#FirstName').val() !== "" &&
               $('#lastName').val() !== "" &&
               $('#emailAddress').val() !== "" &&
               $('#password').val() !== "" &&
               $('#confirmPassword').val() !== "" &&
               $('#userName').val() !== ""
            ){
                $('#ErrorMessage').removeAttr('class').hide()
                let user = new User($('#FirstName').val(), $('#lastName').val(), $('#emailAddress').val(), $('#userName').val(), $('#password').val())
                console.log(user.toString())
                let users = localStorage.getItem("users")

                if(!users){
                    users = [JSON.parse(user.serialize())]
                    localStorage.setItem("users", JSON.stringify(users))

                    $('#FirstName').val("") 
                    $('#lastName').val("") 
                    $('#emailAddress').val("") 
                    $('#password').val("") 
                    $('#confirmPassword').val("") 
                    $('#userName').val("")
                }else{
                    users = JSON.parse(users)
                    const byUserName = users.find((u)=> u.UserName === user.UserName)
                    const byEmail = users.find((u)=> u.Email === user.Email)
                    let errorMessage = ""

                    if(byEmail){
                        errorMessage += "Email is being used\n"
                    }
                    if(byUserName){
                        errorMessage += "UserName is being used\n"
                    }

                    if(errorMessage !== ""){
                        $('#ErrorMessage').addClass("alert alert-danger").text(errorMessage).show()
                    }else{
                        users.push(JSON.parse(user.serialize()))
                        localStorage.setItem("users", JSON.stringify(users))
                        $('#FirstName').val("") 
                        $('#lastName').val("") 
                        $('#emailAddress').val("") 
                        $('#password').val("") 
                        $('#confirmPassword').val("") 
                        $('#userName').val("")
                    }
                }
            }else{
                $('#ErrorMessage').addClass("alert alert-danger").text("Please complete the form").show()
            }

            return false
        })

    }

    function LoginFrom(){
        const errorMessage = document.createElement("div")
        errorMessage.setAttribute("id", "ErrorMessage")
        const main = document.getElementById("main")
        // add it before the scripts tag element
        main.insertBefore(errorMessage, main.firstChild)
        $("#ErrorMessage").hide()

        $("#submitButton").on('click', function (e){
            e.preventDefault()
            let users =localStorage.getItem('users')

            if(
                $('#username').val() !== ''&&
                $('#password').val() !== ''
            ){
                if(!users){
                    $('#ErrorMessage').addClass("alert alert-danger").text($('#username').val() + " User Does not exist").show()
                    return
                }
                users = JSON.parse(users)

                let user = users.find((u)=> u.UserName === $('#username').val())
                if(!user){
                    $('#ErrorMessage').addClass("alert alert-danger").text($('#username').val() + " User Does not exist").show()
                    return false
                }

                if(user.Password !== $('#password').val()){
                    $('#ErrorMessage').addClass("alert alert-danger").text($('#username').val() + "Password is incorrect").show()
                    return false
                }

                const currentUser = new User(user.FirstName, user.LastName, user.Email, user.UserName, user.Password) 
                localStorage.setItem("currentUser", currentUser.serialize())
                ChangeLoginToLogOut()

            }else{
                $('#ErrorMessage').addClass("alert alert-danger").text("Please complete the form").show()
            }
            return false
        })
    }

    function ChangeLoginToLogOut(){
        let currentUser = localStorage.getItem("currentUser")
        if(!currentUser){
            return
        }

        currentUser = JSON.parse(currentUser)
        console.log(currentUser)
        const loginorOut = document.getElementById("loginOrOut")
        loginorOut.innerHTML = `<a class="nav-link" href="#"><i class="fa-solid fa-address-book"></i>LogOut</a>`
        loginorOut.onclick = ()=>{
            localStorage.removeItem("currentUser")
            const contactUs = document.getElementById("contactUs")
            loginorOut.innerHTML = `<a class="nav-link" href="./login.html"><i class="fa-solid fa-address-book"></i>Login</a>`
            contactUs.nextSibling.remove()
        }


        // create the human resources li nav elemtn
        const userName = document.createElement("div")
        const contactUs = document.getElementById("contactUs")
        // add the necesarry html to the humanrsources element
        userName.innerHTML = `<p>${currentUser.UserName}</p>`
        // add the nav-item class to the human resource element
        userName.classList.add("nav-item")
        // insert the human resources elemetn between the aboutus and the contact us elements
        contactUs.parentNode.insertBefore(userName, contactUs.nextSibling)

    }

     /*
    Start function runs at the start of all the html pages
    Changes products to projevts in the nav bar
    Adds a human resources item in the navbar in between about us and contact us
    Adds a navbar footer at the end of the page 
    */
     function Start (e){
        // get products nav element
        const productsNav = document.getElementById("productsNav")
        // change the contects to a projects html
        productsNav.innerHTML = `<a class="nav-link"  href="./projects.html"><i class="fa-solid fa-bag-shopping"></i> Projects</a>`

        // get the abouts nav element
        const aboutUsNav = document.getElementById("aboutUsNav")
        // create the human resources li nav elemtn
        const humanResourcesElement = document.createElement("li")
        // add the necesarry html to the humanrsources element
        humanResourcesElement.innerHTML = `<a class="nav-link"  href="./humanResouces.html"><i class="fa-solid fa-person"></i> Human Resources</a>`
        // add the nav-item class to the human resource element
        humanResourcesElement.classList.add("nav-item")
        // insert the human resources elemetn between the aboutus and the contact us elements
        aboutUsNav.parentNode.insertBefore(humanResourcesElement, aboutUsNav.nextSibling)

        ChangeLoginToLogOut()

        // create footer element for the html page
        const footer = document.createElement("footer")
        footer.innerHTML = `
        <nav class="navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">©CopyRight 2020</a>
            </div>
        </nav>
        `

        // get the main tag element from the html page
        const main = document.getElementById("main")
        // add it before the scripts tag element
        main.parentNode.insertBefore(footer, main.nextSibling)

        // swithc to check when to run the specific page function
        switch(document.title){
            case 'WEBD6201 - Lab2 - Contact Us':
                ContactUsForm()
                break;
            case 'WEBD6201 - Lab2 - About Us':
                AboutUsForm()
                break;
            case 'WEBD6201 - Lab2 - Projects':
                ProjectsForm()
                break
            case 'WEBD6201 - Lab2 - Services':
                console.log('projects page ran')
                ServiceForm()
                break
            case 'WEBD6201 - Lab2 - Register':
                RegisterFrom();
                break;
            case 'WEBD6201 - Lab2 - Login':
                LoginFrom();
                break
        }

    }

    // Adding event listenr to ensure it runs after all the elements are loaded
    window.addEventListener('load', Start)
})()