import Stories from './Stories/Stories';
import Posts from './Posts/Posts'
import Usuário from './SideBar/Usuário';
import Sugestões from './SideBar/Sugestões';
export default function Corpo (){
    return (
        <div class="corpo">
            <div class="esquerda">
            <Stories />
            <Posts />
            </div>

            <div class="sidebar">
          <Usuário imagem="assets/img/catanacomics.svg" titulo="catanacomics" texto="Catana" />
          <Sugestões/>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
            </div>
      </div>
        
    )
}