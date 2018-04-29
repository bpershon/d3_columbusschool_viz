var geojson;

var schoolData = [{
    "type": "Feature",
    "properties": {"name": "Bexley", "Success %":0.916,"Absent %":0.051, "ACT Remedial %": 0.706, "Median Income %": 0.952, "Diversity %": 0.14, "Parent with College Degree":0.742, "Teacher Experience": 0.875, "Teacher Salary":0.921, "Teacher Per 1000 student %":0.904, "Graduation %":0.95},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-82.945013, 39.979204], 
            [-82.945013, 39.929409],
            [-82.920772, 39.929409],
            [-82.920772, 39.979204]
		]]}	
}, 
{
    "type": "Feature",
    "properties": {"name": "Whitehall", "Success %":.169,"Absent %":0.238, "ACT Remedial %": 0.106, "Median Income %": 0.322, "Diversity %": 0.68, "Parent with College Degree":0.106, "Teacher Experience": .4375, "Teacher Salary":.71135, "Teacher Per 1000 student %":0.7723, "Graduation %":0.77},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-82.912916, 39.979581],
			[-82.851137, 39.979581],
			[-82.851137, 39.931013],
			[-82.912916, 39.931013]
			
		]]}	
},
{
    "type": "Feature",
    "properties": {"name": "Groveport Madison", "Success %":0.23,"Absent %":0.173, "ACT Remedial %": 0.146, "Median Income %": 0.42, "Diversity %": 0.53, "Parent with College Degree":0.169, "Teacher Experience": 0.563, "Teacher Salary":0.707, "Teacher Per 1000 student %":0.783, "Graduation %":0.803},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-82.949171, 39.927465], 
            [-82.838571, 39.927465],
            [-82.838571, 39.796497],
            [-82.949171, 39.796497]	
		]]}	
},
{
    "type": "Feature",
    "properties": {"name": "Canal Winchester", "Success %":0.416,"Absent %":0.106, "ACT Remedial %": 0.288, "Median Income %": 0.612, "Diversity %": 0.32, "Parent with College Degree":0.353, "Teacher Experience": 0.75, "Teacher Salary":0.681, "Teacher Per 1000 student %":0.843, "Graduation %":0.969},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-82.831219, 39.929521],
			[-82.752706, 39.929521],
			[-82.752706, 39.797532],	
			[-82.831219, 39.797532]
			
		]]}	
},
{
    "type": "Feature",
    "properties": {"name": "Reynoldsburg", "Success %":.32,"Absent %":0.116, "ACT Remedial %": 0.184, "Median Income %": 0.48, "Diversity %": 0.56, "Parent with College Degree":0.297, "Teacher Experience": .5625, "Teacher Salary":0.72981, "Teacher Per 1000 student %":0.6792, "Graduation %":0.924},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-82.846013, 39.978194],
			[-82.742168, 39.978194],
			[-82.742168, 39.931447],
			[-82.846013, 39.931447]
			
		]]}	
},
{
    "type": "Feature",
    "properties": {"name": "Dublin", "Success %":0.846,"Absent %":0.088, "ACT Remedial %": 0.67, "Median Income %": 0.759, "Diversity %": 0.16, "Parent with College Degree":0.625, "Teacher Experience": 0.688, "Teacher Salary":0.95, "Teacher Per 1000 student %":0.849, "Graduation %":0.975},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-83.280086, 40.198078],
            [-83.280086, 40.060755],
            [-83.099657, 40.060755],
            [-83.099657, 40.198078]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Worthington", "Success %":0.637,"Absent %":0.071, "ACT Remedial %": 0.511, "Median Income %": 0.694, "Diversity %": 0.25, "Parent with College Degree":0.573, "Teacher Experience": 1, "Teacher Salary":0.903, "Teacher Per 1000 student %":0.844, "Graduation %":0.949},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
            [-83.093629, 40.158881], 
            [-83.093629, 40.074383],
            [-82.971307, 40.074383],  
            [-82.971307, 40.158881]
        ]]}    
}, {
    "type": "Feature",
    "properties": {"name": "Westerville", "Success %":.511,"Absent %":0.087, "ACT Remedial %": 0.411, "Median Income %": 0.614, "Diversity %": 0.38, "Parent with College Degree":0.485, "Teacher Experience": .5, "Teacher Salary":.8076, "Teacher Per 1000 student %":0.765, "Graduation %":0.905},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-82.960829, 40.199594],
            [-82.960829, 40.073283],
            [-82.830353, 40.073283],
            [-82.830353, 40.199594]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "New Albany", "Success %":.839,"Absent %":0.091, "ACT Remedial %": 0.644, "Median Income %": 1, "Diversity %": 0.17, "Parent with College Degree":0.668, "Teacher Experience": .9375, "Teacher Salary":0.87744, "Teacher Per 1000 student %":0.8102, "Graduation %":0.974},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-82.823265, 40.189702],
            [-82.823265, 40.071028],
            [-82.741827, 40.071028],
            [-82.741827, 40.189702]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Gahanna", "Success %":0.446,"Absent %":0.068, "ACT Remedial %": 0.347, "Median Income %": 0.684, "Diversity %": 0.34, "Parent with College Degree":0.478, "Teacher Experience": 0.625, "Teacher Salary":0.814, "Teacher Per 1000 student %":0.781, "Graduation %":0.935},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-82.943201, 40.068967],
            [-82.943201, 39.982671],
            [-82.747483, 39.982671],
            [-82.747483, 40.068967]
        ]]
    }
},

{
    "type": "Feature",
    "properties": {"name": "Hilliard", "Success %":.573,"Absent %":0.081, "ACT Remedial %": 0.457, "Median Income %": 0.699, "Diversity %": 0.18, "Parent with College Degree":0.5, "Teacher Experience": 1, "Teacher Salary":0.93086, "Teacher Per 1000 student %":0.79665, "Graduation %":0.953},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-83.246105, 40.059125],
            [-83.246105, 39.989671],
            [-83.107193, 39.989671],
            [-83.107193, 40.059125]

		]]}	
},

{
    "type": "Feature",
    "properties": {"name": "Upper Arlington", "Success %":.952,"Absent %":0.062, "ACT Remedial %": 0.756, "Median Income %": 0.998, "Diversity %": 0.08, "Parent with College Degree":0.734, "Teacher Experience": .9375, "Teacher Salary":1, "Teacher Per 1000 student %":0.955, "Graduation %":0.975},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-83.103713, 40.057688],
            [-83.103713, 39.992289],
            [-83.022568, 39.992289],
            [-83.022568, 40.057688]
		]]}	
},

{
    "type": "Feature",
    "properties": {"name": "Grandview", "Success %":0.707,"Absent %":0.066, "ACT Remedial %": 0.641, "Median Income %": 0.723, "Diversity %": 0.07, "Parent with College Degree":0.701, "Teacher Experience": 0.875, "Teacher Salary":0.935, "Teacher Per 1000 student %":1, "Graduation %":0.958},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-83.073661, 39.988323],
            [-83.073661, 39.920462],
            [-83.021089, 39.920462],
            [-83.021089, 39.988323]
		]]}	
},

{
    "type": "Feature",
    "properties": {"name": "Columbus", "Success %":0.147,"Absent %":0.378, "ACT Remedial %": 0.087, "Median Income %": 0.385, "Diversity %": 0.72, "Parent with College Degree":0.314, "Teacher Experience": 0.625, "Teacher Salary":0.826, "Teacher Per 1000 student %":0.888, "Graduation %":0.741 },
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-83.02000, 40.072], 
            [-82.95000, 40.072],
            [-82.95000, 39.9000],
            [-83.02000, 39.9000]

		]]}	
},

{
    "type": "Feature",
    "properties": {"name": "Southwestern", "Success %":.28,"Absent %":0.18, "ACT Remedial %": 0.13, "Median Income %": 0.459, "Diversity %": 0.33, "Parent with College Degree":0.207, "Teacher Experience": .8125, "Teacher Salary":0.80364, "Teacher Per 1000 student %":0.73408, "Graduation %":0.865},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-83.262031, 39.984919], 
            [-83.075314, 39.984919], 
            [-83.075314, 39.797000],
            [-83.262031, 39.797000]
		]]}	
},

{
    "type": "Feature",
    "properties": {"name": "Hamilton Local", "Success %":.238,"Absent %":0.13, "ACT Remedial %": 0.178, "Median Income %": 0.404, "Diversity %": 0.2, "Parent with College Degree":0.085, "Teacher Experience": .625, "Teacher Salary":0.796, "Teacher Per 1000 student %":0.815, "Graduation %":0.954},
    "geometry": {
        "type": "Polygon",
        "coordinates":[[
			[-83.072819, 39.891353],
            [-82.953444, 39.891353],
            [-82.953444, 39.801007],
            [-83.072819, 39.801007]	
		]]}	
}

    
    
];





var map = L.map('map').setView([39.9611800, -82.9987900], 10);

var drawChoice = 0;

var drawArray = ["Graduation %","Success %", "ACT Remedial %", "Median Income %", "Diversity %", "Parent with College Degree", "Teacher Experience", "Teacher Salary", "Teacher Per 1000 student %", "Absent %"]

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox.light'
	}).addTo(map);


	// control that shows district info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
        
        densityStr = drawArray[drawChoice];
        
		this._div.innerHTML = '<h4>Percentage Value</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + densityStr + ' : ' + (props[densityStr] * 100).toFixed(2) + ' %'
			: 'Hover over a district');
	};

	info.addTo(map);
    
    var customControl0 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Graduation %</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 0;
                map.fire('viewreset');
                console.log('drawChoice set to '+drawChoice);
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl1 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Success %</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 1;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl2 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>ACT Remedial %</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 2;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl3 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Median Income %</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 3;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl4 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Diversity %</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 4;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl5 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Parent with College Degree</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 5;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl6 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Teacher Experience</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 6;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl7 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Teacher Salary</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 7;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl8 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Teacher Density</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 8;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    
    var customControl9 = L.Control.extend({

        options: {
            position: 'topleft'
        },

        onAdd: function (map) {
            var container = L.DomUtil.create('div');

            container.innerHTML = "<button>Absent %</button>"
            container.style.backgroundColor = 'white';     
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';

            container.onclick = function(){
                drawChoice = 9;
                map.fire('viewreset');
				map.removeLayer(geojson);
				redraw();
            }

            return container;
        }
    });
    

	// get color depending on population density value
	function getColor(d) {
		return d > 0.95 ? '#ff0000' : //red 
				d > 0.90  ? '#a81c1c' :
				d > 0.85  ? '#fe7573' :
				d > 0.80  ? '#fe8073' :
				d > 0.75   ? '#fe8e73' :
				d > 0.70   ? '#fe9873' :
				d > 0.65   ? '#fea173' :
				d > 0.60  ? '#feac73' :
				d > 0.55  ? '#feb873' :
				d > 0.50  ? '#fecb73' :
				d > 0.45  ? '#fedd73' :
				d > 0.40  ? '#fef273' :
				d > 0.35  ? '#edfe73' :
				d > 0.30  ? '#d4fe73' :
				d > 0.25  ? '#bafe73' :
				d > 0.20  ? '#8efe73' :
				d > 0.15  ? '#73fe85' :
				d > 0.10  ? '#73fea4' :
				d > 0.05  ? '#74febe' :				
							'#75fef0'; // turq
	}

	function style(feature) {
        var color;
        
        switch(drawChoice){
            case 1:
                color = getColor(feature.properties["Success %"]);
                break;
            case 9:
                color = getColor(feature.properties["Absent %"]);
                break;
            case 2:
                color = getColor(feature.properties["ACT Remedial %"]);
                break;
            case 3:
                color = getColor(feature.properties["Median Income %"]);
                break;
            case 4:
                color = getColor(feature.properties["Diversity %"]);
                break;
            case 5:
                color = getColor(feature.properties["Parent with College Degree"]);
                break;
            case 6:
                color = getColor(feature.properties["Teacher Experience"]);
                break;
            case 7:
                color = getColor(feature.properties["Teacher Salary"]);
                break;
            case 8:
                color = getColor(feature.properties["Teacher Per 1000 student %"]);
                break;
            
            default:
                color = getColor(feature.properties["Graduation %"]);
        }
        
		return {
			weight: 2,
			opacity: 1,
			color: 'Red',
			dashArray: '3',
            fillOpacity: 0.7,
			fillColor: color //getColor(feature.properties.density)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}


	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	
	geojson = L.geoJson(schoolData, { 
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map);
	
	function redraw(){
		geojson = L.geoJson(schoolData, { 
			style: style,
			onEachFeature: onEachFeature
		}).addTo(map);
	}

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
			labels = [];

		for (var i = 0; i < grades.length-1; i++) {			
			div.innerHTML +=
            '<i style="background:' + getColor((grades[i] + 1) / 100.0) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
			
			
		}
		
		console.log(labels);
		return div;
	};
    
    map.addControl(new customControl0());
    map.addControl(new customControl1());
    map.addControl(new customControl2());
    map.addControl(new customControl3());
    map.addControl(new customControl4());
    map.addControl(new customControl5());
    map.addControl(new customControl6());
    map.addControl(new customControl7());
    map.addControl(new customControl8());
    map.addControl(new customControl9());

	legend.addTo(map);
