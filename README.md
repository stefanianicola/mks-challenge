# React + TypeScript + Vite

# Making Sense Challenge

This is a React - TypeScript - styled-components project developed with Vite.
This project was created as part of a challenge for the UX Developer position at Making Sense. 

  


## Installation

To install the proyect, follow these steps:

  
1. Clone the repository:

  `clone https://github.com/stefanianicola/mks-challenge.git` 
  

2. Navigate to the project directory:

`cd yourprojectname`


3. Install dependencies:

`npm install
`
 

## Running the Proyect

  
Start the development server:

  
`npm run dev`

 
To start the Storybook environment:

`npm run storybook`
  

# Thought Process

First, look carefully at the design, to be able to separate each piece into small components.

Once I identified each one, I thought of a form of architecture where it is easy to find each one and be understood.
Create a components folder where you can locate pieces such as the header, cards, texts, etc. all separated into folders and with a styled-component file where the style of each DOM element is defined.
Create a data folder, where I created a constant with the data that I would later use in the app.
Inside the shared folder there are different styling files that I then use in all the components and in the rest of the app, for example wrappers, color variables, global styles and responsive grid.

Then I began to create each element of the app, let's start them with the header, the toggle and the operation of the theme and then I continued with the grid, the cards and finally with the modal and the graph.
When I had everything fairly working I thought it would be a good practice to use a context where I could share the data with all the components.

At the end of development, add EsLint, to tabulate all the files so that they all have an order.
Once this was done, as they had told me that they worked with Storybook, I tried to use it with some of my components,  I need a little more research time, beyond that, I was able implement it and create the text stories, the theme switch toggle and a card.