
    
    
    let mapContainer = document.getElementById("map-container");
    let latitude = document.querySelector(".latitude");
    let longitude = document.querySelector(".longitude");
    // let latitudeValue;
    // let longitudeValue;

    // const successCallback = (position => {
    //     console.log(position);
    //     latitudeValue = position.coords.latitude;
    //     longitudeValue = position.coords.longitude;
    //     // latitude.textContent = latitudeValue;
    //     // longitude.textContent = longitudeValue;

    // })

    // const errorCallback = (position => {
    //     console.error(position);
    // })

    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    const mapKey = "Aksb5LTTWeKRRLC6kLflvGY4ic4UGIQbxZqccv1ZTYoBMFTM6M37gf5GZECdtdoA";
    
    
    function myMap()
    {
        let newCenter = new Microsoft.Maps.Location(39.377911, -74.433792);
        let secondCenter = new Microsoft.Maps.Location(39.484100, -74.982050);
        let thirdCenter = new Microsoft.Maps.Location(39.640766, -74.803683);
        let fouthCenter = new Microsoft.Maps.Location(39.9426613, -75.0248747);

        let trueCenter = new Microsoft.Maps.Location(39.507431, -74.725010);
        var map = new Microsoft.Maps.Map('#newMap', {
          credentials: mapKey,
          center: trueCenter,
          mapTypeId: Microsoft.Maps.MapTypeId.road,
          zoom: 9.5,
          disableScrollWheelZoom: true,
          disablePanning: true
        });

        var infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);
        var fouthPin = new Microsoft.Maps.Pushpin(fouthCenter, {
            title: "Cherry Hill Mall"
        })
        var thirdPin = new Microsoft.Maps.Pushpin(thirdCenter, {
            title: "Our Lady Of Mt Carmel Society Festival"
        });



        var secondPin = new Microsoft.Maps.Pushpin(secondCenter, {
            title: 'Vineland Landis Theater'
            // subTitle: 'City Center',
            }); 

      var pin = new Microsoft.Maps.Pushpin(newCenter, {
        title: 'Borgata Casino in Atlantic City'
        // subTitle: 'City Center',
        });

        pin.metadata = {
            title: 'Borgata Casino',
            description: '1 Borgata Way, Atlantic City, NJ 08401'
        };

        secondPin.metadata = {
            title: "Vineland Landis Theater",
            description: "830 E Landis Ave, Vineland, NJ 08360"
        }

        thirdPin.metadata = {
            title: "Our Lady Of Mt Carmel Society Festival",
            description: "Our Lady Of Mt Carmel Society Festival, 298 Tilton St, Hammonton, NJ 08037"
        }

        fouthPin.metadata = {
            title: "Cherry Hill Mall",
            description: "Cherry Hill Mall, 2000 NJ-38, Cherry Hill, NJ 08002"
        }

        map.entities.push(pin);
        Microsoft.Maps.Events.addHandler(pin, 'click', function pushpinClicked(e) {
            //Make sure the infobox has metadata to display.
            if (e.target.metadata) {
                //Set the infobox options with the metadata of the pushpin.
                infobox.setOptions({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });

        map.entities.push(secondPin);
        Microsoft.Maps.Events.addHandler(secondPin, 'click', function pushpinClicked(e) {
            //Make sure the infobox has metadata to display.
            if (e.target.metadata) {
                //Set the infobox options with the metadata of the pushpin.
                infobox.setOptions({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });

        map.entities.push(thirdPin);

        Microsoft.Maps.Events.addHandler(thirdPin, 'click', function pushpinClicked(e) {
            //Make sure the infobox has metadata to display.
            if (e.target.metadata) {
                //Set the infobox options with the metadata of the pushpin.
                infobox.setOptions({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });

        map.entities.push(fouthPin);

        Microsoft.Maps.Events.addHandler(fouthPin, 'click', function pushpinClicked(e) {
            //Make sure the infobox has metadata to display.
            if (e.target.metadata) {
                //Set the infobox options with the metadata of the pushpin.
                infobox.setOptions({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        });
        //Add the pushpin to the map
        
  
        //Add your post map load code here.
    }


    //location drop down ------------------------------

    window.addEventListener("DOMContentLoaded", () => {
        let downButton = document.querySelectorAll(".down-btn");
        let contentToShow = document.querySelectorAll(".first-location-content");
        downButton.forEach((button) => {
            button.addEventListener("click", (e) => {
                contentToShow.forEach((element) => {
                    console.log(element)
                    // let checkIfButton = element.querySelector()
                    let newButton = element.querySelector(".down-btn");
            
                    if(button != newButton) {
                        element.classList.remove("show-content")
                    }
                   
                })
                    let title = e.target.parentElement.parentElement;
                    let newDownButton = title.querySelector(".down-btn")
                    let content = title.nextElementSibling;
                     if(content.classList.contains("show-content")) {
                        newDownButton.innerHTML = `<i class="fa fa-chevron-down"></i>`
                        // if(newDownButton.innerHTML)
                    } else {
                        newDownButton.innerHTML = `<i class="fa fa-chevron-up"></i>`
                    }

                    content.classList.toggle("show-content");
                    
                })
        })
       
    })