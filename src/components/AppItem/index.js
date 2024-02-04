// Write your code here
import './index.css'

const App = props => {
  const {obj} = props
  const {imageUrl, appName} = obj
  return (
    <li className="app">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default App
