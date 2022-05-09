import Stories from './Stories/Stories';
import Posts from './Posts/Posts'
import Usuário from './SideBar/Usuário';
import Sugestões from './SideBar/Sugestões';
import Links from './SideBar/Links'
import Copyright from './SideBar/Copyright'
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
                <Links/>
                <Copyright/>
            </div>
      </div>
        
    )
}