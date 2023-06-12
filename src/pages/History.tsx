import {Fragment, useEffect, useState} from "react";
import {Grid, Typography} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

const History = () => {

    const [rows, setRows] = useState<Array<object>>([]);

    const columns: GridColDef[] = [
        {
            field: 'time',
            headerName: 'Buchungszeit'
        },
        {
            field: 'total',
            headerName: 'Total'
        },
        {
            field: 'given',
            headerName: 'Gegeben'
        }
    ];

    useEffect(() => {
        const value = localStorage.getItem("mcalc-sales") || "[]";
        const sales: Array<{time: string, given: number, total: number}> = JSON.parse(value);
        setRows( sales.reverse().map((sale): {time: string, given: string, total: string} => { return  {
            time: new Date(sale.time).toLocaleTimeString("de-DE"),
            given: `${sale.given.toFixed(2)} EUR`,
            total: `${sale.total.toFixed(2)} EUR`
        }}));
    }, [])

    return (
        <Fragment>
            <Grid container spacing={0} padding={1} justifyContent={"center"}>
                <Grid item container spacing={1} padding={1} md={6}>
                    <Grid item xs={12}>
                        <Typography variant={"h5"}>Verlauf</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <DataGrid autoHeight={true} density={"compact"}
                                  getRowId={v => v.time}
                                  rows={rows}
                                  columns={columns}
                                  initialState={{
                                      pagination: {
                                          paginationModel: {
                                              pageSize: 10,
                                          },
                                      },
                                  }}
                                  pageSizeOptions={[10]}
                                  checkboxSelection={false}
                                  disableRowSelectionOnClick={true}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default History;