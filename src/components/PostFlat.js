import { useState } from "react"
import { Button, Form, Container, Row, Col, Alert } from "react-bootstrap"
import axios from "axios"
function PostFlat() {
  const [registerData, setregisterData] = useState({
    name: "",
    age: "",
    size: "",
    location: "",
    twitter: "",
  })
  const [success, setSuccess] = useState(false)
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
              FlatSize: registerData.size,
              Location: registerData.location,
              TwitterID: registerData.twitter,
            },
          },
        ],
      })

      const res = await axios.post(
        "https://api.airtable.com/v0/appw0tKoQNz4UImBM/New%20Flats",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer key8RN1St5Vx3Aa1Z`,
          },
        }
      )
      console.log(res)
      setSuccess(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container>
        <h5
          style={{
            textAlign: "center",
            padding: "25px 0",
          }}
        >
          List your details to get your future homies 🔥
        </h5>
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
                {/* size */}
                <Form.Group className="mb-3">
                  <Form.Label> Flat size </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. 1 BHK or 2 BHK"
                    name="size"
                    value={registerData.size}
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
                    placeholder="enter twitter username"
                    name="twitter"
                    value={registerData.twitter}
                    onChange={changeHandler}
                    required
                  />
                </Form.Group>
                {success && (
                  <Alert variant="info"> Successfully Registered </Alert>
                )}
                <Button
                  variant="outline-dark"
                  type="submit"
                  onClick={submitHandler}
                >
                  Register
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default PostFlat
