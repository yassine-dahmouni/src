// import React from 'react';
// import AfficherCom from './AfficherCom';
// import Home from './yaassine/Home';
// import Blog from './yaassine/Blog';
// import About from './yaassine/About';
// import Navigation from './yaassine/Navigation';
// import {Routes,Route} from 'react-router-dom'; 
// import Yas from './yaassine/Yas.css';
// import "./yaassine/formulair/frm.css";

import React, { useState } from 'react';
import "./yaassine/frm.css";




    // const lignes=[

    //     {id:'l1', nom:'Ligne1', arrets:[

    // ]  },
        
    //     {id:'l2', nom:'Ligne2', arrets:[
            
    //         {codeA:'Adarissa', ordreA : 1},
    //          {codeA: 'Saada', ordreA : 2},
    //          {codeA: 'Atlas', ordreA : 3} 
    //     ]},

    //     {id:'l3', nom:'Ligne3', arrets:[

            
    //     { codeA:'A', ordreA : 1}, 
    //     {codeA: 'D', ordreA : 2},
    //     {codeA: 's', ordreA : 3}
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
    //             <p className='pr'>{info ? info.arrets.codeA :''}</p>
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






//   return (
//     <div>
        
//         <form>
//             <h1>Gestion des lignes bus</h1>

//             <div className='bt'>
//             <label>Num ligne </label>
//             <input type='text' className='rp' onChange={(e)=>{setId(e.target.value)}}/>
//             <input type='button' value='Rechercher' onClick={recherch}/> 
//             </div>n

//             <div className='cnt'>
//             <label>Arret de depart</label>
//             <p className='pr'>{info?info.arrets[0].codeA:''}</p>
//             </div>

//             <div className='cnt'>
//             <label>Arret Terminus</label>
//             <p className='pr'>{info?info.arrets[info.arrets.length-1].codeA:''}</p>
//             </div>

//             <div className='bt'>
//             <label>Nouvel arret</label>
//             <input type='text' className='rp' onChange={(e)=>{setNv(e.target.value)}}/>
//             <input type='button' value='Ajuter arret' onClick={ajouter}/>
//             </div>

//             <table border='1'>
//                 <thead>
//                     <tr>
//                         <th>Nom de l'arret</th>
//                         <th colSpan='2'>ordre de passage</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                   {info?info.arrets.map((arret,i)=>(
//                     <tr key={i}>
//                         <td>{arret.codeA}</td>
//                         <td>{arret.ordreA}</td>
//                         <td><input type="reset" value='Supprimer' onClick={sup(i)} /></td>
//                     </tr>
//                   )):''}
//                 </tbody>
//             </table>
//         </form>
//     </div>
//   )
// }






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



//////// onClick //////////

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








// function App() {
//   return (
//     <div className="main-route-place" style={{display:'flex',justifyContent:'space-around'}}>
//       <Home/>
//       <About/>
//       <Blog/>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//       </Routes>

//       <Navigation/>



//       </div>
    
//   );
// }export default App;

/////////// formulaire  //////////

// export default function App() {


//   const bus=[
//     {id:'t1',nom:'Fennec',villes:[]},
//     {id:'t2',nom:'cfd',villes:[]},
//     {id:'t3',nom:'Fede3ec',villes:[]},
//     {id:'t4',nom:'cdec',villes:[]}
// ]
// const [idT, setIdt]=useState('');
// const [info, setInfo]=useState(bus[0]);
// const [NV, setNv]=useState('');

// function recherch(){
//     setInfo(bus.find((x)=>x.id===idT));
// }

// function ajouter(){
//     info.villes.push(NV);
// }

//   return (
//     <div>
// {            
//             id <input type='text' onChange={(e)=>setIdt(e.target.value)}/> 
//             <button onClick={recherch}>Rechercher</button> <br/>
//             nom <h2>{info?info.nom:''}</h2> <br />
//             ville depart<h2>{info?info.villes[0]:''}</h2> <br />
//             ville terninus <h2>{info?info.villes[info.villes.length-1]:''}</h2> <br />
//             Nouvelle ville de passage <input type='text' onChange={(e)=>setNv(e.target.value)}/> <button onClick={ajouter}>charger</button> <br /> */}
//             { <table>
//                 <thead>
//                     <tr>
//                         <th>Nom de ville</th>
//                         <th colSpan='2'>ordre de passage</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {info?info.villes.map((ville,i) => (
//             <tr key={i+1}>
//               <td>{ville}</td>
//               <td>{i+1}</td>
//               <td><button onClick={(e)=>e.target.parentNode.parentNode.style.display='none'}>supprimer</button></td>
//             </tr>
//           )):''}
//                 </tbody>
//             </table>
//     </div>
//   )
// } }



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


export default function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button  type="button" onClick={updateColor}>Blue</button>
    </>
  )
}































  

