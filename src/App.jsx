import React from 'react';
import './App.css';
import 'flexboxgrid/dist/flexboxgrid.css'
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavMenu } from './components/layout';
import { Recipe } from './components/pages/Recipe';
import { CreateRecipe } from './components/pages/Create';
import { ThemeProvider } from 'styled-components';
import { Home } from './components/pages/Home';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={{
        background: '#fcfdff',
        headline: '#242c3b',
        subHeadline: '#1b1425',
        paragraph: '#1b1425',
        button: '#2f66cc',
        buttonText: '#fcfdff',
        primary: '#1985a1',
        secondary: '#4c5c68',
        tertiary: '#dcdcdd',
        monoVeryLight: '#f0f0f0'
      }}>
        <Body>
          <BrowserRouter>
            <NavMenu />
            <Wrapper className='container-fluid'>
              <Switch>
                <Route path='/create'>
                  <CreateRecipe />
                </Route>
                <Route path='/recipe/:id'>
                  <Recipe />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>

            </Wrapper>
          </BrowserRouter>
        </Body>
      </ThemeProvider>
    </ApolloProvider>

  );
}

const Body = styled.div`
  background-color: ${props => props.theme.background};
`

const Wrapper = styled.div`
  max-width: 1000px;
`

export default App;
