/* eslint react/prop-types: 0 */
/*eslint no-unused-vars: 0 */

import React from "react";

import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
} from "@material-ui/core";

import DataTable from "mui-datatables";
import TableToolBar from "../../components/common/TableToolBar";

const origData = [
  ["Supply Chain", "PFNA", "vnet-pfna-eastus2-001", true],
  ["Logistics", "PFNA", "vnet-pfna-eastus2-002", true],
  ["Human Resources", "PFNA", "vnet-pfna-eastus2-003", false],
  ["Finance", "PFNA", "vnet-pfna-eastus2-004", false],
  ["Planning", "PFNA", "vnet-pfna-eastus2-005", false],
  ["Supply Chain", "PBNA", "vnet-pbna-southcentralus2-001", false],
  ["Logistics", "PBNA", "vnet-pbna-southcentralus2-002", true],
  ["Human Resources", "PBNA", "vnet-pbna-southcentralus2-003", true],
  ["Finance", "PBNA", "vnet-pbna-southcentralus2-004", true],
  ["Planning", "PBNA", "vnet-pbna-southcentralus2-005", true],
  ["Supply Chain", "AMESA", "vnet-pfna-westindia-001", true],
  ["Logistics", "AMESA", "vnet-pfna-westindia-002", true],
  ["Human Resources", "AMESA", "vnet-pfna-westindia-003", false],
  ["Finance", "AMESA", "vnet-pfna-westindia-004", true],
  ["Planning", "AMESA", "vnet-pfna-westindia-005", true],
];

const BusinessUnit = (props) => {
  const [counter, setCounter] = React.useState(0);
  const ADD_TEXT = "Add";
  const CANCEL_TEXT = "Cancel";

  //const onClick = (event) => {};

  const [data, setData] = React.useState(origData);
  const [rowsSelected, setrowsSelected] = React.useState({});
  const [openAddDialog, setOpenAddDialog] = React.useState(false);

  const handleAddDialogOpen = () => {
    setOpenAddDialog(true);
  };

  const handleAddDialogClose = (event) => {
    setOpenAddDialog(false);

    if (event.target.innerText.toUpperCase() === ADD_TEXT.toUpperCase()) {
      props.NotificationEvent("Row added to Business Unit" + counter);
      event.preventDefault();
      setCounter(counter + 1);
    }
  };

  const columns = [
    {
      name: "Name",
      options: {
        filter: false,
      },
    },
    {
      name: "Organization",
      options: {
        filter: false,
      },
    },
    {
      name: "VNet",
      options: {
        filter: false,
      },
    },

    {
      name: "Status",
      options: {
        filter: true,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <FormControlLabel
              label={value ? "Yes" : "No"}
              value={value ? "Yes" : "No"}
              control={
                <Switch
                  color="primary"
                  checked={value}
                  value={value ? "Yes" : "No"}
                />
              }
              onChange={(event) => {
                updateValue(event.target.value === "Yes" ? false : true);
                //console.log(event);
              }}
            />
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    selectableRows: "multiple",
    selectableRowsOnClick: true,
    //selectableRowsHideCheckboxes: this.state.selectableRowsHideCheckboxes,
    filterType: "dropdown",
    responsive: "vertical",
    rowsPerPage: 10,
    //rowsSelected: this.state.rowsSelected,
    onRowSelectionChange: (rowsSelectedData, allRows, rowsSelected) => {
      //console.log(rowsSelectedData, allRows, rowsSelected);
      setrowsSelected(rowsSelected);
      //this.setState({ rowsSelected: rowsSelected });
    },
    onRowsDelete: (rowsDeleted, newData) => {
      //console.log("rowsDeleted");
      //console.dir(rowsDeleted);
      //console.dir(newData);
      if (
        rowsDeleted &&
        rowsDeleted.data &&
        rowsDeleted.data[0] &&
        rowsDeleted.data[0].dataIndex === 0
      ) {
        window.alert("Can't delete this!");
        return false;
      }
      setData(newData);
      setrowsSelected({});
      // this.setState({
      //   data: newData,
      //   rowsSelected: [],
      // });
      //console.log(rowsDeleted, "were deleted!");
    },
    onChangePage: (numberRows) => {
      //console.log(numberRows);
    },
    onSearchChange: (searchText) => {
      //console.log(searchText);
    },
    onColumnSortChange: (column, direction) => {
      //console.log(column, direction);
    },
    onViewColumnsChange: (column, action) => {
      //console.log(column, action);
    },
    onFilterChange: (column, filters) => {
      //console.log(column, filters);
    },
    onCellClick: (cellData, cellMeta) => {
      //console.log(cellData, cellMeta);
    },
    onRowClick: (rowData, rowState) => {
      //console.log(rowData, rowState);
    },
    isRowSelectable: (dataIndex, selectedRows) => {
      //console.log("Data Index", dataIndex);
      //console.log("selectedRows", selectedRows);
      return true;
      //prevents selection of any additional row after the third
      // if (
      //   selectedRows.data.length > 2 &&
      //   selectedRows.data.filter((d) => d.dataIndex === dataIndex).length === 0
      // )
      //   return false;
      // //prevents selection of row with title "Attorney"
      // return data[dataIndex][1] != "Attorney";
    },
    selectableRowsHeader: false,
    // eslint-disable-next-line react/display-name
    customToolbar: () => {
      // This is for the Add button on the table
      return <TableToolBar onClick={handleAddDialogOpen} />;
    },
    // eslint-disable-next-line react/display-name
    setTableProps: () => ({
      // This is to add dense table
      padding: "none", //state.denseTable ? "none" : "default",
      size: "small", //state.denseTable ? "small" : "medium"
    }),
  };

  //console.log(rowsSelected);
  return (
    <>
      <DataTable
        title={"Business Units"}
        data={data}
        columns={columns}
        options={options}
      />
      <Dialog
        open={openAddDialog}
        onClose={handleAddDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Business Unit</DialogTitle>
        <DialogContent>
          <DialogContentText>Add new business units here..</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="organization"
            label="Organization"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="vnet"
            label="Virtual Network"
            type="text"
            fullWidth
          />
          <InputLabel>Active</InputLabel>
          <Switch
            color="primary"
            checked={false}
            value={false}
            label="Active"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDialogClose} color="secondary">
            {CANCEL_TEXT}
          </Button>
          <Button onClick={handleAddDialogClose} color="primary">
            {ADD_TEXT}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BusinessUnit;
/*eslint no-unused-vars: 0 */
