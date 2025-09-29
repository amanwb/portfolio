import { Button, Container, Typography, Card, CardContent, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    fetch("http://127.0.0.1:8000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <Header />
    <Container maxWidth="false" style={{ marginTop: "1rem" }}>
      <Typography variant="h4" align="center" >
        🚀 My Projects
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        projects.map((project) => (
          <Card key={project.id} style={{ marginBottom: "1rem" }}>
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography color="text.secondary">{project.desc}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
    </>
  );
}

export default App;
