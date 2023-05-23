import { useState, useEffect } from 'react'
import AddBill from './components/AddBill'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'

function App() {

  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false)
  const [categories, setCategories] = useState([])

  // There is something wrong with this useEffect hook
  // It is not working as expected
  // STOPED AT Storing the data

  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem(categories)
    )

    if (categoriesInLocalStorage !== categories) {
      setCategories(categoriesInLocalStorage)
    }

    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true)
    }
  }, [])

  const addCategory = (category) => {
    const updatedCategories = [...(categories || []), category]
    setCategories(updatedCategories)
    setShouldShowAddCategory(false)
    localStorage.setItem(categories, JSON.stringify(updatedCategories))
  }

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="column-1">
          {shouldShowAddCategory ? (
            <div>
              <AddCategory onSubmit={addCategory} />
            </div>
          ) : (
            <div>
              <NavBar categories={categories} showAddCategory={showAddCategory} />
              <BillsTable />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
