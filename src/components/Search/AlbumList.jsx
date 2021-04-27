import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const AlbumList = ({ results }) =>
  results.length > 0 ? (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>User Id</TableHeaderColumn>
          <TableHeaderColumn>Title</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {results.map(album => (
          <TableRow key={album.id}>
            <TableRowColumn>{album.id}</TableRowColumn>
            <TableRowColumn>{album.userId}</TableRowColumn>
            <TableRowColumn>{album.title}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : null;

AlbumList.PropTypes = {
  results: PropTypes.array.isRequired
};
export default AlbumList;
