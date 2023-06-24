// const downloadCsv = async () => {
//     try {
//         const target = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=somnath&aggregateHours=24&unitGroup=us&forecastDays=10&shortColumnNames=false&contentType=csv&key=KPGQSJDFFBRAWLX74WGKSXTGM`;

//         const res = await fetch(target, {
//             method: 'get',
//             headers: {
//                 'content-type': 'text/csv;charset=UTF-8',
//             }
//         });

//         const data = await res.text();
//             console.log(data);

//             const data2=data.split('\n');
//             const data3=data2[1].split('"');

//             // console.log(data2.length)
//             console.log(data3[8])

//     } catch (err) {
//         console.log(err)
//     }
// }

// downloadCsv();

// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '4c220372bdmshd43d6fb9432c543p1c80cfjsn4886861f00a2',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

let val="mumbai";
function search(){
  const city = document. getElementById('sr').value;
  val=city
  downloadCsv();
  
}


const downloadCsv = async () => {
  const url =
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${val}&days=3`;
  const url2 =
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${val}&days=3`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4c220372bdmshd43d6fb9432c543p1c80cfjsn4886861f00a2",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const response2 = await fetch(url2, options);
    const data2 = await response.json();
    const data = await response2.json();
    console.log(data);
    console.log(data2);

    document.getElementById("id11").innerText = data.current.temp_c + "c";
    document.getElementById("id13").innerText = data.current.condition.text;
    document.getElementById("id12").innerText =
      data.current.feelslike_c + "/" + data.current.feelslike_f;
    document.getElementById("id33").innerText =
      data.location.name +
      " , " +
      data.location.region +
      " , " +
      data.location.country;
    document.getElementById("update").innerText = data.current.last_updated;

    document.getElementById("speed").innerText =
      data.current.wind_kph + "kph/" + data.current.wind_mph + "mph";
    document.getElementById("dir").innerText = data.current.wind_dir;
    document.getElementById("degree").innerText = data.current.wind_degree;
    document.getElementById("hum").innerText = data.current.humidity+" %";
    document.getElementById("uv").innerText = data.current.uv;

    setInterval(() => {
      let date = new Date();
      //  let a= date.getCurrentPosition();
      document.getElementById("id2").innerText =
        ("0" + date.getDate()).slice(-2) +
        "/" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "/" +
        ("0" + date.getFullYear()).slice(-2) +
        "  " +
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2);
    }, 100);

    let mth=["jan","feb","march","aprle","may","june","july","aug","sep","oct","nov","dec"]
    let d=data.forecast.forecastday[0].date
    let d1 
    let m1 
    let y1
    if(d[5]=='0')m1=d[6]
    else m1=d[5]+d[6]
    if(d[8]=='0')d1=d[9]
    else d1=d[8]+d[9]
    y1=d[2]+d[3]
    let dt1=d1+"  "+mth[Number(m1)-1]+" '"+y1
     document.getElementById("tm-1").innerText=dt1
     document.getElementById("n-temp0").innerText=data.forecast.forecastday[0].day.mintemp_c
     document.getElementById("x-temp0").innerText=data.forecast.forecastday[0].day.maxtemp_c
     document.getElementById("a-temp0").innerText=data.forecast.forecastday[0].day.avgtemp_c
     document.getElementById("humidity0").innerText=data.forecast.forecastday[0].day.avghumidity+" %"
     document.getElementById("condition0").innerText=data.forecast.forecastday[0].day.condition.text
     document.getElementById("cor0").innerText=data.forecast.forecastday[0].day.daily_chance_of_rain
     document.getElementById("sr0").innerText=data.forecast.forecastday[0].astro.sunrise
     document.getElementById("ss0").innerText=data.forecast.forecastday[0].astro.sunset
     document.getElementById("mr0").innerText=data.forecast.forecastday[0].astro.moonrise
     document.getElementById("ms0").innerText=data.forecast.forecastday[0].astro.moonset
     document.getElementById("mp0").innerText=data.forecast.forecastday[0].astro.moon_phase


     d=data.forecast.forecastday[1].date
    if(d[5]=='0')m1=d[6]
    else m1=d[5]+d[6]
    if(d[8]=='0')d1=d[9]
    else d1=d[8]+d[9]
    y1=d[2]+d[3]
    let dt2=d1+"  "+mth[Number(m1)-1]+" '"+y1
     document.getElementById("tm-2").innerText=dt2
     document.getElementById("n-temp1").innerText=data.forecast.forecastday[1].day.mintemp_c
     document.getElementById("x-temp1").innerText=data.forecast.forecastday[1].day.maxtemp_c
     document.getElementById("a-temp1").innerText=data.forecast.forecastday[1].day.avgtemp_c
     document.getElementById("humidity1").innerText=data.forecast.forecastday[1].day.avghumidity+" %"
     document.getElementById("condition1").innerText=data.forecast.forecastday[1].day.condition.text
     document.getElementById("cor1").innerText=data.forecast.forecastday[1].day.daily_chance_of_rain
     document.getElementById("sr1").innerText=data.forecast.forecastday[1].astro.sunrise
     document.getElementById("ss1").innerText=data.forecast.forecastday[1].astro.sunset
     document.getElementById("mr1").innerText=data.forecast.forecastday[1].astro.moonrise
     document.getElementById("ms1").innerText=data.forecast.forecastday[1].astro.moonset
     document.getElementById("mp1").innerText=data.forecast.forecastday[1].astro.moon_phase



     d=data.forecast.forecastday[2].date
    if(d[5]=='0')m1=d[6]
    else m1=d[5]+d[6]
    if(d[8]=='0')d1=d[9]
    else d1=d[8]+d[9]
    y1=d[2]+d[3]
    let dt3=d1+"  "+mth[Number(m1)-1]+" '"+y1
     document.getElementById("tm-3").innerText=dt3
     document.getElementById("n-temp2").innerText=data.forecast.forecastday[2].day.mintemp_c
     document.getElementById("x-temp2").innerText=data.forecast.forecastday[2].day.maxtemp_c
     document.getElementById("a-temp2").innerText=data.forecast.forecastday[2].day.avgtemp_c
     document.getElementById("humidity2").innerText=data.forecast.forecastday[2].day.avghumidity+" %"
     document.getElementById("condition2").innerText=data.forecast.forecastday[2].day.condition.text
     document.getElementById("cor2").innerText=data.forecast.forecastday[2].day.daily_chance_of_rain
     document.getElementById("sr2").innerText=data.forecast.forecastday[2].astro.sunrise
     document.getElementById("ss2").innerText=data.forecast.forecastday[2].astro.sunset
     document.getElementById("mr2").innerText=data.forecast.forecastday[2].astro.moonrise
     document.getElementById("ms2").innerText=data.forecast.forecastday[2].astro.moonset
     document.getElementById("mp2").innerText=data.forecast.forecastday[2].astro.moon_phase


    //  document.getElementById("tm-3").te =data.forecast.forecastday[2].date






  } catch (err) {
    console.log(err);
  }
};

downloadCsv();




navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;
  // Show a map centered at latitude / longitude.
  console.log(latitude)
});
