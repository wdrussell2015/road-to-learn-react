import * as React from 'react';



const App = () => {
  const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author:'Jordan Walker',
    num_comments:3,
    points:4,
    objectID:0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author:'Dan Abramov, Andrew Clark',
    num_comments:2,
    points:5,
    objectID:1,
  },
  ];
  const [searchTerm, setSearchTerm] = React.useState('React');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  
  const searchedStories = stories.filter(function(story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search search={searchTerm} onSearch={handleSearch}/>
      
      <hr />
      
      <List list={searchedStories} />
    </div>
  );
}

const Search = ({search, onSearch}) => {
  
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" value={search} onChange={onSearch}/>
    </div>
  );
}

const List = ({list}) => {
  return(
    <ul>
        {list.map((item) => {
          return(
            <Item key={item.objectID} item={item}/>
          );
        })}
      </ul>
  );
}

const Item = ({item}) => {
  return(
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
}

export default App;
