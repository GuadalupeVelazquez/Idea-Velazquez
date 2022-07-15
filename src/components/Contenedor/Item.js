import React from 'react'

const styles = {
         card : {
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             fontSize: '1.2rem',
             color:'black',
             borderstyle: 'inset',
             width: 200,
             height: 200,
             margin:250
             
         },
    
         cardContainer:{
             
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'spaceAround',
                margin: '10%'
             
    
         },

         cardImage:{
            width:"300px"
         },

         enlaceStyle: {
            textDecoration: 'none',
            color: '#3c3cea',
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
         }
         
    };

 const Item = ({item}) => {
  return (
    <div style={styles.cardContainer}>
    <img style={styles.cardImage} src={item.image} alt='' />
    <div>
        <h2>{item.nombre}</h2>
    </div>

    <div>
        <p>{item.description}</p>
      
    </div>
    
    <div>
    <a style={styles.enlaceStyle} href={`/detalle/${item.id}`}>enlace</a>
    </div>

</div>
  )
}

export default Item
