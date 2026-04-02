const express = require("express");
const client = require("prom-client");

const app = express();
const register = new client.Registry();

// Default metrics (CPU, memory, etc.)
client.collectDefaultMetrics({ register });

// Custom metric
const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
});

register.registerMetric(httpRequests);

app.get("/", (req, res) => {
  httpRequests.inc();
  res.send("Hello from Docker Monitoring App 🚀");
});

// Prometheus endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
