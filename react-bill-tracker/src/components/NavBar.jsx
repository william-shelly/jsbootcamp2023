function NavBar(props) {
  return (
    <ul>
      {props.categories 
      ? props.categories.map((value,index) => {
          return <li key={index}>{value}</li>
      })
      : '<li>No Categories</li>'}
      <li onClick={() => props.showAddCategory()}>➕</li>
    </ul>
  )
}

export default NavBar
