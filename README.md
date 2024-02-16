# Hospital Server

This is a simple Express.js server application that manages information about kidney health for patients.

## Description

This application allows users to track the health status of their kidneys. Users can add new kidney data, retrieve the total number of kidneys, the number of healthy kidneys, the number of unhealthy kidneys, and delete unhealthy kidneys if any.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShAhilK2/Hospital-server.git


2.npm install

3.node server.js
or nodemon server.js

 ## Usage 
GET /

Retrieves information about the kidneys, including the total number of kidneys, the number of healthy kidneys, and the number of unhealthy kidneys.
POST /

Adds a new kidney to the user's data.

Request Body:

json

{
  "isHealthy": true
}

Replace "isHealthy" with true or false depending on the health status of the kidney.
DELETE /

Deletes all unhealthy kidneys if any.
PUT /

(Note: The PUT route in the provided code is currently empty and does not have any functionality.)
