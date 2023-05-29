import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './components/Layouts';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Content = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            console.log(route.layout);
                            Layout = route.layout;
                        }
                        return <Route key={index} path={route.path} element={<Layout>{<Content></Content>}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
