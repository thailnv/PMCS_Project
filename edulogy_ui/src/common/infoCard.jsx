
function CardInfor(props){


    return(
        <div class ="card_container" style={{borderLeft:`5px solid ${props.Color}`}}>
            <div class = "card_title">
                <h2>{props.Title}</h2>
                <div class="card_information">
                {props.Infor}
                </div> 
            </div>
            <div class = "card_logo" style={{color:props.Color}}>{props.Logo}</div>
        </div>
    )
}

export default CardInfor