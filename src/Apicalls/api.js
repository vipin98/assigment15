import axios from 'axios';

export const getBackendData = async () =>{
    const result = await axios.get("https://5f676cf338ce8700163985fd.mockapi.io/Admin")
    .then(response => {
        return response.data;
    })
    .catch(err =>{
        console.log("call Failed!!");
    })
    return result;
}
// export const getTopicData = async () =>{
   
//     const Selecteduser = this.props.match.params.topicId
//     const result = await axios.get(`https://5f676cf338ce8700163985fd.mockapi.io/Admin/topicsDetailsPage/${Selecteduser}`)
//     .then(response => {
//         return response.data; 

//     })
//     .catch(err =>{
//         console.log("call Failed!!");
//     })
//     return result;
// }