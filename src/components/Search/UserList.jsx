import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const UserList = ({ results }) =>
  results.length > 0 ? (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
          <TableHeaderColumn>Website</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {results.map(user => (
          <TableRow key={user.id}>
            <TableRowColumn>{user.id}</TableRowColumn>
            <TableRowColumn>{user.name}</TableRowColumn>
            <TableRowColumn>{user.email}</TableRowColumn>
            <TableRowColumn>{user.phone}</TableRowColumn>
            <TableRowColumn>{user.website}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : null;
UserList.PropTypes = {
  results: PropTypes.array.isRequired
};
export default UserList;
