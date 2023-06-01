# cid

## Getting Started

### Setup PocketBase

Unzip the backup file into the `pocketbase/pb_data` directory.

```bash
# Build image
docker build -t pocketbase pocketbase --build-arg PB_VERSION=0.16.3
# Run container
docker run -d --name pocketbase -p 8080:8080 -v ./pocketbase/pb_data:/pb_data pocketbase serve --debug --http=0.0.0.0:8080 --dir=/pb_data
```
