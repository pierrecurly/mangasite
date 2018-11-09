import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MangaUpdates from '../manga/manga_updates'
import MangaList from '../manga/manga_list'
import MangaDetail from '../manga/manga_detail'

const MainRoute = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MangaUpdates} />
      <Route exact path='/manga' component={MangaList} />
      <Route exact path='/manga/:id' component={MangaDetail} />
    </Switch>
  </main>
)

export default MainRoute
