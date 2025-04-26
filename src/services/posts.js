import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const postApi = createApi({
    reducerPath : 'postApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints : (builder)=>({
        getAllPosts : builder.query({
            query: ()=>({
                url:'posts',
                method : 'GET'
                
            })
            
        }),
        getPostById : builder.query({
            query: (id)=>{
                console.log(id)
               return {
                url : `posts/${id}`,
                method : 'GET'
               }
            }
        }),getDataByLimit : builder.query({
            query: (num)=>{
                console.log(num)
               return {
                url : `posts?_limit=${num}`,
                method : 'GET'
               }
            }
        }),
        deletePost : builder.mutation({
            query: (id)=>{
                return {
                    url : `posts/${id}`,
                    method : 'DELETE'
                }
            }
        })
    })
      
})
export const {useGetAllPostsQuery,useGetPostByIdQuery,useGetDataByLimitQuery,
useDeletePostMutation
} = postApi