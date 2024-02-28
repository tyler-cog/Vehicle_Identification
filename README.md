# 2N1
2N1 Project

In order to run our app you must first download our code. There are multiple ways to clone the repository. We suggest clicking on the green Code<> button and copying the web URL to clone the repository in VS code. 
Once you have the repository cloned, you can begin to run it using the Docker Commands.

INSTRUCTIONS: 
In order to run the frontend and server within Docker, first clone the repository onto your local machine. Once this has been done, cd into the ‘CSCE482_23S_2N1’ directory. Now, run the following Docker command: ‘docker compose up -d’. When opening a new tab in Mozilla Firefox or Safari, enter ‘localhost:3000’ as the url. After a few moments, you should now see our application.
To run the machine learning model, navigate to the ‘machine_ml’ directory within the ‘UIstarter’ directory. Here, you can input a video from another path to be processed by the machine learning model, which can then be output into a user defined path. First, run the following docker command to build the image:

‘docker build -t your_image_name .’ 

Replace the parameter ‘your_image_name’ with the name you would like to give the Docker image. Now, you can run the following command to process a video and output it to our local machine.

‘docker run -v /path/to/video_directory:/app/videos -v /path/to/desktop:/app/output -e VIDEO_NAME="your_video.mp4" your_image_name python vehicle_class.py’

For ‘/path/to/video_directory’ replace this with the directory in which the video is located. Also, replace ‘/path/to/desktop’ with where you would like the processed video to be output. Replace “your_video.mp4” with the name of the video to be processed and replace “your_image_name” with the name of the Docker image.

When adding new videos, take note of the following.

  Put the processed video into the videos folder within UIStarter/vehicle_classification/src/components/videos

  Next add the following code to the AnalystView.js 
	  import video_name from './videos/video_name.mp4'

  As well as around lines 58,
	  mapVideos.set("video_name.mp4", video_name);

  Note: "video_name.mp4" needs to be the same as the videoId in the database, whereas
         video_name is the name of the video in the videos folder
        
  
