import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";


export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () =>{
      try{
        const res = await axios.get("/users?new=true",{
          headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWZiYWY2NTAxZjNhODYwMmZkMzhiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODI2NzcyNiwiZXhwIjoxNjg4Njk5NzI2fQ.AhLX4cOdrGChZ9kdZEK-4Podv5Uiw8GRjbZuLxJM1DY"
          },
        });           
        setNewUsers(res.data)
      }catch(err){
        console.log(err)
      }
    };
    getNewUsers();
  },[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user=>(
          <li className="widgetSmListItem">
          <img                                                  //if no image then default netflix logo
            src={user.profilePic ||
            "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
