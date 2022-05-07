import Story from "./Story"
export default function Stories (){
    const story=[
    <Story imagem="assets/img/9gag.svg" texto="9gag" />,
    <Story imagem="assets/img/meowed.svg" texto="meowed" />,
    <Story imagem="assets/img/barked.svg" texto="barked" />,
    <Story imagem="assets/img/nathanwpylestrangeplanet.svg" texto="nathanwpylestrangeplanet" />,
    <Story imagem="assets/img/wawawicomics.svg" texto="wawawicomics" />,
    <Story imagem="assets/img/respondeai.svg" texto="respondeai" />,
    <Story imagem="assets/img/filomoderna.svg" texto="filomoderna" />,
    <Story imagem="assets/img/memeriagourmet.svg" texto="memeriagourmet" />
    ]
    const stories = story.map(story1 => <div>{story1}</div>);
    return (
        <div class="stories">
            {stories}   
                
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
               
            </div> 
    )
}