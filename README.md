# PFPAsia Next App

## Introduction

A community made PFPAsia Website that builds based on NextJS, TypeScript, and TailwindCSS. While original PFPAsia website was built by the team and this project has partially linked to it. This project was initiated by [Sennett Lau a.k.a Capyyy](https://twitter.com/sennettlau_13).

## Pre-requisites

- NodeJS
- OpenSea API Key
- Docker (Optional)

## Getting Started

### Start local development server

1. Clone the repository:

```bash
git clone https://github.com/sennett-lau/pfp-asia-next-app
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` by copying the `.env.sample` file and fill in the required environment.
4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### With Docker

1. Clone the repository:

```bash
git clone https://github.com/sennett-lau/pfp-asia-next-app
```

2. Build the Docker image:

```bash
docker build -t pfp-asia-next-app .
```

3. Run the Docker container:

```bash
docker run -d -p 1111:3000 -e "OPENSEA_API_KEY=your_api_key" pfp-asia-next-app:latest
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
