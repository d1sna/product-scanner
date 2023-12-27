Product Scanner

# Product Scanner App

### Running app

To run the application, follow these steps:

Install mongodb (optionally):

`docker compose up -d`

Change .env file if you have your own mongodb connection string

Copy your local ip to capacitor.config.ts => server => url

`ifconfig en0`

Sync application:

`npm run sync`

Run application:

`npm run dev`

Run ios app:

`npm run ios`

Author
Alex Dis
License
This project is licensed under the terms of the License.
