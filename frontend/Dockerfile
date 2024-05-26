# Dockerfile para Front-End con un servidor HTTP simple
FROM python:3.9-slim
WORKDIR /app
COPY . .
CMD ["python", "-m", "http.server", "80"]
EXPOSE 80
