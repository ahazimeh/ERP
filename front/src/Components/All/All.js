import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Table from "../Table/Table";
import Contactus from "../Contactus";
import Account from "../Account";
import "./All.css";
import ManageAdmins from "../ManageAdmins/ManageAdmins";
import ManageEmployees from "../ManageEmployees/ManageEmployees";
import Projects from "../Projects/Projects";
import Role from "../Role/Role";
import Graph from "../Graph/Graph";
import Kpis from "../Kpis/Kpis";
import KpisEmployee from "../Kpis/KpisEmployee";
import Kpi_level from "../Kpis/Kpi_level";
import Teams from "../Teams/Teams";
import Manage_team_Members from "../Teams/Manage_team_Members";
import Manage_team_Projects from "../Teams/Manage_team_Projects.js";
import TeamRoles from "../Teams/TeamRoles.js";
import Login from "../Login/Login";
import AutoComplete from "../AutoComplete/AutoComplete";
import Home from "../Home/Home";
import KpiReport from "../Reports/KpiReport/KpiReport";
import EmployeeProjectsReport from "../Reports/EmployeeProjectsReport/EmployeeProjectsReport";
import Profile from "../Profile/Profile";
import Design from "../Design/Design";

var navState;
var compSize;
class All extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: "",
      resize: "",
      title: "Dashboard",
    };
    this.title = this.title.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", (event) => {
      this.setState({ resize: "" });
    });
  }
  title(e) {
    // this.props.title("hi");
    // this.setState({ title: e });

    this.props.title(e);
  }
  render() {
    var navSize;
    var widthScreen;
    var allWidth;
    if (this.props.tuggle == 0) {
      navSize = 50;

      widthScreen = "calc(100% - 100px)";
      allWidth = "allWidthClose";
    } else {
      navSize = 200;
      widthScreen = "calc(100% - 250px)";
      allWidth = "allWidthOpen";
    }
    compSize = window.innerWidth - navSize;
    compSize -= 60;

    return (
      // style={{ width: "1170px", marginLeft: navSize + 30 }}

      <div className={"location screenWidth " + allWidth}>
        <Switch>
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/account" component={Account} />
          <Route width={compSize} exact path="/table" component={Table} />
          <Route
            exact
            path="/Dashboard"
            render={(props) => <Home {...props} title={this.title} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} title={this.title} />}
          />

          <Route
            exact
            path="/manageAdmins"
            render={(props) => <ManageAdmins {...props} title={this.title} />}
          />
          <Route
            exact
            path="/manageEmployees"
            render={(props) => (
              <ManageEmployees {...props} title={this.title} />
            )}
          />
          <Route
            exact
            path="/graph"
            render={(props) => <Graph {...props} title={this.title} />}
          />
          <Route
            exact
            path="/Kpis"
            render={(props) => <Kpis {...props} title={this.title} />}
          />
          <Route
            exact
            path="/KpisEmployee"
            render={(props) => <KpisEmployee {...props} title={this.title} />}
          />
          <Route
            exact
            path="/Kpi_level"
            render={(props) => <Kpi_level {...props} title={this.title} />}
          />
          <Route
            exact
            path="/Teams"
            render={(props) => <Teams {...props} title={this.title} />}
          />
          <Route
            exact
            path="/manage_team_members"
            render={(props) => (
              <Manage_team_Members {...props} title={this.title} />
            )}
          />
          <Route
            exact
            path="/manage_team_projects"
            render={(props) => (
              <Manage_team_Projects {...props} title={this.title} />
            )}
          />
          <Route
            exact
            path="/team_roles"
            render={(props) => <TeamRoles {...props} title={this.title} />}
          />
          <Route
            exact
            path="/autocomplete"
            render={(props) => <AutoComplete {...props} title={this.title} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} title={this.title} />}
          />
          <Route
            exact
            path="/Projects"
            render={(props) => <Projects {...props} title={this.title} />}
          />
          {/* <Route width={compSize} exact path="/Projects" component={Projects} /> */}
          <Route
            exact
            path="/Roles"
            render={(props) => <Role {...props} title={this.title} />}
          />
          <Route
            exact
            path="/KpiReport"
            render={(props) => <KpiReport {...props} title={this.title} />}
          />
          <Route
            exact
            path="/EmployeeProjectsReport"
            render={(props) => (
              <EmployeeProjectsReport {...props} title={this.title} />
            )}
          />
          {/* <Route width={compSize} exact path="/Roles" component={Role} /> */}

          <Route width={compSize} exact path="/Projects" component={Projects} />
          <Route width={compSize} exact path="/Roles" component={Role} />
          <Route width={compSize} exact path="/Design" component={Design} />
        </Switch>
      </div>
    );
  }
}

export default All;
