import { useLocation } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap"
function FindFlatmateResults() {
  const location = useLocation()
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          `https://api.airtable.com/v0/appw0tKoQNz4UImBM/Users?&filterByFormula=AND({Location}="${location.state.location}",{Age}="${location.state.age}",{Name}!="${location.state.name}")`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer key8RN1St5Vx3Aa1Z`,
            },
          }
        )
        setData(res.data.records)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      {console.log(data)}
      <h1
        style={{
          fontSize: "2.5rem",
          maxWidth: "60vw",
          margin: "30px auto 50px",
          textAlign: "center",
        }}
      >
        {" "}
        There are {data.length} people looking for flats in{" "}
        {location.state.location}. ✨
      </h1>
      {data && (
        <div
          style={{
            maxWidth: "70vw",
            margin: "auto",
          }}
        >
          {data.map((result, index) => {
            if (index % 2 === 0) {
              return (
                <Alert variant="primary">
                  {" "}
                  {result.fields.Name} available on twitter at{" "}
                  {result.fields.Twitter}
                </Alert>
              )
            } else {
              return (
                <Alert variant="light">
                  {" "}
                  {result.fields.Name} available on twitter at{" "}
                  {result.fields.Twitter}
                </Alert>
              )
            }
          })}
        </div>
      )}
    </>
  )
}

export default FindFlatmateResults
