import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const [items, setItems] = useState(props.rows);

  const handleDelete = (id: number) => {
    let remainingUsers = items.filter((item) => item.id !== id);
    setItems(remainingUsers);
  };

  const actionColumn: GridColDef = {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="actions">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="./view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="./delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={items}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
