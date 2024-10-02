import './App.css'
import Column from './Components/Column/Column'
import Task from './Components/Task/Task'

function App() {

  return (
    <>
      <header>
        <nav className='navbar-container'>
          <a className='navbar-brand' href="https://trello.com">
            <img src="https://www.vectorlogo.zone/logos/trello/trello-official.svg" alt="" />
          </a>
          <a className='navbar-item'>Workspaces</a>
          <a className='navbar-item'>Recent</a>
          <a className='navbar-item'>Started</a>
          <a className='navbar-item'>Templates</a>
          <button id='create-column'>Create Column</button>
        </nav>
      </header>
      <main>
        <section className='column-container'>
          <Column title={'Backlog'}>
            <Task title={'Title of Task'} description={'Task 1'} assigned={'Me'} priority={'High'} deadline={'Today'}></Task>
          </Column>
          <Column title={'To DO'}></Column>
          <Column title={'In Progress'}></Column>
          <Column title={'Blocked'}></Column>
          <Column title={'Done'}></Column>

          <Task title={'Title of Task'} description={'Task 1'} assigned={'Me'} priority={'High'} deadline={'Today'}></Task>

        </section>

      </main>

    
    </>
  )
}

export default App


