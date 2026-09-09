# Daily Expense Tracker

Daily Expense Tracker is a simple full-stack web application developed using Java and Spring Boot. 
It helps users keep track of their daily expenses by adding, viewing, updating, and deleting expense records.

I developed this project to practice Spring Boot, REST APIs, MySQL database connectivity, and basic frontend integration.

## Features

- Add a new expense
- View all expenses
- Update an existing expense
- Delete an expense
- Store expense details in MySQL
- Simple and user-friendly web interface
- Backend developed using Spring Boot REST APIs

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- HTML
- CSS
- JavaScript
- Maven

## Project Structure

The project follows a simple layered structure:

- **Controller** – Handles HTTP requests and API endpoints
- **Service** – Contains the application logic
- **Repository** – Communicates with the MySQL database
- **Entity** – Represents expense data
- **Static** – Contains the frontend HTML, CSS, and JavaScript files

## Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE daily_expense_tracker;
2.Configure your MySQL username and password in your local
application.properties file.
spring.datasource.url=jdbc:mysql://localhost:3306/daily_expense_tracker
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
Note: The actual application.properties file containing database credentials is not included in this repository for security reasons.

## How to Run
Clone this repository.
Open the project in IntelliJ IDEA, Eclipse, or VS Code.
Make sure MySQL is running.
Create the database mentioned above.
Add your database credentials to application.properties.
Run the Spring Boot application.
Open the application in your browser.

##Future Improvements
Add user login and registration
Add expense categories
Add monthly expense reports
Add charts for expense analysis
Deploy the application online
