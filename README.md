# 🚀 Docker Monitoring Project (Prometheus + Grafana)

## 📌 Overview

This project demonstrates a simple DevOps monitoring stack using:

* Node.js application
* Docker & Docker Compose
* Prometheus (metrics collection)
* Grafana (visual dashboards)

---

## 🧱 Architecture

Node.js App → Prometheus → Grafana

---

## ⚙️ Tech Stack

* Node.js
* Docker
* Prometheus
* Grafana

---

## 🚀 How to Run

### 1. Clone repo

```bash

git clone git@github.com:tjk90/docker-monitoring-project.git
cd docker-monitoring-project
```

### 2. Start services

```bash
docker compose up -d --build
```

---

## 🌐 Access

* App (test it): http://localhost:3000
* Prometheus: http://localhost:9090
* Grafana: http://localhost:3001

---

### 3. Monitor
## 📊 Metrics Example

Query in Prometheus:

```bash
http_requests_total
```

---

## 🎯 Features

* Containerized Node.js app
* Custom Prometheus metrics
* Real-time monitoring dashboard
* Multi-container setup using Docker Compose

---

## 🔥 Future Improvements

* Add alerting (email/Slack)
* Deploy to Kubernetes (EKS)
* Add CI/CD with GitHub Actions
* Infrastructure as Code with Terraform

---

## 👨‍💻 Author

Tairone.K
