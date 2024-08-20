import MyComponent from './views/mainComponent';
import './App.css'

function App() {
  return (
    <>
      <header>
        <MyComponent />
      </header>
      <div className='flex h-full w-full flex-row overflow-hidden'>
        <div id="sidebar"  className='bg-green-900/30 flex h-full w-64 flex-col justify-start px-4 py-6 overflow-y-auto'>
          hola
        </div>
        <div id="content"  className='bg-green-900/10 flex h-full w-full flex-col justify-start px-4 py-6 overflow-y-auto shadow-inner'>

        </div>
      </div>
            
    </>
  )
}

export default App
