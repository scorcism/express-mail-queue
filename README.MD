
# Express Mail Queue

A Express application designed as a mail queue consumer, for sending emails to users or customers. 
This project [BullMQ](https://docs.bullmq.io/) for efficient background task processing and [Redis](https://redis.io/) for reliable job queue management.


[![GitHub issues](https://img.shields.io/github/issues/scorcism/express-mail-queue)](https://github.com/scorcism/express-mail-queue/issues)  [![GitHub license](https://img.shields.io/github/license/scorcism/express-mail-queue)](https://github.com/scorcism/express-mail-queue/blob/main/LICENSE)

## Getting Started

### Installation

```bash
git clone https://github.com/scorcism/express-mail-queue.git

cp .env.example .env

# Configure env 

docker compose -f docker-compose.dev.yml up --build
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue on the [GitHub repository](https://github.com/scorcism/express-mail-queue/issues). Feel free to submit pull requests to improve the project.


## Author

[Abhishek Pathak](mailto:abhishekpathak1720@gmail.com)

### Sibling Microservices
- Frontend: https://github.com/scorcism/pinterest-frontend
- Backend: https://github.com/scorcism/pinterest-backend
- Mail Queue Consumer: https://github.com/scorcism/express-mail-queue
