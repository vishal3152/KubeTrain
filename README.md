# KubeTrain

### Build image:
sudo docker build -t kubetrain .

### Get image id:
sudo docker image ls

### Test image by running it
sudo docker run -p 4553:4553 <imageid>

### Tag image id:
docker tag <imageid> vishal3152/kubetrain:latest

### Login to your image repo
docker login

### Push image to repo
docker push <repositoryname>

### Pull from repo and run
docker run -p 4553:4553 vishal3152/kubetrain


