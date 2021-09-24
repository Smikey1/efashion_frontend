import React, { Component } from 'react'
import { Button, Container } from '@material-ui/core';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import axios from "axios";



const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class CategoryFragment extends Component {
    state = {
        myCategory: [],
        columns: [
            { title: 'Index', field: 'index', type: 'numeric' },
            { title: 'Category', field: 'name', editable: 'onAdd'},
            {
                title: 'Icon', field: 'icon',
                editComponent: props => (
                    <>
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            value={props.value}
                            onChange={e => {
                                if(e.target.files && e.target.files[0]){
                                    this.setState({
                                        image: e.target.files[0]
                                    })
                                    props.onChange(e.target.value)
                                    e.target.value=null
                                }
                                
                            }}
                            hidden
                            name="image"
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            {
                                this.state.image || props.value? (
                                    <img src={this.state.image ? rowData.imageUrl : props.value} style={{ width: 40, height: 40 }} />
                                ):(
                                <Button variant="contained" color="primary" component="span">
                                    Add Image
                                </Button>
                                )
                            }
                            
                        </label>
                    </>
                ),
                 render: (rowData) => <img src={rowData.imageUrl} style={{ width: 40,height:40}} />, 
                
            }
        ],

        data: [
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            
        ]
    }

    componentDidMount() {
        axios.get("http://localhost:90/category/get")
            .then((res) => {

                this.setState({
                    myCategory: res.data.data,
                    data: res.data.data
                })
            })

    }

    render() {
        return (
            <div>
                <Container maxWidth="md" fixed>
                    <MaterialTable
                        icons={tableIcons}
                        title="Disable Field Editable Preview"
                        columns={this.state.columns}
                        data={this.state.data}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve)=>{
                                    
                                        if (newData.index && newData.categoryName && newData.categoryIcon) {
                                            // add image
                                        } else {
                                            resolve()
                                            this.setState({
                                                image: null
                                            })
                                        }
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        this.setState((prevState) => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData
                                            return { ...prevState, data }
                                        })
                                    }, 600)
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        this.setState((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data }
                                        })
                                    }, 600)
                                }),
                        }}
                    />
                </Container>

            </div>
        )
    }
}

export default CategoryFragment
