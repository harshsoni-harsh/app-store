// Write your code here
import './index.css'

const App = props => {
  const {obj, selected, changeTab} = props
  const {displayText, tabId} = obj
  const className = selected ? 'active-tab-btn' : 'tab-btn'
  return (
    <li>
      <button
        className={className}
        type="button"
        onClick={() => {
          changeTab(tabId)
        }}
      >
        {displayText}
      </button>
    </li>
  )
}

export default App
