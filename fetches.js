const api_Key="jxOI3mv1Fk8UBGEbfDxC4gW3ALbydNSA";
const api_Stem=`https://api.nytimes.com/svc/books/v3/lists/current`;
const LIST_NAME="hardcover-fiction";



fetchbooks = (list_Name = LIST_NAME) => {
    let url=`${api_Stem}/${LIST_NAME}.json?api-key=${api_Key}`;
    return fetch(url)
      .then(response=>response.json())
      .then(responseJSON => {
          return responseJSON.results.books;
      })
      .catch(error=>{
          console.error(error);
      });
}

export default {fetchbooks: fetchbooks}