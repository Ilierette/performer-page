import http from "http";
import { Client } from "@notionhq/client";

const notionDatabaseId = "237090fa136a408c9b4aafc4629a638f";
const notionSecret = "secret_p935S3MnbFtWbDaYAJ2ZGYAmHhQCnaFc6FuZrHk9vOu";

const notion = new Client({ auth: notionSecret });
const host = "localhost";
const port = 8000;


const server = http.createServer(async(req, res) => {
  // Avoid CORS errors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    // Will respond to queries to the domain root (like http://localhost/)
    case "/":
      const query = await notion.databases.query({
        database_id: notionDatabaseId,
      });

      res.writeHead(200);
      res.end(JSON.stringify({ data: query }));
      break;

    // Only supports the / route
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
