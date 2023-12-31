import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom"

export default function Watch() {
  const location = useLocation()
  const movie = location.movie;
  return (
    <div className="watch">
      <Link to = "/">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
      </Link>
        <video className="video" 
        autoplay 
        progress 
        controls 
        src={movie.video}></video>
    </div>
  );
}
