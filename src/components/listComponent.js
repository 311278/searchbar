import React from 'react';
import { table } from 'react-bootstrap';

const ListComponent = (props) => {

    const {data: {_id: id, name, gender}, isRecordExist, isLoading} = props

    return (
        <div className="list-component-table">
        {isLoading && (
            <button class="btn btn-primary">
                <span class="spinner-border spinner-border-sm mr-sm-2"></span>
                Fetching Results......
            </button>
        )}
        {isRecordExist && !isLoading &&(
              <div className="alert alert-info">
              <strong>Sorry No Matches found</strong>.
            </div>
        )}
        {id && !isLoading &&(
        <table class="table table-bordered">
        <thead>
          <tr className="list-component-table-destop">
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr className="list-component-table-destop">
            <td>{id}</td>
            <td>{name}</td>
            <td>{gender}</td>
          </tr>
          <tr className="list-component-table-mobile">
            <td ><strong>ID</strong></td>
            <td>{id}</td>
          </tr>
          <tr className="list-component-table-mobile">
            <td><strong>Name</strong></td>
            <td>{name}</td>
          </tr>
          <tr className="list-component-table-mobile">
            <td><strong>Gender</strong></td>
            <td>{gender}</td>
          </tr>
        </tbody>
      </table>
      )}
      </div>
    );
}

export default ListComponent

