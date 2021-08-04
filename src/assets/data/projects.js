import { v4 as uuidv4 } from 'uuid';
import PlaydateImg from '../imagens/playdate.jpg';
import AppCenterImg from '../imagens/splash_screen_movel.png';
import MarvelImg from '../imagens/personagens_marvel.png';
import UpLifeImg from '../imagens/up_life.png';
import SiteJogoImg from '../imagens/background.png';

const projects = [
  {
    id: uuidv4(),
    name: 'AppCenter',
    desc:
      'Uma aplicação que permite criar eventos, iniciativas pela comunidade, pelas entidades municipais, por empresas para desenvolvimento da região centro.',
    img: AppCenterImg,
    caminho:"/AppCenter",
  },
  {
    id: uuidv4(),
    name: 'Marvel',
    desc:
      'Um site onde se pode passar um bom tempo a jogar um jogo de memória e a conhecer um pouco mais sobre algumas personagens da Marvel e trailes.',
    img: MarvelImg,
    caminho:"Marvel",
  },
  {
    id: uuidv4(),
    name: 'UpLife',
    desc:
      'Um site que ajuda a que exista uma união da comunidade de bairros, criando eventos, festas, ajudar quem necessita de ajuda.',
    img: UpLifeImg,
    caminho:"UpLife",
  },
  {
    id: uuidv4(),
    name: "Playdate Developer",
    desc:
      'Um jogo para passar um bom tempo!! Um tanque que tem que destruir o inimigo, podendo obter armas e melhorar o tanque.',
   img: PlaydateImg,
    caminho:"Playdate",
  },
  {
    id: uuidv4(),
    name: 'Site Portfólio (jogo)',
    desc:
      'Um site jogo, um site que para visualizar informações pessoais e profissionais tenha que ser jogado quase como um jogo normal.',
     img: SiteJogoImg,
    caminho:"SiteJogo",
  },
];

export default projects;