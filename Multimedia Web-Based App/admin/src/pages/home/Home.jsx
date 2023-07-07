import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(() => 
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  []
); 

  const [userStats, setUserStats] = useState([]);

  useEffect(() =>{
    const getStats = async () =>{
      try{
        const res = await axios.get("/users/stats",{
          headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWZiYWY2NTAxZjNhODYwMmZkMzhiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODI2NzcyNiwiZXhwIjoxNjg4Njk5NzI2fQ.AhLX4cOdrGChZ9kdZEK-4Podv5Uiw8GRjbZuLxJM1DY"
          },
        });
        const statsList =  res.data.sort(function (a,b) {
          return a._id - b._id;
        });
        statsList.map((item)=> 
          setUserStats((prev) => [
            ...prev,
            {name:MONTHS[item._id-1],"New User": item.total},                     //total user and the name of the month
          ])
        );                     
      } catch(err){
         console.log(err)
      }
    };
    getStats();
  },[MONTHS]);

  return (
    <div className="home">
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}