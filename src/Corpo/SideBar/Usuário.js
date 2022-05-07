export default function Usuário (props) {
    return (
    <div class="usuario">
    <img src={props.imagem}/>
    <div class="texto">
    <strong>{props.titulo}</strong>
    {props.texto}
    </div>
</div>
    )
}