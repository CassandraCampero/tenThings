import './styles/style.scss';
import Menu from './Menu';
import Avatar from './Avatar';
import Modales from './Modal';
import Search from './Search';
import oaxaca from './resources/oaxaca.jpeg'
import casa from './resources/casa.jpeg'
import concierto from './resources/concierto.jpeg'
import libros from './resources/libros.jpeg'
import pastel from './resources/pastel.jpg'
import patinar from './resources/patinar.jpeg'
import pintar from './resources/pintar.jpeg'
import titulo from './resources/titulo.jpeg'
import floklore from './resources/floklore.jpeg'
import triatlon from './resources/triatlon.jpeg'

const cardsList = [
  {
  'mheading': 'Viajar',
  'description': 'Viajar por el mundo y conocer mi país es de las experiencias desde mi parecer más enriquecedoras que la vida nos brinda',
  'img' : oaxaca
},
{
  'mheading': 'Patinar',
  'description': 'Quisiera aprender a patinar por que se me hace un ejercicio muy divertido',
  'img' : patinar
},
{
  'mheading': 'Pintar',
  'description': 'La pintura para mi es una manera de tranquilizarte y un momento para reflexionar mientras te expresas',
  'img' : pintar
},
{
  'mheading': 'Sueños',
  'description': 'Un sueño o meta personal es tener una casa propia, producto de mi esfuerzo',
  'img' : casa
},
{
  'mheading': 'Lectura',
  'description': 'Me encanta leer libros de auto ayuda',
  'img' : libros
},
{
  'mheading': 'Folklore',
  'description': 'El baile regional Mexicano es hermoso y da vida ',
  'img' : floklore
},
{
  'mheading': 'Titulación',
  'description': 'Mi metá más proxima es una titulación y me esforzaré por ello',
  'img' : titulo
},
{
  'mheading': 'Triatlòn',
  'description': 'Es una experiencia unica que quisiera vivir algún día',
  'img' : triatlon
},
{
  'mheading': 'Repostería',
  'description': 'Disfrutar de la comida o repostería es una manera de conectar con los que más quieres',
  'img' : pastel
},
{
  'mheading': 'Conciertos',
  'description': 'Mis artistas favoritos expresan con su musica momentos de mi vida y que mejor que escucharlos en vivo',
  'img' : concierto
},
]


const App = () => 

<>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    <link href="https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap" rel="stylesheet"/>     
  
    <section className="container">
        <div className="element1 item">
        <span className="material-icons md-18">&#xe8af; </span>
        <label className="target">Ten Things</label>
        </div>
        <div className="element2 item">
          <Menu/>
        </div>
        <div className="element3 item">
          <Avatar/>
          <hr/>
         
        </div>
        <div className="element4 item">
        <h3>My Ten Things</h3>
          <div className="container-dos">
              
               
              {
                cardsList.map(c=><Modales mheading={c.mheading} img={c.img} description={c.description}  />)
              }
              
          </div>
          
          
        </div>
        <div className="element5 item">

        <Search className="searching"/>

        </div>
    </section>
  

  
  </>


  


export default App;
