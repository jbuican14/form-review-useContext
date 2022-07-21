import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

export default function About() {
  return (
    <Card>
      <h3>About Page</h3>
      <p> Thank you for visiting. I hope you like what you see. 💪🏽💪🏽💪🏽 </p>
      <Link to="/">Back to Home Page</Link>
    </Card>
  );
}
