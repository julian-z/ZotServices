![ZotServices](https://github.com/julian-z/ZotServices/blob/main/client/src/static/zotservices.png)

Developed for UCI's Webjam 2023.
- [Julian Zulfikar](https://github.com/julian-z): Front End Developer
- [Simon Cao](https://github.com/simonxcao): Full Stack Developer
- [Manjot Singh](https://github.com/ManjotSingh18): Back End Developer
- [Alvin Phan](https://github.com/alvinatp): Back End Developer

## Purpose 🚀
☝️ Have you ever struggled to find that perfect barber near UCI? Perhaps, you're looking for someone to watch your dog while you're at home for Winter break. Whatever it is, ZotServices has got it covered!

🕓 As UCI students, we understand that every minute counts when it comes to managing the busy student life. Made for students by students, we plan to offer a platform that connects students with quick & nearby services to make life on campus a breeze.

🫂 Our goal at ZotServices is to be a central community center where students can post their unique side hustles and services. Imagine being able to grab a cheap yet stylish haircut near campus or having someone else tackle the grocery shopping while you focus on your studies!

🤝 Whether you're a student with a talent to share or someone in need of a helping hand, ZotServices is the bridge that brings UCI students together. Join ZotServices today and experience the convenience of a connected campus community!

## Screenshots 🎥
As of 11/17 (our WebJam submission):
### Search
![Search Page (Desktop)](https://github.com/julian-z/ZotServices/blob/main/readme/search.png){: style="height:700px"}
![Search Page (Mobile)](https://github.com/julian-z/ZotServices/blob/main/readme/searchmobile.gif){: style="height:700px"}

### Service
![Service Page (1)](https://github.com/julian-z/ZotServices/blob/main/readme/service1.png){: style="height:700px"}
![Service Page (2)](https://github.com/julian-z/ZotServices/blob/main/readme/service2.png){: style="height:700px"}

### Profile
![Profile Page (1)](https://github.com/julian-z/ZotServices/blob/main/readme/profile.png){: style="height:700px"}

## Tech Stack 🤖

### Backend
- Python
- Django
- SQLite
### Frontend
- HTML/CSS
- JavaScript
- React
- Bootstrap

## Setup 🖥️

### Backend
Create a [virtual environment](https://docs.python.org/3/library/venv.html) in the root folder - title it "venv". Then, activate it using the following commands:
```
cd venv
cd Scripts
activate
```
Navigate to ZotServicesAPI and run the Django server:
```
cd ZotServicesAPI
python manage.py runserver
```
The backend will now be hosted on port 8000 of your localhost!

### Frontend
Navigate to client and run an npm install:
```
cd client
npm install
npm start
```
The frontend will now be hosted on port 3000 of your localhost! From here, you may visit this port on your browser and explore ZotServices.

## Future Features 🕓
Due to the time constraints, we did not get to finish:
- Fully functional user registration/login
  - A brief one is currently in place (/login)
- Create service/review from the logged in user

## Conclusion 👋
Thank you to UCI's ICS Student Council for hosting this amazing event! All of us on ZotServices are grateful for the time we had to develop this project.