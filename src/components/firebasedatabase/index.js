import StartFirebase from '../firebaseconfig/index';
import React from 'react';
import {ref, onValue, child} from 'firebase/database';
import {Table} from 'react-bootstrap';
import "./index.css"

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state ={
            tableTop: [],
            tableJng: [],
            tableMid: [],
            tableBot: [],
            tableSup: []
        }
    }

    componentDidMount(){
        const refTableTop = ref(db, 'Top');
        const refTableJng = ref(db, 'Jng');
        const refTableMid = ref(db, 'Mid');
        const refTableBot = ref(db, 'Bot');
        const refTableSup = ref(db, 'Sup');
        


        onValue(refTableTop, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName =childSnapshot.key
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableTop: records});
        });

        onValue(refTableJng, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName =childSnapshot.key
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableJng: records});
        });

        onValue(refTableMid, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName =childSnapshot.key
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableMid: records});
        });

        onValue(refTableBot, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName =childSnapshot.key
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableBot: records});
        });

        onValue(refTableSup, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName =childSnapshot.key
                let data = childSnapshot.val();
                records.push({"key": keyName, "data": data});
            });
            this.setState({tableSup: records});
        });

       
    }

    render(){
        return(
            <section>
                <span>Toplane</span>
                <Table style={{
                    background: "042028",
                    color: "white"
                }}>
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Champion</th>
                    <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableTop.map((row, index)=>{
                        return(
                            <tr key={index}>
                            <td>{row.data.Tier}</td>
                            <td>{row.data.Name}</td>
                            <td>{row.data.Difficulty}</td>
                        </tr>
                        )    
                    })}
                </tbody>
            </Table>
            <span>Jungle</span>
            <Table
             style={{
                background: "042028",
                color: "white"
            }}>
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Champion</th>
                    <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableJng.map((row, index)=>{
                        return(
                            <tr key={index}>
                            <td>{row.data.Tier}</td>
                            <td>{row.data.Name}</td>
                            <td>{row.data.Difficulty}</td>
                        </tr>
                        )    
                    })}
                </tbody>
            </Table>
            <span>Midlane</span>
            <Table
             style={{
                background: "042028",
                color: "white"
            }}>
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Champion</th>
                    <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableMid.map((row, index)=>{
                        return(
                            <tr key={index}>
                            <td>{row.data.Tier}</td>
                            <td>{row.data.Name}</td>
                            <td>{row.data.Difficulty}</td>
                        </tr>
                        )    
                    })}
                </tbody>
            </Table>
            <span>Botlane</span>
            <Table
            style={{
                background: "042028",
                color: "white"
            }}>
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Champion</th>
                    <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableBot.map((row, index)=>{
                        return(
                            <tr key={index}>
                            <td>{row.data.Tier}</td>
                            <td>{row.data.Name}</td>
                            <td>{row.data.Difficulty}</td>
                        </tr>
                        )    
                    })}
                </tbody>
            </Table>
            <span>Support</span>
            <Table
            style={{
                background: "042028",
                color: "white"
            }}>
                <thead>
                    <tr>
                    <th>Tier</th>
                    <th>Champion</th>
                    <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableSup.map((row, index)=>{
                        return(
                            <tr key={index}>
                            <td>{row.data.Tier}</td>
                            <td>{row.data.Name}</td>
                            <td>{row.data.Difficulty}</td>
                        </tr>
                        )    
                    })}
                </tbody>
            </Table>
            </section>  
        )
    }
}