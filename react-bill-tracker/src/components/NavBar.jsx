function NavBar(props) {
  return (
    <ul className='flex justify-center mb-0 border-b-4 list-reset'>
      {props.categories 
      ? props.categories.map((value,index) => {
          return (
            <li
              className='inline p-4 font-black uppercase cursor-pointer bg-grey-lighter hover:bg-grey-light'
              key={index}
            >
            {value}
            </li>
            )
      })
      : '<li>No Categories</li>'}
        <li
          className='inline p-4 font-black uppercase cursor-pointer bg-grey-lighter hover:bg-grey-light'
          onClick={() => props.showAddCategory()}>
          ➕
        </li>
    </ul>
  )
}

export default NavBar
