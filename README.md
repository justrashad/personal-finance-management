# Personal Finance Management Application

## Overview
The Personal Finance Management Application helps users track their expenses, manage budgets, and visualize their financial health through various charts and dashboards. This project is built with a modern tech stack, including Node.js, Express.js, MongoDB, React.js, and Docker.

## Features
- **User Authentication:** Secure registration and login functionality.
- **Dashboard:** Overview of total expenses, income, and remaining budget with visual representations.
- **Expense Tracking:** Add, edit, and delete expenses with category management.
- **Income Tracking:** Add, edit, and delete income sources with category management.
- **Budget Management:** Set and track monthly or yearly budgets.
- **Reports:** Generate and download detailed expense and income reports.
- **Settings:** Manage user profile settings and customize categories.
- **Notifications:** Email notifications for budget limits and periodic summaries.

## Tech Stack
- **Frontend:** React.js, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Docker, Docker Compose

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running on localhost
- Docker and Docker Compose installed
- GitHub account with SSH keys configured

### Clone the Repository
Clone the repository to your local machine:
```
git clone git@github.com:your_username/personal-finance-management.git
cd personal-finance-management
```

### Run the Setup Script
Run the provided setup script to initialize the project:
```
chmod +x setup.sh
./setup.sh
```

This script will:
- Set up the backend and frontend directories
- Install necessary dependencies
- Create environment variable files
- Set up routing and components
- Seed the database with initial data
- Initialize a Git repository and push the initial commit to GitHub

### Running the Application

#### Backend
Navigate to the backend directory and start the server:
```
cd backend
npm start
```

The backend server will run on `http://localhost:5000`.

#### Frontend
Navigate to the frontend directory and start the development server:
```
cd frontend
npm start
```

The frontend server will run on `http://localhost:3000`.

### Docker Setup (Optional)
To run the application using Docker, use the provided `docker-compose.yml` file. Ensure Docker and Docker Compose are installed on your system.

1. Build and start the Docker containers:
    ```
    docker-compose up --build
    ```

2. Access the frontend application at `http://localhost:3000`.

## API Endpoints

### User Authentication
- **POST** `/api/users/register` - Register a new user
- **POST** `/api/users/login` - Login an existing user

### Expense Management
- **POST** `/api/expenses` - Add a new expense
- **GET** `/api/expenses` - Get all expenses
- **PUT** `/api/expenses/:id` - Update an expense
- **DELETE** `/api/expenses/:id` - Delete an expense

### Income Management
- **POST** `/api/incomes` - Add a new income
- **GET** `/api/incomes` - Get all incomes
- **PUT** `/api/incomes/:id` - Update an income
- **DELETE** `/api/incomes/:id` - Delete an income

## Contributing
Feel free to fork this repository, make improvements, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact [rashad@justrashad.com].
