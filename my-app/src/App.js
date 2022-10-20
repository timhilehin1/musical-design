
import Dashboard from './Components/Dashboard';
import Searchbar from './Components/SearchBar';
import Sidebar from './Components/Sidebar';
import Navigation from './Components/Navigation';
import NewReleases from './Components/NewReleases';
import Popular from './Components/Popular';
import {HashRouter as Router, Routes,  Switch, Link, Redirect, Route} from 'react-router-dom';
import Album from './Components/Album';
import {Outlet} from 'react-router';



function App() {

    function HomePage(){
        return (
            <>
              <Searchbar/>
              <div className='dashboard-page d-flex gap-5'>
        <Navigation/>
        <Outlet/>
        </div>
        <NewReleases/>
        <Popular/>
            </>
        )
    }


    function WithoutNav(){
        return (
            <>
            <Outlet/>
            </>
        )
    }

    function WithNav(){
        return (
            <>
              <Searchbar/>
              <div className='dashboard-page d-flex gap-5'>
        <Navigation/>
        <Outlet/>
        </div>
            </>
        )
    }




  return (
      <Router>

    <div className="App">

          <Routes>

           <Route element={<HomePage/>}>
           <Route  path="/"  element={<Sidebar/>}/>
            </Route>

            <Route element={<WithNav/>}>
            <Route  path="/Album"  element={<Album/>}/>
            </Route>

    </Routes>

       </div>


</Router>
  );
}

export default App;
  {/* <Searchbar/>
     <div className='dashboard-page d-flex gap-5'>
        <Navigation/>
        <Sidebar/>
      </div>
 <NewReleases/>
 <Popular/> */}
