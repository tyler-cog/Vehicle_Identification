import React, {useState, useEffect} from 'react'
import './AnalystView.css'
// import parkingLot1 from './videos/parkingLot1.mp4'
import parkingLot2 from './videos/parkingLot2.mp4'
import parkingLot3 from './videos/parkingLot3.mp4'
import ReactPlayer from 'react-player';
// import {mockData, mockVideoData} from '../data/mockData';
import { styled } from '@mui/material/styles';
import TableMaterial from './TableMaterial';


function AnalystView() {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [tableData, setTableData] = useState([]);
    const mapVideos = new Map();
    // const [carData, addAllData] = useState([]);
    const [carData, addChangedData] = useState([]);
    // const getAllData = () => {
    //   fetch("http://127.0.0.1:5000/ogRoute/api/ogRoute")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       addAllData(data)
    //     })

    //     // console.log("test", carData);
    // }
    const getChangedData = () => {
        fetch("http://127.0.0.1:5000/carRoute/api/carRoute")
          .then(response => {
            return response.json()
          })
          .then(data => {
            addChangedData(data)
          })
  
          // console.log("test", carData);
      }
    // Should I use two seperate calls?
    // Will also show repeats, will need a check for repeating and blanks if done w/ car route
    // But vidRoute would only have the specific titles, shouldnt be repeating, check would be done on ML side
    // Also blanks for data with no appropriate id
    const getVid = () => {
        fetch("http://127.0.0.1:5000/vidRoute/api/vidRoute")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setVideos(data)
          })
  
      } 

    // videos have to be manually set, dont have a method to upload and correlate them 
    mapVideos.set("2020-03-19-08-00-00_scene_0014_BB_write.avi", parkingLot2);
    // mapVideos.set('00949_192.168.86.1_multi_14:10:37.mp4', parkingLot1);
    mapVideos.set('longer_parking_vid.mp4', parkingLot3);
    useEffect(()=> {
        // getAllData();
        document.title = "Analysis View"
        getChangedData();
        getVid();
        // TODO: need to set the videos to the array of actual videos -- update!
 

    }, [])
    // mapVideos.set(videos.id, videos.id)
    
    const handleChange = (e)=> {

        // console.log("e.target.value: ", e.target.value)
        
        // e.target.value is a name rn but should most likely be updated to id 
        // setSelectedVideo HERE -- update once we have database, possibly w ID or name
        setSelectedVideo(mapVideos.get(e.target.value));

        // send an api call for the video data with this ID (e.target.value) --> then setTableData

        // filter is like a for loop going through the mockdata and only returns vals that complete that statement
        const filteredData = carData.filter((item)=> item.videoId == e.target.value)
        // console.log("fil data: ", filteredData)

        setTableData(filteredData)
    }

    // this allows you to start the video at a certain time (use later for getting to specific timestamps)
    const [isReady, setIsReady] = useState(false);
    const [timeToStart, setTimeToStart] = useState(0);
    useEffect(()=> {
        setTimeToStart(timeToStart);
        console.log("updated time value ", timeToStart);
        playerRef.current.seekTo(timeToStart, "seconds");
    }, [timeToStart])
    const playerRef = React.useRef();


    // using styled to style the text on the page
    const Div = styled('div')(({ theme }) => ({
        padding: theme.spacing(0),
        paddingLeft: 15,
        fontSize: 18,
        textAlign:"left",
    }));

    const H1 = styled('div')(({ theme }) => ({
        padding: theme.spacing(0),
        paddingLeft: 15,
        fontSize: 28,
        textAlign:"left",
    }));

  return (

    // WORKS - on safari & firefox
    // ref={playerRef} onReady={onReady} (add later)
    <div>
        <div class="flex-container">
            <div class="flex-child one">
                <br></br>
                <Div>{"Please Choose a Video:"}</Div>
                <div class="dropdownStyle">
                    <select onChange={handleChange} class="box">
                        {/* going to do a map here for ARRAY of videos */}
                        <option value="">None</option>
                        {
                            videos.map((item)=> {
                                return <option value={item.id} key={item.id}>{item.id}</option>
                            })
                        }
                    </select>
                </div>

                <div className='videoDiv'>
                    <ReactPlayer ref={playerRef}  className='videomp4' url={selectedVideo} width="720px" height="440px" playing controls />
                </div>

                <div className='analyzeDiv'>
                    <H1>Analyze Data</H1>
                </div>
            </div>

            <div class="table-view" >
                <div className='table'>
                    {/* same table component but send in different data (same prop data=) */}
                    {/* event listener at the top (select element for video) onChange() fetch data for the video, set dataIn */}
                    <TableMaterial  data={tableData} time={setTimeToStart} time2={timeToStart}  />
                </div>
            </div>
        </div>
    </div>

  )
}

export default AnalystView
