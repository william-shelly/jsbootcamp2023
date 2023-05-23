import { useState, useEffect } from 'react'
import AddBill from './components/AddBill'
import AddCategory from './components/AddCategory'
import BillsTable from './components/BillsTable'
import NavBar from './components/NavBar'

function App() {

  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(false)
  const [shouldShowAddBill, setShouldShowAddBill] = useState(false)
  const [categories, setCategories] = useState([])
  const [bills, setBills] = useState([])

  useEffect(() => {
    const categoriesInLocalStorage = JSON.parse(
      localStorage.getItem(categories)
    )

    const billsInLocalStorage = JSON.parse(
      localStorage.getItem(bills)
    )

    setCategories(categoriesInLocalStorage)
    setBills(billsInLocalStorage)

    if (!categoriesInLocalStorage) {
      setShouldShowAddCategory(true)
    }

    if (!billsInLocalStorage) {
      setShouldShowAddBill(true)
    }

  }, [])

  const showAddCategory = () => {
    setShouldShowAddCategory(true)
  }
  const showAddBill = () => {
    setShouldShowAddBill(true)
  }

  const addCategory = (category) => {
    const updatedCategories = [...(categories || []), category]
    setCategories(updatedCategories)
    setShouldShowAddCategory(false)
    localStorage.setItem(categories, JSON.stringify(updatedCategories))
  }

  const addBill = (amount, category, date) => {
    const bill = {amount, category, date}
    const updatedBills = [...(bills || []), bill]
    setBills(updatedBills)
    setShouldShowAddBill(false)
    localStorage.setItem(bills, JSON.stringify(updatedBills))
  }

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="column-1">
          {shouldShowAddCategory ? (
            <div>
              <AddCategory onSubmit={addCategory} />
            </div>
          ) : shouldShowAddBill ? (
            <AddBill onSubmit={addBill} categories={categories} />
          ) : (
            <div>
              <NavBar categories={categories} showAddCategory={showAddCategory} />
              <div className="container flex">
                <div className="w-full">
                  <BillsTable bills={bills} showAddBill={showAddBill} />
                </div>
                {/* 
                <div className="w-1/2">
                  <Chart />
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
