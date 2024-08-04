# Order System

This project consists of three main components:
1. Client-side application for the first and second screens using Redux Toolkit and React.
2. Server-side application for the first screen using .NET 8 and Entity Framework to fetch data from a SQL Server.
3. Server-side application for the second screen using Node.js or NestJS, saving data in a NoSQL DB (preferably Elasticsearch).

## Prerequisites
- Node.js
- .NET SDK
- SQL Server
- Elasticsearch

## Setup and Run

### Client-side (React)
Follow the instructions in the `client/README.md`.

### Server-side (First screen with .NET 8)
Follow the instructions in the `server-dotnet/README.md`.

### Server-side (Second screen with Node.js and Elasticsearch)
Follow the instructions in the `server-node/README.md`.

## Git Setup
1. Initialize a new Git repository:
    ```bash
    git init
    ```

2. Add all files to the repository:
    ```bash
    git add .
    ```

3. Commit the changes:
    ```bash
    git commit -m "Initial commit"
    ```

4. Add a remote repository (e.g., GitHub):
    ```bash
    git remote add origin https://github.com/yourusername/order-system.git
    ```

5. Push the changes to the remote repository:
    ```bash
    git push -u origin master
    ```

### Additional Notes
- Ensure all servers are running before testing the client application.
- Modify the API endpoints in the client code as per your server configurations.
