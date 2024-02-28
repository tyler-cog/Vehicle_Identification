import React, {useState} from 'react'
import Table from 'react-bootstrap/Table'

function StatusTable(props) {

  // console.log("Props: ", props)

  const [parked, setParked] = useState(true);
  const [stopped, setStopped] = useState(true);
  const [moving, setMoving] = useState(true);

  // this filter is what is shown when the checkboxes change
  const rowsToDisplay = props.data.filter((item)=> {
    if((parked && item.status === "parked" || parked && item.status === "Parked")) {
        return true;
    }
    if((stopped && item.status === "stopped" || stopped && item.status === "Stopped")) {
        return true;
    }
    if((moving && item.status === "moving" || moving && item.status === "Moving")) {
        return true;
    }
    return false;
  }) 

  // console.log("rows to display: ", rowsToDisplay)

  return (
    <div>
        
        <div className='checkboxes'>
            <input id="parked" type="checkbox" checked={parked} onChange={()=> setParked(!parked)}/>
            <label htmlFor="parked" class="container">Parked</label>
            <input id="stopped" type="checkbox" checked={stopped} onChange={()=> setStopped(!stopped)}/>
            <label htmlFor="stopped" class="container">Stopped</label>
            <input id="moving" type="checkbox" checked={moving} onChange={()=> setMoving(!moving)}/>
            <label htmlFor="moving" class="container">Moving</label>
        </div>


        <Table variant="dark" bordered size="sm">
        <thead class="table-columns">
            <tr>
            <th>Car Id</th>
            <th>Time</th>
            <th >Status</th>
            </tr>
        </thead>
        <tbody>
            {carData.map((carData)=> {
                // key here should be the Mongo unique id associated w the data (NOT the vehicle id bc it can repeat)
                return <tr key={carData._id}>
                <td >{carData.tracker_id}</td>
                <td >{carData.time}</td>
                <td>{carData.status}</td>
            </tr>
            })}
        </tbody>
        </Table>
    </div>
  )
}

export default StatusTable