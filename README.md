# Project Proposal: Change Management System (CMS)

## **1. Project Overview**
Created a Change Management System (CMS) designed to streamline the process of managing change requests within an organization.
It serves the purpose of allowing a user create change ticket and get it approved by a supervisor.

## **2. Objectives**
- To provide a user-friendly interface for submitting change requests.
- To facilitate the approval process through role-based access.
- To track the status and history of change tickets.

## **3. Key Features**
- **User Authentication**: Secure login and registration process for users.
- **Change Ticket Submission**: Users can create and submit change tickets with relevant details such as title, description, priority, and type, systems Affected.
- **Approval Workflow**: Role-based access controls to manage who can approve change tickets.
- **Ticket Tracking**: Users can view their submitted tickets and their current status (e.g., pending, approved, rejected).

## **4. Technology Stack**
- **Frontend**: 
  - **React**: A JavaScript library for building user interfaces.
  - **TypeScript**: A typed superset of JavaScript that improves development efficiency and code quality.
  - **Vite**: A fast development build tool for modern web applications.
  
- **Backend**:
  - **Node.js**: A JavaScript runtime for building scalable server-side applications.
  - **Express**: A web application framework for Node.js, providing robust routing and middleware support.
  - **Prisma**: An ORM (Object Relational Mapping) tool for seamless database interaction.

- **Database**:
  - **MySQL**: A relational database management system for storing and managing application data.

## **5. How It Works**
1. **User Registration and Login**:
   - Users can register and log in to the system. Authentication is handled using JWT (JSON Web Tokens) for secure session management.

2. **Creating Change Tickets**:
   - Once logged in, users can create change tickets by filling out a form with the required information (title, description, priority, type, affected systems). This data is sent to the backend using a POST request.

3. **Managing Change Tickets**:
   - The system will store the tickets in the MySQL database. The user can view their submitted tickets and their statuses.
   - An approval mechanism is implemented where users with specific roles can approve or reject change tickets. This is handled via PUT requests to update ticket statuses.

## **6. Conclusion**
The Change Management System aims to simplify and enhance the change management process within organizations. By providing a centralized platform for managing change tickets, the CMS improves transparency, accountability, and collaboration among stakeholders.
