function NavBar(props) {
  const setNewActiveCategory = (index) => {
    props.setNewActiveCategory(index)
  }

  const liStyle =
    'p-4 inline bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-pointer'

  return (
    <ul className='flex justify-center mb-0 border-b-4 list-reset'>
      <li
        className={
          liStyle +
          (props.activeCategory === '' || props.activeCategory === undefined
            ? ' bg-grey-dark'
            : ' bg-grey-lighter')
        }
        onClick={() => setNewActiveCategory('')}>
        All
      </li>
      {props.categories 
      ? props.categories.map((value,index) => {
          return (
            <li
              className={
                liStyle +
                (props.activeCategory === index
                  ? ' bg-grey-dark'
                  : ' bg-grey-lighter')
              }
              key={index}
              onClick={() => setNewActiveCategory(index)}>
            {value}
            </li>
            )
      })
      : '<li>No Categories</li>'}
      <li
        className={liStyle}
        onClick={() => props.showAddCategory()}>
          ➕
      </li>
    </ul>
  )
}

export default NavBar
