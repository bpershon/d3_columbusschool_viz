# columbus-city-school-analysis
Interactive maps to explore what factors impact a students performance the most.

Software packages: HTML5, Javascript, D3, Leaflet 

User guide: The site has been hosted on github.io at the following link: https://bpershon.github.io/ . If a user wishes to run the project locally they first need to launch a python web server on their system (using Anaconda prompt for example):

At the command line type: 

Python 2.7: python -m SimpleHTTPServer 8888 
Python 3: python -m http.server 8888

Once the service is running, go to your web browser (Chrome/Firefox) and type: localhost:8888.
This will bring up a list of files on your system, navigate to the project download folder, once inside the folder the page should load up (if not click the index.html file). 

Data: The data is found in the data folder, the school-data.csv file, it is a collection of data from the following datasets:
http://webapp2.ode.state.oh.us/similar_districts/raw_data.asp (2017)
http://reportcard.education.ohio.gov/Pages/Download-Data.aspx (2016-2017 -> District Data, Financial Expenditures, School Building Data)

Link to our final dataset: https://github.com/bpershon/bpershon.github.io/blob/master/data/school-data.csv