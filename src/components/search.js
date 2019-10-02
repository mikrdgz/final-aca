import React, { Component } from 'react';
const API = 'https://api.edamam.com/api/food-database/parser?ingr=apple&app_id=a80be76b&app_key=515b81c153ce8fd8518c687922f95767';

class Search extends Component {


state = {
hits: [],
};

componentDidMount() {
fetch(API)
.then(response => response.json())
.then(data => {
console.log('hits', data)
this.setState({ hits: data.hits })
});
}

render() {
console.log(this.state);
const { hits } = this.state;
return (
<ul>
{hits.map(hit =>
<li key={hit.objectID}>
<a href={hit.url}>{hit.title}</a>
</li>
)}
</ul>
);
}


}
export default Search;