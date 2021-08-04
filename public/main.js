const submit = document.getElementById("submit");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById('temp_status');
const real_temp = document.getElementById('real_temp');

const data_hide = document.querySelector('.middle_layer');
 const getInfo = async(event)=>{
    event.preventDefault();
    let city = cityname.value; 
    
    if(city === ""){
        city_name.innerText = `Please Enter CityName!`;
        data_hide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=492cccad3eb4e60cfbd0ef71b92db2c3`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            real_temp.innerText = arrData[0].main.temp;
        
           const tempMood = arrData[0].weather[0].main;
           if(tempMood === "Clear") {
               temp_status.innerHTML =
               "<i class='fas fa-sun' style='color: #eccc68;'></i>"
           }else if(tempMood === "Clouds") {
            temp_status.innerHTML =
            "<i class='fas fa-cloud' style='color: #eccc68;'></i>"
        }else if(tempMood === "Rain") {
            temp_status.innerHTML =
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
        } else {
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color:#f1f2f6;'></i>"
        }

        data_hide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `Enter CityName`;
            data_hide.classList.add('data_hide');
        }   
    }
}

submit.addEventListener("click",getInfo);