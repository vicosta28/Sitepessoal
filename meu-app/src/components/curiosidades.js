import styles from './curiosidades.module.css'


function Curiosidades(props) {
    return (  
        <section className={styles.card}>
           <div>
                <p>{props.texto}</p>
                <img src={props.img}></img>           
           </div>
        </section>
   ) 
}
    
    
export default Curiosidades