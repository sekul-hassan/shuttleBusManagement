import React from 'react';
import {Container, Row} from "react-bootstrap";
import CustomTable from "./CustomTable";
import UserTable from "./UserTable";

function Profile(props) {

    const tableHead = [
        "SL","TO","DESTINATION","CARD NUMBER","COST TK"
    ]

    const tableData = [
        {id:1,to:"abc",destination:"xyz",card:"0193837484",cost:10},
        {id:2,to:"abc",destination:"xyz",card:"0193837484",cost:10},
        {id:3,to:"abc",destination:"xyz",card:"0193837484",cost:10},
        {id:4,to:"abc",destination:"xyz",card:"0193837484",cost:10},
        {id:5,to:"abc",destination:"xyz",card:"0193837484",cost:10},
        {id:6,to:"abc",destination:"xyz",card:"0193837484",cost:10},
        {id:7,to:"abc",destination:"xyz",card:"0193837484",cost:10},
    ]
    const tableCaption = "Your total transaction";
    const userTableCaption = "";
    const userHead = [
        "Name","E-main","Department","Batch","Hall"
    ]
    const userData = [
        "xyx","xyx","xyx","xyx","xyx"
    ]
    return (
        <Container fluid="true">
            <Row className="mx-0 profileInfo">
                <UserTable tableCation={userTableCaption} userHead={userHead} userData={userData}/>
                <CustomTable tableHead={tableHead} tableData={tableData} tableCation={tableCaption}/>
            </Row>
        </Container>
    );
}

export default Profile;
