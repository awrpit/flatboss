import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Home() {
  let navigate = useNavigate()

  return (
    <>
      <h1
        style={{
          fontSize: "2.5rem",
          margin: "50px 30px 50px",
          textAlign: "center",
        }}
      >
        {" "}
        Finding Flats and Flatmates is hard, Flatboss is here to solve that. 🏠
      </h1>

      <h5
        style={{
          maxWidth: "60vw",
          margin: "0 auto 50px",
          textAlign: "center",
        }}
      >
        {" "}
        Tired of posting 100s of tweets, looking out for the best and afforable,
        chill places to live in? Don't worry we got you covered.{" "}
      </h5>

      <div style={{ textAlign: "center" }}>
        <Button
          style={{
            display: "block",
            minWidth: "170px",
            margin: "30px auto",
          }}
          onClick={() => navigate("postflat")}
          variant="outline-primary"
        >
          {" "}
          Post a Flat 🏠
        </Button>
        <Button
          style={{
            display: "block",
            minWidth: "170px",
            margin: "30px auto",
          }}
          onClick={() => navigate("findflat")}
          variant="outline-dark"
        >
          {" "}
          Find Flat 🙋🏻‍♂️
        </Button>
        <Button
          style={{
            display: "block",
            minWidth: "170px",
            margin: "30px auto",
          }}
          onClick={() => navigate("findflatmate")}
          variant="outline-primary"
        >
          {" "}
          Find Flatmate 🚀{" "}
        </Button>
      </div>
    </>
  )
}

export default Home
