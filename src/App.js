import { Counter } from './features/counter/counter';
import Coin from './features/coin/Coin';
import './App.css';
import {useDeletePostMutation} from './services/posts';



function App() {
// const response = useGetAllPostsQuery()
// const response = useGetPostByIdQuery(11 )
// const response = useGetDataByLimitQuery(21 )
const res = useDeletePostMutation()
console.log(res)
  // if(response.isLoading)return <div>loading...</div>
  // if(response.isError)return <h1>An error Occurs</h1>
  return (
    <div className="App">
      <Counter />
      <Coin />
      {/* {response.data.map((post)=>{
        return (
          <div> 
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
            <hr></hr>
            </div>
        )
        
      }
     
      )} */}

      {/* <div>
        <h2>
          {response.data.id} {response.data.title}
        </h2>
        <p>{response.data.body}</p>
        <hr></hr>
      </div> */}
    </div>
  );
  }
 



export default App;
