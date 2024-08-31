How to write CSS in JSX?

const styleCard = {
    color: #000,
}; 

const Card = () => {
    return (
        <div className"card" style={styleCard}> MOMO </div>
    )
}


/************React Props*************/
Props is an object, When we have to dynamicly pass some data to a component you pass a props

/######Example###/
const RestaurantCard = (props) => {
     return (
          <div className="res-card">
          <img alt="Card img" className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/1KGOCMB" />
          <h3>{props.resName}</h3>
          <h4>{props.resCuisin}</h4>
          <h4>{props.resRat}</h4>
          <h4>{props.resTime}</h4>
          </div>
     )
};
const Body = () => {
     return(
          <div className="body">
               <div className="search">Search</div>
               <div className="res-container">
                <RestaurantCard resName="Meghana Foods" resCuisin="Biryani, North Indian, Asian" resRat="4.4 start" resTime="38 minutes"/>
                <RestaurantCard resName="KFC Foods" resCuisin="Nonveg" resRat="4 start" resTime="30 minutes"/>
                <RestaurantCard resName="Dominos" resCuisin="Pizz" resRat="4.4 start" resTime="38 minutes"/>
                <RestaurantCard resName="MOMO" resCuisin="MOMO's" resRat="4.4 start" resTime="38 minutes"/>
               </div>
          </div>
     )
};

/#######Config driven UI:############/

Config driven UI: controling UI how UI looks like using data, data comes from backend.

/#### destructuring of data  ######/

const {resName, resRat, resCuisin,.....} = dataList?.data;
-------------
While looping list in react should have unique ID, other wise we have warning

 resList.map((restaurant) => (
                         <RestaurantCard key={restaurant.resId} resData={restaurant}/>
                    ))
