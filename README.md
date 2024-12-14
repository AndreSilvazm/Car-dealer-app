Found a Car

Found a Car is a web application that allows users to search for brand-new vehicles by filtering by make and year. The site uses the NHTSA API to fetch car models based on the provided filters.

🛠 Technologies Used

Next.js: Framework for server-side rendering (SSR) and building React applications.
Tailwind CSS: Utility-first CSS framework for rapid, responsive styling.
React: Library for building user interfaces.
NHTSA API: API for fetching car model information in the United States.

📦 Installation
Clone the repository

To get started, clone the repository to your local environment:

bash
git clone https://github.com/AndreSilvazm/Car-dealer-app.git
Install the dependencies

Navigate to the project directory and install the dependencies:

bash
cd found-a-car
npm install
Run the project

To run the project in development mode, use the following command:

bash
npm run dev
The server will be available at http://localhost:3000.

🚀 Features
Vehicle Filtering: Users can filter vehicles by make and year.
Model Search: After selecting a make and year, available car models are listed.
Responsive Design: The site is fully responsive, ensuring a good experience on both mobile and desktop devices.
SEO Optimized: Pages include SEO and social media sharing metadata.

📊 Directory Structure
app/: Contains the main pages and components of the app.
components/: Reusable UI components.
data/: Services and data types.
pages/: Next.js pages, including the result page.
styles/: CSS and Tailwind files.
🖱️ Interaction with the API
The application interacts with the NHTSA API to fetch data about car models based on the selected make and year.

Example of endpoint used:

http
Copiar código
GET https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json

📄 Metadata
The project utilizes metadata to improve SEO and social sharing experiences. The application includes Open Graph and Twitter Card metadata, such as title, description, and specific images.

💻 Contributing
If you would like to contribute to the project, please follow these steps:

Fork the repository.
Create a branch for your change:
bash
git checkout -b your-branch-name
Make your changes and commit:
bash
git commit -am 'Describe your changes'
Push to the remote repository:
bash
git push origin your-branch-name
Create a Pull Request to the main repository.
📄 License
This project is licensed under the MIT License - see the LICENSE file for more details.

👨‍💻 Developer
André Simão - LinkedIn
