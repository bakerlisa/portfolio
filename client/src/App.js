import { Switch,Route,Link,Redirect, useHistory, BrowserRouter } from 'react-router-dom';
import './App.scss';

import Index from '../../client/src/components/Index';
import Blog from '../../client/src/components/Blog';
import AddBlog from '../../client/src/components/AddBlog';
import EditBlog from '../../client/src/components/EditBlog';
import Footer from '../../client/src/views/Footer';
import Resume from '../../client/src/components/Resume';

function App() {

  return (
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/about">

          </Route>
        </Switch>

        <Switch>
          <Route exact path="/skills">

          </Route>
        </Switch>

        <Switch>
          <Route exact path="/projects">

          </Route>
        </Switch>

        <Switch>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/edit-blog">
            <EditBlog />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/add-blog">
            <AddBlog />
            <Footer />
          </Route>
        </Switch>

        
      </BrowserRouter>

  );
}

export default App;
