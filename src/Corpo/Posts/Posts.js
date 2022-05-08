import Post from './Post'
export default function Posts (){
    const post=[
        <Post imagem="assets/img/meowed.svg" texto="meowed" imagempost="assets/img/gato-telefone.svg" imagemcomentarios="assets/img/respondeai.svg" curtidopor="respondeai" eoutras="101.523" />,
        <Post imagem="assets/img/barked.svg" texto="barked" imagempost="assets/img/dog.svg" imagemcomentarios="assets/img/adorable_animals.svg" curtidopor="radorable_animals" eoutras="99.159" />,
        <Post imagem="https://scontent.fjpa11-1.fna.fbcdn.net/v/t1.6435-9/40645535_1819632021490223_7953910464436502528_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeEN9txg4F55Bvt4EppjZeVMGoEJVlEy6fsagQlWUTLp-_kMX7RwEThug6wMvtkYtCE&_nc_ohc=lFXzvwVHza8AX_wSq-L&_nc_ht=scontent.fjpa11-1.fna&oh=00_AT-yC_7jA5Yzu4PiL97ZgFoHoRwz9qEVXYRk075AZGhHlA&oe=629D909A" texto="lindona" imagempost="https://scontent.fjpa11-1.fna.fbcdn.net/v/t1.6435-9/40645535_1819632021490223_7953910464436502528_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeEN9txg4F55Bvt4EppjZeVMGoEJVlEy6fsagQlWUTLp-_kMX7RwEThug6wMvtkYtCE&_nc_ohc=lFXzvwVHza8AX_wSq-L&_nc_ht=scontent.fjpa11-1.fna&oh=00_AT-yC_7jA5Yzu4PiL97ZgFoHoRwz9qEVXYRk075AZGhHlA&oe=629D909A" imagemcomentarios="assets/img/adorable_animals.svg" curtidopor="radorable_animals" eoutras="450.639" />
        ]
       
    return (
    <div class="posts">
       {post.map(post1 => <div>{post1}</div>)}
    </div>
    )
}