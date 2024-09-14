## VT Hax 12 Project Submission ##

# Group Members #
# Omer Ahmed, Natnael Tesfaye, Nathnael Mecuria, Abiel Meaza #

# Project Description #
# Project README

## Overview

This project is a web application designed to handle user authentication, posting requests and solutions, a point system with a leaderboard, and weekly summaries. The application is built using a React.js frontend and a Spring Boot backend with MongoDB.

## Project Structure

### Frontend

- **Framework:** React.js (version 18)
- **State Management:** React Context API or Redux
- **UI Library:** Tailwind CSS for styling
- **HTTP Client:** Axios for API requests
- **Build Tool:** Vite (for fast development and build)

### Backend

- **Framework:** Spring Boot (version 3.3)
- **Language:** Java (version 21)
- **Database:** MongoDB
- **Data Access:** Spring Data MongoDB
- **Authentication:** Spring Security with JWT (JSON Web Tokens)
- **Email Service:** SendGrid (for sending weekly summaries)
- **Scheduling:** Spring Scheduler (for automating tasks like sending email summaries)
- **Deployment:** Heroku (for deploying the Spring Boot application)

## Database Schema

- **Users Table:**
  - `id` (UUID, primary key)
  - `email` (VARCHAR, unique)
  - `password` (VARCHAR)
  - `points` (INT)

- **Requests Table:**
  - `id` (UUID, primary key)
  - `title` (VARCHAR)
  - `description` (TEXT)
  - `media_url` (VARCHAR, optional)
  - `category` (VARCHAR)

- **Solutions Table:**
  - `id` (UUID, primary key)
  - `request_id` (UUID, foreign key to Requests)
  - `user_id` (UUID, foreign key to Users)
  - `solution_description` (TEXT)
  - `points_awarded` (INT)

## Setup and Installation

### Frontend

1. **Set Up React.js Environment:**
   - Initialize the React project and set up the project structure.
   - Install libraries: `Axios` for API calls, `Tailwind CSS` for styling.

2. **Build User Authentication:**
   - Implement Single Sign-On (SSO).
   - Create basic error handling and email validation UI.

3. **Posting Requests and Solutions:**
   - Create forms for submitting requests and solutions with media upload options.
   - Develop UI components to display posted requests and solutions.

4. **Point System and Leaderboard:**
   - Design a leaderboard UI to display user points and rankings.
   - Create components to show point awards and progress.

5. **Weekly Summaries:**
   - Develop UI for viewing past activity and summaries.

6. **Post Types and Notifications:**
   - Implement UI for different types of posts and set up notifications.

7. **Verified Organizations and Incentives:**
   - Design UI for verified organizations and incentive tracking.

8. **Integration and Testing:**
   - Integrate with backend APIs.
   - Conduct front-end testing for functionality and UI/UX.

9. **Deployment:**
   - Deploy the React app to Vercel or Netlify.

### Backend

1. **Initialize Spring Boot Project:**
   - Install necessary dependencies: MongoDB, Spring Security.
   - Set up database configuration.

2. **User Authentication:**
   - Implement user registration and login using Spring Security.
   - Set up email verification and JWT tokens (or session management).

3. **Posting Requests and Solutions:**
   - Implement API endpoints for posting and retrieving requests and solutions.
   - Set up database models and repositories.

4. **Point System and Leaderboard:**
   - Implement logic for awarding points and tracking user progress.
   - Create API endpoints to fetch leaderboard data.

5. **Weekly Summaries:**
   - Implement email summary functionality using an email service (e.g., SendGrid).
   - Set up scheduled tasks to generate and send summaries.

6. **Post Types and Notifications:**
   - Implement logic to categorize posts and handle notifications.
   - Create API endpoints for handling and fetching categorized posts.

7. **Verified Organizations and Incentives:**
   - Set up verification process for organizations.
   - Implement functionality for points redemption and resume highlighting.

8. **Integration and Testing:**
   - Ensure all APIs are functioning correctly.
   - Perform back-end testing and ensure database interactions are correct.

9. **Deployment:**
   - Deploy the Spring Boot application to Heroku.

## APIs

### Frontend to Backend Communication

- **POST** `/api/requests` – Create a new request
- **GET** `/api/requests` – Fetch all requests
- **POST** `/api/solutions` – Submit a solution to a request
- **GET** `/api/leaderboard` – Fetch the leaderboard

## Development Tools

- **Code Editor:** Visual Studio Code
- **Version Control:** Git with GitHub
- **CI/CD:** GitHub Actions for automated builds and deployments

## Testing Frameworks

- **Frontend:** Jest with React Testing Library
- **Backend:** JUnit 5 with Mockito

