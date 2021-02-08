import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Sidebar(){
    return (
<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar"style={{
    width: 200
}}>
		<ul class="nav menu">
			<li class="active"style={{textAlign:'left'}}><Link to="/demo"><em class="fa fa-dashboard">&nbsp;</em> Dashboard</Link></li>
			<li><Link to="/class"><em class="fa fa-calendar">&nbsp;</em> Class</Link></li>
			<li><Link to="/"><em class="fa fa-bar-chart">&nbsp;</em> Query</Link></li>
			<li><Link to="/quiz"><em class="fa fa-toggle-off">&nbsp;</em> Quiz</Link></li>
			<li><Link to="/applyjobs"><em class="fa fa-clone">&nbsp;</em>Apply Jobs</Link></li>
			{/* <li class="parent "><a data-toggle="collapse" href="#sub-item-1">
				<em class="fa fa-navicon">&nbsp;</em> Multilevel <span data-toggle="collapse" href="#sub-item-1" class="icon pull-right"><em class="fa fa-plus"></em></span>
				</a>
				<ul class="children collapse" id="sub-item-1">
					<li><a class="" href="#">
						<span class="fa fa-arrow-right">&nbsp;</span> Sub Item 1
					</a></li>
					<li><a class="" href="#">
						<span class="fa fa-arrow-right">&nbsp;</span> Sub Item 2
					</a></li>
					<li><a class="" href="#">
						<span class="fa fa-arrow-right">&nbsp;</span> Sub Item 3
					</a></li>
				</ul>
			</li>
			<li><a href="login.html"><em class="fa fa-power-off">&nbsp;</em> Logout</a></li> */}
		</ul>
	</div>
    )
        }
        export default Sidebar;