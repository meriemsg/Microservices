import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ApplicationPaths } from "./Constants";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Play Economy</h1>
        <p>
          Welcome to the Play Economy website, a cloud native virtual economy
          system.
        </p>
        <p>To get started, yout can:</p>
        <ul>
          <li>
            Manage the <Link to={ApplicationPaths.CatalogPath}>Catalog</Link>
          </li>
          <li>
            Check a user's{" "}
            <Link to={ApplicationPaths.InventoryPath}>Inventory</Link>
          </li>
        </ul>
      </div>
    );
  }
}
