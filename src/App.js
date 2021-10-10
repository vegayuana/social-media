import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ROUTES } from './configs';
import Layout from './components/Layout';
import pages from './pages';
import configureStore from './store/configureStore';
const store = configureStore;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Layout>
              <Route exact path={ROUTES.MAIN()} component={pages.UsersList} />
              <Route exact path={ROUTES.DETAIL_USER()} component={pages.DetailUser} />
              <Route exact path={ROUTES.PHOTOS()} component={pages.Photos} />
            </Layout>
          </Switch>
        </Router>
       </Provider>
    </ThemeProvider>
  );
};
export default App;
