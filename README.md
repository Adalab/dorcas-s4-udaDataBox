
# Uda Data Box

Data React component of Urban Data Analytics.
It is a container that will have the values obtained for the following text literals:
- Price calculated by the system (uDA value).
- Algorithm used for calculation (Method).
- Accuracy of the algorithm (Accuracy).
- Average neighborhood price (uDA Typology / Neighborhood).
- Average price of the city (uDA City).

They are values brought in the answers to the calls to the API.

You can receive the coordinates to other UDA components (Uda Search Box: https://github.com/urbandataanalytics/udaSearchBox)  or external components.

# Props

The props you can configurate are the following ones:

| Prop | type | description |
| ------ | ------ | ------ |
| background-color | text | desired color of the component box or gray reflected in the default design, if not specified. |  
| coordinates (lat/lon)| object (Required) | Object with coordinates lat and lng |
| operation | number |it can be a 1 (for sale) or a 0 (for rent) |
| area | number | to do |
| property_type | number | to do |
| construction_type | number | to do |
| rooms | number | to do |
| energy_cert | number | to do |
| storage | number | to do |
| garage | number | to do |
| pool | number | to do |
| ac | number | to do |
| elevator | number | to do |
| outside | number | to do |
| agency | number | to do |
| bathrooms | number | to do |
| common_zones | number | to do |
| orientation_north | number | to do |
| orientation_south | number | to do |
| orientation_east | number | to do |
| orientation_west | number | to do |
| status | number | to do |

# Dependences
Axios for API calls (http://pre.urbandataanalytics.com/reds/api)
# How to use it

# Interesting Data

- To make the flow of calls to the api you need: *authorization* through **token** and a **portfolioId**.
- UdaData box is made with inline Styling.

### Tech

Uda Data Box uses a number of open source projects to work properly:
* [ReactJS]
* [ReactDOM]

# Authors
- **Esther Pato** - https://github.com/estherpato 
- **Valeria Roldán** - https://github.com/valromo
- **Loreto Vaquero** - https://github.com/VaqueroFontenla
- **Laura Vargas** - https://github.com/lauraVzarco











