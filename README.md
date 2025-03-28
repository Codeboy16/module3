# MERN Stack Document Approval System

![Logo](./path/to/your/logo.png)

## Tech Stack

This project is developed using the following technologies:

- **Frontend:** React, Tailwind CSS, Bootstrap, Material UI, React Hook Form, Axios
- **Backend:** Node.js, Express.js, JWT Authentication, MongoDB
- **Authentication:** JWT
- **Development Tools:** Nodemon, Bcrypt

## About The Project

Our team is working as MERN Stack Developers on this Document Approval System. The application has three main roles: **Operator**, **Verifier**, and **Approver**.

### Workflow:
1. **Operator:**
   - The Operator receives a document and has the ability to either:
     - **Reject**: Rejects the document and the document cannot be resubmitted.
     - **Return**: Returns the document to the user for corrections.
     - **Forward**: Forwards the document to the Verifier for the next step.

2. **Verifier:**
   - The Verifier receives the document from the Operator and has the following actions:
     - **Reject**: Rejects the document, making it unable to be resubmitted.
     - **Return**: Returns the document for corrections and resubmission by the user.
     - **Approve**: Approves the document and forwards it to the Approver.

3. **Approver:**
   - The Approver receives the document from the Verifier and has the following options:
     - **Reject**: Rejects the document and prevents any further action.
     - **Return**: Returns the document for corrections.
     - **Approve**: Approves the document for final submission.

In case any of the roles **Rejects** the document, the user is not able to resubmit that specific form. If the document is **Returned**, the user can make changes and resubmit it.

## Setup Instructions

### Clone the Repository:

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev   //to Start The Font-end
nodemon index.js   or  npm start   //to Start The Back-end

