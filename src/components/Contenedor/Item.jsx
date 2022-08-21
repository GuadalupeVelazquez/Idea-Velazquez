import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

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
         },

         distances : {
            margin:'5px',
            textDecoration: 'none',
            padding: '5px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#1883ba',
            borderRadius: '6px',
            border: '2px solid rgba(63, 52, 134, 0.57)',
            boxShadow: 'rgb(34, 36, 36) 2px 2px 5px'
          }
         
    };

async function handleDetail(id){
    const navigate = useNavigate()
    navigate(`/detalle/${id}`)
}


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
        <span style={styles.enlaceStyle} onClick={()=> handleDetail(item.id)}>

        </span>
    <Link to= {`/detalle/${item.id}`} ><button style={styles.distances}>Ver mas</button></Link>
    </div>

</div>
  )
}

export default Item
