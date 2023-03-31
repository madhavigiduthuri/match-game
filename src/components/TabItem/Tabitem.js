import './styles.css'

const TabItem = props => {
  const {tabName, selectedTab, tabId, handleTabBtn} = props
  return (
    <li className={
          tabId === selectedTab 
            ? 'tab-selected-container' 
            : 'tab-container'
        }
    >
      <button
        type="button"
        onClick={() => handleTabBtn(tabId)}
        className={
          tabId === selectedTab
            ?  'tab-selected'
            :  'tab'}
        >
          {tabName}
      </button>
    </li>
  )
}

export default TabItem