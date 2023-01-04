
function AfficherCom (props) {
    return (
      <div>
        {props.commande.map(commande => (
        <div>
          <hr/>
          <b>Commande numero: {commande.numero} date: {commande.dateC}</b>
          <hr/>
           Produits: 
          <br/>
           { commande.produit } 
          <hr/>
        </div>
        
        ))}
        
      </div> 
    );
  }
  export default AfficherCom;






