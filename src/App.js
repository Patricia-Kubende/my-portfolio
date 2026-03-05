import React from "react";

import mgasDashboard1 from "./dashboard/CustomerUsageInsights.png";
import mgasDashboard2 from "./dashboard/DeliveryPerformance.png";
import mgasDashboard3 from "./dashboard/RevenuePayments.png";
import DataWarehouseDashboard from "./dashboard/DataWarehouseAnalysisDasboard.png";
import DataWarehouseSnowflakeTables from "./dashboard/snowflaketables.png";
import fnpDashboard from "./dashboard/FnPDashboard.png";
import MaizeYieldDashboard1 from "./dashboard/MaizeYieldDashboard.png";
import MaizeYieldPrediction from "./dashboard/predictionscreen.png";
import RetailDashboard from "./dashboard/RetailSalesDashboard.png";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-black shadow-lg">
        <h1 className="text-2xl font-bold text-purple-400">Patricia Kubende</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-purple-300">About</a>
          <a href="#skills" className="hover:text-purple-300">Skills</a>
          <a href="#projects" className="hover:text-purple-300">Projects</a>
          <a href="#experience" className="hover:text-purple-300">Experience</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Hello, I'm <span className="text-purple-400">Patricia 👋</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Data Analyst | ML Enthusiast | BI Specialist
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          View My Work
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          Computer Science graduate awaiting graduation from Maseno University with strong passion and knowledge in data analytics, machine learning, mobile app development, and IT support. Data analytics enthusiast, with ability to convert data to useful insights. Passionate about leveraging technology for social impact and committed to continuous learning and innovation.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Skills</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Python</li>
          <li>Machine Learning & Data Science</li>
          <li>Power BI & Data Visualization</li>
          <li>SQL & Database Management</li>
          <li>Excel & Data Analysis</li>
          <li>Networking & IT Support</li>
          <li>Flutter App Development</li>
          <li>Communication</li>
          <li>Leadership</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Projects</h3>
        <div className="space-y-6">
          {/* MaizeMate */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">Maize Crop Yield Prediction</h4>
            <p className="text-gray-400 mt-2">
              Developed a predictive ML model to estimate maize crop yields using environmental and soil data.
              Improved forecast accuracy by 15% compared to baseline models, demonstrating application of AI/ML in agriculture and operations.
            </p>
            <a
              href="https://github.com/Patricia-Kubende/maize-yield-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-3 block"
            >
              View on GitHub
            </a>
          </div>

          {/* FNP Sales Dashboard */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">FNP Sales Dashboard</h4>
            <p className="text-gray-400 mt-2">
              Analyzes sales performance of an online delivery company using Excel 
              tools including Power Query, Power Pivot, and DAX.
              Analyzed 1,000+ online delivery orders (2023) to uncover time-based sales patterns, seasonal demand, product drivers, and city-level insights.
              Delivered recommendations for occasion-based campaigns, faster logistics, and bundling strategies, driving revenue optimization opportunities.

            </p>
            <a
              href="https://github.com/Patricia-Kubende/fnp-sales-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-3 block"
            >
              View on GitHub
            </a>
          </div>

          {/* M-Gas */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">M-Gas Project - Customer Delivery Insights</h4>
            <p className="text-gray-400 mt-2">
              SQL + Power BI analysis of M-Gas customer usage and delivery 
              performance to improve monitoring and engagement.
              Designed relational database and Power BI dashboards analyzing customer usage, arrears, and delivery efficiency. Improved demand forecasting accuracy by applying machine learning models for proactive logistics planning.
            </p>
            <a
              href="https://github.com/Patricia-Kubende/M-Gas-Project-Customer-Delivery-Insights-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-3 block"
            >
              View on GitHub
            </a>
          </div>

          {/* Retail Sales Report */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">Retail Sales Report</h4>
            <p className="text-gray-400 mt-2">
              Excel dataset and dashboard visualizations for analyzing store 
              sales performance, customer demographics, and order channels.
              Built Excel/Power BI dashboards analyzing channel sales, gender demographics, and regional performance, revealing top-performing states and customer groups, leading to improved targeting strategies.
              Identified that Amazon drove 35% of sales and women accounted for 64% of purchases, supporting better marketing focus.

            </p>
            <a
              href="https://github.com/Patricia-Kubende/Retail-Sales-Report"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-3 block"
            >
              View on GitHub
            </a>
          </div>

          {/* Traffic Volume Analysis */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">Traffic Volume Analysis</h4>
            <p className="text-gray-400 mt-2">
              Exploratory and predictive analysis of Metro Interstate Traffic 
              Volume dataset using Python.
            </p>
            <a
              href="https://github.com/Patricia-Kubende/traffic-volume-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-3 block"
            >
              View on GitHub
            </a>
          </div>

          {/* snowflake-retail-data-warehouse */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">Snowflake Retail Data Warehouse</h4>
            <p className="text-gray-400 mt-2">
              Built an end-to-end retail data warehouse using Snowflake and SQL, and developed an interactive Power BI dashboard for sales analytics.
            </p>
            <a
              href="https://github.com/Patricia-Kubende/Retail-Sales-Data-Warehouse-Power-BI-Analytics-Snowflake-Project-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-3 block"
            >
              View on GitHub
            </a>
          </div>




          {/* SQL Project */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">SQL Project</h4>
            <p className="text-gray-400 mt-2">
              A collection of SQL queries designed for exploration and basic data 
              analysis tasks.
              Created reports improving transparency of KPIs across operations.
            </p>
            <a
              href="https://github.com/Patricia-Kubende/SQL-Project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline mt-3 block"
            >
              View on GitHub 
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Experience</h3>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">Data Analyst Intern - Presidential Digital Talent Programme</h4>
            <p className="text-gray-400 mt-2">
              Data analysis and reporting for various business intelligence initiatives.
              Data extraction, cleaning, and visualization using Python, Excel and Power BI to support decision-making and performance monitoring.
              Data-driven insights and recommendations to optimize operations and drive business growth.
              Data verification and validation to ensure accuracy and reliability of reports and dashboards.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">Nzoia Sugar Company – IT Attachment</h4>
            <p className="text-gray-400 mt-2">
              Networking, troubleshooting, and IT support for company systems.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold">Volunteer Computer Lab Assistant</h4>
            <p className="text-gray-400 mt-2">
              st. Annes Kongoli Primary School
              Assisted students in computer basics while demonstrating leadership & teaching ability.
              Data entry and management of student records, contributing to improved organization and accessibility of information for school administration.
            </p>
          </div>
        </div>
      </section>

{/* Dashboard Gallery */}
<section id="dashboards" className="max-w-6xl mx-auto px-6 py-16">

<h3 className="text-3xl font-bold text-purple-400 mb-10 text-center">
Dashboard Gallery
</h3>

<div className="space-y-10">

{/* M-Gas Project */}
<div>
<h4 className="text-xl font-semibold text-purple-300 mb-4">
M-Gas Analytics Dashboards
</h4>

<details className="mb-4 cursor-pointer">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Customer Usage Insights
</summary>

<img
src={mgasDashboard1}
alt="Customer Usage Insights"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

<details className="mb-4 cursor-pointer">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Delivery Performance
</summary>

<img
src={mgasDashboard2}
alt="Delivery Performance"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

<details className="cursor-pointer">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Revenue & Payments
</summary>

<img
src={mgasDashboard3}
alt="Revenue Payments"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

</div>

{/* Snowflake Project */}
<div>
<h4 className="text-xl font-semibold text-purple-300 mb-4">
Snowflake Data Warehouse
</h4>

<details className="cursor-pointer">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Retail Analytics Dashboard
</summary>

<img
src={DataWarehouseDashboard}
alt="Snowflake Dashboard"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

<details className="cursor-pointer mt-4">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Snowflake Tables
</summary>

<img
src={DataWarehouseSnowflakeTables}
alt="Snowflake Tables"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

</div>

{/* FNP Dashboard */}
<div>
<h4 className="text-xl font-semibold text-purple-300 mb-4">
FNP Sales Analytics
</h4>

<details className="cursor-pointer">
<summary className="text-lg text-gray-300 hover:text-purple-400">
FNP Sales Dashboard
</summary>

<img
src={fnpDashboard}
alt="FNP Dashboard"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

</div>

{/* Retail Dashboard */}
<div>
<h4 className="text-xl font-semibold text-purple-300 mb-4">
Retail Sales Analytics
</h4>

<details className="cursor-pointer">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Retail Sales Dashboard
</summary>

<img
src={RetailDashboard}
alt="Retail Dashboard"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

</div>

{/* Maize Prediction */}
<div>
<h4 className="text-xl font-semibold text-purple-300 mb-4">
Maize Yield Prediction
</h4>

<details className="cursor-pointer">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Prediction Dashboard
</summary>

<img
src={MaizeYieldDashboard1}
alt="Maize Dashboard"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

<details className="cursor-pointer mt-4">
<summary className="text-lg text-gray-300 hover:text-purple-400">
Prediction Screen
</summary>

<img
src={MaizeYieldPrediction}
alt="Prediction Screen"
className="mt-4 rounded-xl shadow-lg"
/>
</details>

</div>

</div>

</section>

      {/* Certificates Section */}
      <section id="certificates" className="max-w-4xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Certificates</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <a
              href="https://www.kaggle.com/learn/certification/patriciakubende/data-visualization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Kaggle Data Visualization Certificate
            </a>
          </li>
          <li>
            <a
              href="https://app.dataquest.io/view_cert/H4JLT9988JTZRS7YY6M1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Dataquest Python Programming Certificate
            </a>
          </li>
          <li>
            <a
              href="https://www.mindluster.com/student/certificate/afe4fc7b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Effective Communication Skills Certificate - mindluster
            </a>
          </li>


          <li>
            <a
              href="https://www.datacamp.com/statement-of-accomplishment/course/9066fa19a11240c8d1936ecb0d96778cd4c97486?raw=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Introduction to SQL Certificate - DataCamp
            </a>
          </li>

          <li>
            <a
              href="https://www.mindluster.com/student/certificate/405d78b1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Logistics Analytics Certificate - mindluster
            </a>
          </li>

          <li>
            <a
              href="https://www.mindluster.com/student/certificate/821d3b2b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              Microsoft Excel Certificate - mindluster
            </a>
          </li>

        </ul>
      </section>
  


      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold text-purple-400 mb-6">Contact Me</h3>
        <p className="text-gray-300">I'd love to connect! Feel free to reach out via:</p>
        <div className="mt-6 space-y-3">
          <a href="mailto:patriciakubende@gmail.com" className="block text-purple-400 hover:underline">
            📧 patriciakubende@gmail.com
          </a>
          <a href="tel:+254700537952" className="block text-purple-400 hover:underline">
            📞 +254 700 537952
          </a>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/Patricia-Kubende"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patricia-kubende-146776293"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-black">
        © {new Date().getFullYear()} Patricia Kubende. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
