import './App.css'
import { Layout } from './components/Layout/Layout'
import "tailwindcss/tailwind.css"
import { useUser } from './api/user'

function App() {
  const userQuery = useUser(1)

  if (userQuery.isLoading) return <div>Loading...</div>
  if (userQuery.error) {
    return <div>{userQuery.error.message}</div>
  }
  return (
    <Layout>
    
      <h1 className='mt-10'>User name : {userQuery.data?.name}</h1>
      
    </Layout>
  )
}

export default App
