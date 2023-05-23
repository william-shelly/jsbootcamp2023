import Card from './Card'

function CardList(props) {
  return (
    <div className="mt-10 columns-1">
      {props.cards.map((card, index) =>(
        <Card key={index} {...card} />
      ))}
    </div>
  )
}

export default CardList
