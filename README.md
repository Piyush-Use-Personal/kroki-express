# Kroki Diagram Generator

This is a simple Express.js application that uses the Kroki API to generate Mermaid diagrams in SVG format.

## Features

- Accepts a POST request with Mermaid diagram source code.
- Generates an SVG diagram using Kroki's API.
- Returns the generated SVG diagram in the response.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository OR download zip: 

   ```bash
   git clone https://github.com/your-username/kroki-diagram-generator.git
    ```

2. Navigate to the project directory:

```
cd kroki-diagram-generator
```

2. Install the dependencies:

```
npm install
```

## Usage
1. Start the server

```
npm run dev
```

2. The server will start on `http://localhost:3000` (or any other port specified in the .env file).

3. To generate a diagram, send a POST request to /generate with the following JSON payload:
```
{
  "diagram": "graph TD; A-->B; A-->C; B-->D; C-->D;"
}

```
Replace the diagram value with your Mermaid diagram source code.

4. The server will respond with an SVG image of the diagram.

## Example Request
```
curl -X POST http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d '{"diagram": "graph TD; A-->B; A-->C; B-->D; C-->D;"}'

```

## Troubleshooting
- Ensure you have all dependencies installed by running npm install.
- Check the server logs for any errors if the application is not working as expected.
- Make sure your network allows outgoing requests to `https://kroki.io`.
