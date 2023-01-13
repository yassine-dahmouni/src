// import AfficherCom from './AfficherCom';
// import "./yaassine/frm.css";

// import Home from './yaassine/Home';
// import Blog from './yaassine/Blog';
// import About from './yaassine/About';
// import Nav from './yaassine/Nav';


// import { RouterProvider } from 'react-router-dom';
// import { createBrowserRouter} from "react-router-dom";

// import React, { useState } from 'react';








////////////// link /////////

// function App() {

//   const router = createBrowserRouter([
    
//     { path:"/" , element:<Nav />} ,

//     {  path:"/home" , element:<Home /> },

//    { path:"/about" , element:<About />},

//     { path:"/blog" , element:<Blog />} 

    

//   ])
//   return (
//     <>

//     <RouterProvider  router={router}/>

//     </>
//   );
// }

// export default App;


///////////////// formular ///////////

    // const lignes=[

    //     {id:'l1', nom:'Ligne1', arrets:[

    //     {codeA:'A', ordreA : 1}, 
    //     {codeA: 'D', ordreA : 2},
    //     {codeA: 's', ordreA : 3}]  },
        
    //     {id:'l2', nom:'Ligne2', arrets:[
            
    //         {codeA:'Adarissa', ordreA : 1},
    //          {codeA: 'Saada', ordreA : 2},
    //          {codeA: 'Atlas', ordreA : 3} 
    //     ]},

    //     {id:'l3', nom:'Ligne3', arrets:[

            


    //     ]},
    //     {id:'l4', nom:'Ligne4', arrets:[]},
    // ]

    // export default function Form() {

    //     const [id,setId]=useState('');
    //     const [info,setInfo]=useState(lignes[0]);
    //     const [nv,setNv]=useState('');

    //     function remplace(){
    //         setInfo(lignes.find((x)=>x.id==id))
    //     }



    //    function ajouter(){
    //     info.arrets.push({codeA:nv,ordreA:info.arrets.length+1});
        
        
    //    }
    
    

    //   return (
    //     <div>
            
    //         <form>
    //             <h1>Gestion des lignes bus</h1>

    //             <div className='bt'>
    //             <label>Num ligne </label>
    //             <input type='text' className='rp' onChange={(e)=>{setId(e.target.value)}}></input>
    //             <input type='button' value='Rechercher' onClick={remplace}/> 
    //             </div>

    //             <div className='cnt'>
    //             <label>Arret de depart</label> 
    //             <p className='pr'>{info ? info.arrets[0].codeA :''}</p>
    //             </div>

    //             <div className='cnt'>
    //             <label>Arret Terminus</label>
    //             <p  className='pr'>{info?info.arrets[info.arrets.length-1].codeA:''}</p>
    //             </div>

    //             <div className='bt'>
    //             <label>Nouvel arret</label>
    //             <input type='text' className='rp' onChange={(e)=>setNv(e.target.value)} />
    //             <input type='button' value='Ajouter arret' onClick={ajouter}/>
    //             </div>

    //             <div className='df'>
    //                 <p>Nom de l'arret</p>
    //                 <p>order de passage</p>
    //             </div>
                
    //             <table border='1'>
    //                   {info?info.arrets.map((arret)=>(
    //                     <tr key={arret.ordreA}>

    //                         <td>{arret.codeA}</td>  
    //                         <td>{arret.ordreA}</td>
                            
    //                         <td><input type='reset' value='Supprimer' onClick={(e)=>e.target.parentNode.parentNode.style.display='none'}/></td>
    //                     </tr>
    //                 )):''}
    //             </table>

    //         </form>
    //     </div>
    //   )
    // }









/////////// controle I ///////////////


//  function App() {
//   const commande = [
//     {numero: '123X', dateC: '22/02/2022', produit: ['tid' , 'omo','fanta']},
//     {numero: '1028W', dateC: '23/03/2022', produit: ['tid', 'sabon','coca']},
//     {numero: '121KLIH', dateC: '08/08/2022', produit: ['tid', 'omo', 'hawai']},
//   ];

//   return (
//     <main>
//       <AfficherCom commande={commande}/>
      
//     </main>
//   );
// }export default App;

// function GroceryList() {
//   const items = [
//     {id: 1, name: 'bread'},
//     {id: 2, name: 'milk'},
//     {id: 3, name: 'eggs'}
//   ];

//   return (
//     <>
//       <h1>Grocery List</h1>
//       <ul>
//         {items.map((item) => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </>
//   );
// }export default GroceryList;

// const Header = () => {
//   return (
//     <>
//       <h1 style={{color: "purple"}}>Hello Style!</h1>
//       <p>Add a little style!</p>
//     </>
//   );
//   }
//   export default Header;

// function Yas(props){
//     return(
//         <div>
//             Hello {props.name} {props.prenom}
//         </div>
//     );
//   } 


//   function Pop(props){
//     return(
//         <div>
//             <Yas  name='yassine' prenom='dahmouni'/>
//         </div>
//     )
// }export default Pop;   



// ////// onClick //////////

// export default class yas extends React.Component  {

//  state={
//     x:0
//   }

// render(){
//   return(

//     <div>
//     <p>{this.state.x}</p>

//       <button onClick={()=>{this.setState({x:this.state.x+1})}}>onclick</button>
      
//     </div>
//   )
// }
// } 
















// export default function Yas(props){

//   const cmd=[
//     {nom:'yassine',prenom:'dasdfgh',age:57},
//     {nom:'htim',prenom:'dasdfgh',age:57},
//     {nom:'zhir ',prenom:'dasdfgh',age:57},
//   ];
 
  
//   return(
//     <div>
//       <Awc bb={cmd}/>
//     </div>
//   )
// }







// function Awc(props){
//    return(
//     <div>
//       {props.bb.map(bb => (
//         <div>
//               iam {bb.nom} <br/>
//               my las name is {bb.prenom}  <br/>
//               I'm {bb.age}
//         </div>
//       ))}


      

//     </div>
//    )
// }







// export default function Car() {
//     const cmd=[

//     {nom:'yassine',prenom:'dahmouni',age:57},
//     {nom:'htim',prenom:'gggg',age:7},
//     {nom:'zhir ',prenom:'vvvvv',age:5},

//   ];

//   const [nom, setNom] = useState('');
//   const [prenom, setPrenom] = useState("");
//   const [age, setAge] = useState();

//   return (
//     <>
//     <h1>
//       {nom}  {prenom}  {age}
//     </h1>
//     </>
//   )
// }









// export default function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}
//       </p>
//       <button  type="button" onClick={updateColor}>Blue</button>
//     </>
//   )
// }































  

