
# Uda Data Box

Data component of Urban Data Analytics.
It is simply a container that will have the values obtained for the following text literals:
- Price calculated by the system (uDA value).
- Algorithm used for calculation (Method).
- Accuracy of the algorithm (Accuracy).
- Average neighborhood price (uDA Typology / Neighborhood).
- Average price of the city (uDA City).

They are values brought in the answers to the calls to the API, which is really the consequence of the search by address or by cadastral reference.

You can receive the coordinates to other UDA components (Uda Search Box)  or external components (hard-coded).

# Getting Started with Uda Data Box

To start with udaDataBox, first, you have to install the npm package.

```sh
$ npm install --¿Uda Data Box?
```
# Props

The props you can configurate are the following ones:

| Prop | type | description |
| ------ | ------ | ------ |
| background-color | text | desired color of the component box or gray reflected in the default design, if not specified. |  
| coordinates (lat/lon)| number |  |
| operation | number |it can be a 1 (for sale) or a 0 (for rent) |
| area | number |  |
| property_type | number |  |
| construction_type | number |  |
| rooms | number |  |
| energy_cert | number |  |
| storage | number |  |
| garage | number |  |
| pool | number |  |
| ac | number |  |
| elevator | number |  |
| outside | number |  |
| agency | number |  |
| bathrooms | number |  |
| common_zones | number |  |
| orientation_north | number |  |
| orientation_south | number |  |
| orientation_east | number |  |
| orientation_west | number |  |
| status | number |  |

# Dependences
Axios for API calls (http://pre.urbandataanalytics.com/reds/api)
# How to use it

**nada porque no hay npm todavía**

# Interesting Data

- To make the flow of calls to the api you need: *authorization* through **token** and a **portfolioId**.
- UdaData box is made with inline Styling.

### Tech

Uda Data Box uses a number of open source projects to work properly:
* [ReactJS] 

# Authors
- **Esther Pato** - https://github.com/estherpato 
- **Valeria Roldán** - https://github.com/valromo
- **Loreto Vaquero** - https://github.com/VaqueroFontenla
- **Laura Vargas** - https://github.com/lauraVzarco











