import Header from './components/Header'
import Timeline from './components/Timeline'
import Margin from './components/Margin'
import Introduction from './components/Introduction'
import VerticalTimeline from './components/VerticalTimeline'

const App = () => 
{
  return (
    <div className='container min-w-full flex flex-col items-center bg-black bg-opacity-90
                    p-1 pb-4'>
      <Header />
      <Timeline /> {/* navbar-like */}
      <Margin setHeight={ 40 }/>
      <Introduction />
      <Margin setHeight={ 40 }/>
      <VerticalTimeline />
    </div>
  )
}

export default App
