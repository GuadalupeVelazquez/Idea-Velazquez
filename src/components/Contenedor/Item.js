import React from 'react'

const styles = {
         card : {
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             borderStyle: 'solid',
             borderWidth: '2px',
             width: 400,
             borderColor:'#417b73',
             padding: '10px',
             textAlign: 'center',
             borderRadius: '30px',
             margin:50
             
             
         },
    
         cardContainer:{
             
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'spaceAround',
                margin: '10%'
             
    
         },

         cardImage:{
            width:"200px"
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
    <div style={styles.card}>
    <img style={styles.cardImage} src={item.image} alt='' />
    <div>
        <h2>{item.nombre}</h2>
    </div>

    <div>
        <p>{item.description}</p>
      
    </div>
    
    <div>
    <a style={styles.enlaceStyle} href={`/detalle/${item.id}`}>Ver mas</a>
    </div>

</div>
  )
}

export default Item
