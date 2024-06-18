# PersLib---FrontEnd


<h3>Description</h3>

PersLib is an application that can be utilized by users who need to record their pictures, videos, documents, etc. through the years.

The PersLib app has two repositories:
 - PersLib_Back-End: is for back-end of the app with with Python & Django.
 - PersLib_Front-End: is for front-end of the app with React & Node.js
 

Users will need to signup and login if they need to access the app.


 <h2> PersLib---Front-End </h2></br>

 <h3>Wireframes</h3>
 
- Please see the wireframe for the Create Account page below: </br></br>
 ![image](https://github.com/davedawita/PersLib---FrontEnd/assets/155693018/d2a62136-4250-4531-b8d1-94530361b707)
 
 - Please see the wireframe for the Login page below: </br></br> 

![image](https://github.com/davedawita/PersLib---FrontEnd/assets/155693018/8c5e84e1-70ae-495c-bce5-25254650229a)

 - Please see the wireframe for the index page below: </br></br>

![image](https://github.com/davedawita/PersLib---FrontEnd/assets/155693018/3f096676-3c1a-4459-a3af-95e4e2785c82)

 - Please see the wireframes for the show pages page below: </br></br>
 
![image](https://github.com/davedawita/PersLib---FrontEnd/assets/155693018/7f4cba48-702e-4e9a-b03e-5231d610716b)


![image](https://github.com/davedawita/PersLib---FrontEnd/assets/155693018/13363932-b244-4cfc-a44d-8ace64eee28b)


 
**<h3>User Stories</h3>** 
 - 

The folder structure includes components: Header & main & pages: Create, Edit, Index, & Show.</br>
The App is basically codded in App.js and all user log-in/createaccount code is in App.js.</br>

<h2>ManageProject ---Back-End</h2>

<h3>Back-end Repository</h3>
The backend repo can be accessed through the link below:</br>


<h3>MODELS:</h3> 
The following models are included: </br></br>

<b>Users.js:</b></br>
const userSchema = new mongoose.Schema({</br>
    username: {type: String, unique: true, required: true},</br>
    password: {type: String, required: true},</br>
    image: String</br>
})</br></br>
<b>tasks.js:</b></br>
const taskSchema = new mongoose.Schema({</br>
    title: {type: String, required: true},</br>
    description: String,</br>
    dateCreated: {type: Date, default: Date.now, required: true},</br>
    dateDue: {type: Date, required: true},</br>
    status: {type: String, enum: ['To Do', 'Doing', 'Done'], required: true}</br>
})</br>

<h3>ROUTES:</h3>
The following list of routes are included:</br>

![image](https://github.com/davedawita/ManageProject---Front-End/assets/155693018/d19eac79-0bde-42a4-a446-b2401a0c2e51)


<h4>In controllers/tasks.js:</h4> </br>

GET/Tasks allows users to see the main project board with all tasks.</br>
POST/Tasks allows users to add a task to the project board.</br>
PUT/Tasks/:id allows users to update the specific task's details</br>
DELETE/Tasks/:id allows users to delete tasks</br>


<h4>In controllers/users.js:</h4> </br>
PUT/login allows users to login. </br>
POST/createaccount allows users to have user name and password</br>

handleLogout() function on the front-end allows users to logout</br></br>


<h2>Installation Instructions</h2>
 - Please use the link below to install the app. Enjoy the app!   </br>
 
 
If you are on a browser, use of Google chrome is highly recommended.    </br>
<h2>Technologies used</h2>
Python (Backend programming Language), Django (Backend Framework), REACT (FrontEnd Framework), Javascript, Node.js (Server Side JavaScript runtime), HTML, tailwind CSS, ejs, Postgres (Database), Postman, and Figma(Only for wireframes without Dev Mode). We can also say that we use Python-Django stack.  </br>

<h2>MVP Goals</h2>
Full CRUD(Create, Read, Update, Delete) Functionality. </br>
Login and Logout access for users   </br>

<h2>Troubleshooting</h2>
Please click the back button of the browser to go back to previous page. Refresh the page.   </br>

<h2>Forthcoming Features</h2>
In the future, we need users to be able to give access to family members so that the documents can be viewed by others.
