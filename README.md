# Milestone Project Three - E-commerce product page

This project is for educational purposes only.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Technologies used](#technologies-used)
  - [Problems faced](#problems-faced)
  - [Features to Implement in the future](#features-to-implement-in-the-future)
  - [Useful resources](#useful-resources)
  - [Deployment](#deployment)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it


### Links

- Live Site URL: [EcommerceSite](https://ecommercesite-80fcc.web.app/sneakers)

## My process

### Technologies Used

- [**CSS3**] - CSS3 was used for the styling of the elements and content of the project
- [**Flexbox**] - Flexbox was used for making the pages responsive.
- [**React**](https://reactjs.org/) - This project was built in React JS library.
- [**ReactRouter**](https://reactrouter.com/) - React router version 6 was used for routing the pages.
- [**StyledComponents**](https://styled-components.com/) - I have used styled component for creating my hambuger icon and the side bar page.
- [**Git**](https://git-scm.com/) - I've used **Git** as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
- [**GitHub**](https://github.com/)
    - I've used **GitHub** as a remote repository to push and store the committed changes to my project from Git.
- [**Firebase**](http://firebase.google.com/) - I've also used Firebase hosting to deploy my website in a live environment.

### Problems faced

- **Burger icon** - The burger icon wasn't expanding when clicked. The reason for this was the bootstrap cdn link which was not correct. I had to search on youtube for a tutorial in order to correct it to enable it work fine.
- **lightbox gallery** - I had issues with switching images in the gallery by clicking the previous and next buttons. Also I had problem positioning the previous and next icon on the modal image. However, this was solved by using z-index.
- **Grids** - I initial had issues with my grids as the site breaks whenever I tried to change the sizes of the screen. I had to use media query for each screen size needed.
- **Cart** - I had issues with deleting added items from the cart. When the delete icon in the cart is clicked the whole page becomes blank with errors. Page has to be refreshed to come back. I sloved the problem by adding a reload function to the delete function so it automatically refreshes the page when delete icon is clicked 
- **Thumnails Images** - I had issues with make the thumnails show active style and also change the large image source with on click. I solve it by merging both functions in a single function with worked.


### Features to Implement in the future

- **Sign Up Page** - I want to use firebase authentication to enable users sign up with their details.
- **Sign In Page** - I will add authentication to enable users sign in so they can see thier own avater and display name on the pages
- **Theme Colors** - I would like to add different theme colors to enable users choose their prefered colors.
- **Payment System** - When I learn about integrating payment system into a site, I would like to add it to the site to enable users make payment during checkouts. 

### Useful resources

- [NetNinja](https://netninja.dev/courses) - I took courses here for React and Firebase. I really liked the explanation pattern and will use it going forward.
- [JavaScript](https://javascript.info/) - This website helped me understand some Javascript concept. I'd recommend it to anyone wanting to improve on thier javascript.
- [Web Dev](https://web.dev/learn/) - This website helped me understand different CSS tools more, media query, flexbox, Z-index and so on. I'd recommend it to anyone wanting to improve on thier CSS.

## Deployment

The hosting platform that I've used for my project is Firebase hosting. To deploy my website to firebase, I used the following steps:

1. Created a project called 'EcommerceSite' in my firebase projects.
2. Installed Firebase CLI 
3. Initialised my project using the `firebase init` command.
    1. Selected the firebase project to connect to my local project dirctory.
    2. Specified a directory to use as my public root directory and name it 'build'
    3. Chose configuration to my site to be 'One-page app'
4. Deployed the site to firebase by using the `npm run build` command and then `firebase deploy` .


## Author

- Website - [Zulkiful Mansur](https://www.your-site.com)
- Frontend Mentor - [@zeek-mansur](https://www.frontendmentor.io/profile/zeek-mansur)
- Twitter - [@Zeek_Mansur](https://twitter.com/Zeek_Mansur)


## Acknowledgments

- Thanks to my mentor, Alex Ford, for his feedback on my project's scope, design and functionality, and for hints on what I needed to do better to improve the project.

- A special mention to my former mentor, Sunny Hebbar, who was there from the start of my Front end development journey.

