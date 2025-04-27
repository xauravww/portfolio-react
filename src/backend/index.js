import { createRequire } from "module";

const require = createRequire(import.meta.url);
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 10000;

import { healthCheckJob } from "./health.js";
import sendEmail from "./sendEmail.js";
healthCheckJob.start();

dotenv.config({ path: "./.env" });
app.use(cors());
app.use(express.json());

const notionAPIKey = process.env.NOTION_API_KEY;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = axios.create({
  baseURL: "https://api.notion.com/v1",
  headers: {
    Authorization: `Bearer ${notionAPIKey}`,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
  },
});

app.post("/api/queries", async (req, res) => {
  const { name, query, email } = req.body;

  if (!name || !query || !email) {
    return res
      .status(400)
      .send({ success: false, message: "Name, query, and email are required" });
  }

  try {
    const response = await notion.post("/pages", {
      parent: { database_id: notionDatabaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Query: {
          rich_text: [
            {
              text: {
                content: query,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
      },
    });

    const options = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: "Thank you for your query!",
      message: `
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Oregano:ital@0;1&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Oregano', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
    }
    .header {
      text-align: center;
      padding: 10px 0;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      padding: 10px 0;
      font-size: 12px;
      color: #777;
    }
    a {
      color: #1a0dab;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="font-family: 'Oregano', Arial, sans-serif;">Contact Confirmation</h1>
    </div>
    <p>Dear ${name},</p>
    <p>Thank you for reaching out to me. I have received your query and will get back to you shortly with a detailed response.</p>
    <p>Below are the details of your submission:</p>
    <ul>
      <li><strong>Name</strong>: ${name}</li>
      <li><strong>Query</strong>: ${query}</li>
      <li><strong>Email</strong>: ${email}</li>
    </ul>
    <p>Your patience is greatly appreciated as I work to provide you with the best possible assistance.</p>
    <p>Best regards,<br>
    Saurav Maheshwari<br>
    Full Stack Developer<br>
    <a href="mailto:sauravmaheshwari8@gmail.com">sauravmaheshwari8@gmail.com</a></p>
    <p>Visit my <a href="${process.env.FRONTEND_URL}" style="font-family: 'Oregano', Arial, sans-serif;">portfolio</a>.</p>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} <a href="https://github.com/xauravww">xauravww - Github</a></p> All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`,
    };
    console.log(options);
    sendEmail(options);

    res.status(200).send({ success: true, data: response.data });
  } catch (error) {
    console.error("Error posting to Notion DB:", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
});

// Health Check Route
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
