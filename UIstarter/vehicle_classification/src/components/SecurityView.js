import React, {useContext, useState, useEffect} from 'react'
import './SecurityViews.css'
import parkingLot3 from './videos/parkingLot3.mp4'
import parkingLot2 from './videos/parkingLot2.mp4'
import ReactPlayer from 'react-player';
import {mockData} from '../data/mockData'
import TableMaterial from './TableMaterial';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';


function SecurityView() {

  // const { carData, addAllData } = useContext(GlobalContext);
  const [dataIn, setDataIn] = useState([]);
  const [carData, addAllData] = useState([]);

  // fetch the data here and filled below
  const getData = () => {
    fetch("http://127.0.0.1:5000/carRoute/api/carRoute")
      .then(response => {
        return response.json()
      })
      .then(data => {
        addAllData(data)
      })
  }

  // set title of page and call get data to fill info out
  useEffect(()=> {
    document.title = "Security View"
    getData()
    // console.log("test", test);
    // eslint-disable-next-line
    // api call to fetch data -- .then is where you setDataIn()
    // setDataIn(mockData)
  }, []);
  // console.log("hi",carData);



  console.log("DATA IN: ", carData);

  // // this allows you to start the video at a certain time (use later for getting to specific timestamps)
  // const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef();

  // const onReady = React.useCallback(() => {
  // if (!isReady) {
  //     const timeToStart = (1 * 60) + 12.6;
  //     playerRef.current.seekTo(timeToStart, "seconds");
  //     setIsReady(true);
  // }
  // }, [isReady]);

  return (

    // WORKS - on safari & firefox
    // ref={playerRef} onReady={onReady} (add later)
    
        <div class="flex-container">
            <div class="flex-child one">
                <ReactPlayer ref={playerRef} className='videomp4' url={parkingLot3} width="720px" height="440px" playing controls />
            </div>
            <div class="table-view" >
                  <br></br>
                  <TableMaterial  data={carData} />
            </div>
        </div>
            
    
    

  )
}

export default SecurityView
