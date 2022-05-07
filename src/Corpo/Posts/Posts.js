import Post from './Post'
export default function Posts (){
    const post=[
        <Post imagem="assets/img/meowed.svg" texto="meowed" imagempost="assets/img/gato-telefone.svg" imagemcomentarios="assets/img/respondeai.svg" curtidopor="respondeai" eoutras="101.523" />,
        <Post imagem="assets/img/barked.svg" texto="barked" imagempost="assets/img/dog.svg" imagemcomentarios="assets/img/adorable_animals.svg" curtidopor="radorable_animals" eoutras="99.159" />
        ]
       
    return (
    <div class="posts">
       {post.map(post1 => <div>{post1}</div>)}
    </div>
    )
}