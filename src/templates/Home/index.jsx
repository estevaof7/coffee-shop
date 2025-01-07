import '../../styles/App.css';
import '../../styles/Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from '../../components/Nav';
import { Video } from '../../components/Video';
import { Section2 } from '../../components/Section2';

//depois: Separar o css para cada componente para não ficar tudo naquele

function Home() {
  return (
    <div>
      <Nav />
      <Video />
      <Section2 />
    </div>
  );
}

export default Home;
