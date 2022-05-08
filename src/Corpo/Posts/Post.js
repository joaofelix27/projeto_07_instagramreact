import React from 'react';
let contador=0
export default function Post (props) {
    const [heart, setHeart] = React.useState(<ion-icon onClick={incrementar} class="aloha1" name="heart-outline"></ion-icon>);
    return (
    <div class="post">
        <div class="topo">
            <div class="usuario">
            <img src={props.imagem}/>
            {props.texto}
            </div>
            <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo" onClick={incrementar1} >
            <img src={props.imagempost}/>
        </div>

        <div class="fundo">
            <div class="acoes">
            <div>
                {heart}
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            </div>

            <div class="curtidas">
            <img src={props.imagemcomentarios} />
            <div class="texto">
                Curtido por <strong>{props.curtidopor}</strong> e <strong>outras {props.eoutras} pessoas</strong>
            </div>
            </div>
        </div>
    </div>
)
    function incrementar1 (){
            setHeart(<ion-icon onClick={incrementar} class="aloha" name="heart"></ion-icon>)
            contador=1
}
function incrementar (){
    if(contador==1)
    {
        setHeart(<ion-icon onClick={incrementar} class="aloha1" name="heart-outline"></ion-icon>)
        contador=0
    } 
    else
    {
        setHeart(<ion-icon onClick={incrementar} class="aloha" name="heart"></ion-icon>)
        contador=1
    }
}
    
        
    
}