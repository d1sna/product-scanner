Product Scanner

# Product Scanner App

### Running app

To run the application, follow these steps:

Install mongodb (optionally):

`docker compose up -d`

Change .env file if you have your own mongodb connection string or s3 cloud

Copy your local ip to capacitor.config.ts => server => url
Copy your local ip to .env => MINIO_END_POINT

`ifconfig en0 inet`

Sync application:

`npm run sync`

Run application:

`npm start`

Run ios app:

`npm run ios`

Author
Alex Dis
License
This project is licensed under the terms of the License.
