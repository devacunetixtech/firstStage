const express = require('express');
const app = express();

// Define a route that listens for GET requests
app.get('/api', (req, res) => {
  // Parse query parameters
  const { slack_name, track } = req.query;

  // Create a new Date object to get the current date
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();

  // Get the current day as an integer (0 for Sunday, 1 for Monday, etc.)
  const currentDayIndex = currentDate.getDay();
  const currentDayName = daysOfWeek[currentDayIndex];

  // Get the current UTC time within a +/-2 minute window
  const currentTime = new Date().toISOString();

  // Construct the response JSON
  const response = {
    slack_name: slack_name || "AcunetixTechie",
    current_day: currentDayName,
    utc_time: currentTime,
    track: track || "backend",
    github_file_url: "https://github.com/devacunetixtech/hngstage1/blob/main/index.js",
    github_repo_url: "https://github.com/devacunetixtech/hngstage1",
    status_code: 200,
  };

  // Send the response as JSON
  res.json(response);
});

// Start the server on port 3000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
