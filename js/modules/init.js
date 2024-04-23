async function loadJSON() {
    try{
        const response = await fetch('../data/employees.json')
        const employees = await response.json()
        return employees
    } catch (err) {
        console.log(err)
    }
}

export default loadJSON