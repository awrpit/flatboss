import { useState } from "react"
import { Button, Form, Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function FindFlat() {
  const [registerData, setregisterData] = useState({
    name: "",
    age: "",
    location: "",
    twitter: "",
  })
  const navigate = useNavigate()

  const changeHandler = (e) => {
    const { name, value } = e.target
    setregisterData((prevData) => {
      return { ...prevData, [name]: value }
    })
    console.log(registerData)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const data = JSON.stringify({
        records: [
          {
            fields: {
              Name: registerData.name,
              Age: registerData.age,
              Location: registerData.location,
              TwitterID: registerData.twitter,
            },
          },
        ],
      })
      console.log(data)
      const res = await axios.post(
        "https://api.airtable.com/v0/appw0tKoQNz4UImBM/Users",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer key8RN1St5Vx3Aa1Z`,
          },
        }
      )
      navigate("/flatresults", {
        state: {
          age: registerData.age,
          location: registerData.location,
          name: registerData.name,
        },
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container>
        <h3
          style={{
            textAlign: "center",
            padding: "25px 0",
          }}
        >
          Aye, search for your new-flats captain 🎯
        </h3>
        <Row>
          <Col>
            <div
              style={{
                maxWidth: "60vw",
                margin: "auto",
              }}
            >
              {/* name  */}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter name"
                    name="name"
                    value={registerData.name}
                    onChange={changeHandler}
                  />
                </Form.Group>
                {/* age  */}
                <Form.Group className="mb-3">
                  <Form.Label> Age </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="enter your age"
                    name="age"
                    value={registerData.age}
                    onChange={changeHandler}
                  />
                </Form.Group>
                {/* location */}
                <Form.Group className="mb-3">
                  <Form.Label>Select Location</Form.Label>
                  <Form.Select
                    name="location"
                    value={registerData.location}
                    onChange={changeHandler}
                  >
                    <option> Delhi</option>
                    <option> Bengaluru</option>
                    <option> Pune </option>
                    <option> Hyderabad </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Twitter Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter twitter username"
                    name="twitter"
                    value={registerData.twitter}
                    onChange={changeHandler}
                    required
                  />
                </Form.Group>
                <Button
                  variant="outline-dark"
                  type="submit"
                  onClick={submitHandler}
                >
                  Search for Flats ✨
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default FindFlat
