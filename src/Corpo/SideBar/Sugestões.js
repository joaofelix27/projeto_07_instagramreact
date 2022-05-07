import Sugestão from "./Sugestão"
export default function Sugestões (){
    const sugestões=[
        <Sugestão imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" seguir="Seguir"/>,
        <Sugestão imagem="assets/img/chibirdart.svg" nome="chibirdart" razao="Segue você" seguir="Seguir"/>,
        <Sugestão imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" razao="Novo no Instagram" seguir="Seguir"/>,
        <Sugestão imagem="assets/img/adorable_animals.svg" nome="adorable_animals" razao="Segue você" seguir="Seguir"/>,
        <Sugestão imagem="assets/img/smallcutecats.svg" nome="smallcutecats" razao="Segue você" seguir="Seguir"/>
    ]
    return (  
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestões.map(sugestao => <div> {sugestao} </div> )}
        </div>
    )
}