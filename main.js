async function test(){
    

    let postBody = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataRequest),
      };

    let data = await fetch("http://fohm-app.folkhalsomyndigheten.se/Folkhalsodata/api/v1/sv/A_Folkhalsodata/L_Vaccin/Covid19/covvaccreg.px", postBody)
    let dataFixed = await data.json();
    console.log(dataFixed);
}

test();