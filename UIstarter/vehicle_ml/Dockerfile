FROM python:3.9

WORKDIR /app

RUN apt-get update && \
    apt-get install -y libgl1-mesa-dev && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir raw_videos
RUN mkdir processed_videos
RUN mkdir data

COPY requirements.txt /app/
RUN pip install --trusted-host pypi.python.org -r requirements.txt
RUN pip install cython_bbox
RUN pip download lap
RUN pip install lap-0.4.0.tar.gz
RUN pip install ipywidgets

RUN git clone https://github.com/ifzhang/ByteTrack.git
RUN git clone https://github.com/Megvii-BaseDetection/YOLOX.git

ENV PYTHONPATH="/app/ByteTrack:${PYTHONPATH}"

COPY . /app/

CMD ["python", "vehicle_class.py"]